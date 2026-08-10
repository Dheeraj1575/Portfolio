import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    // Check if intro has already played in this session to avoid annoying returning users
    const hasSeenIntro = sessionStorage.getItem('has_seen_intro');
    if (hasSeenIntro) {
      setVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('has_seen_intro', 'true');
      setTimeout(onComplete, 500); // Allow fade out transition before callback
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const nameLetters = 'DHEERAJ'.split('');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)',
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={() => {
            setVisible(false);
            sessionStorage.setItem('has_seen_intro', 'true');
            onComplete();
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#06080e',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
          aria-label="Click to skip intro"
        >
          {/* Soft ambient background glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          {/* Letter by Letter Progressive Reveal */}
          <div style={{ display: 'flex', gap: '0.2rem', zIndex: 1, overflow: 'hidden' }}>
            {nameLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  color: '#f8fafc',
                  fontFamily: 'var(--font-sans)',
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              marginTop: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              zIndex: 1,
            }}
          >
            COMPUTER SCIENCE ENGINEER
          </motion.div>

          <span
            style={{
              position: 'absolute',
              bottom: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--text-subtle)',
              letterSpacing: '0.1em',
            }}
          >
            CLICK TO SKIP
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
