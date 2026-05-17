import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { geoMercator } from 'd3-geo';

const PROJECTION_CONFIG = {
  scale: 1650,
  center: [118, -2.5],
  width: 1280,
  height: 600
};

function buildPath(start, end, curvature = 0.35) {
  const [x1, y1] = start;
  const [x2, y2] = end;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const norm = Math.sqrt(dx * dx + dy * dy);
  if (norm === 0) return `M${x1},${y1} L${x2},${y2}`;
  const offX = -dy / norm;
  const offY = dx / norm;
  const cx = mx + offX * norm * curvature;
  const cy = my + offY * norm * curvature;
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
}

export default function AnimatedArcs({ arcs = [], cities = [], startDelay = 0.3 }) {
  const projection = useMemo(() => {
    return geoMercator()
      .scale(PROJECTION_CONFIG.scale)
      .center(PROJECTION_CONFIG.center)
      .translate([PROJECTION_CONFIG.width / 2, PROJECTION_CONFIG.height / 2]);
  }, []);

  const cityMap = useMemo(() => {
    const m = new Map();
    cities.forEach((c) => m.set(c.id, c));
    return m;
  }, [cities]);

  const paths = useMemo(() => {
    return arcs
      .map((arc, idx) => {
        const from = cityMap.get(arc.from);
        const to = cityMap.get(arc.to);
        if (!from || !to) return null;
        const start = projection(from.coordinates);
        const end = projection(to.coordinates);
        if (!start || !end) return null;
        return {
          id: `${arc.from}-${arc.to}-${idx}`,
          d: buildPath(start, end),
          end,
          delay: startDelay + idx * 0.32
        };
      })
      .filter(Boolean);
  }, [arcs, cityMap, projection, startDelay]);

  return (
    <g aria-hidden="true" className="indo-map__arcs">
      <defs>
        <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(87,193,255,0)" />
          <stop offset="30%" stopColor="rgba(87,193,255,0.85)" />
          <stop offset="100%" stopColor="rgba(255,97,97,0.95)" />
        </linearGradient>
      </defs>

      {paths.map((p) => (
        <g key={p.id}>
          <path
            d={p.d}
            fill="none"
            stroke="rgba(87,193,255,0.1)"
            strokeWidth={1}
            strokeLinecap="round"
          />
          <motion.path
            d={p.d}
            fill="none"
            stroke="url(#arc-gradient)"
            strokeWidth={1.8}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 1],
              opacity: [0, 0.85, 0.85, 0]
            }}
            transition={{
              duration: 6,
              times: [0, 0.5, 0.78, 1],
              ease: [0.22, 0.61, 0.36, 1],
              repeat: Infinity,
              repeatDelay: 5,
              delay: p.delay
            }}
          />
          <motion.circle
            cx={p.end[0]}
            cy={p.end[1]}
            r={2.6}
            fill="var(--color-accent-red)"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.8, 0.6] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 6.4,
              delay: p.delay + 3.4,
              ease: [0.22, 0.61, 0.36, 1]
            }}
          />
        </g>
      ))}
    </g>
  );
}
