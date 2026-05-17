import './Visuals.css';

/* ─────────────────────────────────────────────
   CableVisual — Submarine Fiber Optic Cable
   Redesigned for a professional, layered look.
   ───────────────────────────────────────────── */

const CABLE_PATH = 'M72,238 C160,278 260,208 400,228 C540,248 640,212 728,238';
const CABLE_PATH_REV = 'M728,238 C640,212 540,248 400,228 C260,208 160,278 72,238';

const REPEATERS = [
  { cx: 188, cy: 258, delay: 0 },
  { cx: 310, cy: 218, delay: 0.8 },
  { cx: 490, cy: 238, delay: 1.6 },
  { cx: 614, cy: 218, delay: 2.4 },
];

const PARTICLES = [
  { cx: 150, cy: 168, d: 0,   r: 0.9 },
  { cx: 260, cy: 155, d: 1.4, r: 1.1 },
  { cx: 390, cy: 162, d: 0.7, r: 0.8 },
  { cx: 510, cy: 172, d: 2.1, r: 1.0 },
  { cx: 630, cy: 158, d: 0.3, r: 0.9 },
  { cx: 720, cy: 168, d: 1.8, r: 1.1 },
  { cx: 200, cy: 195, d: 2.8, r: 0.7 },
  { cx: 450, cy: 188, d: 1.1, r: 0.8 },
  { cx: 580, cy: 195, d: 0.5, r: 0.7 },
];

const STARS = [
  { cx: 90,  cy: 22, d: 0,   r: 0.9 },
  { cx: 200, cy: 38, d: 0.8, r: 1.1 },
  { cx: 340, cy: 18, d: 1.5, r: 0.8 },
  { cx: 460, cy: 32, d: 0.4, r: 1.0 },
  { cx: 580, cy: 20, d: 2.0, r: 0.9 },
  { cx: 680, cy: 40, d: 1.2, r: 1.1 },
  { cx: 760, cy: 26, d: 0.6, r: 0.8 },
];

