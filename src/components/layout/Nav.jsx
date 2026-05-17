import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../ui/Button';
import './Nav.css';

const links = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/kabel-bawah-laut', label: 'Kabel Bawah Laut' },
  { to: '/bts', label: 'BTS & Jaringan' },
  { to: '/satelit', label: 'Satelit' },
  { to: '/internet-3t', label: 'Internet 3T' },
  { to: '/pengaruh-geografis', label: 'Pengaruh Geografis' }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`.trim()}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" onClick={close} aria-label="Beranda" />


        <button
          type="button"
          className="nav__toggle"
          aria-label="Buka menu"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

        <nav
          id="primary-menu"
          className={`nav__menu ${open ? 'nav__menu--open' : ''}`.trim()}
          aria-label="Navigasi utama"
        >
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={close}
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`.trim()
                  }
                >
                  <span className="nav__link-text">{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav__cta">
            <Button to="/kabel-bawah-laut" variant="primary">
              Mulai Eksplorasi
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
