import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useActiveSection } from '../../hooks/useActiveSection';
import MagneticButton from '../Common/MagneticButton';

const NAV_LINKS = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'profiles', label: 'Profiles', href: '#profiles' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="floating-navbar">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            {/* Logo Mark */}
            <Link
              to="/"
              className="logo-mark"
              aria-label="Dheeraj Margani — Home"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  background: 'var(--accent)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: '#fff',
                  boxShadow: '0 0 14px rgba(59, 130, 246, 0.4)',
                  flexShrink: 0,
                }}
              >
                D
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}
                className="logo-text"
              >
                Dheeraj
              </span>
            </Link>

            {/* Desktop Navigation Links with Animated Pill */}
            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }}>
              {NAV_LINKS.map((link) => {
                const isActive = isHome && activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className="nav-item-link"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="nav-item-active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Side CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="btn btn-ghost"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                style={{ padding: '0.45rem', borderRadius: '8px' }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* Resume Download CTA */}
              <MagneticButton
                href="/resume.pdf"
                download="Margani_Dheeraj_Resume.pdf"
                className="btn btn-primary desktop-resume-btn"
                style={{ fontSize: '0.8125rem', padding: '0.45rem 1rem', borderRadius: '100px' }}
              >
                <Download size={13} />
                <span>Resume</span>
              </MagneticButton>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="btn btn-ghost mobile-menu-btn"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem', width: '100%', padding: '0 1.5rem' }}>
              {NAV_LINKS.map((link, index) => {
                const isActive = isHome && activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    style={{
                      width: '100%',
                      maxWidth: '320px',
                      padding: '0.875rem',
                      textAlign: 'center',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                      borderRadius: '10px',
                      background: isActive ? 'var(--accent-light)' : 'transparent',
                      border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>
            <a
              href="/resume.pdf"
              download="Margani_Dheeraj_Resume.pdf"
              className="btn btn-primary"
              style={{ marginTop: '1rem', gap: '0.5rem', borderRadius: '100px' }}
              onClick={() => setMobileOpen(false)}
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 840px) {
          .mobile-menu-btn { display: none !important; }
          .logo-text { display: block !important; }
        }
        @media (max-width: 839px) {
          .desktop-nav { display: none !important; }
          .desktop-resume-btn { display: none !important; }
          .logo-text { display: none !important; }
        }
      `}</style>
    </>
  );
}
