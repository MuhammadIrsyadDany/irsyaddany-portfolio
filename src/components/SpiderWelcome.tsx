import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowRight, Zap, ChevronRight } from 'lucide-react';

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

  // Canvas Web Lattice & Fluid Horizontal Wave Animation
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
    const nodesCount = 28;
    const radialRays = 16;
    let time = 0;

    // Generate static radial web nodes
    const nodes: { angle: number; dist: number; speed: number; size: number; color: string }[] = [];
    for (let i = 0; i < nodesCount; i++) {
      nodes.push({
        angle: (i / nodesCount) * Math.PI * 2 + Math.random() * 0.2,
        dist: 0.15 + Math.random() * 0.45,
        speed: 0.2 + Math.random() * 0.5,
        size: 1.5 + Math.random() * 2,
        color: i % 4 === 0 ? '#38BDF8' : i % 2 === 0 ? '#E879F9' : '#A855F7',
      });
    }

    const render = () => {
      time += 0.018;
      ctx.clearRect(0, 0, width, height);

      // Deep Obsidian base gradient
      const bgGrad = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, Math.max(width, height) * 0.8);
      bgGrad.addColorStop(0, '#150A26');
      bgGrad.addColorStop(0.4, '#0D0518');
      bgGrad.addColorStop(0.85, '#07020E');
      bgGrad.addColorStop(1, '#040108');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 1. Draw Geometric Spider Web / Circuit Strands from center
      ctx.save();
      ctx.translate(centerX, centerY);

      for (let i = 0; i < radialRays; i++) {
        const baseAngle = (i * 2 * Math.PI) / radialRays;
        const maxRadius = Math.max(width, height) * 0.55;
        const px = Math.cos(baseAngle) * maxRadius;
        const py = Math.sin(baseAngle) * maxRadius;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        
        // Slight circuit jog/step in spider strands
        const midDist = maxRadius * 0.45;
        const midAngle = baseAngle + Math.sin(time + i) * 0.04;
        const mx = Math.cos(midAngle) * midDist;
        const my = Math.sin(midAngle) * midDist;
        ctx.lineTo(mx, my);
        ctx.lineTo(px, py);

        const isPulse = (i + Math.floor(time * 2)) % 4 === 0;
        ctx.strokeStyle = isPulse ? 'rgba(56, 189, 248, 0.35)' : 'rgba(158, 92, 246, 0.14)';
        ctx.lineWidth = isPulse ? 1.4 : 0.8;
        ctx.stroke();
      }

      // Connecting Web Concentric Polygon Loops
      for (let r = 1; r <= 4; r++) {
        const rad = (r / 4) * (Math.min(width, height) * 0.38);
        ctx.beginPath();
        for (let i = 0; i <= radialRays; i++) {
          const angle = (i * 2 * Math.PI) / radialRays;
          const x = Math.cos(angle) * rad;
          const y = Math.sin(angle) * rad;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = r === 2 ? 'rgba(232, 121, 249, 0.22)' : 'rgba(126, 50, 217, 0.12)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // Floating bio-electric node dots
      nodes.forEach((n, idx) => {
        const currentDist = (n.dist * Math.min(width, height)) + Math.sin(time * n.speed + idx) * 12;
        const nx = Math.cos(n.angle + time * 0.05) * currentDist;
        const ny = Math.sin(n.angle + time * 0.05) * currentDist;

        ctx.beginPath();
        ctx.arc(nx, ny, n.size, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = n.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.restore();

      // 2. Horizontal Smooth Sine Wave (Matching Reference Image wave)
      ctx.beginPath();
      const waveY = centerY + Math.sin(time * 0.8) * 15;
      const amplitude = 35;
      const frequency = 0.0035;

      for (let x = 0; x <= width; x += 10) {
        const y = waveY + Math.sin(x * frequency + time) * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 14;
      ctx.shadowColor = '#38BDF8';
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Secondary subtle violet wave
      ctx.beginPath();
      for (let x = 0; x <= width; x += 10) {
        const y = waveY + Math.sin(x * frequency - time * 0.7 + Math.PI / 3) * (amplitude * 0.7);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.25)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

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
          className="fixed inset-0 z-[99999] flex flex-col justify-between items-center overflow-hidden bg-bg-base select-none px-6 py-8"
        >
          {/* Canvas Web & Circuit Animation Background */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* ========================================================================= */}
          {/* TOP CONTROLS (AUDIO & SKIP ESC)                                           */}
          {/* ========================================================================= */}
          <header className="relative z-20 w-full max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xs font-mono text-cyan-soft/80 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-vivid animate-pulse" />
              <span>SPIDER-VERSE PROTOCOL // 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  if (next) playSoundFX('thwip');
                }}
                className="px-3 py-1.5 rounded-full border border-violet-mid/50 bg-bg-surface/60 backdrop-blur-md text-ink-muted hover:text-white hover:border-violet-bright transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                title="Toggle Web Audio SFX"
              >
                {soundEnabled ? <Volume2 size={13} className="text-cyan-vivid" /> : <VolumeX size={13} className="text-ink-muted" />}
                <span className="hidden sm:inline">{soundEnabled ? 'SFX ON' : 'SFX OFF'}</span>
              </button>

              {/* Skip Button Styled Like Reference Image: Lewati [ESC] > */}
              <button
                onClick={handleExit}
                className="group px-4 py-1.5 rounded-full border border-border-subtle bg-bg-surface/60 hover:bg-bg-raised/80 backdrop-blur-md text-ink-secondary hover:text-white hover:border-cyan-vivid transition-all text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Lewati</span>
                <span className="px-1.5 py-0.5 rounded bg-bg-raised border border-border-soft text-3xs text-ink-muted group-hover:text-cyan-soft">ESC</span>
                <ChevronRight size={14} className="text-ink-muted group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </header>

          {/* ========================================================================= */}
          {/* CENTER HERO: PURE TYPOGRAPHY (NO BOX / CONTAINER)                         */}
          {/* ========================================================================= */}
          <main className="relative z-20 flex flex-col items-center justify-center text-center my-auto max-w-4xl w-full">
            
            {/* Top Pill Tag (Matching Reference: D4 TEKNIK ELEKTRO -> D4 TEKNIK INFORMATIKA) */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/40 text-cyan-soft text-xs sm:text-sm font-semibold tracking-wide mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.2)]"
            >
              <Zap size={13} className="text-amber-400 fill-amber-400" />
              <span className="uppercase">D4 TEKNIK INFORMATIKA • POLINEMA</span>
            </motion.div>

            {/* Massive Bold Main Name Typography (No Box, Floating Over Background) */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              MUHAMMAD <span className="bg-gradient-to-r from-white via-cyan-soft to-cyan-vivid bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">IRSYAD DANY</span>
            </motion.h1>

            {/* Subtitle Roles with Separator Dot */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl font-medium text-ink-secondary flex items-center justify-center flex-wrap gap-2 sm:gap-3"
            >
              <span>Web Developer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-vivid shadow-[0_0_8px_#38BDF8]" />
              <span>Full-Stack Solutions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-bright shadow-[0_0_8px_#A855F7]" />
              <span>UI/UX Architecture</span>
            </motion.p>

            {/* Action Pill Button: Masuk ke Portofolio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 sm:mt-10 flex flex-col items-center gap-3"
            >
              <button
                onClick={handleExit}
                className="group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-vivid via-sky-500 to-cyan-soft hover:from-cyan-soft hover:to-sky-400 text-bg-base font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
              >
                <span>Masuk ke Portofolio</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Sub-hint: Tekan Spasi, Enter, atau klik untuk melanjutkan */}
              <span className="text-xs sm:text-sm text-ink-muted/80 font-normal">
                Tekan Spasi, Enter, atau klik untuk melanjutkan
              </span>
            </motion.div>
          </main>

          {/* ========================================================================= */}
          {/* BOTTOM FOOTER METADATA (Matching Reference Image)                         */}
          {/* ========================================================================= */}
          <footer className="relative z-20 w-full max-w-4xl mx-auto flex items-center justify-center text-center">
            <div className="text-2xs sm:text-xs font-mono text-ink-muted/60 tracking-widest uppercase flex items-center flex-wrap justify-center gap-2 sm:gap-4">
              <span>FULL-STACK WEB</span>
              <span>•</span>
              <span>LARAVEL & REACT</span>
              <span>•</span>
              <span>GRESIK / MALANG, ID</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
