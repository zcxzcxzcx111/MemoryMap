import { SceneType } from '../types';
import { PickedPhotoData } from './photoService';
import { findNearestLocation } from '../data/locationDatabase';

// Scene detection result with confidence
export interface SceneDetectionResult {
  scene: SceneType;
  confidence: number; // 0-1
  reason: string;
}

// Detect scene from photo data using heuristics
export function detectScene(photo: PickedPhotoData): SceneType {
  const result = detectSceneWithConfidence(photo);
  return result.scene;
}

// Detect scene with confidence score
export function detectSceneWithConfidence(
  photo: PickedPhotoData,
  placeName?: string
): SceneDetectionResult {
  const candidates: SceneDetectionResult[] = [];

  // 1. Check GPS against known locations (highest priority)
  const gpsResult = detectByGPS(photo.exif);
  if (gpsResult) candidates.push(gpsResult);

  // 2. Check place name keywords
  if (placeName) {
    const placeResult = detectByPlaceName(placeName);
    if (placeResult) candidates.push(placeResult);
  }

  // 3. Check time of day from EXIF
  const timeResult = detectByTime(photo.exif);
  if (timeResult) candidates.push(timeResult);

  // 4. Check filename patterns
  const filenameResult = detectByFilename(photo.uri);
  if (filenameResult) candidates.push(filenameResult);

  // 5. Check image dimensions (panoramic = landscape/travel)
  const dimensionResult = detectByDimensions(photo.width, photo.height);
  if (dimensionResult) candidates.push(dimensionResult);

  // Return highest confidence result, default to 'selfie'
  if (candidates.length === 0) {
    return { scene: 'selfie', confidence: 0.3, reason: '默认场景' };
  }

  candidates.sort((a, b) => b.confidence - a.confidence);
  return candidates[0];
}

// Detect by time of day
function detectByTime(exif?: PickedPhotoData['exif']): SceneDetectionResult | null {
  if (!exif) return null;

  const dateStr = exif.DateTimeOriginal || exif.DateTime;
  if (!dateStr) return null;

  // Parse hour from EXIF date
  const parts = dateStr.split(/[: ]/);
  if (parts.length < 4) return null;

  const hour = parseInt(parts[3], 10);
  if (isNaN(hour)) return null;

  // Morning (6-10): hiking, park, garden
  if (hour >= 6 && hour < 10) {
    return { scene: 'hiking', confidence: 0.4, reason: '早晨拍摄，可能是晨练或登山' };
  }

  // Lunch time (11-14): dining
  if (hour >= 11 && hour < 14) {
    return { scene: 'dining', confidence: 0.5, reason: '午餐时间拍摄' };
  }

  // Afternoon (14-17): shopping, park, travel, sports, movie
  if (hour >= 14 && hour < 18) {
    return { scene: 'travel', confidence: 0.3, reason: '下午拍摄，可能是出游' };
  }

  // Dinner time (18-21): dining, nightSnack
  if (hour >= 18 && hour < 21) {
    return { scene: 'dining', confidence: 0.5, reason: '晚餐时间拍摄' };
  }

  // Night (21-5): city, nightSnack, movie
  if (hour >= 21 || hour < 6) {
    return { scene: 'nightSnack', confidence: 0.4, reason: '夜间拍摄，可能是夜宵或夜生活' };
  }

  return null;
}

