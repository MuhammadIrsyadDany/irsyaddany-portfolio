import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowRight, Zap, ChevronRight, Sparkles, ShieldCheck, Code2, Globe } from 'lucide-react';

interface SpiderWelcomeProps {
  isOpen?: boolean;
  onClose?: () => void;
}

// Procedural Web Audio Synth for subtle cinematic Spider-Verse FX
const playSoundFX = (type: 'thwip' | 'sense' | 'warp') => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (type === 'thwip') {
      const bufferSize = ctx.sampleRate * 0.2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3400, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.18);
      filter.Q.setValueAtTime(3, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } else if (type === 'sense') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(920, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1840, ctx.currentTime + 0.12);
      osc.frequency.exponentialRampToValueAtTime(460, ctx.currentTime + 0.28);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'warp') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.45);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    }
  } catch {
    // Audio context may be restricted by browser policy
  }
};

export const SpiderWelcome: React.FC<SpiderWelcomeProps> = ({
  isOpen = true,
  onClose,
}) => {
  const [progress, setProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0, active: false });

  const handleExit = useCallback(() => {
    if (soundEnabled) playSoundFX('warp');
    if (onClose) onClose();
  }, [soundEnabled, onClose]);

  // Handle countdown & auto-exit
  useEffect(() => {
    if (!isOpen) return;
    setProgress(0);

    if (soundEnabled) {
      playSoundFX('sense');
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.2;
      });
    }, 35);

    return () => {
      clearInterval(interval);
    };
  }, [isOpen, soundEnabled]);

  // Auto exit when progress completes
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        handleExit();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, handleExit]);

  // Keyboard shortcut listener: ESC or Space or Enter to skip
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleExit]);

  // Mouse interaction for organic spider silk tension
  const handleMouseMove = (e: React.MouseEvent) => {
    mousePos.current = {
      x: e.clientX,
      y: e.clientY,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mousePos.current.active = false;
  };

  // Canvas Pure Spider-Man Web Motif with Floating Embers & Interactive Silk Physics
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const centerX = width / 2;
    const centerY = height / 2;
    const rings = 6;
    const radialRays = 16;
    let time = 0;

    // Floating Bio-Electric Embers / Spores in background
    const embersCount = 35;
    const embers: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];
    for (let i = 0; i < embersCount; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.3 - Math.random() * 0.5,
        size: 1 + Math.random() * 2,
        alpha: 0.2 + Math.random() * 0.6,
        color: i % 3 === 0 ? '#FB7185' : i % 2 === 0 ? '#B88AF8' : '#38BDF8',
      });
    }

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Deep Obsidian foundation (#090511) with ambient violet nebula glow
      const bgGrad = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, Math.max(width, height) * 0.8);
      bgGrad.addColorStop(0, '#240F3E');
      bgGrad.addColorStop(0.35, '#140726');
      bgGrad.addColorStop(0.75, '#090511');
      bgGrad.addColorStop(1, '#05020A');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Embers
      embers.forEach((ember) => {
        ember.x += ember.vx;
        ember.y += ember.vy;

        if (ember.y < 0) {
          ember.y = height + 10;
          ember.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fillStyle = ember.color;
        ctx.globalAlpha = ember.alpha * (0.5 + 0.5 * Math.sin(time * 3 + ember.x));
        ctx.shadowBlur = 8;
        ctx.shadowColor = ember.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // Spider Web Radial Geometry
      ctx.save();
      ctx.translate(centerX, centerY);

      // Calculate mouse influence vector
      let mouseOffsetX = 0;
      let mouseOffsetY = 0;
      if (mousePos.current.active) {
        mouseOffsetX = (mousePos.current.x - centerX) * 0.05;
        mouseOffsetY = (mousePos.current.y - centerY) * 0.05;
      }

      // 1. Draw Spider-Man Web Radial Spokes
      for (let i = 0; i < radialRays; i++) {
        const angle = (i * 2 * Math.PI) / radialRays;
        const maxRadius = Math.max(width, height) * 0.65;
        const targetX = Math.cos(angle) * maxRadius + mouseOffsetX * 0.3;
        const targetY = Math.sin(angle) * maxRadius + mouseOffsetY * 0.3;
        
        ctx.beginPath();
        ctx.moveTo(mouseOffsetX * 0.1, mouseOffsetY * 0.1);
        ctx.lineTo(targetX, targetY);
        ctx.strokeStyle = 'rgba(158, 92, 246, 0.13)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 2. Draw Organic Concentric Silk Web Rings
      for (let r = 1; r <= rings; r++) {
        const baseRadius = (r / rings) * (Math.min(width, height) * 0.44);
        const ringPulse = Math.sin(time * 0.9 - r * 0.35) * 2.5;
        const radius = baseRadius + ringPulse;

        ctx.beginPath();
        for (let i = 0; i <= radialRays; i++) {
          const angle = (i * 2 * Math.PI) / radialRays;
          const px = Math.cos(angle) * radius + (mouseOffsetX * (r / rings) * 0.4);
          const py = Math.sin(angle) * radius + (mouseOffsetY * (r / rings) * 0.4);

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            const prevAngle = ((i - 1) * 2 * Math.PI) / radialRays;
            const midAngle = (angle + prevAngle) / 2;
            const midRadius = radius * 0.94;
            const cpx = Math.cos(midAngle) * midRadius + (mouseOffsetX * (r / rings) * 0.4);
            const cpy = Math.sin(midAngle) * midRadius + (mouseOffsetY * (r / rings) * 0.4);
            ctx.quadraticCurveTo(cpx, cpy, px, py);
          }
        }
        ctx.closePath();

        const isGlowRing = r === 2 || r === 4;
        ctx.strokeStyle = isGlowRing ? 'rgba(184, 138, 248, 0.28)' : 'rgba(126, 50, 217, 0.14)';
        ctx.lineWidth = isGlowRing ? 1.1 : 0.7;
        ctx.stroke();

        // Glowing Bio-Electric Dew Sparks at Web Intersections
        for (let i = 0; i < radialRays; i += 2) {
          const angle = (i * 2 * Math.PI) / radialRays;
          const px = Math.cos(angle) * radius + (mouseOffsetX * (r / rings) * 0.4);
          const py = Math.sin(angle) * radius + (mouseOffsetY * (r / rings) * 0.4);

          ctx.beginPath();
          ctx.arc(px, py, 1.3 + Math.sin(time * 2.2 + i + r) * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = (i + r) % 3 === 0 ? '#FB7185' : '#B88AF8';
          ctx.shadowBlur = 6;
          ctx.shadowColor = (i + r) % 3 === 0 ? '#FB7185' : '#9E5CF6';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      ctx.restore();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="spider-welcome-open-typography"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(16px)',
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="fixed inset-0 z-[99999] flex flex-col justify-between items-center overflow-hidden bg-bg-base select-none px-6 py-6 sm:py-8"
        >
          {/* Canvas Spider-Man Web Motif Background */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* ========================================================================= */}
          {/* TOP CONTROLS (AUDIO & SKIP ESC)                                           */}
          {/* ========================================================================= */}
          <header className="relative z-20 w-full max-w-6xl mx-auto flex items-center justify-end">
            <div className="flex items-center gap-3">
              {/* SFX Audio Toggle */}
              <button
                onClick={() => {
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  if (next) playSoundFX('thwip');
                }}
                className="px-3.5 py-1.5 rounded-full border border-violet-base/40 bg-bg-surface/75 backdrop-blur-md text-ink-secondary hover:text-white hover:border-violet-bright transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer shadow-sm"
                title="Toggle Web Audio SFX"
              >
                {soundEnabled ? <Volume2 size={13} className="text-violet-light" /> : <VolumeX size={13} className="text-ink-muted" />}
                <span className="hidden sm:inline">{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
              </button>

              {/* Skip Button */}
              <button
                onClick={handleExit}
                className="group px-4 py-1.5 rounded-full border border-violet-light/20 bg-bg-surface/75 hover:bg-bg-raised/90 backdrop-blur-md text-ink-secondary hover:text-white hover:border-violet-bright transition-all text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Lewati</span>
                <span className="px-1.5 py-0.5 rounded bg-bg-raised border border-border-soft text-3xs text-violet-pale group-hover:text-white">ESC</span>
                <ChevronRight size={14} className="text-ink-muted group-hover:text-violet-light group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </header>

          {/* ========================================================================= */}
          {/* CENTER HERO: REFINED HORIZONTAL NAME & CLEAN TYPOGRAPHY                    */}
          {/* ========================================================================= */}
          <main className="relative z-20 flex flex-col items-center justify-center text-center my-auto max-w-5xl w-full px-4">
            
            {/* Luminous Background Spider Emblem Silhouette Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-20">
              <svg
                viewBox="0 0 100 100"
                className="w-72 h-72 sm:w-88 sm:h-88 text-violet-bright/30 filter drop-shadow-[0_0_50px_rgba(158,92,246,0.3)] animate-pulse"
                style={{ animationDuration: '4s' }}
                fill="currentColor"
              >
                <path d="M50 20C45 20 40 28 40 38C40 45 44 50 50 52C56 50 60 45 60 38C60 28 55 20 50 20ZM50 55C43 55 35 62 35 72C35 84 45 92 50 95C55 92 65 84 65 72C65 62 57 55 50 55Z" />
                <path d="M42 35C30 25 15 22 5 28C18 35 28 42 38 45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M40 42C25 38 12 42 5 52C20 52 30 50 38 49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M40 58C25 64 12 75 8 90C18 80 28 72 38 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M58 35C70 25 85 22 95 28C82 35 72 42 62 45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M60 42C75 38 88 42 95 52C80 52 70 50 62 49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M60 58C75 64 88 75 92 90C82 80 72 72 62 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Main Name: Sleek, Horizontal, Proportional Size with Clean Crystal White & Specular Sheen */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-spidey text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl tracking-[0.10em] sm:tracking-[0.16em] text-white uppercase leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] drop-shadow-[0_0_24px_rgba(158,92,246,0.35)] select-none max-w-4xl mx-auto"
            >
              MUHAMMAD IRSYAD DANY
            </motion.h1>

            {/* Cinematic Spider-Verse Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-mono tracking-widest uppercase text-violet-light/90 flex items-center justify-center gap-2"
            >
              <span className="text-violet-bright">&ldquo;</span>
              <span>WITH GREAT CODE COMES INFINITE POSSIBILITIES</span>
              <span className="text-violet-bright">&rdquo;</span>
            </motion.div>

            {/* Specialization Skill Pills with Luminous Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm text-ink-secondary"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-surface/70 border border-violet-base/30 text-ink-primary backdrop-blur-sm shadow-sm hover:border-violet-bright transition-colors">
                <Code2 size={13} className="text-violet-bright" />
                <span>Full-Stack Web Architect</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-surface/70 border border-violet-base/30 text-ink-primary backdrop-blur-sm shadow-sm hover:border-violet-bright transition-colors">
                <Globe size={13} className="text-violet-light" />
                <span>Laravel & React Ecosystem</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-surface/70 border border-violet-base/30 text-ink-primary backdrop-blur-sm shadow-sm hover:border-violet-bright transition-colors">
                <ShieldCheck size={13} className="text-violet-pale" />
                <span>Interactive UI/UX Engineering</span>
              </span>
            </motion.div>

            {/* Action Pill Button: Swing into Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-7 sm:mt-9 flex flex-col items-center gap-3"
            >
              <button
                onClick={handleExit}
                className="group relative px-9 sm:px-11 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-violet-deep via-violet-base to-violet-bright hover:from-violet-base hover:to-violet-light text-white font-bold text-sm sm:text-base border border-violet-pale/40 shadow-[0_4px_28px_rgba(126,50,217,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_6px_36px_rgba(158,92,246,0.75),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer overflow-hidden"
              >
                {/* Shimmer Light Sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                
                <Sparkles size={16} className="text-violet-pale group-hover:rotate-12 transition-transform" />
                <span className="font-spidey text-base sm:text-lg tracking-wider">SWING INTO PORTFOLIO</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Sub-hint text */}
              <span className="text-2xs sm:text-xs font-mono text-ink-muted/80">
                TEKAN <span className="text-violet-pale font-bold">[SPACE]</span> ATAU <span className="text-violet-pale font-bold">[ENTER]</span> UNTUK MENJELAJAHI PORTOFOLIO
              </span>
            </motion.div>
          </main>

          {/* ========================================================================= */}
          {/* BOTTOM FOOTER METADATA                                                    */}
          {/* ========================================================================= */}
          <footer className="relative z-20 w-full max-w-5xl mx-auto flex items-center justify-center text-center">
            <div className="text-2xs sm:text-xs font-mono text-ink-muted/70 tracking-widest uppercase flex items-center flex-wrap justify-center gap-2 sm:gap-4">
              <span className="text-violet-pale/90">EARTH-616</span>
              <span className="text-violet-light/40">•</span>
              <span>FULL-STACK WEB DEVELOPER</span>
              <span className="text-violet-light/40">•</span>
              <span>CUM LAUDE GRADUATE</span>
              <span className="text-violet-light/40">•</span>
              <span>MALANG / GRESIK, ID</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
