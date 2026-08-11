import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Shield, Calendar, Hash, ArrowRight } from 'lucide-react';
import { certifications, certificationGroups } from '../../data/certifications';
import { SectionLabel } from '../Common/SectionInterstitials';
import MagneticButton from '../Common/MagneticButton';

interface CertCardProps {
  cert: (typeof certifications)[0];
  onClick: () => void;
  index: number;
}

function CertCard({ cert, onClick, index }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="card-glass"
      style={{
        cursor: 'pointer',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        borderTop: `2px solid ${cert.accentColor}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      aria-label={`View details for ${cert.name}`}
    >
      <div>
        {/* Provider badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: cert.accentColor,
              padding: '0.25rem 0.625rem',
              background: `${cert.accentColor}15`,
              border: `1px solid ${cert.accentColor}35`,
              borderRadius: '6px',
            }}
          >
            {cert.providerShort}
          </span>
          <Shield size={15} style={{ color: cert.accentColor, opacity: 0.8 }} aria-hidden="true" />
        </div>

        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 800,
            lineHeight: 1.35,
            marginBottom: '0.875rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}
        >
          {cert.name}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <Calendar size={12} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Issued: {cert.issued}
            </span>
          </div>
          {cert.expires && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <Calendar size={12} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Valid: {cert.expires}
              </span>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          paddingTop: '0.875rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: cert.accentColor, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
          VERIFY CREDENTIAL
        </span>
        <span className="hover-arrow">
          <ArrowRight size={15} style={{ color: cert.accentColor }} aria-hidden="true" />
        </span>
      </div>
    </motion.div>
  );
}

interface CertModalProps {
  cert: (typeof certifications)[0] | null;
  onClose: () => void;
}

function CertModal({ cert, onClose }: CertModalProps) {
  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: '#0d0f18', border: '1px solid var(--border-strong)' }}
        >
          {/* Top accent bar */}
          <div style={{ height: '3px', background: cert.accentColor }} aria-hidden="true" />

          <div style={{ padding: '2rem', position: 'relative' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost"
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', padding: '0.375rem', borderRadius: '8px' }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: cert.accentColor,
                display: 'block',
                marginBottom: '0.625rem',
              }}
            >
              {cert.provider}
            </span>

            <h2
              id="cert-modal-title"
              style={{
                fontSize: '1.375rem',
                fontWeight: 900,
                lineHeight: 1.25,
                marginBottom: '1.5rem',
                paddingRight: '2rem',
                color: 'var(--text-primary)',
              }}
            >
              {cert.name}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {[
                { icon: Calendar, label: 'Issued Date', value: cert.issued },
                cert.expires ? { icon: Calendar, label: 'Expiration', value: cert.expires } : null,
                cert.credentialId ? { icon: Hash, label: 'Credential ID / Record', value: cert.credentialId } : null,
              ].filter(Boolean).map((item) => {
                const Icon = item!.icon;
                return (
                  <div
                    key={item!.label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.875rem',
                      padding: '0.875rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                    }}
                  >
                    <Icon size={15} style={{ color: cert.accentColor, marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                    <div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.125rem' }}>
                        {item!.label}
                      </div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                        {item!.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <MagneticButton
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', borderRadius: '100px', padding: '0.75rem' }}
            >
              <ExternalLink size={15} />
              <span>VERIFY CREDENTIAL</span>
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

  return (
    <section id="certifications" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <SectionLabel id="04" title="CERTIFICATIONS" />

        <div style={{ marginBottom: '4rem', maxWidth: '640px' }}>
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
            CREDENTIAL &amp;
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CERTIFICATION WALL
            </span>
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {certificationGroups.map((group) => {
            const groupCerts = certifications.filter((c) => c.group === group.id);
            if (groupCerts.length === 0) return null;

            return (
              <div key={group.id}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: 800,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    // {group.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {group.description}
                  </p>
                </div>

                <div
                  className="certs-grid"
                >
                  {groupCerts.map((cert, index) => (
                    <CertCard
                      key={cert.id}
                      cert={cert}
                      index={index}
                      onClick={() => setSelectedCert(cert)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
