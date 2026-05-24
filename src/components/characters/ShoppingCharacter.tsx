// Shopping - 学生少年风格：白衬衫，格子裙，红领结，书本
export function shoppingSVG() {
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
      <linearGradient id="shopping-shirt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#F0F0F0"/>
      </linearGradient>
      <linearGradient id="shopping-plaid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5A9A5A"/>
        <stop offset="100%" stop-color="#3A7A3A"/>
      </linearGradient>
      <radialGradient id="shopping-bg" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#FFF8E0"/>
        <stop offset="100%" stop-color="#F0E8D0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect x="0" y="0" width="120" height="120" fill="url(#shopping-bg)" rx="8"/>
    <circle cx="20" cy="25" r="6" fill="#FF4444" opacity="0.5"/>
    <path d="M20 19 Q22 16 24 18" fill="none" stroke="#4A8A2A" stroke-width="1" opacity="0.5"/>
    <rect x="90" y="30" width="12" height="8" rx="1" fill="#4488CC" opacity="0.4" transform="rotate(-10 96 34)"/>
    <rect x="92" y="28" width="12" height="8" rx="1" fill="#CC4444" opacity="0.35" transform="rotate(5 98 32)"/>
    <circle cx="100" cy="15" r="1" fill="#FFD700" opacity="0.4"/>
    <circle cx="15" cy="60" r="0.8" fill="#FFD700" opacity="0.3"/>

    <!-- LEGS -->
    <rect x="47" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <rect x="65" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <path d="M45 116 Q44 120 48 120 L56 120 Q58 120 58 116 L55 116 Z" fill="#8B6C5C"/>
    <path d="M63 116 Q62 120 66 120 L74 120 Q76 120 76 116 L73 116 Z" fill="#8B6C5C"/>

    <!-- BODY - white shirt + green plaid -->
    <path d="M40 80 Q38 78 36 82 L34 96 L86 96 L84 82 Q82 78 80 80 Z" fill="url(#shopping-shirt)"/>
    <path d="M50 78 L56 84 L60 78 L64 84 L70 78" fill="none" stroke="#E0E0E0" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Green plaid skirt -->
    <path d="M34 96 L32 108 L88 108 L86 96 Z" fill="url(#shopping-plaid)"/>
    <line x1="44" y1="96" x2="42" y2="108" stroke="#4A8A4A" stroke-width="0.8" opacity="0.4"/>
    <line x1="54" y1="96" x2="52" y2="108" stroke="#4A8A4A" stroke-width="0.8" opacity="0.4"/>
    <line x1="64" y1="96" x2="66" y2="108" stroke="#4A8A4A" stroke-width="0.8" opacity="0.4"/>
    <line x1="74" y1="96" x2="76" y2="108" stroke="#4A8A4A" stroke-width="0.8" opacity="0.4"/>
    <line x1="34" y1="100" x2="86" y2="100" stroke="#4A8A4A" stroke-width="0.6" opacity="0.3"/>
    <line x1="33" y1="104" x2="87" y2="104" stroke="#4A8A4A" stroke-width="0.6" opacity="0.3"/>

          <!-- Neck -->
      <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- Red necktie -->
    <path d="M58 72 L56 82 L60 86 L64 82 L62 72 Z" fill="#CC3333"/>
    <path d="M58 74 L60 82 L62 74" fill="#DD4444" opacity="0.4"/>
    <path d="M56 72 Q60 70 64 72 Q60 74 56 72" fill="#BB2222"/>

    <!-- ARMS (holding books) -->
    <path d="M38 82 Q26 86 20 94" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="19" cy="96" r="5" fill="url(#s0)"/>
    <path d="M80 82 Q92 80 98 88" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="99" cy="90" r="5" fill="url(#s0)"/>
    <!-- Stack of books -->
    <rect x="14" y="88" width="18" height="5" rx="1" fill="#4488CC" stroke="#3366AA" stroke-width="0.3"/>
    <rect x="15" y="83" width="16" height="5" rx="1" fill="#CC4444" stroke="#AA3333" stroke-width="0.3"/>
    <rect x="13" y="78" width="18" height="5" rx="1" fill="#44AA44" stroke="#338833" stroke-width="0.3"/>
    <line x1="20" y1="89" x2="20" y2="93" stroke="#3366AA" stroke-width="0.4" opacity="0.5"/>
    <line x1="21" y1="84" x2="21" y2="88" stroke="#AA3333" stroke-width="0.4" opacity="0.5"/>

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
