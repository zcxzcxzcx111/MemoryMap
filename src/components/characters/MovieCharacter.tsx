// 电影 - 3D眼镜，爆米花桶，电影票 - 详细Q版风格
export function movieSVG() {
  return `
    <defs>
      <!-- 皮肤渐变 -->
      <linearGradient id="s0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFE8D0"/>
        <stop offset="100%" stop-color="#FFDAB9"/>
      </linearGradient>
      <!-- 皮肤径向渐变 -->
      <radialGradient id="ss0" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#FFF0DE"/>
        <stop offset="100%" stop-color="#FFD4A8"/>
      </radialGradient>
      <!-- 腮红渐变 -->
      <radialGradient id="bl0" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FF8AAA" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#FF8AAA" stop-opacity="0"/>
      </radialGradient>
      <!-- 黑发渐变 -->
      <linearGradient id="h0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3A3A"/>
        <stop offset="100%" stop-color="#1A1A1A"/>
      </linearGradient>
      <!-- 棕色衬衫渐变 -->
      <linearGradient id="shirt0" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#9B7C6C"/>
        <stop offset="50%" stop-color="#8B6C5C"/>
        <stop offset="100%" stop-color="#7B5C4C"/>
      </linearGradient>
      <!-- 爆米花桶渐变 -->
      <linearGradient id="bucket0" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#F09080"/>
        <stop offset="50%" stop-color="#E87B6B"/>
        <stop offset="100%" stop-color="#D46A5A"/>
      </linearGradient>
      <!-- 爆米花渐变 -->
      <radialGradient id="pop0" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FFF5E0"/>
        <stop offset="100%" stop-color="#F5DEB3"/>
      </radialGradient>
      <radialGradient id="pop1" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#F5E0A0"/>
        <stop offset="100%" stop-color="#E8C88A"/>
      </radialGradient>
      <!-- 3D眼镜镜片 -->
      <linearGradient id="lens-red" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FF6666"/>
        <stop offset="100%" stop-color="#CC3333"/>
      </linearGradient>
      <linearGradient id="lens-blue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6688FF"/>
        <stop offset="100%" stop-color="#3355CC"/>
      </linearGradient>
      <!-- 眼睛渐变 -->
      <radialGradient id="eye0" cx="45%" cy="40%" r="55%">
        <stop offset="0%" stop-color="#4A3520"/>
        <stop offset="100%" stop-color="#2C1A0A"/>
      </radialGradient>
    </defs>

    <!-- ===== 身体(棕色休闲衬衫) ===== -->
    <path d="M38 78 Q36 76 32 80 L28 108 L92 108 L88 80 Q84 76 82 78 L82 108 L38 108 Z" fill="url(#shirt0)" stroke="#6B4C3C" stroke-width="0.5"/>
    <!-- 衬衫高光 -->
    <path d="M42 82 Q44 80 46 82 L44 104 L38 104 Z" fill="white" opacity="0.08"/>
    <path d="M74 82 Q76 80 78 82 L82 104 L76 104 Z" fill="white" opacity="0.08"/>
    <!-- 衬衫领口 -->
    <path d="M50 76 Q55 80 60 78 Q65 80 70 76" fill="none" stroke="#6B4C3C" stroke-width="1.2" stroke-linecap="round"/>
    <!-- 衬衫扣子 -->
    <circle cx="60" cy="84" r="1.5" fill="#7A5C4C" stroke="#6B4C3C" stroke-width="0.5"/>
    <circle cx="60" cy="92" r="1.5" fill="#7A5C4C" stroke="#6B4C3C" stroke-width="0.5"/>
    <circle cx="60" cy="100" r="1.5" fill="#7A5C4C" stroke="#6B4C3C" stroke-width="0.5"/>
    <!-- 口袋 -->
    <path d="M40 92 L40 100 Q40 102 42 102 L52 102 Q54 102 54 100 L54 92 Z" fill="none" stroke="#6B4C3C" stroke-width="0.7" opacity="0.4"/>
    <path d="M66 92 L66 100 Q66 102 68 102 L78 102 Q80 102 80 100 L80 92 Z" fill="none" stroke="#6B4C3C" stroke-width="0.7" opacity="0.4"/>

    <!-- ===== 脖子 ===== -->
    <rect x="55" y="66" width="10" height="14" rx="5" fill="url(#ss0)"/>

    <!-- ===== 左手臂(抱爆米花) ===== -->
    <path d="M38 82 Q26 76 20 68" fill="none" stroke="#FFD4A8" stroke-width="11" stroke-linecap="round"/>
    <path d="M38 82 Q26 76 20 68" fill="none" stroke="#FFE8D0" stroke-width="7" stroke-linecap="round" opacity="0.3"/>
    <!-- 左手 -->
    <ellipse cx="19" cy="66" rx="5.5" ry="5" fill="url(#s0)"/>
    <path d="M16 63 Q14 61 15 60" fill="none" stroke="#F0CFA0" stroke-width="1.5" stroke-linecap="round"/>

    <!-- ===== 爆米花桶 ===== -->
    <path d="M6 62 L10 90 L32 90 L36 62 Z" fill="url(#bucket0)" stroke="#C05A4A" stroke-width="0.5"/>
    <!-- 桶体高光 -->
    <path d="M10 64 L12 88 L16 88 L14 64 Z" fill="white" opacity="0.12"/>
    <!-- 桶口 -->
    <rect x="4" y="58" width="34" height="6" rx="3" fill="#CC5A4A" stroke="#B04A3A" stroke-width="0.5"/>
    <rect x="6" y="59" width="30" height="3" rx="1.5" fill="#D86A5A" opacity="0.6"/>
    <!-- 桶身条纹 -->
    <path d="M8 66 L14 86" stroke="white" stroke-width="1.5" opacity="0.15"/>
    <path d="M16 62 L18 88" stroke="white" stroke-width="1.5" opacity="0.1"/>
    <path d="M24 62 L24 88" stroke="white" stroke-width="1.5" opacity="0.1"/>
    <path d="M32 62 L30 88" stroke="white" stroke-width="1.5" opacity="0.1"/>
    <!-- 桶上图案(电影胶片) -->
    <circle cx="21" cy="76" r="6" fill="none" stroke="white" stroke-width="1" opacity="0.2"/>
    <circle cx="21" cy="76" r="3" fill="none" stroke="white" stroke-width="0.8" opacity="0.15"/>

    <!-- ===== 爆米花堆 ===== -->
    <circle cx="12" cy="56" r="4.5" fill="url(#pop0)"/>
    <circle cx="20" cy="53" r="5" fill="url(#pop1)"/>
    <circle cx="28" cy="55" r="4.5" fill="url(#pop0)"/>
    <circle cx="16" cy="51" r="4" fill="url(#pop0)"/>
    <circle cx="24" cy="49" r="4.5" fill="url(#pop1)"/>
    <circle cx="32" cy="52" r="3.5" fill="url(#pop0)"/>
    <circle cx="8" cy="53" r="3" fill="url(#pop1)"/>
    <!-- 爆米花阴影 -->
    <circle cx="14" cy="55" r="2" fill="#D4B878" opacity="0.3"/>
    <circle cx="22" cy="52" r="2.5" fill="#D4B878" opacity="0.25"/>
    <circle cx="28" cy="54" r="2" fill="#D4B878" opacity="0.3"/>

    <!-- ===== 弹出的爆米花(动画) ===== -->
    <g>
      <circle cx="34" cy="46" r="3.5" fill="url(#pop0)">
        <animate attributeName="cy" values="46;36;46" dur="1.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.6;1" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="34" cy="46" r="1.5" fill="#D4B878" opacity="0.3">
        <animate attributeName="cy" values="46;36;46" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </g>
    <g>
      <circle cx="10" cy="44" r="3" fill="url(#pop1)">
        <animate attributeName="cy" values="44;32;44" dur="2.2s" repeatCount="indefinite" begin="0.5s"/>
        <animate attributeName="cx" values="10;8;10" dur="2.2s" repeatCount="indefinite" begin="0.5s"/>
        <animate attributeName="opacity" values="1;0.5;1" dur="2.2s" repeatCount="indefinite" begin="0.5s"/>
      </circle>
    </g>
    <g>
      <circle cx="26" cy="42" r="2.5" fill="url(#pop0)">
        <animate attributeName="cy" values="42;30;42" dur="2s" repeatCount="indefinite" begin="1s"/>
        <animate attributeName="cx" values="26;28;26" dur="2s" repeatCount="indefinite" begin="1s"/>
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>
    </g>
    <!-- 爆米花弹出闪光 -->
    <g>
      <path d="M30 38 L32 34 L34 38 L38 36 L34 40 L32 44 L30 40 L26 42 Z" fill="#FFE880" opacity="0">
        <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
      </path>
    </g>
    <g>
      <path d="M6 36 L7 33 L8 36 L11 35 L8 38 L7 41 L6 38 L3 39 Z" fill="#FFE880" opacity="0">
        <animate attributeName="opacity" values="0;0.6;0" dur="2.2s" repeatCount="indefinite" begin="0.8s"/>
      </path>
    </g>

    <!-- ===== 右手臂(拿票) ===== -->
    <path d="M82 82 Q94 76 100 68" fill="none" stroke="#FFD4A8" stroke-width="11" stroke-linecap="round"/>
    <path d="M82 82 Q94 76 100 68" fill="none" stroke="#FFE8D0" stroke-width="7" stroke-linecap="round" opacity="0.3"/>
    <!-- 右手 -->
    <ellipse cx="101" cy="66" rx="5.5" ry="5" fill="url(#s0)"/>
    <path d="M104 63 Q106 61 105 60" fill="none" stroke="#F0CFA0" stroke-width="1.5" stroke-linecap="round"/>

    <!-- ===== 电影票 ===== -->
    <rect x="92" y="54" width="24" height="16" rx="2.5" fill="white" stroke="#E0E0E0" stroke-width="0.5"/>
    <!-- 票撕线 -->
    <line x1="108" y1="54" x2="108" y2="70" stroke="#DDD" stroke-width="0.8" stroke-dasharray="2,2"/>
    <!-- 票面内容 -->
    <rect x="94" y="56" width="12" height="2.5" rx="1" fill="#E87B6B" opacity="0.6"/>
    <rect x="94" y="60" width="10" height="1.2" rx="0.5" fill="#999" opacity="0.35"/>
    <rect x="94" y="62.5" width="8" height="1.2" rx="0.5" fill="#999" opacity="0.25"/>
    <rect x="94" y="65" width="6" height="1" rx="0.5" fill="#999" opacity="0.2"/>
    <!-- 票上座位号 -->
    <text x="110" y="64" font-size="5" fill="#CC5A4A" font-family="sans-serif" font-weight="bold" opacity="0.6">A7</text>
    <!-- 票高光 -->
    <path d="M94 54 L96 54 L94 58 Z" fill="white" opacity="0.3"/>

    <!-- ===== 腿 ===== -->
    <path d="M46 106 L44 118 Q44 120 46 120 L54 120 Q56 120 56 118 L56 106 Z" fill="url(#s0)"/>
    <path d="M64 106 L64 118 Q64 120 66 120 L74 120 Q76 120 76 118 L76 106 Z" fill="url(#s0)"/>

    <!-- ===== 鞋子 ===== -->
    <path d="M42 118 L40 124 Q40 126 44 126 L56 126 Q60 126 58 124 L56 118 Z" fill="#5A4A3A"/>
    <path d="M42 122 L56 122" stroke="#4A3A2A" stroke-width="1"/>
    <ellipse cx="44" cy="124.5" rx="2" ry="1" fill="#6B5A4A" opacity="0.3"/>
    <path d="M62 118 L62 124 Q62 126 66 126 L76 126 Q80 126 78 124 L76 118 Z" fill="#5A4A3A"/>
    <path d="M63 122 L76 122" stroke="#4A3A2A" stroke-width="1"/>
    <ellipse cx="65" cy="124.5" rx="2" ry="1" fill="#6B5A4A" opacity="0.3"/>

    <!-- ===== 头 ===== -->
    <circle cx="60" cy="44" r="27" fill="url(#s0)"/>
    <!-- 头部阴影 -->
    <ellipse cx="48" cy="52" rx="12" ry="16" fill="#F0CFA0" opacity="0.15"/>
    <ellipse cx="72" cy="52" rx="12" ry="16" fill="#F0CFA0" opacity="0.15"/>

    <!-- ===== 头发 ===== -->
    <path d="M33 38 Q34 12 60 10 Q86 12 87 38 Q87 42 84 44 Q80 36 76 40 Q72 34 68 38 Q64 32 60 36 Q56 32 52 38 Q48 34 44 40 Q40 36 36 44 Q33 42 33 38 Z" fill="url(#h0)"/>
    <!-- 头发高光 -->
    <path d="M48 16 Q56 14 60 16 Q62 18 60 22 Q56 18 50 20 Z" fill="white" opacity="0.12"/>
    <path d="M66 14 Q72 16 74 20 Q72 22 68 18 Z" fill="white" opacity="0.08"/>
    <!-- 头发侧边 -->
    <path d="M33 38 Q30 44 32 52 Q34 46 36 42 Z" fill="url(#h0)"/>
    <path d="M87 38 Q90 44 88 52 Q86 46 84 42 Z" fill="url(#h0)"/>
    <!-- 刘海 -->
    <path d="M38 34 Q44 30 50 36 Q46 28 42 32 Z" fill="#2A2A2A"/>
    <path d="M50 30 Q56 26 62 34 Q58 26 54 28 Z" fill="#2A2A2A"/>
    <path d="M62 30 Q68 26 74 34 Q70 28 66 28 Z" fill="#2A2A2A"/>
    <path d="M72 34 Q78 30 82 38 Q78 32 74 34 Z" fill="#2A2A2A"/>

    <!-- ===== 3D眼镜 ===== -->
    <!-- 镜框 -->
    <rect x="36" y="39" width="20" height="14" rx="6" fill="#2A2A2A" stroke="#1A1A1A" stroke-width="0.5"/>
    <rect x="64" y="39" width="20" height="14" rx="6" fill="#2A2A2A" stroke="#1A1A1A" stroke-width="0.5"/>
    <!-- 镜框高光 -->
    <path d="M38 40 Q40 39 44 40 L42 42 Q40 40 38 41 Z" fill="white" opacity="0.1"/>
    <path d="M66 40 Q68 39 72 40 L70 42 Q68 40 66 41 Z" fill="white" opacity="0.1"/>
    <!-- 镜桥 -->
    <path d="M56 45 Q60 42 64 45" fill="none" stroke="#2A2A2A" stroke-width="3"/>
    <path d="M56 45 Q60 43 64 45" fill="none" stroke="#3A3A3A" stroke-width="1"/>
    <!-- 镜腿 -->
    <line x1="36" y1="43" x2="32" y2="41" stroke="#2A2A2A" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="84" y1="43" x2="88" y2="41" stroke="#2A2A2A" stroke-width="2.5" stroke-linecap="round"/>

    <!-- 左镜片(红色) -->
    <rect x="38" y="41" width="16" height="10" rx="4" fill="url(#lens-red)" opacity="0.75"/>
    <rect x="40" y="42" width="5" height="3" rx="1.5" fill="white" opacity="0.2"/>
    <!-- 右镜片(蓝色) -->
    <rect x="66" y="41" width="16" height="10" rx="4" fill="url(#lens-blue)" opacity="0.75"/>
    <rect x="68" y="42" width="5" height="3" rx="1.5" fill="white" opacity="0.2"/>

    <!-- ===== 眼睛(透过镜片隐约可见) ===== -->
    <!-- 左眼 -->
    <ellipse cx="46" cy="46" rx="5" ry="5.5" fill="url(#eye0)"/>
    <ellipse cx="46" cy="46" rx="4" ry="4.5" fill="#1A0A00"/>
    <circle cx="44" cy="44" r="2" fill="white" opacity="0.85"/>
    <circle cx="48" cy="47" r="1" fill="white" opacity="0.5"/>
    <!-- 右眼 -->
    <ellipse cx="74" cy="46" rx="5" ry="5.5" fill="url(#eye0)"/>
    <ellipse cx="74" cy="46" rx="4" ry="4.5" fill="#1A0A00"/>
    <circle cx="72" cy="44" r="2" fill="white" opacity="0.85"/>
    <circle cx="76" cy="47" r="1" fill="white" opacity="0.5"/>

    <!-- ===== 眉毛 ===== -->
    <path d="M40 38 Q45 35 52 37" fill="none" stroke="#2C2C2C" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M68 37 Q75 35 80 38" fill="none" stroke="#2C2C2C" stroke-width="1.8" stroke-linecap="round"/>

    <!-- ===== 腮红 ===== -->
    <ellipse cx="38" cy="54" rx="7" ry="4" fill="url(#bl0)"/>
    <ellipse cx="82" cy="54" rx="7" ry="4" fill="url(#bl0)"/>
    <ellipse cx="38" cy="53" rx="5" ry="3" fill="#FF8AAA" opacity="0.3"/>
    <ellipse cx="82" cy="53" rx="5" ry="3" fill="#FF8AAA" opacity="0.3"/>

    <!-- ===== 嘴巴(兴奋大笑) ===== -->
    <path d="M52 56 Q56 63 60 64 Q64 63 68 56" fill="#CC6666" stroke="#BB5555" stroke-width="0.8"/>
    <path d="M53 57 Q57 61 60 62 Q63 61 67 57" fill="#E89090" opacity="0.4"/>
    <!-- 牙齿 -->
    <path d="M55 57 Q60 59 65 57" fill="white" opacity="0.6"/>
    <!-- 嘴角 -->
    <path d="M52 56 Q50 55 49 56" fill="none" stroke="#BB5555" stroke-width="0.8" stroke-linecap="round"/>
    <path d="M68 56 Q70 55 71 56" fill="none" stroke="#BB5555" stroke-width="0.8" stroke-linecap="round"/>

    <!-- ===== 鼻子 ===== -->
    <ellipse cx="60" cy="51" rx="1.8" ry="1.2" fill="#F0C0A0" opacity="0.5"/>
  `;
}
