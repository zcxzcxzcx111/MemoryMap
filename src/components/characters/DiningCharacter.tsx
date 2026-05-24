// Dining - 冬日少年风格：白色毛绒冬装，礼盒，雪花
export function diningSVG() {
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
      <linearGradient id="dining-coat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E8F0FF"/>
        <stop offset="100%" stop-color="#C8D8F0"/>
      </linearGradient>
      <linearGradient id="dining-fur" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#E8E8E8"/>
      </linearGradient>
      <linearGradient id="dining-hat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E0E8F8"/>
        <stop offset="100%" stop-color="#B8C8E0"/>
      </linearGradient>
      <linearGradient id="dining-box" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7EB8E0"/>
        <stop offset="100%" stop-color="#5A98C0"/>
      </linearGradient>
      <radialGradient id="dining-bg" cx="0.5" cy="0.3" r="0.6">
        <stop offset="0%" stop-color="#E8F0FF"/>
        <stop offset="100%" stop-color="#C0D8F0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect x="0" y="0" width="120" height="120" fill="url(#dining-bg)" rx="8"/>
    <text x="15" y="20" font-size="8" fill="#A8C8E8" opacity="0.6">&#10052;</text>
    <text x="95" y="15" font-size="6" fill="#A8C8E8" opacity="0.5">&#10052;</text>
    <text x="105" y="50" font-size="7" fill="#A8C8E8" opacity="0.4">&#10052;</text>
    <text x="10" y="70" font-size="5" fill="#A8C8E8" opacity="0.5">&#10052;</text>
    <circle cx="30" cy="30" r="1" fill="#FFD700" opacity="0.4"/>
    <circle cx="80" cy="20" r="0.8" fill="#FFD700" opacity="0.3"/>
    <circle cx="100" cy="65" r="1.2" fill="#FFD700" opacity="0.35"/>
    <ellipse cx="60" cy="122" rx="65" ry="8" fill="white" opacity="0.4"/>

    <!-- LEGS -->
    <rect x="47" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <rect x="65" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <path d="M44 116 Q43 120 47 120 L56 120 Q59 120 58 116 L56 116 Z" fill="#B0C0D8"/>
    <path d="M44 116 L44 118" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
    <path d="M62 116 Q61 120 65 120 L74 120 Q77 120 76 116 L74 116 Z" fill="#B0C0D8"/>
    <path d="M62 116 L62 118" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.5"/>

    <!-- BODY - winter coat -->
    <path d="M38 80 Q36 78 34 82 L32 108 L88 108 L86 82 Q84 78 82 80 Z" fill="url(#dining-coat)"/>
    <line x1="60" y1="80" x2="60" y2="108" stroke="#B0C0D8" stroke-width="1"/>
    <path d="M32 106 Q60 110 88 106 Q88 110 60 114 Q32 110 32 106 Z" fill="url(#dining-fur)" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="58" cy="88" r="1.5" fill="#A8B8D0"/>
    <circle cx="58" cy="96" r="1.5" fill="#A8B8D0"/>
    <circle cx="58" cy="104" r="1.5" fill="#A8B8D0"/>
    <rect x="40" y="94" width="12" height="8" rx="2" fill="none" stroke="#B0C0D8" stroke-width="0.6"/>
    <rect x="68" y="94" width="12" height="8" rx="2" fill="none" stroke="#B0C0D8" stroke-width="0.6"/>

          <!-- Neck -->
      <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- Scarf -->
    <path d="M44 66 Q60 72 76 66" fill="none" stroke="#87CEEB" stroke-width="4" stroke-linecap="round"/>
    <path d="M44 66 Q60 70 76 66" fill="none" stroke="#A0D8F0" stroke-width="2" opacity="0.5"/>
    <path d="M72 68 Q78 76 76 86" fill="none" stroke="#87CEEB" stroke-width="3.5" stroke-linecap="round"/>

    <!-- ARMS -->
    <path d="M38 82 Q26 86 20 92" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="19" cy="93" r="5" fill="url(#s0)"/>
    <path d="M80 82 Q92 86 98 92" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="99" cy="93" r="5" fill="url(#s0)"/>

    <!-- Gift box -->
    <rect x="38" y="90" width="20" height="16" rx="2" fill="url(#dining-box)" stroke="#4A88B0" stroke-width="0.5"/>
    <rect x="46" y="90" width="3" height="16" fill="#FF6B8A" opacity="0.7"/>
    <rect x="38" y="96" width="20" height="3" fill="#FF6B8A" opacity="0.7"/>
    <path d="M44 90 Q42 86 44 88 Q46 86 48 90" fill="#FF6B8A"/>
    <path d="M52 90 Q50 86 52 88 Q54 86 56 90" fill="#FF6B8A"/>
    <circle cx="48" cy="90" r="1.5" fill="#FF8899"/>
    <rect x="40" y="92" width="6" height="3" rx="1" fill="white" opacity="0.15"/>

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

    <!-- Winter hat -->
    <path d="M36 32 Q36 14 60 10 Q84 14 84 32" fill="url(#dining-hat)" stroke="#B0C0D8" stroke-width="0.4"/>
    <path d="M34 32 Q60 36 86 32 Q86 38 60 40 Q34 38 34 32 Z" fill="url(#dining-fur)" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="60" cy="8" r="5" fill="url(#dining-fur)" stroke="#DDD" stroke-width="0.3"/>
    <ellipse cx="55" cy="18" rx="8" ry="4" fill="white" opacity="0.1"/>

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
