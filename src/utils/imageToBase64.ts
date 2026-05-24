// Utility to load character PNG images as base64 data URIs
// Works on web via fetch, on native via FileSystem

import { SceneType } from '../types';

const IMAGE_NAMES: Record<string, string> = {
  selfie: 'selfie.png',
  rowing: 'rowing.png',
  dining: 'dining.png',
  hiking: 'hiking.png',
  shopping: 'shopping.png',
  beach: 'beach.png',
  park: 'park.png',
  city: 'city.png',
  travel: 'travel.png',
};

// Cache for loaded images
const imageCache: Record<string, string> = {};

// Load a character image as a base64 data URI
export async function loadCharacterImage(scene: SceneType): Promise<string | null> {
  const filename = IMAGE_NAMES[scene];
  if (!filename) return null;

  if (imageCache[scene]) return imageCache[scene];

  try {
    // On web, fetch the image from the static assets
    const response = await fetch(`/assets/characters/${filename}`);
    if (!response.ok) return null;

    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUri = reader.result as string;
        imageCache[scene] = dataUri;
        resolve(dataUri);
      };
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

// Preload all available character images
export async function preloadCharacterImages(): Promise<Record<SceneType, string>> {
  const result: Partial<Record<SceneType, string>> = {};
  const scenes = Object.keys(IMAGE_NAMES) as SceneType[];

  await Promise.all(
    scenes.map(async (scene) => {
      const dataUri = await loadCharacterImage(scene);
      if (dataUri) {
        result[scene] = dataUri;
      }
    })
  );

  return result as Record<SceneType, string>;
}

// Get an <img> HTML tag for a character
export function getCharacterImgTag(scene: SceneType, size: number = 50): string {
  const dataUri = imageCache[scene];
  if (dataUri) {
    return `<img src="${dataUri}" width="${size}" height="${size}" style="border-radius:8px;" />`;
  }
  return '';
}
