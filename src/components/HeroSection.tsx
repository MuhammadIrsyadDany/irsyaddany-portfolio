import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, MapPin, GraduationCap, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const profilePhotos = [
  {
    src: '/images/profile/profile-4.png',
    alt: 'Muhammad Irsyad Dany - Formal Portrait Close-up',
  },
  {
    src: '/images/profile/profile-3.png',
    alt: 'Muhammad Irsyad Dany - Studio Seated Pose',
  },
  {
    src: '/images/profile/profile-2.png',
    alt: 'Muhammad Irsyad Dany - Full Formal Suit',
  },
  {
    src: '/images/profile/profile-1.png',
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden"
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
              dengan predikat{" "}
              <span className="text-violet-light font-semibold tabular-nums">
                Cum Laude (IPK 3.62 / 4.00)
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
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-light transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-violet-light transition-colors p-1"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            </div>

            {/* Right: Selective Liquid Glass Photo Frame with Automatic Sliding Carousel */}
            <div
              className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div
                  ref={frameRef}
                  className="liquid-glass-frame rounded-3xl p-3 cursor-default"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Photo Container with 4/5 Aspect Ratio & Horizontal Sliding Track */}
                  <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden bg-bg-surface border border-border-subtle bg-grid-fine group/slider select-none">

                    {/* Sliding Track (geser otomatis secara horizontal) */}
                    <div
                      className="flex h-full w-full transition-transform duration-700 ease-out"
                      style={{
                        transform: `translateX(-${activePhoto * 100}%)`,
                      }}
                    >
                      {profilePhotos.map((photo) => (
                        <div
                          key={photo.src}
                          className="w-full h-full flex-shrink-0 relative overflow-hidden"
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover object-top"
                            loading="eager"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Gradient Overlays for Elegance & Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-transparent to-bg-base/30 pointer-events-none" />

                    {/* Subtle Floating Navigation Arrows (Visible on Hover) */}
                    <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={prevPhoto}
                        className="pointer-events-auto w-8 h-8 rounded-full bg-bg-base/75 backdrop-blur-md border border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-violet-light/60 hover:bg-bg-elevated transition-all flex items-center justify-center shadow-lg active:scale-95"
                        aria-label="Foto Sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextPhoto}
                        className="pointer-events-auto w-8 h-8 rounded-full bg-bg-base/75 backdrop-blur-md border border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-violet-light/60 hover:bg-bg-elevated transition-all flex items-center justify-center shadow-lg active:scale-95"
                        aria-label="Foto Selanjutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Area: Minimalist Indicator Dots & Cum Laude Badge */}
                    <div className="absolute bottom-3 left-3 right-3 z-20 space-y-2.5">

                      {/* Minimalist Sliding Indicator Dots (Tanpa teks label) */}
                      <div className="flex items-center justify-center gap-1.5 py-1">
                        {profilePhotos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActivePhoto(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === activePhoto
                              ? 'w-6 bg-violet-light shadow-[0_0_10px_rgba(158,92,246,0.6)]'
                              : 'w-1.5 bg-white/25 hover:bg-white/50'
                              }`}
                            aria-label={`Slide ${index + 1}`}
                          />
                        ))}
                      </div>

                      {/* Cum Laude Badge */}
                      <div className="rounded-xl p-3 flex items-center justify-between bg-bg-base/85 backdrop-blur-md border border-border-subtle shadow-lg">
                        <div>
                          <p className="text-2xs uppercase tracking-wider font-semibold text-violet-light">
                            Politeknik Negeri Malang
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-2xs text-ink-muted">
                          <span className="w-2 h-2 rounded-full bg-violet-base animate-pulse" />
                          <span>Web Developer</span>
                        </div>
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
