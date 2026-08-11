import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { SectionLabel } from '../Common/SectionInterstitials';
import MagneticButton from '../Common/MagneticButton';

const ProjectVisualHemoHub = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ position: 'absolute', top: '12px', left: '16px', zIndex: 2 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        // LIVE SYSTEM ARCHITECTURE TRAFFIC
      </span>
    </div>

    <svg viewBox="0 0 460 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <pattern id="proj-grid1" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
        </pattern>
        <marker id="arr1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(59,130,246,0.8)" />
        </marker>
      </defs>
      <rect width="460" height="280" fill="url(#proj-grid1)" />

      {/* DONOR NODE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <rect x="24" y="95" width="80" height="90" rx="8" fill="#07080e" stroke="rgba(239,68,68,0.6)" strokeWidth="1.5" />
        <text x="64" y="130" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">DONOR</text>
        <text x="64" y="146" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Registration</text>
        <text x="64" y="160" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Blood Group</text>
      </motion.g>

      {/* Connection Line 1 */}
      <line x1="106" y1="140" x2="138" y2="140" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" markerEnd="url(#arr1)" />
      {/* Pulse 1 */}
      <motion.circle
        cx={106} cy={140} r={3} fill="#ef4444"
        animate={{ x: [0, 32], opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* HEMOHUB CORE NODE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <rect x="140" y="70" width="104" height="140" rx="10" fill="#07080e" stroke="rgba(59,130,246,0.7)" strokeWidth="1.5" />
        <text x="192" y="102" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="800">HEMOHUB</text>

        <rect x="150" y="112" width="84" height="20" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
        <text x="192" y="125" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Inventory Track</text>

        <rect x="150" y="136" width="84" height="20" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
        <text x="192" y="149" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Spring Boot API</text>

        <rect x="150" y="160" width="84" height="20" rx="4" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
        <text x="192" y="173" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontFamily="JetBrains Mono, monospace">MySQL Store</text>
      </motion.g>

      {/* Connection Line 2 */}
      <line x1="246" y1="140" x2="278" y2="140" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" markerEnd="url(#arr1)" />
      {/* Pulse 2 */}
      <motion.circle
        cx={246} cy={140} r={3} fill="#3b82f6"
        animate={{ x: [0, 32], opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />

      {/* REQUEST MANAGEMENT NODE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <rect x="280" y="95" width="76" height="90" rx="8" fill="#07080e" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5" />
        <text x="318" y="130" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">REQUEST</text>
        <text x="318" y="146" textAnchor="middle" fill="rgba(6,182,212,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Workflow</text>
        <text x="318" y="160" textAnchor="middle" fill="rgba(6,182,212,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Matching</text>
      </motion.g>

      {/* Connection Line 3 */}
      <line x1="358" y1="140" x2="378" y2="140" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" markerEnd="url(#arr1)" />
      {/* Pulse 3 */}
      <motion.circle
        cx={358} cy={140} r={3} fill="#06b6d4"
        animate={{ x: [0, 20], opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      {/* HOSPITAL NODE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <rect x="380" y="95" width="70" height="90" rx="8" fill="#07080e" stroke="rgba(34,197,94,0.6)" strokeWidth="1.5" />
        <text x="415" y="130" textAnchor="middle" fill="#22c55e" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">HOSPITAL</text>
        <text x="415" y="146" textAnchor="middle" fill="rgba(34,197,94,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Patient</text>
      </motion.g>

      {/* AWS Cloud Deployment Badge */}
      <rect x="140" y="226" width="180" height="24" rx="4" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
      <text x="230" y="242" textAnchor="middle" fill="#f59e0b" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">AWS CLOUD DEPLOYED</text>
    </svg>
  </div>
);

const ProjectVisualDisaster = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ position: 'absolute', top: '12px', left: '16px', zIndex: 2 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        // INCIDENT RESPONSE WORKFLOW
      </span>
    </div>

    <svg viewBox="0 0 460 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <defs>
        <pattern id="proj-grid2" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
        </pattern>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(6,182,212,0.8)" />
        </marker>
      </defs>
      <rect width="460" height="280" fill="url(#proj-grid2)" />

      {[
        { x: 12, label: 'INCIDENT', sub: 'Report', color: '#ef4444' },
        { x: 102, label: 'REPORT', sub: 'Submission', color: '#f59e0b' },
        { x: 192, label: 'AUTH', sub: 'Role Access', color: '#3b82f6' },
        { x: 282, label: 'RESOURCE', sub: 'Coordination', color: '#06b6d4' },
        { x: 372, label: 'RESPONSE', sub: 'Action Plan', color: '#22c55e' },
      ].map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
        >
          <rect x={node.x} y="95" width="76" height="90" rx="8" fill="#07080e" stroke={`${node.color}70`} strokeWidth="1.5" />
          <text x={node.x + 38} y="132" textAnchor="middle" fill={node.color} fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="800">{node.label}</text>
          <text x={node.x + 38} y="148" textAnchor="middle" fill={`${node.color}bb`} fontSize="7" fontFamily="JetBrains Mono, monospace">{node.sub}</text>
          {i < 4 && typeof node.x === 'number' && (
            <>
              <line x1={node.x + 78} y1="140" x2={node.x + 98} y2="140" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" markerEnd="url(#arr2)" />
              <motion.circle
                cx={node.x + 78} cy={140} r={2.5} fill={node.color}
                animate={{ x: [0, 20], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            </>
          )}
        </motion.g>
      ))}

      {/* Tech Stack Banner */}
      <rect x="12" y="218" width="436" height="30" rx="6" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
      {['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'Role Security'].map((t, idx) => (
        <text key={t} x={50 + idx * 88} y="237" textAnchor="middle" fill="#60a5fa" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">{t}</text>
      ))}
    </svg>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionLabel id="03" title="PROJECTS" />

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
            SYSTEM
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CASE STUDIES
            </span>
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {/* Project 01: HemoHub */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="card-glass"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              padding: 0,
            }}
          >
            <div
              className="project-card-grid"
            >
              {/* Staggered Content Panel */}
              <div className="project-content-panel">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--accent)',
                        letterSpacing: '0.2em',
                      }}
                    >
                      01 / PROJECT
                    </span>
                    <span className="tag tag-accent" style={{ fontSize: '0.7rem' }}>
                      AWS / REACT / SPRING BOOT / MYSQL
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.03em',
                      marginBottom: '0.5rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    HEMOHUB
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--cyan)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    ONLINE BLOOD BANK SYSTEM
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}
                  >
                    {projects[0].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}
                  >
                    {projects[0].tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Link to="/projects/hemohub" style={{ textDecoration: 'none' }}>
                    <MagneticButton className="btn btn-primary" style={{ borderRadius: '100px', padding: '0.65rem 1.5rem' }}>
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight size={16} />
                    </MagneticButton>
                  </Link>
                </motion.div>
              </div>

              {/* Architecture Visual Panel */}
              <div
                className="project-visual project-visual-panel"
                style={{
                  borderLeft: '1px solid var(--border)',
                  background: 'rgba(7, 8, 14, 0.85)',
                }}
              >
                <ProjectVisualHemoHub />
              </div>
            </div>
          </motion.div>

          {/* Project 02: Disaster Management System */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="card-glass"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              padding: 0,
            }}
          >
            <div
              className="project-card-grid"
            >
              {/* Architecture Visual Panel */}
              <div
                className="project-visual project-visual-panel project-visual-reverse"
                style={{
                  borderRight: '1px solid var(--border)',
                  background: 'rgba(7, 8, 14, 0.85)',
                }}
              >
                <ProjectVisualDisaster />
              </div>

              {/* Content Panel */}
              <div className="project-content-panel">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: 'var(--cyan)',
                        letterSpacing: '0.2em',
                      }}
                    >
                      02 / PROJECT
                    </span>
                    <span className="tag" style={{ fontSize: '0.7rem', borderColor: 'var(--cyan-light)', color: 'var(--cyan)', background: 'var(--cyan-light)' }}>
                      REACT / SPRING BOOT / MYSQL
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.03em',
                      marginBottom: '0.5rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    DISASTER MANAGEMENT
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--cyan)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    INCIDENT REPORTING &amp; RESOURCE COORDINATION
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}
                  >
                    {projects[1].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}
                  >
                    {projects[1].tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Link to="/projects/disaster-management" style={{ textDecoration: 'none' }}>
                    <MagneticButton className="btn btn-secondary" style={{ borderRadius: '100px', padding: '0.65rem 1.5rem' }}>
                      <span>EXPLORE CASE STUDY</span>
                      <ArrowRight size={16} />
                    </MagneticButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
