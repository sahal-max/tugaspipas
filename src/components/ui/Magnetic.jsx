import { useRef } from 'react';
import './Magnetic.css';

export default function Magnetic({ children, strength = 0.25, className = '' }) {
  const ref = useRef(null);
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  };

  return (
    <span
      className={`magnetic ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <span ref={ref} className="magnetic__inner">{children}</span>
    </span>
  );
}
