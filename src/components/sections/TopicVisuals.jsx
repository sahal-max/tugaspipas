import CableVisual from '../visuals/CableVisual';
import BTSVisual from '../visuals/BTSVisual';
import SatelliteVisual from '../visuals/SatelliteVisual';
import Internet3TVisual from '../visuals/Internet3TVisual';
import GeoVisual from '../visuals/GeoVisual';
import './TopicVisuals.css';

const VISUALS = {
  'kabel-bawah-laut': CableVisual,
  bts: BTSVisual,
  satelit: SatelliteVisual,
  'internet-3t': Internet3TVisual,
  'pengaruh-geografis': GeoVisual,
};

export default function TopicVisual({ slug }) {
  const Comp = VISUALS[slug];
  if (!Comp) return null;

  return (
    <div className="topic-visual-wrap">
      <Comp />
      <div className="topic-visual-wrap__fade" aria-hidden="true" />
    </div>
  );
}
