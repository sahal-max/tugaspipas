import { useEffect, useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommandPalette.css';

const ROUTES = [
  { to: '/', label: 'Beranda', desc: 'Halaman utama', kbd: 'B' },
  { to: '/kabel-bawah-laut', label: 'Kabel Bawah Laut', desc: 'Backbone fiber optic antar pulau', kbd: 'K' },
  { to: '/bts', label: 'BTS & Jaringan Seluler', desc: 'Tower seluler dan akses pengguna', kbd: 'T' },
  { to: '/satelit', label: 'Satelit', desc: 'Konektivitas dari orbit', kbd: 'S' },
  { to: '/internet-3t', label: 'Internet Daerah 3T', desc: 'Tertinggal · Terdepan · Terluar', kbd: '3' },
  { to: '/pengaruh-geografis', label: 'Pengaruh Geografis', desc: 'Geografi membentuk infrastruktur', kbd: 'G' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => {
      const isMac = navigator.platform.toLowerCase().includes('mac');
      const cmd = isMac ? e.metaKey : e.ctrlKey;
      if (cmd && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ROUTES;
    return ROUTES.filter(
      (r) => r.label.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => { setActive(0); }, [query]);

  const go = (idx) => {
    const item = filtered[idx];
    if (!item) return;
    setOpen(false);
    navigate(item.to);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(filtered.length - 1, a + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(active);
    }
  };

  if (!open) return null;

  return (
    <div className="cmdk" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="cmdk__backdrop" onClick={() => setOpen(false)} />
      <div className="cmdk__panel" role="combobox" aria-expanded="true" aria-haspopup="listbox">
        <div className="cmdk__input-row">
          <svg className="cmdk__icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            className="cmdk__input"
            type="text"
            placeholder="Cari halaman atau topik…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            aria-controls="cmdk-list"
            aria-activedescendant={`cmdk-item-${active}`}
            autoComplete="off"
          />
          <kbd className="cmdk__kbd">esc</kbd>
        </div>
        <ul className="cmdk__list" id="cmdk-list" role="listbox">
          {filtered.length === 0 ? (
            <li className="cmdk__empty">Tidak ditemukan</li>
          ) : (
            filtered.map((r, i) => (
              <li
                key={r.to}
                id={`cmdk-item-${i}`}
                role="option"
                aria-selected={i === active}
                className={`cmdk__item ${i === active ? 'cmdk__item--active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(i)}
              >
                <span className="cmdk__item-dot" aria-hidden="true" />
                <div className="cmdk__item-text">
                  <span className="cmdk__item-label">{r.label}</span>
                  <span className="cmdk__item-desc">{r.desc}</span>
                </div>
                <kbd className="cmdk__kbd cmdk__kbd--small">{r.kbd}</kbd>
              </li>
            ))
          )}
        </ul>
        <div className="cmdk__footer">
          <span><kbd className="cmdk__kbd cmdk__kbd--small">↑</kbd><kbd className="cmdk__kbd cmdk__kbd--small">↓</kbd> navigasi</span>
          <span><kbd className="cmdk__kbd cmdk__kbd--small">↵</kbd> pilih</span>
          <span className="cmdk__hint">⌘K untuk buka</span>
        </div>
      </div>
    </div>
  );
}
