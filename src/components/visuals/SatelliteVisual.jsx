import './Visuals.css';

export default function SatelliteVisual() {
  return (
    <svg
      className="topic-visual"
      viewBox="0 0 800 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustrasi satelit di orbit dengan downlink ke ground station"
    >
      <defs>
        <radialGradient id="sv-bg" cx="0.5" cy="0.4" r="0.8">
          <stop offset="0%" stopColor="#101a2a" />
          <stop offset="60%" stopColor="#06101c" />
          <stop offset="100%" stopColor="#02060c" />
        </radialGradient>
        <radialGradient id="sv-earth" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#2a4a70" />
          <stop offset="60%" stopColor="#152a44" />
          <stop offset="100%" stopColor="#08121e" />
        </radialGradient>
        <radialGradient id="sv-atmo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="80%" stopColor="#57c1ff" stopOpacity="0" />
          <stop offset="92%" stopColor="#57c1ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#57c1ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sv-panel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0e2540" />
          <stop offset="50%" stopColor="#1f4a7a" />
          <stop offset="100%" stopColor="#0e2540" />
        </linearGradient>
        <linearGradient id="sv-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8e8ec" />
          <stop offset="100%" stopColor="#777" />
        </linearGradient>
        <filter id="sv-blur"><feGaussianBlur stdDeviation="2" /></filter>
      </defs>

      <rect width="800" height="320" fill="url(#sv-bg)" />

      {/* Bintang dengan twinkle bertahap */}
      <g>
        {[
          [60, 30, 1, 0], [140, 60, 0.8, 0.4], [220, 25, 1.2, 0.8], [300, 70, 0.8, 1.2],
          [380, 35, 1, 1.6], [460, 55, 0.8, 2], [540, 28, 1.5, 0.2], [620, 65, 1, 0.6],
          [700, 40, 0.8, 1], [760, 80, 1.2, 1.4], [40, 110, 0.8, 1.8], [780, 130, 1, 0.3],
          [120, 150, 0.8, 0.9], [680, 100, 1, 1.5], [340, 120, 0.8, 2.2]
        ].map(([cx, cy, r, d], i) => (
          <circle key={i} className="tv-twinkle" cx={cx} cy={cy} r={r} fill="#ffffff" style={{ animationDelay: `${d}s` }} />
        ))}
      </g>

      {/* Nebula tipis */}
      <ellipse cx="600" cy="80" rx="180" ry="50" fill="#ffc533" fillOpacity="0.04" filter="url(#sv-blur)" />
      <ellipse cx="200" cy="100" rx="160" ry="40" fill="#57c1ff" fillOpacity="0.05" filter="url(#sv-blur)" />

      {/* Bumi (lengkungan bawah) */}
      <g>
        <circle cx="400" cy="500" r="260" fill="url(#sv-atmo)" />
        <circle cx="400" cy="500" r="240" fill="url(#sv-earth)" />

        {/* Daratan stilasi */}
        <g opacity="0.85">
          <path d="M210,290 Q260,278 320,288 Q360,295 400,290 Q440,285 480,295 Q540,300 590,290 L590,330 L210,330 Z" fill="#1a3520" />
          <path d="M260,295 Q300,290 340,298 Q360,302 380,298 Q400,294 420,300" stroke="#0e2316" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M450,297 Q480,294 510,300 Q540,304 570,298" stroke="#0e2316" strokeWidth="1" fill="none" opacity="0.8" />
        </g>

        {/* Awan */}
        <g opacity="0.5">
          <ellipse cx="280" cy="285" rx="40" ry="6" fill="#a4dfff" />
          <ellipse cx="380" cy="280" rx="50" ry="5" fill="#a4dfff" />
          <ellipse cx="490" cy="287" rx="35" ry="6" fill="#a4dfff" />
        </g>

        {/* Garis kontinen tipis */}
        <ellipse cx="400" cy="500" rx="240" ry="240" fill="none" stroke="#57c1ff" strokeOpacity="0.12" strokeWidth="0.5" />
      </g>

      {/* Orbit rings dengan flow */}
      <g>
        <ellipse cx="400" cy="240" rx="340" ry="100" fill="none" stroke="#ffc533" strokeOpacity="0.25" strokeDasharray="3 6" className="tv-flow" />
        <ellipse cx="400" cy="220" rx="280" ry="80" fill="none" stroke="#57c1ff" strokeOpacity="0.18" strokeDasharray="2 5" className="tv-flow tv-flow--reverse" />
      </g>

      {/* Satelit utama (tengah, bergerak naik turun) */}
      <g className="tv-float">
        <g transform="translate(400, 110)">
          {/* Glow halo */}
          <circle r="22" fill="#ffc533" fillOpacity="0.18" filter="url(#sv-blur)" />
          {/* Panel surya kiri */}
          <g>
            <rect x="-44" y="-3" width="32" height="20" fill="url(#sv-panel)" stroke="#57c1ff" strokeOpacity="0.5" />
            <line x1="-44" y1="3" x2="-12" y2="3" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="-44" y1="9" x2="-12" y2="9" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="-36" y1="-3" x2="-36" y2="17" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="-28" y1="-3" x2="-28" y2="17" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="-20" y1="-3" x2="-20" y2="17" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="-12" y1="7" x2="-6" y2="7" stroke="#888" strokeWidth="1" />
          </g>
          {/* Panel surya kanan */}
          <g>
            <rect x="12" y="-3" width="32" height="20" fill="url(#sv-panel)" stroke="#57c1ff" strokeOpacity="0.5" />
            <line x1="12" y1="3" x2="44" y2="3" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="12" y1="9" x2="44" y2="9" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="20" y1="-3" x2="20" y2="17" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="28" y1="-3" x2="28" y2="17" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="36" y1="-3" x2="36" y2="17" stroke="#0a1828" strokeWidth="0.5" />
            <line x1="6" y1="7" x2="12" y2="7" stroke="#888" strokeWidth="1" />
          </g>
          {/* Body */}
          <rect x="-7" y="-2" width="14" height="18" fill="url(#sv-body)" stroke="#57c1ff" strokeOpacity="0.4" />
          <rect x="-5" y="0" width="10" height="3" fill="#0a1828" />
          <rect x="-5" y="6" width="10" height="3" fill="#0a1828" />
          {/* Antena dish bawah */}
          <polygon points="-5,16 5,16 3,22 -3,22" fill="#cccccc" />
          <line x1="0" y1="22" x2="0" y2="26" stroke="#888" />
          <circle className="tv-blink" cx="0" cy="-4" r="1.5" fill="#ffc533" />
        </g>
        <text x="400" y="155" fill="#ffc533" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.2em" fillOpacity="0.7">SATRIA-1</text>
      </g>

      {/* Satelit kiri */}
      <g className="tv-float--slow" style={{ animationDelay: '1.2s' }}>
        <g transform="translate(180, 145) rotate(-12)">
          <circle r="14" fill="#57c1ff" fillOpacity="0.12" filter="url(#sv-blur)" />
          <rect x="-30" y="-2" width="22" height="14" fill="url(#sv-panel)" stroke="#57c1ff" strokeOpacity="0.5" />
          <rect x="8" y="-2" width="22" height="14" fill="url(#sv-panel)" stroke="#57c1ff" strokeOpacity="0.5" />
          <line x1="-30" y1="5" x2="-8" y2="5" stroke="#0a1828" strokeWidth="0.3" />
          <line x1="8" y1="5" x2="30" y2="5" stroke="#0a1828" strokeWidth="0.3" />
          <line x1="-22" y1="-2" x2="-22" y2="12" stroke="#0a1828" strokeWidth="0.3" />
          <line x1="22" y1="-2" x2="22" y2="12" stroke="#0a1828" strokeWidth="0.3" />
          <rect x="-6" y="-1" width="12" height="12" fill="url(#sv-body)" stroke="#57c1ff" strokeOpacity="0.4" />
          <polygon points="-3,11 3,11 2,16 -2,16" fill="#cccccc" />
          <circle className="tv-blink" cx="0" cy="-3" r="1.2" fill="#ffc533" style={{ animationDelay: '0.4s' }} />
        </g>
        <text x="180" y="180" fill="#57c1ff" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.2em" fillOpacity="0.6">TELKOM-3S</text>
      </g>

      {/* Satelit kanan */}
      <g className="tv-float" style={{ animationDelay: '0.6s' }}>
        <g transform="translate(620, 150) rotate(12)">
          <circle r="14" fill="#57c1ff" fillOpacity="0.12" filter="url(#sv-blur)" />
          <rect x="-28" y="-2" width="20" height="13" fill="url(#sv-panel)" stroke="#57c1ff" strokeOpacity="0.5" />
          <rect x="8" y="-2" width="20" height="13" fill="url(#sv-panel)" stroke="#57c1ff" strokeOpacity="0.5" />
          <line x1="-28" y1="4" x2="-8" y2="4" stroke="#0a1828" strokeWidth="0.3" />
          <line x1="8" y1="4" x2="28" y2="4" stroke="#0a1828" strokeWidth="0.3" />
          <line x1="-20" y1="-2" x2="-20" y2="11" stroke="#0a1828" strokeWidth="0.3" />
          <line x1="20" y1="-2" x2="20" y2="11" stroke="#0a1828" strokeWidth="0.3" />
          <rect x="-6" y="-1" width="12" height="11" fill="url(#sv-body)" stroke="#57c1ff" strokeOpacity="0.4" />
          <polygon points="-3,10 3,10 2,15 -2,15" fill="#cccccc" />
          <circle className="tv-blink" cx="0" cy="-3" r="1.2" fill="#ffc533" style={{ animationDelay: '0.8s' }} />
        </g>
        <text x="620" y="183" fill="#57c1ff" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.2em" fillOpacity="0.6">TELKOM-4</text>
      </g>

      {/* Downlink beam (kerucut tipis) */}
      <g opacity="0.5">
        <polygon points="180,150 165,260 195,260" fill="#57c1ff" fillOpacity="0.06" />
        <polygon points="400,118 380,295 420,295" fill="#ffc533" fillOpacity="0.08" />
        <polygon points="620,155 605,260 635,260" fill="#57c1ff" fillOpacity="0.06" />

        <line x1="180" y1="150" x2="180" y2="260" stroke="#57c1ff" strokeOpacity="0.4" strokeDasharray="2 4" className="tv-flow" />
        <line x1="400" y1="120" x2="400" y2="295" stroke="#ffc533" strokeOpacity="0.55" strokeDasharray="2 4" className="tv-flow" />
        <line x1="620" y1="155" x2="620" y2="260" stroke="#57c1ff" strokeOpacity="0.4" strokeDasharray="2 4" className="tv-flow" />
      </g>

      {/* Pulsa data turun ke ground */}
      <circle r="2" fill="#ffc533">
        <animate attributeName="cy" from="120" to="295" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="cx" from="400" to="400" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle r="1.5" fill="#57c1ff">
        <animate attributeName="cy" from="150" to="260" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="cx" from="180" to="180" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle r="1.5" fill="#57c1ff">
        <animate attributeName="cy" from="155" to="260" dur="2.8s" begin="1.2s" repeatCount="indefinite" />
        <animate attributeName="cx" from="620" to="620" dur="2.8s" begin="1.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="2.8s" begin="1.2s" repeatCount="indefinite" />
      </circle>

      {/* Ground stations */}
      {[
        { cx: 180, cy: 260, color: '#57c1ff' },
        { cx: 400, cy: 295, color: '#ffc533' },
        { cx: 620, cy: 260, color: '#57c1ff' },
      ].map((g, i) => (
        <g key={i}>
          <ellipse cx={g.cx} cy={g.cy + 4} rx="14" ry="3" fill={g.color} fillOpacity="0.15" />
          <circle className="tv-pulse" cx={g.cx} cy={g.cy} r="8" fill={g.color} fillOpacity="0.18" style={{ animationDelay: `${i * 0.5}s` }} />
          <circle cx={g.cx} cy={g.cy} r="3" fill={g.color} />
          {/* Dish */}
          <path d={`M${g.cx - 8},${g.cy} A8,4 0 0,1 ${g.cx + 8},${g.cy}`} fill="none" stroke="#cccccc" strokeWidth="1" />
          <line x1={g.cx} y1={g.cy} x2={g.cx} y2={g.cy + 6} stroke="#888" strokeWidth="0.8" />
          <rect x={g.cx - 3} y={g.cy + 5} width="6" height="2" fill="#888" />
        </g>
      ))}

      {/* Label */}
      <text x="20" y="42" fill="#ffc533" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="0.22em" fillOpacity="0.85">GEO ORBIT</text>
      <text x="20" y="58" fill="#cdcdcd" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="0.1em" fillOpacity="0.5">36.000 KM ABOVE EQUATOR</text>
      <text x="780" y="42" fill="#ffc533" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="0.22em" fillOpacity="0.85" textAnchor="end">Ka-BAND · 150 Gbps</text>
      <text x="780" y="58" fill="#cdcdcd" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="0.1em" fillOpacity="0.5" textAnchor="end">DOWNLINK CAPACITY</text>
    </svg>
  );
}
