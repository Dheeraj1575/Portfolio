import { motion } from 'framer-motion';

const stats = [
  { value: '9.45', unit: '/ 10', label: 'CGPA', sublabel: 'B.Tech CSE' },
  { value: '8+', unit: '', label: 'Certifications', sublabel: 'AWS · Azure · MongoDB+' },
  { value: '2', unit: '', label: 'Projects', sublabel: 'Full-Stack Applications' },
  { value: 'Multi', unit: '', label: 'Cloud', sublabel: 'AWS · Azure · GCP' },
];

export default function Credibility() {
  return (
    <section
      className="section-sm"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
      aria-label="Key credentials overview"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
          }}
          className="credibility-grid"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: '2rem 1.5rem',
                borderRight: index < stats.length - 1 ? '1px solid var(--border)' : 'none',
                textAlign: 'center',
              }}
              className="credibility-item"
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.125rem', marginBottom: '0.25rem' }}>
                <span
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                {stat.unit && (
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {stat.unit}
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '0.25rem',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .credibility-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .credibility-item:nth-child(2) {
            border-right: none !important;
          }
          .credibility-item:nth-child(1),
          .credibility-item:nth-child(2) {
            border-bottom: 1px solid var(--border) !important;
          }
        }
        @media (max-width: 480px) {
          .credibility-item { padding: 1.25rem 1rem !important; }
        }
      `}</style>
    </section>
  );
}
