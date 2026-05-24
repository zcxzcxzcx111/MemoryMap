// Beach - 玫瑰少年风格：红色衣服，玫瑰花，爱心
export function beachSVG() {
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
      <linearGradient id="beach-top" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FF5566"/>
        <stop offset="100%" stop-color="#CC3344"/>
      </linearGradient>
      <linearGradient id="beach-bottom" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#333"/>
        <stop offset="100%" stop-color="#222"/>
      </linearGradient>
      <radialGradient id="beach-bg" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#FFE8E8"/>
        <stop offset="100%" stop-color="#FFD0D0"/>
      </radialGradient>
      <radialGradient id="beach-rose" cx="0.4" cy="0.3" r="0.5">
        <stop offset="0%" stop-color="#FF6677"/>
        <stop offset="100%" stop-color="#CC3344"/>
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect x="0" y="0" width="120" height="120" fill="url(#beach-bg)" rx="8"/>
    <!-- Roses -->
    <g transform="translate(15, 25) scale(0.6)">
      <circle cx="0" cy="0" r="5" fill="url(#beach-rose)"/>
      <circle cx="-3" cy="-2" r="3.5" fill="#DD4455" opacity="0.7"/>
      <circle cx="3" cy="-2" r="3.5" fill="#DD4455" opacity="0.7"/>
      <circle cx="0" cy="-4" r="3" fill="#EE5566" opacity="0.6"/>
      <circle cx="0" cy="0" r="2" fill="#FF8899"/>
      <path d="M0 5 Q-2 12 0 16" fill="none" stroke="#4A8A2A" stroke-width="1.5"/>
      <path d="M0 10 Q-4 8 -3 6" fill="#4A8A2A"/>
    </g>
    <g transform="translate(100, 35) scale(0.5)">
      <circle cx="0" cy="0" r="5" fill="url(#beach-rose)"/>
      <circle cx="-3" cy="-2" r="3.5" fill="#DD4455" opacity="0.7"/>
      <circle cx="3" cy="-2" r="3.5" fill="#DD4455" opacity="0.7"/>
      <circle cx="0" cy="0" r="2" fill="#FF8899"/>
      <path d="M0 5 Q2 12 0 16" fill="none" stroke="#4A8A2A" stroke-width="1.5"/>
    </g>
    <!-- Floating hearts -->
    <path d="M90 20 Q90 17 92 17 Q94 17 94 20 Q94 23 92 24 Q90 23 90 20 Z" fill="#FF6B8A" opacity="0.5"/>
    <path d="M30 50 Q30 48 32 48 Q34 48 34 50 Q34 52 32 53 Q30 52 30 50 Z" fill="#FF6B8A" opacity="0.4"/>
    <path d="M105 70 Q105 68 107 68 Q109 68 109 70 Q109 72 107 73 Q105 72 105 70 Z" fill="#FF6B8A" opacity="0.35"/>
    <ellipse cx="45" cy="20" rx="3" ry="2" fill="#FF8899" opacity="0.3" transform="rotate(30 45 20)"/>

    <!-- LEGS -->
    <rect x="47" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <rect x="65" y="105" width="8" height="12" rx="3" fill="url(#s0)"/>
    <path d="M45 116 Q44 120 48 120 L56 120 Q58 120 58 116 L55 116 Z" fill="#CC3344"/>
    <path d="M63 116 Q62 120 66 120 L74 120 Q76 120 76 116 L73 116 Z" fill="#CC3344"/>

    <!-- BODY - red top, dark bottom -->
    <path d="M38 80 Q34 78 32 84 L34 96 L86 96 L88 84 Q86 78 82 80 Z" fill="url(#beach-top)"/>
    <path d="M36 80 Q60 76 84 80" fill="none" stroke="#FF7788" stroke-width="2"/>
    <path d="M38 82 Q60 78 82 82" fill="none" stroke="#FF8899" stroke-width="1" opacity="0.4"/>
    <path d="M34 96 L32 108 L88 108 L86 96 Z" fill="url(#beach-bottom)"/>
    <line x1="60" y1="96" x2="60" y2="108" stroke="#444" stroke-width="0.5" opacity="0.3"/>

          <!-- Neck -->
      <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- Rose choker -->
    <path d="M46 64 Q60 68 74 64" fill="none" stroke="#CC3344" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="60" cy="66" r="2.5" fill="#FF5566"/>
    <circle cx="60" cy="66" r="1.2" fill="#FF8899"/>

    <!-- LEFT ARM (on hip) -->
    <path d="M38 82 Q28 88 26 98" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="26" cy="100" r="5" fill="url(#s0)"/>
    <!-- RIGHT ARM (offering rose) -->
    <path d="M80 82 Q92 74 98 64" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="99" cy="62" r="5" fill="url(#s0)"/>
    <!-- Rose in hand -->
    <circle cx="102" cy="58" r="4" fill="url(#beach-rose)"/>
    <circle cx="100" cy="56" r="2.5" fill="#DD4455" opacity="0.7"/>
    <circle cx="104" cy="56" r="2.5" fill="#DD4455" opacity="0.7"/>
    <circle cx="102" cy="56" r="1.5" fill="#FF8899"/>
    <line x1="102" y1="62" x2="104" y2="72" stroke="#4A8A2A" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M103 66 Q100 64 101 62" fill="#4A8A2A"/>

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
