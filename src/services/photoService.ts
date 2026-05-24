import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';
import { Photo, PhotoLocation, SceneType } from '../types';
import { detectScene, detectSceneWithConfidence } from './sceneDetector';

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

// Extract GPS location from EXIF data
export function extractLocation(exif?: PickedPhotoData['exif']): PhotoLocation | null {
  if (!exif) return null;

  let lat = exif.GPSLatitude;
  let lng = exif.GPSLongitude;

  if (lat == null || lng == null) return null;

  // Apply hemisphere reference
  if (exif.GPSLatitudeRef === 'S') lat = -lat;
  if (exif.GPSLongitudeRef === 'W') lng = -lng;

  // Validate coordinates
  if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    return null;
  }

  return {
    latitude: lat,
    longitude: lng,
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

// Simple reverse geocoding (in production, use a real API)
async function reverseGeocode(lat: number, lng: number): Promise<string | undefined> {
  // For prototype, return a generic name based on rough area
  // In production, use Google Maps Geocoding API or similar
  try {
    if (Platform.OS === 'web') {
      return undefined;
    }
    // On native, we could use expo-location's reverse geocode
    // For now, return coordinates as name
    return `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
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
