import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Shield, Crosshair } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const [wibTime, setWibTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format to WIB (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setWibTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tickerItems = [
    'STATUS: AVAILABLE FOR SELECTED ROLES',
    '7.983° S 112.631° E // GRESIK & MALANG',
    'D4 TEKNIK INFORMATIKA POLINEMA (IPK 3.62)',
    'CYPRESS 60 E2E SCENARIOS 100% PASSED',
    'FULL-STACK WEB & FLUTTER MOBILE',
    'SUIT INTEGRITY: 100% ALL SYSTEMS NOMINAL',
  ];

  return (
    <footer className="border-t border-white/10 bg-[#07080A] overflow-hidden w-full max-w-full">
      {/* Alter Tactical Marquee Ticker */}
      <div className="py-2.5 bg-[#0E1013] border-b border-white/10 overflow-hidden flex items-center select-none text-[10px] font-mono tracking-widest text-white/50">
        <div className="animate-ticker flex items-center gap-10">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-orange" />
              <span className="text-white/80">{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand & Alter Coordinates */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#15181C] border border-white/10 flex items-center justify-center text-signal-orange font-mono font-bold text-xs">
                ID
              </div>
              <span className="font-alter uppercase font-bold text-base tracking-tight text-white">
                Muhammad Irsyad Dany
              </span>
            </div>

            <p className="text-xs text-white/50 font-sans max-w-sm leading-relaxed">
              Independent Web &amp; Mobile Software Engineer. Architecture, production code and verified systems for products that need to ship.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-white/40">
              <span className="text-signal-orange font-bold">GRESIK // MALANG</span>
              <span>•</span>
              <span className="tabular-nums font-mono text-white/60">
                {wibTime ? `${wibTime} WIB (UTC+7)` : 'WIB UTC+7'}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-[10px] text-white/30 uppercase block mb-2">// DIRECTORY</span>
              <div className="space-y-1.5">
                <a href="#about" className="block text-white/60 hover:text-signal-orange transition-colors">01. Origin Story</a>
                <a href="#projects" className="block text-white/60 hover:text-signal-orange transition-colors">02. Mission Files</a>
                <a href="#skills" className="block text-white/60 hover:text-signal-orange transition-colors">03. Power Profile</a>
                <a href="#experience" className="block text-white/60 hover:text-signal-orange transition-colors">04. Field Archives</a>
              </div>
            </div>
            <div>
              <span className="text-[10px] text-white/30 uppercase block mb-2">// DOSSIER</span>
              <div className="space-y-1.5">
                <a href="#recognition" className="block text-white/60 hover:text-signal-orange transition-colors">05. Credentials</a>
                <a href="#contact" className="block text-white/60 hover:text-signal-orange transition-colors">06. Send Signal</a>
                <a
                  href="/documents/CV_Muhammad_Irsyad_Dany.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-signal-orange hover:underline font-semibold"
                >
                  Download ATS CV
                </a>
              </div>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#15181C] border border-white/10 hover:border-signal-orange hover:text-signal-orange text-white/60 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#15181C] border border-white/10 hover:border-signal-orange hover:text-signal-orange text-white/60 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#15181C] border border-white/10 hover:border-signal-orange hover:text-signal-orange text-white/60 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-signal-orange transition-colors"
              aria-label="Return to top"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-signal-orange" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-white/40">
          <span>&copy; {new Date().getFullYear()} MUHAMMAD IRSYAD DANY. ALL SYSTEMS OPERATIONAL.</span>
          <span className="text-[11px] text-white/30">INSPIRED BY ALTER (FRAMER) DESIGN ARCHITECTURE</span>
        </div>
      </div>
    </footer>
  );
};
