// 园艺 - 围裙，浇水壶，花朵，园艺手套，草帽
export function gardenSVG() {
  return `
    <defs>
      <!-- Shared skin gradient -->
      <linearGradient id="s0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFE8CC"/>
        <stop offset="100%" stop-color="#FFD4A8"/>
      </linearGradient>
      <!-- Skin radial highlight -->
      <radialGradient id="ss0" cx="0.4" cy="0.3" r="0.6">
        <stop offset="0%" stop-color="#FFF0DE"/>
        <stop offset="100%" stop-color="#FFD4A8"/>
      </radialGradient>
      <!-- Blush -->
      <radialGradient id="bl0" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#FF9BBC" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#FF9BBC" stop-opacity="0"/>
      </radialGradient>
      <!-- Brown hair -->
      <linearGradient id="h1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#8B5E3C"/>
        <stop offset="50%" stop-color="#6B3A1F"/>
        <stop offset="100%" stop-color="#4A2510"/>
      </linearGradient>
      <!-- Green apron -->
      <linearGradient id="apron0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#A8E6A8"/>
        <stop offset="100%" stop-color="#6BBF6B"/>
      </linearGradient>
      <!-- Hat straw -->
      <linearGradient id="hat0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F5E0A8"/>
        <stop offset="100%" stop-color="#D4B87A"/>
      </linearGradient>
      <!-- Watering can green -->
      <linearGradient id="can0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#A8D8A8"/>
        <stop offset="100%" stop-color="#6BAA6B"/>
      </linearGradient>
      <!-- Water stream -->
      <linearGradient id="water0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#87CEEB" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#5BA8D0" stop-opacity="0.3"/>
      </linearGradient>
      <!-- White shirt -->
      <linearGradient id="shirt0" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#E8E8E8"/>
      </linearGradient>
      <!-- Flower pink -->
      <radialGradient id="flower0" cx="0.4" cy="0.3" r="0.6">
        <stop offset="0%" stop-color="#FFB5D0"/>
        <stop offset="100%" stop-color="#E87BA0"/>
      </radialGradient>
      <!-- Eye gradient -->
      <radialGradient id="eye0" cx="0.35" cy="0.3" r="0.6">
        <stop offset="0%" stop-color="#5A3A2A"/>
        <stop offset="100%" stop-color="#1A0A00"/>
      </radialGradient>
      <!-- Glove green -->
      <linearGradient id="glove0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#88C888"/>
        <stop offset="100%" stop-color="#5A9A5A"/>
      </linearGradient>
      <!-- Shoe brown -->
      <linearGradient id="shoe0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8B6C5C"/>
        <stop offset="100%" stop-color="#6B4C3C"/>
      </linearGradient>
    </defs>

    <!-- === BACKGROUND === -->
    <!-- Sky wash -->
    <rect x="0" y="0" width="120" height="120" fill="#EAF6E8" rx="8"/>
    <!-- Ground grass -->
    <ellipse cx="60" cy="128" rx="72" ry="18" fill="#8BCF8B"/>
    <ellipse cx="60" cy="128" rx="72" ry="14" fill="#A8E0A8"/>

    <!-- Flower bushes back -->
    <circle cx="8" cy="108" r="8" fill="#6BAA6B" opacity="0.5"/>
    <circle cx="14" cy="104" r="6" fill="#7BBF7B" opacity="0.5"/>
    <circle cx="12" cy="108" r="3" fill="#FF8AAA" opacity="0.6"/>
    <circle cx="5" cy="106" r="2.5" fill="#FFD93D" opacity="0.5"/>

    <circle cx="112" cy="106" r="9" fill="#6BAA6B" opacity="0.5"/>
    <circle cx="116" cy="102" r="6" fill="#7BBF7B" opacity="0.5"/>
    <circle cx="114" cy="102" r="3" fill="#E87BA0" opacity="0.5"/>
    <circle cx="110" cy="100" r="2.5" fill="#FFD93D" opacity="0.5"/>
    <circle cx="117" cy="104" r="2" fill="#FF8AAA" opacity="0.5"/>

    <!-- Small grass tufts -->
    <path d="M20 118 Q22 110 24 118" fill="#6BAA6B" opacity="0.4"/>
    <path d="M25 118 Q27 112 29 118" fill="#7BBF7B" opacity="0.4"/>
    <path d="M95 117 Q97 109 99 117" fill="#6BAA6B" opacity="0.4"/>
    <path d="M100 118 Q102 111 104 118" fill="#7BBF7B" opacity="0.4"/>

    <!-- === LEGS === -->
    <!-- Left leg -->
    <path d="M47 106 L45 118 Q45 120 47 120 L54 120 Q56 120 56 118 L54 106 Z" fill="url(#s0)" stroke="#E8C4A0" stroke-width="0.4"/>
    <!-- Right leg -->
    <path d="M66 106 L66 118 Q66 120 68 120 L75 120 Q77 120 77 118 L75 106 Z" fill="url(#s0)" stroke="#E8C4A0" stroke-width="0.4"/>
    <!-- Shoes -->
    <path d="M43 119 Q43 123 47 123 L55 123 Q57 123 57 119 L55 119 Q54 122 49 122 Q46 122 44 119 Z" fill="url(#shoe0)"/>
    <path d="M65 119 Q65 123 69 123 L76 123 Q79 123 79 119 L77 119 Q76 122 72 122 Q68 122 66 119 Z" fill="url(#shoe0)"/>

    <!-- === BODY === -->
    <!-- White shirt -->
    <path d="M40 80 Q38 78 36 82 L34 108 L86 108 L84 82 Q82 78 80 80 L80 108 L40 108 Z" fill="url(#shirt0)" stroke="#DDD" stroke-width="0.3"/>
    <!-- Shirt collar -->
    <path d="M52 78 L56 84 L60 78 L64 84 L68 78" fill="none" stroke="#E0E0E0" stroke-width="1.2" stroke-linecap="round"/>

    <!-- Green apron over shirt -->
    <path d="M42 86 L38 108 L82 108 L78 86 Z" fill="url(#apron0)" stroke="#5A9A5A" stroke-width="0.4"/>
    <!-- Apron ties -->
    <path d="M42 86 Q34 88 32 92" fill="none" stroke="#6BBF6B" stroke-width="2" stroke-linecap="round"/>
    <path d="M78 86 Q86 88 88 92" fill="none" stroke="#6BBF6B" stroke-width="2" stroke-linecap="round"/>
    <!-- Apron center line -->
    <line x1="60" y1="86" x2="60" y2="108" stroke="#5A9A5A" stroke-width="0.5" opacity="0.4"/>
    <!-- Apron pocket -->
    <rect x="51" y="96" width="18" height="12" rx="3" fill="#88C888" stroke="#5A9A5A" stroke-width="0.5"/>
    <line x1="55" y1="96" x2="55" y2="108" stroke="#5A9A5A" stroke-width="0.3" opacity="0.4"/>
    <line x1="65" y1="96" x2="65" y2="108" stroke="#5A9A5A" stroke-width="0.3" opacity="0.4"/>
    <!-- Tiny trowel in pocket -->
    <rect x="57" y="94" width="2" height="8" rx="0.5" fill="#888" opacity="0.6"/>
    <rect x="56" y="93" width="4" height="3" rx="1" fill="#AAA" opacity="0.6"/>

    <!-- Neck -->
    <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- === LEFT ARM + WATERING CAN === -->
    <path d="M38 84 Q26 80 20 72" fill="none" stroke="url(#s0)" stroke-width="11" stroke-linecap="round"/>
    <!-- Glove -->
    <ellipse cx="19" cy="70" rx="7" ry="6" fill="url(#glove0)" stroke="#5A9A5A" stroke-width="0.4"/>
    <ellipse cx="15" cy="67" rx="3" ry="2.5" fill="url(#glove0)" transform="rotate(-20 15 67)"/>
    <ellipse cx="13" cy="70" rx="2.5" ry="2" fill="url(#glove0)" transform="rotate(-10 13 70)"/>

    <!-- Watering can -->
    <rect x="5" y="56" width="22" height="18" rx="4" fill="url(#can0)" stroke="#5A9A5A" stroke-width="0.5"/>
    <!-- Can spout -->
    <path d="M27 60 Q32 58 36 54" fill="none" stroke="#6BAA6B" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="37" cy="53" rx="3.5" ry="2.5" fill="#6BAA6B" stroke="#5A9A5A" stroke-width="0.3"/>
    <!-- Can handle -->
    <path d="M9 56 Q9 44 16 44 Q23 44 23 56" fill="none" stroke="#5A9A5A" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Can highlight -->
    <ellipse cx="14" cy="60" rx="6" ry="3" fill="white" opacity="0.15"/>
    <!-- Water drops from spout -->
    <g style="animation:steam-rise 2s ease-out infinite">
      <path d="M37 55 Q39 62 36 68" fill="none" stroke="url(#water0)" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <circle cx="35" cy="70" r="1.5" fill="#87CEEB" opacity="0.5"/>
      <circle cx="38" cy="72" r="1" fill="#87CEEB" opacity="0.4"/>
    </g>
    <g style="animation:steam-rise 2s ease-out infinite;animation-delay:0.4s">
      <path d="M39 55 Q41 64 38 72" fill="none" stroke="url(#water0)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
      <circle cx="37" cy="74" r="1.2" fill="#87CEEB" opacity="0.4"/>
    </g>
    <g style="animation:steam-rise 2s ease-out infinite;animation-delay:0.8s">
      <path d="M36 55 Q34 60 37 66" fill="none" stroke="url(#water0)" stroke-width="1" stroke-linecap="round" opacity="0.4"/>
    </g>

    <!-- === RIGHT ARM + FLOWER === -->
    <path d="M80 84 Q90 86 96 92" fill="none" stroke="url(#s0)" stroke-width="11" stroke-linecap="round"/>
    <!-- Glove -->
    <ellipse cx="97" cy="93" rx="7" ry="6" fill="url(#glove0)" stroke="#5A9A5A" stroke-width="0.4"/>
    <ellipse cx="102" cy="90" rx="3" ry="2.5" fill="url(#glove0)" transform="rotate(15 102 90)"/>

    <!-- Flower stem -->
    <path d="M99 90 Q100 82 102 74" fill="none" stroke="#5A9A5A" stroke-width="1.8" stroke-linecap="round"/>
    <!-- Leaf -->
    <path d="M100 84 Q96 80 98 78 Q102 80 100 84" fill="#6BAA6B"/>
    <!-- Flower petals -->
    <circle cx="102" cy="71" r="4.5" fill="url(#flower0)"/>
    <circle cx="98" cy="69" r="3.5" fill="#E87BA0" opacity="0.7"/>
    <circle cx="106" cy="69" r="3.5" fill="#E87BA0" opacity="0.7"/>
    <circle cx="102" cy="66" r="3.5" fill="#E87BA0" opacity="0.7"/>
    <circle cx="99" cy="73" r="3" fill="#E87BA0" opacity="0.6"/>
    <circle cx="105" cy="73" r="3" fill="#E87BA0" opacity="0.6"/>
    <!-- Flower center -->
    <circle cx="102" cy="70" r="2.5" fill="#FFD93D"/>
    <circle cx="101" cy="69" r="1" fill="#FFEE88" opacity="0.8"/>
    <!-- Petal highlight -->
    <circle cx="104" cy="68" r="1" fill="white" opacity="0.3"/>

    <!-- === HEAD === -->
    <circle cx="60" cy="46" r="26" fill="url(#ss0)" stroke="#E8C4A0" stroke-width="0.3"/>
    <!-- Chin shadow -->
    <ellipse cx="60" cy="64" rx="14" ry="6" fill="#F0CDA0" opacity="0.3"/>

    <!-- === HAIR (Brown, visible under hat) === -->
    <!-- Main hair volume -->
    <path d="M34 42 Q34 18 60 14 Q86 18 86 42" fill="url(#h1)"/>
    <!-- Side hair strands -->
    <path d="M34 42 Q36 36 34 48 Q32 54 34 58" fill="url(#h1)"/>
    <path d="M86 42 Q84 36 86 48 Q88 54 86 58" fill="url(#h1)"/>
    <!-- Bangs under hat -->
    <path d="M38 38 Q42 34 48 36 Q52 32 56 36 Q60 32 64 36 Q68 32 72 36 Q76 34 82 38" fill="url(#h1)"/>
    <!-- Hair shine -->
    <path d="M50 22 Q56 18 62 22" fill="#A07050" opacity="0.3"/>

    <!-- === STRAW HAT === -->
    <!-- Hat brim -->
    <ellipse cx="60" cy="32" rx="36" ry="9" fill="url(#hat0)" stroke="#D4B87A" stroke-width="0.5"/>
    <!-- Hat crown -->
    <ellipse cx="60" cy="26" rx="22" ry="15" fill="url(#hat0)" stroke="#D4B87A" stroke-width="0.5"/>
    <!-- Hat ribbon band -->
    <path d="M38 32 Q60 36 82 32" fill="none" stroke="#8B6C5C" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Ribbon bow -->
    <path d="M76 30 Q82 26 80 32 Q84 28 82 34" fill="#8B6C5C" stroke="#6B4C3C" stroke-width="0.3"/>
    <!-- Hat weave texture -->
    <path d="M42 28 Q60 24 78 28" fill="none" stroke="#C8A868" stroke-width="0.4" opacity="0.4"/>
    <path d="M44 32 Q60 28 76 32" fill="none" stroke="#C8A868" stroke-width="0.4" opacity="0.4"/>
    <!-- Hat highlight -->
    <ellipse cx="56" cy="22" rx="10" ry="6" fill="white" opacity="0.1"/>

    <!-- === FACE === -->
    <!-- Big expressive eyes -->
    <!-- Left eye white -->
    <ellipse cx="49" cy="46" rx="7" ry="8" fill="white"/>
    <!-- Left eye iris -->
    <ellipse cx="50" cy="46" rx="5.5" ry="6.5" fill="url(#eye0)"/>
    <!-- Left eye pupil -->
    <ellipse cx="50.5" cy="45.5" rx="3" ry="3.5" fill="#0A0A0A"/>
    <!-- Left eye highlights -->
    <circle cx="53" cy="43" r="2.2" fill="white" opacity="0.95"/>
    <circle cx="48" cy="48" r="1" fill="white" opacity="0.6"/>
    <!-- Left eye bottom reflection -->
    <ellipse cx="50" cy="50" rx="3" ry="1.5" fill="white" opacity="0.1"/>
    <!-- Left eye outline -->
    <ellipse cx="49" cy="46" rx="7" ry="8" fill="none" stroke="#2C1A0E" stroke-width="1" opacity="0.8"/>
    <!-- Left eyelashes -->
    <path d="M42 43 Q43 41 44 43" fill="none" stroke="#2C1A0E" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M44 42 Q45 40 46 42" fill="none" stroke="#2C1A0E" stroke-width="1" stroke-linecap="round"/>

    <!-- Right eye white -->
    <ellipse cx="71" cy="46" rx="7" ry="8" fill="white"/>
    <!-- Right eye iris -->
    <ellipse cx="70" cy="46" rx="5.5" ry="6.5" fill="url(#eye0)"/>
    <!-- Right eye pupil -->
    <ellipse cx="69.5" cy="45.5" rx="3" ry="3.5" fill="#0A0A0A"/>
    <!-- Right eye highlights -->
    <circle cx="73" cy="43" r="2.2" fill="white" opacity="0.95"/>
    <circle cx="67" cy="48" r="1" fill="white" opacity="0.6"/>
    <!-- Right eye bottom reflection -->
    <ellipse cx="70" cy="50" rx="3" ry="1.5" fill="white" opacity="0.1"/>
    <!-- Right eye outline -->
    <ellipse cx="71" cy="46" rx="7" ry="8" fill="none" stroke="#2C1A0E" stroke-width="1" opacity="0.8"/>
    <!-- Right eyelashes -->
    <path d="M76 43 Q77 41 78 43" fill="none" stroke="#2C1A0E" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M74 42 Q75 40 76 42" fill="none" stroke="#2C1A0E" stroke-width="1" stroke-linecap="round"/>

    <!-- Eyebrows (soft, happy arch) -->
    <path d="M42 38 Q48 35 55 37" fill="none" stroke="#6B3A1F" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M65 37 Q72 35 78 38" fill="none" stroke="#6B3A1F" stroke-width="1.5" stroke-linecap="round"/>

    <!-- Blush -->
    <ellipse cx="40" cy="54" rx="7" ry="4" fill="url(#bl0)"/>
    <ellipse cx="80" cy="54" rx="7" ry="4" fill="url(#bl0)"/>
    <!-- Blush sparkle dots -->
    <circle cx="37" cy="53" r="0.8" fill="#FF9BBC" opacity="0.5"/>
    <circle cx="43" cy="52" r="0.6" fill="#FF9BBC" opacity="0.4"/>
    <circle cx="77" cy="53" r="0.8" fill="#FF9BBC" opacity="0.5"/>
    <circle cx="83" cy="52" r="0.6" fill="#FF9BBC" opacity="0.4"/>

    <!-- Nose (tiny chibi nose) -->
    <ellipse cx="60" cy="52" rx="1.5" ry="1" fill="#E8B88A" opacity="0.6"/>

    <!-- Happy content smile -->
    <path d="M53 58 Q57 63 60 63 Q63 63 67 58" fill="#FF8888" stroke="#CC6666" stroke-width="0.8" stroke-linecap="round"/>
    <!-- Tongue hint -->
    <path d="M56 60 Q60 64 64 60" fill="#FF6B6B" opacity="0.4"/>
    <!-- Smile line -->
    <path d="M54 58 Q60 64 66 58" fill="none" stroke="#CC6666" stroke-width="1" stroke-linecap="round"/>

    <!-- === FLOATING ANIMATION ELEMENTS === -->
    <!-- Floating water drops -->
    <g style="animation:steam-rise 3s ease-in-out infinite;animation-delay:1s">
      <circle cx="42" cy="50" r="1" fill="#87CEEB" opacity="0.2"/>
    </g>
    <g style="animation:steam-rise 3s ease-in-out infinite;animation-delay:1.5s">
      <circle cx="38" cy="55" r="0.8" fill="#87CEEB" opacity="0.15"/>
    </g>
  `;
}
