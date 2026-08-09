import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const ProjectVisualHemoHub = () => (
  <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
    <defs>
      <pattern id="proj-grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="420" height="280" fill="url(#proj-grid)" />

    {/* Donor */}
    <rect x="30" y="100" width="90" height="80" rx="8" fill="rgba(15,17,23,1)" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" />
    <text x="75" y="132" textAnchor="middle" fill="rgba(239,68,68,0.9)" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">DONOR</text>
    <text x="75" y="148" textAnchor="middle" fill="rgba(239,68,68,0.6)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Registration</text>
    <text x="75" y="162" textAnchor="middle" fill="rgba(239,68,68,0.6)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Blood Type</text>

    {/* Arrow 1 */}
    <line x1="122" y1="140" x2="158" y2="140" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" markerEnd="url(#arr)" />
    <defs>
      <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="rgba(59,130,246,0.7)" />
      </marker>
    </defs>

    {/* HemoHub Core */}
    <rect x="158" y="70" width="104" height="140" rx="10" fill="rgba(15,17,23,1)" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" />
    <text x="210" y="110" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">HemoHub</text>
    <rect x="172" y="118" width="76" height="18" rx="4" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
    <text x="210" y="131" textAnchor="middle" fill="rgba(59,130,246,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Inventory Track</text>
    <rect x="172" y="140" width="76" height="18" rx="4" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
    <text x="210" y="153" textAnchor="middle" fill="rgba(59,130,246,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">REST API</text>
    <rect x="172" y="162" width="76" height="18" rx="4" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
    <text x="210" y="175" textAnchor="middle" fill="rgba(59,130,246,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">MySQL DB</text>

    {/* Arrow 2 */}
    <line x1="264" y1="140" x2="298" y2="140" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" markerEnd="url(#arr)" />

    {/* Hospital/Patient */}
    <rect x="300" y="100" width="90" height="80" rx="8" fill="rgba(15,17,23,1)" stroke="rgba(34,197,94,0.4)" strokeWidth="1.5" />
    <text x="345" y="132" textAnchor="middle" fill="rgba(34,197,94,0.9)" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">HOSPITAL</text>
    <text x="345" y="148" textAnchor="middle" fill="rgba(34,197,94,0.6)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Requests</text>
    <text x="345" y="162" textAnchor="middle" fill="rgba(34,197,94,0.6)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Patient Care</text>

    {/* AWS Badge */}
    <rect x="158" y="228" width="104" height="22" rx="4" fill="rgba(255,153,0,0.08)" stroke="rgba(255,153,0,0.3)" strokeWidth="1" />
    <text x="210" y="243" textAnchor="middle" fill="rgba(255,153,0,0.8)" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Deployed on AWS</text>
  </svg>
);

const ProjectVisualDisaster = () => (
  <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
    <defs>
      <pattern id="proj-grid2" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
      </pattern>
      <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="rgba(59,130,246,0.7)" />
      </marker>
    </defs>
    <rect width="420" height="280" fill="url(#proj-grid2)" />

    {/* Flow nodes */}
    {[
      { x: 20, label: 'INCIDENT', sub: 'Report', color: 'rgba(239,68,68,0.8)', border: 'rgba(239,68,68,0.4)' },
      { x: 116, label: 'AUTH', sub: 'RBAC', color: 'rgba(59,130,246,0.8)', border: 'rgba(59,130,246,0.4)' },
      { x: 212, label: 'SYSTEM', sub: 'Records', color: 'rgba(6,182,212,0.8)', border: 'rgba(6,182,212,0.4)' },
      { x: 308, label: 'RESOURCE', sub: 'Manage', color: 'rgba(34,197,94,0.8)', border: 'rgba(34,197,94,0.4)' },
    ].map((node, i) => (
      <g key={i}>
        <rect x={node.x} y="95" width="84" height="90" rx="8" fill="rgba(15,17,23,1)" stroke={node.border} strokeWidth="1.5" />
        <text x={node.x + 42} y="132" textAnchor="middle" fill={node.color} fontSize="8.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">{node.label}</text>
        <text x={node.x + 42} y="148" textAnchor="middle" fill={node.color.replace('0.8', '0.5')} fontSize="7.5" fontFamily="JetBrains Mono, monospace">{node.sub}</text>
        {i < 3 && (
          <line x1={node.x + 86} y1="140" x2={node.x + 112} y2="140" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" markerEnd="url(#arr2)" />
        )}
      </g>
    ))}

    {/* Tech stack bar */}
    <rect x="20" y="218" width="380" height="32" rx="6" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
    {['React.js', 'Spring Boot', 'MySQL', 'REST API', 'Git'].map((tech, i) => (
      <text key={tech} x={46 + i * 76} y="238" textAnchor="middle" fill="rgba(59,130,246,0.6)" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fontWeight="500">{tech}</text>
    ))}
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="section-label">Featured Projects</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            What I've
            <span style={{ color: 'var(--accent)' }}> Built</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Project 01 - HemoHub - Large featured layout */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="card"
            style={{
              padding: '0',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '380px',
              }}
              className="project-card-grid"
            >
              {/* Content */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        letterSpacing: '0.15em',
                      }}
                    >
                      PROJECT 01
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {projects[0].date}
                    </span>
                    <span className="tag tag-accent" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                      {projects[0].category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {projects[0].name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '1rem',
                    }}
                  >
                    {projects[0].tagline}
                  </p>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    {projects[0].description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
                    {projects[0].tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Link
                    to="/projects/hemohub"
                    className="btn btn-primary"
                    style={{ fontSize: '0.8125rem', padding: '0.5625rem 1.25rem' }}
                  >
                    Case Study
                    <ArrowRight size={14} />
                  </Link>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Project link coming soon
                  </span>
                </div>
              </div>

              {/* Visual */}
              <div
                className="project-visual"
                style={{
                  background: 'var(--bg-tertiary)',
                  borderLeft: '1px solid var(--border)',
                  borderRadius: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  minHeight: '280px',
                }}
              >
                <ProjectVisualHemoHub />
              </div>
            </div>
          </motion.div>

          {/* Project 02 - Disaster Management */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
            style={{
              padding: '0',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '320px',
              }}
              className="project-card-grid"
            >
              {/* Visual first (reversed) */}
              <div
                className="project-visual project-visual-reverse"
                style={{
                  background: 'var(--bg-tertiary)',
                  borderRight: '1px solid var(--border)',
                  borderRadius: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  minHeight: '240px',
                }}
              >
                <ProjectVisualDisaster />
              </div>

              {/* Content */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--cyan)',
                        letterSpacing: '0.15em',
                      }}
                    >
                      PROJECT 02
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {projects[1].date}
                    </span>
                    <span className="tag" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderColor: 'var(--cyan-light)', color: 'var(--cyan)', background: 'var(--cyan-light)' }}>
                      {projects[1].category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {projects[1].name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '1rem',
                    }}
                  >
                    {projects[1].tagline}
                  </p>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    {projects[1].description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
                    {projects[1].tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Link
                    to="/projects/disaster-management"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8125rem', padding: '0.5625rem 1.25rem' }}
                  >
                    Case Study
                    <ArrowRight size={14} />
                  </Link>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    Project link coming soon
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card-grid {
            grid-template-columns: 1fr !important;
          }
          .project-card-grid > div:first-child {
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .project-visual-reverse {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
