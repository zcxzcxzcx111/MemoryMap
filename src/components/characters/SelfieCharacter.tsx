// Selfie - 王子风格：粉色衣服，皇冠，爱心魔法棒
export function selfieSVG() {
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
      <linearGradient id="selfie-dress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FF88AA"/>
        <stop offset="100%" stop-color="#E85580"/>
      </linearGradient>
      <linearGradient id="selfie-dress2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#FFB0C8"/>
        <stop offset="100%" stop-color="#FF88AA"/>
      </linearGradient>
      <linearGradient id="selfie-crown" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFD700"/>
        <stop offset="100%" stop-color="#DAA520"/>
      </linearGradient>
      <linearGradient id="selfie-wand" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFB0C8"/>
        <stop offset="100%" stop-color="#FF69B4"/>
      </linearGradient>
      <radialGradient id="selfie-bg" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#FFD0E0"/>
        <stop offset="100%" stop-color="#FFB0C8"/>
      </radialGradient>
      <radialGradient id="selfie-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#FFD0E0" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect x="0" y="0" width="120" height="120" fill="url(#selfie-bg)" rx="8"/>
    <circle cx="60" cy="60" r="50" fill="url(#selfie-glow)"/>
    <!-- Floating hearts -->
    <path d="M15 20 Q15 16 18 16 Q21 16 21 20 Q21 24 18 26 Q15 24 15 20 Z" fill="#FF6B8A" opacity="0.5"/>
    <path d="M95 30 Q95 27 97 27 Q99 27 99 30 Q99 33 97 34 Q95 33 95 30 Z" fill="#FF6B8A" opacity="0.4"/>
    <path d="M100 80 Q100 77 102 77 Q104 77 104 80 Q104 83 102 84 Q100 83 100 80 Z" fill="#FF6B8A" opacity="0.35"/>
    <path d="M20 90 Q20 88 22 88 Q24 88 24 90 Q24 92 22 93 Q20 92 20 90 Z" fill="#FF6B8A" opacity="0.3"/>
    <!-- Sparkles -->
    <circle cx="30" cy="35" r="1.5" fill="#FFD700" opacity="0.5"/>
    <circle cx="90" cy="55" r="1.2" fill="#FFD700" opacity="0.4"/>
    <circle cx="50" cy="15" r="1" fill="#FFD700" opacity="0.6"/>
    <polygon points="25,55 26,58 29,58 27,60 28,63 25,61 22,63 23,60 21,58 24,58" fill="#FFD700" opacity="0.4"/>
    <polygon points="100,45 101,47 103,47 102,48 102,50 100,49 98,50 98,48 97,47 99,47" fill="#FFD700" opacity="0.35"/>

    <!-- LEGS -->
    <rect x="47" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <rect x="65" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <path d="M45 116 Q44 120 48 120 L55 120 Q57 120 57 116 Z" fill="#E85580"/>
    <path d="M63 116 Q62 120 66 120 L73 120 Q75 120 75 116 Z" fill="#E85580"/>

    <!-- BODY - pink prince outfit -->
    <path d="M40 80 Q38 78 36 82 L34 106 L86 106 L84 82 Q82 78 80 80 Z" fill="url(#selfie-dress)"/>
    <path d="M42 82 Q50 80 58 82 L56 106 L38 106 Z" fill="url(#selfie-dress2)" opacity="0.3"/>
    <path d="M46 78 Q52 74 60 78 Q68 74 74 78" fill="none" stroke="#FFB0C8" stroke-width="2" stroke-linecap="round"/>
    <path d="M48 80 Q54 76 60 80 Q66 76 72 80" fill="none" stroke="#FFC8D8" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
    <path d="M42 96 Q60 100 78 96" fill="none" stroke="#FF69B4" stroke-width="2" stroke-linecap="round"/>
    <path d="M56 96 Q58 92 60 96 Q62 92 64 96" fill="#FF69B4" opacity="0.6"/>

          <!-- Neck -->
      <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- LEFT ARM (on hip) -->
    <path d="M38 82 Q28 88 26 98" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="26" cy="100" r="5" fill="url(#s0)"/>
    <!-- RIGHT ARM (holding wand) -->
    <path d="M80 82 Q90 74 96 62" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="97" cy="60" r="5" fill="url(#s0)"/>
    <!-- Magic wand -->
    <line x1="97" y1="58" x2="104" y2="36" stroke="url(#selfie-wand)" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M104 32 Q104 28 107 28 Q110 28 110 32 Q110 36 107 38 Q104 36 104 32 Z" fill="#FF6B8A"/>
    <path d="M105 31 Q105 29 107 29 Q109 29 109 31" fill="#FFB0C8" opacity="0.5"/>
    <circle cx="112" cy="28" r="2" fill="#FFD700" opacity="0.6"/>
    <circle cx="108" cy="24" r="1.2" fill="#FFD700" opacity="0.4"/>

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

    <!-- CROWN -->
    <path d="M42 22 L44 14 L50 18 L54 10 L60 16 L66 10 L70 18 L76 14 L78 22 Z" fill="url(#selfie-crown)" stroke="#DAA520" stroke-width="0.5"/>
    <circle cx="54" cy="16" r="2" fill="#FF6B8A"/>
    <circle cx="60" cy="14" r="2.5" fill="#FF6B8A"/>
    <circle cx="66" cy="16" r="2" fill="#FF6B8A"/>
    <rect x="42" y="20" width="36" height="4" rx="1" fill="url(#selfie-crown)" stroke="#DAA520" stroke-width="0.3"/>
    <!-- Choker -->
    <path d="M44 62 Q60 66 76 62" fill="none" stroke="#FF69B4" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="60" cy="65" r="2" fill="#FFD700"/>

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
