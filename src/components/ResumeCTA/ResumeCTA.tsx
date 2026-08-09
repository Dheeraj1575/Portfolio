import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';

export default function ResumeCTA() {
  return (
    <section
      className="section-sm"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
          className="resume-cta-inner"
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '0.5rem',
              }}
            >
              // Resume
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
              }}
            >
              Want the Full Picture?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9375rem' }}>
              Download my resume for a complete overview of my skills, projects, and certifications.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0, flexWrap: 'wrap' }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="View resume in new tab"
            >
              <Eye size={16} />
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download="Margani_Dheeraj_Resume.pdf"
              className="btn btn-primary"
              aria-label="Download resume as PDF"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .resume-cta-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
