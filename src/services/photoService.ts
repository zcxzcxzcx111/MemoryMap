import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';
import EXIF from 'exif-js';
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

// Read EXIF from a web image using exif-js
async function readExifFromWeb(uri: string): Promise<PickedPhotoData['exif']> {
  return new Promise((resolve) => {
    try {
      const img = new Image();
      img.onload = () => {
        try {
          EXIF.getData(img as any, function(this: any) {
            const lat = EXIF.getTag(this, 'GPSLatitude');
            const lng = EXIF.getTag(this, 'GPSLongitude');
            const latRef = EXIF.getTag(this, 'GPSLatitudeRef') || 'N';
            const lngRef = EXIF.getTag(this, 'GPSLongitudeRef') || 'E';
            const dateOriginal = EXIF.getTag(this, 'DateTimeOriginal');
            const date = EXIF.getTag(this, 'DateTime');

            if (lat && lng) {
              resolve({
                GPSLatitude: lat,
                GPSLongitude: lng,
                GPSLatitudeRef: latRef,
                GPSLongitudeRef: lngRef,
                DateTimeOriginal: dateOriginal,
                DateTime: date,
              });
            } else {
              resolve(dateOriginal || date ? { DateTimeOriginal: dateOriginal, DateTime: date } : undefined);
            }
          });
        } catch {
          resolve(undefined);
        }
      };
      img.onerror = () => resolve(undefined);
      // Must set crossOrigin before src for CORS images
      img.crossOrigin = 'anonymous';
      img.src = uri;
    } catch {
      resolve(undefined);
    }
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
