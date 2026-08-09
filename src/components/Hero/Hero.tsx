import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Link2 } from 'lucide-react';

const HeroVisual = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', opacity: 0.9 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.08)" strokeWidth="1" />
        </pattern>
        <radialGradient id="glow-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <marker id="hero-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(59,130,246,0.5)" />
        </marker>
      </defs>

      <rect width="480" height="480" fill="url(#hero-grid)" />
      <ellipse cx="240" cy="240" rx="200" ry="200" fill="url(#glow-center)" />

      {/* Connection lines */}
      <line x1="240" y1="240" x2="120" y2="140" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
      <line x1="240" y1="240" x2="360" y2="140" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
      <line x1="240" y1="240" x2="100" y2="300" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      <line x1="240" y1="240" x2="380" y2="300" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
      <line x1="240" y1="240" x2="240" y2="100" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
      <line x1="240" y1="240" x2="160" y2="380" stroke="rgba(6,182,212,0.12)" strokeWidth="1" />
      <line x1="240" y1="240" x2="320" y2="380" stroke="rgba(6,182,212,0.12)" strokeWidth="1" />
      <line x1="120" y1="140" x2="360" y2="140" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
      <line x1="100" y1="300" x2="380" y2="300" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />

      {/* Orbit rings */}
      <circle cx="240" cy="240" r="160" stroke="rgba(59,130,246,0.08)" strokeWidth="1" strokeDasharray="4 8" />
      <circle cx="240" cy="240" r="110" stroke="rgba(6,182,212,0.08)" strokeWidth="1" strokeDasharray="2 6" />

      {/* Central node */}
      <circle cx="240" cy="240" r="28" fill="rgba(9,9,15,1)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
      <circle cx="240" cy="240" r="20" fill="rgba(59,130,246,0.1)" />
      <text x="240" y="245" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="14" fontFamily="JetBrains Mono, monospace" fontWeight="600">{'</>'}</text>

      {/* AWS Node */}
      <circle cx="120" cy="140" r="22" fill="rgba(9,9,15,1)" stroke="rgba(255,153,0,0.5)" strokeWidth="1.5" />
      <text x="120" y="145" textAnchor="middle" fill="rgba(255,153,0,0.9)" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="600">AWS</text>

      {/* React Node */}
      <circle cx="360" cy="140" r="22" fill="rgba(9,9,15,1)" stroke="rgba(97,218,251,0.5)" strokeWidth="1.5" />
      <text x="360" y="145" textAnchor="middle" fill="rgba(97,218,251,0.9)" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">React</text>

      {/* Java Node */}
      <circle cx="100" cy="300" r="20" fill="rgba(9,9,15,1)" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5" />
      <text x="100" y="305" textAnchor="middle" fill="rgba(59,130,246,0.8)" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Java</text>

      {/* Cloud Node */}
      <circle cx="380" cy="300" r="20" fill="rgba(9,9,15,1)" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
      <text x="380" y="305" textAnchor="middle" fill="rgba(6,182,212,0.8)" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">Cloud</text>

      {/* API Top */}
      <circle cx="240" cy="100" r="18" fill="rgba(9,9,15,1)" stroke="rgba(59,130,246,0.35)" strokeWidth="1.5" />
      <text x="240" y="105" textAnchor="middle" fill="rgba(59,130,246,0.7)" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fontWeight="500">API</text>

      {/* Bottom nodes */}
      <circle cx="160" cy="380" r="16" fill="rgba(9,9,15,1)" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
      <text x="160" y="385" textAnchor="middle" fill="rgba(59,130,246,0.6)" fontSize="7" fontFamily="JetBrains Mono, monospace">SQL</text>

      <circle cx="320" cy="380" r="16" fill="rgba(9,9,15,1)" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
      <text x="320" y="385" textAnchor="middle" fill="rgba(6,182,212,0.6)" fontSize="6.5" fontFamily="JetBrains Mono, monospace">Spring</text>

      {/* Accent dots */}
      <circle cx="190" cy="185" r="3" fill="rgba(59,130,246,0.4)" />
      <circle cx="295" cy="195" r="2" fill="rgba(6,182,212,0.4)" />
      <circle cx="175" cy="290" r="2.5" fill="rgba(59,130,246,0.3)" />
      <circle cx="310" cy="285" r="2" fill="rgba(6,182,212,0.3)" />
      <circle cx="240" cy="165" r="2.5" fill="rgba(59,130,246,0.4)" />
    </svg>
  </div>
);

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow accents */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '600px' }}
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  padding: '0.3rem 0.875rem',
                  border: '1px solid var(--border-accent)',
                  borderRadius: '100px',
                  background: 'var(--accent-light)',
                  display: 'inline-block',
                }}
              >
                Software Engineer • Full-Stack • Cloud
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
              }}
            >
              Building Software
              <br />
              <span style={{ color: 'var(--accent)' }}>That Solves</span>
              <br />
              Real Problems.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '480px',
              }}
            >
              Hi, I'm{' '}
              <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                Margani Dheeraj Naga Sai Subhash
              </strong>{' '}
              — a Computer Science and Engineering student focused on building
              full-stack applications, cloud-enabled solutions, and scalable software.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}
            >
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="/resume.pdf"
                download="Margani_Dheeraj_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links + availability */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}
            >
              <a
                href="https://github.com/Dheeraj1575"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.5rem 0.875rem',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                }}
              >
                <ExternalLink size={14} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dheeraj-margani/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  padding: '0.5rem 0.875rem',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'all var(--transition)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                }}
              >
                <Link2 size={14} aria-hidden="true" />
                LinkedIn
              </a>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                aria-label="Currently open to software engineering opportunities"
              >
                <span className="availability-dot" aria-hidden="true" />
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Open to Opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hero-visual"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            aria-hidden="true"
          >
            <div style={{ width: '100%', maxWidth: '440px', aspectRatio: '1' }}>
              <HeroVisual />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
