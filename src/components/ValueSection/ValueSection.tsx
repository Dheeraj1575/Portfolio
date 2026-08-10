import { motion } from 'framer-motion';
import { BookOpen, Layers, Cloud, GraduationCap } from 'lucide-react';
import { SectionLabel } from '../Common/SectionInterstitials';

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
    title: 'Full-Stack Engineering',
    items: ['React.js', 'Spring Boot', 'REST APIs', 'MySQL'],
    color: 'var(--cyan)',
  },
  {
    number: '03',
    icon: Cloud,
    title: 'Cloud Systems',
    items: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'Multicloud Networking'],
    color: '#a78bfa',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Continuous Rigor',
    items: ['Professional Certifications', 'NPTEL Courses', 'Coding Platforms', 'Hands-on Projects'],
    color: '#f59e0b',
  },
];

export default function ValueSection() {
  return (
    <section id="value" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionLabel id="07" title="VALUE PROPOSITION" />

        <div style={{ marginBottom: '4rem', maxWidth: '640px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            ENGINEERING
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CAPABILITIES
            </span>
          </motion.h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="value-grid"
        >
          {values.map((v, index) => (
            <motion.div
              key={v.number}
              className="card-glass"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ padding: '1.75rem', borderRadius: '16px' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                  marginBottom: '1rem',
                }}
              >
                SYS // {v.number}
              </div>

              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: `${v.color}15`,
                  border: `1px solid ${v.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
                aria-hidden="true"
              >
                <v.icon size={22} style={{ color: v.color }} />
              </div>

              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                }}
              >
                {v.title}
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
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
                    <span style={{ color: v.color, fontSize: '0.7rem' }} aria-hidden="true">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .value-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .value-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
