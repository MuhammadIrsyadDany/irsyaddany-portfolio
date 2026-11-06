import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, MapPin, GraduationCap, Phone, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

// Lightweight, crisp close-up portraits optimized for speed, precise framing & zero clutter
const closeUpPhotos = [
  {
    id: 'wisuda',
    label: 'Wisuda (S.Tr.Kom)',
    src: '/images/profile/wisuda-closeup.jpg?v=7',
    alt: 'Muhammad Irsyad Dany, S.Tr.Kom - Close Up Wisuda',
  },
  {
    id: 'studio',
    label: 'Studio Formal',
    src: '/images/profile/studio-closeup.jpg?v=5',
    alt: 'Muhammad Irsyad Dany - Studio Formal Close Up',
  },
  {
    id: 'casual',
    label: 'Portrait Close-Up',
    src: '/images/profile/pas-foto-closeup.jpg?v=5',
    alt: 'Muhammad Irsyad Dany - Formal Portrait Close Up',
  },
];

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhoto((prev) => (prev + 1) % closeUpPhotos.length);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    frameRef.current.style.setProperty('--mx', `${x.toFixed(1)}%`);
    frameRef.current.style.setProperty('--my', `${y.toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    if (!frameRef.current) return;
    frameRef.current.style.setProperty('--mx', '30%');
    frameRef.current.style.setProperty('--my', '20%');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden w-full max-w-full"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Bio & Actions */}
          <div className="lg:col-span-7">

            {/* Availability Badge */}
            <div
              className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-dim border border-violet-light/25 text-xs text-ink-primary font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-violet-light opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-base" />
                </span>
                <span>AVAILABLE FOR SELECTED PROJECTS</span>
              </div>
            </div>

            {/* Headline */}
            <div className="mt-4">
              <h1 className="text-[clamp(2.25rem,5.8vw,5.5rem)] font-black tracking-[-0.055em] leading-[0.88]">
                <span className="text-ink-primary">Muhammad</span>
                <br />
                <span className="text-ink-primary">Irsyad</span>{" "}
                <span className="text-violet-light">Dany.</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg md:text-xl font-medium tracking-tight text-ink-secondary">
                Web Developer{" "}
                <span className="text-violet-light">&amp;</span>{" "}
                Software Engineer
              </p>
            </div>

            {/* Bio */}
            <p
              className={`mt-5 text-sm sm:text-base text-ink-muted leading-reading max-w-xl transition-all duration-700 delay-200 ease-out ${mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
                }`}
            >
              Lulusan{" "}
              <strong className="text-ink-primary font-semibold">
                D4 Teknik Informatika Politeknik Negeri Malang
              </strong>{" "}
              dengan capaian{" "}
              <span className="text-violet-light font-semibold tabular-nums">
                IPK 3.62 / 4.00
              </span>
              . Berpengalaman merancang dan mengembangkan sistem web yang fungsional,
              teruji, dan berorientasi pada kebutuhan pengguna.
            </p>

            {/* CTAs */}
            <div
              className={`mt-6 flex flex-wrap items-center gap-3.5 transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            >
              <a href="#projects" className="btn-primary group">
                <span>Lihat Proyek Utama</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/documents/CV_Muhammad_Irsyad_Dany.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group flex items-center gap-2 hover:border-violet-light/50"
              >
                <FileText className="w-4 h-4 text-violet-light group-hover:scale-110 transition-transform" />
                <span>Unduh CV (ATS)</span>
              </a>
              <a href="#contact" className="btn-outline">
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Meta Row */}
            <div
              className={`mt-8 pt-6 border-t border-border-faint flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-ink-muted tabular-nums transition-all duration-700 delay-400 ease-out ${mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
                }`}
            >
              {/* Location */}
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-light" />
                <span>Gresik, Jawa Timur</span>
              </div>

              {/* Education */}
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-violet-light" />
                <span>D4 Teknik Informatika (Polinema)</span>
              </div>

              {/* Phone */}
              <a
                href="tel:+628997984448"
                className="flex items-center gap-1.5 hover:text-violet-light transition-colors"
                aria-label="Telepon +62-899-7984-448"
              >
                <Phone className="w-3.5 h-3.5 text-violet-light" />
                <span>+62-899-7984-448</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-3 text-ink-secondary ml-auto">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-light transition-colors p-1"
                  aria-label="GitHub"
                  title="Kunjungi GitHub Muhammad Irsyad Dany"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-light transition-colors p-1"
                  aria-label="LinkedIn"
                  title="Kunjungi LinkedIn Muhammad Irsyad Dany"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-light transition-colors p-1"
                  aria-label="Instagram"
                  title="Kunjungi Instagram @rsydanyy"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-violet-light transition-colors p-1"
                  aria-label="Email"
                  title="Kirim Email ke Muhammad Irsyad Dany"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            </div>

            {/* Right: Avant-Garde Sculptural Close-Up Portrait (Clean, Unconventional, Zero-Clutter) */}
            <div
              className={`lg:col-span-5 flex flex-col items-center lg:items-end justify-center transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <div className="relative w-full max-w-xs sm:max-w-sm group">

                {/* Soft Ethereal Atmospheric Bloom (Pure CSS GPU layer, Zero CPU) */}
                <div
                  className="absolute -inset-4 hero-ambient-glow rounded-[80px_24px_80px_24px] bg-gradient-to-tr from-violet-base/25 via-violet-light/15 to-transparent blur-2xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* Main Sculptural Obsidian Frame - No Clutter */}
                <div
                  ref={frameRef}
                  className="hero-sculptural-portal p-2.5 sm:p-3 cursor-pointer relative z-10 select-none"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={nextPhoto}
                  title="Klik untuk melihat pose close-up berikutnya"
                >
                  {/* Inner Photo Container - Pure Close-Up Portrait */}
                  <div className="hero-sculptural-inner aspect-[4/5] overflow-hidden bg-bg-surface relative border border-border-subtle/50">
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
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>
                    ))}

                    {/* Subtle bottom gradient to gracefully ground the close-up portrait */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-base/30 via-transparent to-transparent z-20" />
                  </div>
                </div>

                {/* Minimalist Pose Switcher Below Frame (Outside photo - ZERO clutter on image!) */}
                <div className="mt-4 flex items-center justify-center gap-2 relative z-20">
                  {closeUpPhotos.map((photo, index) => (
                    <button
                      key={photo.id}
                      onClick={() => setActivePhoto(index)}
                      className={`px-3 py-1 rounded-full text-2xs font-mono font-medium transition-all duration-300 ${
                        index === activePhoto
                          ? 'bg-violet-dim text-violet-light border border-violet-light/40 shadow-[0_0_12px_rgba(158,92,246,0.25)]'
                          : 'bg-bg-surface/50 text-ink-muted border border-border-faint/60 hover:text-ink-primary hover:border-border-soft'
                      }`}
                      aria-label={`Pilih pose ${photo.label}`}
                    >
                      {photo.label}
                    </button>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
    </section>
  );
};
