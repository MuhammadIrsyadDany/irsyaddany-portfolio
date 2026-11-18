import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollYRef.current;
      const delta = currentScrollY - prevScrollY;

      setScrolled(currentScrollY > 20);

      if (Math.abs(delta) > 5) {
        if (currentScrollY > 140 && delta > 0) {
          setNavVisible(false);
        } else if (delta < 0 || currentScrollY <= 140) {
          setNavVisible(true);
        }
      }

      lastScrollYRef.current = currentScrollY;

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'recognition', 'contact'];
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
    { label: 'Origin', num: '01', href: '#about', id: 'about' },
    { label: 'Missions', num: '02', href: '#projects', id: 'projects' },
    { label: 'Abilities', num: '03', href: '#skills', id: 'skills' },
    { label: 'Archives', num: '04', href: '#experience', id: 'experience' },
    { label: 'Credentials', num: '05', href: '#recognition', id: 'recognition' },
    { label: 'Signal', num: '06', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const shouldShow = navVisible || mobileMenuOpen;

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: shouldShow ? 0 : -90,
        opacity: shouldShow ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-4 pointer-events-none"
    >
      <div
        className={`pointer-events-auto max-w-6xl mx-auto rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#0E1013]/90 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
            : 'bg-[#0E1013]/50 backdrop-blur-sm border-white/[0.06]'
        }`}
      >
        {/* Brand / Civilian vs Alter Ego designation */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#15181C] border border-white/10 flex items-center justify-center text-signal-orange font-mono font-bold text-xs group-hover:border-signal-orange/60 group-hover:scale-105 transition-all">
            ID
          </div>
          <div className="flex flex-col">
            <span className="font-alter uppercase text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-signal-orange transition-colors">
              Irsyad Dany
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono text-white/50 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: READY // Q1 2027
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Alter minimal style) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative py-1 transition-colors uppercase tracking-wider text-[11px] ${
                  isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="text-signal-orange/70 text-[9px] mr-1 font-mono">//</span>
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="alterActiveNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-signal-orange rounded-full shadow-[0_0_8px_rgba(255,90,31,0.8)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Send Signal */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-signal-orange hover:text-white border border-white/10 hover:border-signal-orange text-[11px] font-mono uppercase tracking-wider text-white/80 transition-all group"
          >
            <span className="text-signal-orange group-hover:text-white">//</span>
            <span>Send Signal</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="lg:hidden mt-2 max-w-sm mx-auto bg-[#0E1013]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-1.5">
              <div className="px-3 py-2 border-b border-white/10 mb-1 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>SYSTEM NAVIGATION</span>
                <span className="text-signal-orange">// ALTER EGO</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-signal-orange/15 text-signal-orange font-semibold border border-signal-orange/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-white/40 font-mono">#{link.num}</span>
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 mt-1">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full btn-primary py-2.5 text-xs text-center justify-center flex items-center gap-1.5"
                >
                  <span>Transmit Signal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
