import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/personal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      lastScrollYRef.current = currentScrollY;

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'recognition', 'contact'];
      const scrollPos = currentScrollY + 220;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Abilities', href: '#skills', id: 'skills' },
    { label: 'Archives', href: '#experience', id: 'experience' },
    { label: 'Credentials', href: '#recognition', id: 'recognition' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 pointer-events-none">
      <div
        className={`pointer-events-auto max-w-7xl mx-auto rounded-full px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#0E1013]/90 backdrop-blur-xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Left: Wordmark (Alter style) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-signal-orange animate-signal-pulse" />
          <span className="font-alter uppercase text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-signal-orange transition-colors">
            Muhammad Irsyad Dany
          </span>
        </a>

        {/* Center: Minimalist Links (Alter style: Work, About, Contact...) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors uppercase tracking-wider text-[11px] ${
                  isActive ? 'text-white font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="alterNavbarActive"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-signal-orange rounded-full shadow-[0_0_8px_rgba(255,90,31,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: // Start a project + email (Exact Alter style) */}
        <div className="hidden sm:flex items-center gap-3 text-xs font-mono">
          <span className="text-white/40">// Start a project</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-signal-orange hover:text-white border border-white/10 hover:border-signal-orange text-[11px] text-white/90 font-mono tracking-wider transition-all group"
            title="Salin email atau kirim pesan"
          >
            <span>{personalInfo.email}</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
            ) : (
              <Copy className="w-3 h-3 text-white/50 group-hover:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="lg:hidden mt-2 max-w-sm mx-auto bg-[#0E1013]/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-1.5">
              <div className="px-3 py-2 border-b border-white/10 mb-1 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>DIRECTORY</span>
                <span className="text-signal-orange">// ALTER EGO</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-signal-orange/20 text-signal-orange font-bold border border-signal-orange/40'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 mt-1">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full btn-primary py-2.5 text-xs text-center justify-center flex items-center gap-1.5"
                >
                  <span>Send The Signal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
