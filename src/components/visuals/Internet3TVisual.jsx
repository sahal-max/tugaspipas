import './Visuals.css';

/* ─────────────────────────────────────────────
   Internet3TVisual — Peta Konektivitas 3T
   Fokus: titik-titik blank spot, jalur BTS USO,
   sinyal satelit Satria-1, dan progress coverage.
   ───────────────────────────────────────────── */

const ISLANDS = {
  sumatera: 'M82,118 C90,108 105,105 122,108 C140,112 158,118 175,128 C194,138 213,150 230,164 C246,178 256,192 252,206 C248,218 232,222 218,219 C200,225 184,228 168,222 C150,228 132,225 118,217 C100,210 86,196 80,180 C76,164 74,148 78,132 C80,124 80,120 82,118 Z',
  jawa: 'M270,194 C285,186 305,182 325,184 C345,186 365,184 385,188 C404,192 420,196 432,200 C434,206 428,212 416,214 C396,217 376,217 356,215 C336,213 316,213 296,212 C282,210 270,206 268,200 Z',
  kalimantan: 'M335,98 C355,88 380,84 408,88 C432,92 458,98 472,114 C482,128 484,144 478,160 C470,176 456,188 438,192 C418,194 398,188 380,180 C362,170 348,158 340,144 C332,130 328,114 332,102 C333,100 334,99 335,98 Z',
  sulawesi: 'M508,108 L516,118 L526,112 L536,108 L548,114 L548,128 L538,138 L548,148 L548,160 L538,168 L548,178 L552,192 L544,202 L532,196 L528,184 L538,176 L530,168 L520,178 L512,192 L504,200 L498,192 L508,180 L516,170 L506,162 L498,170 L488,166 L494,150 L504,140 L498,130 L502,120 Z',
  papua: 'M635,128 C642,124 652,122 662,124 L658,116 L668,114 L676,122 C690,118 708,116 728,120 C748,124 766,132 768,146 C766,160 752,172 730,176 C710,178 690,176 672,172 C660,170 650,166 642,162 C636,156 632,150 632,142 C632,136 633,132 635,128 Z',
};

// Titik 3T: blank spot yang sudah/sedang dijangkau BTS USO
const NODES_3T = [
  { cx: 62,  cy: 178, label: 'NIAS',       status: 'done',    delay: 0    },
  { cx: 320, cy: 80,  label: 'NATUNA',     status: 'done',    delay: 0.5  },
  { cx: 470, cy: 90,  label: 'SEBATIK',    status: 'active',  delay: 1.0  },
  { cx: 560, cy: 80,  label: 'TALAUD',     status: 'active',  delay: 1.5  },
  { cx: 605, cy: 158, label: 'HALMAHERA',  status: 'active',  delay: 2.0  },
  { cx: 588, cy: 210, label: 'MALUKU',     status: 'pending', delay: 2.5  },
  { cx: 580, cy: 228, label: 'ROTE',       status: 'pending', delay: 3.0  },
  { cx: 710, cy: 112, label: 'PAPUA',      status: 'active',  delay: 3.5  },
];

const STATUS_COLOR = {
  done:    '#59d499',
  active:  '#ff6161',
  pending: '#ffc533',
};

// Jalur koneksi BTS USO
const BACKBONE =
  'M62,178 Q150,138 320,80 Q420,80 470,90 Q510,80 560,80 Q620,118 605,158 Q650,138 710,112';
const BRANCH_MALUKU =
  'M605,158 Q598,178 588,210';
const BRANCH_ROTE =
  'M588,210 Q582,218 580,228';

