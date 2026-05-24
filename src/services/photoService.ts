import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';
import { Photo, PhotoLocation, SceneType } from '../types';
import { detectScene, detectSceneWithConfidence } from './sceneDetector';
import { reverseGeocode as amapReverseGeocode } from './amapService';

export interface PickedPhotoData {
  uri: string;
  width: number;
  height: number;
  exif?: {
    GPSLatitude?: number;
    GPSLongitude?: number;
    GPSLatitudeRef?: string;
    GPSLongitudeRef?: string;
    DateTimeOriginal?: string;
    DateTime?: string;
    [key: string]: any;
  };
}

// Request permissions and pick photos from gallery
export async function pickPhotos(): Promise<PickedPhotoData[]> {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('需要相册访问权限才能选择照片');
    }
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsMultipleSelection: true,
    quality: 0.8,
    exif: true,
  });

  if (result.canceled || !result.assets) {
    return [];
  }

  const photos: PickedPhotoData[] = [];

  for (const asset of result.assets) {
    let exif = asset.exif || undefined;

    // On web, expo-image-picker may not return EXIF.
    // Try to read EXIF from the file directly.
    if (Platform.OS === 'web' && !exif) {
      exif = await readExifFromWebAsset(asset.uri);
    }

    photos.push({
      uri: asset.uri,
      width: asset.width,
      height: asset.height,
      exif,
    });
  }

  return photos;
}

// Read EXIF from a web image file using fetch + manual parsing
async function readExifFromWebAsset(uri: string): Promise<PickedPhotoData['exif']> {
  try {
    // For data URIs or blob URLs, fetch the file
    const response = await fetch(uri);
    const buffer = await response.arrayBuffer();
    const view = new DataView(buffer);

    // Check JPEG SOI marker
    if (view.getUint16(0) !== 0xFFD8) return undefined;

    let offset = 2;
    while (offset < view.byteLength) {
      const marker = view.getUint16(offset);

      // APP1 marker (EXIF)
      if (marker === 0xFFE1) {
        const exifData = parseExifFromAPP1(view, offset);
        if (exifData) return exifData;
        break;
      }

      // Skip to next marker
      if ((marker & 0xFF00) !== 0xFF00) break;
      const length = view.getUint16(offset + 2);
      offset += 2 + length;
    }
  } catch {}
  return undefined;
}

