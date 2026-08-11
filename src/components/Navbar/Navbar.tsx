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
  { id: 'certifications', label: 'Certs', href: '#certifications' },
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 841) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '0.5rem' }}>
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
                flexShrink: 0,
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
                  whiteSpace: 'nowrap',
                }}
                className="logo-text"
              >
                Dheeraj
              </span>
            </Link>

            {/* Desktop Navigation Links with Animated Pill */}
            <nav
              className="desktop-nav"
              style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', overflow: 'hidden' }}
              aria-label="Main navigation"
            >
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
                    aria-current={isActive ? 'page' : undefined}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', flexShrink: 0 }}>
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="btn btn-ghost"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                style={{ padding: '0.5rem', borderRadius: '8px', minHeight: '44px', minWidth: '44px' }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* Resume Download CTA — desktop only */}
              <MagneticButton
                href="/resume.pdf"
                download="Margani_Dheeraj_Resume.pdf"
                className="btn btn-primary desktop-resume-btn"
                style={{ fontSize: '0.8125rem', padding: '0.45rem 1rem', borderRadius: '100px' }}
              >
                <Download size={13} />
                <span>Resume</span>
              </MagneticButton>

              {/* Mobile Menu Button — mobile only */}
              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="btn btn-ghost mobile-menu-btn"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-menu"
                style={{ padding: '0.5rem', borderRadius: '8px', minHeight: '44px', minWidth: '44px' }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Mobile nav header spacer */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '72px' }} aria-hidden="true" />

            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                width: '100%',
                maxWidth: '360px',
                margin: '0 auto',
              }}
              aria-label="Mobile navigation"
            >
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
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.5rem',
                      textAlign: 'center',
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                      borderRadius: '12px',
                      background: isActive ? 'var(--accent-light)' : 'transparent',
                      border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                      textDecoration: 'none',
                      transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease',
                      minHeight: '52px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            <div style={{ width: '100%', maxWidth: '360px', margin: '0 auto', paddingTop: '0.5rem' }}>
              <a
                href="/resume.pdf"
                download="Margani_Dheeraj_Resume.pdf"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  gap: '0.5rem',
                  borderRadius: '100px',
                  padding: '0.9rem 2rem',
                  justifyContent: 'center',
                  fontSize: '0.9375rem',
                }}
                onClick={() => setMobileOpen(false)}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
