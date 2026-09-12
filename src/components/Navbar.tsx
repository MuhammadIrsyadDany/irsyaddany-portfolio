import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;
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
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 flex items-center justify-between ${
          scrolled ? 'liquid-glass-nav' : 'bg-bg-base/30 backdrop-blur-sm border border-border-faint/50'
        }`}
      >
        {/* Specular highlight overlay — only when scrolled (has glass material) */}
        {scrolled && <div className="liquid-glass-specular" aria-hidden="true" />}

        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative z-10 flex items-center gap-2 group font-semibold text-sm tracking-tight text-ink-primary"
        >
          <span className="w-2 h-2 rounded-full bg-violet-light group-hover:scale-125 transition-transform" />
          <span>irsyad<span className="text-violet-light">.dev</span></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="relative z-10 hidden md:flex items-center gap-5 text-xs font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-2 py-1 transition-colors duration-200 ${
                  isActive ? 'text-violet-light font-semibold' : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-1.5 right-1.5 h-[2px] bg-gradient-to-r from-violet-base via-violet-light to-fuchsia-400 rounded-full shadow-[0_0_8px_rgba(184,138,248,0.7)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="relative z-10 hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-xs font-medium text-ink-primary bg-bg-surface/70 hover:bg-violet-dim/40 border border-border-soft hover:border-violet-light/40 px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 group"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-violet-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-10 md:hidden p-1.5 rounded-lg text-ink-secondary hover:text-ink-primary hover:bg-bg-surface/60 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto liquid-glass-nav rounded-2xl p-4 shadow-2xl">
          {/* Mobile specular */}
          <div className="liquid-glass-specular rounded-2xl" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-violet-dim/50 text-violet-light font-semibold'
                    : 'text-ink-secondary hover:text-ink-primary hover:bg-bg-surface/60'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border-faint/60 mt-1">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full btn-primary py-2.5 text-xs text-center justify-center flex items-center gap-1.5"
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};