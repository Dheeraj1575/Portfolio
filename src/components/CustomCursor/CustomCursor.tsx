import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverState, setHoverState] = useState<'none' | 'button' | 'link' | 'project'>('none');
  const [badgeText, setBadgeText] = useState<'VIEW' | 'EXPLORE' | ''>('');

  const cursorX = useSpring(0, { damping: 28, stiffness: 450 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 450 });

  const ringX = useSpring(0, { damping: 22, stiffness: 220 });
  const ringY = useSpring(0, { damping: 22, stiffness: 220 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isTouch && !prefersReducedMotion) {
      setEnabled(true);
      document.body.classList.add('has-custom-cursor');
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('.project-card-grid, .project-visual');
      const buttonEl = target.closest('.btn, button, [role="button"]');
      const linkEl = target.closest('a:not(.btn)');

      if (projectCard) {
        setHoverState('project');
        // Alternating badge text based on card index or default EXPLORE
        const isSecond = projectCard.textContent?.includes('02');
        setBadgeText(isSecond ? 'EXPLORE' : 'VIEW');
      } else if (buttonEl) {
        setHoverState('button');
        setBadgeText('');
      } else if (linkEl) {
        setHoverState('link');
        setBadgeText('');
      } else {
        setHoverState('none');
        setBadgeText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [cursorX, cursorY, ringX, ringY]);

  if (!enabled) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: hoverState === 'project' ? 0 : 1,
        }}
      />

      {/* Reactive Ring */}
      <motion.div
        className={`custom-cursor-ring cursor-hover-${hoverState}`}
        style={{
          x: ringX,
          y: ringY,
        }}
      >
        {hoverState === 'project' && (
          <span className="cursor-badge-text">{badgeText}</span>
        )}
      </motion.div>
    </>
  );
}
