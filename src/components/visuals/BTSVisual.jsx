import './Visuals.css';

export default function BTSVisual() {
  return (
    <svg
      className="topic-visual"
      viewBox="0 0 800 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustrasi tower BTS dengan pancaran sinyal radial"
    >
      <defs>
        <linearGradient id="bv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1a14" />
          <stop offset="60%" stopColor="#081410" />
          <stop offset="100%" stopColor="#04080a" />
        </linearGradient>
        <linearGradient id="bv-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1812" />
          <stop offset="100%" stopColor="#040a08" />
        </linearGradient>
        <radialGradient id="bv-glow" cx="0.5" cy="1" r="0.7">
          <stop offset="0%" stopColor="#59d499" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#59d499" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bv-tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cccccc" />
          <stop offset="50%" stopColor="#888888" />
          <stop offset="100%" stopColor="#444444" />
        </linearGradient>
        <radialGradient id="bv-signal-grad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#59d499" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#59d499" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#59d499" stopOpacity="0" />
        </radialGradient>
        <filter id="bv-blur"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>

      <rect width="800" height="320" fill="url(#bv-sky)" />

      {/* Bintang */}
      <g>
        {[
          [80, 30], [180, 50], [260, 25], [380, 40], [500, 28], [620, 45], [740, 32]
        ].map(([cx, cy], i) => (
          <circle key={i} className="tv-twinkle" cx={cx} cy={cy} r="0.8" fill="#59d499" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </g>

      {/* Bukit jauh */}
      <path d="M0,210 Q150,180 300,200 Q450,220 600,195 Q700,180 800,200 L800,260 L0,260 Z" fill="#0a1612" opacity="0.7" />
      <path d="M0,225 Q120,200 240,215 Q360,230 480,210 Q600,195 720,212 Q780,220 800,215 L800,260 L0,260 Z" fill="#081410" opacity="0.85" />

      {/* Permukaan tanah */}
      <rect x="0" y="240" width="800" height="80" fill="url(#bv-ground)" />

      {/* Grid landscape */}
      <g opacity="0.18">
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 50} y1="245" x2={(i * 50 - 100) * 1.4 + 400} y2="320" stroke="#59d499" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={250 + i * 18} x2="800" y2={250 + i * 18} stroke="#59d499" strokeWidth="0.5" />
        ))}
      </g>

      {/* Glow tanah */}
      <ellipse cx="400" cy="260" rx="320" ry="50" fill="url(#bv-glow)" />

      {/* Sinyal ring expanding (dari puncak antena) */}
      <g style={{ transformOrigin: '400px 95px' }}>
        <circle className="tv-ring" cx="400" cy="95" r="40" fill="none" stroke="#59d499" strokeWidth="1.5" strokeOpacity="0.7" />
        <circle className="tv-ring tv-ring--d1" cx="400" cy="95" r="40" fill="none" stroke="#59d499" strokeWidth="1.5" strokeOpacity="0.7" />
        <circle className="tv-ring tv-ring--d2" cx="400" cy="95" r="40" fill="none" stroke="#59d499" strokeWidth="1.5" strokeOpacity="0.7" />
      </g>

      {/* Sinyal arc statis (3 layer) */}
      <g opacity="0.7">
        <path d="M400,100 A60,55 0 0,1 460,160" fill="none" stroke="#59d499" strokeWidth="1.5" strokeOpacity="0.55" />
        <path d="M400,100 A60,55 0 0,0 340,160" fill="none" stroke="#59d499" strokeWidth="1.5" strokeOpacity="0.55" />
        <path d="M400,80 A100,90 0 0,1 500,180" fill="none" stroke="#59d499" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M400,80 A100,90 0 0,0 300,180" fill="none" stroke="#59d499" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M400,60 A140,130 0 0,1 540,200" fill="none" stroke="#59d499" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 4" />
        <path d="M400,60 A140,130 0 0,0 260,200" fill="none" stroke="#59d499" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 4" />
      </g>

      {/* Tower BTS — lattice */}
      <g>
        {/* Glow tower */}
        <polygon points="400,80 380,240 420,240" fill="#59d499" fillOpacity="0.08" filter="url(#bv-blur)" />

        {/* Outer frame */}
        <line x1="400" y1="80" x2="380" y2="240" stroke="url(#bv-tower)" strokeWidth="2" />
        <line x1="400" y1="80" x2="420" y2="240" stroke="url(#bv-tower)" strokeWidth="2" />

        {/* Cross bracing X-pattern */}
        {[110, 130, 150, 170, 190, 210].map((y, i) => {
          const w = 4 + (y - 80) * 0.125;
          return (
            <g key={i}>
              <line x1={400 - w} y1={y} x2={400 + w} y2={y + 18} stroke="#999" strokeWidth="0.7" />
              <line x1={400 + w} y1={y} x2={400 - w} y2={y + 18} stroke="#999" strokeWidth="0.7" />
              <line x1={400 - w} y1={y} x2={400 + w} y2={y} stroke="#aaa" strokeWidth="0.5" />
            </g>
          );
        })}
        <line x1="380" y1="240" x2="420" y2="240" stroke="#aaa" strokeWidth="1" />

        {/* Top equipment */}
        <rect x="392" y="86" width="16" height="6" fill="#3a3a3a" stroke="#59d499" strokeOpacity="0.6" strokeWidth="0.5" />
        <rect x="378" y="96" width="8" height="16" fill="#444" stroke="#59d499" strokeOpacity="0.5" strokeWidth="0.5" />
        <rect x="414" y="96" width="8" height="16" fill="#444" stroke="#59d499" strokeOpacity="0.5" strokeWidth="0.5" />
        <rect x="395" y="116" width="10" height="14" fill="#2a2a2a" stroke="#59d499" strokeOpacity="0.4" strokeWidth="0.5" />

        {/* Antena vertikal puncak */}
        <line x1="400" y1="80" x2="400" y2="50" stroke="#cccccc" strokeWidth="1.5" />
        <circle cx="400" cy="80" r="2" fill="#888" />
        <circle className="tv-blink" cx="400" cy="48" r="3" fill="#ff6161" />
        <circle cx="400" cy="48" r="6" fill="#ff6161" fillOpacity="0.25" />
      </g>

      {/* Base / pondasi */}
      <g>
        <line x1="370" y1="240" x2="430" y2="240" stroke="#555" strokeWidth="2" />
        <rect x="375" y="240" width="50" height="6" fill="#1a2218" stroke="#59d499" strokeOpacity="0.4" />
        <rect x="385" y="246" width="30" height="3" fill="#0a1612" />
      </g>

      {/* Pohon di samping */}
      <g className="tv-sway" style={{ transformOrigin: '170px 240px' }}>
        <rect x="168" y="220" width="3" height="22" fill="#3a2a1a" />
        <ellipse cx="170" cy="218" rx="14" ry="12" fill="#0d2218" />
      </g>
      <g className="tv-sway" style={{ transformOrigin: '630px 240px', animationDelay: '1s' }}>
        <rect x="628" y="222" width="3" height="20" fill="#3a2a1a" />
        <ellipse cx="630" cy="220" rx="12" ry="10" fill="#0d2218" />
      </g>

      {/* Rumah/desa */}
      <g opacity="0.85">
        <rect x="100" y="220" width="44" height="22" fill="#1a2218" stroke="#59d499" strokeOpacity="0.5" strokeWidth="0.7" />
        <polygon points="100,220 122,200 144,220" fill="#1a2218" stroke="#59d499" strokeOpacity="0.5" strokeWidth="0.7" />
        <rect x="115" y="226" width="6" height="10" fill="#0a1612" />
        <rect x="125" y="226" width="6" height="6" fill="#ffc533" fillOpacity="0.6" />

        <rect x="660" y="218" width="50" height="24" fill="#1a2218" stroke="#59d499" strokeOpacity="0.5" strokeWidth="0.7" />
        <polygon points="660,218 685,196 710,218" fill="#1a2218" stroke="#59d499" strokeOpacity="0.5" strokeWidth="0.7" />
        <rect x="678" y="225" width="7" height="11" fill="#0a1612" />
        <rect x="690" y="225" width="6" height="6" fill="#ffc533" fillOpacity="0.7" />
      </g>

      {/* Sinyal terhubung — titik biru flow */}
      <g>
        <line x1="170" y1="225" x2="395" y2="120" stroke="#59d499" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 4" className="tv-flow" />
        <line x1="630" y1="225" x2="405" y2="120" stroke="#59d499" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 4" className="tv-flow tv-flow--reverse" />

        <circle className="tv-pulse" cx="170" cy="225" r="3" fill="#59d499" />
        <circle className="tv-pulse" cx="630" cy="225" r="3" fill="#59d499" style={{ animationDelay: '1s' }} />
      </g>

      {/* Mobile devices floating */}
      <g opacity="0.85">
        <g>
          <rect x="240" y="270" width="14" height="22" rx="2" fill="#242728" stroke="#59d499" strokeOpacity="0.6" />
          <rect x="241" y="272" width="12" height="16" fill="#59d499" fillOpacity="0.18" />
          <circle cx="247" cy="290" r="0.8" fill="#59d499" />
        </g>
        <g>
          <rect x="540" y="265" width="14" height="22" rx="2" fill="#242728" stroke="#59d499" strokeOpacity="0.6" />
          <rect x="541" y="267" width="12" height="16" fill="#59d499" fillOpacity="0.18" />
          <circle cx="547" cy="285" r="0.8" fill="#59d499" />
        </g>
        <g>
          <rect x="370" y="278" width="14" height="22" rx="2" fill="#242728" stroke="#59d499" strokeOpacity="0.6" />
          <rect x="371" y="280" width="12" height="16" fill="#59d499" fillOpacity="0.25" />
          <circle cx="377" cy="298" r="0.8" fill="#59d499" />
        </g>
      </g>

      {/* Label */}
      <text x="20" y="42" fill="#59d499" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="0.22em" fillOpacity="0.85">BTS · 4G/5G</text>
      <text x="20" y="58" fill="#cdcdcd" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="0.1em" fillOpacity="0.5">CELLULAR BASE STATION</text>
      <text x="780" y="42" fill="#59d499" fontSize="10" fontFamily="Inter, sans-serif" letterSpacing="0.22em" fillOpacity="0.85" textAnchor="end">RADIUS ~5 KM</text>
      <text x="780" y="58" fill="#cdcdcd" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="0.1em" fillOpacity="0.5" textAnchor="end">COVERAGE</text>
    </svg>
  );
}
