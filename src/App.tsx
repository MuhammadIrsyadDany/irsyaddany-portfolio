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
  const startedRef = useRef(false);

  // Create audio element on mount
  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';
    audioRef.current = audio;

    // Attempt immediate autoplay (works if browser allows or user visited before)
    audio.play().then(() => {
      startedRef.current = true;
      setIsPlaying(true);
      doFadeIn(audio);
    }).catch(() => {
      // Browser blocked — fall back to first interaction
      const resume = () => {
        if (startedRef.current) return;
        audio.volume = 0;
        audio.play().then(() => {
          startedRef.current = true;
          setIsPlaying(true);
          doFadeIn(audio);
        }).catch(() => {});
      };
      window.addEventListener('click', resume, { once: true });
      window.addEventListener('touchstart', resume, { once: true });
      window.addEventListener('keydown', resume, { once: true });
    });

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Smooth fade in helper (works directly on audio element)
  function doFadeIn(audio: HTMLAudioElement, target = 0.55, ms = 1800) {
    if (fadeRef.current) clearInterval(fadeRef.current);
    const steps = 40;
    const stepMs = ms / steps;
    const delta = target / steps;
    fadeRef.current = setInterval(() => {
      const next = Math.min(audio.volume + delta, target);
      audio.volume = next;
      if (next >= target && fadeRef.current) {
        clearInterval(fadeRef.current);
        fadeRef.current = null;
      }
    }, stepMs);
  }

  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    doFadeIn(audio);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!isMuted) {
      // Mute instantly
      if (fadeRef.current) clearInterval(fadeRef.current);
      audio.volume = 0;
      audio.pause();
      setIsMuted(true);
    } else {
      // Unmute with fade
      setIsMuted(false);
      if (!startedRef.current) {
        audio.play().then(() => {
          startedRef.current = true;
          setIsPlaying(true);
          fadeIn();
        }).catch(() => {});
      } else {
        audio.volume = 0;
        audio.play().catch(() => {});
        fadeIn();
      }
    }
  }, [isMuted, fadeIn]);

  return (
    <div className="min-h-screen bg-bg-base text-ink-primary relative selection:bg-violet-base/30 selection:text-violet-pale font-sans antialiased">
      <SpiderWelcome
        isOpen={showIntro}
        onClose={() => setShowIntro(false)}
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

      {/* Vinyl Player — bottom-right, shown after welcome screen */}
      {!showIntro && (
        <VinylPlayer
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={handleToggleMute}
        />
      )}
    </div>
  );
};

export default App;
