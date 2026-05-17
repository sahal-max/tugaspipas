import { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import './IndonesiaMap.css';

const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

const PROJECTION_CONFIG = {
  scale: 1650,
  center: [118, -2.5]
};

const VISIBLE_COUNTRIES = new Set([
  'Indonesia',
  'Malaysia',
  'Singapore',
  'Brunei',
  'Philippines',
  'Timor-Leste',
  'Papua New Guinea',
  'Australia',
  'Vietnam',
  'Cambodia',
  'Thailand'
]);

const WIDTH = 1280;
const HEIGHT = 600;

function GraticuleLines() {
  const lons = [];
  for (let lon = 95; lon <= 145; lon += 5) {
    lons.push(lon);
  }
  const lats = [];
  for (let lat = -15; lat <= 10; lat += 5) {
    lats.push(lat);
  }

  return (
    <g className="indo-map__graticule" aria-hidden="true">
      {lons.map((lon) => (
        <line
          key={`lon-${lon}`}
          x1={`${((lon - 95) / 50) * 100}%`}
          y1="0"
          x2={`${((lon - 95) / 50) * 100}%`}
          y2={HEIGHT}
          stroke="rgba(87,193,255,0.05)"
          strokeWidth={0.5}
        />
      ))}
      {lats.map((lat) => (
        <line
          key={`lat-${lat}`}
          x1="0"
          y1={`${((lat + 15) / 25) * 100}%`}
          x2={WIDTH}
          y2={`${((lat + 15) / 25) * 100}%`}
          stroke="rgba(87,193,255,0.05)"
          strokeWidth={0.5}
        />
      ))}
    </g>
  );
}

export default function IndonesiaMap({
  children,
  cities = [],
  width = WIDTH,
  height = HEIGHT,
  showLabels = true,
  fadeNeighbors = true,
  onReady
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
      if (onReady) onReady();
    }, 600);
    return () => clearTimeout(t);
  }, [onReady]);

  return (
    <div className={`indo-map ${ready ? 'indo-map--ready' : ''}`.trim()}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={PROJECTION_CONFIG}
        width={width}
        height={height}
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(87,193,255,0.85)" />
            <stop offset="55%" stopColor="rgba(87,193,255,0.22)" />
            <stop offset="100%" stopColor="rgba(87,193,255,0)" />
          </radialGradient>
          <radialGradient id="halo-warm" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,97,97,0.75)" />
            <stop offset="60%" stopColor="rgba(255,97,97,0.18)" />
            <stop offset="100%" stopColor="rgba(255,97,97,0)" />
          </radialGradient>
          <linearGradient id="indo-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3d5a7a" />
            <stop offset="50%" stopColor="#2a4866" />
            <stop offset="100%" stopColor="#1a2f48" />
          </linearGradient>
          <filter id="indo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="indo-outer-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feFlood floodColor="#57c1ff" floodOpacity="0.45" />
            <feComposite in2="blur1" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <GraticuleLines />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => VISIBLE_COUNTRIES.has(geo.properties.name))
              .map((geo) => {
                const isIndo = geo.properties.name === 'Indonesia';
                if (!isIndo && !fadeNeighbors) return null;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={`indo-map__geo ${isIndo ? 'indo-map__geo--indo' : ''}`.trim()}
                    vectorEffect="non-scaling-stroke"
                    filter={isIndo ? 'url(#indo-outer-glow)' : undefined}
                    style={{
                      default: {
                        fill: isIndo ? 'url(#indo-fill)' : '#080a0e',
                        stroke: isIndo
                          ? 'rgba(180,230,255,1)'
                          : 'rgba(255,255,255,0.04)',
                        strokeWidth: isIndo ? 1.6 : 0.3,
                        outline: 'none',
                        opacity: isIndo ? 1 : 0.18
                      },
                      hover: {
                        fill: isIndo ? 'url(#indo-fill)' : '#080a0e',
                        stroke: 'rgba(200,240,255,1)',
                        outline: 'none'
                      },
                      pressed: { outline: 'none' }
                    }}
                  />
                );
              })
          }
        </Geographies>

        {cities.map((c) => {
          const isPrimary = c.tier === 'primary';
          const haloId = isPrimary ? 'halo-warm' : 'halo';
          const dotColor = isPrimary
            ? 'var(--color-accent-red)'
            : 'var(--color-accent-blue)';
          return (
            <Marker key={c.id} coordinates={c.coordinates}>
              <circle
                r={isPrimary ? 22 : 14}
                fill={`url(#${haloId})`}
                className={`indo-map__halo ${
                  isPrimary ? 'indo-map__halo--primary' : ''
                }`.trim()}
              />
              <circle
                r={isPrimary ? 12 : 8}
                fill="none"
                stroke={isPrimary ? 'rgba(255,97,97,0.8)' : 'rgba(87,193,255,0.7)'}
                strokeWidth={1}
                className={`indo-map__ripple ${
                  isPrimary ? 'indo-map__ripple--primary' : ''
                }`.trim()}
              />
              <circle
                r={isPrimary ? 3.4 : 2.2}
                fill={dotColor}
                className="indo-map__dot"
              />
              {showLabels && isPrimary && (
                <text
                  textAnchor="start"
                  x={7}
                  y={-7}
                  style={{
                    fill: 'rgba(255,255,255,0.78)',
                    fontFamily: 'Inter Tight, Inter, sans-serif',
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.02em'
                  }}
                >
                  {c.name}
                </text>
              )}
            </Marker>
          );
        })}

        {ready && children}
      </ComposableMap>
    </div>
  );
}
