import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, Crosshair, FileText, ChevronDown, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo } from '../data/personal';

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
  const [activePhoto, setActivePhoto] = useState(0);
  const [suited, setSuited] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhoto((prev) => (prev + 1) % closeUpPhotos.length);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#07080A] flex flex-col justify-between pt-20 pb-8 px-4 sm:px-8 overflow-hidden tactical-grid-bg select-none"
    >
      {/* ── Alter Top Editorial Heading ── */}
      <div className={`w-full max-w-6xl mx-auto pt-4 transition-all duration-700 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
      }`}>
        <p className="text-xs sm:text-sm font-sans text-white/90 leading-snug tracking-tight max-w-3xl">
          <strong className="text-white font-bold uppercase tracking-wider">MUHAMMAD IRSYAD DANY</strong>
          <span className="text-white/40 mx-2">—</span>
          Independent Web &amp; Mobile Developer in Gresik &amp; Malang. By day: enterprise architectures, mobile systems and clean code. By deadline: full-stack engineering that ships.
        </p>
      </div>

      {/* ── Alter Central Cinematic Stage with Giant Outlined Typography & Portrait ── */}
      <div className="relative flex-1 flex items-center justify-center my-4 sm:my-2">
        {/* Giant Outlined Typography (Signature Alter 330px Stroked Text) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="font-display font-black text-[clamp(6.5rem,23vw,26rem)] leading-[0.76] tracking-tighter text-transparent text-center select-none"
            style={{
              WebkitTextStroke: suited ? '2px rgba(255, 90, 31, 0.45)' : '2px rgba(237, 237, 240, 0.22)',
              textShadow: suited ? '0 0 40px rgba(255, 90, 31, 0.25)' : 'none',
              transition: 'all 0.5s ease',
            }}
          >
            IRSYAD
          </div>
          <div
            className="font-display font-black text-[clamp(6.5rem,23vw,26rem)] leading-[0.76] tracking-tighter text-transparent text-center select-none"
            style={{
              WebkitTextStroke: suited ? '2px rgba(255, 90, 31, 0.45)' : '2px rgba(237, 237, 240, 0.22)',
              textShadow: suited ? '0 0 40px rgba(255, 90, 31, 0.25)' : 'none',
              transition: 'all 0.5s ease',
            }}
          >
            DANY
          </div>
        </div>

        {/* Tactical Crosshair / Viewfinder Overlay Markers */}
        <div className="absolute inset-4 sm:inset-10 pointer-events-none z-10 border border-white/[0.04]">
          <div className="tactical-corner-tl" />
          <div className="tactical-corner-tr" />
          <div className="tactical-corner-bl" />
          <div className="tactical-corner-br" />
        </div>

        {/* Center Stage Character / Portrait Container */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          <div
            onClick={nextPhoto}
            className="relative w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group shadow-[0_24px_64px_rgba(0,0,0,0.85)] border border-white/15 bg-[#0E1013]"
            title="Klik untuk mengganti foto portrait close-up"
          >
            {/* Tactical Corners */}
            <div className="tactical-corner-tl" />
            <div className="tactical-corner-tr" />
            <div className="tactical-corner-bl" />
            <div className="tactical-corner-br" />

            {/* Photos */}
            {closeUpPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  index === activePhoto ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}

            {/* Bottom Gradient Fade (Signature Alter Stage Bottom Fade) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#07080A] via-[#07080A]/30 to-transparent z-20 opacity-80" />

            {/* Active Badge on top-right */}
            <div className="absolute top-3 right-3 z-30 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[9px] font-mono text-signal-orange">
              {closeUpPhotos[activePhoto].badge}
            </div>

            {/* Bottom Prompt */}
            <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between text-[9px] font-mono text-white/70 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
              <span>{closeUpPhotos[activePhoto].label}</span>
              <span className="text-signal-orange">CYCLE PHOTO</span>
            </div>
          </div>

          {/* Minimalist Switcher Pills */}
          <div className="mt-3 flex items-center gap-1.5 z-30">
            {closeUpPhotos.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePhoto(idx)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition-all border ${
                  idx === activePhoto
                    ? 'bg-signal-orange text-white border-signal-orange shadow-[0_0_10px_rgba(255,90,31,0.5)]'
                    : 'bg-[#15181C] text-white/50 border-white/10 hover:text-white'
                }`}
              >
                {p.label.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Alter Tactical HUD Controls & Telemetry ── */}
      <div className="w-full max-w-6xl mx-auto relative z-30 pt-2 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end justify-between text-xs font-mono">
          {/* Top-Left / Bottom-Left: File & Coordinates */}
          <div className="md:col-span-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal-orange animate-signal-pulse" />
              <span className="font-bold text-white tracking-wider">
                {suited ? 'FILE 001 / ALTER EGO' : 'FILE 001 / CIVILIAN'}
              </span>
            </div>
            <p className="text-white/40 text-[11px]">
              7.983° S 112.631° E // GRESIK &amp; MALANG, ID
            </p>
            <p className="text-white/60 text-[11px] font-sans pt-1">
              D4 Teknik Informatika Polinema (IPK 3.62) • Capstone 100% E2E Cypress Verified.
            </p>
          </div>

          {/* Center: Quick Action Buttons */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-center gap-2.5">
            <a href="#contact" className="btn-primary text-xs py-2 px-4">
              <span>Send The Signal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/documents/CV_Muhammad_Irsyad_Dany.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2 px-3.5"
            >
              <FileText className="w-3.5 h-3.5 mr-1" />
              <span>ATS CV</span>
            </a>
          </div>

          {/* Bottom-Right: Suit Integrity Meter & Status */}
          <div className="md:col-span-4 flex flex-col md:items-end justify-end space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-[11px]">Suit integrity</span>
              <span className="text-signal-orange font-bold font-mono text-sm">100%</span>
            </div>

            {/* Meter Bar */}
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-full h-full bg-signal-orange rounded-full" />
            </div>

            <div className="flex items-center gap-2 pt-0.5">
              <span className="text-[10px] text-white/40 uppercase">Status:</span>
              <span className="text-xs font-bold text-white uppercase">
                {suited ? 'ALTER EGO SUITED' : 'CIVILIAN'}
              </span>
              <button
                onClick={() => setSuited(!suited)}
                className="ml-2 px-2 py-0.5 rounded bg-white/5 hover:bg-signal-orange hover:text-white border border-white/10 text-[9px] uppercase font-mono tracking-wider transition-all text-white/70"
              >
                {suited ? 'Revert' : 'Scroll to suit up'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
