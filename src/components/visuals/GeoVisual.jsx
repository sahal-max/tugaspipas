import './Visuals.css';

/* ─────────────────────────────────────────────
   GeoVisual — Peta Nusantara
   Topografi, Ring of Fire, Wallace Line,
   garis bujur/lintang, dan dinamika tektonik.
   ───────────────────────────────────────────── */

const ISLANDS = {
  sumatera:   'M82,118 C90,108 105,105 122,108 C140,112 158,118 175,128 C194,138 213,150 230,164 C246,178 256,192 252,206 C248,218 232,222 218,219 C200,225 184,228 168,222 C150,228 132,225 118,217 C100,210 86,196 80,180 C76,164 74,148 78,132 C80,124 80,120 82,118 Z',
  jawa:       'M270,194 C285,186 305,182 325,184 C345,186 365,184 385,188 C404,192 420,196 432,200 C434,206 428,212 416,214 C396,217 376,217 356,215 C336,213 316,213 296,212 C282,210 270,206 268,200 Z',
  kalimantan: 'M335,98 C355,88 380,84 408,88 C432,92 458,98 472,114 C482,128 484,144 478,160 C470,176 456,188 438,192 C418,194 398,188 380,180 C362,170 348,158 340,144 C332,130 328,114 332,102 C333,100 334,99 335,98 Z',
  sulawesi:   'M508,108 L516,118 L526,112 L536,108 L548,114 L548,128 L538,138 L548,148 L548,160 L538,168 L548,178 L552,192 L544,202 L532,196 L528,184 L538,176 L530,168 L520,178 L512,192 L504,200 L498,192 L508,180 L516,170 L506,162 L498,170 L488,166 L494,150 L504,140 L498,130 L502,120 Z',
  papua:      'M635,128 C642,124 652,122 662,124 L658,116 L668,114 L676,122 C690,118 708,116 728,120 C748,124 766,132 768,146 C766,160 752,172 730,176 C710,178 690,176 672,172 C660,170 650,166 642,162 C636,156 632,150 632,142 C632,136 633,132 635,128 Z',
};

const VOLCANOES = [
  { cx: 130, cy: 150, label: 'KERINCI' },
  { cx: 198, cy: 192, label: 'KRAKATAU' },
  { cx: 320, cy: 200, label: 'MERAPI' },
  { cx: 380, cy: 202, label: 'BROMO' },
  { cx: 466, cy: 207, label: 'RINJANI' },
  { cx: 530, cy: 132, label: 'LOKON' },
  { cx: 605, cy: 158, label: 'GAMALAMA' },
];

const CITIES = [
  { cx: 218, cy: 218, label: 'JAKARTA',   tx: 200, ty: 230, anchor: 'end' },
  { cx: 366, cy: 213, label: 'SURABAYA',  tx: 384, ty: 224, anchor: 'start' },
  { cx: 408, cy: 110, label: 'PONTIANAK', tx: 408, ty: 124, anchor: 'middle' },
  { cx: 528, cy: 175, label: 'MAKASSAR',  tx: 482, ty: 178, anchor: 'end' },
  { cx: 736, cy: 152, label: 'JAYAPURA',  tx: 736, ty: 168, anchor: 'middle' },
];

// Lempeng tektonik — arah pergerakan
const PLATE_ARROWS = [
  { x: 80,  y: 280, dir: 'up' },
  { x: 280, y: 280, dir: 'up' },
  { x: 480, y: 285, dir: 'up' },
  { x: 690, y: 250, dir: 'down' },
  { x: 60,  y: 80,  dir: 'right' },
];

