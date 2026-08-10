import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, Award, GraduationCap } from 'lucide-react';
import { education } from '../../data/education';
import { SectionLabel } from '../Common/SectionInterstitials';

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 25 });

  return (
    <section id="education" className="section" style={{ position: 'relative' }} ref={containerRef}>
      <div className="container">
        <SectionLabel id="05" title="EDUCATION" />

        <div style={{ marginBottom: '4rem', maxWidth: '640px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
            }}
          >
            ACADEMIC
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              TIMELINE
            </span>
          </motion.h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="education-layout"
        >
          {/* Animated Timeline Stream */}
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Background Line Track */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'var(--border)',
              }}
            />

            {/* Scroll Progress Beam */}
            <motion.div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent) 0%, var(--cyan) 100%)',
                scaleY: lineScaleY,
                transformOrigin: 'top',
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
              }}
            />

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'relative',
                  marginBottom: index < education.length - 1 ? '3rem' : 0,
                }}
              >
                {/* Active Node Pulse Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.375rem',
                    top: '0.25rem',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: edu.status === 'current' ? 'var(--accent)' : 'var(--bg-elevated)',
                    border: edu.status === 'current' ? '2px solid #fff' : '2px solid var(--border-strong)',
                    boxShadow: edu.status === 'current' ? '0 0 14px var(--accent)' : 'none',
                  }}
                  aria-hidden="true"
                >
                  {edu.status === 'current' && (
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        position: 'absolute',
                        inset: '-2px',
                        borderRadius: '50%',
                        border: '1.5px solid var(--accent)',
                      }}
                    />
                  )}
                </div>

                <div className="card-glass" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.625rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {edu.period}
                    </span>
                    {edu.status === 'current' && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          fontWeight: 800,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#22c55e',
                          padding: '0.2rem 0.625rem',
                          background: 'rgba(34,197,94,0.12)',
                          border: '1px solid rgba(34,197,94,0.3)',
                          borderRadius: '100px',
                        }}
                      >
                        CURRENT
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 800,
                      marginBottom: '0.25rem',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {edu.institution}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.875rem',
                    }}
                  >
                    {edu.degree}
                  </p>

                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {edu.score && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <Award size={14} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8125rem',
                            fontWeight: 700,
                            color: 'var(--accent)',
                          }}
                        >
                          {edu.scoreLabel}: {edu.score}
                        </span>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <MapPin size={13} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
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
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div className="card-glass" style={{ padding: '2rem', textAlign: 'center', borderRadius: '20px', borderTop: '3px solid var(--accent)' }}>
              <GraduationCap size={32} style={{ color: 'var(--accent)', margin: '0 auto 0.75rem' }} />
              <div
                style={{
                  fontSize: '3.25rem',
                  fontWeight: 900,
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
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '0.5rem',
                }}
              >
                OUT OF 10 CGPA
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                B.Tech Computer Science &amp; Engineering
                <br />
                Koneru Lakshmaiah University
              </div>
            </div>

            <div className="card-glass" style={{ padding: '1.5rem', borderRadius: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Intermediate MPC
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Sri Chaitanya Junior College
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      color: 'var(--cyan)',
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
                    / 1000 MARKS
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .education-layout {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
