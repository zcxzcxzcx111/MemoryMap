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

    // On web, expo-image-picker doesn't read EXIF. Use exif-js.
    if (Platform.OS === 'web' && !exif) {
      exif = await readExifFromWeb(asset.uri);
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

// Read EXIF from a web image by parsing binary JPEG data
async function readExifFromWeb(uri: string): Promise<PickedPhotoData['exif']> {
  try {
    const response = await fetch(uri);
    const buffer = await response.arrayBuffer();
    const view = new DataView(buffer);

    // Check JPEG SOI marker
    if (view.byteLength < 4 || view.getUint16(0) !== 0xFFD8) return undefined;

    let offset = 2;
    while (offset < view.byteLength - 4) {
      if (view.getUint8(offset) !== 0xFF) break;
      const marker = view.getUint8(offset + 1);

      if (marker === 0xE1) {
        // APP1 - EXIF
        return parseExifSegment(view, offset);
      }

      if (marker === 0xDA) break; // SOS - image data starts
      if (marker < 0xD0 || marker > 0xD8) {
        const segLen = view.getUint16(offset + 2);
        offset += 2 + segLen;
      } else {
        offset += 2;
      }
    }
  } catch {}
  return undefined;
}

function parseExifSegment(view: DataView, offset: number): PickedPhotoData['exif'] | undefined {
  try {
    const segLen = view.getUint16(offset + 2);
    const segEnd = offset + 2 + segLen;
    let pos = offset + 4;

    // Check "Exif\0\0" header
    const header = String.fromCharCode(view.getUint8(pos), view.getUint8(pos + 1), view.getUint8(pos + 2), view.getUint8(pos + 3));
    if (header !== 'Exif') return undefined;
    pos += 6;

    // TIFF header: byte order
    const le = view.getUint16(pos) === 0x4949;
    pos += 8; // skip byte order (2) + 0x002A (2) + IFD0 offset (4)

    const result: any = {};
    readIFD(view, pos, le, segEnd, result, false);

    // Read GPS IFD if pointer was found
    if (result._gpsOffset) {
      const gps: any = {};
      readIFD(view, result._gpsOffset, le, segEnd, gps, true);
      if (gps._lat && gps._lng) {
        result.GPSLatitude = gps._lat;
        result.GPSLongitude = gps._lng;
        result.GPSLatitudeRef = gps._latRef || 'N';
        result.GPSLongitudeRef = gps._lngRef || 'E';
      }
      delete result._gpsOffset;
    }

    return Object.keys(result).length > 0 ? result : undefined;
  } catch {
    return undefined;
  }
}

function readIFD(view: DataView, ifdPos: number, le: boolean, segEnd: number, result: any, isGps: boolean) {
  if (ifdPos + 2 > segEnd) return;
  const count = view.getUint16(ifdPos, le);

  for (let i = 0; i < count && ifdPos + 2 + (i + 1) * 12 <= segEnd; i++) {
    const entry = ifdPos + 2 + i * 12;
    const tag = view.getUint16(entry, le);
    const type = view.getUint16(entry + 2, le);
    const tagCount = view.getUint32(entry + 4, le);

    if (!isGps) {
      // Main IFD
      if (tag === 0x8825) {
        // GPS IFD pointer
        result._gpsOffset = view.getUint32(entry + 8, le);
      } else if (tag === 0x9003) {
        // DateTimeOriginal
        result.DateTimeOriginal = readAscii(view, entry + 8, tagCount, segEnd);
      } else if (tag === 0x0132) {
        // DateTime
        result.DateTime = readAscii(view, entry + 8, tagCount, segEnd);
      }
    } else {
      // GPS IFD
      if (tag === 1) {
        // GPSLatitudeRef
        result._latRef = String.fromCharCode(view.getUint8(entry + 8));
      } else if (tag === 2) {
        // GPSLatitude (3 Rationals)
        result._lat = readRationals(view, entry, le, segEnd);
      } else if (tag === 3) {
        // GPSLongitudeRef
        result._lngRef = String.fromCharCode(view.getUint8(entry + 8));
      } else if (tag === 4) {
        // GPSLongitude (3 Rationals)
        result._lng = readRationals(view, entry, le, segEnd);
      }
    }
  }
}

function readRationals(view: DataView, entry: number, le: boolean, segEnd: number): number[] | undefined {
  const type = view.getUint16(entry + 2, le);
  const tagCount = view.getUint32(entry + 4, le);
  if (tagCount !== 3) return undefined;

  // Rational = 8 bytes, so 3 rationals = 24 bytes
  // If value fits in 4 bytes, it's inline; otherwise it's an offset
  let dataOffset: number;
  if (type === 5 && tagCount * 8 <= 4) {
    dataOffset = entry + 8;
  } else {
    dataOffset = view.getUint32(entry + 8, le);
    if (dataOffset + 24 > segEnd) return undefined;
  }

  const result: number[] = [];
  for (let i = 0; i < 3; i++) {
    const num = view.getUint32(dataOffset + i * 8, le);
    const den = view.getUint32(dataOffset + i * 8 + 4, le);
    result.push(den ? num / den : 0);
  }
  return result;
}

function readAscii(view: DataView, valuePos: number, count: number, segEnd: number): string | undefined {
  // If count <= 4, value is inline; otherwise it's an offset
  let strPos: number;
  if (count <= 4) {
    strPos = valuePos;
  } else {
    strPos = view.getUint32(valuePos, true);
  }
  if (strPos + count > segEnd) return undefined;
  let str = '';
  for (let i = 0; i < count - 1; i++) {
    str += String.fromCharCode(view.getUint8(strPos + i));
  }
  return str;
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
