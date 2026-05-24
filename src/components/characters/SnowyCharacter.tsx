// 雪天 - 冬衣围巾耳罩，雪花飘落，呼气白雾 - 详细Q版风格
export function snowySVG() {
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
        <stop offset="0%" stop-color="#FF8AAA" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#FF8AAA" stop-opacity="0"/>
      </radialGradient>
      <!-- 黑发渐变 -->
      <linearGradient id="h0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3A3A3A"/>
        <stop offset="100%" stop-color="#1A1A1A"/>
      </linearGradient>
      <!-- 外套渐变 -->
      <linearGradient id="coat0" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7BA4E0"/>
        <stop offset="50%" stop-color="#5C8AD4"/>
        <stop offset="100%" stop-color="#4A78C0"/>
      </linearGradient>
      <!-- 围巾渐变 -->
      <linearGradient id="scarf0" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F09080"/>
        <stop offset="100%" stop-color="#D86858"/>
      </linearGradient>
      <!-- 靴子渐变 -->
      <linearGradient id="boot0" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6B5A4A"/>
        <stop offset="100%" stop-color="#4A3A2A"/>
      </linearGradient>
      <!-- 眼睛高光 -->
      <radialGradient id="eye-shine" cx="35%" cy="30%" r="50%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- ===== 雪花飘落 ===== -->
    <circle cx="15" cy="10" r="3" fill="white" opacity="0.8">
      <animate attributeName="cy" values="10;115;10" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="15;22;15" dur="5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="15" cy="10" r="1.5" fill="white" opacity="0.5">
      <animate attributeName="cy" values="10;115;10" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="12;15;12" dur="5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="45" cy="5" r="2.5" fill="white" opacity="0.7">
      <animate attributeName="cy" values="5;112;5" dur="4.2s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="45;40;45" dur="4.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="75" cy="8" r="3" fill="white" opacity="0.75">
      <animate attributeName="cy" values="8;118;8" dur="4.8s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="75;80;75" dur="4.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="75" cy="8" r="1.2" fill="white" opacity="0.4">
      <animate attributeName="cy" values="8;118;8" dur="4.8s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="78;73;78" dur="4.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="105" cy="3" r="2" fill="white" opacity="0.6">
      <animate attributeName="cy" values="3;110;3" dur="4.5s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="105;100;105" dur="4.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="30" cy="18" r="1.8" fill="white" opacity="0.5">
      <animate attributeName="cy" values="18;116;18" dur="3.8s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="30;34;30" dur="3.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="90" cy="12" r="2.2" fill="white" opacity="0.6">
      <animate attributeName="cy" values="12;114;12" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="90;86;90" dur="4s" repeatCount="indefinite"/>
    </circle>

    <!-- ===== 雪地 ===== -->
    <ellipse cx="60" cy="119" rx="55" ry="8" fill="white" opacity="0.9"/>
    <ellipse cx="60" cy="119" rx="42" ry="5" fill="#F0F5FF" opacity="0.5"/>
    <ellipse cx="35" cy="118" rx="18" ry="4" fill="white" opacity="0.4"/>
    <ellipse cx="85" cy="118" rx="15" ry="3" fill="white" opacity="0.4"/>

    <!-- ===== 身体(厚外套) ===== -->
    <path d="M34 78 Q32 76 28 80 L24 108 L96 108 L92 80 Q88 76 86 78 L86 108 L34 108 Z" fill="url(#coat0)" stroke="#4A78C0" stroke-width="0.5"/>
    <!-- 外套高光 -->
    <path d="M38 82 Q40 80 42 82 L40 104 L34 104 Z" fill="white" opacity="0.12"/>
    <path d="M78 82 Q80 80 82 82 L86 104 L80 104 Z" fill="white" opacity="0.12"/>
    <!-- 外套缝线 -->
    <path d="M56 78 L54 108" stroke="#4A78C0" stroke-width="0.8" opacity="0.5"/>
    <path d="M64 78 L66 108" stroke="#4A78C0" stroke-width="0.8" opacity="0.5"/>
    <!-- 外套下摆 -->
    <path d="M24 106 Q60 102 96 106" fill="none" stroke="#4A78C0" stroke-width="1"/>

    <!-- 外套拉链 -->
    <line x1="60" y1="80" x2="60" y2="106" stroke="#4A78C0" stroke-width="1.5" stroke-dasharray="2,3"/>
    <rect x="58" y="82" width="4" height="5" rx="1.5" fill="#5A8AD0" stroke="#4A78C0" stroke-width="0.5"/>
    <circle cx="60" cy="90" r="2.2" fill="#5A8AD0" stroke="#4A78C0" stroke-width="0.5"/>
    <circle cx="60" cy="98" r="2.2" fill="#5A8AD0" stroke="#4A78C0" stroke-width="0.5"/>
    <!-- 口袋 -->
    <path d="M36 96 L36 104 Q36 106 38 106 L52 106 Q54 106 54 104 L54 96 Z" fill="none" stroke="#4A78C0" stroke-width="0.8" opacity="0.5"/>
    <path d="M66 96 L66 104 Q66 106 68 106 L84 106 Q86 106 86 104 L86 96 Z" fill="none" stroke="#4A78C0" stroke-width="0.8" opacity="0.5"/>

    <!-- ===== 围巾 ===== -->
    <path d="M36 66 Q60 78 84 66" fill="url(#scarf0)" stroke="#D06050" stroke-width="0.5"/>
    <path d="M36 66 Q60 74 84 66" fill="none" stroke="#F09080" stroke-width="0.8" opacity="0.4"/>
    <!-- 围巾垂下的部分 -->
    <path d="M76 68 Q80 80 76 96" fill="none" stroke="url(#scarf0)" stroke-width="9" stroke-linecap="round"/>
    <path d="M76 68 Q80 80 76 96" fill="none" stroke="#F09080" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
    <!-- 围巾条纹 -->
    <path d="M72 74 Q76 76 78 74" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
    <path d="M73 82 Q77 84 79 82" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
    <path d="M74 90 Q78 92 80 90" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>

    <!-- ===== 脖子 ===== -->
    <rect x="55" y="66" width="10" height="14" rx="5" fill="url(#ss0)"/>

    <!-- ===== 左手臂(戴手套) ===== -->
    <path d="M34 82 Q20 86 16 98" fill="none" stroke="#FFD4A8" stroke-width="11" stroke-linecap="round"/>
    <path d="M34 82 Q20 86 16 98" fill="none" stroke="#FFE8D0" stroke-width="7" stroke-linecap="round" opacity="0.3"/>
    <!-- 左手套 -->
    <ellipse cx="15" cy="99" rx="7" ry="6.5" fill="#D86050"/>
    <ellipse cx="15" cy="99" rx="7" ry="6.5" fill="url(#scarf0)"/>
    <ellipse cx="12" cy="96" rx="3" ry="2" fill="#D86050" transform="rotate(-20 12 96)"/>
    <path d="M15 100 Q15 103 14 105" fill="none" stroke="#C05040" stroke-width="1" stroke-linecap="round"/>
    <path d="M18 100 Q18 103 19 104" fill="none" stroke="#C05040" stroke-width="1" stroke-linecap="round"/>

    <!-- ===== 右手臂(戴手套) ===== -->
    <path d="M86 82 Q100 86 104 98" fill="none" stroke="#FFD4A8" stroke-width="11" stroke-linecap="round"/>
    <path d="M86 82 Q100 86 104 98" fill="none" stroke="#FFE8D0" stroke-width="7" stroke-linecap="round" opacity="0.3"/>
    <!-- 右手套 -->
    <ellipse cx="105" cy="99" rx="7" ry="6.5" fill="url(#scarf0)"/>
    <ellipse cx="108" cy="96" rx="3" ry="2" fill="#D86050" transform="rotate(20 108 96)"/>
    <path d="M105 100 Q105 103 104 105" fill="none" stroke="#C05040" stroke-width="1" stroke-linecap="round"/>
    <path d="M102 100 Q102 103 101 104" fill="none" stroke="#C05040" stroke-width="1" stroke-linecap="round"/>

    <!-- ===== 腿 ===== -->
    <path d="M46 106 L44 118 Q44 120 46 120 L54 120 Q56 120 56 118 L56 106 Z" fill="url(#s0)"/>
    <path d="M64 106 L64 118 Q64 120 66 120 L74 120 Q76 120 76 118 L76 106 Z" fill="url(#s0)"/>

    <!-- ===== 雪地靴 ===== -->
    <path d="M42 118 L40 124 Q40 126 44 126 L56 126 Q60 126 60 124 L58 118 Z" fill="url(#boot0)"/>
    <path d="M42 118 L40 124 Q40 126 44 126 L56 126 Q60 126 60 124 L58 118 Z" fill="white" opacity="0.1"/>
    <path d="M42 122 L56 122" stroke="#5A4A3A" stroke-width="1.2"/>
    <path d="M44 124 L54 124" stroke="#5A4A3A" stroke-width="0.8" opacity="0.5"/>
    <ellipse cx="44" cy="125" rx="2" ry="1" fill="#7A6A5A" opacity="0.4"/>

    <path d="M62 118 L60 124 Q60 126 64 126 L76 126 Q80 126 80 124 L78 118 Z" fill="url(#boot0)"/>
    <path d="M62 118 L60 124 Q60 126 64 126 L76 126 Q80 126 80 124 L78 118 Z" fill="white" opacity="0.1"/>
    <path d="M62 122 L76 122" stroke="#5A4A3A" stroke-width="1.2"/>
    <path d="M64 124 L74 124" stroke="#5A4A3A" stroke-width="0.8" opacity="0.5"/>
    <ellipse cx="64" cy="125" rx="2" ry="1" fill="#7A6A5A" opacity="0.4"/>

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

    <!-- ===== 耳罩 ===== -->
    <!-- 左耳罩 -->
    <rect x="28" y="38" width="14" height="18" rx="7" fill="#E87B6B" stroke="#D06050" stroke-width="0.5"/>
    <rect x="30" y="40" width="10" height="14" rx="5" fill="#F09080" opacity="0.5"/>
    <ellipse cx="35" cy="44" rx="3" ry="2" fill="white" opacity="0.2"/>
    <!-- 右耳罩 -->
    <rect x="78" y="38" width="14" height="18" rx="7" fill="#E87B6B" stroke="#D06050" stroke-width="0.5"/>
    <rect x="80" y="40" width="10" height="14" rx="5" fill="#F09080" opacity="0.5"/>
    <ellipse cx="85" cy="44" rx="3" ry="2" fill="white" opacity="0.2"/>
    <!-- 耳罩连接带 -->
    <path d="M35 36 Q60 24 85 36" fill="none" stroke="#E87B6B" stroke-width="4" stroke-linecap="round"/>
    <path d="M35 36 Q60 26 85 36" fill="none" stroke="#F09080" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>

    <!-- ===== 眉毛 ===== -->
    <path d="M43 38 Q48 35 54 37" fill="none" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M66 37 Q72 35 77 38" fill="none" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>

    <!-- ===== 大眼睛(快乐眯眼) ===== -->
    <!-- 左眼 - 弯月形快乐眼 -->
    <path d="M42 44 Q47 38 53 44" fill="#2C2C2C" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M42 44 Q47 40 53 44" fill="white" opacity="0.15"/>
    <!-- 左眼睫毛 -->
    <path d="M43 43 L41 41" stroke="#2C2C2C" stroke-width="1" stroke-linecap="round"/>
    <path d="M52 43 L54 41" stroke="#2C2C2C" stroke-width="1" stroke-linecap="round"/>

    <!-- 右眼 - 弯月形快乐眼 -->
    <path d="M67 44 Q72 38 78 44" fill="#2C2C2C" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M67 44 Q72 40 78 44" fill="white" opacity="0.15"/>
    <!-- 右眼睫毛 -->
    <path d="M68 43 L66 41" stroke="#2C2C2C" stroke-width="1" stroke-linecap="round"/>
    <path d="M77 43 L79 41" stroke="#2C2C2C" stroke-width="1" stroke-linecap="round"/>

    <!-- ===== 腮红(冬天额外红润) ===== -->
    <ellipse cx="38" cy="52" rx="9" ry="5" fill="url(#bl0)"/>
    <ellipse cx="82" cy="52" rx="9" ry="5" fill="url(#bl0)"/>
    <ellipse cx="38" cy="51" rx="6" ry="3.5" fill="#FF8AAA" opacity="0.4"/>
    <ellipse cx="82" cy="51" rx="6" ry="3.5" fill="#FF8AAA" opacity="0.4"/>

    <!-- ===== 嘴巴(开心微笑) ===== -->
    <path d="M54 55 Q57 60 60 61 Q63 60 66 55" fill="#CC6666" stroke="#BB5555" stroke-width="0.8" stroke-linecap="round"/>
    <path d="M55 56 Q60 58 65 56" fill="none" stroke="#E88888" stroke-width="0.6" opacity="0.5"/>
    <!-- 酒窝 -->
    <circle cx="52" cy="56" r="1.2" fill="none" stroke="#CC6666" stroke-width="0.5" opacity="0.3"/>
    <circle cx="68" cy="56" r="1.2" fill="none" stroke="#CC6666" stroke-width="0.5" opacity="0.3"/>

    <!-- ===== 鼻子 ===== -->
    <ellipse cx="60" cy="50" rx="1.5" ry="1" fill="#F0C0A0" opacity="0.6"/>

    <!-- ===== 呼气白雾 ===== -->
    <g opacity="0.35">
      <ellipse cx="55" cy="58" rx="6" ry="3.5" fill="white">
        <animate attributeName="cy" values="58;48;38" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.35;0.15;0" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="rx" values="6;8;10" dur="2.5s" repeatCount="indefinite"/>
      </ellipse>
    </g>
    <g opacity="0.3">
      <ellipse cx="65" cy="56" rx="5" ry="3" fill="white">
        <animate attributeName="cy" values="56;46;36" dur="2.8s" repeatCount="indefinite" begin="0.6s"/>
        <animate attributeName="opacity" values="0.3;0.12;0" dur="2.8s" repeatCount="indefinite" begin="0.6s"/>
        <animate attributeName="rx" values="5;7;9" dur="2.8s" repeatCount="indefinite" begin="0.6s"/>
      </ellipse>
    </g>
    <g opacity="0.25">
      <ellipse cx="60" cy="60" rx="4" ry="2.5" fill="white">
        <animate attributeName="cy" values="60;50;40" dur="2.2s" repeatCount="indefinite" begin="1.2s"/>
        <animate attributeName="opacity" values="0.25;0.1;0" dur="2.2s" repeatCount="indefinite" begin="1.2s"/>
        <animate attributeName="rx" values="4;6;8" dur="2.2s" repeatCount="indefinite" begin="1.2s"/>
      </ellipse>
    </g>
  `;
}
