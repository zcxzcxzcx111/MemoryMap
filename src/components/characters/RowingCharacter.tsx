// Rowing - 猫耳少年风格：深色衣服，猫耳，蝙蝠背景
export function rowingSVG() {
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
      <linearGradient id="rowing-outfit" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3A4A"/>
        <stop offset="100%" stop-color="#2A2A3A"/>
      </linearGradient>
      <linearGradient id="rowing-boot" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A4A5A"/>
        <stop offset="100%" stop-color="#2A2A3A"/>
      </linearGradient>
      <radialGradient id="rowing-bg" cx="0.5" cy="0.4" r="0.6">
        <stop offset="0%" stop-color="#3A3A5A"/>
        <stop offset="100%" stop-color="#1A1A2E"/>
      </radialGradient>
      <radialGradient id="rowing-moon" cx="0.4" cy="0.4" r="0.5">
        <stop offset="0%" stop-color="#FFFFCC"/>
        <stop offset="100%" stop-color="#FFE888"/>
      </radialGradient>
    </defs>

    <!-- Background - dark night -->
    <rect x="0" y="0" width="120" height="120" fill="url(#rowing-bg)" rx="8"/>
    <circle cx="90" cy="20" r="12" fill="url(#rowing-moon)" opacity="0.8"/>
    <circle cx="94" cy="18" r="10" fill="url(#rowing-bg)"/>
    <circle cx="20" cy="12" r="1" fill="white" opacity="0.6"/>
    <circle cx="40" cy="8" r="0.8" fill="white" opacity="0.4"/>
    <circle cx="60" cy="15" r="0.6" fill="white" opacity="0.5"/>
    <circle cx="108" cy="30" r="0.7" fill="white" opacity="0.3"/>
    <!-- Bats -->
    <path d="M20 25 Q16 20 20 22 Q24 20 20 25" fill="#2A2A3A" opacity="0.6"/>
    <path d="M100 40 Q96 35 100 37 Q104 35 100 40" fill="#2A2A3A" opacity="0.5"/>
    <path d="M35 15 Q32 11 35 13 Q38 11 35 15" fill="#2A2A3A" opacity="0.4"/>
    <circle cx="50" cy="30" r="1" fill="#9B59B6" opacity="0.4"/>
    <circle cx="75" cy="10" r="0.8" fill="#9B59B6" opacity="0.3"/>

    <!-- LEGS -->
    <rect x="47" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <rect x="65" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <path d="M45 116 Q44 120 48 120 L55 120 Q58 120 58 116 L55 116 Z" fill="url(#rowing-boot)"/>
    <path d="M63 116 Q62 120 66 120 L73 120 Q76 120 76 116 L73 116 Z" fill="url(#rowing-boot)"/>

    <!-- BODY - dark bodysuit -->
    <path d="M40 80 Q38 78 36 82 L34 106 L86 106 L84 82 Q82 78 80 80 Z" fill="url(#rowing-outfit)"/>
    <line x1="60" y1="80" x2="60" y2="106" stroke="#4A4A5A" stroke-width="0.8"/>
    <rect x="38" y="96" width="44" height="3" rx="1" fill="#5A5A6A"/>
    <rect x="58" y="95" width="6" height="5" rx="1" fill="#888"/>

          <!-- Neck -->
      <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>
    <!-- Choker -->
    <path d="M46 64 Q60 68 74 64" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round"/>
    <circle cx="60" cy="67" r="1.5" fill="#AAA"/>

    <!-- ARMS -->
    <path d="M38 82 Q28 88 24 100" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="23" cy="102" r="5" fill="url(#s0)"/>
    <path d="M80 82 Q90 76 96 68" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="97" cy="66" r="5" fill="url(#s0)"/>

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

    <!-- CAT EARS -->
    <path d="M40 20 L44 6 L52 18" fill="url(#h0)" stroke="#222" stroke-width="0.5"/>
    <path d="M42 18 L44 9 L50 18" fill="#FFB0C0" opacity="0.5"/>
    <path d="M68 18 L76 6 L80 20" fill="url(#h0)" stroke="#222" stroke-width="0.5"/>
    <path d="M70 18 L76 9 L78 18" fill="#FFB0C0" opacity="0.5"/>

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
