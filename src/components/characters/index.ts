import { SceneType } from '../../types';
import { selfieSVG } from './SelfieCharacter';
import { rowingSVG } from './RowingCharacter';
import { diningSVG } from './DiningCharacter';
import { hikingSVG } from './HikingCharacter';
import { shoppingSVG } from './ShoppingCharacter';
import { beachSVG } from './BeachCharacter';
import { parkSVG } from './ParkCharacter';
import { citySVG } from './CityCharacter';
import { travelSVG } from './TravelCharacter';
import { workSVG } from './WorkCharacter';
import { homeSVG } from './HomeCharacter';
import { concertSVG } from './ConcertCharacter';
import { rainySVG } from './RainyCharacter';
import { birthdaySVG } from './BirthdayCharacter';
import { sportsSVG } from './SportsCharacter';
import { snowySVG } from './SnowyCharacter';
import { movieSVG } from './MovieCharacter';
import { gardenSVG } from './GardenCharacter';
import { nightSnackSVG } from './NightSnackCharacter';

// Map scene type to SVG render function
const characterMap: Record<SceneType, () => string> = {
  selfie: selfieSVG,
  rowing: rowingSVG,
  dining: diningSVG,
  hiking: hikingSVG,
  shopping: shoppingSVG,
  beach: beachSVG,
  park: parkSVG,
  city: citySVG,
  travel: travelSVG,
  work: workSVG,
  home: homeSVG,
  concert: concertSVG,
  rainy: rainySVG,
  birthday: birthdaySVG,
  sports: sportsSVG,
  snowy: snowySVG,
  movie: movieSVG,
  garden: gardenSVG,
  nightSnack: nightSnackSVG,
};

// Background colors for each scene (used for web fallback)
export const sceneColors: Record<SceneType, string> = {
  selfie: '#DDA0DD',
  rowing: '#87CEEB',
  dining: '#FFB366',
  hiking: '#90EE90',
  shopping: '#FF69B4',
  beach: '#F4A460',
  park: '#98FB98',
  city: '#708090',
  travel: '#4169E1',
  work: '#1C1C1C',
  home: '#FFE4B5',
  concert: '#9B59B6',
  rainy: '#5D6D7E',
  birthday: '#FF69B4',
  sports: '#E87B6B',
  snowy: '#D5E8F0',
  movie: '#2C3E50',
  garden: '#6BAA6B',
  nightSnack: '#2C2C3C',
};

// Fallback characters as emoji for web
export const sceneEmojis: Record<SceneType, string> = {
  selfie: '\u{1F4F8}',
  rowing: '\u{1F6A3}',
  dining: '\u{1F468}‍\u{1F373}',
  hiking: '\u{1F9D7}',
  shopping: '\u{1F483}',
  beach: '\u{1F3C4}',
  park: '\u{1F333}',
  city: '\u{1F574}',
  travel: '\u{1F3C3}',
  work: '\u{1F4BC}',
  home: '\u{1F3E0}',
  concert: '\u{1F3A4}',
  rainy: '\u{1F327}',
  birthday: '\u{1F382}',
  sports: '\u{26BD}',
  snowy: '\u{2744}',
  movie: '\u{1F3AC}',
  garden: '\u{1F33B}',
  nightSnack: '\u{1F362}',
};

// CSS animation keyframes shared by all characters
export const globalCSS = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
  @keyframes blink {
    0%, 42%, 58%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.05); }
  }
  @keyframes wave-hand {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    75% { transform: rotate(-8deg); }
  }
  @keyframes row-motion {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }
  @keyframes chopstick-move {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  @keyframes walk-cycle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  @keyframes bag-pendulum {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(10deg); }
  }
  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }
  @keyframes scarf-drift {
    0%, 100% { transform: skewX(0deg); }
    50% { transform: skewX(4deg); }
  }
  @keyframes steam-rise {
    0% { transform: translateY(0); opacity: 0.5; }
    100% { transform: translateY(-10px); opacity: 0; }
  }
  @keyframes keyboard-tap {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(2px); }
  }
  @keyframes nap-breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes map-wave {
    0%, 100% { transform: rotate(0deg) translateX(0); }
    50% { transform: rotate(-8deg) translateX(-2px); }
  }
  @keyframes foot-kick {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(12deg); }
  }
  @keyframes head-look {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(8deg); }
    70% { transform: rotate(-8deg); }
  }
  @keyframes arm-sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(12deg); }
  }
`;

// Sticker SVG filter: white outline + subtle shadow + shared gradients
export const stickerFilter = `
  <defs>
    <filter id="sticker" x="-25%" y="-25%" width="150%" height="150%">
      <feMorphology operator="dilate" radius="5" in="SourceAlpha" result="expanded"/>
      <feFlood flood-color="white" result="white"/>
      <feComposite in="white" in2="expanded" operator="in" result="whiteOutline"/>
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="shadow"/>
      <feOffset dx="1" dy="2" result="offsetShadow"/>
      <feFlood flood-color="rgba(0,0,0,0.12)" result="shadowColor"/>
      <feComposite in="shadowColor" in2="offsetShadow" operator="in" result="coloredShadow"/>
      <feMerge>
        <feMergeNode in="coloredShadow"/>
        <feMergeNode in="whiteOutline"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <!-- 皮肤 -->
    <linearGradient id="s0" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFE8CC"/><stop offset="100%" stop-color="#FFD4A8"/></linearGradient>
    <radialGradient id="ss0" cx="40%" cy="40%"><stop offset="0%" stop-color="#FFD4A8"/><stop offset="100%" stop-color="#E8B88A"/></radialGradient>
    <!-- 腮红 -->
    <radialGradient id="bl0"><stop offset="0%" stop-color="#FF8AAA" stop-opacity="0.7"/><stop offset="100%" stop-color="#FF8AAA" stop-opacity="0"/></radialGradient>
    <!-- 头发 -->
    <linearGradient id="h0" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4A4A4A"/><stop offset="100%" stop-color="#2C2C2C"/></linearGradient>
    <linearGradient id="h1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6B4226"/><stop offset="100%" stop-color="#4A2C12"/></linearGradient>
    <linearGradient id="h2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#C49A6C"/><stop offset="100%" stop-color="#A0784C"/></linearGradient>
  </defs>
`;

// Get SVG content for a scene type
export function getCharacterSVGContent(scene: SceneType): string {
  const renderer = characterMap[scene];
  return renderer ? renderer() : selfieSVG();
}

// Get full HTML for WebView (native platforms)
export function getCharacterHTML(scene: SceneType): string {
  const svgContent = getCharacterSVGContent(scene);
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        svg { width: 100%; height: 100%; }
        ${globalCSS}
      </style>
    </head>
    <body>
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="animation: float 3s ease-in-out infinite;">
        ${stickerFilter}
        <g filter="url(#sticker)">
          ${svgContent}
        </g>
      </svg>
    </body>
    </html>
  `;
}

// Get inline SVG for web (direct rendering)
export function getCharacterInlineSVG(scene: SceneType): string {
  const svgContent = getCharacterSVGContent(scene);
  return `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="animation: float 3s ease-in-out infinite; width: 100%; height: 100%;">
      <style>${globalCSS}</style>
      ${stickerFilter}
      <g filter="url(#sticker)">
        ${svgContent}
      </g>
    </svg>
  `;
}
