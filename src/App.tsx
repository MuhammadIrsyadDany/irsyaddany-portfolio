import React, { useState } from 'react';
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

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-bg-base text-ink-primary relative selection:bg-violet-base/30 selection:text-violet-pale font-sans antialiased">
      {/* Spider-Verse Welcome Intro Screen */}
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

      {/* Spider Easter Egg Replay Trigger (Floating Button) */}
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
