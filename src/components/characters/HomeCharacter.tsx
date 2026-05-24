// Home - light blue pajamas with dots, pink slippers, coffee mug, relaxed sleepy
export function homeSVG() {
  return `
    <defs>
      <linearGradient id="home-pajama" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C8D8F0"/>
        <stop offset="100%" stop-color="#A8B8D8"/>
      </linearGradient>
      <linearGradient id="home-mug" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#F0EDE8"/>
      </linearGradient>
      <linearGradient id="home-coffee" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8B6C5C"/>
        <stop offset="100%" stop-color="#6B4C3C"/>
      </linearGradient>
      <radialGradient id="home-eyelid" cx="50%" cy="30%">
        <stop offset="0%" stop-color="#FFDAB9"/>
        <stop offset="100%" stop-color="#FFD4A8"/>
      </radialGradient>
    </defs>

    <!-- Body (pajamas, nap-breathe animation) -->
    <g style="animation:nap-breathe 4s ease-in-out infinite;transform-origin:60px 90px">
      <path d="M38 78 Q36 76 34 80 L32 110 Q32 112 34 112 L86 112 Q88 112 88 110 L86 80 Q84 76 82 78 L82 110 L38 110 Z" fill="url(#home-pajama)"/>
      <!-- Pajama collar -->
      <path d="M50 78 Q56 82 60 78 Q64 82 70 78" fill="none" stroke="#9AACCC" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Pajama button line -->
      <line x1="60" y1="80" x2="60" y2="110" stroke="#9AACCC" stroke-width="1" stroke-dasharray="3,3"/>
      <!-- Pajama dots -->
      <circle cx="48" cy="90" r="2.5" fill="white" opacity="0.45"/>
      <circle cx="72" cy="86" r="2.5" fill="white" opacity="0.45"/>
      <circle cx="54" cy="100" r="2" fill="white" opacity="0.4"/>
      <circle cx="68" cy="96" r="2.5" fill="white" opacity="0.45"/>
      <circle cx="44" cy="104" r="2" fill="white" opacity="0.35"/>
      <circle cx="76" cy="104" r="2" fill="white" opacity="0.35"/>
      <circle cx="50" cy="108" r="1.5" fill="white" opacity="0.3"/>
      <circle cx="62" cy="106" r="2" fill="white" opacity="0.4"/>
      <!-- Pajama pocket -->
      <path d="M42 96 L42 104 Q42 105 43 105 L52 105 Q53 105 53 104 L53 96" fill="none" stroke="#9AACCC" stroke-width="0.8"/>
    </g>

    <!-- ZZZ sleep indicators (outside nap-breathe group) -->
    <g style="animation:sparkle 3s ease-in-out infinite;animation-delay:0s">
      <text x="88" y="32" font-family="sans-serif" font-size="10" font-weight="bold" fill="#8A9ABB" opacity="0.6">z</text>
    </g>
    <g style="animation:sparkle 3s ease-in-out infinite;animation-delay:0.5s">
      <text x="94" y="24" font-family="sans-serif" font-size="8" font-weight="bold" fill="#8A9ABB" opacity="0.5">z</text>
    </g>
    <g style="animation:sparkle 3s ease-in-out infinite;animation-delay:1s">
      <text x="98" y="16" font-family="sans-serif" font-size="6" font-weight="bold" fill="#8A9ABB" opacity="0.4">z</text>
    </g>

    <!-- Neck -->
    <rect x="56" y="68" width="8" height="10" rx="4" fill="url(#s0)"/>

    <!-- Left arm (relaxed down) -->
    <path d="M38 82 Q28 86 24 96" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="23" cy="97" r="5.5" fill="url(#s0)"/>

    <!-- Right arm (holding coffee) -->
    <path d="M82 82 Q92 84 96 92" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="97" cy="93" r="5" fill="url(#s0)"/>

    <!-- Coffee mug -->
    <g>
      <rect x="88" y="88" width="18" height="22" rx="5" fill="url(#home-mug)" stroke="#E0DCD4" stroke-width="0.5"/>
      <!-- Mug handle -->
      <path d="M106 92 Q112 94 106 102" fill="none" stroke="#D8D4CC" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Coffee surface -->
      <rect x="90" y="91" width="14" height="8" rx="3" fill="url(#home-coffee)" opacity="0.5"/>
      <!-- Heart latte art -->
      <path d="M95 94 Q96 92 97 94 Q98 92 99 94 L97 97 Z" fill="#C8A888" opacity="0.4"/>
      <!-- Steam -->
      <g style="animation:steam-rise 2s ease-out infinite">
        <path d="M93 86 Q91 78 95 72" fill="none" stroke="#CCC" stroke-width="1.5" stroke-linecap="round" opacity="0.35"/>
      </g>
      <g style="animation:steam-rise 2s ease-out infinite;animation-delay:0.7s">
        <path d="M99 84 Q97 76 101 70" fill="none" stroke="#CCC" stroke-width="1.5" stroke-linecap="round" opacity="0.25"/>
      </g>
      <g style="animation:steam-rise 2s ease-out infinite;animation-delay:1.4s">
        <path d="M96 85 Q94 77 98 71" fill="none" stroke="#CCC" stroke-width="1.2" stroke-linecap="round" opacity="0.2"/>
      </g>
    </g>

    <!-- Legs with pajama pants -->
    <path d="M46 108 L44 118 Q44 120 46 120 L54 120 Q56 120 56 118 L56 108 Z" fill="url(#home-pajama)"/>
    <path d="M64 108 L64 118 Q64 120 66 120 L74 120 Q76 120 76 118 L74 108 Z" fill="url(#home-pajama)"/>
    <!-- Pajama pants dots -->
    <circle cx="50" cy="114" r="1.5" fill="white" opacity="0.3"/>
    <circle cx="70" cy="112" r="1.5" fill="white" opacity="0.3"/>

    <!-- Pink slippers -->
    <ellipse cx="50" cy="121" rx="9" ry="4.5" fill="#FFB6C1"/>
    <ellipse cx="70" cy="121" rx="9" ry="4.5" fill="#FFB6C1"/>
    <!-- Slipper tops -->
    <path d="M41 120 Q42 117 50 117 Q58 117 59 120" fill="none" stroke="#FF9AAA" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M61 120 Q62 117 70 117 Q78 117 79 120" fill="none" stroke="#FF9AAA" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Slipper pom-poms -->
    <circle cx="41" cy="119" r="3" fill="#FFC8D4"/>
    <circle cx="79" cy="119" r="3" fill="#FFC8D4"/>

    <!-- Head (nap-breathe animation) -->
    <g style="animation:nap-breathe 4s ease-in-out infinite;transform-origin:60px 46px">
      <circle cx="60" cy="46" r="26" fill="url(#s0)"/>
      <!-- Head highlight -->
      <ellipse cx="52" cy="38" rx="12" ry="8" fill="white" opacity="0.08"/>
      <!-- Sleepy under-eye shadows -->
      <ellipse cx="46" cy="52" rx="7" ry="2.5" fill="#C8A888" opacity="0.2"/>
      <ellipse cx="74" cy="52" rx="7" ry="2.5" fill="#C8A888" opacity="0.2"/>

      <!-- Hair (messy bed-head) -->
      <path d="M34 42 Q34 14 60 10 Q86 14 86 42 L84 36 Q82 16 60 12 Q38 16 36 36 Z" fill="url(#h0)"/>
      <!-- Messy hair tufts (bed head) -->
      <path d="M38 22 Q32 12 40 18" fill="url(#h0)"/>
      <path d="M54 12 Q52 2 62 8" fill="url(#h0)"/>
      <path d="M76 14 Q84 4 74 10" fill="url(#h0)"/>
      <path d="M82 24 Q90 14 82 20" fill="url(#h0)"/>
      <path d="M40 16 Q36 6 44 12" fill="url(#h0)"/>
      <!-- Hair shine -->
      <path d="M44 18 Q50 14 56 16" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.15"/>

      <!-- Eyes (half-closed/sleepy) -->
      <!-- Left eye -->
      <g>
        <ellipse cx="46" cy="46" rx="7" ry="8" fill="white"/>
        <ellipse cx="46" cy="47" rx="5.5" ry="6.5" fill="#2C2C2C"/>
        <circle cx="44" cy="44" r="2.5" fill="white"/>
        <circle cx="49" cy="50" r="1.2" fill="white" opacity="0.6"/>
        <!-- Eyelid overlay (half-closed) -->
        <path d="M38 46 Q42 38 46 40 Q50 38 54 46 L54 38 Q50 34 46 36 Q42 34 38 38 Z" fill="url(#home-eyelid)"/>
        <!-- Eyelash -->
        <path d="M39 40 Q42 36 46 38 Q48 36 53 40" fill="none" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>
      </g>
      <!-- Right eye -->
      <g>
        <ellipse cx="74" cy="46" rx="7" ry="8" fill="white"/>
        <ellipse cx="74" cy="47" rx="5.5" ry="6.5" fill="#2C2C2C"/>
        <circle cx="72" cy="44" r="2.5" fill="white"/>
        <circle cx="77" cy="50" r="1.2" fill="white" opacity="0.6"/>
        <!-- Eyelid overlay (half-closed) -->
        <path d="M66 46 Q70 38 74 40 Q78 38 82 46 L82 38 Q78 34 74 36 Q70 34 66 38 Z" fill="url(#home-eyelid)"/>
        <!-- Eyelash -->
        <path d="M67 40 Q70 36 74 38 Q76 36 81 40" fill="none" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>
      </g>

      <!-- Blush -->
      <ellipse cx="38" cy="52" rx="7" ry="4" fill="url(#bl0)"/>
      <ellipse cx="82" cy="52" rx="7" ry="4" fill="url(#bl0)"/>

      <!-- Mouth (sleepy, small open yawn) -->
      <ellipse cx="60" cy="58" rx="4" ry="3" fill="#CC6666">
        <animate attributeName="ry" values="3;5;3" dur="4s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="60" cy="57" rx="3" ry="1.5" fill="#E89090" opacity="0.3">
        <animate attributeName="ry" values="1.5;3;1.5" dur="4s" repeatCount="indefinite"/>
      </ellipse>
    </g>
  `;
}