export default function Internet3TVisual() {
  return (
    <svg
      className="topic-visual"
      viewBox="0 0 800 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Peta konektivitas internet daerah 3T Indonesia"
    >
      <defs>
        {/* Background */}
        <radialGradient id="it-bg" cx="0.5" cy="0.5" r="0.85">
          <stop offset="0%"   stopColor="#160810" />
          <stop offset="55%"  stopColor="#0a0408" />
          <stop offset="100%" stopColor="#030103" />
        </radialGradient>

        {/* Pulau normal */}
        <linearGradient id="it-land" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2e1c18" />
          <stop offset="100%" stopColor="#160c0a" />
        </linearGradient>

        {/* Pulau 3T — sedikit lebih terang/merah */}
        <linearGradient id="it-land3t" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#4a2020" />
          <stop offset="100%" stopColor="#221010" />
        </linearGradient>

        {/* Glow node */}
        <radialGradient id="it-glow-red" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#ff6161" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ff6161" stopOpacity="0"   />
        </radialGradient>
        <radialGradient id="it-glow-green" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#59d499" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#59d499" stopOpacity="0"    />
        </radialGradient>
        <radialGradient id="it-glow-yellow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#ffc533" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffc533" stopOpacity="0"   />
        </radialGradient>

        {/* Satelit beam */}
        <linearGradient id="it-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffc533" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffc533" stopOpacity="0"   />
        </linearGradient>

        {/* Filters */}
        <filter id="it-blur-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <filter id="it-blur-lg" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" />
        </filter>

        <clipPath id="it-clip">
          <rect width="800" height="320" />
        </clipPath>
      </defs>

      <g clipPath="url(#it-clip)">

        {/* ── BACKGROUND ── */}
        <rect width="800" height="320" fill="url(#it-bg)" />

        {/* Grid tipis */}
        <g opacity="0.055">
          {Array.from({ length: 17 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="320"
              stroke="#ff6161" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 53} x2="800" y2={i * 53}
              stroke="#ff6161" strokeWidth="0.5" />
          ))}
        </g>

        {/* Kontur laut */}
        {[170, 200, 240].map((y, i) => (
          <path key={i}
            d={`M0,${y} Q200,${y - 8} 400,${y} T800,${y - 2}`}
            stroke="#ff6161" strokeOpacity={0.06 - i * 0.015} strokeWidth="0.6" fill="none"
          />
        ))}

        {/* ── SATELIT SATRIA-1 ── */}
        <g className="tv-float--slow" style={{ animationDelay: '0.5s' }}>
          <g transform="translate(400, 38)">
            {/* Glow */}
            <circle r="18" fill="#ffc533" fillOpacity="0.12" filter="url(#it-blur-sm)" />
            {/* Panel kiri */}
            <rect x="-34" y="-2" width="24" height="14" fill="#1a2a3a"
              stroke="#ffc533" strokeOpacity="0.5" strokeWidth="0.6" />
            <line x1="-34" y1="5" x2="-10" y2="5" stroke="#0a1828" strokeWidth="0.4" />
            <line x1="-26" y1="-2" x2="-26" y2="12" stroke="#0a1828" strokeWidth="0.4" />
            <line x1="-18" y1="-2" x2="-18" y2="12" stroke="#0a1828" strokeWidth="0.4" />
            <line x1="-10" y1="5" x2="-6" y2="5" stroke="#888" strokeWidth="0.8" />
            {/* Panel kanan */}
            <rect x="10" y="-2" width="24" height="14" fill="#1a2a3a"
              stroke="#ffc533" strokeOpacity="0.5" strokeWidth="0.6" />
            <line x1="10" y1="5" x2="34" y2="5" stroke="#0a1828" strokeWidth="0.4" />
            <line x1="18" y1="-2" x2="18" y2="12" stroke="#0a1828" strokeWidth="0.4" />
            <line x1="26" y1="-2" x2="26" y2="12" stroke="#0a1828" strokeWidth="0.4" />
            <line x1="6" y1="5" x2="10" y2="5" stroke="#888" strokeWidth="0.8" />
            {/* Body */}
            <rect x="-6" y="-1" width="12" height="16" fill="#2a2a2e"
              stroke="#ffc533" strokeOpacity="0.5" strokeWidth="0.6" />
            <rect x="-4" y="1" width="8" height="3" fill="#0a1828" />
            <rect x="-4" y="7" width="8" height="3" fill="#0a1828" />
            {/* Antena dish */}
            <polygon points="-4,15 4,15 2,20 -2,20" fill="#aaa" />
            <line x1="0" y1="20" x2="0" y2="24" stroke="#888" strokeWidth="0.7" />
            <circle className="tv-blink" cx="0" cy="-3" r="1.5" fill="#ffc533" />
          </g>
          <text x="400" y="72"
            fill="#ffc533" fontSize="8" fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="middle" letterSpacing="0.2em" fillOpacity="0.7">
            SATRIA-1
          </text>
        </g>

        {/* Beam satelit ke bumi — kerucut */}
        <polygon points="400,58 340,175 460,175"
          fill="url(#it-beam)" opacity="0.12" />
        <line x1="400" y1="58" x2="370" y2="175"
          stroke="#ffc533" strokeOpacity="0.2" strokeDasharray="2 4" strokeWidth="0.8"
          className="tv-flow" />
        <line x1="400" y1="58" x2="430" y2="175"
          stroke="#ffc533" strokeOpacity="0.2" strokeDasharray="2 4" strokeWidth="0.8"
          className="tv-flow tv-flow--reverse" />

        {/* Pulsa dari satelit */}
        {[0, 1.8, 3.6].map((begin, i) => (
          <circle key={i} r="2" fill="#ffc533" opacity="0.9">
            <animate attributeName="cy" from="58" to="175" dur="2.2s"
              begin={`${begin}s`} repeatCount="indefinite" />
            <animate attributeName="cx" from="400" to="400" dur="2.2s"
              begin={`${begin}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.9;0" dur="2.2s"
              begin={`${begin}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* ── PULAU-PULAU ── */}
        {/* Coastal glow */}
        {Object.values(ISLANDS).map((d, i) => (
          <path key={`glow-${i}`} d={d}
            fill="#ff6161" fillOpacity="0.04"
            filter="url(#it-blur-lg)" />
        ))}

        {/* Sumatera */}
        <path d={ISLANDS.sumatera} fill="url(#it-land)"
          stroke="#ff6161" strokeOpacity="0.4" strokeWidth="0.9" />
        <path d="M78,118 L70,108 L80,112 Z" fill="url(#it-land)"
          stroke="#ff6161" strokeOpacity="0.35" strokeWidth="0.5" />
        {/* Nias — 3T */}
        <ellipse cx="58" cy="160" rx="3" ry="6" fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.6" strokeWidth="0.5" />
        <ellipse cx="62" cy="180" rx="2.5" ry="4" fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.55" strokeWidth="0.5" />

        {/* Natuna — 3T */}
        <ellipse cx="320" cy="80" rx="5" ry="3.5" fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.65" strokeWidth="0.5" />

        {/* Kep. Riau */}
        {[[250,142,3,2],[270,154,4,2.5],[285,170,3,2],[295,155,3.5,2]].map(([cx,cy,rx,ry],i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#it-land)"
            stroke="#ff6161" strokeOpacity="0.35" strokeWidth="0.4" />
        ))}

        {/* Jawa */}
        <path d={ISLANDS.jawa} fill="url(#it-land)"
          stroke="#ff6161" strokeOpacity="0.4" strokeWidth="0.9" />
        <path d="M395,188 L425,184 L432,188 L425,192 L400,193 Z"
          fill="url(#it-land)" stroke="#ff6161" strokeOpacity="0.35" strokeWidth="0.4" />

        {/* NTB / NTT */}
        {[
          'M442,205 Q447,202 452,205 Q453,210 447,212 Q443,212 442,205 Z',
          'M460,205 Q466,202 472,205 Q473,211 466,213 Q460,212 460,205 Z',
          'M482,206 Q495,202 510,206 Q514,212 502,214 Q488,213 482,206 Z',
          'M522,208 Q540,204 562,208 Q566,214 550,216 Q530,215 522,208 Z',
          'M520,222 Q535,219 548,222 Q548,228 535,228 Q520,226 520,222 Z',
        ].map((d, i) => (
          <path key={i} d={d} fill="url(#it-land)"
            stroke="#ff6161" strokeOpacity="0.4" strokeWidth="0.5" />
        ))}
        {/* Timor — 3T */}
        <path d="M566,212 Q585,208 605,212 Q610,218 595,222 Q572,220 566,212 Z"
          fill="url(#it-land3t)" stroke="#ff6161" strokeOpacity="0.6" strokeWidth="0.6" />
        {/* Rote — 3T */}
        <ellipse cx="580" cy="228" rx="3" ry="1.5" fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.6" strokeWidth="0.4" />

        {/* Kalimantan */}
        <path d={ISLANDS.kalimantan} fill="url(#it-land)"
          stroke="#ff6161" strokeOpacity="0.4" strokeWidth="0.9" />
        {/* Sebatik — 3T */}
        <path d="M464,90 L478,86 L482,92 L470,96 Z" fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.7" strokeWidth="0.6" />

        {/* Sulawesi */}
        <path d={ISLANDS.sulawesi} fill="url(#it-land)"
          stroke="#ff6161" strokeOpacity="0.4" strokeWidth="0.9" />
        {/* Talaud — 3T */}
        <ellipse cx="560" cy="80" rx="3.5" ry="2.5" fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.7" strokeWidth="0.5" />
        <ellipse cx="552" cy="92" rx="2" ry="1.5" fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.6" strokeWidth="0.4" />

        {/* Halmahera */}
        <path d="M598,142 L604,150 L612,144 L618,148 L616,158 L608,162 L614,170 L612,180 L606,178 L604,168 L596,176 L592,170 L600,160 L590,154 L594,146 Z"
          fill="url(#it-land)" stroke="#ff6161" strokeOpacity="0.4" strokeWidth="0.7" />
        {/* Maluku — 3T */}
        {[[610,200,6,3],[625,195,4,2.5],[588,208,6,3],[572,210,3,2],[640,218,2.5,1.5]].map(([cx,cy,rx,ry],i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#it-land3t)"
            stroke="#ff6161" strokeOpacity="0.6" strokeWidth="0.5" />
        ))}

        {/* Papua — 3T */}
        <path d={ISLANDS.papua} fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.55" strokeWidth="0.9" />
        <ellipse cx="710" cy="108" rx="3" ry="1.8" fill="url(#it-land3t)"
          stroke="#ff6161" strokeOpacity="0.6" strokeWidth="0.4" />

        {/* ── JALUR BACKBONE BTS USO ── */}
        {/* Shadow */}
        <path d={BACKBONE} stroke="#ff6161" strokeOpacity="0.08"
          strokeWidth="6" fill="none" strokeLinecap="round"
          filter="url(#it-blur-sm)" />
        {/* Garis utama */}
        <path d={BACKBONE} stroke="#ff6161" strokeOpacity="0.3"
          strokeWidth="1.2" fill="none" strokeLinecap="round"
          strokeDasharray="4 5" className="tv-flow" />
        <path d={BRANCH_MALUKU} stroke="#ff6161" strokeOpacity="0.28"
          strokeWidth="1" fill="none" strokeLinecap="round"
          strokeDasharray="3 4" className="tv-flow" />
        <path d={BRANCH_ROTE} stroke="#ff6161" strokeOpacity="0.25"
          strokeWidth="0.8" fill="none" strokeLinecap="round"
          strokeDasharray="3 4" className="tv-flow" />

        {/* Pulsa data di backbone */}
        {[0, 3, 6].map((begin, i) => (
          <g key={i}>
            <circle r="4" fill="#ff6161" opacity="0.1" filter="url(#it-blur-sm)">
              <animateMotion dur="9s" begin={`${begin}s`} repeatCount="indefinite"
                path={BACKBONE} />
            </circle>
            <circle r="2.2" fill="#ff8a8a">
              <animateMotion dur="9s" begin={`${begin}s`} repeatCount="indefinite"
                path={BACKBONE} />
            </circle>
          </g>
        ))}

        {/* ── NODE 3T ── */}
        {NODES_3T.map((n, i) => {
          const col = STATUS_COLOR[n.status];
          const glowId = n.status === 'done' ? 'it-glow-green'
            : n.status === 'active' ? 'it-glow-red' : 'it-glow-yellow';
          return (
            <g key={i}>
              {/* Ambient glow */}
              <circle cx={n.cx} cy={n.cy} r="20"
                fill={`url(#${glowId})`} opacity="0.8" />
              {/* Ripple */}
              <circle cx={n.cx} cy={n.cy} r="10"
                fill="none" stroke={col} strokeOpacity="0.4" strokeWidth="0.8"
                className="tv-ring"
                style={{ animationDelay: `${n.delay}s` }} />
              {/* Outer ring */}
              <circle cx={n.cx} cy={n.cy} r="6"
                fill="none" stroke={col} strokeOpacity="0.6" strokeWidth="0.8" />
              {/* Inner dot */}
              <circle cx={n.cx} cy={n.cy} r="2.5"
                fill={col}
                className="tv-pulse tv-pulse--slow"
                style={{ animationDelay: `${n.delay}s` }} />
              {/* Label */}
              <text x={n.cx} y={n.cy + 18}
                fill={col} fontSize="7.5"
                fontFamily="Inter Tight, Inter, sans-serif"
                textAnchor="middle" letterSpacing="0.18em" fillOpacity="0.9">
                {n.label}
              </text>
            </g>
          );
        })}

        {/* ── LABEL PULAU ── */}
        <g fontFamily="Inter Tight, Inter, sans-serif" letterSpacing="0.16em">
          {[
            { x: 160, y: 248, t: 'SUMATERA' },
            { x: 335, y: 232, t: 'JAWA'     },
            { x: 405, y: 76,  t: 'KALIMANTAN' },
            { x: 525, y: 218, t: 'SULAWESI' },
          ].map((l, i) => (
            <text key={i} x={l.x} y={l.y} fontSize="8.5"
              fill="#ff8a8a" textAnchor="middle" fillOpacity="0.45">
              {l.t}
            </text>
          ))}
        </g>

        {/* ── HUD CORNERS ── */}
        <g stroke="#ff6161" strokeOpacity="0.35" strokeWidth="1" fill="none">
          <path d="M20,20 L20,40 M20,20 L40,20" />
          <path d="M780,20 L780,40 M780,20 L760,20" />
          <path d="M20,300 L20,280 M20,300 L40,300" />
          <path d="M780,300 L780,280 M780,300 L760,300" />
        </g>

        {/* ── LEGENDA STATUS ── */}
        <g>
          <rect x="20" y="240" width="210" height="68"
            fill="#160810" fillOpacity="0.82"
            stroke="#ff6161" strokeOpacity="0.3" strokeWidth="0.8" />
          <text x="30" y="255"
            fill="#ff6161" fontSize="8.5" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.22em" fillOpacity="0.9">
            STATUS KONEKTIVITAS
          </text>
          <line x1="30" y1="259" x2="220" y2="259"
            stroke="#ff6161" strokeOpacity="0.25" />
          {[
            { col: '#59d499', label: 'Terjangkau BTS USO',   y: 272 },
            { col: '#ff6161', label: 'Dalam pembangunan',    y: 284 },
            { col: '#ffc533', label: 'Dilayani Satria-1',    y: 296 },
          ].map((s, i) => (
            <g key={i}>
              <circle cx="35" cy={s.y - 3} r="3" fill={s.col}
                className="tv-blink"
                style={{ animationDelay: `${i * 0.5}s` }} />
              <text x="44" y={s.y}
                fill="#cdcdcd" fontSize="8.5"
                fontFamily="Inter Tight, Inter, sans-serif"
                fillOpacity="0.75">
                {s.label}
              </text>
            </g>
          ))}
        </g>

        {/* ── STATS KANAN ATAS ── */}
        <g>
          <text x="784" y="38"
            fill="#ff6161" fontSize="10"
            fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.22em" fillOpacity="0.9" textAnchor="end">
            3T · DAERAH KHUSUS
          </text>
          <text x="784" y="52"
            fill="#cdcdcd" fontSize="8"
            fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.1em" fillOpacity="0.5" textAnchor="end">
            TERTINGGAL · TERDEPAN · TERLUAR
          </text>
          {/* Progress bar BTS USO */}
          <rect x="620" y="62" width="160" height="3"
            fill="#ff6161" fillOpacity="0.15" rx="1.5" />
          <rect x="620" y="62" width="112" height="3"
            fill="#ff6161" fillOpacity="0.7" rx="1.5" />
          <text x="620" y="76"
            fill="#cdcdcd" fontSize="7.5"
            fontFamily="Inter Tight, Inter, sans-serif"
            fillOpacity="0.55">
            BTS USO 5.618 / 7.904
          </text>
        </g>

        {/* ── COMPASS ── */}
        <g transform="translate(750, 278)" opacity="0.7">
          <circle r="14" fill="#160810" fillOpacity="0.7"
            stroke="#ff6161" strokeOpacity="0.35" />
          <line x1="0" y1="-11" x2="0" y2="11"
            stroke="#ff6161" strokeOpacity="0.3" />
          <line x1="-11" y1="0" x2="11" y2="0"
            stroke="#ff6161" strokeOpacity="0.3" />
          <polygon points="0,-11 -2.5,-3 0,-6 2.5,-3" fill="#ff6161" />
          <polygon points="0,11 -2.5,3 0,6 2.5,3"
            fill="#ff6161" fillOpacity="0.3" />
          <text x="0" y="-15"
            fill="#ff6161" fontSize="7.5"
            fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="middle" fillOpacity="0.8">N</text>
        </g>

      </g>
    </svg>
  );
}
