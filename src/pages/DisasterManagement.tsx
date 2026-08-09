import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const tech = ['React.js', 'Spring Boot', 'MySQL', 'REST API', 'Git', 'GitHub'];

const features = [
  'Secure user authentication system',
  'Role-based access control for different user types',
  'Disaster record creation and management',
  'Emergency resource tracking and management',
  'User information management',
  'RESTful API backend with Spring Boot',
  'React.js frontend interface',
  'MySQL relational database',
  'Version control with Git and GitHub',
];

const sections = [
  {
    title: 'Overview',
    content:
      'The Disaster Management System is a full-stack web application built to provide structured, organized management of disaster incidents and emergency response coordination. The platform enables different user roles to report incidents, track resources, and manage emergency response workflows in a centralized digital environment.',
  },
  {
    title: 'Problem',
    content:
      'Disaster response efforts are often hindered by poor coordination, fragmented communication, and the absence of a centralized system for tracking incidents and resources. Ad-hoc communication channels can fail under pressure, and without role-based structure, information can be mismanaged during emergencies.',
  },
  {
    title: 'Solution',
    content:
      'A structured web application providing secure authentication, role-based access control for different user types, and dedicated modules for disaster record management, emergency resource tracking, and user information management. The system is built on a Spring Boot REST API backend with a React.js frontend and MySQL database.',
  },
  {
    title: 'Technical Architecture',
    content:
      'The application follows a three-tier architecture: the React.js frontend communicates with the Spring Boot backend through REST APIs. Spring Boot handles authentication, authorization (RBAC), and all business logic. MySQL stores disaster records, resource data, and user information with appropriate relational schema design.',
  },
  {
    title: 'Implementation',
    content:
      'Authentication was implemented with secure login flows and role-based access control to ensure that different user types have appropriate access. The frontend was organized into modules for disaster records, resources, and user management. REST API endpoints were designed to serve each module\'s requirements clearly. Version control was maintained throughout development using Git and GitHub.',
  },
  {
    title: 'Challenges',
    content:
      'Designing an effective role-based access control system required careful planning of user types and their permitted actions. Structuring the database schema to efficiently represent the relationships between disasters, resources, and users while keeping queries performant required iterative design.',
  },
  {
    title: 'Outcome',
    content:
      'The Disaster Management System demonstrates proficiency in building multi-role full-stack applications with secure authentication, structured backend design using Spring Boot, and a responsive React.js frontend backed by a MySQL database.',
  },
];

const FlowDiagram = () => (
  <svg viewBox="0 0 560 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }} aria-hidden="true">
    <defs>
      <marker id="d-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="rgba(59,130,246,0.7)" />
      </marker>
      <pattern id="dis-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59,130,246,0.05)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="560" height="200" fill="url(#dis-grid)" />
    {[
      { x: 10, label: 'Incident', sub: 'Report', color: 'rgba(239,68,68,0.8)', border: 'rgba(239,68,68,0.4)' },
      { x: 150, label: 'Auth &', sub: 'RBAC', color: 'rgba(59,130,246,0.8)', border: 'rgba(59,130,246,0.4)' },
      { x: 290, label: 'Records &', sub: 'Resources', color: 'rgba(6,182,212,0.8)', border: 'rgba(6,182,212,0.4)' },
      { x: 430, label: 'MySQL', sub: 'Storage', color: 'rgba(34,197,94,0.8)', border: 'rgba(34,197,94,0.4)' },
    ].map((node, i) => (
      <g key={i}>
        <rect x={node.x} y="70" width="110" height="70" rx="8" fill="rgba(15,17,23,1)" stroke={node.border} strokeWidth="1.5" />
        <text x={node.x + 55} y="102" textAnchor="middle" fill={node.color} fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">{node.label}</text>
        <text x={node.x + 55} y="118" textAnchor="middle" fill={node.color.replace('0.8', '0.5')} fontSize="8.5" fontFamily="JetBrains Mono, monospace">{node.sub}</text>
        {i < 3 && (
          <line x1={node.x + 112} y1="105" x2={node.x + 146} y2="105" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" markerEnd="url(#d-arr)" />
        )}
      </g>
    ))}
    {/* Tech bar */}
    <rect x="10" y="162" width="540" height="28" rx="5" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />
    {['React.js', 'Spring Boot', 'REST API', 'MySQL', 'Git / GitHub'].map((t, i) => (
      <text key={t} x={64 + i * 108} y="180" textAnchor="middle" fill="rgba(59,130,246,0.6)" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fontWeight="500">{t}</text>
    ))}
  </svg>
);

export default function DisasterManagement() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        {/* Header */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border)',
            padding: '4rem 0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />
          <div className="container" style={{ position: 'relative' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                transition: 'color var(--transition)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="Back to portfolio"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--cyan)',
                  }}
                >
                  PROJECT 02
                </span>
                <span className="tag">May 2025</span>
                <span className="tag" style={{ borderColor: 'var(--cyan-light)', color: 'var(--cyan)', background: 'var(--cyan-light)' }}>
                  Full-Stack
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '0.75rem',
                }}
              >
                Disaster Management System
              </h1>
              <p
                style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  maxWidth: '560px',
                }}
              >
                A disaster management platform providing incident reporting, role-based access
                control, and emergency resource coordination through a structured full-stack application.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Project link coming soon
              </span>
            </motion.div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="container" style={{ paddingTop: '3rem', paddingBottom: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
            style={{ padding: '2rem' }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              // System Flow
            </p>
            <FlowDiagram />
          </motion.div>
        </div>

        {/* Case Study Content */}
        <div className="container" style={{ paddingBottom: '6rem' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', paddingTop: '2rem' }}
            className="case-study-grid"
          >
            <div>
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  style={{ marginBottom: '2.5rem' }}
                >
                  <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {section.title}
                  </h2>
                  <p style={{ lineHeight: 1.75, fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div style={{ position: 'sticky', top: '5rem' }}>
                <div className="card" style={{ marginBottom: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    // Key Features
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {features.map((f) => (
                      <li key={f} style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--cyan)', marginTop: '0.125rem', flexShrink: 0 }} aria-hidden="true">▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    // Tech Stack
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {tech.map((t) => (
                      <span key={t} className="tag" style={{ borderColor: 'var(--cyan-light)', color: 'var(--cyan)', background: 'var(--cyan-light)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1rem', padding: '0.875rem', background: 'var(--bg-elevated)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
                    Project link coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
