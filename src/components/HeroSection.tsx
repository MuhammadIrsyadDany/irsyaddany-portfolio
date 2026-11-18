import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, MapPin, GraduationCap, Phone, Mail, FileText, Crosshair, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

// Lightweight, crisp close-up portraits optimized for speed & zero clutter
const closeUpPhotos = [
  {
    id: 'wisuda',
    label: 'Wisuda (S.Tr.Kom)',
    src: '/images/profile/wisuda-closeup.jpg?v=7',
    alt: 'Muhammad Irsyad Dany, S.Tr.Kom - Close Up Wisuda',
    badge: 'CLASSIFIED // S.TR.KOM',
  },
  {
    id: 'studio',
    label: 'Studio Formal',
    src: '/images/profile/studio-closeup.jpg?v=5',
    alt: 'Muhammad Irsyad Dany - Studio Formal Close Up',
    badge: 'DOSSIER // STUDIO',
  },
  {
    id: 'casual',
    label: 'Portrait Close-Up',
    src: '/images/profile/pas-foto-closeup.jpg?v=5',
    alt: 'Muhammad Irsyad Dany - Formal Portrait Close Up',
    badge: 'IDENT // REGISTRY',
  },
];

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [alterMode, setAlterMode] = useState(false); // Toggle Civilian / Alter Ego
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhoto((prev) => (prev + 1) % closeUpPhotos.length);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden w-full max-w-full tactical-grid-bg"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Top Alter Dossier Status Bar */}
        <div className={`mb-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-white/10 pb-4 transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#15181C] border border-white/10 text-signal-orange font-bold text-[11px] tracking-wider uppercase">
              {alterMode ? 'FILE 001 / ALTER EGO' : 'FILE 001 / CIVILIAN'}
            </span>
            <span className="text-white/50 hidden sm:inline-block">
              7.983° S 112.631° E // GRESIK & MALANG, ID
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/70 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-signal-orange animate-signal-pulse" />
              <span>SUIT INTEGRITY: <strong className="text-white font-mono">100%</strong></span>
            </div>
            <button
              onClick={() => setAlterMode(!alterMode)}
              className="px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-signal-orange hover:text-white border border-white/10 text-[10px] uppercase font-mono tracking-wider transition-all text-white/80"
              title="Toggle Alter Ego Mode"
            >
              {alterMode ? 'Mode: Suited' : 'Scroll to suit up'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: Identity Headline & Mission Pitch */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <div className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-signal-orange uppercase tracking-widest">
                <span className="text-white/40">//</span>
                <span>INDEPENDENT FULL-STACK &amp; MOBILE DEVELOPER</span>
              </div>
            </div>

            {/* Massive Display Heading (Alter Style) */}
            <div className="mt-3">
              <h1 className="font-display text-[clamp(2.75rem,7.2vw,6.5rem)] font-extrabold uppercase tracking-tight leading-[0.88] text-white">
                MUHAMMAD
                <br />
                IRSYAD <span className="text-signal-orange">DANY.</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl font-medium tracking-tight text-white/80 max-w-xl">
                By day: enterprise web platforms, mobile architectures and robust systems.
                <br />
                <span className="text-white/50">By deadline: full-stack engineering that ships.</span>
              </p>
            </div>

            {/* Concise Bio */}
            <p className={`mt-5 text-sm sm:text-base text-white/60 leading-relaxed max-w-xl transition-all duration-700 delay-150 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
              Lulusan <strong className="text-white font-semibold">D4 Teknik Informatika Politeknik Negeri Malang</strong> (IPK <span className="text-signal-orange font-mono font-bold">3.62 / 4.00</span>). Berpengalaman membangun sistem web enterprise berbasis Laravel &amp; MySQL dengan validasi <strong className="text-white font-semibold">100% E2E Cypress Testing</strong>, serta perancangan aplikasi mobile Flutter di industri.
            </p>

            {/* Tactical Actions (Alter Button Language) */}
            <div className={`mt-8 flex flex-wrap items-center gap-3.5 transition-all duration-700 delay-300 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
              <a href="#contact" className="btn-primary group">
                <span>Send The Signal</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a href="#projects" className="btn-secondary group">
                <Crosshair className="w-3.5 h-3.5 text-signal-orange group-hover:rotate-45 transition-transform" />
                <span>Mission Files (06)</span>
              </a>

              <a
                href="/documents/CV_Muhammad_Irsyad_Dany.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
                title="Download ATS Resume / CV"
              >
                <FileText className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Coordinates & Meta Specs Footer */}
            <div className={`mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-5 text-xs font-mono text-white/50 transition-all duration-700 delay-400 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-signal-orange" />
                <span>Gresik &amp; Malang, ID</span>
              </div>

              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-signal-orange" />
                <span>Polinema (S.Tr.Kom)</span>
              </div>

              <a
                href="tel:+628997984448"
                className="flex items-center gap-1.5 hover:text-signal-orange transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-signal-orange" />
                <span>+62-899-7984-448</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-3.5 text-white/70 ml-auto">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-signal-orange transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-signal-orange transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-signal-orange transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-signal-orange transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Tactical Close-Up Dossier Portrait Frame */}
          <div className={`lg:col-span-5 flex flex-col items-center lg:items-end justify-center transition-all duration-700 delay-300 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Tactical Dossier Box */}
              <div className="alter-dossier-frame group">
                {/* Header HUD Bar */}
                <div className="mb-2 px-1 flex items-center justify-between text-[10px] font-mono text-white/50 border-b border-white/10 pb-1.5">
                  <span className="flex items-center gap-1.5 text-signal-orange">
                    <Zap className="w-3 h-3" />
                    <span>{closeUpPhotos[activePhoto].badge}</span>
                  </span>
                  <span>ID-2026 // LIVE</span>
                </div>

                {/* Inner Image with Tactical Corners and Scanline */}
                <div
                  ref={frameRef}
                  onClick={nextPhoto}
                  className="alter-dossier-inner alter-scanline cursor-pointer select-none group/photo"
                  title="Klik untuk mengganti foto portrait"
                >
                  <div className="tactical-corner-tl" />
                  <div className="tactical-corner-tr" />
                  <div className="tactical-corner-bl" />
                  <div className="tactical-corner-br" />

                  {closeUpPhotos.map((photo, index) => (
                    <div
                      key={photo.id}
                      className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                        index === activePhoto ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/photo:scale-[1.03]"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </div>
                  ))}

                  {/* Gradient ground */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#07080A]/60 via-transparent to-transparent z-20" />

                  {/* Bottom crosshair info */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-30 flex items-center justify-between text-[9px] font-mono text-white/70 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    <span>FRAME // 4:5 BI-CUBIC</span>
                    <span className="text-signal-orange">CLICK TO CYCLE</span>
                  </div>
                </div>

                {/* Photo Selector Switcher Below Frame */}
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  {closeUpPhotos.map((photo, index) => (
                    <button
                      key={photo.id}
                      onClick={() => setActivePhoto(index)}
                      className={`py-1.5 px-2 rounded-lg text-[10px] font-mono font-medium uppercase tracking-wider transition-all duration-200 text-center border ${
                        index === activePhoto
                          ? 'bg-signal-orange/20 text-signal-orange border-signal-orange shadow-[0_0_12px_rgba(255,90,31,0.3)]'
                          : 'bg-[#15181C] text-white/50 border-white/5 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {photo.label.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
