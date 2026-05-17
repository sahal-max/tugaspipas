import { Link } from 'react-router-dom';
import './Footer.css';

const columns = [
  {
    title: 'Topik',
    links: [
      { to: '/kabel-bawah-laut', label: 'Kabel Bawah Laut' },
      { to: '/bts', label: 'BTS & Jaringan Seluler' },
      { to: '/satelit', label: 'Satelit' },
      { to: '/internet-3t', label: 'Internet Daerah 3T' }
    ]
  },
  {
    title: 'Konteks',
    links: [
      { to: '/pengaruh-geografis', label: 'Pengaruh Geografis' }
    ]
  },
  {
    title: 'Referensi',
    links: [
      { href: 'https://www.komdigi.go.id', label: 'Kementerian Komdigi' },
      { href: 'https://baktikominfo.id', label: 'Bakti Komdigi' },
      { href: 'https://www.telkom.co.id', label: 'Telkom Indonesia' },
      { href: 'https://www.bps.go.id', label: 'Badan Pusat Statistik' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__stripe" aria-hidden="true" />
      <div className="footer__inner container">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <span className="footer__brand-text">Jaringan Telekomunikasi di Indonesia</span>
          </div>
          <p className="footer__brand-desc">
            Eksplorasi konektivitas antar wilayah Indonesia melalui kabel bawah laut, BTS,
            satelit, dan program perluasan internet ke daerah terdepan, terluar, dan tertinggal.
          </p>
        </div>

        <div className="footer__columns">
          {columns.map((col) => (
            <div key={col.title} className="footer__column">
              <h4 className="footer__column-title">{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© 2026 Tugas Geografi · Disusun untuk presentasi kelompok 6</span>
        <span className="footer__bottom-meta">
          Sumber data: Kominfo, BAKTI, BPS, Telkom, dan publikasi terkait.
        </span>
      </div>
    </footer>
  );
}
