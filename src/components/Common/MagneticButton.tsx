import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  strength?: number; // max 6-8px pull
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  style,
  'aria-label': ariaLabel,
  strength = 7,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const x = useSpring(0, { damping: 16, stiffness: 220 });
  const y = useSpring(0, { damping: 16, stiffness: 220 });

  const textX = useSpring(0, { damping: 20, stiffness: 260 });
  const textY = useSpring(0, { damping: 20, stiffness: 260 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isTouch && !prefersReducedMotion) {
      setEnabled(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const pullX = (distanceX / (rect.width / 2)) * strength;
    const pullY = (distanceY / (rect.height / 2)) * strength;

    x.set(pullX);
    y.set(pullY);

    textX.set(pullX * 0.4);
    textY.set(pullY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    textX.set(0);
    textY.set(0);
    setIsPressed(false);
  };

  const content = (
    <motion.span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', x: textX, y: textY }}>
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        animate={{ scale: isPressed ? 0.96 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        style={{ display: 'inline-block', x, y }}
      >
        <a
          href={href}
          download={download}
          target={target}
          rel={rel}
          onClick={onClick}
          className={className}
          style={style}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      animate={{ scale: isPressed ? 0.96 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={{ display: 'inline-block', x, y }}
    >
      <button
        type="button"
        onClick={onClick}
        className={className}
        style={style}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    </motion.div>
  );
}
