import { motion } from 'framer-motion';
import { BookOpen, Layers, Cloud, GraduationCap } from 'lucide-react';

const values = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Strong CS Foundation',
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
    color: 'var(--accent)',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Full-Stack Development',
    items: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL'],
    color: 'var(--cyan)',
  },
  {
    number: '03',
    icon: Cloud,
    title: 'Cloud Knowledge',
    items: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'Multicloud Networking'],
    color: '#a78bfa',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Continuous Learning',
    items: ['Professional Certifications', 'NPTEL Courses', 'Coding Platforms', 'Hands-on Projects'],
    color: '#f59e0b',
  },
];

export default function ValueSection() {
  return (
    <section id="value" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', maxWidth: '600px' }}
        >
          <p className="section-label">What I Bring</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            What I Bring
            <span style={{ color: 'var(--accent)' }}> to the Table</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}
          className="value-grid"
        >
          {values.map((v, index) => (
            <motion.div
              key={v.number}
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ padding: '1.75rem' }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'var(--text-subtle)',
                  marginBottom: '1rem',
                }}
              >
                {v.number}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: `${v.color}14`,
                  border: `1px solid ${v.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
                aria-hidden="true"
              >
                <v.icon size={20} style={{ color: v.color }} />
              </div>

              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                }}
              >
                {v.title}
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {v.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: v.color, fontSize: '0.6rem' }} aria-hidden="true">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .value-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .value-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
