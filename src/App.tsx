import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ScrollProgressBar } from './components/ScrollAnimations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SpiderWelcome } from './components/SpiderWelcome';
import { VinylPlayer } from './components/VinylPlayer';

const AUDIO_SRC = '/audio/spider-theme.mp3';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const interactedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  const fadeIn = useCallback((target = 0.55, ms = 1800) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) clearInterval(fadeRef.current);
    const steps = 40;
    const stepMs = ms / steps;
    const delta = target / steps;
    fadeRef.current = setInterval(() => {
      if (!audioRef.current) return;
      const next = Math.min(audioRef.current.volume + delta, target);
      audioRef.current.volume = next;
      if (next >= target && fadeRef.current) {
        clearInterval(fadeRef.current);
        fadeRef.current = null;
      }
    }, stepMs);
  }, []);

  const startAudio = useCallback(() => {
    if (interactedRef.current || isMuted) return;
    const audio = audioRef.current;
    if (!audio) return;
    interactedRef.current = true;
    audio.volume = 0;
    audio.play().then(() => {
      setIsPlaying(true);
      fadeIn();
    }).catch(() => {
      interactedRef.current = false;
    });
  }, [isMuted, fadeIn]);

  useEffect(() => {
    const handler = () => startAudio();
    window.addEventListener('mousemove', handler, { once: true });
    window.addEventListener('click', handler, { once: true });
    window.addEventListener('touchstart', handler, { once: true });
    return () => {
      window.removeEventListener('mousemove', handler);
      window.removeEventListener('click', handler);
      window.removeEventListener('touchstart', handler);
    };
  }, [startAudio]);

  const handleToggleMute = useCallback(() => {
    if (!isMuted) {
      setIsMuted(true);
      if (fadeRef.current) clearInterval(fadeRef.current);
      if (audioRef.current) {
        audioRef.current.volume = 0;
        audioRef.current.pause();
      }
    } else {
      setIsMuted(false);
      const audio = audioRef.current;
      if (!audio) return;
      if (!interactedRef.current) {
        startAudio();
      } else {
        audio.volume = 0;
        audio.play().catch(() => {});
        fadeIn();
      }
    }
  }, [isMuted, fadeIn, startAudio]);

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-bg-base text-ink-primary relative selection:bg-violet-base/30 selection:text-violet-pale font-sans antialiased">
      <SpiderWelcome
        isOpen={showIntro}
        onClose={() => setShowIntro(false)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onFirstInteraction={startAudio}
      />

      <ScrollProgressBar />
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />

      {!showIntro && (
        <VinylPlayer
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={handleToggleMute}
        />
      )}

      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleReplayIntro}
          aria-label="Replay Spider-Man Welcome Animation"
          className="group relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-bg-raised/85 hover:bg-bg-overlay border border-violet-base/30 hover:border-violet-bright backdrop-blur-md shadow-lg shadow-black/40 text-xs font-mono text-ink-secondary hover:text-white transition-all duration-300 hover:scale-105"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-500 to-violet-deep flex items-center justify-center text-white text-2xs shadow-sm shadow-rose-500/50 group-hover:rotate-12 transition-transform">
            🕸️
          </div>
          <span className="hidden sm:inline font-medium">Spider Intro</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default App;
