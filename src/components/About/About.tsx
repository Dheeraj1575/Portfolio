import { motion } from 'framer-motion';

const focuses = [
  'Software Engineering',
  'Full-Stack Development',
  'Cloud Computing',
  'Scalable Applications',
  'Problem Solving',
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About</p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
              }}
            >
              A CS Student
              <br />
              <span style={{ color: 'var(--accent)' }}>Building Real Things.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ lineHeight: 1.75, fontSize: '0.9375rem' }}>
                I'm a Computer Science and Engineering student at{' '}
                <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  Koneru Lakshmaiah University
                </strong>{' '}
                (B.Tech, CGPA 9.45/10), building full-stack applications and learning cloud
                infrastructure through hands-on projects and professional certifications.
              </p>
              <p style={{ lineHeight: 1.75, fontSize: '0.9375rem' }}>
                My technical foundation spans Data Structures and Algorithms, OOP, DBMS, Operating
                Systems, and Computer Networks — paired with practical experience in React.js,
                Spring Boot, REST APIs, MySQL, and cloud platforms including AWS, Azure, and GCP.
              </p>
              <p style={{ lineHeight: 1.75, fontSize: '0.9375rem' }}>
                I approach problems methodically — understanding the domain, designing a clean
                architecture, and implementing solutions that are maintainable and purposeful.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Current Focus */}
            <div
              className="card"
              style={{ marginBottom: '1.5rem' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '1rem',
                }}
              >
                // Current Focus
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {focuses.map((focus) => (
                  <span key={focus} className="tag tag-accent">
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="card">
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                // Quick Facts
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  { label: 'University', value: 'Koneru Lakshmaiah University' },
                  { label: 'Degree', value: 'B.Tech — Computer Science & Engineering' },
                  { label: 'CGPA', value: '9.45 / 10' },
                  { label: 'Location', value: 'Vijayawada, Andhra Pradesh' },
                  { label: 'Status', value: 'Open to Opportunities' },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '1rem',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        flexShrink: 0,
                      }}
                    >
                      {fact.label}
                    </span>
                    <span
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        color: fact.label === 'CGPA' || fact.label === 'Status' ? 'var(--accent)' : 'var(--text-primary)',
                        textAlign: 'right',
                      }}
                    >
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
