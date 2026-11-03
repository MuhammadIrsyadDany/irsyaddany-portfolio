import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, MapPin, GraduationCap, Phone, Mail, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

const profilePhotos = [
  {
    src: '/images/profile/irsyad-dany.jpg?v=2',
    alt: 'Muhammad Irsyad Dany, S.Tr.Kom - Portrait Wisuda',
  },
  {
    src: '/images/profile/profile-4.jpg?v=2',
    alt: 'Muhammad Irsyad Dany - Formal Portrait Close-up',
  },
  {
    src: '/images/profile/profile-3.jpg?v=2',
    alt: 'Muhammad Irsyad Dany - Studio Seated Pose',
  },
  {
    src: '/images/profile/profile-2.jpg?v=2',
    alt: 'Muhammad Irsyad Dany - Full Formal Suit',
  },
  {
    src: '/images/profile/profile-1.png?v=2',
    alt: 'Muhammad Irsyad Dany - Classic Vest & Tie',
  },
];

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhoto((prev) => (prev + 1) % profilePhotos.length);
  }, []);

  const prevPhoto = useCallback(() => {
    setActivePhoto((prev) => (prev - 1 + profilePhotos.length) % profilePhotos.length);
  }, []);

  // Auto slide smoothly every 4 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextPhoto();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, nextPhoto]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    frameRef.current.style.setProperty('--mx', `${x.toFixed(1)}%`);
    frameRef.current.style.setProperty('--my', `${y.toFixed(1)}%`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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

            {/* Right: Architectural Portal Photo Frame with SVG Orbit & Slide Controls */}
            <div
              className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <div className="relative w-full max-w-sm sm:max-w-md">

                {/* Ambient Radial Backlight */}
                <div
                  className="absolute -inset-6 hero-ambient-glow bg-gradient-to-tr from-violet-600/30 via-fuchsia-600/15 to-cyan-500/20 rounded-[56px_24px_56px_24px] blur-2xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* SVG Precision Orbit System */}
                <svg
                  className="absolute -inset-7 w-[calc(100%+3.5rem)] h-[calc(100%+3.5rem)] pointer-events-none z-0"
                  viewBox="0 0 460 560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9E5CF6" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#7E32D9" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#B88AF8" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#9E5CF6" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#F472B6" stopOpacity="0.3" />
                    </linearGradient>
                    <filter id="glowNode" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Outer Orbit Path */}
                  <g className="hero-svg-orbit-outer">
                    <rect
                      x="16"
                      y="16"
                      width="428"
                      height="528"
                      rx="64"
                      ry="32"
                      stroke="url(#orbitGrad1)"
                      strokeWidth="1.2"
                      strokeDasharray="10 16"
                      fill="none"
                    />
                    {/* Orbiting Celestial Node */}
                    <circle cx="230" cy="16" r="3.5" fill="#B88AF8" filter="url(#glowNode)" />
                    <circle cx="230" cy="544" r="3" fill="#38BDF8" filter="url(#glowNode)" />
                  </g>

                  {/* Inner Counter Orbit Path */}
                  <g className="hero-svg-orbit-inner">
                    <rect
                      x="28"
                      y="28"
                      width="404"
                      height="504"
                      rx="48"
                      ry="24"
                      stroke="url(#orbitGrad2)"
                      strokeWidth="1"
                      strokeDasharray="6 20"
                      fill="none"
                    />
                    <circle cx="28" cy="280" r="2.5" fill="#FB7185" filter="url(#glowNode)" />
                    <circle cx="432" cy="280" r="2.5" fill="#9E5CF6" filter="url(#glowNode)" />
                  </g>
                </svg>

                {/* Corner Precision HUD Tech Markers */}
                <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-violet-light/60 pointer-events-none z-30" />
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-violet-light/60 pointer-events-none z-30" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-violet-light/60 pointer-events-none z-30" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-violet-light/60 pointer-events-none z-30" />

                {/* Floating Top Academic Pill */}
                <div className="absolute -top-3.5 left-4 z-30 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-surface/90 backdrop-blur-md border border-violet-light/35 shadow-[0_4px_16px_rgba(158,92,246,0.3)] text-2xs font-semibold text-ink-primary">
                  <GraduationCap className="w-3.5 h-3.5 text-violet-light" />
                  <span>D4 Teknik Informatika</span>
                  <span className="text-violet-light font-mono font-bold">IPK 3.62</span>
                </div>

                {/* Main Glass Photo Frame with Architectural Portal Curvature */}
                <div
                  ref={frameRef}
                  className="liquid-glass-frame hero-photo-frame p-3 cursor-default relative z-10"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Inner Photo Container with Matching Geometry */}
                  <div className="relative z-10 aspect-[4/5] hero-photo-clip overflow-hidden bg-bg-surface border border-border-subtle bg-grid-fine group/slider select-none">

                    {/* Sliding Track */}
                    <div
                      className="flex h-full w-full transition-transform duration-700 ease-out"
                      style={{
                        transform: `translateX(-${activePhoto * 100}%)`,
                      }}
                    >
                      {profilePhotos.map((photo, index) => (
                        <div
                          key={photo.src}
                          className="w-full h-full flex-shrink-0 relative overflow-hidden"
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover object-top"
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Gradient Overlays for Elegance, Contrast & Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-base/95 via-transparent to-bg-base/30 pointer-events-none" />

                    {/* Slide Counter (Top-Right) */}
                    <div className="absolute top-3.5 right-3.5 z-20 px-2 py-0.5 rounded-full bg-bg-base/80 backdrop-blur-md border border-border-subtle text-2xs font-mono text-ink-muted">
                      <span className="text-violet-light font-bold">0{activePhoto + 1}</span>
                      <span className="text-ink-faint mx-1">/</span>
                      <span>0{profilePhotos.length}</span>
                    </div>

                    {/* Floating Navigation Arrows (Visible on Hover) */}
                    <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={prevPhoto}
                        className="pointer-events-auto w-8 h-8 rounded-full bg-bg-base/80 backdrop-blur-md border border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-violet-light/60 hover:bg-bg-elevated transition-all flex items-center justify-center shadow-lg active:scale-95"
                        aria-label="Foto Sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextPhoto}
                        className="pointer-events-auto w-8 h-8 rounded-full bg-bg-base/80 backdrop-blur-md border border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-violet-light/60 hover:bg-bg-elevated transition-all flex items-center justify-center shadow-lg active:scale-95"
                        aria-label="Foto Selanjutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Area: Indicator Dots & Academic Badge */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 space-y-2">

                      {/* Sliding Indicator Dots */}
                      <div className="flex items-center justify-center gap-1.5">
                        {profilePhotos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActivePhoto(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === activePhoto
                              ? 'w-6 bg-violet-light shadow-[0_0_10px_rgba(158,92,246,0.6)]'
                              : 'w-1.5 bg-white/30 hover:bg-white/60'
                              }`}
                            aria-label={`Slide ${index + 1}`}
                          />
                        ))}
                      </div>

                      {/* Integrated Glass Academic Info Badge */}
                      <div className="rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center justify-between bg-bg-base/90 backdrop-blur-md border border-border-subtle shadow-xl">
                        <div>
                          <p className="text-2xs font-bold text-ink-primary flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Politeknik Negeri Malang</span>
                          </p>
                          <p className="text-2xs text-ink-muted">S.Tr.Kom • Web Developer</p>
                        </div>
                        <span className="text-2xs font-mono font-semibold px-2 py-0.5 rounded-full bg-violet-dim text-violet-light border border-violet-light/30">
                          Polinema
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
};
