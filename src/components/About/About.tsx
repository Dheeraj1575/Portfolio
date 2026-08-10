import { motion } from 'framer-motion';
import { SectionLabel } from '../Common/SectionInterstitials';

const METADATA_BADGES = [
  { label: 'CSE', sub: 'KLU B.Tech', color: 'var(--accent)' },
  { label: '9.45 CGPA', sub: 'Academic Distinction', color: '#22c55e' },
  { label: 'FULL STACK', sub: 'React & Spring Boot', color: 'var(--cyan)' },
  { label: 'CLOUD', sub: 'AWS · Azure · GCP', color: '#a78bfa' },
];

const focuses = [
  'Software Engineering Architecture',
  'Full-Stack System Design',
  'Cloud & DevOps Fundamentals',
  'Scalable REST APIs',
  'Algorithmic Problem Solving',
];

export default function About() {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Label */}
        <SectionLabel id="01" title="ABOUT" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Large Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                marginBottom: '2rem',
                color: 'var(--text-primary)',
              }}
            >
              I BUILD WITH
              <br />
              <span style={{ color: 'var(--accent)' }}>CODE,</span>
              <br />
              <span style={{ color: 'var(--cyan)' }}>CLOUD,</span>
              <br />
              <span style={{ color: 'var(--text-secondary)' }}>AND CURIOSITY.</span>
            </h2>

            {/* Animated Floating Metadata Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.875rem',
                marginTop: '2rem',
              }}
            >
              {METADATA_BADGES.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-glass"
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    borderLeft: `3px solid ${badge.color}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {badge.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.125rem',
                    }}
                  >
                    {badge.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Supporting Information */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              <p style={{ marginBottom: '1.25rem' }}>
                I am a Computer Science &amp; Engineering student at{' '}
                <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  Koneru Lakshmaiah University
                </strong>{' '}
                with a <strong style={{ color: 'var(--accent)', fontWeight: 700 }}>9.45/10 CGPA</strong>,
                dedicated to mastering both system fundamentals and modern software delivery.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                My core computer science grounding includes Data Structures &amp; Algorithms, Object-Oriented Programming,
                Database Management Systems, Operating Systems, and Computer Networks. On the engineering front, I design
                end-to-end applications using React.js, Spring Boot, REST APIs, MySQL, and multi-cloud environments
                (AWS, Azure, Google Cloud).
              </p>
              <p>
                I approach software development as digital engineering — focusing on clean abstractions, maintainable
                architecture, and solutions designed for real-world reliability.
              </p>
            </div>

            {/* Current Engineering Focus */}
            <div className="card-glass" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '1rem',
                }}
              >
                // CORE ENGINEERING FOCUS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {focuses.map((f) => (
                  <span key={f} className="tag tag-accent">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
