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
  lastModified?: number;
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
  if (Platform.OS === 'web') {
    return pickPhotosWeb();
  }

  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('需要相册访问权限才能选择照片');
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

  return result.assets.map((asset) => ({
    uri: asset.uri,
    width: asset.width,
    height: asset.height,
    exif: asset.exif || undefined,
  }));
}

// Web: use <input type="file"> to get original files with EXIF data
function pickPhotosWeb(): Promise<PickedPhotoData[]> {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = async () => {
      try {
        const files = Array.from(input.files || []);
        console.log('[pickPhotosWeb] Files selected:', files.length);
        if (files.length === 0) { resolve([]); return; }

        const photos: PickedPhotoData[] = [];
        for (const file of files) {
          console.log('[pickPhotosWeb] Processing:', file.name, 'size:', file.size);
          const buffer = await file.arrayBuffer();
          const view = new DataView(buffer);

          // Try EXIF parsing
          let exif: PickedPhotoData['exif'] = undefined;
          if (view.byteLength >= 4 && view.getUint16(0) === 0xFFD8) {
            exif = parseExifFromBuffer(view);
          }

          // Convert to data URI
          const uri = await new Promise<string>((res) => {
            const reader = new FileReader();
            reader.onloadend = () => res(reader.result as string);
            reader.readAsDataURL(file);
          });

          const dims = await getImageDimensions(uri);
          console.log('[EXIF]', file.name, exif?.GPSLatitude ? 'GPS found' : 'no GPS', 'date:', exif?.DateTimeOriginal || exif?.DateTime || 'none');
          photos.push({ uri, width: dims.w, height: dims.h, lastModified: file.lastModified, exif });
        }
        resolve(photos);
      } catch (err) {
        console.error('[pickPhotosWeb] Error processing files:', err);
        reject(err);
      }
    };
    console.log('[pickPhotosWeb] Opening file picker...');
    input.click();
  });
}

function getImageDimensions(uri: string): Promise<{ w: number; h: number }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve({ w: 0, h: 0 });
    img.src = uri;
  });
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
function gpsToDecimal(value: any): number | null {
  if (value == null) return null;
  if (typeof value === 'number') return value;
  if (Array.isArray(value)) {
    const [d, m, s] = value;
    return (d || 0) + (m || 0) / 60 + (s || 0) / 3600;
  }
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

  let finalLat = lat;
  let finalLng = lng;
  if (exif.GPSLatitudeRef === 'S' || exif.GPSLatitudeRef === 'SOUTH') finalLat = -finalLat;
  if (exif.GPSLongitudeRef === 'W' || exif.GPSLongitudeRef === 'WEST') finalLng = -finalLng;

  if (isNaN(finalLat) || isNaN(finalLng) || finalLat < -90 || finalLat > 90 || finalLng < -180 || finalLng > 180) {
    return null;
  }

  return { latitude: finalLat, longitude: finalLng };
}

// Get current location using browser Geolocation API
export async function getCurrentLocation(): Promise<PhotoLocation | null> {
  if (typeof navigator === 'undefined' || !navigator.geolocation) return null;

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log('[GPS] Browser geolocation:', pos.coords.latitude, pos.coords.longitude);
        resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
      },
      (err) => {
        console.log('[GPS] Geolocation denied:', err.message);
        resolve(null);
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  });
}

// Extract date from EXIF or file metadata
export function extractDate(picked?: PickedPhotoData): string {
  const exif = picked?.exif;

  // 1. Try EXIF DateTimeOriginal / DateTime
  if (exif) {
    const dateStr = exif.DateTimeOriginal || exif.DateTime;
    if (dateStr) {
      const parts = dateStr.split(/[: ]/);
      if (parts.length >= 3) {
        const year = parts[0];
        const month = parts[1].padStart(2, '0');
        const day = parts[2].padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    }
  }

  // 2. Fallback: file lastModified timestamp (usually photo taken date)
  if (picked?.lastModified) {
    const d = new Date(picked.lastModified);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // 3. Last resort: today
  return new Date().toISOString().split('T')[0];
}

function generateId(): string {
  return `photo-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// Process a picked photo into our Photo type
export async function processPickedPhoto(
  picked: PickedPhotoData,
  manualLocation?: PhotoLocation,
  manualScene?: SceneType
): Promise<Photo> {
  // Priority: manualLocation > EXIF GPS > browser geolocation > Beijing default
  let location: PhotoLocation;

  if (manualLocation) {
    location = manualLocation;
  } else {
    const exifLocation = extractLocation(picked.exif);
    if (exifLocation) {
      location = exifLocation;
    } else {
      // Try browser geolocation as fallback
      const geoLocation = await getCurrentLocation();
      location = geoLocation || { latitude: 39.9042, longitude: 116.4074 };
    }
  }

  const date = extractDate(picked);
  const placeName = await reverseGeocode(location.latitude, location.longitude);
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

// ==================== EXIF Binary Parser ====================

function parseExifFromBuffer(view: DataView): PickedPhotoData['exif'] | undefined {
  try {
    let offset = 2;
    while (offset < view.byteLength - 4) {
      if (view.getUint8(offset) !== 0xFF) break;
      const marker = view.getUint8(offset + 1);

      if (marker === 0xE1) {
        return parseExifSegment(view, offset);
      }

      if (marker === 0xDA) break;
      if (marker >= 0xD0 && marker <= 0xD8) {
        offset += 2;
      } else {
        if (offset + 4 > view.byteLength) break;
        const segLen = view.getUint16(offset + 2);
        if (segLen < 2) break;
        offset += 2 + segLen;
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

    const header = String.fromCharCode(view.getUint8(pos), view.getUint8(pos + 1), view.getUint8(pos + 2), view.getUint8(pos + 3));
    if (header !== 'Exif') return undefined;
    pos += 6;

    const le = view.getUint16(pos) === 0x4949;
    pos += 8;

    const result: any = {};
    readIFD(view, pos, le, segEnd, result, false);

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
    const tagCount = view.getUint32(entry + 4, le);

    if (!isGps) {
      if (tag === 0x8825) {
        result._gpsOffset = view.getUint32(entry + 8, le);
      } else if (tag === 0x9003) {
        result.DateTimeOriginal = readAscii(view, entry + 8, tagCount, segEnd);
      } else if (tag === 0x0132) {
        result.DateTime = readAscii(view, entry + 8, tagCount, segEnd);
      }
    } else {
      if (tag === 1) {
        result._latRef = String.fromCharCode(view.getUint8(entry + 8));
      } else if (tag === 2) {
        result._lat = readRationals(view, entry, le, segEnd);
      } else if (tag === 3) {
        result._lngRef = String.fromCharCode(view.getUint8(entry + 8));
      } else if (tag === 4) {
        result._lng = readRationals(view, entry, le, segEnd);
      }
    }
  }
}

function readRationals(view: DataView, entry: number, le: boolean, segEnd: number): number[] | undefined {
  const tagCount = view.getUint32(entry + 4, le);
  if (tagCount !== 3) return undefined;

  let dataOffset = view.getUint32(entry + 8, le);
  if (dataOffset + 24 > segEnd) return undefined;

  const result: number[] = [];
  for (let i = 0; i < 3; i++) {
    const num = view.getUint32(dataOffset + i * 8, le);
    const den = view.getUint32(dataOffset + i * 8 + 4, le);
    result.push(den ? num / den : 0);
  }
  return result;
}

function readAscii(view: DataView, valuePos: number, count: number, segEnd: number): string | undefined {
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
