// Work - black suit, red tie, glasses, laptop, tired but focused
export function workSVG() {
  return `
    <defs>
      <linearGradient id="work-suit" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A4A4A"/>
        <stop offset="100%" stop-color="#2A2A2A"/>
      </linearGradient>
      <linearGradient id="work-tie" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#E86050"/>
        <stop offset="100%" stop-color="#C84030"/>
      </linearGradient>
      <linearGradient id="work-shirt" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F8F8F8"/>
        <stop offset="100%" stop-color="#E8E8E8"/>
      </linearGradient>
      <linearGradient id="work-laptop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6A6A6A"/>
        <stop offset="100%" stop-color="#4A4A4A"/>
      </linearGradient>
      <linearGradient id="work-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7AD4E8"/>
        <stop offset="100%" stop-color="#5ABCD0"/>
      </linearGradient>
    </defs>

    <!-- Body (suit) -->
    <path d="M38 78 Q36 76 34 80 L32 110 Q32 112 34 112 L86 112 Q88 112 88 110 L86 80 Q84 76 82 78 L82 110 L38 110 Z" fill="url(#work-suit)"/>
    <!-- Shirt visible under suit -->
    <path d="M52 78 L60 86 L68 78" fill="url(#work-shirt)"/>
    <!-- Tie -->
    <polygon points="58,86 62,86 63,106 57,106" fill="url(#work-tie)"/>
    <polygon points="57,86 63,86 60.5,90" fill="url(#work-tie)"/>
    <!-- Tie stripe -->
    <line x1="60" y1="90" x2="60" y2="104" stroke="#B03020" stroke-width="0.8"/>
    <!-- Suit buttons -->
    <circle cx="54" cy="100" r="1.5" fill="#3A3A3A"/>
    <circle cx="66" cy="100" r="1.5" fill="#3A3A3A"/>
    <!-- Suit lapels -->
    <path d="M48 78 L54 86" fill="none" stroke="#3A3A3A" stroke-width="1.2"/>
    <path d="M72 78 L66 86" fill="none" stroke="#3A3A3A" stroke-width="1.2"/>

    <!-- Neck -->
    <rect x="56" y="68" width="8" height="10" rx="4" fill="url(#s0)"/>

    <!-- Left arm typing -->
    <path d="M38 82 Q26 88 22 98" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <g style="animation:keyboard-tap 0.5s ease-in-out infinite">
      <circle cx="21" cy="99" r="5.5" fill="url(#s0)"/>
    </g>

    <!-- Right arm typing -->
    <path d="M82 82 Q94 88 98 98" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <g style="animation:keyboard-tap 0.5s ease-in-out infinite;animation-delay:0.25s">
      <circle cx="99" cy="99" r="5.5" fill="url(#s0)"/>
    </g>

    <!-- Laptop -->
    <rect x="8" y="98" width="38" height="24" rx="3" fill="url(#work-laptop)" transform="rotate(-5 27 110)"/>
    <!-- Laptop screen -->
    <rect x="10" y="100" width="34" height="19" rx="1.5" fill="url(#work-screen)" transform="rotate(-5 27 110)"/>
    <!-- Screen content lines -->
    <rect x="13" y="102" width="16" height="1.5" rx="0.5" fill="#4A6FD4" opacity="0.5" transform="rotate(-5 27 110)"/>
    <rect x="13" y="105" width="24" height="1" rx="0.5" fill="#999" opacity="0.3" transform="rotate(-5 27 110)"/>
    <rect x="13" y="108" width="20" height="1" rx="0.5" fill="#999" opacity="0.25" transform="rotate(-5 27 110)"/>
    <rect x="13" y="111" width="26" height="1" rx="0.5" fill="#999" opacity="0.2" transform="rotate(-5 27 110)"/>
    <rect x="13" y="114" width="12" height="1" rx="0.5" fill="#999" opacity="0.15" transform="rotate(-5 27 110)"/>
    <!-- Cursor blink -->
    <rect x="30" y="102" width="1.5" height="3" rx="0.5" fill="#4A6FD4" opacity="0.7" transform="rotate(-5 27 110)">
      <animate attributeName="opacity" values="0.7;0;0.7" dur="1s" repeatCount="indefinite"/>
    </rect>
    <!-- Laptop keyboard base -->
    <rect x="6" y="118" width="42" height="4" rx="1" fill="#5A5A5A" transform="rotate(-5 27 120)"/>

    <!-- Legs with suit pants -->
    <path d="M46 108 L44 118 Q44 120 46 120 L54 120 Q56 120 56 118 L56 108 Z" fill="#2A2A2A"/>
    <path d="M64 108 L64 118 Q64 120 66 120 L74 120 Q76 120 76 118 L74 108 Z" fill="#2A2A2A"/>
    <!-- Shoes -->
    <ellipse cx="50" cy="120" rx="7" ry="3" fill="#1A1A1A"/>
    <ellipse cx="70" cy="120" rx="7" ry="3" fill="#1A1A1A"/>

    <!-- Head -->
    <circle cx="60" cy="46" r="26" fill="url(#s0)"/>
    <!-- Head highlight -->
    <ellipse cx="52" cy="38" rx="12" ry="8" fill="white" opacity="0.08"/>
    <!-- Tired under-eye shadows -->
    <ellipse cx="46" cy="52" rx="8" ry="3" fill="#C8A888" opacity="0.2"/>
    <ellipse cx="74" cy="52" rx="8" ry="3" fill="#C8A888" opacity="0.2"/>

    <!-- Hair (neat, professional) -->
    <path d="M34 42 Q34 14 60 10 Q86 14 86 42 L84 36 Q82 16 60 12 Q38 16 36 36 Z" fill="url(#h0)"/>
    <!-- Hair side parts -->
    <path d="M36 36 Q34 28 38 26" fill="none" stroke="#3A3A3A" stroke-width="0.8"/>
    <path d="M84 36 Q86 28 82 26" fill="none" stroke="#3A3A3A" stroke-width="0.8"/>
    <!-- Hair part line -->
    <path d="M56 12 Q58 18 60 14" fill="none" stroke="#3A3A3A" stroke-width="0.8"/>
    <!-- Hair shine -->
    <path d="M44 18 Q50 14 56 16" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.15"/>

    <!-- Eyes (looking down at keyboard, tired) -->
    <!-- Left eye -->
    <g>
      <ellipse cx="46" cy="46" rx="7" ry="8" fill="white"/>
      <ellipse cx="46" cy="49" rx="5.5" ry="6.5" fill="#2C2C2C"/>
      <circle cx="44" cy="46" r="2.5" fill="white"/>
      <circle cx="49" cy="52" r="1.2" fill="white" opacity="0.6"/>
      <!-- Eyelash -->
      <path d="M39 42 Q42 38 46 40 Q48 38 53 42" fill="none" stroke="#2C2C2C" stroke-width="1.8" stroke-linecap="round"/>
    </g>
    <!-- Right eye -->
    <g>
      <ellipse cx="74" cy="46" rx="7" ry="8" fill="white"/>
      <ellipse cx="74" cy="49" rx="5.5" ry="6.5" fill="#2C2C2C"/>
      <circle cx="72" cy="46" r="2.5" fill="white"/>
      <circle cx="77" cy="52" r="1.2" fill="white" opacity="0.6"/>
      <!-- Eyelash -->
      <path d="M67 42 Q70 38 74 40 Q76 38 81 42" fill="none" stroke="#2C2C2C" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <!-- Glasses -->
    <rect x="37" y="40" width="18" height="14" rx="4" fill="none" stroke="#555" stroke-width="2.2"/>
    <rect x="65" y="40" width="18" height="14" rx="4" fill="none" stroke="#555" stroke-width="2.2"/>
    <line x1="55" y1="46" x2="65" y2="46" stroke="#555" stroke-width="2"/>
    <line x1="37" y1="44" x2="33" y2="42" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="83" y1="44" x2="87" y2="42" stroke="#555" stroke-width="1.8" stroke-linecap="round"/>
    <!-- Glass reflection -->
    <ellipse cx="44" cy="45" rx="3" ry="2" fill="white" opacity="0.12"/>
    <ellipse cx="72" cy="45" rx="3" ry="2" fill="white" opacity="0.12"/>

    <!-- Blush -->
    <ellipse cx="38" cy="54" rx="7" ry="4" fill="url(#bl0)"/>
    <ellipse cx="82" cy="54" rx="7" ry="4" fill="url(#bl0)"/>

    <!-- Mouth (tired, slight focused line) -->
    <path d="M55 58 Q58 57 60 58 Q62 57 65 58" fill="none" stroke="#CC6666" stroke-width="1.5" stroke-linecap="round"/>
  `;
}
