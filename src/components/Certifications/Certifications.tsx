import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Shield, Calendar, Hash } from 'lucide-react';
import { certifications, certificationGroups } from '../../data/certifications';

interface CertCardProps {
  cert: (typeof certifications)[0];
  onClick: () => void;
}

function CertCard({ cert, onClick }: CertCardProps) {
  return (
    <motion.div
      className="card"
      style={{ cursor: 'pointer', padding: '1.25rem', position: 'relative', overflow: 'hidden' }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      aria-label={`View details for ${cert.name}`}
    >
      {/* Accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: cert.accentColor,
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      {/* Provider badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: cert.accentColor,
            padding: '0.2rem 0.5rem',
            background: `${cert.accentColor}12`,
            border: `1px solid ${cert.accentColor}30`,
            borderRadius: '4px',
          }}
        >
          {cert.providerShort}
        </span>
        <Shield size={14} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
      </div>

      <h3
        style={{
          fontSize: '0.9375rem',
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: '0.625rem',
          color: 'var(--text-primary)',
        }}
      >
        {cert.name}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Calendar size={12} style={{ color: 'var(--text-muted)', flexShrink: 0 }} aria-hidden="true" />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Issued: {cert.issued}
          </span>
        </div>
        {cert.expires && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <Calendar size={12} style={{ color: 'var(--text-muted)', flexShrink: 0 }} aria-hidden="true" />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Valid until: {cert.expires}
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 500 }}>
          View details →
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header accent */}
          <div style={{ height: '3px', background: cert.accentColor, borderRadius: '16px 16px 0 0' }} aria-hidden="true" />

          <div style={{ padding: '1.75rem' }}>
            {/* Close */}
            <button
              onClick={onClose}
              className="btn btn-ghost"
              style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.375rem' }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Provider */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
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
                fontSize: '1.25rem',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '1.5rem',
                paddingRight: '2rem',
              }}
            >
              {cert.name}
            </h2>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.5rem' }}>
              {[
                { icon: Calendar, label: 'Issued', value: cert.issued },
                cert.expires ? { icon: Calendar, label: 'Valid Until', value: cert.expires } : null,
                cert.credentialId ? { icon: Hash, label: 'Credential ID', value: cert.credentialId } : null,
              ].filter(Boolean).map((item) => {
                const Icon = item!.icon;
                return (
                <div
                  key={item!.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '8px',
                  }}
                >
                  <Icon size={14} style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                  <div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.125rem' }}>
                      {item!.label}
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                      {item!.value}
                    </div>
                  </div>
                </div>
              ); })}

            </div>

            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}
            >
              <ExternalLink size={14} />
              Verify Credential
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

  return (
    <section
      id="certifications"
      className="section"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="section-label">Certifications</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}
          >
            Professional
            <span style={{ color: 'var(--accent)' }}> Credentials</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', fontSize: '0.9375rem' }}>
            8 certifications across cloud infrastructure, software development, AI, and automation platforms.
          </p>
        </motion.div>

        {/* Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {certificationGroups.map((group, groupIndex) => {
            const groupCerts = certifications.filter((c) => c.group === group.id);
            if (groupCerts.length === 0) return null;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <div style={{ marginBottom: '1.25rem' }}>
                  <h3
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {group.title}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
                    {group.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${Math.min(groupCerts.length, 2)}, 1fr)`,
                    gap: '0.875rem',
                  }}
                  className="cert-group-grid"
                >
                  {groupCerts.map((cert, certIndex) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: certIndex * 0.08 }}
                    >
                      <CertCard cert={cert} onClick={() => setSelectedCert(cert)} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />

      <style>{`
        @media (min-width: 768px) {
          .cert-group-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important;
          }
        }
        @media (max-width: 480px) {
          .cert-group-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
