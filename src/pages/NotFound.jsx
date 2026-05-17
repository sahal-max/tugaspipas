import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Halaman tidak ditemukan</h1>
        <p className="not-found__body">
          Tautan ini tidak ada di peta navigasi kami. Mungkin sudah dipindahkan
          atau ditulis salah.
        </p>
        <Link to="/" className="not-found__cta">
          ← Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
