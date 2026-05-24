import { SceneType } from '../../types';

// Character image paths - place PNG files in src/assets/characters/
// Scenes 1-9: use PNG images from reference
// Scenes 10-19: keep existing SVG (no PNG yet)
export const CHARACTER_IMAGE_MAP: Record<SceneType, string | null> = {
  selfie: 'selfie.png',
  rowing: 'rowing.png',
  dining: 'dining.png',
  hiking: 'hiking.png',
  shopping: 'shopping.png',
  beach: 'beach.png',
  park: 'park.png',
  city: 'city.png',
  travel: 'travel.png',
  work: null,
  home: null,
  concert: null,
  rainy: null,
  birthday: null,
  sports: null,
  snowy: null,
  movie: null,
  garden: null,
  nightSnack: null,
};

// Check if a scene has a PNG image available
export function hasCharacterImage(scene: SceneType): boolean {
  return CHARACTER_IMAGE_MAP[scene] !== null;
}

// Get the image filename for a scene
export function getCharacterImageName(scene: SceneType): string | null {
  return CHARACTER_IMAGE_MAP[scene];
}
