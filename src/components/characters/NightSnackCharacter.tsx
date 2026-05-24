// 夜宵 - 卫衣，烤串/奶茶，街头小摊，蒸汽飘动
export function nightSnackSVG() {
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
      <!-- Black messy hair -->
      <linearGradient id="h0" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#3A3A3A"/>
        <stop offset="50%" stop-color="#222"/>
        <stop offset="100%" stop-color="#111"/>
      </linearGradient>
      <!-- Hoodie gray -->
      <linearGradient id="hoodie0" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7A7A8A"/>
        <stop offset="100%" stop-color="#5A5A6A"/>
      </linearGradient>
      <!-- Hoodie shadow -->
      <linearGradient id="hoodie0s" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5A5A6A"/>
        <stop offset="100%" stop-color="#4A4A5A"/>
      </linearGradient>
      <!-- Eye gradient -->
      <radialGradient id="eye0" cx="0.35" cy="0.3" r="0.6">
        <stop offset="0%" stop-color="#4A3A2A"/>
        <stop offset="100%" stop-color="#1A0A00"/>
      </radialGradient>
      <!-- Skewer meat -->
      <linearGradient id="meat0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#F0A030"/>
        <stop offset="100%" stop-color="#CC7700"/>
      </linearGradient>
      <!-- Boba cup -->
      <linearGradient id="boba0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#D4A574"/>
        <stop offset="40%" stop-color="#C49060"/>
        <stop offset="100%" stop-color="#A07040"/>
      </linearGradient>
      <!-- Night sky -->
      <linearGradient id="night0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1A1A2E"/>
        <stop offset="100%" stop-color="#2D2D44"/>
      </linearGradient>
      <!-- Street lamp glow -->
      <radialGradient id="lamp0" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stop-color="#FFE88A" stop-opacity="0.4"/>
        <stop offset="60%" stop-color="#FFD93D" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="#FFD93D" stop-opacity="0"/>
      </radialGradient>
      <!-- Slipper gradient -->
      <linearGradient id="slipper0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6A6A7A"/>
        <stop offset="100%" stop-color="#4A4A5A"/>
      </linearGradient>
      <!-- Steam -->
      <linearGradient id="steam0" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#DDD" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#FFF" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <!-- === NIGHT BACKGROUND === -->
    <rect x="0" y="0" width="120" height="120" fill="url(#night0)" rx="8"/>
    <!-- Ground -->
    <rect x="0" y="110" width="120" height="12" fill="#2A2A3A" rx="0"/>
    <rect x="0" y="110" width="120" height="3" fill="#353548"/>

    <!-- Stars -->
    <circle cx="15" cy="10" r="1" fill="white" opacity="0.6"/>
    <circle cx="45" cy="6" r="0.8" fill="white" opacity="0.4"/>
    <circle cx="85" cy="12" r="1" fill="white" opacity="0.5"/>
    <circle cx="105" cy="8" r="0.6" fill="white" opacity="0.3"/>
    <circle cx="70" cy="4" r="0.7" fill="white" opacity="0.4"/>
    <circle cx="30" cy="16" r="0.5" fill="white" opacity="0.3"/>

    <!-- Street lamp post -->
    <rect x="12" y="40" width="3" height="72" fill="#4A4A5A" rx="1"/>
    <!-- Lamp arm -->
    <path d="M15 44 Q22 40 28 44" fill="none" stroke="#4A4A5A" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Lamp head -->
    <rect x="24" y="42" width="8" height="5" rx="2" fill="#6A6A7A"/>
    <!-- Lamp light glow -->
    <ellipse cx="28" cy="55" rx="28" ry="40" fill="url(#lamp0)"/>
    <!-- Lamp light bulb -->
    <ellipse cx="28" cy="47" rx="3" ry="2" fill="#FFE88A" opacity="0.8"/>
    <ellipse cx="28" cy="47" rx="2" ry="1.2" fill="#FFF5CC" opacity="0.6"/>

    <!-- === LEGS === -->
    <!-- Left leg -->
    <path d="M47 106 L45 117 Q45 119 47 119 L54 119 Q56 119 56 117 L54 106 Z" fill="url(#s0)" stroke="#E8C4A0" stroke-width="0.4"/>
    <!-- Right leg -->
    <path d="M66 106 L66 117 Q66 119 68 119 L75 119 Q77 119 77 117 L75 106 Z" fill="url(#s0)" stroke="#E8C4A0" stroke-width="0.4"/>
    <!-- Left slipper -->
    <path d="M42 118 Q40 122 44 123 L56 123 Q59 123 58 119 L55 118 Q52 121 48 121 Q44 121 42 118 Z" fill="url(#slipper0)" stroke="#3A3A4A" stroke-width="0.4"/>
    <rect x="42" y="117" width="15" height="2" rx="1" fill="#7A7A8A"/>
    <!-- Right slipper -->
    <path d="M64 118 Q62 122 66 123 L77 123 Q80 123 79 119 L76 118 Q74 121 70 121 Q66 121 64 118 Z" fill="url(#slipper0)" stroke="#3A3A4A" stroke-width="0.4"/>
    <rect x="63" y="117" width="15" height="2" rx="1" fill="#7A7A8A"/>

    <!-- === BODY (Hoodie) === -->
    <path d="M38 80 Q36 78 34 82 L32 108 L88 108 L86 82 Q84 78 82 80 L82 108 L38 108 Z" fill="url(#hoodie0)" stroke="#4A4A5A" stroke-width="0.4"/>
    <!-- Hoodie pocket -->
    <path d="M44 96 Q44 94 46 94 L74 94 Q76 94 76 96 L76 106 Q76 108 74 108 L46 108 Q44 108 44 106 Z" fill="url(#hoodie0s)" stroke="#4A4A5A" stroke-width="0.3"/>
    <!-- Pocket opening -->
    <path d="M46 96 L74 96" fill="none" stroke="#3A3A4A" stroke-width="0.8"/>
    <!-- Hoodie zipper line -->
    <line x1="60" y1="80" x2="60" y2="94" stroke="#5A5A6A" stroke-width="0.6" stroke-dasharray="2,1.5"/>
    <!-- Zipper pull -->
    <rect x="59" y="93" width="3" height="4" rx="1" fill="#888"/>
    <!-- Hoodie drawstrings -->
    <path d="M52 80 Q50 88 48 94" fill="none" stroke="#999" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M68 80 Q70 88 72 94" fill="none" stroke="#999" stroke-width="1.5" stroke-linecap="round"/>
    <!-- String tips -->
    <circle cx="48" cy="95" r="1.5" fill="#AAA"/>
    <circle cx="72" cy="95" r="1.5" fill="#AAA"/>
    <!-- Hood outline behind head -->
    <path d="M38 78 Q38 66 48 62 Q58 58 60 56 Q62 58 72 62 Q82 66 82 78" fill="url(#hoodie0s)" stroke="#4A4A5A" stroke-width="0.4" opacity="0.5"/>

    <!-- Neck -->
    <rect x="55" y="68" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- === LEFT ARM + SKEWERS === -->
    <path d="M36 84 Q24 80 16 72" fill="none" stroke="url(#s0)" stroke-width="11" stroke-linecap="round"/>
    <!-- Sleeve cuff -->
    <path d="M20 74 Q18 72 16 74" fill="none" stroke="#5A5A6A" stroke-width="3" stroke-linecap="round"/>
    <!-- Hand -->
    <ellipse cx="15" cy="70" rx="6.5" ry="5.5" fill="url(#s0)" stroke="#E8C4A0" stroke-width="0.3"/>

    <!-- Skewers (3 pieces) -->
    <!-- Stick 1 -->
    <line x1="10" y1="58" x2="10" y2="82" stroke="#8B6C5C" stroke-width="1.8" stroke-linecap="round"/>
    <ellipse cx="10" cy="60" rx="5" ry="3.5" fill="url(#meat0)" stroke="#CC7700" stroke-width="0.3"/>
    <ellipse cx="10" cy="67" rx="4.5" ry="3" fill="#E08820" stroke="#CC7700" stroke-width="0.3"/>
    <ellipse cx="10" cy="73" rx="5" ry="3.5" fill="url(#meat0)" stroke="#CC7700" stroke-width="0.3"/>
    <!-- Grill marks -->
    <line x1="7" y1="59" x2="13" y2="59" stroke="#8B5500" stroke-width="0.5" opacity="0.4"/>
    <line x1="7" y1="61" x2="13" y2="61" stroke="#8B5500" stroke-width="0.5" opacity="0.4"/>
    <line x1="7" y1="72" x2="13" y2="72" stroke="#8B5500" stroke-width="0.5" opacity="0.4"/>
    <!-- Spice dots -->
    <circle cx="9" cy="59" r="0.5" fill="#FF6B00" opacity="0.5"/>
    <circle cx="12" cy="61" r="0.4" fill="#FF6B00" opacity="0.4"/>
    <circle cx="11" cy="74" r="0.5" fill="#FF6B00" opacity="0.5"/>

    <!-- Stick 2 -->
    <line x1="16" y1="56" x2="16" y2="80" stroke="#8B6C5C" stroke-width="1.8" stroke-linecap="round"/>
    <ellipse cx="16" cy="58" rx="4.5" ry="3" fill="#E08820" stroke="#CC7700" stroke-width="0.3"/>
    <ellipse cx="16" cy="65" rx="5" ry="3.5" fill="url(#meat0)" stroke="#CC7700" stroke-width="0.3"/>
    <ellipse cx="16" cy="72" rx="4.5" ry="3" fill="#E08820" stroke="#CC7700" stroke-width="0.3"/>
    <line x1="13" y1="57" x2="19" y2="57" stroke="#8B5500" stroke-width="0.5" opacity="0.4"/>
    <line x1="13" y1="64" x2="19" y2="64" stroke="#8B5500" stroke-width="0.5" opacity="0.4"/>

    <!-- Stick 3 -->
    <line x1="22" y1="60" x2="22" y2="84" stroke="#8B6C5C" stroke-width="1.8" stroke-linecap="round"/>
    <ellipse cx="22" cy="62" rx="5" ry="3.5" fill="url(#meat0)" stroke="#CC7700" stroke-width="0.3"/>
    <ellipse cx="22" cy="69" rx="4.5" ry="3" fill="#E08820" stroke="#CC7700" stroke-width="0.3"/>
    <ellipse cx="22" cy="76" rx="5" ry="3.5" fill="url(#meat0)" stroke="#CC7700" stroke-width="0.3"/>
    <line x1="19" y1="61" x2="25" y2="61" stroke="#8B5500" stroke-width="0.5" opacity="0.4"/>
    <line x1="19" y1="75" x2="25" y2="75" stroke="#8B5500" stroke-width="0.5" opacity="0.4"/>

    <!-- Steam rising from skewers -->
    <g style="animation:steam-rise 2s ease-out infinite">
      <path d="M10 54 Q7 46 11 42" fill="none" stroke="url(#steam0)" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    </g>
    <g style="animation:steam-rise 2s ease-out infinite;animation-delay:0.5s">
      <path d="M16 52 Q19 44 15 40" fill="none" stroke="url(#steam0)" stroke-width="1.2" stroke-linecap="round" opacity="0.4"/>
    </g>
    <g style="animation:steam-rise 2s ease-out infinite;animation-delay:1s">
      <path d="M22 56 Q25 48 21 44" fill="none" stroke="url(#steam0)" stroke-width="1.3" stroke-linecap="round" opacity="0.45"/>
    </g>

    <!-- === RIGHT ARM + BOBA TEA === -->
    <path d="M82 84 Q92 80 100 72" fill="none" stroke="url(#s0)" stroke-width="11" stroke-linecap="round"/>
    <!-- Sleeve cuff -->
    <path d="M96 76 Q98 74 100 76" fill="none" stroke="#5A5A6A" stroke-width="3" stroke-linecap="round"/>
    <!-- Hand -->
    <ellipse cx="101" cy="70" rx="6" ry="5" fill="url(#s0)" stroke="#E8C4A0" stroke-width="0.3"/>

    <!-- Boba tea cup -->
    <path d="M92 66 L90 88 Q90 90 92 90 L110 90 Q112 90 112 88 L110 66 Z" fill="white" stroke="#DDD" stroke-width="0.5"/>
    <!-- Cup dome lid -->
    <path d="M90 66 L92 62 L110 62 L112 66" fill="white" stroke="#DDD" stroke-width="0.5"/>
    <ellipse cx="101" cy="62" rx="10" ry="3" fill="white" stroke="#DDD" stroke-width="0.3"/>
    <!-- Tea liquid -->
    <path d="M92 70 L91 88 Q91 90 92 90 L110 90 Q111 90 111 88 L110 70 Z" fill="url(#boba0)" opacity="0.85"/>
    <!-- Milk layer -->
    <path d="M92 70 L91 76 L110 76 L111 70 Z" fill="#E8D0B0" opacity="0.5"/>
    <!-- Boba pearls -->
    <circle cx="95" cy="84" r="2.5" fill="#2A1A0A"/>
    <circle cx="99" cy="86" r="2.2" fill="#332211"/>
    <circle cx="103" cy="84" r="2.5" fill="#2A1A0A"/>
    <circle cx="107" cy="86" r="2.2" fill="#332211"/>
    <circle cx="97" cy="81" r="2" fill="#2A1A0A"/>
    <circle cx="105" cy="82" r="2" fill="#2A1A0A"/>
    <!-- Pearl highlights -->
    <circle cx="94" cy="83" r="0.8" fill="white" opacity="0.2"/>
    <circle cx="102" cy="83" r="0.8" fill="white" opacity="0.2"/>
    <circle cx="106" cy="85" r="0.7" fill="white" opacity="0.2"/>
    <!-- Straw -->
    <rect x="98" y="52" width="3.5" height="16" rx="1.5" fill="#E87B6B"/>
    <rect x="98.5" y="52" width="1" height="16" rx="0.5" fill="#F09888" opacity="0.4"/>
    <!-- Straw tip below lid -->
    <path d="M98 62 L99 66 L104 66 L101.5 62 Z" fill="#E87B6B" opacity="0.7"/>
    <!-- Cup condensation drops -->
    <circle cx="94" cy="74" r="0.8" fill="#B0D0E8" opacity="0.4"/>
    <circle cx="108" cy="78" r="0.6" fill="#B0D0E8" opacity="0.3"/>
    <circle cx="93" cy="80" r="0.7" fill="#B0D0E8" opacity="0.35"/>

    <!-- === HEAD === -->
    <circle cx="60" cy="46" r="26" fill="url(#ss0)" stroke="#E8C4A0" stroke-width="0.3"/>
    <!-- Chin shadow -->
    <ellipse cx="60" cy="64" rx="14" ry="6" fill="#F0CDA0" opacity="0.3"/>

    <!-- === HAIR (Black, messy) === -->
    <!-- Main hair volume -->
    <path d="M34 44 Q32 16 60 12 Q88 16 86 44" fill="url(#h0)"/>
    <!-- Messy strands left -->
    <path d="M34 44 Q32 38 30 48 Q28 56 32 60" fill="url(#h0)"/>
    <path d="M36 20 Q28 18 32 24" fill="url(#h0)"/>
    <!-- Messy strands right -->
    <path d="M86 44 Q88 38 90 48 Q92 56 88 60" fill="url(#h0)"/>
    <path d="M84 18 Q92 14 88 22" fill="url(#h0)"/>
    <!-- Messy top tufts -->
    <path d="M42 16 Q38 6 44 12" fill="url(#h0)"/>
    <path d="M54 14 Q52 4 58 10" fill="url(#h0)"/>
    <path d="M66 14 Q68 2 64 10" fill="url(#h0)"/>
    <path d="M78 16 Q82 6 76 12" fill="url(#h0)"/>
    <!-- Bangs -->
    <path d="M38 38 Q44 32 50 36 Q54 30 58 36 Q62 30 66 36 Q70 32 76 36 Q80 34 82 38" fill="url(#h0)"/>
    <!-- Hair shine -->
    <path d="M48 20 Q56 16 64 20" fill="#444" opacity="0.3"/>
    <path d="M52 18 Q58 14 62 18" fill="#555" opacity="0.2"/>

    <!-- === FACE === -->
    <!-- Big expressive eyes (satisfied/enjoying) -->
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
    <ellipse cx="49" cy="46" rx="7" ry="8" fill="none" stroke="#1A0A00" stroke-width="1" opacity="0.8"/>
    <!-- Left eyelashes -->
    <path d="M42 43 Q43 41 44 43" fill="none" stroke="#1A0A00" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M44 42 Q45 40 46 42" fill="none" stroke="#1A0A00" stroke-width="1" stroke-linecap="round"/>

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
    <ellipse cx="71" cy="46" rx="7" ry="8" fill="none" stroke="#1A0A00" stroke-width="1" opacity="0.8"/>
    <!-- Right eyelashes -->
    <path d="M76 43 Q77 41 78 43" fill="none" stroke="#1A0A00" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M74 42 Q75 40 76 42" fill="none" stroke="#1A0A00" stroke-width="1" stroke-linecap="round"/>

    <!-- Eyebrows (relaxed, slightly raised) -->
    <path d="M42 38 Q48 35 55 37" fill="none" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M65 37 Q72 35 78 38" fill="none" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>

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

    <!-- Satisfied enjoying smile -->
    <path d="M53 58 Q57 64 60 64 Q63 64 67 58" fill="#FF8888" stroke="#CC6666" stroke-width="0.8" stroke-linecap="round"/>
    <!-- Tongue hint (enjoying food) -->
    <path d="M56 60 Q60 65 64 60" fill="#FF6B6B" opacity="0.4"/>
    <!-- Smile line -->
    <path d="M54 58 Q60 65 66 58" fill="none" stroke="#CC6666" stroke-width="1" stroke-linecap="round"/>

    <!-- === NIGHT ATMOSPHERE PARTICLES === -->
    <g style="animation:steam-rise 4s ease-in-out infinite">
      <circle cx="8" cy="30" r="0.6" fill="#FFE88A" opacity="0.15"/>
    </g>
    <g style="animation:steam-rise 4s ease-in-out infinite;animation-delay:2s">
      <circle cx="20" cy="35" r="0.5" fill="#FFE88A" opacity="0.1"/>
    </g>
    <!-- Moth near lamp -->
    <g style="animation:steam-rise 3s ease-in-out infinite;animation-delay:0.8s">
      <path d="M32 48 Q30 46 32 44 Q34 46 32 48" fill="#999" opacity="0.3"/>
      <circle cx="32" cy="46" r="0.5" fill="#888" opacity="0.4"/>
    </g>
  `;
}
