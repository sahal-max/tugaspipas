import { motion } from 'framer-motion';
import Card, { CardEyebrow, CardTitle, CardBody, CardFooter } from '../ui/Card';
import { topics } from '../../data/content';
import './TopicGrid.css';

function handleCardMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.07,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function TopicGrid() {
  const featured = topics[0];
  const rest = topics.slice(1);

  return (
    <section className="topic-grid" aria-labelledby="topics-title">
      <div className="container">
        <motion.header
          className="topic-grid__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div className="topic-grid__eyebrow" variants={headerVariants} custom={0}>
            <span className="topic-grid__eyebrow-line" aria-hidden="true" />
            <span>Lima Topik Utama</span>
          </motion.div>

          <motion.h2
            id="topics-title"
            className="topic-grid__title"
            variants={headerVariants}
            custom={1}
          >
            Lima lapis infrastruktur yang
            <span className="topic-grid__title-accent"> menjahit nusantara</span>
          </motion.h2>

          <motion.p className="topic-grid__lede" variants={headerVariants} custom={2}>
            Setiap lapis bekerja saling melengkapi. Kabel laut membawa kapasitas
            terbesar, BTS menyebarkan sinyal ke pengguna, satelit menutup celah
            yang tak terjangkau keduanya.
          </motion.p>

          <motion.div
            className="topic-grid__meta"
            variants={headerVariants}
            custom={3}
            aria-hidden="true"
          >
            <span className="topic-grid__meta-item">
              <span className="topic-grid__meta-num">05</span>
              <span className="topic-grid__meta-label">Pilar</span>
            </span>
            <span className="topic-grid__meta-divider" />
            <span className="topic-grid__meta-item">
              <span className="topic-grid__meta-num">17K+</span>
              <span className="topic-grid__meta-label">Pulau</span>
            </span>
            <span className="topic-grid__meta-divider" />
            <span className="topic-grid__meta-item">
              <span className="topic-grid__meta-num">514</span>
              <span className="topic-grid__meta-label">Kab/Kota</span>
            </span>
          </motion.div>
        </motion.header>

        <div className="topic-grid__layout">
          <motion.div
            className="topic-grid__featured"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={cardVariants}
            custom={0}
            onMouseMove={handleCardMove}
          >
            <Card
              to={featured.to}
              variant="dark"
              className={`topic-card topic-card--featured topic-card--${featured.accent}`}
            >
              <div className="topic-card__index" aria-hidden="true">
                {featured.eyebrow.split('·')[0].trim()}
              </div>
              <CardEyebrow>{featured.eyebrow}</CardEyebrow>
              <CardTitle>{featured.title}</CardTitle>
              <CardBody>{featured.summary}</CardBody>
              <CardFooter>
                <span className="topic-card__cta">
                  Pelajari pilar ini
                  <span className="topic-card__cta-arrow" aria-hidden="true">→</span>
                </span>
              </CardFooter>
              <span className="topic-card__shine" aria-hidden="true" />
            </Card>
          </motion.div>

          <motion.div
            className="topic-grid__list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {rest.map((t, i) => (
              <motion.div
                key={t.id}
                variants={cardVariants}
                custom={i + 1}
                className="topic-grid__list-item"
                onMouseMove={handleCardMove}
              >
                <Card
                  to={t.to}
                  variant="dark"
                  className={`topic-card topic-card--${t.accent}`}
                >
                  <div className="topic-card__index" aria-hidden="true">
                    {t.eyebrow.split('·')[0].trim()}
                  </div>
                  <CardEyebrow>{t.eyebrow}</CardEyebrow>
                  <CardTitle>{t.title}</CardTitle>
                  <CardBody>{t.summary}</CardBody>
                  <CardFooter>
                    <span className="topic-card__cta">
                      Pelajari
                      <span className="topic-card__cta-arrow" aria-hidden="true">→</span>
                    </span>
                  </CardFooter>
                  <span className="topic-card__shine" aria-hidden="true" />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
