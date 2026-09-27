import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Volume2, VolumeX, ShieldCheck, Compass, Zap } from 'lucide-react';

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
      const bufferSize = ctx.sampleRate * 0.22;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3200, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.2);
      filter.Q.setValueAtTime(3, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } else if (type === 'sense') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.15);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'warp') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.5);

      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.55);
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
  const [glitchActive, setGlitchActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const handleExit = useCallback(() => {
    if (soundEnabled) playSoundFX('warp');
    if (onClose) onClose();
  }, [soundEnabled, onClose]);

  // Reset progress & run sequence whenever isOpen becomes true
  useEffect(() => {
    if (!isOpen) return;
    setProgress(0);

    // Initial Spider-Sense sound
    if (soundEnabled) {
      playSoundFX('sense');
    }

    // Progress counter (approx 3.5 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.2;
      });
    }, 35);

    // Spider-Verse comic glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 90);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, [isOpen, soundEnabled]);

  // Keyboard shortcut listener: ESC or Space or Enter to close
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

  // Canvas Web Background & Bio-Electric Silk Lines
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

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Gradient background glow matching deep obsidian
      const bgGrad = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, Math.max(width, height) * 0.7);
      bgGrad.addColorStop(0, 'rgba(36, 21, 60, 0.55)');
      bgGrad.addColorStop(0.5, 'rgba(17, 10, 30, 0.88)');
      bgGrad.addColorStop(1, 'rgba(9, 5, 17, 0.98)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Spider Web Radial Geometry
      ctx.save();
      ctx.translate(centerX, centerY);

      // 1. Draw Radial Strands
      for (let i = 0; i < radialRays; i++) {
        const angle = (i * 2 * Math.PI) / radialRays + Math.sin(time * 0.4 + i) * 0.02;
        const maxRadius = Math.max(width, height) * 0.65;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * maxRadius, Math.sin(angle) * maxRadius);
        
        const isPulse = (i + Math.floor(time * 2)) % 4 === 0;
        ctx.strokeStyle = isPulse ? 'rgba(225, 29, 72, 0.35)' : 'rgba(158, 92, 246, 0.18)';
        ctx.lineWidth = isPulse ? 1.5 : 0.8;
        ctx.stroke();
      }

      // 2. Draw Concentric Spiral Silk Rings
      for (let r = 1; r <= rings; r++) {
        const baseRadius = (r / rings) * (Math.min(width, height) * 0.45);
        const ringPulse = Math.sin(time * 1.5 - r * 0.5) * 4;
        const radius = baseRadius + ringPulse;

        ctx.beginPath();
        for (let i = 0; i <= radialRays; i++) {
          const angle = (i * 2 * Math.PI) / radialRays + Math.sin(time * 0.4 + i) * 0.02;
          const px = Math.cos(angle) * radius;
          const py = Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            const prevAngle = ((i - 1) * 2 * Math.PI) / radialRays + Math.sin(time * 0.4 + (i - 1)) * 0.02;
            const midAngle = (angle + prevAngle) / 2;
            const midRadius = radius * 0.96;
            const cpx = Math.cos(midAngle) * midRadius;
            const cpy = Math.sin(midAngle) * midRadius;
            ctx.quadraticCurveTo(cpx, cpy, px, py);
          }
        }
        ctx.closePath();

        const isGlowRing = r === 2 || r === 4;
        ctx.strokeStyle = isGlowRing ? 'rgba(184, 138, 248, 0.35)' : 'rgba(126, 50, 217, 0.20)';
        ctx.lineWidth = isGlowRing ? 1.4 : 0.9;
        ctx.stroke();

        // Bio-electric Sparks at intersections
        for (let i = 0; i < radialRays; i += 2) {
          const angle = (i * 2 * Math.PI) / radialRays + Math.sin(time * 0.4 + i) * 0.02;
          const px = Math.cos(angle) * radius;
          const py = Math.sin(angle) * radius;

          ctx.beginPath();
          ctx.arc(px, py, 1.6 + Math.sin(time * 3 + i + r) * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = (i + r) % 3 === 0 ? '#FF3366' : '#9E5CF6';
          ctx.shadowBlur = 8;
          ctx.shadowColor = (i + r) % 3 === 0 ? '#FF3366' : '#B88AF8';
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
          key="spider-welcome-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.12,
            filter: 'blur(20px)',
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-bg-base select-none"
        >
          {/* Canvas Web Animation */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* Halftone / Comic Dot Texture Grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage: 'radial-gradient(rgba(184, 138, 248, 0.4) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Bio-Electric Corner HUD */}
          <div className="absolute top-6 left-6 text-2xs font-mono text-violet-light/70 tracking-widest flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="hidden sm:inline">SPIDER_SENSE // MULTIVERSE_GRID: ONLINE</span>
            <span className="sm:hidden">SPIDER_SENSE // ONLINE</span>
          </div>
          
          <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) playSoundFX('thwip');
              }}
              className="px-3 py-1.5 rounded-full border border-violet-mid/50 bg-bg-surface/90 backdrop-blur-md text-ink-secondary hover:text-white hover:border-violet-bright transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              title="Toggle Web Audio SFX"
            >
              {soundEnabled ? <Volume2 size={13} className="text-rose-400" /> : <VolumeX size={13} className="text-ink-muted" />}
              <span>{soundEnabled ? 'SFX ON' : 'SFX MUTED'}</span>
            </button>

            <button
              onClick={handleExit}
              className="px-3.5 py-1.5 rounded-full border border-border-soft/70 bg-bg-raised/90 backdrop-blur-md text-ink-secondary hover:text-white hover:border-rose-500 transition-all text-xs font-mono cursor-pointer"
            >
              SKIP [ESC]
            </button>
          </div>

          {/* Spider-Sense Radar Pulse Waves */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.45, 1.8],
                opacity: [0.55, 0.2, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-rose-500/40"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1.6],
                opacity: [0.45, 0.15, 0],
              }}
              transition={{
                duration: 2.2,
                delay: 0.7,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-violet-bright/35"
            />
          </div>

          {/* Central Card / Spider-Man Holographic Core */}
          <motion.div
            initial={{ scale: 0.88, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`relative max-w-lg w-full mx-4 px-6 sm:px-8 py-8 sm:py-10 rounded-2xl bg-bg-surface/95 border border-violet-base/40 backdrop-blur-2xl shadow-2xl shadow-violet-base/25 text-center overflow-hidden transition-all duration-150 ${
              glitchActive ? 'translate-x-[2px] -translate-y-[1px] filter drop-shadow-[2px_0_0_#FF3366] drop-shadow-[-2px_0_0_#06B6D4]' : ''
            }`}
          >
            {/* Top Accent Ribbon with Miles & Peter Spider Colors */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-violet-base to-cyan-vivid" />

            {/* Spider Emblem Mask Icon */}
            <div className="relative inline-flex items-center justify-center mb-5">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -inset-4 rounded-full border border-dashed border-violet-bright/30 pointer-events-none"
              />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-bg-raised via-bg-overlay to-violet-mid/60 border border-violet-light/30 flex items-center justify-center shadow-lg shadow-rose-500/15 group">
                {/* Spider-Man Vector Mask with Glowing Lenses */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-12 h-12 sm:w-14 sm:h-14 text-white filter drop-shadow-[0_0_14px_rgba(225,29,72,0.65)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 8C33 8 20 22 20 44C20 64 36 82 50 92C64 82 80 64 80 44C80 22 67 8 50 8Z"
                    stroke="url(#spidey-grad-modal)"
                    strokeWidth="2.5"
                    fill="#110A1E"
                  />
                  
                  <path d="M50 8V92" stroke="rgba(184, 138, 248, 0.35)" strokeWidth="1" />
                  <path d="M20 44H80" stroke="rgba(184, 138, 248, 0.35)" strokeWidth="1" />
                  <path d="M28 24L72 64" stroke="rgba(184, 138, 248, 0.25)" strokeWidth="1" />
                  <path d="M72 24L28 64" stroke="rgba(184, 138, 248, 0.25)" strokeWidth="1" />
                  <ellipse cx="50" cy="44" rx="14" ry="10" stroke="rgba(225, 29, 72, 0.45)" strokeWidth="1" fill="none" />

                  {/* Left Eye */}
                  <path
                    d="M32 36C36 40 44 45 44 49C40 49 32 46 28 40C27 38 29 36 32 36Z"
                    fill="#FFFFFF"
                    stroke="#FF3366"
                    strokeWidth="2"
                    className="filter drop-shadow-[0_0_8px_#38BDF8]"
                  />
                  {/* Right Eye */}
                  <path
                    d="M68 36C64 40 56 45 56 49C60 49 68 46 72 40C73 38 71 36 68 36Z"
                    fill="#FFFFFF"
                    stroke="#FF3366"
                    strokeWidth="2"
                    className="filter drop-shadow-[0_0_8px_#38BDF8]"
                  />

                  <defs>
                    <linearGradient id="spidey-grad-modal" x1="20" y1="8" x2="80" y2="92" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF3366" />
                      <stop offset="0.5" stopColor="#9E5CF6" />
                      <stop offset="1" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Spider-Sense Radar Pulse Icon */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-rose-500/80 animate-pulse">
                  <Zap size={10} />
                </div>
              </div>
            </div>

            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-dim border border-violet-light/30 text-violet-pale text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles size={13} className="text-violet-light animate-spin" style={{ animationDuration: '8s' }} />
              <span>WELCOME TO THE PORTFOLIO</span>
            </div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight"
            >
              MUHAMMAD <span className="bg-gradient-to-r from-violet-light via-rose-400 to-cyan-soft bg-clip-text text-transparent">IRSYAD DANY</span>
            </motion.h1>

            <p className="text-sm sm:text-base text-ink-secondary mb-5 font-medium max-w-sm mx-auto">
              Full-Stack Web Developer & Creative Engineer crafting high-impact digital experiences.
            </p>

            {/* Spider-Verse Spec Badges */}
            <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-raised border border-border-subtle text-xs text-ink-muted">
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>Full-Stack Web</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-raised border border-border-subtle text-xs text-ink-muted">
                <Compass size={13} className="text-cyan-vivid" />
                <span>Interactive UI/UX</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-raised border border-border-subtle text-xs text-ink-muted">
                <Zap size={13} className="text-amber-400" />
                <span>Clean Architecture</span>
              </span>
            </div>

            {/* Action Button & Web Progress */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleExit}
                className="group relative w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-deep via-violet-base to-rose-600 hover:from-violet-base hover:to-rose-500 text-white font-semibold text-sm shadow-xl shadow-violet-base/30 hover:shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>SWING INTO PORTFOLIO</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Silk Charging Progress Bar */}
              <div className="w-full max-w-xs mt-1 flex flex-col items-center gap-1.5">
                <div className="w-full h-1.5 rounded-full bg-bg-raised border border-border-subtle overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-rose-500 via-violet-bright to-cyan-vivid rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="w-full flex justify-between text-2xs font-mono text-ink-faint">
                  <span>SYNCHRONIZING WEB</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Quote in Spider-Man spirit */}
          <div className="absolute bottom-6 text-center text-2xs font-mono text-ink-muted/60 tracking-wider">
            &ldquo;WITH GREAT CODE COMES GREAT USER EXPERIENCE&rdquo;
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
