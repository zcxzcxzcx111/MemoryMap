// Sports - red jersey with number 7, dark shorts, headband, basketball, sweat drops
export function sportsSVG() {
  return `
    <defs>
      <!-- Jersey gradient -->
      <linearGradient id="sport-jersey" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F08070"/>
        <stop offset="40%" stop-color="#E87B6B"/>
        <stop offset="100%" stop-color="#D06050"/>
      </linearGradient>
      <!-- Jersey highlight -->
      <radialGradient id="sport-jersey-hl" cx="0.4" cy="0.3" r="0.5">
        <stop offset="0%" stop-color="#FF9988" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#F08070" stop-opacity="0"/>
      </radialGradient>
      <!-- Shorts gradient -->
      <linearGradient id="sport-shorts" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3A5C"/>
        <stop offset="100%" stop-color="#2A2A48"/>
      </linearGradient>
      <!-- Headband gradient -->
      <linearGradient id="sport-headband" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#E87B6B"/>
        <stop offset="100%" stop-color="#F08878"/>
      </linearGradient>
      <!-- Basketball gradient -->
      <radialGradient id="sport-ball" cx="0.35" cy="0.35" r="0.6">
        <stop offset="0%" stop-color="#F09040"/>
        <stop offset="50%" stop-color="#E87B00"/>
        <stop offset="100%" stop-color="#C46A00"/>
      </radialGradient>
      <!-- Shoe gradient -->
      <linearGradient id="sport-shoe" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="white"/>
        <stop offset="100%" stop-color="#F0F0F0"/>
      </linearGradient>
      <!-- Sweat drop gradient -->
      <linearGradient id="sport-sweat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#8ED8E8"/>
        <stop offset="100%" stop-color="#6BC5D8"/>
      </linearGradient>
      <!-- Sparkle gradient -->
      <radialGradient id="sport-sparkle" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="white"/>
        <stop offset="100%" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Sweat drops with sparkle animation -->
    <g style="animation:sparkle 1.5s ease-in-out infinite">
      <path d="M28 38 Q26 32 30 32 Q34 32 32 38 Q31 40 30 40 Q29 40 28 38 Z" fill="url(#sport-sweat)" opacity="0.6"/>
    </g>
    <g style="animation:sparkle 1.5s ease-in-out infinite;animation-delay:0.5s">
      <path d="M94 34 Q92 28 96 28 Q100 28 98 34 Q97 36 96 36 Q95 36 94 34 Z" fill="url(#sport-sweat)" opacity="0.5"/>
    </g>
    <g style="animation:sparkle 1.5s ease-in-out infinite;animation-delay:1s">
      <path d="M22 54 Q20 48 24 48 Q28 48 26 54 Q25 56 24 56 Q23 56 22 54 Z" fill="url(#sport-sweat)" opacity="0.4"/>
    </g>
    <!-- Sparkle effects near sweat -->
    <g style="animation:sparkle 2s ease-in-out infinite;animation-delay:0.3s">
      <circle cx="32" cy="30" r="1.5" fill="url(#sport-sparkle)" opacity="0.6"/>
      <line x1="30" y1="30" x2="34" y2="30" stroke="white" stroke-width="0.5" opacity="0.5"/>
      <line x1="32" y1="28" x2="32" y2="32" stroke="white" stroke-width="0.5" opacity="0.5"/>
    </g>
    <g style="animation:sparkle 2s ease-in-out infinite;animation-delay:1.2s">
      <circle cx="98" cy="26" r="1.2" fill="url(#sport-sparkle)" opacity="0.5"/>
      <line x1="96.5" y1="26" x2="99.5" y2="26" stroke="white" stroke-width="0.4" opacity="0.4"/>
      <line x1="98" y1="24.5" x2="98" y2="27.5" stroke="white" stroke-width="0.4" opacity="0.4"/>
    </g>

    <!-- Body (jersey) -->
    <path d="M40 80 Q38 76 36 82 L36 108 L84 108 L82 82 Q80 76 78 80 L78 106 L40 106 Z" fill="url(#sport-jersey)"/>
    <path d="M40 80 Q38 76 36 82 L36 108 L84 108 L82 82 Q80 76 78 80 L78 106 L40 106 Z" fill="url(#sport-jersey-hl)"/>
    <!-- Jersey collar -->
    <path d="M50 78 Q60 82 70 78" fill="none" stroke="#D06050" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M52 78 Q60 81 68 78" fill="none" stroke="#C05040" stroke-width="0.8" opacity="0.5"/>
    <!-- Jersey number 7 -->
    <text x="53" y="100" font-size="20" font-weight="bold" fill="white" font-family="'Arial Black', sans-serif" opacity="0.85" style="text-shadow:1px 1px 0 rgba(0,0,0,0.15)">7</text>
    <!-- Jersey stripes on sleeves -->
    <path d="M40 80 L46 82" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M38 84 L44 86" stroke="white" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
    <path d="M78 80 L72 82" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M80 84 L74 86" stroke="white" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
    <!-- Jersey side seams -->
    <path d="M40 86 L40 106" stroke="#C05040" stroke-width="0.6" stroke-dasharray="2,3" opacity="0.4"/>
    <path d="M78 86 L78 106" stroke="#C05040" stroke-width="0.6" stroke-dasharray="2,3" opacity="0.4"/>

    <!-- Shorts -->
    <path d="M42 104 L38 120 L58 120 L60 104 Z" fill="url(#sport-shorts)"/>
    <path d="M78 104 L82 120 L62 120 L60 104 Z" fill="url(#sport-shorts)"/>
    <!-- Shorts waistband -->
    <path d="M42 104 L78 104" stroke="#4A4A6C" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Shorts side stripe -->
    <path d="M40 108 L38 118" stroke="#E87B6B" stroke-width="1.5" opacity="0.6"/>
    <path d="M80 108 L82 118" stroke="#E87B6B" stroke-width="1.5" opacity="0.6"/>

    <!-- Neck -->
    <rect x="56" y="68" width="8" height="12" rx="4" fill="url(#s0)"/>

    <!-- Left arm (near basketball) -->
    <path d="M38 82 Q26 88 20 100" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="19" cy="102" r="5.5" fill="url(#s0)"/>
    <!-- Left hand fingers -->
    <path d="M16 100 Q14 96 15 94" fill="none" stroke="url(#s0)" stroke-width="2" stroke-linecap="round"/>
    <path d="M19 99 Q18 95 19 93" fill="none" stroke="url(#s0)" stroke-width="2" stroke-linecap="round"/>

    <!-- Right arm (raised) -->
    <path d="M80 82 Q92 74 98 62" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="99" cy="60" r="5.5" fill="url(#s0)"/>
    <!-- Right hand fingers (fist) -->
    <path d="M97 57 Q96 54 97 52" fill="none" stroke="url(#s0)" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M100 57 Q101 54 100 52" fill="none" stroke="url(#s0)" stroke-width="1.8" stroke-linecap="round"/>

    <!-- Basketball -->
    <circle cx="18" cy="110" r="10" fill="url(#sport-ball)" stroke="#C46A00" stroke-width="0.8"/>
    <!-- Ball seam lines -->
    <path d="M8 110 Q18 104 28 110" fill="none" stroke="#A05800" stroke-width="0.8"/>
    <path d="M18 100 Q12 110 18 120" fill="none" stroke="#A05800" stroke-width="0.8"/>
    <path d="M18 100 Q24 110 18 120" fill="none" stroke="#A05800" stroke-width="0.8"/>
    <!-- Ball highlight -->
    <ellipse cx="14" cy="106" rx="3" ry="2" fill="white" opacity="0.15"/>
    <!-- Ball texture dots -->
    <circle cx="12" cy="112" r="0.5" fill="#A05800" opacity="0.3"/>
    <circle cx="22" cy="108" r="0.5" fill="#A05800" opacity="0.3"/>
    <circle cx="20" cy="116" r="0.5" fill="#A05800" opacity="0.3"/>

    <!-- Legs (visible from shorts) -->
    <path d="M46 118 L44 121 Q44 123 46 123 L54 123 Q56 123 56 121 L56 118 Z" fill="url(#s0)"/>
    <path d="M64 118 L64 121 Q64 123 66 123 L74 123 Q76 123 76 121 L72 118 Z" fill="url(#s0)"/>

    <!-- Sports shoes (left) -->
    <path d="M40 121 L38 125 Q38 127 42 127 L56 127 Q58 127 58 125 L56 121 Z" fill="url(#sport-shoe)" stroke="#DDD" stroke-width="0.5"/>
    <!-- Shoe sole -->
    <path d="M39 126 L57 126" stroke="#E87B6B" stroke-width="2" stroke-linecap="round"/>
    <!-- Shoe accent stripe -->
    <path d="M42 123 L54 123" stroke="#E87B6B" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Shoe laces -->
    <path d="M46 121 L48 123" stroke="#CCC" stroke-width="0.6"/>
    <path d="M50 121 L52 123" stroke="#CCC" stroke-width="0.6"/>
    <!-- Shoe toe cap -->
    <path d="M38 125 Q38 127 42 127 L44 127" fill="#F0F0F0"/>

    <!-- Sports shoes (right) -->
    <path d="M60 121 L58 125 Q58 127 62 127 L76 127 Q78 127 78 125 L76 121 Z" fill="url(#sport-shoe)" stroke="#DDD" stroke-width="0.5"/>
    <!-- Shoe sole -->
    <path d="M59 126 L77 126" stroke="#E87B6B" stroke-width="2" stroke-linecap="round"/>
    <!-- Shoe accent stripe -->
    <path d="M62 123 L74 123" stroke="#E87B6B" stroke-width="1.2" stroke-linecap="round"/>
    <!-- Shoe laces -->
    <path d="M66 121 L68 123" stroke="#CCC" stroke-width="0.6"/>
    <path d="M70 121 L72 123" stroke="#CCC" stroke-width="0.6"/>
    <!-- Shoe toe cap -->
    <path d="M58 125 Q58 127 62 127 L64 127" fill="#F0F0F0"/>

    <!-- Head -->
    <circle cx="60" cy="44" r="28" fill="url(#ss0)"/>
    <!-- Ear hints -->
    <ellipse cx="32" cy="46" rx="4" ry="6" fill="url(#s0)"/>
    <ellipse cx="88" cy="46" rx="4" ry="6" fill="url(#s0)"/>

    <!-- Hair back (short sporty) -->
    <path d="M32 42 Q34 16 60 14 Q86 16 88 42 L88 38 Q86 18 60 16 Q34 18 32 38 Z" fill="url(#h0)"/>
    <!-- Short spiky top hair -->
    <path d="M36 38 Q38 24 44 34 Q48 20 54 30 Q58 16 64 30 Q68 20 74 34 Q78 24 84 38 L84 42 Q78 34 74 40 Q68 28 64 38 Q58 28 54 38 Q48 28 44 40 Q38 34 36 42 Z" fill="url(#h0)"/>
    <!-- Hair texture / spiky tips -->
    <path d="M40 30 Q42 22 46 28" fill="url(#h0)"/>
    <path d="M52 22 Q54 16 58 24" fill="url(#h0)"/>
    <path d="M62 22 Q66 14 68 24" fill="url(#h0)"/>
    <path d="M74 28 Q78 20 80 30" fill="url(#h0)"/>
    <!-- Hair shine -->
    <path d="M48 18 Q56 14 64 18" fill="none" stroke="#4A4A4A" stroke-width="1" opacity="0.3"/>

    <!-- Headband -->
    <path d="M32 38 Q60 32 88 38" fill="none" stroke="url(#sport-headband)" stroke-width="4.5" stroke-linecap="round"/>
    <!-- Headband knot -->
    <path d="M86 38 Q90 34 92 38 Q90 36 88 38" fill="#E87B6B" stroke="#D06050" stroke-width="0.5"/>
    <path d="M88 38 Q92 42 94 40" fill="none" stroke="#E87B6B" stroke-width="2" stroke-linecap="round"/>
    <path d="M88 38 Q92 34 94 36" fill="none" stroke="#E87B6B" stroke-width="2" stroke-linecap="round"/>
    <!-- Headband stripe detail -->
    <path d="M38 36 Q60 31 82 36" fill="none" stroke="white" stroke-width="0.8" opacity="0.3"/>

    <!-- Eyes (determined focused) -->
    <!-- Left eye -->
    <ellipse cx="48" cy="46" rx="5" ry="5.5" fill="white"/>
    <ellipse cx="49" cy="46" rx="3.5" ry="4" fill="#2C2C2C"/>
    <ellipse cx="49.5" cy="45.5" rx="2.5" ry="3" fill="#1A1A2E"/>
    <!-- Iris detail -->
    <circle cx="50" cy="45" r="1.5" fill="white" opacity="0.9"/>
    <circle cx="48" cy="47" r="0.7" fill="white" opacity="0.5"/>
    <!-- Focused brow (left) -->
    <path d="M42 39 Q48 36 54 39" fill="none" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round"/>

    <!-- Right eye -->
    <ellipse cx="72" cy="46" rx="5" ry="5.5" fill="white"/>
    <ellipse cx="71" cy="46" rx="3.5" ry="4" fill="#2C2C2C"/>
    <ellipse cx="70.5" cy="45.5" rx="2.5" ry="3" fill="#1A1A2E"/>
    <!-- Iris detail -->
    <circle cx="70" cy="45" r="1.5" fill="white" opacity="0.9"/>
    <circle cx="72" cy="47" r="0.7" fill="white" opacity="0.5"/>
    <!-- Focused brow (right) -->
    <path d="M66 39 Q72 36 78 39" fill="none" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round"/>

    <!-- Soft blush -->
    <ellipse cx="42" cy="52" rx="7" ry="4" fill="url(#bl0)"/>
    <ellipse cx="78" cy="52" rx="7" ry="4" fill="url(#bl0)"/>

    <!-- Nose -->
    <ellipse cx="60" cy="49" rx="1.5" ry="1" fill="#F0B898" opacity="0.5"/>

    <!-- Determined mouth -->
    <path d="M54 56 Q60 59 66 56" fill="none" stroke="#CC6666" stroke-width="1.8" stroke-linecap="round"/>
    <!-- Lower lip hint -->
    <path d="M56 57 Q60 60 64 57" fill="none" stroke="#CC6666" stroke-width="0.6" opacity="0.3"/>
  `;
}
