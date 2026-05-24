// Travel - 优雅少年风格：紫色华丽服装，珍珠，皇冠
export function travelSVG() {
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
      <linearGradient id="travel-outfit" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8844AA"/>
        <stop offset="100%" stop-color="#6622AA"/>
      </linearGradient>
      <linearGradient id="travel-outfit2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#AA66CC"/>
        <stop offset="100%" stop-color="#8844AA"/>
      </linearGradient>
      <linearGradient id="travel-crown" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFD700"/>
        <stop offset="100%" stop-color="#DAA520"/>
      </linearGradient>
      <radialGradient id="travel-bg" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#F0E8FF"/>
        <stop offset="100%" stop-color="#E0D0F0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect x="0" y="0" width="120" height="120" fill="url(#travel-bg)" rx="8"/>
    <polygon points="20,30 23,25 26,30 23,35" fill="#E0E0FF" opacity="0.5"/>
    <polygon points="95,25 98,20 101,25 98,30" fill="#E0E0FF" opacity="0.4"/>
    <polygon points="105,65 107,61 109,65 107,69" fill="#E0E0FF" opacity="0.35"/>
    <circle cx="30" cy="20" r="2" fill="white" opacity="0.5"/>
    <circle cx="33" cy="22" r="1.5" fill="white" opacity="0.4"/>
    <circle cx="88" cy="45" r="2" fill="white" opacity="0.45"/>
    <polygon points="45,12 46,15 49,15 47,17 48,20 45,18 42,20 43,17 41,15 44,15" fill="#FFD700" opacity="0.4"/>
    <polygon points="80,15 81,17 83,17 82,18 82,20 80,19 78,20 78,18 77,17 79,17" fill="#FFD700" opacity="0.35"/>
    <circle cx="60" cy="10" r="1" fill="#FFD700" opacity="0.5"/>
    <circle cx="15" cy="50" r="1.2" fill="#FFD700" opacity="0.4"/>

    <!-- LEGS -->
    <rect x="47" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <rect x="65" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <path d="M45 116 Q44 120 48 120 L56 120 Q58 120 58 116 L55 116 Z" fill="#6622AA"/>
    <path d="M46 117 Q48 119 54 119" fill="none" stroke="#8844AA" stroke-width="0.6" opacity="0.5"/>
    <path d="M63 116 Q62 120 66 120 L74 120 Q76 120 76 116 L73 116 Z" fill="#6622AA"/>
    <path d="M66 117 Q68 119 72 119" fill="none" stroke="#8844AA" stroke-width="0.6" opacity="0.5"/>

    <!-- BODY - purple elegant outfit -->
    <path d="M38 80 Q36 78 34 82 L32 108 L88 108 L86 82 Q84 78 82 80 Z" fill="url(#travel-outfit)"/>
    <path d="M40 82 Q50 80 58 82 L56 108 L36 108 Z" fill="url(#travel-outfit2)" opacity="0.2"/>
    <path d="M44 78 Q52 72 60 78 Q68 72 76 78" fill="none" stroke="#AA66CC" stroke-width="2" stroke-linecap="round"/>
    <path d="M46 80 Q54 74 60 80 Q66 74 74 80" fill="none" stroke="#BB88DD" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
    <line x1="44" y1="86" x2="44" y2="106" stroke="#AA66CC" stroke-width="0.5" opacity="0.4"/>
    <line x1="76" y1="86" x2="76" y2="106" stroke="#AA66CC" stroke-width="0.5" opacity="0.4"/>
    <path d="M32 106 L88 106" stroke="#FFD700" stroke-width="1.5" opacity="0.5"/>
    <circle cx="60" cy="88" r="2.5" fill="#FF69B4"/>
    <circle cx="59" cy="87" r="1" fill="white" opacity="0.4"/>

          <!-- Neck -->
      <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- Pearl necklace -->
    <circle cx="46" cy="66" r="1.8" fill="white" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="51" cy="68" r="1.8" fill="white" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="56" cy="69" r="1.8" fill="white" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="60" cy="70" r="2.2" fill="white" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="64" cy="69" r="1.8" fill="white" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="69" cy="68" r="1.8" fill="white" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="74" cy="66" r="1.8" fill="white" stroke="#DDD" stroke-width="0.3"/>
    <circle cx="60" cy="72" r="2" fill="#FFD700"/>
    <circle cx="60" cy="72" r="1" fill="#FF69B4"/>

    <!-- ARMS -->
    <path d="M38 82 Q26 88 22 98" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="21" cy="100" r="5" fill="url(#s0)"/>
    <path d="M80 82 Q90 88 92 98" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="93" cy="100" r="5" fill="url(#s0)"/>

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

    <!-- Small crown -->
    <path d="M46 20 L48 12 L54 16 L58 8 L62 16 L68 12 L70 20 Z" fill="url(#travel-crown)" stroke="#DAA520" stroke-width="0.4"/>
    <circle cx="54" cy="16" r="1.5" fill="#FF69B4"/>
    <circle cx="58" cy="12" r="2" fill="#4488FF"/>
    <circle cx="62" cy="16" r="1.5" fill="#FF69B4"/>
    <rect x="46" y="18" width="24" height="3" rx="1" fill="url(#travel-crown)" stroke="#DAA520" stroke-width="0.3"/>

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
