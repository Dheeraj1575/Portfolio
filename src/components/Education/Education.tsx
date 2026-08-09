import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';
import { education } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="section-label">Education</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Academic
            <span style={{ color: 'var(--accent)' }}> Background</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="education-layout"
        >
          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div className="timeline-line" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{
                  position: 'relative',
                  marginBottom: index < education.length - 1 ? '2.5rem' : 0,
                }}
              >
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    left: '-2.3125rem',
                    top: '0.25rem',
                    background: edu.status === 'current' ? 'var(--accent)' : 'var(--bg-elevated)',
                    border: edu.status === 'current' ? '2px solid var(--bg-primary)' : '2px solid var(--border-strong)',
                    boxShadow: edu.status === 'current' ? '0 0 0 3px var(--accent-light)' : 'none',
                  }}
                  aria-hidden="true"
                />

                <div>
                  {/* Period + Status */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {edu.period}
                    </span>
                    {edu.status === 'current' && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#22c55e',
                          padding: '0.15rem 0.5rem',
                          background: 'rgba(34,197,94,0.1)',
                          border: '1px solid rgba(34,197,94,0.3)',
                          borderRadius: '100px',
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      marginBottom: '0.25rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {edu.institution}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {edu.degree}
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {edu.score && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <Award size={13} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            color: 'var(--accent)',
                          }}
                        >
                          {edu.scoreLabel}: {edu.score}
                        </span>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <MapPin size={12} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
              }}
            >
              // Academic Highlights
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {/* CGPA */}
              <div
                className="card card-accent"
                style={{ padding: '1.5rem', textAlign: 'center' }}
              >
                <div
                  style={{
                    fontSize: '2.75rem',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}
                >
                  9.45
                </div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.25rem',
                  }}
                >
                  out of 10 CGPA
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  B.Tech Computer Science & Engineering
                </div>
              </div>

              {/* Intermediate */}
              <div
                className="card"
                style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Intermediate
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Sri Chaitanya Junior College
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    932
                  </div>
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    / 1000 marks
                  </div>
                </div>
              </div>
            </div>

            {/* Core subjects */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.875rem',
                }}
              >
                // Core Subjects
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {education[0].highlights?.map((h) => (
                  <span key={h} className="tag">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .education-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