// Parse EXIF from JPEG APP1 segment
function parseExifFromAPP1(view: DataView, app1Offset: number): PickedPhotoData['exif'] | undefined {
  try {
    const exifHeaderOffset = app1Offset + 4; // skip marker (2) + length (2)
    const exifStr = String.fromCharCode(
      view.getUint8(exifHeaderOffset),
      view.getUint8(exifHeaderOffset + 1),
      view.getUint8(exifHeaderOffset + 2),
      view.getUint8(exifHeaderOffset + 3),
    );
    if (exifStr !== 'Exif') return undefined;

    const tiffOffset = exifHeaderOffset + 6; // skip "Exif\0\0"
    const byteOrder = view.getUint16(tiffOffset);
    const littleEndian = byteOrder === 0x4949;
    const ifdOffset = view.getUint32(tiffOffset + 4, littleEndian);
    const numEntries = view.getUint16(tiffOffset + ifdOffset, littleEndian);

    const result: any = {};
    for (let i = 0; i < numEntries; i++) {
      const entryOffset = tiffOffset + ifdOffset + 2 + i * 12;
      if (entryOffset + 12 > view.byteLength) break;
      const tag = view.getUint16(entryOffset, littleEndian);
      const type = view.getUint16(entryOffset + 2, littleEndian);
      const count = view.getUint32(entryOffset + 4, littleEndian);
      const valueOffset = entryOffset + 8;

      // GPS Latitude Ref (tag 1 = GPSLatitudeRef in IFD GPS which is tag 0x8825, but let's read directly)
      // We need GPS IFD. For simplicity, read known tags from the main IFD
      if (tag === 0x0112) {
        // Orientation
        result.orientation = view.getUint16(valueOffset, littleEndian);
      }
    }

    // Look for GPS IFD (tag 0x8825 in main IFD)
    for (let i = 0; i < numEntries; i++) {
      const entryOffset = tiffOffset + ifdOffset + 2 + i * 12;
      if (entryOffset + 12 > view.byteLength) break;
      const tag = view.getUint16(entryOffset, littleEndian);

      if (tag === 0x8825) {
        // GPS IFD pointer
        const gpsIfdOffset = view.getUint32(entryOffset + 8, littleEndian);
        const gpsNumEntries = view.getUint16(tiffOffset + gpsIfdOffset, littleEndian);
        const gps: any = {};

        for (let j = 0; j < gpsNumEntries; j++) {
          const ge = tiffOffset + gpsIfdOffset + 2 + j * 12;
          if (ge + 12 > view.byteLength) break;
          const gTag = view.getUint16(ge, littleEndian);
          const gType = view.getUint16(ge + 2, littleEndian);
          const gCount = view.getUint32(ge + 4, littleEndian);

          if (gTag === 1) { // GPSLatitudeRef
            gps.GPSLatitudeRef = String.fromCharCode(view.getUint8(ge + 8));
          } else if (gTag === 3) { // GPSLongitudeRef
            gps.GPSLongitudeRef = String.fromCharCode(view.getUint8(ge + 8));
          } else if (gTag === 2 || gTag === 4) { // GPSLatitude or GPSLongitude
            // Type = 5 (Rational), count = 3, value is offset to 3 rationals
            const rationalOffset = tiffOffset + view.getUint32(ge + 8, littleEndian);
            const dms = [];
            for (let k = 0; k < 3; k++) {
              const num = view.getUint32(rationalOffset + k * 8, littleEndian);
              const den = view.getUint32(rationalOffset + k * 8 + 4, littleEndian);
              dms.push(den ? num / den : 0);
            }
            if (gTag === 2) gps.GPSLatitude = dms;
            else gps.GPSLongitude = dms;
          } else if (gTag === 29) { // GPSDatestamp
            // ASCII string
            let dateStr = '';
            for (let c = 0; c < gCount - 1 && c < 10; c++) {
              dateStr += String.fromCharCode(view.getUint8(ge + 8 + c));
            }
            gps.GPSDateStamp = dateStr;
          }
        }

        if (gps.GPSLatitude && gps.GPSLongitude) {
          return gps;
        }
        break;
      }
    }

    // Read DateTime from main IFD
    for (let i = 0; i < numEntries; i++) {
      const entryOffset = tiffOffset + ifdOffset + 2 + i * 12;
      if (entryOffset + 12 > view.byteLength) break;
      const tag = view.getUint16(entryOffset, littleEndian);
      if (tag === 0x9003 || tag === 0x0132) { // DateTimeOriginal or DateTime
        let dateStr = '';
        for (let c = 0; c < 19; c++) {
          dateStr += String.fromCharCode(view.getUint8(entryOffset + 8 + c));
        }
        if (tag === 0x9003) result.DateTimeOriginal = dateStr;
        else result.DateTime = dateStr;
      }
    }

    return Object.keys(result).length > 0 ? result : undefined;
  } catch {
    return undefined;
  }
}

// Take a photo with camera
export async function takePhoto(): Promise<PickedPhotoData | null> {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('需要相机权限才能拍照');
  }

  const result = await ImagePicker.launchCameraAsync({
    quality: 0.8,
    exif: true,
  });

  if (result.canceled || !result.assets || result.assets.length === 0) {
    return null;
  }

  const asset = result.assets[0];
  return {
    uri: asset.uri,
    width: asset.width,
    height: asset.height,
    exif: asset.exif || undefined,
  };
}

// Convert EXIF GPS value to decimal degrees
// EXIF GPS can be: number, [deg, min, sec], or { degrees, minutes, seconds }
function gpsToDecimal(value: any): number | null {
  if (value == null) return null;

  // Already a number
  if (typeof value === 'number') return value;

  // Array format: [degrees, minutes, seconds]
  if (Array.isArray(value)) {
    const [d, m, s] = value;
    return (d || 0) + (m || 0) / 60 + (s || 0) / 3600;
  }

  // Object format: { degrees, minutes, seconds }
  if (typeof value === 'object') {
    const d = value.degrees ?? value[0] ?? 0;
    const m = value.minutes ?? value[1] ?? 0;
    const s = value.seconds ?? value[2] ?? 0;
    return d + m / 60 + s / 3600;
  }

  return null;
}

