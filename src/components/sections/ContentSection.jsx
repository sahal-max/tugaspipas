import { motion } from 'framer-motion';
import Card, { CardTitle, CardBody } from '../ui/Card';
import './ContentSection.css';

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.09,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const calloutVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

const VIEWPORT = { once: true, margin: '-60px' };

export default function ContentSection({ section, index = 0 }) {
  if (section.kind === 'callout') {
    return (
      <motion.section
        className="content-section content-section--callout"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <motion.div variants={calloutVariants}>
            <Card variant="elevated" className="callout">
              <span className="callout__label">Konsep Geografi</span>
              <h3 className="callout__heading">{section.heading}</h3>
              <p className="callout__body">{section.body}</p>
              <span className="callout__accent" aria-hidden="true" />
            </Card>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="content-section"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <div className="container">
        <header className="content-section__header">
          <motion.span
            className="content-section__index"
            variants={headerVariants}
            custom={0}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>
          <motion.h2
            className="content-section__heading"
            variants={headerVariants}
            custom={1}
          >
            {section.heading}
          </motion.h2>
          {section.body && (
            <motion.p
              className="content-section__lede"
              variants={headerVariants}
              custom={2}
            >
              {section.body}
            </motion.p>
          )}
        </header>

        <div className="content-section__grid">
          {section.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              custom={i}
              className="content-section__card-wrap"
            >
              <Card variant="dark" className="content-section__card">
                <span className="content-section__card-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <CardTitle>{card.title}</CardTitle>
                <CardBody>{card.body}</CardBody>
                <span className="content-section__card-bar" aria-hidden="true" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
