import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import { SectionLabel } from '../Common/SectionInterstitials';
import { Cpu, Cloud, Code, Terminal, Layers } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  programming: <Code size={18} />,
  'core-cs': <Cpu size={18} />,
  development: <Layers size={18} />,
  cloud: <Cloud size={18} />,
  tools: <Terminal size={18} />,
};

const categoryColors: Record<string, string> = {
  programming: '#3b82f6',
  'core-cs': '#a78bfa',
  development: '#06b6d4',
  cloud: '#f59e0b',
  tools: '#22c55e',
};

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleMouseEnterCategory = (catId: string) => {
    setActiveCategoryId(catId);
  };

  const handleMouseLeaveCategory = () => {
    setActiveCategoryId(null);
    setHoveredSkill(null);
  };

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionLabel id="02" title="SKILLS" />

        <div style={{ marginBottom: '3.5rem', maxWidth: '640px' }}>
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
              marginBottom: '1rem',
            }}
          >
            SYSTEM SKILL
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CONSTELLATION
            </span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
            Hover over any technical domain to activate connection lines across full-stack development,
            cloud infrastructure, and computer science fundamentals.
          </p>
        </div>

        {/* Dynamic Skill Constellation Container */}
        <div
          className="skills-grid"
        >
          {skillCategories.map((category, index) => {
            const isHovered = activeCategoryId === category.id;
            const isDimmed = activeCategoryId !== null && activeCategoryId !== category.id;
            const accentColor = categoryColors[category.id] || 'var(--accent)';

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => handleMouseEnterCategory(category.id)}
                onMouseLeave={handleMouseLeaveCategory}
                className="card-glass constellation-node"
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  borderTop: `2px solid ${isHovered ? accentColor : 'transparent'}`,
                  opacity: isDimmed ? 0.35 : 1,
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  boxShadow: isHovered
                    ? `0 12px 30px rgba(0, 0, 0, 0.6), 0 0 25px ${accentColor}30`
                    : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: `${accentColor}15`,
                      border: `1px solid ${accentColor}35`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: accentColor,
                      flexShrink: 0,
                    }}
                  >
                    {categoryIcons[category.id] || <Code size={18} />}
                  </div>
                  <h3
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill) => {
                    const isSkillHovered = hoveredSkill === skill;
                    return (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                          padding: '0.4rem 0.875rem',
                          background: isSkillHovered ? `${accentColor}25` : 'var(--bg-elevated)',
                          border: `1px solid ${isSkillHovered ? accentColor : 'var(--border)'}`,
                          borderRadius: '8px',
                          fontSize: '0.8125rem',
                          fontWeight: 500,
                          color: isSkillHovered ? '#fff' : 'var(--text-secondary)',
                          transition: 'all 0.2s ease',
                          cursor: 'default',
                        }}
                      >
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: accentColor,
                            display: 'inline-block',
                          }}
                          aria-hidden="true"
                        />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>


    </section>
  );
}
