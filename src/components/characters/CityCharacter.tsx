// City - 圣诞少年风格：圣诞帽，红白服装，圣诞元素
export function citySVG() {
  return `
    <defs>
      <linearGradient id="s0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFE8CC"/>
        <stop offset="100%" stop-color="#FFD4A8"/>
      </linearGradient>
      <radialGradient id="ss0" cx="0.4" cy="0.3" r="0.6">
        <stop offset="0%" stop-color="#FFF0DE"/>
        <stop offset="100%" stop-color="#FFD4A8"/>
      </radialGradient>
      <radialGradient id="bl0" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#FF9BBC" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#FF9BBC" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="h0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3A3A"/>
        <stop offset="50%" stop-color="#222"/>
        <stop offset="100%" stop-color="#111"/>
      </linearGradient>
      <linearGradient id="city-suit" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#DD3333"/>
        <stop offset="100%" stop-color="#BB2222"/>
      </linearGradient>
      <linearGradient id="city-trim" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#E8E8E8"/>
      </linearGradient>
      <linearGradient id="city-hat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#EE3333"/>
        <stop offset="100%" stop-color="#CC2222"/>
      </linearGradient>
      <radialGradient id="city-bg" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#1A3A1A"/>
        <stop offset="100%" stop-color="#0A2A0A"/>
      </radialGradient>
    </defs>

    <!-- Background - dark green Christmas -->
    <rect x="0" y="0" width="120" height="120" fill="url(#city-bg)" rx="8"/>
    <!-- Christmas tree -->
    <polygon points="20,110 30,70 40,110" fill="#2A6A2A"/>
    <polygon points="22,100 30,75 38,100" fill="#3A8A3A"/>
    <polygon points="30,68 31,71 34,71 32,73 33,76 30,74 27,76 28,73 26,71 29,71" fill="#FFD700"/>
    <circle cx="26" cy="90" r="2" fill="#FF4444"/>
    <circle cx="34" cy="95" r="1.8" fill="#FFD700"/>
    <circle cx="28" cy="82" r="1.5" fill="#4488FF"/>
    <circle cx="32" cy="88" r="1.6" fill="#FF69B4"/>
    <!-- Bell -->
    <path d="M95 35 Q95 28 100 28 Q105 28 105 35 Z" fill="#FFD700" opacity="0.6"/>
    <circle cx="100" cy="36" r="2" fill="#DAA520" opacity="0.6"/>
    <!-- Candy cane -->
    <path d="M105 50 Q108 40 105 35" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    <path d="M105 50 Q108 40 105 35" fill="none" stroke="#FF4444" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3,3" opacity="0.5"/>
    <!-- Snowflakes -->
    <text x="15" y="40" font-size="6" fill="white" opacity="0.3">&#10052;</text>
    <text x="85" y="20" font-size="5" fill="white" opacity="0.25">&#10052;</text>
    <text x="50" y="15" font-size="4" fill="white" opacity="0.2">&#10052;</text>
    <!-- String lights -->
    <path d="M0 8 Q30 16 60 8 Q90 0 120 8" fill="none" stroke="#4A4A4A" stroke-width="0.8"/>
    <circle cx="15" cy="11" r="2" fill="#FF4444" opacity="0.6"/>
    <circle cx="35" cy="13" r="2" fill="#44FF44" opacity="0.6"/>
    <circle cx="55" cy="10" r="2" fill="#4444FF" opacity="0.6"/>
    <circle cx="75" cy="7" r="2" fill="#FFD700" opacity="0.6"/>
    <circle cx="95" cy="9" r="2" fill="#FF69B4" opacity="0.6"/>

    <!-- LEGS -->
    <rect x="47" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <rect x="65" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <path d="M44 116 Q43 120 47 120 L56 120 Q59 120 58 116 L56 116 Z" fill="#CC2222"/>
    <path d="M44 116 L44 118" stroke="white" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
    <path d="M62 116 Q61 120 65 120 L74 120 Q77 120 76 116 L74 116 Z" fill="#CC2222"/>
    <path d="M62 116 L62 118" stroke="white" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>

    <!-- BODY - Christmas suit -->
    <path d="M38 80 Q36 78 34 82 L32 108 L88 108 L86 82 Q84 78 82 80 Z" fill="url(#city-suit)"/>
    <path d="M32 106 Q60 110 88 106 Q88 110 60 114 Q32 110 32 106 Z" fill="url(#city-trim)" stroke="#DDD" stroke-width="0.3"/>
    <rect x="36" y="96" width="48" height="4" rx="1" fill="#222"/>
    <rect x="57" y="95" width="6" height="6" rx="1" fill="#FFD700"/>
    <rect x="58.5" y="96" width="3" height="4" rx="0.5" fill="#DAA520"/>
    <line x1="60" y1="80" x2="60" y2="96" stroke="#AA1111" stroke-width="1" opacity="0.5"/>
    <circle cx="52" cy="86" r="1.5" fill="#FFD700"/>
    <circle cx="52" cy="92" r="1.5" fill="#FFD700"/>
    <circle cx="68" cy="86" r="1.5" fill="#FFD700"/>
    <circle cx="68" cy="92" r="1.5" fill="#FFD700"/>

          <!-- Neck -->
      <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <path d="M44 72 Q60 78 76 72" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" opacity="0.8"/>

    <!-- ARMS -->
    <path d="M38 82 Q26 86 20 96" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="19" cy="98" r="5" fill="url(#s0)"/>
    <path d="M22 94 Q20 96 22 98" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
    <path d="M80 82 Q92 76 98 68" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="99" cy="66" r="5" fill="url(#s0)"/>
    <path d="M96 68 Q98 66 100 68" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.7"/>

          <!-- HAIR back -->
      <path d="M34 42 Q34 16 60 12 Q86 16 86 42" fill="url(#h0)"/>
      <path d="M34 42 Q30 50 30 58 Q29 62 33 60 Q35 52 36 44" fill="url(#h0)"/>
      <path d="M86 42 Q90 50 90 58 Q91 62 87 60 Q85 52 84 44" fill="url(#h0)"/>
      <path d="M36 38 Q34 20 60 14 Q86 20 84 38" fill="#2A2A2A"/>
      <path d="M48 20 Q56 16 64 20" fill="#444" opacity="0.25"/>
      <path d="M52 18 Q58 14 62 18" fill="#555" opacity="0.15"/>
      <!-- Bangs -->
      <path d="M38 36 Q42 28 48 34 Q52 26 56 34 Q60 26 64 34 Q68 28 74 34 Q78 30 82 36 L82 42 Q76 36 72 40 Q66 32 62 38 Q58 32 54 38 Q50 32 46 40 Q42 36 38 42 Z" fill="url(#h0)"/>
      <path d="M46 34 Q50 30 54 34" fill="#444" opacity="0.15"/>
      <path d="M58 32 Q62 28 66 32" fill="#444" opacity="0.1"/>

    <!-- Santa hat -->
    <path d="M36 30 Q38 12 60 8 Q82 12 84 30" fill="url(#city-hat)" stroke="#AA1111" stroke-width="0.4"/>
    <path d="M34 30 Q60 34 86 30 Q86 36 60 38 Q34 36 34 30 Z" fill="url(#city-trim)" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="60" cy="6" r="5" fill="url(#city-trim)" stroke="#DDD" stroke-width="0.3"/>
    <path d="M60 8 Q70 4 78 10" fill="url(#city-hat)" stroke="#AA1111" stroke-width="0.3"/>

          <!-- HEAD -->
      <circle cx="60" cy="46" r="26" fill="url(#ss0)" stroke="#E8C4A0" stroke-width="0.3"/>
      <ellipse cx="60" cy="64" rx="14" ry="6" fill="#F0CDA0" opacity="0.3"/>
      <!-- EYES -->
      <ellipse cx="49" cy="46" rx="7" ry="8" fill="white"/>
      <ellipse cx="50" cy="46" rx="5.5" ry="6.5" fill="#2C2C2C"/>
      <ellipse cx="50.5" cy="45.5" rx="3" ry="3.5" fill="#0A0A0A"/>
      <circle cx="53" cy="43" r="2.2" fill="white" opacity="0.95"/>
      <circle cx="48" cy="48" r="1" fill="white" opacity="0.6"/>
      <ellipse cx="49" cy="46" rx="7" ry="8" fill="none" stroke="#1A0A00" stroke-width="1" opacity="0.8"/>
      <ellipse cx="71" cy="46" rx="7" ry="8" fill="white"/>
      <ellipse cx="70" cy="46" rx="5.5" ry="6.5" fill="#2C2C2C"/>
      <ellipse cx="69.5" cy="45.5" rx="3" ry="3.5" fill="#0A0A0A"/>
      <circle cx="73" cy="43" r="2.2" fill="white" opacity="0.95"/>
      <circle cx="67" cy="48" r="1" fill="white" opacity="0.6"/>
      <ellipse cx="71" cy="46" rx="7" ry="8" fill="none" stroke="#1A0A00" stroke-width="1" opacity="0.8"/>
      <!-- Eyebrows -->
      <path d="M42 38 Q48 35 55 37" fill="none" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M65 37 Q72 35 78 38" fill="none" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Blush -->
      <ellipse cx="40" cy="54" rx="7" ry="4" fill="url(#bl0)"/>
      <ellipse cx="80" cy="54" rx="7" ry="4" fill="url(#bl0)"/>
      <!-- Nose -->
      <ellipse cx="60" cy="52" rx="1.5" ry="1" fill="#E8B88A" opacity="0.6"/>
      <!-- Mouth -->
      <path d="M53 58 Q57 63 60 63 Q63 63 67 58" fill="#FF8888" stroke="#CC6666" stroke-width="0.8" stroke-linecap="round"/>
      <path d="M56 60 Q60 64 64 60" fill="#FF6B6B" opacity="0.4"/>
  `;
}
