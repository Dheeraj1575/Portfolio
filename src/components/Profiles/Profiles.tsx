import { motion } from 'framer-motion';
import { ArrowRight, Code2, ChefHat, Terminal, Link2 } from 'lucide-react';
import { profiles } from '../../data/profiles';
import { SectionLabel } from '../Common/SectionInterstitials';

const iconMap: Record<string, React.ReactNode> = {
  github: <Code2 size={22} aria-hidden="true" />,
  linkedin: <Link2 size={22} aria-hidden="true" />,
  code: <Code2 size={22} aria-hidden="true" />,
  chef: <ChefHat size={22} aria-hidden="true" />,
  terminal: <Terminal size={22} aria-hidden="true" />,
};

export default function Profiles() {
  return (
    <section id="profiles" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionLabel id="06" title="PROFILES" />

        <div style={{ marginBottom: '3.5rem', maxWidth: '640px' }}>
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
            INTERACTIVE
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ENGINEERING PORTALS
            </span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
            Active across major software engineering, competitive programming, and professional platforms.
          </p>
        </div>

        <div
          className="profiles-grid"
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass profile-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
              }}
              aria-label={`Visit ${profile.platform} profile — ${profile.username}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: profile.color,
                    flexShrink: 0,
                    boxShadow: `0 4px 14px ${profile.color}20`,
                  }}
                >
                  {iconMap[profile.icon] ?? <Link2 size={22} aria-hidden="true" />}
                </motion.div>

                <div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '0.125rem',
                    }}
                  >
                    {profile.platform}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                    }}
                  >
                    @{profile.username}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.25rem',
                    }}
                  >
                    {profile.description}
                  </div>
                </div>
              </div>

              <span className="hover-arrow">
                <ArrowRight size={18} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