export default function CableVisual() {
  return (
    <svg
      className="topic-visual"
      viewBox="0 0 800 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustrasi kabel serat optik bawah laut antara Jakarta dan Makassar"
    >
      <defs>
        {/* ── Backgrounds ── */}
        <linearGradient id="cv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#060d18" />
          <stop offset="100%" stopColor="#0c1e30" />
        </linearGradient>
        <linearGradient id="cv-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0c1e30" />
          <stop offset="45%"  stopColor="#071422" />
          <stop offset="100%" stopColor="#020810" />
        </linearGradient>

        {/* ── Cable ── */}
        <linearGradient id="cv-cable" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#57c1ff" stopOpacity="0.45" />
          <stop offset="30%"  stopColor="#a4dfff" stopOpacity="0.95" />
          <stop offset="50%"  stopColor="#e0f5ff" stopOpacity="1"    />
          <stop offset="70%"  stopColor="#a4dfff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#57c1ff" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="cv-cable-shadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#1a4a6a" stopOpacity="0.6" />
          <stop offset="50%"  stopColor="#2a6a9a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1a4a6a" stopOpacity="0.6" />
        </linearGradient>

        {/* ── Glows ── */}
        <radialGradient id="cv-glow-l" cx="0.15" cy="0.7" r="0.5">
          <stop offset="0%"   stopColor="#57c1ff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#57c1ff" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="cv-glow-r" cx="0.85" cy="0.7" r="0.5">
          <stop offset="0%"   stopColor="#57c1ff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#57c1ff" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="cv-glow-mid" cx="0.5" cy="0.75" r="0.45">
          <stop offset="0%"   stopColor="#57c1ff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#57c1ff" stopOpacity="0"   />
        </radialGradient>

        {/* ── Land ── */}
        <linearGradient id="cv-land-l" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#1a2e1a" />
          <stop offset="100%" stopColor="#0c1a0c" />
        </linearGradient>
        <linearGradient id="cv-land-r" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1a2e1a" />
          <stop offset="100%" stopColor="#0c1a0c" />
        </linearGradient>

        {/* ── Filters ── */}
        <filter id="cv-blur-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="cv-blur-lg" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="cv-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        {/* ── Clip ── */}
        <clipPath id="cv-clip">
          <rect width="800" height="320" />
        </clipPath>
      </defs>

      <g clipPath="url(#cv-clip)">

        {/* ══ SKY ══ */}
        <rect width="800" height="105" fill="url(#cv-sky)" />

        {/* Bintang */}
        {STARS.map((s, i) => (
          <circle
            key={i}
            className="tv-twinkle"
            cx={s.cx} cy={s.cy} r={s.r}
            fill="#c8e8ff"
            style={{ animationDelay: `${s.d}s` }}
          />
        ))}

        {/* Bulan sabit kecil */}
        <g opacity="0.55">
          <circle cx="740" cy="28" r="9" fill="#c8e8ff" />
          <circle cx="745" cy="25" r="7.5" fill="#060d18" />
        </g>

        {/* ══ HORIZON ══ */}
        <line x1="0" y1="105" x2="800" y2="105"
          stroke="#57c1ff" strokeOpacity="0.25" strokeWidth="0.8" />
        {/* Refleksi cahaya di horison */}
        <rect x="0" y="103" width="800" height="4"
          fill="url(#cv-cable)" opacity="0.08" />

        {/* ══ SEA ══ */}
        <rect y="105" width="800" height="215" fill="url(#cv-sea)" />

        {/* Ambient glow dari landing stations */}
        <rect width="800" height="320" fill="url(#cv-glow-l)" />
        <rect width="800" height="320" fill="url(#cv-glow-r)" />
        <rect width="800" height="320" fill="url(#cv-glow-mid)" />

        {/* Gelombang permukaan — 3 layer */}
        <g className="tv-wave" style={{ opacity: 0.9 }}>
          <path
            d="M-80,114 Q-40,109 0,114 T80,114 T160,114 T240,114 T320,114 T400,114 T480,114 T560,114 T640,114 T720,114 T800,114 T880,114"
            stroke="#57c1ff" strokeOpacity="0.28" strokeWidth="1" fill="none"
          />
        </g>
        <g className="tv-wave" style={{ animationDuration: '11s', opacity: 0.7 }}>
          <path
            d="M-80,122 Q-40,117 0,122 T80,122 T160,122 T240,122 T320,122 T400,122 T480,122 T560,122 T640,122 T720,122 T800,122 T880,122"
            stroke="#57c1ff" strokeOpacity="0.14" strokeWidth="0.8" fill="none"
          />
        </g>
        <g className="tv-wave" style={{ animationDuration: '14s', opacity: 0.5 }}>
          <path
            d="M-80,132 Q-40,127 0,132 T80,132 T160,132 T240,132 T320,132 T400,132 T480,132 T560,132 T640,132 T720,132 T800,132 T880,132"
            stroke="#57c1ff" strokeOpacity="0.08" strokeWidth="0.6" fill="none"
          />
        </g>

        {/* Grid kedalaman */}
        {[165, 205, 248].map((y, i) => (
          <line key={i}
            x1="0" y1={y} x2="800" y2={y}
            stroke="#57c1ff" strokeOpacity="0.04"
            strokeDasharray="3 9" strokeWidth="0.6"
          />
        ))}

        {/* Partikel bawah air */}
        {PARTICLES.map((p, i) => (
          <circle key={i}
            className="tv-twinkle"
            cx={p.cx} cy={p.cy} r={p.r}
            fill="#57c1ff" opacity="0.55"
            style={{ animationDelay: `${p.d}s` }}
          />
        ))}

        {/* ══ DASAR LAUT ══ */}
        {/* Layer 1 — kontur jauh */}
        <path
          d="M0,292 Q80,280 160,288 Q240,294 320,282 Q400,275 480,284 Q560,290 640,280 Q720,274 800,284 L800,320 L0,320 Z"
          fill="#040e1a"
        />
        {/* Layer 2 — kontur dekat */}
        <path
          d="M0,300 Q70,290 140,296 Q220,302 300,292 Q380,285 460,294 Q540,300 620,290 Q700,284 800,292 L800,320 L0,320 Z"
          fill="#020a14"
        />
        {/* Highlight tepi dasar */}
        <path
          d="M0,300 Q70,290 140,296 Q220,302 300,292 Q380,285 460,294 Q540,300 620,290 Q700,284 800,292"
          stroke="#57c1ff" strokeOpacity="0.06" strokeWidth="1" fill="none"
        />

        {/* ══ KABEL ══ */}
        {/* Shadow kabel */}
        <path
          d={CABLE_PATH}
          stroke="url(#cv-cable-shadow)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          filter="url(#cv-blur-sm)"
          opacity="0.6"
        />
        {/* Glow kabel luar */}
        <path
          d={CABLE_PATH}
          stroke="#57c1ff"
          strokeOpacity="0.18"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          filter="url(#cv-blur-lg)"
        />
        {/* Kabel utama */}
        <path
          d={CABLE_PATH}
          stroke="url(#cv-cable)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#cv-glow-filter)"
        />
        {/* Highlight atas kabel */}
        <path
          d={CABLE_PATH}
          stroke="#e8f8ff"
          strokeOpacity="0.35"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* ══ DATA PULSES ══ */}
        {/* Kiri → Kanan */}
        {[0, 2.2, 4.4].map((begin, i) => (
          <g key={`lr-${i}`}>
            {/* Ekor cahaya */}
            <circle r="5" fill="#57c1ff" opacity="0.12" filter="url(#cv-blur-sm)">
              <animateMotion dur="5.5s" begin={`${begin}s`} repeatCount="indefinite"
                path={CABLE_PATH} />
            </circle>
            {/* Titik utama */}
            <circle r="2.8" fill="#e0f5ff">
              <animateMotion dur="5.5s" begin={`${begin}s`} repeatCount="indefinite"
                path={CABLE_PATH} />
            </circle>
          </g>
        ))}
        {/* Kanan → Kiri (balik) */}
        {[1.1, 3.3].map((begin, i) => (
          <g key={`rl-${i}`}>
            <circle r="4" fill="#59d499" opacity="0.1" filter="url(#cv-blur-sm)">
              <animateMotion dur="5.5s" begin={`${begin}s`} repeatCount="indefinite"
                path={CABLE_PATH_REV} />
            </circle>
            <circle r="2.2" fill="#59d499" opacity="0.8">
              <animateMotion dur="5.5s" begin={`${begin}s`} repeatCount="indefinite"
                path={CABLE_PATH_REV} />
            </circle>
          </g>
        ))}

        {/* ══ REPEATER STATIONS ══ */}
        {REPEATERS.map((rep, i) => (
          <g key={i}>
            {/* Outer glow */}
            <circle cx={rep.cx} cy={rep.cy} r="16"
              fill="#57c1ff" fillOpacity="0.06"
              className="tv-pulse tv-pulse--slow"
              style={{ animationDelay: `${rep.delay}s` }}
            />
            {/* Ring */}
            <circle cx={rep.cx} cy={rep.cy} r="9"
              fill="none" stroke="#57c1ff" strokeOpacity="0.25" strokeWidth="0.8"
              className="tv-ring"
              style={{ animationDelay: `${rep.delay}s` }}
            />
            {/* Body */}
            <rect
              x={rep.cx - 7} y={rep.cy - 4}
              width="14" height="8"
              fill="#0e1e2e" stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="0.8"
              rx="2"
            />
            {/* LED */}
            <circle cx={rep.cx - 3} cy={rep.cy} r="1.4"
              fill="#57c1ff"
              className="tv-blink"
              style={{ animationDelay: `${rep.delay}s` }}
            />
            <circle cx={rep.cx + 3} cy={rep.cy} r="1.4"
              fill="#59d499"
              className="tv-blink"
              style={{ animationDelay: `${rep.delay + 0.5}s` }}
            />
          </g>
        ))}

        {/* ══ LANDING STATION KIRI — JAKARTA ══ */}
        <g>
          {/* Daratan */}
          <path
            d="M0,195 Q30,188 72,195 L100,210 L108,268 Q50,272 0,268 Z"
            fill="url(#cv-land-l)"
          />
          {/* Kontur pantai */}
          <path
            d="M0,195 Q30,188 72,195 L100,210"
            stroke="#59d499" strokeOpacity="0.3" strokeWidth="0.8" fill="none"
          />

          {/* Gedung utama */}
          <rect x="18" y="158" width="18" height="37" fill="#111e11"
            stroke="#59d499" strokeOpacity="0.45" strokeWidth="0.7" rx="1" />
          {/* Jendela gedung */}
          {[0,1,2].map(row => [0,1,2].map(col => (
            <rect key={`wl-${row}-${col}`}
              x={21 + col * 5} y={161 + row * 7}
              width="3" height="3"
              fill="#ffc533"
              fillOpacity={((row + col) % 2 === 0) ? 0.7 : 0.3}
            />
          )))}

          {/* Gedung kecil */}
          <rect x="40" y="170" width="12" height="25" fill="#0e1a0e"
            stroke="#59d499" strokeOpacity="0.3" strokeWidth="0.6" rx="1" />
          {[0,1].map(row => [0,1].map(col => (
            <rect key={`wls-${row}-${col}`}
              x={42 + col * 5} y={173 + row * 7}
              width="3" height="3"
              fill="#ffc533"
              fillOpacity={((row + col) % 2 === 0) ? 0.5 : 0.25}
            />
          )))}

          {/* Antena */}
          <line x1="27" y1="158" x2="27" y2="130"
            stroke="#aaaaaa" strokeWidth="0.8" />
          <line x1="22" y1="138" x2="32" y2="138"
            stroke="#aaaaaa" strokeWidth="0.6" />
          <circle cx="27" cy="129" r="2.2" fill="#ff6161"
            className="tv-blink" />

          {/* Cable terminus box */}
          <rect x="55" y="188" width="26" height="16"
            fill="#0e1e2e" stroke="#57c1ff" strokeOpacity="0.6" strokeWidth="0.8" rx="2" />
          <rect x="57" y="190" width="22" height="12"
            fill="#0a1828" rx="1" />
          {/* Status LEDs */}
          <circle cx="62" cy="196" r="1.4" fill="#57c1ff"
            className="tv-blink" />
          <circle cx="68" cy="196" r="1.4" fill="#59d499"
            className="tv-blink" style={{ animationDelay: '0.5s' }} />
          <circle cx="74" cy="196" r="1.4" fill="#ffc533"
            className="tv-blink" style={{ animationDelay: '1s' }} />

          {/* Kabel ke laut */}
          <path d="M72,196 Q72,215 72,238"
            stroke="#57c1ff" strokeOpacity="0.4" strokeWidth="1.5"
            strokeDasharray="3 3" fill="none" />

          {/* Label */}
          <text x="54" y="282"
            fill="#c8e8ff" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="middle" letterSpacing="0.2em" fillOpacity="0.9"
            fontWeight="500">
            JAKARTA
          </text>
          <line x1="30" y1="287" x2="78" y2="287"
            stroke="#57c1ff" strokeOpacity="0.35" strokeWidth="0.6" />
        </g>

        {/* ══ LANDING STATION KANAN — MAKASSAR ══ */}
        <g>
          {/* Daratan */}
          <path
            d="M700,210 L728,195 Q770,188 800,195 L800,268 Q750,272 692,268 Z"
            fill="url(#cv-land-r)"
          />
          {/* Kontur pantai */}
          <path
            d="M700,210 L728,195 Q770,188 800,195"
            stroke="#59d499" strokeOpacity="0.3" strokeWidth="0.8" fill="none"
          />

          {/* Gedung utama */}
          <rect x="762" y="158" width="18" height="37" fill="#111e11"
            stroke="#59d499" strokeOpacity="0.45" strokeWidth="0.7" rx="1" />
          {[0,1,2].map(row => [0,1,2].map(col => (
            <rect key={`wr-${row}-${col}`}
              x={764 + col * 5} y={161 + row * 7}
              width="3" height="3"
              fill="#ffc533"
              fillOpacity={((row + col) % 2 !== 0) ? 0.7 : 0.3}
            />
          )))}

          {/* Gedung kecil */}
          <rect x="746" y="170" width="12" height="25" fill="#0e1a0e"
            stroke="#59d499" strokeOpacity="0.3" strokeWidth="0.6" rx="1" />
          {[0,1].map(row => [0,1].map(col => (
            <rect key={`wrs-${row}-${col}`}
              x={748 + col * 5} y={173 + row * 7}
              width="3" height="3"
              fill="#ffc533"
              fillOpacity={((row + col) % 2 !== 0) ? 0.5 : 0.25}
            />
          )))}

          {/* Antena */}
          <line x1="771" y1="158" x2="771" y2="130"
            stroke="#aaaaaa" strokeWidth="0.8" />
          <line x1="766" y1="138" x2="776" y2="138"
            stroke="#aaaaaa" strokeWidth="0.6" />
          <circle cx="771" cy="129" r="2.2" fill="#ff6161"
            className="tv-blink" style={{ animationDelay: '1.3s' }} />

          {/* Cable terminus box */}
          <rect x="717" y="188" width="26" height="16"
            fill="#0e1e2e" stroke="#57c1ff" strokeOpacity="0.6" strokeWidth="0.8" rx="2" />
          <rect x="719" y="190" width="22" height="12"
            fill="#0a1828" rx="1" />
          {/* Status LEDs */}
          <circle cx="724" cy="196" r="1.4" fill="#ffc533"
            className="tv-blink" style={{ animationDelay: '0.3s' }} />
          <circle cx="730" cy="196" r="1.4" fill="#59d499"
            className="tv-blink" style={{ animationDelay: '0.8s' }} />
          <circle cx="736" cy="196" r="1.4" fill="#57c1ff"
            className="tv-blink" style={{ animationDelay: '1.3s' }} />

          {/* Kabel ke laut */}
          <path d="M728,196 Q728,215 728,238"
            stroke="#57c1ff" strokeOpacity="0.4" strokeWidth="1.5"
            strokeDasharray="3 3" fill="none" />

          {/* Label */}
          <text x="746" y="282"
            fill="#c8e8ff" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="middle" letterSpacing="0.2em" fillOpacity="0.9"
            fontWeight="500">
            MAKASSAR
          </text>
          <line x1="720" y1="287" x2="772" y2="287"
            stroke="#57c1ff" strokeOpacity="0.35" strokeWidth="0.6" />
        </g>

        {/* ══ HUD / INFO OVERLAY ══ */}
        {/* Kiri atas */}
        <g>
          <text x="16" y="20"
            fill="#57c1ff" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.25em" fillOpacity="0.9" fontWeight="600">
            FIBER OPTIC
          </text>
          <text x="16" y="33"
            fill="#c8e8ff" fontSize="8" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.12em" fillOpacity="0.45">
            SUBMARINE BACKBONE
          </text>
          {/* Status dot */}
          <circle cx="16" cy="46" r="2.5" fill="#59d499"
            className="tv-blink" style={{ animationDelay: '0.2s' }} />
          <text x="24" y="50"
            fill="#59d499" fontSize="8" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.1em" fillOpacity="0.8">
            ACTIVE
          </text>
        </g>

        {/* Kanan atas */}
        <g>
          <text x="784" y="20"
            fill="#57c1ff" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.25em" fillOpacity="0.9" fontWeight="600"
            textAnchor="end">
            ~20 Tbps
          </text>
          <text x="784" y="33"
            fill="#c8e8ff" fontSize="8" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.12em" fillOpacity="0.45" textAnchor="end">
            CAPACITY
          </text>
          {/* Depth indicator */}
          <text x="784" y="50"
            fill="#c8e8ff" fontSize="8" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.1em" fillOpacity="0.4" textAnchor="end">
            DEPTH ~4000m
          </text>
        </g>

        {/* Depth ruler kanan */}
        <g opacity="0.35">
          <line x1="790" y1="115" x2="790" y2="295"
            stroke="#57c1ff" strokeWidth="0.5" />
          {[0, 45, 90, 135, 180].map((offset, i) => (
            <g key={i}>
              <line x1="786" y1={115 + offset} x2="790" y2={115 + offset}
                stroke="#57c1ff" strokeWidth="0.5" />
              <text x="783" y={118 + offset}
                fill="#57c1ff" fontSize="6.5"
                fontFamily="Inter Tight, Inter, sans-serif"
                textAnchor="end" fillOpacity="0.6">
                {i * 1000}m
              </text>
            </g>
          ))}
        </g>

      </g>
    </svg>
  );
}
