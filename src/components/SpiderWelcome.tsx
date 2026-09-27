import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowRight, Sparkles, Zap } from 'lucide-react';

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
        return prev + 1.25;
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
      }, 400);
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

  // Canvas Web Background & Gentle Bio-Electric Silk Lines
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
    const rings = 5;
    const radialRays = 12;
    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Deep obsidian ambient background gradient
      const bgGrad = ctx.createRadialGradient(centerX, centerY, 60, centerX, centerY, Math.max(width, height) * 0.75);
      bgGrad.addColorStop(0, 'rgba(29, 15, 48, 0.6)');
      bgGrad.addColorStop(0.5, 'rgba(15, 8, 26, 0.9)');
      bgGrad.addColorStop(1, 'rgba(9, 5, 17, 0.98)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Spider Web Radial Geometry
      ctx.save();
      ctx.translate(centerX, centerY);

      // 1. Draw Radial Strands
      for (let i = 0; i < radialRays; i++) {
        const angle = (i * 2 * Math.PI) / radialRays + Math.sin(time * 0.3 + i) * 0.015;
        const maxRadius = Math.max(width, height) * 0.6;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * maxRadius, Math.sin(angle) * maxRadius);
        
        const isPulse = (i + Math.floor(time * 1.5)) % 4 === 0;
        ctx.strokeStyle = isPulse ? 'rgba(244, 63, 94, 0.28)' : 'rgba(158, 92, 246, 0.12)';
        ctx.lineWidth = isPulse ? 1.2 : 0.7;
        ctx.stroke();
      }

      // 2. Concentric Spiral Silk Rings
      for (let r = 1; r <= rings; r++) {
        const baseRadius = (r / rings) * (Math.min(width, height) * 0.42);
        const ringPulse = Math.sin(time * 1.2 - r * 0.4) * 3;
        const radius = baseRadius + ringPulse;

        ctx.beginPath();
        for (let i = 0; i <= radialRays; i++) {
          const angle = (i * 2 * Math.PI) / radialRays + Math.sin(time * 0.3 + i) * 0.015;
          const px = Math.cos(angle) * radius;
          const py = Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            const prevAngle = ((i - 1) * 2 * Math.PI) / radialRays + Math.sin(time * 0.3 + (i - 1)) * 0.015;
            const midAngle = (angle + prevAngle) / 2;
            const midRadius = radius * 0.96;
            const cpx = Math.cos(midAngle) * midRadius;
            const cpy = Math.sin(midAngle) * midRadius;
            ctx.quadraticCurveTo(cpx, cpy, px, py);
          }
        }
        ctx.closePath();

        const isGlowRing = r === 2 || r === 4;
        ctx.strokeStyle = isGlowRing ? 'rgba(184, 138, 248, 0.25)' : 'rgba(126, 50, 217, 0.12)';
        ctx.lineWidth = isGlowRing ? 1.1 : 0.7;
        ctx.stroke();

        // Bio-electric node particles
        for (let i = 0; i < radialRays; i += 2) {
          const angle = (i * 2 * Math.PI) / radialRays + Math.sin(time * 0.3 + i) * 0.015;
          const px = Math.cos(angle) * radius;
          const py = Math.sin(angle) * radius;

          ctx.beginPath();
          ctx.arc(px, py, 1.2 + Math.sin(time * 2.5 + i + r) * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = (i + r) % 3 === 0 ? '#FB7185' : '#A855F7';
          ctx.shadowBlur = 6;
          ctx.shadowColor = (i + r) % 3 === 0 ? '#FB7185' : '#C084FC';
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
          key="spider-welcome-minimal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(16px)',
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-bg-base select-none px-4"
        >
          {/* Canvas Web Animation Background */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* Subtle Grid Ambient Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage: 'radial-gradient(rgba(184, 138, 248, 0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top Control Bar: Audio & Skip */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-2xs font-mono text-violet-light/70 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>SPIDER-VERSE PROTOCOL</span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  if (next) playSoundFX('thwip');
                }}
                className="px-3 py-1 rounded-full border border-violet-mid/40 bg-bg-surface/80 backdrop-blur-md text-ink-muted hover:text-white hover:border-violet-bright transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                title="Toggle Web Audio SFX"
              >
                {soundEnabled ? <Volume2 size={12} className="text-rose-400" /> : <VolumeX size={12} className="text-ink-muted" />}
                <span>{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
              </button>

              <button
                onClick={handleExit}
                className="px-3.5 py-1 rounded-full border border-border-subtle bg-bg-raised/70 backdrop-blur-md text-ink-muted hover:text-white hover:border-rose-400 transition-all text-xs font-mono cursor-pointer"
              >
                SKIP [ESC]
              </button>
            </div>
          </div>

          {/* Background Spider-Sense Expanding Pulse Rings */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              animate={{
                scale: [0.95, 1.35, 1.7],
                opacity: [0.4, 0.12, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-rose-500/25"
            />
            <motion.div
              animate={{
                scale: [0.95, 1.25, 1.55],
                opacity: [0.35, 0.1, 0],
              }}
              transition={{
                duration: 2.4,
                delay: 0.8,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-violet-bright/20"
            />
          </div>

          {/* ========================================================================= */}
          {/* REFINED, SLEEK & MODERN CENTER PIECE                                      */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ scale: 0.92, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-md w-full rounded-3xl p-7 sm:p-9 text-center backdrop-blur-2xl bg-gradient-to-b from-bg-surface/85 via-bg-raised/80 to-bg-base/90 border border-violet-light/15 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.8),0_0_36px_-6px_rgba(158,92,246,0.2)] overflow-hidden"
          >
            {/* Top Luminous Ambient Rim Glow */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-rose-500/30 via-violet-base/20 to-transparent blur-2xl pointer-events-none" />

            {/* Spider Emblem Mask (Minimalist, Sharp & Iconic) */}
            <div className="relative inline-flex items-center justify-center mb-5">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -inset-3 rounded-full border border-dashed border-violet-bright/20 pointer-events-none"
              />
              
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-violet-mid/40 via-bg-surface to-bg-raised border border-violet-light/25 flex items-center justify-center shadow-lg shadow-violet-base/20">
                <svg
                  viewBox="0 0 100 100"
                  className="w-9 h-9 sm:w-10 sm:h-10 text-white filter drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Mask Outer Contour */}
                  <path
                    d="M50 10C34 10 22 24 22 45C22 65 37 81 50 90C63 81 78 65 78 45C78 24 66 10 50 10Z"
                    stroke="url(#spidey-minimal-grad)"
                    strokeWidth="2.5"
                    fill="#110A1E"
                  />
                  {/* Mask Inner Geometry Web */}
                  <path d="M50 10V90" stroke="rgba(184, 138, 248, 0.3)" strokeWidth="1" />
                  <path d="M22 45H78" stroke="rgba(184, 138, 248, 0.3)" strokeWidth="1" />
                  <path d="M30 26L70 64" stroke="rgba(184, 138, 248, 0.2)" strokeWidth="1" />
                  <path d="M70 26L30 64" stroke="rgba(184, 138, 248, 0.2)" strokeWidth="1" />
                  
                  {/* Glowing Lenses */}
                  <path
                    d="M34 38C38 42 45 46 45 49C41 49 34 47 30 42C29 40 31 38 34 38Z"
                    fill="#FFFFFF"
                    stroke="#FF3366"
                    strokeWidth="1.8"
                    className="filter drop-shadow-[0_0_6px_#38BDF8]"
                  />
                  <path
                    d="M66 38C62 42 55 46 55 49C59 49 66 47 70 42C71 40 69 38 66 38Z"
                    fill="#FFFFFF"
                    stroke="#FF3366"
                    strokeWidth="1.8"
                    className="filter drop-shadow-[0_0_6px_#38BDF8]"
                  />

                  <defs>
                    <linearGradient id="spidey-minimal-grad" x1="22" y1="10" x2="78" y2="90" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F43F5E" />
                      <stop offset="0.5" stopColor="#A855F7" />
                      <stop offset="1" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Micro Radar Dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-3xs font-bold shadow-sm shadow-rose-500/80">
                  <Zap size={8} />
                </div>
              </div>
            </div>

            {/* Refined Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-dim border border-violet-light/20 text-violet-pale text-2xs font-mono tracking-wider uppercase mb-2">
              <Sparkles size={11} className="text-violet-light" />
              <span>WELCOME TO THE PORTFOLIO OF</span>
            </div>

            {/* Author Name */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1.5">
              MUHAMMAD <span className="bg-gradient-to-r from-violet-light via-rose-400 to-cyan-soft bg-clip-text text-transparent">IRSYAD DANY</span>
            </h1>

            {/* Role Subtitle */}
            <p className="text-xs sm:text-sm text-ink-secondary/90 font-medium mb-6">
              Full-Stack Web Developer & Creative Engineer
            </p>

            {/* Primary Action Button (Sleek Glassmorphic Pill) */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleExit}
                className="group w-full py-3 px-6 rounded-full bg-gradient-to-r from-violet-deep via-violet-base to-rose-600 hover:from-violet-base hover:to-rose-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-violet-base/25 hover:shadow-rose-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <span>SWING INTO PORTFOLIO</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Refined Micro Sync Bar */}
              <div className="w-full mt-1 flex flex-col gap-1">
                <div className="w-full h-1 rounded-full bg-bg-surface border border-border-subtle overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-rose-500 via-violet-bright to-cyan-vivid rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-3xs font-mono text-ink-muted">
                  <span>SYNCING MULTIVERSE</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </div>

            {/* Subtle Keyboard Hint */}
            <div className="mt-4 pt-3 border-t border-border-subtle/40 text-3xs font-mono text-ink-faint">
              PRESS <span className="text-ink-muted font-semibold">[SPACE]</span> OR <span className="text-ink-muted font-semibold">[ESC]</span> TO ENTER
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
