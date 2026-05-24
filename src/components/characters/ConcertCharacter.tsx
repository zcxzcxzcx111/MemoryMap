// 演唱会 - 耳机挂脖，麦克风，音符飘动，舞台灯光
export function concertSVG() {
  return `
    <defs>
      <linearGradient id="cjacket" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A4A5C"/>
        <stop offset="50%" stop-color="#2C2C3C"/>
        <stop offset="100%" stop-color="#1A1A2C"/>
      </linearGradient>
      <linearGradient id="cjacketShine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#5A5A6C" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#2C2C3C" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="cmic" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#888"/>
        <stop offset="100%" stop-color="#444"/>
      </linearGradient>
      <radialGradient id="cmicBall" cx="0.4" cy="0.35">
        <stop offset="0%" stop-color="#999"/>
        <stop offset="100%" stop-color="#333"/>
      </radialGradient>
      <radialGradient id="cheadphone" cx="0.4" cy="0.3">
        <stop offset="0%" stop-color="#666"/>
        <stop offset="100%" stop-color="#222"/>
      </radialGradient>
      <radialGradient id="cspotPink" cx="0.5" cy="0.5">
        <stop offset="0%" stop-color="#FF6B9D" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#FF6B9D" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="cspotBlue" cx="0.5" cy="0.5">
        <stop offset="0%" stop-color="#6B9DFF" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6B9DFF" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="cjean" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4A6FA5"/>
        <stop offset="100%" stop-color="#34527A"/>
      </linearGradient>
      <radialGradient id="cshoe" cx="0.4" cy="0.3">
        <stop offset="0%" stop-color="#333"/>
        <stop offset="100%" stop-color="#111"/>
      </radialGradient>
    </defs>

    <!-- 舞台灯光 -->
    <circle cx="22" cy="8" r="45" fill="url(#cspotPink)"/>
    <circle cx="98" cy="8" r="45" fill="url(#cspotBlue)"/>
    <circle cx="60" cy="5" r="30" fill="#FFD93D" opacity="0.06"/>

    <!-- 腿 + 牛仔裤 -->
    <path d="M46 105 L44 115 Q44 118 46 118 L55 118 Q57 118 57 115 L55 105 Z" fill="url(#cjean)"/>
    <path d="M65 105 L65 115 Q65 118 67 118 L76 118 Q78 118 78 115 L76 105 Z" fill="url(#cjean)"/>
    <!-- 裤子缝线 -->
    <line x1="50" y1="105" x2="49" y2="117" stroke="#5A82B5" stroke-width="0.5" opacity="0.5"/>
    <line x1="71" y1="105" x2="72" y2="117" stroke="#5A82B5" stroke-width="0.5" opacity="0.5"/>
    <!-- 鞋子 -->
    <path d="M43 116 Q42 118 43 120 L50 120 Q53 120 54 118 L55 116 Z" fill="url(#cshoe)"/>
    <path d="M65 116 Q64 118 65 120 L72 120 Q75 120 76 118 L77 116 Z" fill="url(#cshoe)"/>
    <ellipse cx="48" cy="119" rx="4" ry="1" fill="#444" opacity="0.4"/>
    <ellipse cx="71" cy="119" rx="4" ry="1" fill="#444" opacity="0.4"/>
    <!-- 鞋底 -->
    <path d="M42 120 Q42 122 44 122 L52 122 Q54 122 54 120" fill="none" stroke="#555" stroke-width="0.8"/>
    <path d="M64 120 Q64 122 66 122 L74 122 Q76 122 76 120" fill="none" stroke="#555" stroke-width="0.8"/>

    <!-- 身体(酷炫皮夹克) -->
    <path d="M40 78 Q38 76 35 80 L32 108 L88 108 L85 80 Q82 76 80 78 L80 108 L40 108 Z" fill="url(#cjacket)"/>
    <!-- 夹克光泽 -->
    <path d="M42 80 L44 108" stroke="url(#cjacketShine)" stroke-width="6"/>
    <path d="M78 80 L76 108" stroke="url(#cjacketShine)" stroke-width="6"/>
    <!-- 夹克翻领 -->
    <path d="M50 78 L54 86 L60 80 L66 86 L70 78" fill="none" stroke="#555" stroke-width="1.2"/>
    <!-- 拉链 -->
    <line x1="60" y1="78" x2="60" y2="108" stroke="#999" stroke-width="1.5"/>
    <circle cx="60" cy="80" r="2" fill="#BBB"/>
    <rect x="59" y="82" width="2" height="3" rx="1" fill="#AAA"/>
    <!-- 口袋 -->
    <path d="M40 96 L44 96 L44 104 L40 104 Z" fill="none" stroke="#555" stroke-width="0.7"/>
    <path d="M80 96 L76 96 L76 104 L80 104 Z" fill="none" stroke="#555" stroke-width="0.7"/>
    <!-- 夹克衣领阴影 -->
    <path d="M48 78 Q60 84 72 78" fill="none" stroke="#3D3D5C" stroke-width="0.8"/>

    <!-- 脖子 -->
    <rect x="55" y="66" width="10" height="14" rx="5" fill="url(#s0)"/>
    <!-- 锁骨 -->
    <path d="M52 78 Q60 82 68 78" fill="none" stroke="#E8B88A" stroke-width="0.6" opacity="0.4"/>

    <!-- 耳机挂脖子 -->
    <path d="M38 60 Q38 48 46 44" fill="none" stroke="#333" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M82 60 Q82 48 74 44" fill="none" stroke="#333" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="35" cy="58" rx="6" ry="9" fill="url(#cheadphone)"/>
    <ellipse cx="85" cy="58" rx="6" ry="9" fill="url(#cheadphone)"/>
    <ellipse cx="35" cy="58" rx="4" ry="6" fill="#555"/>
    <ellipse cx="85" cy="58" rx="4" ry="6" fill="#555"/>
    <ellipse cx="34" cy="56" rx="1.5" ry="2" fill="#777" opacity="0.5"/>
    <ellipse cx="84" cy="56" rx="1.5" ry="2" fill="#777" opacity="0.5"/>

    <!-- 左手臂举麦克风 -->
    <path d="M38 82 Q26 72 18 56" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="17" cy="54" r="5.5" fill="url(#ss0)"/>
    <!-- 手指握麦 -->
    <path d="M15 52 Q13 50 14 48" fill="none" stroke="#E8B88A" stroke-width="1.5" stroke-linecap="round"/>

    <!-- 麦克风 -->
    <rect x="12" y="38" width="7" height="16" rx="2" fill="url(#cmic)"/>
    <circle cx="15.5" cy="35" r="6" fill="url(#cmicBall)"/>
    <circle cx="15.5" cy="35" r="4" fill="#555"/>
    <!-- 麦克风网罩纹理 -->
    <path d="M12 33 Q15.5 31 19 33" fill="none" stroke="#777" stroke-width="0.5"/>
    <path d="M12 35 Q15.5 33 19 35" fill="none" stroke="#777" stroke-width="0.5"/>
    <path d="M12 37 Q15.5 35 19 37" fill="none" stroke="#777" stroke-width="0.5"/>
    <!-- 麦克风高光 -->
    <ellipse cx="14" cy="33" rx="1.5" ry="2" fill="white" opacity="0.25"/>

    <!-- 右手臂挥动 -->
    <path d="M82 82 Q94 68 102 52" fill="none" stroke="url(#s0)" stroke-width="10" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="0 82 82;-8 82 82;8 82 82;0 82 82" dur="1.2s" repeatCount="indefinite"/>
    </path>
    <circle cx="103" cy="50" r="5.5" fill="url(#ss0)">
      <animateTransform attributeName="transform" type="rotate" values="0 82 82;-8 82 82;8 82 82;0 82 82" dur="1.2s" repeatCount="indefinite"/>
    </circle>

    <!-- 头 -->
    <circle cx="60" cy="44" r="28" fill="url(#ss0)"/>
    <!-- 脸颊光泽 -->
    <ellipse cx="50" cy="52" rx="5" ry="3" fill="white" opacity="0.12"/>
    <ellipse cx="70" cy="52" rx="5" ry="3" fill="white" opacity="0.12"/>

    <!-- 头发(蓬松酷炫) - 底层 -->
    <path d="M32 38 Q34 10 60 8 Q86 10 88 38 L86 42 Q78 36 72 42 Q66 36 60 42 Q54 36 48 42 Q42 36 34 42 Z" fill="url(#h0)"/>
    <!-- 头发层次 -->
    <path d="M32 38 Q30 28 34 18 Q38 10 44 16 Q40 24 36 38 Z" fill="#3A3A3A"/>
    <path d="M88 38 Q90 28 86 18 Q82 10 76 16 Q80 24 84 38 Z" fill="#3A3A3A"/>
    <!-- 头发高光 -->
    <path d="M48 14 Q56 10 64 14 Q58 12 52 16 Z" fill="#555" opacity="0.4"/>
    <path d="M40 22 Q38 16 42 14" fill="none" stroke="#555" stroke-width="1" opacity="0.3"/>
    <path d="M76 20 Q80 14 78 12" fill="none" stroke="#555" stroke-width="1" opacity="0.3"/>
    <!-- 凌乱发梢 -->
    <path d="M34 38 Q30 32 36 34" fill="#2C2C2C"/>
    <path d="M86 38 Q90 32 84 34" fill="#2C2C2C"/>
    <path d="M38 12 Q34 6 42 10" fill="#2C2C2C"/>
    <path d="M82 12 Q86 6 78 10" fill="#2C2C2C"/>

    <!-- BIG DETAILED EYES - 左眼 -->
    <ellipse cx="46" cy="44" rx="7.5" ry="8.5" fill="white"/>
    <ellipse cx="47" cy="45" rx="5.5" ry="6.5" fill="#2C2C2C"/>
    <ellipse cx="47" cy="45" rx="4.5" ry="5.5" fill="#3D2B1F"/>
    <circle cx="44" cy="42" r="2.8" fill="white"/>
    <circle cx="50" cy="49" r="1.3" fill="white" opacity="0.6"/>
    <ellipse cx="47" cy="50" rx="2.2" ry="1" fill="#555" opacity="0.25"/>
    <!-- 睫毛 -->
    <path d="M40 40 Q39 38 40 37" fill="none" stroke="#2C2C2C" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M42 38 Q41 36 43 35" fill="none" stroke="#2C2C2C" stroke-width="1.2" stroke-linecap="round"/>
    <!-- 上眼线 -->
    <path d="M39 42 Q43 37 47 38 Q51 37 55 42" fill="none" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>

    <!-- BIG DETAILED EYES - 右眼 -->
    <ellipse cx="74" cy="44" rx="7.5" ry="8.5" fill="white"/>
    <ellipse cx="73" cy="45" rx="5.5" ry="6.5" fill="#2C2C2C"/>
    <ellipse cx="73" cy="45" rx="4.5" ry="5.5" fill="#3D2B1F"/>
    <circle cx="70" cy="42" r="2.8" fill="white"/>
    <circle cx="76" cy="49" r="1.3" fill="white" opacity="0.6"/>
    <ellipse cx="73" cy="50" rx="2.2" ry="1" fill="#555" opacity="0.25"/>
    <!-- 睫毛 -->
    <path d="M80 40 Q81 38 80 37" fill="none" stroke="#2C2C2C" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M78 38 Q79 36 77 35" fill="none" stroke="#2C2C2C" stroke-width="1.2" stroke-linecap="round"/>
    <!-- 上眼线 -->
    <path d="M67 42 Q71 37 75 38 Q79 37 83 42" fill="none" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"/>

    <!-- 腮红 -->
    <ellipse cx="40" cy="53" rx="7" ry="4" fill="url(#bl0)"/>
    <ellipse cx="80" cy="53" rx="7" ry="4" fill="url(#bl0)"/>

    <!-- 兴奋大笑嘴巴 -->
    <path d="M50 56 Q55 62 60 63 Q65 62 70 56" fill="#CC5555" stroke="#CC6666" stroke-width="1" stroke-linecap="round"/>
    <path d="M52 57 Q60 61 68 57" fill="white" opacity="0.7"/>
    <!-- 舌头 -->
    <path d="M56 61 Q60 65 64 61" fill="#E88888" opacity="0.6"/>

    <!-- 音符飘动 -->
    <g style="animation:sparkle 2.5s ease-in-out infinite">
      <text x="90" y="42" font-size="16" fill="#FF6B9D" opacity="0.85">&#9835;</text>
      <circle cx="94" cy="38" r="1.5" fill="#FF6B9D" opacity="0.4"/>
    </g>
    <g style="animation:sparkle 2.5s ease-in-out infinite;animation-delay:0.8s">
      <text x="102" y="32" font-size="11" fill="#6B9DFF" opacity="0.75">&#9834;</text>
      <circle cx="105" cy="29" r="1" fill="#6B9DFF" opacity="0.3"/>
    </g>
    <g style="animation:sparkle 2.5s ease-in-out infinite;animation-delay:1.5s">
      <text x="28" y="36" font-size="13" fill="#FFD93D" opacity="0.75">&#9835;</text>
      <circle cx="32" cy="32" r="1.2" fill="#FFD93D" opacity="0.3"/>
    </g>
    <g style="animation:sparkle 2.5s ease-in-out infinite;animation-delay:0.4s">
      <text x="106" y="44" font-size="9" fill="#FF9ED2" opacity="0.6">&#9834;</text>
    </g>
    <!-- 星星闪烁 -->
    <g style="animation:sparkle 1.8s ease-in-out infinite;animation-delay:0.2s">
      <polygon points="98,22 99,25 102,25 100,27 101,30 98,28 95,30 96,27 94,25 97,25" fill="#FFD93D" opacity="0.5" transform="scale(0.6) translate(60,10)"/>
    </g>
    <g style="animation:sparkle 1.8s ease-in-out infinite;animation-delay:1.1s">
      <polygon points="98,22 99,25 102,25 100,27 101,30 98,28 95,30 96,27 94,25 97,25" fill="#FF6B9D" opacity="0.4" transform="scale(0.5) translate(20,20)"/>
    </g>
  `;
}