// Extract GPS location from EXIF data
export function extractLocation(exif?: PickedPhotoData['exif']): PhotoLocation | null {
  if (!exif) return null;

  const lat = gpsToDecimal(exif.GPSLatitude);
  const lng = gpsToDecimal(exif.GPSLongitude);

  if (lat == null || lng == null) return null;

  // Apply hemisphere reference
  let finalLat = lat;
  let finalLng = lng;
  if (exif.GPSLatitudeRef === 'S' || exif.GPSLatitudeRef === 'SOUTH') finalLat = -finalLat;
  if (exif.GPSLongitudeRef === 'W' || exif.GPSLongitudeRef === 'WEST') finalLng = -finalLng;

  // Validate coordinates
  if (isNaN(finalLat) || isNaN(finalLng) || finalLat < -90 || finalLat > 90 || finalLng < -180 || finalLng > 180) {
    return null;
  }

  return {
    latitude: finalLat,
    longitude: finalLng,
  };
}

// Extract date from EXIF
export function extractDate(exif?: PickedPhotoData['exif']): string {
  if (!exif) return new Date().toISOString().split('T')[0];

  const dateStr = exif.DateTimeOriginal || exif.DateTime;
  if (!dateStr) return new Date().toISOString().split('T')[0];

  // Parse EXIF date format: "2025:05:10 14:30:00"
  const parts = dateStr.split(/[: ]/);
  if (parts.length >= 3) {
    const year = parts[0];
    const month = parts[1].padStart(2, '0');
    const day = parts[2].padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return new Date().toISOString().split('T')[0];
}

// Generate a unique ID
function generateId(): string {
  return `photo-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// Process a picked photo into our Photo type
export async function processPickedPhoto(
  picked: PickedPhotoData,
  manualLocation?: PhotoLocation,
  manualScene?: SceneType
): Promise<Photo> {
  const location = manualLocation || extractLocation(picked.exif) || {
    latitude: 39.9042, // Default to Beijing if no location
    longitude: 116.4074,
  };

  const date = extractDate(picked.exif);

  // Try to reverse geocode for place name first
  const placeName = await reverseGeocode(location.latitude, location.longitude);

  // Enhanced scene detection with GPS and place name
  const detection = detectSceneWithConfidence(picked, placeName);
  const scene = manualScene || detection.scene;

  return {
    id: generateId(),
    uri: picked.uri,
    location: {
      ...location,
      placeName,
    },
    date,
    scene,
    description: generateDescription(scene, placeName),
    isDailyPick: false,
    detectionReason: detection.reason,
  };
}

// Reverse geocoding using Amap API
async function reverseGeocode(lat: number, lng: number): Promise<string | undefined> {
  try {
    const result = await amapReverseGeocode(lat, lng);
    return result?.placeName;
  } catch {
    return undefined;
  }
}

// Generate a description based on scene and location
function generateDescription(scene: SceneType, placeName?: string): string {
  const sceneDesc: Record<SceneType, string> = {
    rowing: '在划船',
    dining: '在吃美食',
    hiking: '在登山',
    shopping: '在购物',
    selfie: '拍照留念',
    beach: '在海边',
    park: '在逛公园',
    city: '在城市探索',
    travel: '在旅行',
    work: '在工作',
    home: '在家中',
    concert: '在看演唱会',
    rainy: '在雨中漫步',
    birthday: '在过生日',
    sports: '在运动',
    snowy: '在雪中玩耍',
    movie: '在看电影',
    garden: '在打理花园',
    nightSnack: '在吃夜宵',
  };

  if (placeName) {
    return `${placeName} ${sceneDesc[scene]}`;
  }
  return sceneDesc[scene];
}
