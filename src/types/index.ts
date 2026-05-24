export interface PhotoLocation {
  latitude: number;
  longitude: number;
  address?: string;
  placeName?: string;
}

export type SceneType =
  | 'rowing'
  | 'dining'
  | 'hiking'
  | 'shopping'
  | 'selfie'
  | 'beach'
  | 'park'
  | 'city'
  | 'travel'
  | 'work'
  | 'home'
  | 'concert'
  | 'rainy'
  | 'birthday'
  | 'sports'
  | 'snowy'
  | 'movie'
  | 'garden'
  | 'nightSnack';

export interface Photo {
  id: string;
  uri: string;
  location: PhotoLocation;
  date: string; // ISO date string
  scene: SceneType;
  description: string;
  isDailyPick?: boolean;
  detectionReason?: string; // 场景检测原因
}

export interface SceneMarker {
  id: string;
  location: PhotoLocation;
  scene: SceneType;
  date: string;
  description: string;
  photos: Photo[];
}

export interface DayStory {
  date: string;
  summary: string;
  markers: SceneMarker[];
  dailyPickPhoto?: Photo;
}
