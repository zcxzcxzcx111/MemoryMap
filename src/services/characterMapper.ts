import { SceneType } from '../types';

// SVG-based Q-character definitions
// Each character is an SVG string that can be rendered in a WebView or as an inline SVG
export const characterSVGs: Record<SceneType, string> = {
  rowing: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <circle cx="60" cy="40" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="40" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Eyes -->
      <circle cx="53" cy="37" r="3" fill="#333"/>
      <circle cx="67" cy="37" r="3" fill="#333"/>
      <circle cx="54" cy="36" r="1" fill="white"/>
      <circle cx="68" cy="36" r="1" fill="white"/>
      <!-- Smile -->
      <path d="M 52 45 Q 60 52 68 45" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- Body (life jacket) -->
      <rect x="42" y="58" width="36" height="30" rx="8" fill="#FF6B6B"/>
      <rect x="46" y="62" width="28" height="4" rx="2" fill="#FFD93D"/>
      <!-- Arms holding oar -->
      <line x1="30" y1="65" x2="42" y2="70" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="90" y1="65" x2="78" y2="70" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Oar -->
      <line x1="15" y1="85" x2="105" y2="55" stroke="#8B4513" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="12" cy="88" rx="8" ry="4" fill="#8B4513" transform="rotate(-20 12 88)"/>
      <!-- Boat -->
      <path d="M 10 95 Q 60 110 110 95" fill="#DEB887" stroke="#8B4513" stroke-width="2"/>
    </svg>
  `,
  dining: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <circle cx="60" cy="35" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="35" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Eyes (happy) -->
      <path d="M 50 32 Q 53 28 56 32" fill="none" stroke="#333" stroke-width="2"/>
      <path d="M 64 32 Q 67 28 70 32" fill="none" stroke="#333" stroke-width="2"/>
      <!-- Mouth -->
      <circle cx="60" cy="40" r="4" fill="#FF6B6B"/>
      <!-- Chef hat -->
      <ellipse cx="60" cy="15" rx="15" ry="10" fill="white"/>
      <rect x="50" y="12" width="20" height="8" fill="white"/>
      <!-- Body (apron) -->
      <rect x="42" y="53" width="36" height="35" rx="5" fill="#4ECDC4"/>
      <rect x="50" y="53" width="20" height="15" rx="3" fill="white"/>
      <!-- Arms -->
      <line x1="35" y1="60" x2="42" y2="65" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="85" y1="60" x2="78" y2="65" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Chopsticks -->
      <line x1="82" y1="45" x2="95" y2="30" stroke="#8B4513" stroke-width="2"/>
      <line x1="85" y1="45" x2="98" y2="30" stroke="#8B4513" stroke-width="2"/>
      <!-- Bowl -->
      <ellipse cx="90" cy="50" rx="12" ry="6" fill="#FF6B6B"/>
      <path d="M 78 50 Q 90 58 102 50" fill="#FF6B6B"/>
      <!-- Food -->
      <circle cx="88" cy="47" r="3" fill="#90EE90"/>
      <circle cx="93" cy="48" r="2" fill="#FFB366"/>
    </svg>
  `,
  hiking: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <circle cx="60" cy="35" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="35" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Eyes -->
      <circle cx="53" cy="32" r="3" fill="#333"/>
      <circle cx="67" cy="32" r="3" fill="#333"/>
      <circle cx="54" cy="31" r="1" fill="white"/>
      <circle cx="68" cy="31" r="1" fill="white"/>
      <!-- Determined mouth -->
      <line x1="54" y1="42" x2="66" y2="42" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- Backpack -->
      <rect x="38" y="55" width="15" height="25" rx="5" fill="#FF8C00"/>
      <rect x="35" y="58" width="4" height="8" rx="2" fill="#FF8C00"/>
      <!-- Body (jacket) -->
      <rect x="42" y="53" width="36" height="35" rx="5" fill="#2E8B57"/>
      <!-- Arms -->
      <line x1="35" y1="58" x2="42" y2="65" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="85" y1="58" x2="78" y2="65" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Walking stick -->
      <line x1="85" y1="50" x2="95" y2="100" stroke="#8B4513" stroke-width="3" stroke-linecap="round"/>
      <!-- Legs -->
      <line x1="52" y1="88" x2="48" y2="110" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="68" y1="88" x2="72" y2="110" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Boots -->
      <rect x="42" y="106" width="14" height="8" rx="4" fill="#8B4513"/>
      <rect x="66" y="106" width="14" height="8" rx="4" fill="#8B4513"/>
      <!-- Mountain in background -->
      <polygon points="0,120 30,70 60,120" fill="#90EE90" opacity="0.5"/>
      <polygon points="40,120 70,60 100,120" fill="#2E8B57" opacity="0.5"/>
    </svg>
  `,
  shopping: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <circle cx="60" cy="35" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="35" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Eyes (excited) -->
      <circle cx="53" cy="30" r="4" fill="#333"/>
      <circle cx="67" cy="30" r="4" fill="#333"/>
      <circle cx="54" cy="29" r="2" fill="white"/>
      <circle cx="68" cy="29" r="2" fill="white"/>
      <!-- Big smile -->
      <path d="M 50 40 Q 60 50 70 40" fill="#FF6B6B" stroke="#333" stroke-width="1"/>
      <!-- Body (dress) -->
      <path d="M 42 53 L 38 90 L 82 90 L 78 53 Z" fill="#FF69B4"/>
      <rect x="46" y="53" width="28" height="5" rx="2" fill="#FF1493"/>
      <!-- Arms -->
      <line x1="35" y1="58" x2="42" y2="65" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="85" y1="58" x2="78" y2="65" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Shopping bag -->
      <rect x="82" y="60" width="25" height="30" rx="3" fill="#FF1493"/>
      <path d="M 87 60 Q 87 50 94 50 Q 101 50 101 60" fill="none" stroke="#FF1493" stroke-width="3"/>
      <!-- Legs -->
      <line x1="52" y1="90" x2="50" y2="110" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="68" y1="90" x2="70" y2="110" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Shoes -->
      <ellipse cx="48" cy="112" rx="8" ry="4" fill="#FF1493"/>
      <ellipse cx="72" cy="112" rx="8" ry="4" fill="#FF1493"/>
    </svg>
  `,
  selfie: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <circle cx="60" cy="40" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="40" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Eyes (wink) -->
      <circle cx="53" cy="37" r="3" fill="#333"/>
      <path d="M 64 37 Q 67 34 70 37" fill="none" stroke="#333" stroke-width="2"/>
      <!-- Smile -->
      <path d="M 52 45 Q 60 52 68 45" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- Blush -->
      <ellipse cx="48" cy="43" rx="4" ry="2" fill="#FFB6C1" opacity="0.6"/>
      <ellipse cx="72" cy="43" rx="4" ry="2" fill="#FFB6C1" opacity="0.6"/>
      <!-- Body -->
      <rect x="42" y="58" width="36" height="30" rx="8" fill="#87CEEB"/>
      <!-- Arms holding phone -->
      <line x1="38" y1="62" x2="30" y2="45" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="82" y1="62" x2="90" y2="45" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Phone -->
      <rect x="85" y="30" width="18" height="30" rx="3" fill="#333"/>
      <rect x="87" y="33" width="14" height="24" rx="1" fill="#87CEEB"/>
      <!-- Camera flash -->
      <circle cx="94" cy="32" r="2" fill="white"/>
      <!-- Hair -->
      <path d="M 42 30 Q 60 15 78 30" fill="#8B4513"/>
    </svg>
  `,
  beach: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Sun -->
      <circle cx="95" cy="20" r="12" fill="#FFD700"/>
      <!-- Body -->
      <circle cx="60" cy="35" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="35" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Sunglasses -->
      <rect x="47" y="30" width="12" height="8" rx="3" fill="#333"/>
      <rect x="62" y="30" width="12" height="8" rx="3" fill="#333"/>
      <line x1="59" y1="34" x2="62" y2="34" stroke="#333" stroke-width="2"/>
      <!-- Smile -->
      <path d="M 52 43 Q 60 50 68 43" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- Beach hat -->
      <ellipse cx="60" cy="20" rx="22" ry="5" fill="#FFD700"/>
      <path d="M 48 20 Q 60 5 72 20" fill="#FFD700"/>
      <!-- Body (swimsuit) -->
      <rect x="42" y="53" width="36" height="30" rx="5" fill="#FF6347"/>
      <!-- Arms -->
      <line x1="35" y1="58" x2="25" y2="50" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="85" y1="58" x2="95" y2="50" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Legs -->
      <line x1="52" y1="83" x2="50" y2="105" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="68" y1="83" x2="70" y2="105" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Beach -->
      <path d="M 0 110 Q 30 100 60 108 Q 90 116 120 105 L 120 120 L 0 120 Z" fill="#F4A460"/>
      <!-- Waves -->
      <path d="M 0 108 Q 15 102 30 108 Q 45 114 60 108" fill="none" stroke="#40E0D0" stroke-width="2"/>
    </svg>
  `,
  park: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Trees -->
      <circle cx="15" cy="50" r="15" fill="#228B22"/>
      <rect x="12" y="60" width="6" height="15" fill="#8B4513"/>
      <circle cx="105" cy="45" r="18" fill="#2E8B57"/>
      <rect x="102" y="58" width="6" height="15" fill="#8B4513"/>
      <!-- Body -->
      <circle cx="60" cy="40" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="40" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Eyes -->
      <circle cx="53" cy="37" r="3" fill="#333"/>
      <circle cx="67" cy="37" r="3" fill="#333"/>
      <!-- Smile -->
      <path d="M 52 45 Q 60 52 68 45" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- Body (casual) -->
      <rect x="42" y="58" width="36" height="30" rx="8" fill="#98FB98"/>
      <!-- Arms (relaxed) -->
      <line x1="35" y1="62" x2="30" y2="75" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="85" y1="62" x2="90" y2="75" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Legs -->
      <line x1="52" y1="88" x2="50" y2="110" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="68" y1="88" x2="70" y2="110" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Grass -->
      <path d="M 0 115 Q 20 108 40 115 Q 60 122 80 115 Q 100 108 120 115 L 120 120 L 0 120 Z" fill="#90EE90"/>
    </svg>
  `,
  city: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Buildings -->
      <rect x="5" y="40" width="20" height="80" fill="#708090"/>
      <rect x="8" y="45" width="5" height="8" fill="#FFD700"/>
      <rect x="16" y="45" width="5" height="8" fill="#FFD700"/>
      <rect x="95" y="30" width="20" height="90" fill="#778899"/>
      <rect x="98" y="35" width="5" height="8" fill="#FFD700"/>
      <rect x="106" y="35" width="5" height="8" fill="#FFD700"/>
      <!-- Body -->
      <circle cx="60" cy="40" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="40" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Eyes -->
      <circle cx="53" cy="37" r="3" fill="#333"/>
      <circle cx="67" cy="37" r="3" fill="#333"/>
      <!-- Cool smile -->
      <path d="M 54 45 Q 60 49 66 45" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- Body (coat) -->
      <rect x="38" y="58" width="44" height="35" rx="5" fill="#2F4F4F"/>
      <line x1="60" y1="58" x2="60" y2="93" stroke="#1C1C1C" stroke-width="1"/>
      <!-- Scarf -->
      <path d="M 45 55 Q 60 62 75 55" fill="#FF4500"/>
      <rect x="55" y="55" width="8" height="15" fill="#FF4500"/>
      <!-- Arms -->
      <line x1="35" y1="62" x2="28" y2="75" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="85" y1="62" x2="92" y2="75" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Legs -->
      <line x1="52" y1="93" x2="50" y2="115" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="68" y1="93" x2="70" y2="115" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Shoes -->
      <rect x="44" y="112" width="14" height="6" rx="3" fill="#333"/>
      <rect x="64" y="112" width="14" height="6" rx="3" fill="#333"/>
    </svg>
  `,
  travel: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <circle cx="60" cy="35" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="35" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Excited eyes -->
      <circle cx="53" cy="32" r="4" fill="#333"/>
      <circle cx="67" cy="32" r="4" fill="#333"/>
      <circle cx="54" cy="31" r="2" fill="white"/>
      <circle cx="68" cy="31" r="2" fill="white"/>
      <!-- Big smile -->
      <path d="M 48 40 Q 60 52 72 40" fill="#FF6B6B" stroke="#333" stroke-width="1"/>
      <!-- Body -->
      <rect x="42" y="53" width="36" height="30" rx="5" fill="#4169E1"/>
      <!-- Backpack -->
      <rect x="75" y="50" width="18" height="25" rx="5" fill="#FF8C00"/>
      <line x1="78" y1="50" x2="78" y2="45" stroke="#FF8C00" stroke-width="3"/>
      <line x1="89" y1="50" x2="89" y2="45" stroke="#FF8C00" stroke-width="3"/>
      <!-- Arms (waving) -->
      <line x1="35" y1="55" x2="20" y2="40" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="85" y1="55" x2="100" y2="40" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Map in hand -->
      <rect x="95" y="35" width="18" height="14" rx="1" fill="white" transform="rotate(15 104 42)"/>
      <line x1="98" y1="39" x2="110" y2="39" stroke="#87CEEB" stroke-width="1" transform="rotate(15 104 42)"/>
      <!-- Legs -->
      <line x1="52" y1="83" x2="48" y2="108" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="68" y1="83" x2="72" y2="108" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Sneakers -->
      <ellipse cx="46" cy="110" rx="8" ry="4" fill="white"/>
      <ellipse cx="74" cy="110" rx="8" ry="4" fill="white"/>
    </svg>
  `,
  work: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Body -->
      <circle cx="60" cy="35" r="18" fill="#FFD93D"/>
      <circle cx="60" cy="35" r="18" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Glasses -->
      <rect x="46" y="30" width="12" height="10" rx="2" fill="none" stroke="#333" stroke-width="2"/>
      <rect x="62" y="30" width="12" height="10" rx="2" fill="none" stroke="#333" stroke-width="2"/>
      <line x1="58" y1="35" x2="62" y2="35" stroke="#333" stroke-width="2"/>
      <!-- Eyes -->
      <circle cx="52" cy="35" r="2" fill="#333"/>
      <circle cx="68" cy="35" r="2" fill="#333"/>
      <!-- Neutral mouth -->
      <line x1="55" y1="43" x2="65" y2="43" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- Body (suit) -->
      <rect x="42" y="53" width="36" height="35" rx="5" fill="#1C1C1C"/>
      <rect x="54" y="53" width="12" height="20" rx="2" fill="white"/>
      <!-- Tie -->
      <polygon points="60,53 56,65 60,75 64,65" fill="#FF0000"/>
      <!-- Arms -->
      <line x1="35" y1="58" x2="28" y2="72" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <line x1="85" y1="58" x2="92" y2="72" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/>
      <!-- Laptop -->
      <rect x="85" y="68" width="25" height="18" rx="2" fill="#333"/>
      <rect x="87" y="70" width="21" height="14" rx="1" fill="#87CEEB"/>
      <rect x="80" y="86" width="35" height="3" rx="1" fill="#555"/>
    </svg>
  `,
  home: `
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <!-- House -->
      <polygon points="60,10 20,45 100,45" fill="#FF6347"/>
      <rect x="30" y="45" width="60" height="50" fill="#FFE4B5"/>
      <rect x="50" y="65" width="20" height="30" fill="#8B4513"/>
      <!-- Body -->
      <circle cx="60" cy="55" r="14" fill="#FFD93D"/>
      <circle cx="60" cy="55" r="14" fill="none" stroke="#E8A317" stroke-width="2"/>
      <!-- Sleepy eyes -->
      <path d="M 53 53 L 57 53" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <path d="M 63 53 L 67 53" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- Yawn -->
      <ellipse cx="60" cy="60" rx="4" ry="3" fill="#FF6B6B"/>
      <!-- Pajamas -->
      <rect x="48" y="69" width="24" height="25" rx="5" fill="#87CEEB"/>
      <circle cx="55" cy="78" r="2" fill="white"/>
      <circle cx="65" cy="82" r="2" fill="white"/>
      <!-- Slippers -->
      <ellipse cx="52" cy="96" rx="8" ry="4" fill="#FFB6C1"/>
      <ellipse cx="68" cy="96" rx="8" ry="4" fill="#FFB6C1"/>
      <!-- Coffee mug -->
      <rect x="85" y="70" width="12" height="15" rx="2" fill="white"/>
      <path d="M 97 73 Q 103 75 97 78" fill="none" stroke="white" stroke-width="2"/>
      <!-- Steam -->
      <path d="M 88 68 Q 91 62 88 58" fill="none" stroke="#ccc" stroke-width="1"/>
      <path d="M 93 68 Q 96 62 93 58" fill="none" stroke="#ccc" stroke-width="1"/>
    </svg>
  `,
  concert: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="40" r="18" fill="#FFD93D"/><circle cx="53" cy="37" r="3" fill="#333"/><circle cx="67" cy="37" r="3" fill="#333"/><path d="M 50 45 Q 60 52 70 45" fill="none" stroke="#333" stroke-width="2"/><rect x="42" y="58" width="36" height="30" rx="5" fill="#2C2C3C"/><line x1="35" y1="62" x2="25" y2="50" stroke="#FFD93D" stroke-width="6" stroke-linecap="round"/><circle cx="24" cy="48" r="4" fill="#555"/><text x="80" y="40" font-size="14" fill="#FF6B9D">&#9835;</text></svg>`,
  rainy: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="10" x2="18" y2="25" stroke="#6BC5D8" stroke-width="2" opacity="0.5"/><line x1="80" y1="8" x2="78" y2="23" stroke="#6BC5D8" stroke-width="2" opacity="0.4"/><circle cx="60" cy="40" r="18" fill="#FFD93D"/><path d="M 50 37 Q 53 34 56 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 64 37 Q 67 34 70 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 55 44 Q 60 48 65 44" fill="none" stroke="#333" stroke-width="1.5"/><rect x="38" y="58" width="44" height="30" rx="5" fill="#FFD93D"/><line x1="15" y1="55" x2="15" y2="25" stroke="#8B6C5C" stroke-width="3"/><path d="M 0 28 Q 8 8 15 10 Q 22 8 30 28" fill="#E87B6B"/><rect x="44" y="88" width="14" height="12" rx="3" fill="#E87B6B"/><rect x="62" y="88" width="14" height="12" rx="3" fill="#E87B6B"/></svg>`,
  birthday: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="40" r="18" fill="#FFD93D"/><path d="M 50 37 Q 53 33 56 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 64 37 Q 67 33 70 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 50 45 Q 60 55 70 45" fill="#FF6B6B"/><polygon points="52,22 60,0 68,22" fill="#6B9DFF"/><circle cx="60" cy="0" r="3" fill="#FFD93D"/><rect x="42" y="58" width="36" height="30" rx="5" fill="#E87BA0"/><rect x="80" y="55" width="24" height="18" rx="4" fill="#F5DEB3"/><rect x="90" y="45" width="3" height="10" fill="#6B8FD4"/><ellipse cx="91.5" cy="43" rx="3" ry="4" fill="#FFD93D"/></svg>`,
  sports: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="40" r="18" fill="#FFD93D"/><path d="M 50 37 Q 53 34 56 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 64 37 Q 67 34 70 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 55 45 Q 60 47 65 45" fill="none" stroke="#333" stroke-width="1.5"/><path d="M 40 22 Q 60 18 80 22" fill="none" stroke="#E87B6B" stroke-width="4"/><rect x="42" y="58" width="36" height="28" rx="5" fill="#E87B6B"/><text x="55" y="76" font-size="14" font-weight="bold" fill="white">7</text><circle cx="25" cy="90" r="10" fill="#E87B00"/><line x1="52" y1="86" x2="48" y2="110" stroke="#FFD93D" stroke-width="5"/><line x1="68" y1="86" x2="72" y2="110" stroke="#FFD93D" stroke-width="5"/><ellipse cx="46" cy="112" rx="8" ry="4" fill="white"/><ellipse cx="74" cy="112" rx="8" ry="4" fill="white"/></svg>`,
  snowy: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="15" r="3" fill="white" opacity="0.7"/><circle cx="60" cy="10" r="2.5" fill="white" opacity="0.6"/><circle cx="95" cy="18" r="3" fill="white" opacity="0.7"/><circle cx="60" cy="40" r="18" fill="#FFD93D"/><path d="M 50 37 Q 53 34 56 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 64 37 Q 67 34 70 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 55 44 Q 60 48 65 44" fill="none" stroke="#333" stroke-width="1.5"/><rect x="35" y="58" width="50" height="32" rx="5" fill="#6B8FD4"/><path d="M 42 60 Q 60 68 78 60" fill="#E87B6B"/><rect x="30" y="38" width="10" height="14" rx="6" fill="#E87B6B"/><rect x="80" y="38" width="10" height="14" rx="6" fill="#E87B6B"/><circle cx="25" cy="85" r="5" fill="#E87B6B"/><circle cx="95" cy="85" r="5" fill="#E87B6B"/><rect x="44" y="90" width="14" height="14" rx="3" fill="#5A4A3A"/><rect x="62" y="90" width="14" height="14" rx="3" fill="#5A4A3A"/></svg>`,
  movie: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="40" r="18" fill="#FFD93D"/><rect x="47" y="32" width="10" height="8" rx="3" fill="#333"/><rect x="63" y="32" width="10" height="8" rx="3" fill="#333"/><line x1="57" y1="36" x2="63" y2="36" stroke="#333" stroke-width="2"/><path d="M 55 46 Q 60 50 65 46" fill="none" stroke="#333" stroke-width="1.5"/><rect x="42" y="58" width="36" height="30" rx="5" fill="#8B6C5C"/><line x1="35" y1="62" x2="25" y2="55" stroke="#FFD93D" stroke-width="6"/><rect x="10" y="48" width="22" height="24" rx="3" fill="#E87B6B"/><circle cx="18" cy="44" r="4" fill="#F5DEB3"/><circle cx="26" cy="42" r="4.5" fill="#F5DEB3"/><rect x="85" y="52" width="22" height="14" rx="2" fill="white"/></svg>`,
  garden: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="100" r="6" fill="#6BAA6B" opacity="0.5"/><circle cx="105" cy="98" r="8" fill="#5A9A5A" opacity="0.4"/><circle cx="60" cy="40" r="18" fill="#FFD93D"/><path d="M 50 40 Q 53 36 56 40" fill="none" stroke="#333" stroke-width="2"/><path d="M 64 40 Q 67 36 70 40" fill="none" stroke="#333" stroke-width="2"/><path d="M 55 46 Q 60 49 65 46" fill="none" stroke="#333" stroke-width="1.5"/><ellipse cx="60" cy="24" rx="22" ry="8" fill="#E8C88A"/><ellipse cx="60" cy="20" rx="14" ry="12" fill="#F0D8A0"/><rect x="42" y="58" width="36" height="30" rx="5" fill="white"/><path d="M 42 64 L 38 88 L 82 88 L 78 64 Z" fill="#A8D8A8"/><line x1="35" y1="62" x2="22" y2="55" stroke="#FFD93D" stroke-width="6"/><rect x="8" y="45" width="18" height="14" rx="3" fill="#88C888"/><circle cx="100" cy="75" r="5" fill="#E87BA0"/><circle cx="100" cy="75" r="2.5" fill="#FFD93D"/></svg>`,
  nightSnack: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="18" r="12" fill="#FFD93D" opacity="0.08"/><circle cx="60" cy="40" r="18" fill="#FFD93D"/><path d="M 50 37 Q 53 34 56 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 64 37 Q 67 34 70 37" fill="none" stroke="#333" stroke-width="2"/><path d="M 55 45 Q 60 49 65 45" fill="none" stroke="#333" stroke-width="1.5"/><rect x="42" y="58" width="36" height="30" rx="5" fill="#5A5A7A"/><path d="M 50 58 Q 60 62 70 58" fill="none" stroke="#4A4A6A" stroke-width="1"/><line x1="35" y1="62" x2="22" y2="58" stroke="#FFD93D" stroke-width="6"/><line x1="18" y1="52" x2="18" y2="70" stroke="#8B6C5C" stroke-width="2"/><ellipse cx="18" cy="54" rx="5" ry="3" fill="#E87B00"/><ellipse cx="18" cy="60" rx="5" ry="3" fill="#CC6600"/><ellipse cx="18" cy="66" rx="5" ry="3" fill="#E87B00"/><rect x="85" y="58" width="16" height="22" rx="4" fill="white"/><rect x="87" y="60" width="12" height="8" rx="2" fill="#D4A574"/><ellipse cx="50" cy="110" rx="7" ry="3" fill="#5A5A7A"/><ellipse cx="70" cy="110" rx="7" ry="3" fill="#5A5A7A"/></svg>`,
};

// Get the SVG for a given scene type
export function getCharacterSVG(scene: SceneType): string {
  return characterSVGs[scene] || characterSVGs.selfie;
}