// Detect by filename patterns
function detectByFilename(uri: string): SceneDetectionResult | null {
  const lower = uri.toLowerCase();

  const patterns: { keywords: string[]; scene: SceneType; confidence: number }[] = [
    { keywords: ['food', 'meal', 'dinner', 'lunch', 'breakfast', 'restaurant', 'cafe', 'eating'], scene: 'dining', confidence: 0.7 },
    { keywords: ['boat', 'row', 'kayak', 'water', 'lake', 'river', 'sea'], scene: 'rowing', confidence: 0.7 },
    { keywords: ['hike', 'mountain', 'trail', 'climb', 'peak', 'summit'], scene: 'hiking', confidence: 0.7 },
    { keywords: ['shop', 'store', 'mall', 'market', 'buy'], scene: 'shopping', confidence: 0.7 },
    { keywords: ['selfie', 'portrait', 'face', 'photo'], scene: 'selfie', confidence: 0.6 },
    { keywords: ['beach', 'coast', 'ocean', 'seaside', 'sand'], scene: 'beach', confidence: 0.7 },
    { keywords: ['park', 'tree', 'grass', 'nature'], scene: 'park', confidence: 0.6 },
    { keywords: ['city', 'urban', 'building', 'street', 'skyline', 'downtown'], scene: 'city', confidence: 0.6 },
    { keywords: ['travel', 'trip', 'vacation', 'tour', 'sightsee'], scene: 'travel', confidence: 0.5 },
    { keywords: ['office', 'work', 'meeting', 'desk', 'computer'], scene: 'work', confidence: 0.7 },
    { keywords: ['home', 'house', 'room', 'apartment', 'living'], scene: 'home', confidence: 0.6 },
    { keywords: ['concert', 'music', 'stage', 'band', 'mic', 'karaoke', 'sing', 'live'], scene: 'concert', confidence: 0.75 },
    { keywords: ['rain', 'umbrella', 'raincoat', 'puddle', 'storm'], scene: 'rainy', confidence: 0.8 },
    { keywords: ['birthday', 'cake', 'candle', 'party', 'confetti', 'wish'], scene: 'birthday', confidence: 0.8 },
    { keywords: ['sport', 'basketball', 'soccer', 'football', 'tennis', 'gym', 'run', 'fitness', 'exercise'], scene: 'sports', confidence: 0.7 },
    { keywords: ['snow', 'winter', 'ice', 'frozen', 'blizzard'], scene: 'snowy', confidence: 0.85 },
    { keywords: ['movie', 'cinema', 'film', 'theater', 'popcorn', 'screen'], scene: 'movie', confidence: 0.75 },
    { keywords: ['garden', 'flower', 'plant', 'pot', 'seed', 'bloom', 'lawn', 'mow'], scene: 'garden', confidence: 0.7 },
    { keywords: ['snack', 'night', 'street food', 'bbq', 'skewer', 'bubble tea', 'milk tea', 'supper'], scene: 'nightSnack', confidence: 0.7 },
  ];

  for (const { keywords, scene, confidence } of patterns) {
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        return { scene, confidence, reason: `文件名包含关键词"${keyword}"` };
      }
    }
  }

  return null;
}

// Detect by image dimensions
function detectByDimensions(width: number, height: number): SceneDetectionResult | null {
  const ratio = width / height;

  // Very wide (panoramic) - likely landscape/travel
  if (ratio > 2.5) {
    return { scene: 'travel', confidence: 0.3, reason: '全景照片，可能是风景' };
  }

  // Very tall - likely selfie
  if (ratio < 0.4) {
    return { scene: 'selfie', confidence: 0.3, reason: '竖版照片，可能是自拍' };
  }

  return null;
}

// Detect by GPS coordinates against location database
function detectByGPS(exif?: PickedPhotoData['exif']): SceneDetectionResult | null {
  if (!exif) return null;

  const lat = parseFloat(exif.GPSLatitude || exif.gpsLatitude || '');
  const lng = parseFloat(exif.GPSLongitude || exif.gpsLongitude || '');
  if (isNaN(lat) || isNaN(lng)) return null;

  const nearest = findNearestLocation(lat, lng);
  if (!nearest) return null;

  const sceneNames: Record<SceneType, string> = {
    rowing: '划船', dining: '美食', hiking: '登山', shopping: '购物',
    selfie: '拍照', beach: '海边', park: '公园', city: '城市',
    travel: '旅行', work: '工作', home: '居家',
    concert: '演唱会', rainy: '雨天', birthday: '生日', sports: '运动',
    snowy: '雪天', movie: '电影', garden: '园艺', nightSnack: '夜宵',
  };

  return {
    scene: nearest.scene,
    confidence: 0.8,
    reason: `位于 ${nearest.name} 附近，可能是${sceneNames[nearest.scene]}`,
  };
}

