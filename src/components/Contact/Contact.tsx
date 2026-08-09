import { motion } from 'framer-motion';
import { Mail, Phone, Send, ExternalLink, Link2 } from 'lucide-react';

// Inline SVG icons for social platforms not in lucide-react v1.x
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              marginBottom: '1rem',
            }}
          >
            Let's Build Something{' '}
            <span style={{ color: 'var(--accent)' }}>Meaningful.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
            Open to software engineering opportunities, projects, and conversations around
            technology. Reach out — I'd love to connect.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            maxWidth: '760px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Contact links column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Email */}
              <a
                href="mailto:2300031575cse2@gmail.com"
                className="profile-card"
                aria-label="Send email to 2300031575cse2@gmail.com"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div
                    style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: 'var(--accent-light)', border: '1px solid var(--border-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <Mail size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.125rem' }}>Email</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>2300031575cse2@gmail.com</div>
                  </div>
                </div>
                <Mail size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} aria-hidden="true" />
              </a>

              {/* Phone */}
              <a
                href="tel:+918919826717"
                className="profile-card"
                aria-label="Call +91 8919826717"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div
                    style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <Phone size={18} style={{ color: '#22c55e' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.125rem' }}>Phone</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>+91 8919826717</div>
                  </div>
                </div>
                <Phone size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} aria-hidden="true" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dheeraj-margani/"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card"
                aria-label="Visit LinkedIn profile"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div
                    style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: 'rgba(10,102,194,0.12)', border: '1px solid rgba(10,102,194,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#0A66C2',
                    }}
                    aria-hidden="true"
                  >
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.125rem' }}>LinkedIn</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>dheeraj-margani</div>
                  </div>
                </div>
                <Link2 size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} aria-hidden="true" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Dheeraj1575"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card"
                aria-label="Visit GitHub profile"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div
                    style={{
                      width: '40px', height: '40px', borderRadius: '8px',
                      background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-primary)',
                    }}
                    aria-hidden="true"
                  >
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.125rem' }}>GitHub</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>Dheeraj1575</div>
                  </div>
                </div>
                <ExternalLink size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Primary CTA column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}
          >
            <div className="card card-accent" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div
                style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'var(--accent-light)', border: '1px solid var(--border-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}
                aria-hidden="true"
              >
                <Send size={22} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Ready to Connect?
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                I'm actively looking for software engineering opportunities. Let's talk.
              </p>
              <a
                href="mailto:2300031575cse2@gmail.com"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                aria-label="Send email to Dheeraj"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/dheeraj-margani/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                aria-label="Connect on LinkedIn"
              >
                <Link2 size={16} />
                Connect on LinkedIn
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', padding: '0.75rem' }}>
              <span className="availability-dot" aria-hidden="true" />
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                Open to software engineering opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
