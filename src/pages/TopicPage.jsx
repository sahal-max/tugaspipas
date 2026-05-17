import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContentSection from '../components/sections/ContentSection';
import TopicVisual from '../components/sections/TopicVisuals';
import { pages } from '../data/content';
import './TopicPage.css';

const ACCENT_BY_SLUG = {
  'kabel-bawah-laut': 'blue',
  'bts': 'green',
  'satelit': 'yellow',
  'internet-3t': 'red',
  'pengaruh-geografis': 'blue'
};

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 }
  }
};

const heroChild = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function TopicPage({ slug }) {
  const page = pages[slug];
  if (!page) return null;

  const accent = ACCENT_BY_SLUG[slug] || 'blue';
  const totalSections = page.sections.length;

  return (
    <article className={`topic-page topic-page--${accent}`}>
      <header className="topic-page__hero">
        <div className="topic-page__hero-bg" aria-hidden="true">
          <div className="topic-page__hero-grid" />
          <div className="topic-page__hero-glow" />
        </div>

        <motion.div
          className="container topic-page__hero-inner"
          initial="hidden"
          animate="visible"
          variants={heroContainer}
        >
          <motion.nav className="topic-page__breadcrumb" variants={heroChild} aria-label="Breadcrumb">
            <Link to="/" className="topic-page__breadcrumb-link">Beranda</Link>
            <span className="topic-page__breadcrumb-sep" aria-hidden="true">/</span>
            <span className="topic-page__breadcrumb-current">{page.eyebrow}</span>
          </motion.nav>

          <motion.h1 className="topic-page__title" variants={heroChild}>
            {page.title}
          </motion.h1>

          <motion.p className="topic-page__lede" variants={heroChild}>
            {page.lede}
          </motion.p>

          <motion.div
            className="topic-page__meta"
            variants={heroChild}
            aria-hidden="true"
          >
            <span className="topic-page__meta-item">
              <span className="topic-page__meta-dot" />
              <span>{totalSections} bagian</span>
            </span>
            <span className="topic-page__meta-divider" />
            <span className="topic-page__meta-item">
              <span>{page.sources.length} sumber</span>
            </span>
          </motion.div>

          <motion.div className="topic-page__visual" variants={heroChild}>
            <TopicVisual slug={slug} />
          </motion.div>
        </motion.div>
      </header>

      {page.sections.map((section, i) => (
        <ContentSection key={i} section={section} index={i} />
      ))}

      <motion.section
        className="topic-page__sources"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <div className="topic-page__sources-header">
            <span className="topic-page__sources-label">Referensi</span>
            <h2 className="topic-page__sources-title">Sumber Data</h2>
            <p className="topic-page__sources-note">
              Data dirangkum dari laporan resmi dan publikasi terbuka.
            </p>
          </div>
          <ul className="topic-page__sources-list">
            {page.sources.map((s, i) => (
              <li key={i}>
                <span className="topic-page__sources-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="topic-page__sources-text">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </article>
  );
}