export default function GeoVisual() {
  return (
    <svg
      className="topic-visual"
      viewBox="0 0 800 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Peta kartografis Nusantara dengan topografi, Ring of Fire, dan garis Wallace"
    >
      <defs>
        {/* Background */}
        <radialGradient id="gv-bg" cx="0.5" cy="0.5" r="0.85">
          <stop offset="0%"   stopColor="#0e2236" />
          <stop offset="55%"  stopColor="#06121f" />
          <stop offset="100%" stopColor="#02060c" />
        </radialGradient>

        {/* Daratan rendah */}
        <linearGradient id="gv-lowland" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2c4d3a" />
          <stop offset="60%"  stopColor="#1d3328" />
          <stop offset="100%" stopColor="#11221a" />
        </linearGradient>

        {/* Pegunungan */}
        <linearGradient id="gv-highland" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#7a6240" />
          <stop offset="60%"  stopColor="#4a3a26" />
          <stop offset="100%" stopColor="#251c14" />
        </linearGradient>

        {/* Snow cap */}
        <radialGradient id="gv-snow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="60%"  stopColor="#cfe7ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#cfe7ff" stopOpacity="0" />
        </radialGradient>

        {/* Trench shadow */}
        <radialGradient id="gv-trench" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#000" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        {/* Coastal halo */}
        <radialGradient id="gv-coast" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#57c1ff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#57c1ff" stopOpacity="0" />
        </radialGradient>

        {/* Text gradient */}
        <linearGradient id="gv-grad-text" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#a4dfff" />
          <stop offset="100%" stopColor="#57c1ff" />
        </linearGradient>

        {/* Equator glow */}
        <linearGradient id="gv-equator" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ffc533" stopOpacity="0" />
          <stop offset="50%"  stopColor="#ffc533" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffc533" stopOpacity="0" />
        </linearGradient>

        {/* Filters */}
        <filter id="gv-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="gv-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Reusable island shapes for halos */}
        <path id="gv-i-sumatera"   d={ISLANDS.sumatera} />
        <path id="gv-i-jawa"       d={ISLANDS.jawa} />
        <path id="gv-i-kalimantan" d={ISLANDS.kalimantan} />
        <path id="gv-i-sulawesi"   d={ISLANDS.sulawesi} />
        <path id="gv-i-papua"      d={ISLANDS.papua} />

        <clipPath id="gv-clip">
          <rect width="800" height="320" />
        </clipPath>
      </defs>

      <g clipPath="url(#gv-clip)">

        {/* ── BACKGROUND ── */}
        <rect width="800" height="320" fill="url(#gv-bg)" />

        {/* Trench — palung Jawa & Sunda */}
        <g opacity="0.65">
          <ellipse cx="180" cy="248" rx="260" ry="20"
            fill="url(#gv-trench)" filter="url(#gv-soft)" />
          <ellipse cx="500" cy="250" rx="200" ry="18"
            fill="url(#gv-trench)" filter="url(#gv-soft)" />
        </g>

        {/* Bathymetry contour */}
        <g opacity="0.16" stroke="#57c1ff" fill="none" strokeWidth="0.4">
          <path d="M0,68 Q200,60 400,68 T800,66" />
          <path d="M0,90 Q200,82 400,90 T800,88" />
          <path d="M0,200 Q200,196 400,202 T800,200" />
          <path d="M0,218 Q200,214 400,220 T800,218" />
          <path d="M0,278 Q200,274 400,280 T800,278" />
        </g>

        {/* Palung Jawa — garis dashed dengan animasi flow */}
        <g>
          <path d="M40,250 Q200,238 400,252 Q580,260 770,250"
            stroke="#0a1828" strokeWidth="3" fill="none" />
          <path d="M40,254 Q200,242 400,256 Q580,264 770,254"
            stroke="#57c1ff" strokeOpacity="0.25" strokeWidth="0.7"
            strokeDasharray="3 5" fill="none"
            className="tv-flow" />
          <text x="400" y="246"
            fill="#57c1ff" fillOpacity="0.55"
            fontSize="7" fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="middle" letterSpacing="0.18em">
            PALUNG JAWA · 7.725 m
          </text>
        </g>

        {/* Garis bujur dengan label */}
        <g stroke="#57c1ff" fill="none" strokeWidth="0.5" opacity="0.18">
          <path d="M120,40 Q120,160 80,300" />
          <path d="M260,30 Q260,160 230,300" />
          <path d="M400,25 L400,300" strokeWidth="0.7" />
          <path d="M540,30 Q540,160 570,300" />
          <path d="M680,40 Q680,160 720,300" />
        </g>
        <g fill="#57c1ff" fillOpacity="0.45"
          fontSize="7" fontFamily="Inter Tight, Inter, sans-serif"
          letterSpacing="0.15em">
          <text x="120" y="34" textAnchor="middle">95°E</text>
          <text x="260" y="28" textAnchor="middle">105°E</text>
          <text x="400" y="22" textAnchor="middle">115°E</text>
          <text x="540" y="28" textAnchor="middle">125°E</text>
          <text x="680" y="34" textAnchor="middle">135°E</text>
        </g>

        {/* Garis lintang */}
        <g opacity="0.12" stroke="#57c1ff" fill="none" strokeWidth="0.5">
          <path d="M0,90 Q200,82 400,90 T800,88" />
          <path d="M0,140 Q200,132 400,140 T800,138" />
          <path d="M0,240 Q200,232 400,240 T800,238" />
        </g>

        {/* ── EQUATOR — line dengan glow + animated dot ── */}
        <g>
          <line x1="0" y1="160" x2="800" y2="160"
            stroke="url(#gv-equator)" strokeWidth="2" opacity="0.5" />
          <line x1="0" y1="160" x2="800" y2="160"
            stroke="#ffc533" strokeOpacity="0.5"
            strokeDasharray="4 6" />
          <text x="794" y="156"
            fill="#ffc533" fillOpacity="0.85"
            fontSize="8" fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="end" letterSpacing="0.15em">
            0° EQUATOR
          </text>
          {/* Dot sweeping along equator */}
          <circle r="2.5" fill="#ffc533">
            <animate attributeName="cx" from="-10" to="810"
              dur="14s" repeatCount="indefinite" />
            <animate attributeName="cy" from="160" to="160"
              dur="14s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0"
              keyTimes="0;0.1;0.9;1" dur="14s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* ── WALLACE LINE — dashed dengan flow ── */}
        <g>
          <path d="M438,82 Q450,140 460,200 Q468,232 480,260"
            stroke="#ff9a4d" strokeWidth="1.4"
            strokeDasharray="6 3 1 3" fill="none"
            strokeOpacity="0.7" className="tv-flow" />
          <text x="446" y="76"
            fill="#ff9a4d" fillOpacity="0.9"
            fontSize="8" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.2em">
            WALLACE LINE
          </text>
        </g>

        {/* Coastal halos */}
        <g opacity="0.7">
          {['gv-i-sumatera','gv-i-jawa','gv-i-kalimantan','gv-i-sulawesi','gv-i-papua'].map((id) => (
            <use key={id} href={`#${id}`} fill="url(#gv-coast)" filter="url(#gv-soft)" />
          ))}
        </g>

        {/* ── DARATAN ── */}
        <g>
          {/* Sumatera */}
          <use href="#gv-i-sumatera" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="1" />
          <path d="M78,118 L70,108 L80,112 Z"
            fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.6" />
          <path d="M252,206 L262,214 L256,220 Z"
            fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.6" />

          {/* Mentawai */}
          <ellipse cx="58" cy="160" rx="3" ry="6" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.5" />
          <ellipse cx="62" cy="180" rx="2.5" ry="4" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.5" />
          <ellipse cx="68" cy="200" rx="2" ry="3" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.5" />

          {/* Kep. Riau & Bangka Belitung */}
          {[[250,142,3,2],[270,154,4,2.5],[285,170,3,2],[295,155,3.5,2],[320,80,4,3],[335,95,2,1.5]].map(([cx,cy,rx,ry], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry}
              fill="url(#gv-lowland)"
              stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.4" />
          ))}

          {/* Jawa */}
          <use href="#gv-i-jawa" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="1" />
          <path d="M395,188 L425,184 L432,188 L425,192 L400,193 Z"
            fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="0.5" />

          {/* Bali, NTB, NTT */}
          {[
            'M442,205 Q447,202 452,205 Q453,210 447,212 Q443,212 442,205 Z',
            'M460,205 Q466,202 472,205 Q473,211 466,213 Q460,212 460,205 Z',
            'M482,206 Q495,202 510,206 Q514,212 502,214 Q488,213 482,206 Z',
            'M522,208 Q540,204 562,208 Q566,214 550,216 Q530,215 522,208 Z',
            'M520,222 Q535,219 548,222 Q548,228 535,228 Q520,226 520,222 Z',
            'M566,212 Q585,208 605,212 Q610,218 595,222 Q572,220 566,212 Z',
          ].map((d, i) => (
            <path key={i} d={d} fill="url(#gv-lowland)"
              stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="0.5" />
          ))}
          <ellipse cx="516" cy="208" rx="2" ry="1.5" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.4" />
          <ellipse cx="580" cy="228" rx="3" ry="1.5" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="0.4" />

          {/* Kalimantan */}
          <use href="#gv-i-kalimantan" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="1" />

          {/* Sulawesi */}
          <use href="#gv-i-sulawesi" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="1" />

          {/* Talaud, Sangihe */}
          <ellipse cx="560" cy="80" rx="3.5" ry="2.5" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.4" />
          <ellipse cx="552" cy="92" rx="2" ry="1.5" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.4" />

          {/* Halmahera */}
          <path d="M598,142 L604,150 L612,144 L618,148 L616,158 L608,162 L614,170 L612,180 L606,178 L604,168 L596,176 L592,170 L600,160 L590,154 L594,146 Z"
            fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="0.7" />

          {/* Maluku */}
          {[[610,200,6,3],[625,195,4,2.5],[588,208,6,3],[572,210,3,2],[640,218,2,1.5]].map(([cx,cy,rx,ry], i) => (
            <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry}
              fill="url(#gv-lowland)"
              stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.4" />
          ))}

          {/* Papua */}
          <use href="#gv-i-papua" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.55" strokeWidth="1" />
          <ellipse cx="710" cy="108" rx="3" ry="2" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.4" />
        </g>

        {/* ── PEGUNUNGAN ── */}
        <g>
          {/* Bukit Barisan (Sumatera) */}
          <path d="M88,135 Q108,132 130,142 Q156,152 184,168 Q210,180 232,196"
            stroke="url(#gv-highland)" strokeWidth="6" fill="none"
            strokeLinecap="round" opacity="0.85" />
          <path d="M118,144 L124,138 L130,146 Z" fill="#a47a4a" />
          <path d="M158,160 L164,154 L170,162 Z" fill="#a47a4a" />
          <path d="M198,180 L204,174 L210,182 Z" fill="#a47a4a" />

          {/* Danau Toba */}
          <ellipse cx="138" cy="155" rx="5" ry="2" fill="#0a1828"
            stroke="#57c1ff" strokeOpacity="0.7" strokeWidth="0.5" />
          <ellipse cx="138" cy="155" rx="2" ry="0.8" fill="#1d3328"
            stroke="#57c1ff" strokeOpacity="0.4" strokeWidth="0.3" />

          {/* Sungai Sumatera */}
          <path d="M130,158 Q145,180 165,200"
            stroke="#a4dfff" strokeOpacity="0.45" strokeWidth="0.6" fill="none" />
          <path d="M170,140 Q190,165 215,195"
            stroke="#a4dfff" strokeOpacity="0.4" strokeWidth="0.5" fill="none" />

          {/* Pegunungan Jawa */}
          <path d="M285,202 Q330,200 380,204 Q410,206 425,208"
            stroke="url(#gv-highland)" strokeWidth="4" fill="none"
            strokeLinecap="round" opacity="0.8" />
          <path d="M315,200 L319,194 L323,202 Z" fill="#a47a4a" />
          <path d="M348,202 L352,196 L356,202 Z" fill="#a47a4a" />
          <path d="M378,204 L382,198 L386,204 Z" fill="#a47a4a" />

          {/* Pegunungan Kalimantan */}
          <path d="M362,135 Q392,128 426,140"
            stroke="url(#gv-highland)" strokeWidth="5" fill="none"
            strokeLinecap="round" opacity="0.7" />
          <path d="M385,134 L391,128 L397,134 Z" fill="#a47a4a" />
          <path d="M410,138 L416,132 L422,138 Z" fill="#a47a4a" />

          {/* Sungai Kalimantan */}
          <path d="M345,118 Q370,138 400,160 Q420,175 432,184"
            stroke="#a4dfff" strokeOpacity="0.5" strokeWidth="0.7" fill="none" />
          <path d="M388,108 Q408,135 418,158"
            stroke="#a4dfff" strokeOpacity="0.4" strokeWidth="0.5" fill="none" />

          {/* Pegunungan Sulawesi */}
          <path d="M515,120 Q525,140 530,160 Q535,180 540,195"
            stroke="url(#gv-highland)" strokeWidth="3" fill="none"
            strokeLinecap="round" opacity="0.7" />

          {/* Pegunungan Jayawijaya */}
          <path d="M664,140 Q694,134 738,140"
            stroke="url(#gv-highland)" strokeWidth="6" fill="none"
            strokeLinecap="round" opacity="0.9" />
          <path d="M676,142 L684,128 L692,142 Z" fill="#a47a4a" />
          <path d="M700,142 L709,124 L718,142 Z" fill="#c9b08a" />
          <path d="M722,142 L728,134 L734,142 Z" fill="#a47a4a" />

          {/* Snow cap Puncak Jaya — pulse halus */}
          <circle cx="709" cy="124" r="5" fill="url(#gv-snow)"
            className="tv-pulse tv-pulse--slow" opacity="0.6" />
          <circle cx="709" cy="124" r="3" fill="url(#gv-snow)" />
          <circle cx="709" cy="124" r="1.5" fill="#ffffff" fillOpacity="0.95" />
          <text x="709" y="116"
            fill="#ffffff" fillOpacity="0.85"
            fontSize="7" fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="middle" letterSpacing="0.15em">
            PUNCAK JAYA
          </text>
          <text x="709" y="106"
            fill="#cdcdcd" fillOpacity="0.6"
            fontSize="6.5" fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="middle" letterSpacing="0.1em">
            4.884 m
          </text>

          {/* Sungai Mamberamo */}
          <path d="M720,128 Q715,150 712,170"
            stroke="#a4dfff" strokeOpacity="0.4" strokeWidth="0.5" fill="none" />
        </g>

        {/* ── GUNUNG BERAPI dengan smoke + tremor ring ── */}
        <g>
          {VOLCANOES.map((v, i) => (
            <g key={i}>
              {/* Tremor ring — expanding */}
              <circle cx={v.cx} cy={v.cy - 1} r="6"
                fill="none" stroke="#ff6161" strokeOpacity="0.5" strokeWidth="0.7"
                className="tv-ring"
                style={{ animationDelay: `${i * 0.4}s` }} />
              {/* Glow */}
              <circle cx={v.cx} cy={v.cy - 1} r="9"
                fill="#ff6161" fillOpacity="0.18"
                className="tv-pulse tv-pulse--slow"
                style={{ animationDelay: `${i * 0.5}s` }} />
              {/* Cone */}
              <path d={`M${v.cx - 3.5},${v.cy + 2} L${v.cx},${v.cy - 5} L${v.cx + 3.5},${v.cy + 2} Z`}
                fill="#ff6161" filter="url(#gv-glow)" />
              {/* Crater glow */}
              <circle cx={v.cx} cy={v.cy - 5} r="1"
                fill="#ffc533"
                className="tv-blink"
                style={{ animationDelay: `${i * 0.3}s` }} />
              {/* Smoke plume */}
              <path d={`M${v.cx},${v.cy - 5} q-1.5,-3 0.5,-6 q1.5,-2 -0.5,-5`}
                stroke="#ff9a4d" strokeOpacity="0.5"
                strokeWidth="0.8" fill="none" strokeLinecap="round" />
            </g>
          ))}
        </g>

        {/* ── KOTA UTAMA ── */}
        <g>
          {CITIES.map((c, i) => (
            <g key={i}>
              <circle cx={c.cx} cy={c.cy} r="5"
                fill="#ffc533" fillOpacity="0.18"
                className="tv-pulse"
                style={{ animationDelay: `${i * 0.4}s` }} />
              <circle className="tv-blink" cx={c.cx} cy={c.cy} r="2.5"
                fill="#ffc533"
                style={{ animationDelay: `${i * 0.4}s` }} />
              <circle cx={c.cx} cy={c.cy} r="1.2" fill="#ffffff" />
              <text x={c.tx} y={c.ty}
                fill="#ffe8a8" fontSize="7.5"
                fontFamily="Inter Tight, Inter, sans-serif"
                textAnchor={c.anchor}
                letterSpacing="0.18em" fillOpacity="0.9">
                {c.label}
              </text>
            </g>
          ))}
        </g>

        {/* ── ARUS LAUT — flow lines ── */}
        <g opacity="0.45">
          <path d="M30,260 Q150,255 280,262"
            stroke="#57c1ff" strokeOpacity="0.45" strokeWidth="1"
            strokeDasharray="4 5" fill="none" className="tv-flow" />
          <path d="M450,265 Q580,258 770,262"
            stroke="#57c1ff" strokeOpacity="0.45" strokeWidth="1"
            strokeDasharray="4 5" fill="none" className="tv-flow" />
          <path d="M30,40 Q150,35 280,42"
            stroke="#57c1ff" strokeOpacity="0.3" strokeWidth="1"
            strokeDasharray="4 5" fill="none"
            className="tv-flow tv-flow--reverse" />
        </g>

        {/* ── PANAH LEMPENG TEKTONIK ── */}
        <g opacity="0.45">
          {PLATE_ARROWS.map((p, i) => {
            const transform =
              p.dir === 'up'    ? 'rotate(0)' :
              p.dir === 'down'  ? 'rotate(180)' :
              p.dir === 'right' ? 'rotate(90)' : 'rotate(0)';
            return (
              <g key={i} transform={`translate(${p.x},${p.y})`}>
                <g transform={transform}>
                  <line x1="0" y1="6" x2="0" y2="-8"
                    stroke="#ff9a4d" strokeWidth="0.8" />
                  <polygon points="0,-10 -2.5,-5 0,-7 2.5,-5"
                    fill="#ff9a4d" />
                </g>
              </g>
            );
          })}
          <text x="80" y="294"
            fill="#ff9a4d" fillOpacity="0.55"
            fontSize="6" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.15em" textAnchor="middle">
            INDO-AUSTRALIA
          </text>
          <text x="690" y="264"
            fill="#ff9a4d" fillOpacity="0.55"
            fontSize="6" fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.15em" textAnchor="middle">
            PASIFIK
          </text>
        </g>

        {/* ── LABEL PULAU UTAMA ── */}
        <g fontFamily="Inter Tight, Inter, sans-serif" letterSpacing="0.18em">
          <text x="50"  y="110" fill="url(#gv-grad-text)" fontSize="9" textAnchor="start" fillOpacity="0.85">SUMATERA</text>
          <line x1="50" y1="113" x2="92" y2="113" stroke="#57c1ff" strokeOpacity="0.4" />

          <text x="304" y="184" fill="url(#gv-grad-text)" fontSize="9" textAnchor="end" fillOpacity="0.85">JAWA</text>
          <line x1="282" y1="187" x2="306" y2="187" stroke="#57c1ff" strokeOpacity="0.4" />

          <text x="338" y="74" fill="url(#gv-grad-text)" fontSize="9" textAnchor="start" fillOpacity="0.85">KALIMANTAN</text>
          <line x1="338" y1="77" x2="398" y2="77" stroke="#57c1ff" strokeOpacity="0.4" />

          <text x="500" y="92" fill="url(#gv-grad-text)" fontSize="9" textAnchor="start" fillOpacity="0.85">SULAWESI</text>
          <line x1="500" y1="95" x2="544" y2="95" stroke="#57c1ff" strokeOpacity="0.4" />

          <text x="668" y="200" fill="url(#gv-grad-text)" fontSize="9" textAnchor="start" fillOpacity="0.85">PAPUA</text>
          <line x1="668" y1="203" x2="700" y2="203" stroke="#57c1ff" strokeOpacity="0.4" />

          <text x="488" y="232" fill="#a4dfff" fontSize="7.5" textAnchor="start" fillOpacity="0.7">NUSA TENGGARA</text>
          <text x="608" y="138" fill="#a4dfff" fontSize="7.5" textAnchor="start" fillOpacity="0.7">MALUKU</text>
        </g>

        {/* ── HUD CORNERS ── */}
        <g stroke="#57c1ff" strokeOpacity="0.4" strokeWidth="1" fill="none">
          <path d="M20,20 L20,40 M20,20 L40,20" />
          <path d="M780,20 L780,40 M780,20 L760,20" />
          <path d="M20,300 L20,280 M20,300 L40,300" />
          <path d="M780,300 L780,280 M780,300 L760,300" />
        </g>

        {/* ── STATS PANEL KIRI BAWAH ── */}
        <g>
          <rect x="20" y="252" width="220" height="56"
            fill="#0d2030" fillOpacity="0.78"
            stroke="#57c1ff" strokeOpacity="0.35" />
          <text x="30" y="266"
            fill="#57c1ff" fontSize="9"
            fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.2em" fillOpacity="0.9">
            GEOFAKTA NUSANTARA
          </text>
          <line x1="30" y1="270" x2="230" y2="270"
            stroke="#57c1ff" strokeOpacity="0.3" />

          <text x="30"  y="283" fill="#a4dfff" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.95">17.504</text>
          <text x="65"  y="283" fill="#cdcdcd" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.65">pulau</text>
          <text x="115" y="283" fill="#a4dfff" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.95">5.110</text>
          <text x="143" y="283" fill="#cdcdcd" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.65">km bentang</text>

          <text x="30"  y="297" fill="#a4dfff" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.95">~127</text>
          <text x="56"  y="297" fill="#cdcdcd" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.65">gunung api aktif</text>
          <text x="135" y="297" fill="#a4dfff" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.95">81.000</text>
          <text x="170" y="297" fill="#cdcdcd" fontSize="9" fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.65">km pantai</text>
        </g>

        {/* ── LEGENDA ── */}
        <g transform="translate(540, 252)">
          <rect width="220" height="34"
            fill="#0d2030" fillOpacity="0.78"
            stroke="#57c1ff" strokeOpacity="0.35" />
          <text x="10" y="14"
            fill="#57c1ff" fontSize="9"
            fontFamily="Inter Tight, Inter, sans-serif"
            letterSpacing="0.2em" fillOpacity="0.9">
            LEGENDA
          </text>
          <line x1="10" y1="18" x2="120" y2="18"
            stroke="#57c1ff" strokeOpacity="0.3" />
          <rect x="10" y="22" width="10" height="6" fill="url(#gv-lowland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.4" />
          <text x="24" y="28" fill="#cdcdcd" fontSize="8"
            fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.7">
            dataran
          </text>
          <rect x="60" y="22" width="10" height="6" fill="url(#gv-highland)"
            stroke="#57c1ff" strokeOpacity="0.5" strokeWidth="0.4" />
          <text x="74" y="28" fill="#cdcdcd" fontSize="8"
            fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.7">
            pegunungan
          </text>
          <path d="M125,25 L128,21 L131,25 Z" fill="#ff6161" />
          <text x="135" y="28" fill="#cdcdcd" fontSize="8"
            fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.7">
            vulkan
          </text>
          <line x1="166" y1="25" x2="178" y2="25"
            stroke="#ff9a4d" strokeWidth="1"
            strokeDasharray="3 1.5 0.5 1.5" />
          <text x="182" y="28" fill="#cdcdcd" fontSize="8"
            fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.7">
            Wallace
          </text>
        </g>

        {/* ── SCALE BAR ── */}
        <g transform="translate(254, 268)" opacity="0.85">
          <line x1="0"  y1="0"  x2="60" y2="0"  stroke="#a4dfff" strokeWidth="1" />
          <line x1="0"  y1="-3" x2="0"  y2="3"  stroke="#a4dfff" strokeWidth="1" />
          <line x1="20" y1="-2" x2="20" y2="2"  stroke="#a4dfff" strokeWidth="0.8" />
          <line x1="40" y1="-2" x2="40" y2="2"  stroke="#a4dfff" strokeWidth="0.8" />
          <line x1="60" y1="-3" x2="60" y2="3"  stroke="#a4dfff" strokeWidth="1" />
          <text x="0" y="14"
            fill="#cdcdcd" fontSize="8"
            fontFamily="Inter Tight, Inter, sans-serif" fillOpacity="0.7">0</text>
          <text x="60" y="14"
            fill="#cdcdcd" fontSize="8"
            fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="end" fillOpacity="0.7">2.000 km</text>
        </g>

        {/* ── TITLE ── */}
        <text x="780" y="42"
          fill="#57c1ff" fontSize="11"
          fontFamily="Inter Tight, Inter, sans-serif"
          letterSpacing="0.22em" fillOpacity="0.95"
          textAnchor="end" fontWeight="600">
          NUSANTARA
        </text>
        <text x="780" y="58"
          fill="#cdcdcd" fontSize="9"
          fontFamily="Inter Tight, Inter, sans-serif"
          letterSpacing="0.1em" fillOpacity="0.55"
          textAnchor="end">
          RING OF FIRE · ARCHIPELAGO
        </text>
        {/* Status dot */}
        <circle cx="784" cy="68" r="2.5" fill="#59d499"
          className="tv-blink" />
        <text x="778" y="71"
          fill="#59d499" fillOpacity="0.85"
          fontSize="7" fontFamily="Inter Tight, Inter, sans-serif"
          letterSpacing="0.12em" textAnchor="end">
          LIVE
        </text>

        {/* ── COMPASS ── */}
        <g transform="translate(750, 280)" opacity="0.78">
          <circle r="14" fill="#0d2030" fillOpacity="0.6"
            stroke="#57c1ff" strokeOpacity="0.45" />
          <line x1="0" y1="-12" x2="0" y2="12"
            stroke="#57c1ff" strokeOpacity="0.3" />
          <line x1="-12" y1="0" x2="12" y2="0"
            stroke="#57c1ff" strokeOpacity="0.3" />
          <polygon points="0,-12 -3,-3 0,-6 3,-3" fill="#57c1ff" />
          <polygon points="0,12 -3,3 0,6 3,3" fill="#57c1ff" fillOpacity="0.3" />
          <text x="0" y="-16"
            fill="#57c1ff" fontSize="8"
            fontFamily="Inter Tight, Inter, sans-serif"
            textAnchor="middle" fillOpacity="0.85">N</text>
        </g>

      </g>
    </svg>
  );
}