// Detect by place name keywords
function detectByPlaceName(placeName: string): SceneDetectionResult | null {
  const rules: { keywords: string[]; scene: SceneType; confidence: number; label: string }[] = [
    { keywords: ['山', '峰', '岭', '寺', '塔', '关'], scene: 'hiking', confidence: 0.65, label: '山/寺庙' },
    { keywords: ['湖', '河', '江', '溪', '潭', '池', '泉'], scene: 'rowing', confidence: 0.6, label: '水域' },
    { keywords: ['海', '滩', '沙', '湾', '岛', '礁'], scene: 'beach', confidence: 0.7, label: '海边' },
    { keywords: ['公园', '森林', '绿地'], scene: 'park', confidence: 0.6, label: '公园' },
    { keywords: ['花园', '植物园', '花店', '苗圃', '花市', '温室'], scene: 'garden', confidence: 0.65, label: '园艺/花卉' },
    { keywords: ['商场', '购物', '百货', '广场', '步行街', '路', '街'], scene: 'shopping', confidence: 0.5, label: '商业区' },
    { keywords: ['大厦', '写字楼', '中心', '金融', '科技园', '产业园'], scene: 'work', confidence: 0.55, label: '办公区' },
    { keywords: ['餐厅', '饭店', '食堂', '小吃', '火锅', '烤肉', '面馆'], scene: 'dining', confidence: 0.7, label: '餐厅' },
    { keywords: ['家', '小区', '公寓', '住宅'], scene: 'home', confidence: 0.5, label: '住宅区' },
    { keywords: ['体育馆', '球场', '健身房', '运动场', '游泳馆'], scene: 'sports', confidence: 0.7, label: '运动场所' },
    { keywords: ['影院', '影城', '剧院', '剧场', '音乐厅', 'livehouse'], scene: 'movie', confidence: 0.65, label: '影院/剧场' },
    { keywords: ['演唱会', '音乐节', 'live', '酒吧', 'ktv', 'KTV'], scene: 'concert', confidence: 0.7, label: '音乐/演出' },
    { keywords: ['夜市', '大排档', '烧烤', '奶茶', '小吃街', '美食街', '宵夜'], scene: 'nightSnack', confidence: 0.75, label: '夜市/小吃' },
  ];

  for (const rule of rules) {
    for (const keyword of rule.keywords) {
      if (placeName.includes(keyword)) {
        return {
          scene: rule.scene,
          confidence: rule.confidence,
          reason: `地点"${placeName}"包含${rule.label}关键词`,
        };
      }
    }
  }

  return null;
}

// Get all possible scenes with their Chinese names for UI display
export function getAllSceneOptions(): { scene: SceneType; name: string; emoji: string }[] {
  return [
    { scene: 'selfie', name: '拍照', emoji: '\u{1F4F8}' },
    { scene: 'dining', name: '美食', emoji: '\u{1F37D}' },
    { scene: 'hiking', name: '登山', emoji: '\u{1F97E}' },
    { scene: 'rowing', name: '划船', emoji: '\u{1F6F6}' },
    { scene: 'shopping', name: '购物', emoji: '\u{1F6CD}' },
    { scene: 'beach', name: '海边', emoji: '\u{1F3D6}' },
    { scene: 'park', name: '公园', emoji: '\u{1F333}' },
    { scene: 'city', name: '城市', emoji: '\u{1F3D9}' },
    { scene: 'travel', name: '旅行', emoji: '\u{2708}' },
    { scene: 'work', name: '工作', emoji: '\u{1F4BC}' },
    { scene: 'home', name: '居家', emoji: '\u{1F3E0}' },
    { scene: 'concert', name: '演唱会', emoji: '\u{1F3A4}' },
    { scene: 'rainy', name: '雨天', emoji: '\u{1F327}' },
    { scene: 'birthday', name: '生日', emoji: '\u{1F382}' },
    { scene: 'sports', name: '运动', emoji: '\u{26BD}' },
    { scene: 'snowy', name: '雪天', emoji: '\u{2744}' },
    { scene: 'movie', name: '电影', emoji: '\u{1F3AC}' },
    { scene: 'garden', name: '园艺', emoji: '\u{1F33B}' },
    { scene: 'nightSnack', name: '夜宵', emoji: '\u{1F362}' },
  ];
}
