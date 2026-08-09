import { motion } from 'framer-motion';
import { ArrowRight, Code2, ChefHat, Terminal, ExternalLink, Link2 } from 'lucide-react';
import { profiles } from '../../data/profiles';

// Map icon string → JSX element
const iconMap: Record<string, React.ReactNode> = {
  github: <Code2 size={22} aria-hidden="true" />,
  linkedin: <Link2 size={22} aria-hidden="true" />,
  code: <Code2 size={22} aria-hidden="true" />,
  chef: <ChefHat size={22} aria-hidden="true" />,
  terminal: <Terminal size={22} aria-hidden="true" />,
};

export default function Profiles() {
  return (
    <section
      id="profiles"
      className="section"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p className="section-label">Online Presence</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}
          >
            Problem Solving &amp;
            <span style={{ color: 'var(--accent)' }}> Online Profiles</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', fontSize: '0.9375rem' }}>
            Active across major coding and professional platforms. Visit my profiles below.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem',
          }}
          className="profiles-grid"
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              aria-label={`Visit ${profile.platform} profile — ${profile.username}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Icon container */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: profile.color,
                    flexShrink: 0,
                    transition: 'all var(--transition)',
                  }}
                >
                  {iconMap[profile.icon] ?? <ExternalLink size={22} aria-hidden="true" />}
                </div>

                {/* Text */}
                <div>
                  <div
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 700,
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
                      color: 'var(--text-muted)',
                    }}
                  >
                    @{profile.username}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-subtle)',
                      marginTop: '0.125rem',
                    }}
                  >
                    {profile.description}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={16}
                style={{ color: 'var(--text-muted)', flexShrink: 0, transition: 'color var(--transition)' }}
                aria-hidden="true"
              />
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .profiles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
