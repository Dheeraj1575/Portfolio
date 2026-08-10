import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const TECHNICAL_LABELS = [
  { text: 'SYSTEM / 01', top: '15%', left: '8%', coord: 'COORD: 17.38°N 78.48°E' },
  { text: 'CLOUD / 02', top: '28%', right: '6%', coord: 'AWS.US-EAST-1 // STACK' },
  { text: 'BUILD / 03', top: '55%', left: '4%', coord: 'EXEC: REACT.VITE.BUILD' },
  { text: 'DEPLOY / 04', top: '72%', right: '7%', coord: 'LATENCY: 12ms // ACTIVE' },
  { text: 'ENGINEER / 05', top: '88%', left: '10%', coord: 'CGPA: 9.45 // CSE' },
];

export default function EngineeringBackground() {
  const [interactive, setInteractive] = useState(false);

  const mouseX = useSpring(0, { damping: 35, stiffness: 120 });
  const mouseY = useSpring(0, { damping: 35, stiffness: 120 });

  const gridX = useSpring(0, { damping: 40, stiffness: 90 });
  const gridY = useSpring(0, { damping: 40, stiffness: 90 });

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

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      gridX.set(xRatio * -10);
      gridY.set(yRatio * -10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, gridX, gridY]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Soft Ambient Radial Light Following Cursor */}
      {interactive && (
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.02) 45%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            x: mouseX,
            y: mouseY,
          }}
        />
      )}

      {/* Grid Pattern with Mouse Shift */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-20px',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          x: gridX,
          y: gridY,
        }}
      />

      {/* Background Ambient Glow Spots */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Vector Lines & Traveling Data Pulses */}
      <svg
        style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.2 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="0" x2="10%" y2="100%" stroke="rgba(59, 130, 246, 0.4)" strokeDasharray="6 6" />
        <line x1="90%" y1="0" x2="90%" y2="100%" stroke="rgba(59, 130, 246, 0.4)" strokeDasharray="6 6" />
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(255, 255, 255, 0.15)" strokeDasharray="4 8" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="rgba(255, 255, 255, 0.15)" strokeDasharray="4 8" />

        {/* Pulsing Intersections */}
        <circle cx="10%" cy="20%" r="3" fill="var(--accent)" />
        <circle cx="90%" cy="20%" r="3" fill="var(--cyan)" />
        <circle cx="10%" cy="80%" r="3" fill="var(--cyan)" />
        <circle cx="90%" cy="80%" r="3" fill="var(--accent)" />

        {/* Data Pulses glowing at intersection nodes */}
        <motion.circle
          cx="10%"
          cy="20%"
          r="3"
          fill="#60a5fa"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.circle
          cx="90%"
          cy="80%"
          r="3"
          fill="#06b6d4"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
      </svg>

      {/* Decorative Technical Labels */}
      {TECHNICAL_LABELS.map((item, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            display: 'none',
            flexDirection: 'column',
            gap: '2px',
            opacity: 0.35,
          }}
          className="desktop-tech-tag"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
            }}
          >
            {item.text}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              color: 'var(--text-subtle)',
              letterSpacing: '0.1em',
            }}
          >
            {item.coord}
          </span>
        </div>
      ))}

      <style>{`
        @media (min-width: 1280px) {
          .desktop-tech-tag { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
