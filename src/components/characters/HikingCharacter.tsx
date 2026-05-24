// Hiking - 男仆风格：黑白执事服，扫帚
export function hikingSVG() {
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
      <linearGradient id="hiking-dress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3A3A"/>
        <stop offset="100%" stop-color="#222"/>
      </linearGradient>
      <linearGradient id="hiking-apron" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#F0F0F0"/>
      </linearGradient>
      <radialGradient id="hiking-bg" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#F8F0FF"/>
        <stop offset="100%" stop-color="#E8D8F0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect x="0" y="0" width="120" height="120" fill="url(#hiking-bg)" rx="8"/>
    <circle cx="20" cy="25" r="1.2" fill="#FFD700" opacity="0.5"/>
    <circle cx="100" cy="20" r="1" fill="#FFD700" opacity="0.4"/>
    <circle cx="15" cy="80" r="0.8" fill="#FFD700" opacity="0.3"/>
    <circle cx="105" cy="75" r="1.1" fill="#FFD700" opacity="0.4"/>
    <polygon points="30,50 31,53 34,53 32,55 33,58 30,56 27,58 28,55 26,53 29,53" fill="#FFD700" opacity="0.35"/>
    <polygon points="90,40 91,42 93,42 92,43 92,45 90,44 88,45 88,43 87,42 89,42" fill="#FFD700" opacity="0.3"/>

    <!-- LEGS -->
    <rect x="47" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <rect x="65" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <path d="M45 116 Q44 120 48 120 L56 120 Q58 120 58 116 L55 116 Z" fill="#222"/>
    <path d="M63 116 Q62 120 66 120 L74 120 Q76 120 76 116 L73 116 Z" fill="#222"/>

    <!-- BODY - black outfit with white apron -->
    <path d="M40 80 Q38 78 36 82 L34 108 L86 108 L84 82 Q82 78 80 80 Z" fill="url(#hiking-dress)"/>
    <path d="M42 84 L40 108 L80 108 L78 84 Z" fill="url(#hiking-apron)" stroke="#DDD" stroke-width="0.4"/>
    <path d="M42 84 Q36 86 34 90" fill="none" stroke="#EEE" stroke-width="2" stroke-linecap="round"/>
    <path d="M78 84 Q84 86 86 90" fill="none" stroke="#EEE" stroke-width="2" stroke-linecap="round"/>
    <line x1="60" y1="84" x2="60" y2="108" stroke="#E8E8E8" stroke-width="0.5"/>
    <rect x="52" y="94" width="16" height="10" rx="2" fill="none" stroke="#DDD" stroke-width="0.6"/>
    <path d="M46 80 Q52 76 60 80 Q68 76 74 80" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M36 82 L34 84" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M84 82 L86 84" stroke="white" stroke-width="2.5" stroke-linecap="round"/>

          <!-- Neck -->
      <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- LEFT ARM -->
    <path d="M38 82 Q26 86 20 96" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="19" cy="98" r="5" fill="url(#s0)"/>
    <!-- RIGHT ARM (holding broom) -->
    <path d="M80 82 Q92 76 98 66" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="99" cy="64" r="5" fill="url(#s0)"/>
    <!-- Broom -->
    <line x1="100" y1="62" x2="108" y2="118" stroke="#A08050" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M105 112 L100 120 L108 120 L112 112 Z" fill="#C8A060"/>
    <line x1="106" y1="112" x2="104" y2="120" stroke="#B89050" stroke-width="0.5"/>
    <line x1="108" y1="112" x2="107" y2="120" stroke="#B89050" stroke-width="0.5"/>
    <line x1="110" y1="112" x2="110" y2="120" stroke="#B89050" stroke-width="0.5"/>
    <rect x="104" y="110" width="8" height="3" rx="1" fill="#888"/>

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

    <!-- Maid headband -->
    <path d="M34 28 Q60 22 86 28" fill="none" stroke="white" stroke-width="3" stroke-linecap="round"/>
    <path d="M36 26 Q40 22 44 26 Q48 22 52 26 Q56 22 60 26 Q64 22 68 26 Q72 22 76 26 Q80 22 84 26" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M76 24 Q80 18 84 24" fill="white" stroke="#EEE" stroke-width="0.3"/>
    <path d="M84 24 Q88 18 92 24" fill="white" stroke="#EEE" stroke-width="0.3"/>
    <circle cx="82" cy="24" r="2" fill="#EEE"/>

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
