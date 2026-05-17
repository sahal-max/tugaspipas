import Button from '../ui/Button';
import Magnetic from '../ui/Magnetic';
import IndonesiaMap from '../map/IndonesiaMap';
import AnimatedArcs from '../map/AnimatedArcs';
import './Hero.css';

const HERO_CITIES = [
  { id: 'jakarta', name: 'Jakarta', coordinates: [106.85, -6.2], tier: 'primary' },
  { id: 'surabaya', name: 'Surabaya', coordinates: [112.75, -7.25], tier: 'primary' },
  { id: 'medan', name: 'Medan', coordinates: [98.67, 3.59], tier: 'primary' },
  { id: 'makassar', name: 'Makassar', coordinates: [119.42, -5.14], tier: 'primary' },
  { id: 'denpasar', name: 'Denpasar', coordinates: [115.22, -8.65], tier: 'secondary' },
  { id: 'balikpapan', name: 'Balikpapan', coordinates: [116.85, -1.24], tier: 'secondary' },
  { id: 'manado', name: 'Manado', coordinates: [124.84, 1.49], tier: 'secondary' },
  { id: 'jayapura', name: 'Jayapura', coordinates: [140.72, -2.53], tier: 'secondary' },
  { id: 'ambon', name: 'Ambon', coordinates: [128.18, -3.7], tier: 'secondary' },
  { id: 'sorong', name: 'Sorong', coordinates: [131.25, -0.88], tier: 'secondary' }
];

const HERO_ARCS = [
  { from: 'jakarta', to: 'surabaya' },
  { from: 'jakarta', to: 'medan' },
  { from: 'jakarta', to: 'balikpapan' },
  { from: 'surabaya', to: 'denpasar' },
  { from: 'surabaya', to: 'makassar' },
  { from: 'makassar', to: 'manado' },
  { from: 'makassar', to: 'ambon' },
  { from: 'ambon', to: 'sorong' },
  { from: 'sorong', to: 'jayapura' },
  { from: 'balikpapan', to: 'makassar' }
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__map-bg" aria-hidden="true">
        <IndonesiaMap cities={HERO_CITIES} showLabels={false} fadeNeighbors>
          <AnimatedArcs arcs={HERO_ARCS} cities={HERO_CITIES} />
        </IndonesiaMap>
      </div>

      <div className="hero__vignette" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner container">
        <h1 id="hero-title" className="hero__title">
          {'Jaringan Telekomunikasi di Indonesia'.split(' ').map((w, i, arr) => (
            <span key={i}>
              <span
                className={`hero__title-word ${i >= 2 ? 'hero__title-word--accent' : ''}`.trim()}
                style={{ '--w': i }}
              >
                {w}
              </span>
              {i < arr.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <div className="hero__cta">
          <Magnetic strength={0.25}>
            <Button to="/kabel-bawah-laut" variant="primary">
              Mulai Eksplorasi
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
