import { motion } from 'framer-motion';
import { Mail, Phone, Send, Link2 } from 'lucide-react';
import { SectionLabel } from '../Common/SectionInterstitials';
import MagneticButton from '../Common/MagneticButton';

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const headlineLines = ["LET'S BUILD", 'SOMETHING', 'MEANINGFUL.'];

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionLabel id="08" title="CONTACT" />

        {/* Sequential Line-by-Line Headline Reveal */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          {headlineLines.map((line, idx) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.02,
                color: idx === 1 ? 'transparent' : 'var(--text-primary)',
                background: idx === 1 ? 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' : undefined,
                WebkitBackgroundClip: idx === 1 ? 'text' : undefined,
                WebkitTextFillColor: idx === 1 ? 'transparent' : undefined,
              }}
            >
              {line}
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '560px', margin: '1.5rem auto 0' }}
          >
            Open to software engineering roles, full-stack projects, and technical discussions.
            Reach out via email or LinkedIn.
          </motion.p>
        </div>

        {/* Sequential Contact Grid */}
        <div
          className="contact-grid"
        >
          {/* Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Email */}
            <a
              href="mailto:2300031575cse2@gmail.com"
              className="card-glass profile-card"
              style={{ padding: '1.25rem 1.5rem', borderRadius: '16px', textDecoration: 'none' }}
              aria-label="Send email to 2300031575cse2@gmail.com"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'var(--accent-light)', border: '1px solid var(--border-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  <Mail size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.1em' }}>
                    DIRECT EMAIL
                  </div>
                  <div className="email-text" style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    2300031575cse2@gmail.com
                  </div>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+918919826717"
              className="card-glass profile-card"
              style={{ padding: '1.25rem 1.5rem', borderRadius: '16px', textDecoration: 'none' }}
              aria-label="Call +91 8919826717"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  <Phone size={20} style={{ color: '#22c55e' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.725rem', color: '#22c55e', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.1em' }}>
                    PHONE
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    +91 8919826717
                  </div>
                </div>
              </div>
            </a>

            {/* LinkedIn Quick */}
            <a
              href="https://www.linkedin.com/in/dheeraj-margani/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass profile-card"
              style={{ padding: '1.25rem 1.5rem', borderRadius: '16px', textDecoration: 'none' }}
              aria-label="Visit LinkedIn profile"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'rgba(10,102,194,0.15)', border: '1px solid rgba(10,102,194,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#0A66C2',
                  }}
                  aria-hidden="true"
                >
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.725rem', color: '#0A66C2', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.1em' }}>
                    LINKEDIN
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    dheeraj-margani
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Magnetic CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div className="card-glass" style={{ padding: '2.25rem', borderRadius: '24px', textAlign: 'center' }}>
              <div
                style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: 'var(--accent-light)', border: '1px solid var(--border-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}
                aria-hidden="true"
              >
                <Send size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Start a Conversation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Currently available for full-time engineering roles, software projects, and technical opportunities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <MagneticButton
                  href="mailto:2300031575cse2@gmail.com"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', borderRadius: '100px', padding: '0.75rem' }}
                >
                  <Mail size={16} />
                  <span>EMAIL ME</span>
                </MagneticButton>

                <MagneticButton
                  href="https://www.linkedin.com/in/dheeraj-margani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', borderRadius: '100px', padding: '0.75rem' }}
                >
                  <Link2 size={16} />
                  <span>LINKEDIN</span>
                </MagneticButton>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginTop: '1.25rem' }}>
              <span className="availability-dot" aria-hidden="true" />
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                ACTIVE &amp; READY TO CONNECT
              </span>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
