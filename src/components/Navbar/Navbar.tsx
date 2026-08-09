import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useActiveSection } from '../../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'certifications', 'education', 'profiles', 'contact'];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#') && isHome) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const isActive = (href: string) => {
    const id = href.replace('#', '');
    return activeSection === id;
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link
            to="/"
            className="logo-mark"
            aria-label="Dheeraj Margani — Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                background: 'var(--accent)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#fff',
                flexShrink: 0,
              }}
            >
              D
            </div>
            <span
              style={{
                fontWeight: 600,
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                display: 'none',
              }}
              className="logo-text"
            >
              Dheeraj
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                style={{
                  padding: '0.375rem 0.75rem',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  borderRadius: '6px',
                  color: isActive(link.href) ? 'var(--accent)' : 'var(--text-secondary)',
                  background: isActive(link.href) ? 'var(--accent-light)' : 'transparent',
                  transition: 'all var(--transition)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.href)) {
                    (e.target as HTMLElement).style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.href)) {
                    (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              style={{ padding: '0.5rem', borderRadius: '8px' }}
            >
              {theme === 'dark' ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Margani_Dheeraj_Resume.pdf"
              className="btn btn-primary desktop-resume-btn"
              style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem', gap: '0.375rem' }}
            >
              <Download size={14} />
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="btn btn-ghost mobile-menu-btn"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', width: '100%', padding: '0 2rem' }}>
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    padding: '1rem',
                    textAlign: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: isActive(link.href) ? 'var(--accent)' : 'var(--text-primary)',
                    borderRadius: '8px',
                    background: isActive(link.href) ? 'var(--accent-light)' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="/resume.pdf"
              download="Margani_Dheeraj_Resume.pdf"
              className="btn btn-primary"
              style={{ marginTop: '1rem', gap: '0.5rem' }}
              onClick={() => setMobileOpen(false)}
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .logo-text { display: block !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-resume-btn { display: none !important; }
        }
        @media (max-width: 900px) {
          .desktop-nav a { padding: 0.375rem 0.5rem !important; }
        }
      `}</style>
    </>
  );
}
