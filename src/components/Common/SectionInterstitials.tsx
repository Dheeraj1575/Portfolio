import { motion } from 'framer-motion';

interface SectionLabelProps {
  id: string; // e.g. "01"
  title: string; // e.g. "ABOUT"
}

export function SectionLabel({ id, title }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="system-label"
    >
      <span className="system-label-dot" />
      <span>{id} / {title}</span>
    </motion.div>
  );
}

interface EditorialInterstitialProps {
  phraseLine1: string;
  phraseLine2?: string;
  phraseLine3?: string;
}

export function EditorialInterstitial({ phraseLine1, phraseLine2, phraseLine3 }: EditorialInterstitialProps) {
  return (
    <section className="editorial-interstitial" aria-hidden="true">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-giant-text"
        >
          <div>{phraseLine1}</div>
          {phraseLine2 && <div>{phraseLine2}</div>}
          {phraseLine3 && <div>{phraseLine3}</div>}
        </motion.div>
      </div>
    </section>
  );
}
