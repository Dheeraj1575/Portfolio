import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import MagneticButton from '../Common/MagneticButton';

interface HeroProps {
  introFinished?: boolean;
}

export default function Hero({ introFinished = true }: HeroProps) {
  const [interactive, setInteractive] = useState(false);

  // Mouse parallax motion for desktop photo & background elements
  const photoX = useSpring(0, { damping: 25, stiffness: 120 });
  const photoY = useSpring(0, { damping: 25, stiffness: 120 });
  const textX = useSpring(0, { damping: 30, stiffness: 100 });
  const textY = useSpring(0, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isTouch && !prefersReducedMotion) {
      setInteractive(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch || prefersReducedMotion) return;
      const { innerWidth, innerHeight } = window;
      const xRatio = (e.clientX / innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / innerHeight - 0.5) * 2;

      // Subtle parallax offset capped to 6px max
      photoX.set(xRatio * 6);
      photoY.set(yRatio * 6);
      textX.set(xRatio * -2);
      textY.set(yRatio * -2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [photoX, photoY, textX, textY]);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: 'min(85vh, 100svh)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(72px, 12vw, 100px)',
        paddingBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', margin: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: introFinished ? 1 : 0, scale: introFinished ? 1 : 0.97 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-grid"
        >
          {/* LEFT SIDE: Strong Introduction */}
          <motion.div style={{ x: interactive ? textX : 0, y: interactive ? textY : 0 }}>
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginBottom: '0.75rem' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.8125rem)',
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span className="availability-dot" style={{ width: '6px', height: '6px' }} aria-hidden="true" />
                HELLO, I'M
              </span>
            </motion.div>

            {/* Large Visually Dominant Name: DHEERAJ */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                marginBottom: '0.875rem',
                color: 'var(--text-primary)',
              }}
            >
              DHEERAJ
            </motion.h1>

            {/* Medium Job Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 15 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
                background: 'linear-gradient(135deg, #3b82f6 0%, #a78bfa 50%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Computer Science Engineer
            </motion.div>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 15 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.0625rem)',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              I build modern digital experiences and explore cloud infrastructure,
              software development, and emerging technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 15 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-buttons"
            >
              <MagneticButton
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ borderRadius: '100px', padding: '0.8125rem 2rem', fontSize: '0.875rem' }}
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={16} />
              </MagneticButton>

              <MagneticButton
                href="/resume.pdf"
                download="Margani_Dheeraj_Resume.pdf"
                className="btn btn-secondary btn-download"
                style={{ borderRadius: '100px', padding: '0.8125rem 2rem', fontSize: '0.875rem' }}
              >
                <Download size={16} />
                <span>DOWNLOAD RESUME</span>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Premium Editorial Portrait Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: introFinished ? 1 : 0, scale: introFinished ? 1 : 0.94 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              x: interactive ? photoX : 0,
              y: interactive ? photoY : 0,
            }}
          >
            {/* Ambient Background Glow behind Photo */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '110%',
                height: '110%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(139, 92, 246, 0.1) 45%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            />

            {/* Editorial Portrait Glass Frame */}
            <div
              className="hero-portrait-frame card-glass"
              style={{
                position: 'relative',
                aspectRatio: '0.82',
              }}
            >
              {/* Inner Image Container */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'var(--bg-tertiary)',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Margani Dheeraj Naga Sai Subhash — Software Engineer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  loading="eager"
                />

                {/* Subtle Gradient Overlay at Bottom of Photo */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 65%, rgba(7, 8, 14, 0.7) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Editorial Corner Tech Accent */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '22px',
                  right: '22px',
                  background: 'rgba(7, 8, 14, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: '8px',
                  padding: '0.35rem 0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.15em',
                }}
              >
                SYS // PORTRAIT
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: introFinished ? 1 : 0, y: introFinished ? 0 : 10 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.375rem',
            marginTop: '2.5rem',
            cursor: 'pointer',
          }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          role="button"
          aria-label="Scroll to About section"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} style={{ color: 'var(--accent)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
