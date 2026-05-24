// 雨天 - 黄色雨衣，雨伞，雨滴落下，水坑倒影
export function rainySVG() {
  return `
    <defs>
      <linearGradient id="rraincoat" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFE76B"/>
        <stop offset="50%" stop-color="#FFD93D"/>
        <stop offset="100%" stop-color="#E8C828"/>
      </linearGradient>
      <linearGradient id="rraincoatShine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#FFF5A0" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#FFD93D" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="rhood" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFE76B"/>
        <stop offset="100%" stop-color="#E8C828"/>
      </linearGradient>
      <radialGradient id="rumbrella" cx="0.5" cy="0.3">
        <stop offset="0%" stop-color="#F09080"/>
        <stop offset="100%" stop-color="#D46A5A"/>
      </radialGradient>
      <linearGradient id="rumbrellaStripe" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#E87B6B"/>
        <stop offset="50%" stop-color="#F5A090"/>
        <stop offset="100%" stop-color="#E87B6B"/>
      </linearGradient>
      <radialGradient id="rboot" cx="0.4" cy="0.3">
        <stop offset="0%" stop-color="#F09080"/>
        <stop offset="100%" stop-color="#C4584A"/>
      </radialGradient>
      <linearGradient id="rpuddle" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6BC5D8" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#4AA8BB" stop-opacity="0.08"/>
      </linearGradient>
      <linearGradient id="rbootSole" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#B04A3C"/>
        <stop offset="100%" stop-color="#8B3C30"/>
      </linearGradient>
    </defs>

    <!-- 雨滴 - SMIL animate -->
    <line x1="12" y1="5" x2="10" y2="16" stroke="#6BC5D8" stroke-width="1.8" stroke-linecap="round" opacity="0.5">
      <animate attributeName="y1" values="5;25;5" dur="1.3s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="16;36;16" dur="1.3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.3s" repeatCount="indefinite"/>
    </line>
    <line x1="30" y1="2" x2="28" y2="13" stroke="#6BC5D8" stroke-width="1.5" stroke-linecap="round" opacity="0.4">
      <animate attributeName="y1" values="2;22;2" dur="1.1s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="13;33;13" dur="1.1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.1s" repeatCount="indefinite"/>
    </line>
    <line x1="50" y1="8" x2="48" y2="19" stroke="#6BC5D8" stroke-width="1.5" stroke-linecap="round" opacity="0.35">
      <animate attributeName="y1" values="8;28;8" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="19;39;19" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.35;0.1;0.35" dur="1.5s" repeatCount="indefinite"/>
    </line>
    <line x1="78" y1="4" x2="76" y2="15" stroke="#6BC5D8" stroke-width="1.6" stroke-linecap="round" opacity="0.45">
      <animate attributeName="y1" values="4;24;4" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="15;35;15" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.45;0.12;0.45" dur="1.2s" repeatCount="indefinite"/>
    </line>
    <line x1="98" y1="6" x2="96" y2="17" stroke="#6BC5D8" stroke-width="1.4" stroke-linecap="round" opacity="0.35">
      <animate attributeName="y1" values="6;26;6" dur="1.6s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="17;37;17" dur="1.6s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.35;0.08;0.35" dur="1.6s" repeatCount="indefinite"/>
    </line>
    <line x1="108" y1="3" x2="106" y2="12" stroke="#6BC5D8" stroke-width="1.2" stroke-linecap="round" opacity="0.3">
      <animate attributeName="y1" values="3;20;3" dur="1.4s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="12;29;12" dur="1.4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.06;0.3" dur="1.4s" repeatCount="indefinite"/>
    </line>
    <line x1="40" y1="10" x2="38" y2="18" stroke="#8DD8E8" stroke-width="1" stroke-linecap="round" opacity="0.25">
      <animate attributeName="y1" values="10;27;10" dur="1.7s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="18;35;18" dur="1.7s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.25;0.05;0.25" dur="1.7s" repeatCount="indefinite"/>
    </line>
    <line x1="65" y1="7" x2="63" y2="16" stroke="#8DD8E8" stroke-width="1.1" stroke-linecap="round" opacity="0.3">
      <animate attributeName="y1" values="7;24;7" dur="1.35s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="16;33;16" dur="1.35s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.07;0.3" dur="1.35s" repeatCount="indefinite"/>
    </line>
    <!-- 雨滴 splash 效果 -->
    <ellipse cx="15" cy="116" rx="3" ry="1" fill="#6BC5D8" opacity="0">
      <animate attributeName="opacity" values="0;0.3;0" dur="1.3s" repeatCount="indefinite"/>
      <animate attributeName="rx" values="1;4;1" dur="1.3s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="85" cy="117" rx="3" ry="1" fill="#6BC5D8" opacity="0">
      <animate attributeName="opacity" values="0;0.25;0" dur="1.6s" repeatCount="indefinite"/>
      <animate attributeName="rx" values="1;3;1" dur="1.6s" repeatCount="indefinite"/>
    </ellipse>

    <!-- 水坑 -->
    <ellipse cx="60" cy="119" rx="42" ry="5.5" fill="url(#rpuddle)"/>
    <ellipse cx="60" cy="119" rx="30" ry="3" fill="#6BC5D8" opacity="0.06"/>
    <!-- 水坑倒影 -->
    <ellipse cx="55" cy="119" rx="8" ry="1.5" fill="#FFD93D" opacity="0.06"/>
    <ellipse cx="65" cy="119" rx="6" ry="1" fill="#E87B6B" opacity="0.05"/>

    <!-- 腿 + 雨靴 -->
    <path d="M46 104 L44 112 Q44 115 46 115 L55 115 Q57 115 57 112 L55 104 Z" fill="url(#s0)"/>
    <path d="M65 104 L65 112 Q65 115 67 115 L76 115 Q78 115 78 112 L76 104 Z" fill="url(#s0)"/>
    <!-- 左雨靴 -->
    <path d="M43 113 Q42 115 42 118 L42 122 Q42 124 44 124 L57 124 Q59 124 59 122 L59 118 Q59 115 57 113 Z" fill="url(#rboot)"/>
    <path d="M42 122 Q42 124 44 124 L57 124 Q59 124 59 122" fill="none" stroke="url(#rbootSole)" stroke-width="1.5"/>
    <!-- 靴子翻边 -->
    <path d="M43 113 Q44 111 47 112 L53 112 Q56 111 57 113" fill="none" stroke="#D46A5A" stroke-width="1.2"/>
    <path d="M44 114 L56 114" fill="none" stroke="#D46A5A" stroke-width="0.5" opacity="0.4"/>
    <!-- 靴子高光 -->
    <ellipse cx="48" cy="118" rx="3" ry="4" fill="white" opacity="0.1"/>
    <!-- 右雨靴 -->
    <path d="M63 113 Q62 115 62 118 L62 122 Q62 124 64 124 L77 124 Q79 124 79 122 L79 118 Q79 115 77 113 Z" fill="url(#rboot)"/>
    <path d="M62 122 Q62 124 64 124 L77 124 Q79 124 79 122" fill="none" stroke="url(#rbootSole)" stroke-width="1.5"/>
    <path d="M63 113 Q64 111 67 112 L73 112 Q76 111 77 113" fill="none" stroke="#D46A5A" stroke-width="1.2"/>
    <path d="M64 114 L76 114" fill="none" stroke="#D46A5A" stroke-width="0.5" opacity="0.4"/>
    <ellipse cx="68" cy="118" rx="3" ry="4" fill="white" opacity="0.1"/>

    <!-- 身体(黄色雨衣) -->
    <path d="M38 78 Q36 76 33 80 L28 108 L92 108 L87 80 Q84 76 82 78 L82 108 L38 108 Z" fill="url(#rraincoat)"/>
    <!-- 雨衣光泽 -->
    <path d="M40 80 Q42 76 44 80 L44 108" stroke="url(#rraincoatShine)" stroke-width="5"/>
    <path d="M80 80 Q78 76 76 80 L76 108" stroke="url(#rraincoatShine)" stroke-width="5"/>
    <!-- 雨衣门襟 -->
    <path d="M56 78 L54 108" stroke="#E8C828" stroke-width="1"/>
    <path d="M64 78 L66 108" stroke="#E8C828" stroke-width="1"/>
    <!-- 雨衣扣子 -->
    <circle cx="60" cy="84" r="2.2" fill="#E8C828" stroke="#D4B420" stroke-width="0.5"/>
    <circle cx="60" cy="94" r="2.2" fill="#E8C828" stroke="#D4B420" stroke-width="0.5"/>
    <circle cx="60" cy="104" r="2.2" fill="#E8C828" stroke="#D4B420" stroke-width="0.5"/>
    <!-- 雨衣口袋 -->
    <path d="M36 94 L42 94 L42 104 L36 104 Z" fill="none" stroke="#E8C828" stroke-width="0.8" rx="1"/>
    <path d="M84 94 L78 94 L78 104 L84 104 Z" fill="none" stroke="#E8C828" stroke-width="0.8"/>
    <!-- 雨衣腰部褶皱 -->
    <path d="M40 98 Q50 100 48 102" fill="none" stroke="#D4B420" stroke-width="0.6" opacity="0.5"/>
    <path d="M80 98 Q70 100 72 102" fill="none" stroke="#D4B420" stroke-width="0.6" opacity="0.5"/>

    <!-- 雨衣帽子(兜帽) -->
    <path d="M34 66 Q36 50 60 48 Q84 50 86 66 L82 70 Q60 76 38 70 Z" fill="url(#rhood)"/>
    <!-- 帽子边缘 -->
    <path d="M34 66 Q60 74 86 66" fill="none" stroke="#E8C828" stroke-width="1.2"/>
    <path d="M36 68 Q60 75 84 68" fill="none" stroke="#D4B420" stroke-width="0.5" opacity="0.5"/>
    <!-- 帽子高光 -->
    <path d="M46 52 Q58 48 70 52" fill="none" stroke="#FFF5A0" stroke-width="1.5" opacity="0.3"/>
    <!-- 帽子褶皱 -->
    <path d="M38 58 Q36 52 42 54" fill="none" stroke="#D4B420" stroke-width="0.6" opacity="0.4"/>
    <path d="M82 58 Q84 52 78 54" fill="none" stroke="#D4B420" stroke-width="0.6" opacity="0.4"/>

    <!-- 脖子 -->
    <rect x="55" y="64" width="10" height="14" rx="5" fill="url(#s0)"/>

    <!-- 左手臂撑伞 -->
    <path d="M38 82 Q24 74 16 64" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="15" cy="62" r="5.5" fill="url(#ss0)"/>

    <!-- 雨伞 -->
    <line x1="14" y1="58" x2="14" y2="22" stroke="#8B6C5C" stroke-width="2.8" stroke-linecap="round"/>
    <!-- 伞面 -->
    <path d="M-4 26 Q4 4 14 6 Q24 4 32 26" fill="url(#rumbrella)"/>
    <!-- 伞面条纹 -->
    <path d="M2 24 Q8 10 14 8 Q20 10 26 24" fill="url(#rumbrellaStripe)" opacity="0.3"/>
    <path d="M-2 25 Q6 6 14 6" fill="none" stroke="#F5A090" stroke-width="0.6" opacity="0.4"/>
    <path d="M30 25 Q22 6 14 6" fill="none" stroke="#F5A090" stroke-width="0.6" opacity="0.4"/>
    <!-- 伞面底部弧线 -->
    <path d="M-4 26 Q14 34 32 26" fill="none" stroke="#D46A5A" stroke-width="1"/>
    <!-- 伞面高光 -->
    <path d="M6 22 Q10 12 14 10" fill="none" stroke="white" stroke-width="1.5" opacity="0.15"/>
    <!-- 伞尖 -->
    <circle cx="14" cy="5.5" r="2.5" fill="#D46A5A"/>
    <circle cx="13.5" cy="5" r="1" fill="#E88A7A" opacity="0.5"/>
    <!-- 伞骨 -->
    <line x1="14" y1="26" x2="-4" y2="26" stroke="#B88B6C" stroke-width="0.8"/>
    <line x1="14" y1="26" x2="32" y2="26" stroke="#B88B6C" stroke-width="0.8"/>
    <!-- 伞柄 -->
    <path d="M14 56 Q14 60 10 60 Q6 60 6 56" fill="none" stroke="#8B6C5C" stroke-width="2.5" stroke-linecap="round"/>

    <!-- 右手臂 -->
    <path d="M82 82 Q92 86 96 96" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="97" cy="97" r="5.5" fill="url(#ss0)"/>

    <!-- 头 -->
    <circle cx="60" cy="44" r="28" fill="url(#ss0)"/>
    <!-- 脸颊光泽 -->
    <ellipse cx="50" cy="52" rx="5" ry="3" fill="white" opacity="0.12"/>
    <ellipse cx="70" cy="52" rx="5" ry="3" fill="white" opacity="0.12"/>

    <!-- 头发(兜帽下露出) -->
    <path d="M38 52 Q40 46 44 50 Q48 44 52 50 Q56 44 60 50 Q64 44 68 50 Q72 44 76 50 Q80 46 82 52 L80 56 Q76 52 72 56 Q68 52 64 56 Q60 52 56 56 Q52 52 48 56 Q44 52 40 56 Z" fill="url(#h0)"/>
    <!-- 头发高光 -->
    <path d="M46 48 Q50 44 56 48" fill="none" stroke="#555" stroke-width="0.8" opacity="0.35"/>
    <path d="M68 48 Q72 44 76 48" fill="none" stroke="#555" stroke-width="0.8" opacity="0.35"/>
    <!-- 额前碎发 -->
    <path d="M42 52 Q40 48 44 50" fill="#2C2C2C"/>
    <path d="M78 52 Q80 48 76 50" fill="#2C2C2C"/>

    <!-- BIG DETAILED EYES - 左眼 -->
    <ellipse cx="46" cy="44" rx="7" ry="8" fill="white"/>
    <ellipse cx="47" cy="45" rx="5.5" ry="6.5" fill="#2C2C2C"/>
    <ellipse cx="47" cy="45" rx="4.5" ry="5.5" fill="#4A3728"/>
    <circle cx="44" cy="42" r="2.5" fill="white"/>
    <circle cx="50" cy="49" r="1.2" fill="white" opacity="0.6"/>
    <ellipse cx="47" cy="50" rx="2" ry="1" fill="#555" opacity="0.3"/>
    <!-- 上眼线 -->
    <path d="M39 42 Q43 37 47 38 Q51 37 55 42" fill="none" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>
    <!-- 睫毛 -->
    <path d="M40 39 Q39 37 40 36" fill="none" stroke="#2C2C2C" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M43 37 Q42 35 44 34" fill="none" stroke="#2C2C2C" stroke-width="1.1" stroke-linecap="round"/>

    <!-- BIG DETAILED EYES - 右眼 -->
    <ellipse cx="74" cy="44" rx="7" ry="8" fill="white"/>
    <ellipse cx="73" cy="45" rx="5.5" ry="6.5" fill="#2C2C2C"/>
    <ellipse cx="73" cy="45" rx="4.5" ry="5.5" fill="#4A3728"/>
    <circle cx="70" cy="42" r="2.5" fill="white"/>
    <circle cx="76" cy="49" r="1.2" fill="white" opacity="0.6"/>
    <ellipse cx="73" cy="50" rx="2" ry="1" fill="#555" opacity="0.3"/>
    <!-- 上眼线 -->
    <path d="M67 42 Q71 37 75 38 Q79 37 83 42" fill="none" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>
    <!-- 睫毛 -->
    <path d="M80 39 Q81 37 80 36" fill="none" stroke="#2C2C2C" stroke-width="1.1" stroke-linecap="round"/>
    <path d="M77 37 Q78 35 76 34" fill="none" stroke="#2C2C2C" stroke-width="1.1" stroke-linecap="round"/>

    <!-- 腮红 -->
    <ellipse cx="40" cy="53" rx="7" ry="4" fill="url(#bl0)"/>
    <ellipse cx="80" cy="53" rx="7" ry="4" fill="url(#bl0)"/>

    <!-- 满足微笑嘴巴 -->
    <path d="M54 56 Q57 59 60 60 Q63 59 66 56" fill="none" stroke="#CC6666" stroke-width="1.5" stroke-linecap="round"/>
    <!-- 嘴角小弧线 -->
    <path d="M53 55 Q54 56 54 56" fill="none" stroke="#CC6666" stroke-width="0.8" stroke-linecap="round"/>
    <path d="M67 55 Q66 56 66 56" fill="none" stroke="#CC6666" stroke-width="0.8" stroke-linecap="round"/>
  `;
}
