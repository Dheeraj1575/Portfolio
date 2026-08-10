import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const tech = ['React.js', 'Spring Boot', 'MySQL', 'REST API', 'AWS'];

const features = [
  'Donor registration and profile management',
  'Blood group availability tracking and inventory management',
  'Blood request submission and management workflow',
  'RESTful API backend built with Spring Boot',
  'Responsive React.js frontend interface',
  'MySQL relational database for structured data persistence',
  'Deployed on Amazon Web Services (AWS)',
];

const sections = [
  {
    title: 'Overview',
    content:
      'HemoHub is a full-stack blood bank management system designed to digitize and streamline the process of connecting blood donors with hospitals and patients. The application provides a unified platform for donor registration, blood inventory tracking, and request management, replacing fragmented manual processes with a reliable digital system.',
  },
  {
    title: 'Problem',
    content:
      'Coordinating blood availability between donors, hospitals, and patients is a fragmented, manual process in many regions. Hospitals struggle to track blood inventory in real time, and donors lack a structured, accessible way to register and be matched to requests. This gap can result in delays during critical medical situations.',
  },
  {
    title: 'Solution',
    content:
      'HemoHub addresses these challenges by providing a centralized digital platform with dedicated workflows for each stakeholder. The Spring Boot REST API backend enables clean, structured data exchange between the React.js frontend and the MySQL database. AWS hosting ensures reliable availability for the deployed application.',
  },
  {
    title: 'Technical Architecture',
    content:
      'The application follows a standard three-tier architecture. The React.js frontend communicates with the Spring Boot backend via REST APIs. The backend handles business logic and database interactions through MySQL. The complete stack is deployed on AWS infrastructure.',
  },
  {
    title: 'Implementation',
    content:
      'The frontend was built using React.js with component-based architecture for maintainability. The backend REST API was implemented using Spring Boot, providing endpoints for donor management, blood inventory, and request handling. MySQL was used for relational data storage, with appropriate schema design for donors, blood groups, and requests.',
  },
  {
    title: 'Challenges',
    content:
      'Key challenges included designing a clear data model to represent the relationships between donors, blood groups, and hospital requests, and building a REST API that serves all stakeholder needs cleanly. Ensuring consistent state between the frontend and backend required careful API design.',
  },
  {
    title: 'Outcome',
    content:
      'HemoHub is a functional full-stack application deployed on AWS that demonstrates end-to-end system design, REST API development, React.js frontend skills, and cloud deployment capability.',
  },
];

const SystemDiagram = () => (
  <svg viewBox="0 0 560 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }} aria-hidden="true">
    <defs>
      <marker id="h-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="rgba(59,130,246,0.7)" />
      </marker>
      <pattern id="hemo-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59,130,246,0.05)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="560" height="200" fill="url(#hemo-grid)" />
    {/* React Frontend */}
    <rect x="10" y="60" width="110" height="80" rx="8" fill="rgba(15,17,23,1)" stroke="rgba(97,218,251,0.5)" strokeWidth="1.5" />
    <text x="65" y="95" textAnchor="middle" fill="rgba(97,218,251,0.9)" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">React.js</text>
    <text x="65" y="112" textAnchor="middle" fill="rgba(97,218,251,0.6)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Frontend</text>
    {/* Arrow */}
    <line x1="122" y1="100" x2="150" y2="100" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" markerEnd="url(#h-arr)" />
    <text x="136" y="92" textAnchor="middle" fill="rgba(59,130,246,0.5)" fontSize="7" fontFamily="JetBrains Mono, monospace">REST API</text>
    {/* Spring Boot */}
    <rect x="152" y="50" width="110" height="100" rx="8" fill="rgba(15,17,23,1)" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" />
    <text x="207" y="90" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">Spring Boot</text>
    <text x="207" y="107" textAnchor="middle" fill="rgba(59,130,246,0.6)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">REST API</text>
    <text x="207" y="122" textAnchor="middle" fill="rgba(59,130,246,0.6)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Business Logic</text>
    {/* Arrow */}
    <line x1="264" y1="100" x2="292" y2="100" stroke="rgba(59,130,246,0.6)" strokeWidth="1.5" markerEnd="url(#h-arr)" />
    <text x="278" y="92" textAnchor="middle" fill="rgba(59,130,246,0.5)" fontSize="7" fontFamily="JetBrains Mono, monospace">JDBC</text>
    {/* MySQL */}
    <rect x="294" y="60" width="110" height="80" rx="8" fill="rgba(15,17,23,1)" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5" />
    <text x="349" y="95" textAnchor="middle" fill="rgba(34,197,94,0.9)" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">MySQL</text>
    <text x="349" y="112" textAnchor="middle" fill="rgba(34,197,94,0.6)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Database</text>
    {/* AWS wrapper */}
    <rect x="440" y="65" width="110" height="70" rx="8" fill="rgba(15,17,23,1)" stroke="rgba(255,153,0,0.45)" strokeWidth="1.5" />
    <text x="495" y="96" textAnchor="middle" fill="rgba(255,153,0,0.9)" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">AWS Cloud</text>
    <text x="495" y="112" textAnchor="middle" fill="rgba(255,153,0,0.6)" fontSize="8" fontFamily="JetBrains Mono, monospace">Deployment</text>
    <line x1="406" y1="100" x2="437" y2="100" stroke="rgba(255,153,0,0.5)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#h-arr)" />
    <text x="422" y="92" textAnchor="middle" fill="rgba(255,153,0,0.5)" fontSize="7" fontFamily="JetBrains Mono, monospace">hosts</text>
  </svg>
);

import CustomCursor from '../components/CustomCursor/CustomCursor';
import EngineeringBackground from '../components/Background/EngineeringBackground';

export default function HemoHub() {
  return (
    <>
      <CustomCursor />
      <EngineeringBackground />
      <Navbar />
      <main style={{ paddingTop: '80px', position: 'relative', zIndex: 1 }}>
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
              background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
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
                    color: 'var(--accent)',
                  }}
                >
                  PROJECT 01
                </span>
                <span className="tag">February 2026</span>
                <span className="tag tag-accent">Full-Stack • Cloud</span>
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
                HemoHub
              </h1>
              <p
                style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  maxWidth: '560px',
                }}
              >
                An online blood bank management system connecting donors, hospitals, and patients
                through a full-stack web application deployed on AWS.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Project link coming soon
              </span>
            </motion.div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div
          className="container"
          style={{ paddingTop: '3rem', paddingBottom: '1rem' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
            style={{ padding: '2rem' }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              // System Architecture
            </p>
            <SystemDiagram />
          </motion.div>
        </div>

        {/* Case Study Content */}
        <div className="container" style={{ paddingBottom: '6rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '3rem',
              paddingTop: '2rem',
            }}
            className="case-study-grid"
          >
            {/* Main Content */}
            <div>
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  style={{ marginBottom: '2.5rem' }}
                >
                  <h2
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      marginBottom: '0.75rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {section.title}
                  </h2>
                  <p style={{ lineHeight: 1.75, fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
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
                      <li
                        key={f}
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: 'var(--accent)', marginTop: '0.125rem', flexShrink: 0 }} aria-hidden="true">▸</span>
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
                      <span key={t} className="tag tag-accent">
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
