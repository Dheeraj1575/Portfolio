import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import MagneticButton from '../Common/MagneticButton';

export default function ResumeCTA() {
  return (
    <section
      className="section-sm"
      style={{
        position: 'relative',
        background: 'rgba(13, 15, 24, 0.6)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                fontSize: '0.725rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '0.5rem',
              }}
            >
              // RESUME SPECIFICATION
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
              }}
            >
              Want the Full Technical Spec?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '1rem' }}>
              Download my resume for a comprehensive summary of full-stack engineering skills, cloud certifications, and academic achievements.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.875rem', flexShrink: 0, flexWrap: 'wrap' }}>
            <MagneticButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="View resume in new tab"
              style={{ borderRadius: '100px', padding: '0.75rem 1.5rem' }}
            >
              <Eye size={16} />
              <span>View Resume</span>
            </MagneticButton>

            <MagneticButton
              href="/resume.pdf"
              download="Margani_Dheeraj_Resume.pdf"
              className="btn btn-primary btn-download"
              aria-label="Download resume as PDF"
              style={{ borderRadius: '100px', padding: '0.75rem 1.5rem' }}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .resume-cta-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
