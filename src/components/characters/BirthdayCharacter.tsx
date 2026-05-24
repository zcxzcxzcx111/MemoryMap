// Birthday - party dress, party hat, birthday cake with candles, confetti
export function birthdaySVG() {
  return `
    <defs>
      <!-- Party dress gradient -->
      <linearGradient id="bday-dress" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FF8CB8"/>
        <stop offset="40%" stop-color="#E87BA0"/>
        <stop offset="100%" stop-color="#D46090"/>
      </linearGradient>
      <!-- Dress highlight -->
      <radialGradient id="bday-dress-hl" cx="0.4" cy="0.3" r="0.5">
        <stop offset="0%" stop-color="#FFB0D0" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#FF8CB8" stop-opacity="0"/>
      </radialGradient>
      <!-- Party hat gradient -->
      <linearGradient id="bday-hat" x1="0" y1="1" x2="0.3" y2="0">
        <stop offset="0%" stop-color="#6B9DFF"/>
        <stop offset="100%" stop-color="#A0C4FF"/>
      </linearGradient>
      <!-- Hat stripe -->
      <linearGradient id="bday-hat-stripe" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#FFD93D"/>
        <stop offset="100%" stop-color="#FFE870"/>
      </linearGradient>
      <!-- Cake gradient -->
      <linearGradient id="bday-cake" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFF0D0"/>
        <stop offset="100%" stop-color="#F0D8A0"/>
      </linearGradient>
      <!-- Cake frosting -->
      <linearGradient id="bday-frost" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFB0C8"/>
        <stop offset="100%" stop-color="#FF8CB0"/>
      </linearGradient>
      <!-- Candle flame glow -->
      <radialGradient id="bday-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#FFFFA0"/>
        <stop offset="60%" stop-color="#FFD93D"/>
        <stop offset="100%" stop-color="#FFD93D" stop-opacity="0"/>
      </radialGradient>
      <!-- Dress ribbon gradient -->
      <linearGradient id="bday-ribbon" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#FFD93D"/>
        <stop offset="100%" stop-color="#FFEC80"/>
      </linearGradient>
    </defs>

    <!-- Confetti pieces with SMIL fall animation -->
    <rect x="12" y="8" width="4" height="4" rx="0.8" fill="#FF6B9D" opacity="0.8" transform="rotate(25 14 10)">
      <animate attributeName="cy" values="8;50;8" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite"/>
    </rect>
    <rect x="30" y="4" width="3.5" height="3.5" rx="0.6" fill="#6B9DFF" opacity="0.7" transform="rotate(-20 32 6)">
      <animate attributeName="cy" values="4;46;4" dur="2.6s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;0.15;0.7" dur="2.6s" repeatCount="indefinite"/>
    </rect>
    <rect x="78" y="10" width="3" height="3" rx="0.5" fill="#FFD93D" opacity="0.7" transform="rotate(40 80 12)">
      <animate attributeName="cy" values="10;52;10" dur="2.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.8s" repeatCount="indefinite"/>
    </rect>
    <rect x="95" y="6" width="4" height="3.5" rx="0.7" fill="#6BCC6B" opacity="0.6" transform="rotate(-30 97 8)">
      <animate attributeName="cy" values="6;48;6" dur="3.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.2s" repeatCount="indefinite"/>
    </rect>
    <circle cx="108" cy="12" r="2" fill="#FF6B9D" opacity="0.6">
      <animate attributeName="cy" values="12;54;12" dur="2.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.4s" repeatCount="indefinite"/>
    </circle>
    <rect x="48" y="6" width="3" height="4" rx="0.5" fill="#FF8AAA" opacity="0.6" transform="rotate(15 50 8)">
      <animate attributeName="cy" values="6;44;6" dur="2.9s" repeatCount="indefinite"/>
    </rect>
    <circle cx="68" cy="14" r="1.5" fill="#A0C4FF" opacity="0.5">
      <animate attributeName="cy" values="14;50;14" dur="3.1s" repeatCount="indefinite"/>
    </circle>

    <!-- Body (party dress) -->
    <path d="M40 80 Q38 76 36 82 L36 108 L84 108 L82 82 Q80 76 78 80 L78 106 L40 106 Z" fill="url(#bday-dress)"/>
    <path d="M40 80 Q38 76 36 82 L36 108 L84 108 L82 82 Q80 76 78 80 L78 106 L40 106 Z" fill="url(#bday-dress-hl)"/>
    <!-- Dress neckline -->
    <path d="M44 78 Q60 84 76 78" fill="none" stroke="#D46090" stroke-width="1" opacity="0.5"/>
    <!-- Dress waist ribbon -->
    <path d="M40 92 L80 92" stroke="url(#bday-ribbon)" stroke-width="3" stroke-linecap="round"/>
    <!-- Ribbon bow center -->
    <circle cx="60" cy="92" r="2.5" fill="#FFD93D"/>
    <path d="M57 92 Q54 88 56 86 Q58 88 60 92" fill="#FFE870" opacity="0.8"/>
    <path d="M63 92 Q66 88 64 86 Q62 88 60 92" fill="#FFE870" opacity="0.8"/>
    <!-- Dress skirt detail -->
    <path d="M42 96 Q50 98 60 96 Q70 98 78 96" fill="none" stroke="#D46090" stroke-width="0.7" opacity="0.4"/>
    <path d="M40 102 Q50 104 60 102 Q70 104 80 102" fill="none" stroke="#D46090" stroke-width="0.7" opacity="0.3"/>
    <!-- Dress ruffle bottom -->
    <path d="M36 108 Q42 105 48 108 Q54 111 60 108 Q66 111 72 108 Q78 111 84 108" fill="none" stroke="#E87BA0" stroke-width="1" opacity="0.6"/>

    <!-- Neck -->
    <rect x="56" y="68" width="8" height="12" rx="4" fill="url(#s0)"/>

    <!-- Left arm (free, waving) -->
    <path d="M38 82 Q26 78 20 68" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="19" cy="66" r="5.5" fill="url(#s0)"/>
    <!-- Left hand fingers -->
    <path d="M16 64 Q14 60 15 58" fill="none" stroke="url(#s0)" stroke-width="2" stroke-linecap="round"/>
    <path d="M19 63 Q18 59 19 57" fill="none" stroke="url(#s0)" stroke-width="2" stroke-linecap="round"/>
    <path d="M22 64 Q23 60 22 58" fill="none" stroke="url(#s0)" stroke-width="2" stroke-linecap="round"/>

    <!-- Right arm (holding cake) -->
    <path d="M80 82 Q90 76 96 66" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="97" cy="64" r="5" fill="url(#s0)"/>

    <!-- Birthday cake -->
    <rect x="86" y="56" width="26" height="18" rx="5" fill="url(#bday-cake)"/>
    <!-- Frosting layer -->
    <path d="M86 60 Q90 56 94 60 Q98 56 102 60 Q106 56 112 60" fill="url(#bday-frost)" opacity="0.9"/>
    <!-- Cake bottom tier -->
    <rect x="88" y="68" width="22" height="6" rx="2" fill="url(#bday-cake)"/>
    <!-- Frosting drips -->
    <path d="M88 68 Q89 72 91 68" fill="url(#bday-frost)" opacity="0.7"/>
    <path d="M98 68 Q99 73 101 68" fill="url(#bday-frost)" opacity="0.7"/>
    <!-- Cake plate -->
    <ellipse cx="99" cy="75" rx="15" ry="2.5" fill="#E8D8C0" opacity="0.6"/>
    <!-- Cake sprinkles -->
    <circle cx="92" cy="64" r="0.6" fill="#FF6B9D"/>
    <circle cx="96" cy="62" r="0.6" fill="#6B9DFF"/>
    <circle cx="100" cy="64" r="0.5" fill="#FFD93D"/>
    <circle cx="104" cy="62" r="0.6" fill="#6BCC6B"/>
    <circle cx="108" cy="64" r="0.5" fill="#FF6B9D"/>

    <!-- Candles -->
    <rect x="93" y="46" width="3.5" height="10" rx="1.5" fill="#6B9DFF"/>
    <rect x="93" y="46" width="1" height="10" rx="0.5" fill="#8BB8FF" opacity="0.4"/>
    <rect x="101" y="48" width="3.5" height="8" rx="1.5" fill="#FF8AAA"/>
    <rect x="101" y="48" width="1" height="8" rx="0.5" fill="#FFB0C8" opacity="0.4"/>
    <!-- Candle wicks -->
    <line x1="95" y1="46" x2="95" y2="44" stroke="#555" stroke-width="0.8"/>
    <line x1="103" y1="48" x2="103" y2="46" stroke="#555" stroke-width="0.8"/>

    <!-- Candle flame glow halos -->
    <circle cx="95" cy="42" r="6" fill="url(#bday-glow)" opacity="0.3">
      <animate attributeName="r" values="6;8;6" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="103" cy="44" r="5" fill="url(#bday-glow)" opacity="0.25">
      <animate attributeName="r" values="5;7;5" dur="0.8s" repeatCount="indefinite"/>
    </circle>
    <!-- Flame outer -->
    <ellipse cx="95" cy="42" rx="2.5" ry="4" fill="#FFD93D">
      <animate attributeName="ry" values="4;5;3.5;4.5;4" dur="0.8s" repeatCount="indefinite"/>
      <animate attributeName="rx" values="2.5;2;2.8;2.2;2.5" dur="0.8s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Flame inner -->
    <ellipse cx="95" cy="43" rx="1.2" ry="2.2" fill="#FF8A40" opacity="0.8">
      <animate attributeName="ry" values="2.2;2.8;2;2.5;2.2" dur="0.8s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Flame core -->
    <ellipse cx="95" cy="44" rx="0.6" ry="1.2" fill="#FFF5E0" opacity="0.6"/>

    <!-- Flame outer 2 -->
    <ellipse cx="103" cy="44" rx="2.5" ry="4" fill="#FFD93D">
      <animate attributeName="ry" values="4;3.5;5;4.2;4" dur="0.6s" repeatCount="indefinite"/>
      <animate attributeName="rx" values="2.5;2.8;2;2.5;2.5" dur="0.6s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Flame inner 2 -->
    <ellipse cx="103" cy="45" rx="1.2" ry="2.2" fill="#FF8A40" opacity="0.8">
      <animate attributeName="ry" values="2.2;2;2.8;2.4;2.2" dur="0.6s" repeatCount="indefinite"/>
    </ellipse>
    <!-- Flame core 2 -->
    <ellipse cx="103" cy="46" rx="0.6" ry="1.2" fill="#FFF5E0" opacity="0.6"/>

    <!-- Legs -->
    <path d="M48 106 L46 117 Q45 120 48 120 L53 120 Q56 120 56 117 L56 106 Z" fill="url(#s0)"/>
    <path d="M64 106 L66 117 Q65 120 68 120 L73 120 Q76 120 76 117 L72 106 Z" fill="url(#s0)"/>
    <!-- Shoes -->
    <ellipse cx="51" cy="121" rx="7" ry="3.5" fill="#E87BA0"/>
    <ellipse cx="51" cy="120.5" rx="6" ry="2" fill="#FF8CB8" opacity="0.4"/>
    <ellipse cx="71" cy="121" rx="7" ry="3.5" fill="#E87BA0"/>
    <ellipse cx="71" cy="120.5" rx="6" ry="2" fill="#FF8CB8" opacity="0.4"/>
    <!-- Shoe bows -->
    <circle cx="47" cy="120" r="1.5" fill="#FFD93D"/>
    <circle cx="67" cy="120" r="1.5" fill="#FFD93D"/>

    <!-- Head -->
    <circle cx="60" cy="44" r="28" fill="url(#ss0)"/>
    <!-- Ear hints -->
    <ellipse cx="32" cy="46" rx="4" ry="6" fill="url(#s0)"/>
    <ellipse cx="88" cy="46" rx="4" ry="6" fill="url(#s0)"/>

    <!-- Hair back -->
    <path d="M32 42 Q34 14 60 12 Q86 14 88 42 L88 38 Q86 16 60 14 Q34 16 32 38 Z" fill="url(#h0)"/>
    <!-- Hair sides -->
    <path d="M32 42 Q28 56 32 62 L36 50 Z" fill="url(#h0)"/>
    <path d="M88 42 Q92 56 88 62 L84 50 Z" fill="url(#h0)"/>
    <!-- Bangs -->
    <path d="M34 38 Q38 26 44 34 Q48 22 54 32 Q58 18 64 32 Q68 22 74 34 Q78 26 86 38 L86 44 Q78 36 74 42 Q68 30 64 40 Q58 30 54 40 Q48 30 44 42 Q38 36 34 44 Z" fill="url(#h0)"/>
    <!-- Hair side curls -->
    <path d="M32 50 Q28 58 32 64 Q34 60 36 54" fill="url(#h0)" opacity="0.9"/>
    <path d="M88 50 Q92 58 88 64 Q86 60 84 54" fill="url(#h0)" opacity="0.9"/>
    <!-- Hair shine -->
    <path d="M48 18 Q56 14 64 18" fill="none" stroke="#4A4A4A" stroke-width="1" opacity="0.3"/>
    <path d="M52 20 Q56 17 60 20" fill="none" stroke="#5A5A5A" stroke-width="0.6" opacity="0.2"/>

    <!-- Party hat -->
    <polygon points="52,34 60,4 68,34" fill="url(#bday-hat)"/>
    <!-- Hat stripes -->
    <polygon points="55,28 60,12 65,28" fill="url(#bday-hat-stripe)" opacity="0.3"/>
    <polygon points="57,22 60,14 63,22" fill="white" opacity="0.15"/>
    <!-- Hat pom-pom -->
    <circle cx="60" cy="4" r="3.5" fill="#FFD93D"/>
    <circle cx="60" cy="3.5" r="2" fill="#FFE870" opacity="0.6"/>
    <!-- Hat band -->
    <path d="M50 34 Q60 37 70 34" fill="none" stroke="#5A8CE8" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Hat dots decoration -->
    <circle cx="56" cy="26" r="1" fill="#FFD93D" opacity="0.5"/>
    <circle cx="64" cy="20" r="0.8" fill="#FFD93D" opacity="0.4"/>
    <circle cx="60" cy="16" r="0.7" fill="#FFD93D" opacity="0.5"/>

    <!-- Eyes (happy squinting arcs) -->
    <path d="M44 44 Q49 37 54 44" fill="none" stroke="#2C2C2C" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M66 44 Q71 37 76 44" fill="none" stroke="#2C2C2C" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Squint creases -->
    <path d="M45 43 Q49 38 53 43" fill="none" stroke="#2C2C2C" stroke-width="0.8" stroke-linecap="round" opacity="0.3"/>
    <path d="M67 43 Q71 38 75 43" fill="none" stroke="#2C2C2C" stroke-width="0.8" stroke-linecap="round" opacity="0.3"/>

    <!-- Soft blush -->
    <ellipse cx="42" cy="50" rx="7" ry="4" fill="url(#bl0)"/>
    <ellipse cx="78" cy="50" rx="7" ry="4" fill="url(#bl0)"/>

    <!-- Nose -->
    <ellipse cx="60" cy="48" rx="1.5" ry="1" fill="#F0B898" opacity="0.5"/>

    <!-- Big excited smile -->
    <path d="M50 54 Q55 62 60 63 Q65 62 70 54" fill="#CC3344" stroke="#CC3344" stroke-width="0.5"/>
    <path d="M50 54 Q55 60 60 61 Q65 60 70 54" fill="#FF7788" opacity="0.4"/>
    <!-- Teeth hint -->
    <path d="M54 55 L54 57 Q57 58 60 57.5 Q63 58 66 57 L66 55" fill="white" opacity="0.6"/>
    <!-- Tongue -->
    <ellipse cx="60" cy="62" rx="3" ry="1.5" fill="#E84455" opacity="0.4"/>
  `;
}
