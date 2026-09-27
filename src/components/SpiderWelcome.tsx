import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowRight, Sparkles, Infinity as InfinityIcon, Code2, Rocket, Layers } from 'lucide-react';

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
        return prev + 1;
      });
    }, 45);

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 110);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, [isOpen, soundEnabled]);

  // Keyboard listener: Escape or Space or Enter to skip
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

  // Canvas Web & Ambient Particle Animation
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
    const radialRays = 14;
    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Deep Purple Gradient Vibe matching Gambar 1
      const bgGrad = ctx.createRadialGradient(centerX, centerY * 0.9, 100, centerX, centerY, Math.max(width, height) * 0.8);
      bgGrad.addColorStop(0, '#2D114D');
      bgGrad.addColorStop(0.45, '#190A2E');
      bgGrad.addColorStop(0.85, '#0E051C');
      bgGrad.addColorStop(1, '#07020F');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle Radial Web Strands behind
      ctx.save();
      ctx.translate(centerX, centerY);

      for (let i = 0; i < radialRays; i++) {
        const angle = (i * 2 * Math.PI) / radialRays + Math.sin(time * 0.3 + i) * 0.015;
        const maxRadius = Math.max(width, height) * 0.7;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * maxRadius, Math.sin(angle) * maxRadius);
        
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(232, 121, 249, 0.08)' : 'rgba(158, 92, 246, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();
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
          key="spider-welcome-cinematic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: 'blur(16px)',
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden bg-bg-base text-ink-primary select-none"
        >
          {/* Canvas Web Background */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

          {/* Comic Halftone Dot Texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(rgba(232, 121, 249, 0.35) 1.2px, transparent 1.2px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* ========================================================================= */}
          {/* TOP BAR / NAVIGATION                                                      */}
          {/* ========================================================================= */}
          <header className="relative z-20 w-full px-6 sm:px-12 py-5 flex items-center justify-between">
            {/* Spider Logo & Identity */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-dim border border-violet-light/30 flex items-center justify-center text-rose-400 shadow-md shadow-rose-500/20">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8 2 5 6 5 11c0 3 2 6 4 7l-3 4h3l2-3 1 1 1-1 2 3h3l-3-4c2-1 4-4 4-7 0-5-3-9-7-9zm-3 9a2 2 0 114 0 2 2 0 01-4 0zm6 0a2 2 0 114 0 2 2 0 01-4 0z" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-sm sm:text-base tracking-wider text-white">IRSYAD DANY</span>
                <span className="block text-2xs font-mono text-violet-light/80 uppercase tracking-widest">Portfolio // 2026</span>
              </div>
            </div>

            {/* Top Right Action Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const next = !soundEnabled;
                  setSoundEnabled(next);
                  if (next) playSoundFX('thwip');
                }}
                className="px-3.5 py-1.5 rounded-full border border-violet-mid/60 bg-bg-surface/70 backdrop-blur-md text-ink-secondary hover:text-white hover:border-violet-bright transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer shadow-sm"
              >
                {soundEnabled ? <Volume2 size={14} className="text-rose-400" /> : <VolumeX size={14} className="text-ink-muted" />}
                <span className="hidden sm:inline">{soundEnabled ? 'SFX ON' : 'SFX MUTED'}</span>
              </button>

              <button
                onClick={handleExit}
                className="px-4 py-1.5 rounded-full border border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-white transition-all text-xs font-mono tracking-wider cursor-pointer"
              >
                SKIP [ESC]
              </button>
            </div>
          </header>

          {/* ========================================================================= */}
          {/* MAIN CINEMATIC HERO (MATCHING GAMBAR 1)                                    */}
          {/* ========================================================================= */}
          <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 py-4">
            
            {/* LEFT COLUMN: Stylized Typography & Intro Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full lg:w-5/12 text-left z-20 space-y-5"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-base/20 border border-violet-bright/30 text-violet-pale text-xs font-mono uppercase tracking-widest">
                <Sparkles size={12} className="text-rose-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Across The Spider-Verse</span>
              </div>

              {/* Huge Bold Headline Quote */}
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white leading-[1.12] tracking-tight">
                With Great Code Comes Great{' '}
                <span className="bg-gradient-to-r from-rose-400 via-violet-light to-cyan-soft bg-clip-text text-transparent">
                  Responsibility
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base text-ink-secondary/90 leading-relaxed font-normal max-w-md">
                Dive into the creative multiverse of modern web engineering. Crafting fast, scalable, and intelligent digital products with precision.
              </p>

              {/* Action Buttons (Similar to Explore Verse & Watch Trailer in Gambar 1) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleExit}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 via-violet-base to-violet-deep hover:from-rose-500 hover:to-violet-base text-white font-semibold text-sm shadow-lg shadow-rose-600/30 hover:shadow-violet-base/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={handleExit}
                  className="px-6 py-3 rounded-full border border-violet-bright/40 bg-bg-surface/60 hover:bg-bg-raised text-ink-primary hover:text-white font-medium text-sm backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Enter Verse
                </button>
              </div>
            </motion.div>

            {/* CENTER: Hooded Spider-Man Character Illustration + Background Glitch Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full lg:w-7/12 flex items-center justify-center min-h-[340px] sm:min-h-[460px] lg:min-h-[520px]"
            >
              {/* Massive Glitch Text behind Character: "SPIDER-MAN" */}
              <div
                className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden transition-transform duration-100 ${
                  glitchActive ? 'translate-x-1.5 -translate-y-1' : ''
                }`}
              >
                <span
                  className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter opacity-15 text-violet-pale filter drop-shadow-[0_0_20px_rgba(232,121,249,0.3)]"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    WebkitTextStroke: '2px rgba(232, 121, 249, 0.4)',
                  }}
                >
                  SPIDER-MAN
                </span>
              </div>

              {/* Hooded Spider-Man Character Vector Art (Exact Pose from Gambar 1) */}
              <div className="relative z-10 w-72 sm:w-96 lg:w-[440px] max-h-[480px] flex items-center justify-center">
                
                {/* Luminous Atmospheric Aura behind character */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-base/30 via-rose-500/20 to-transparent blur-3xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 500 600"
                  className="w-full h-auto filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Hoodie Jacket Gradient */}
                    <linearGradient id="hood-jacket-grad" x1="100" y1="100" x2="400" y2="600" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4A1578" />
                      <stop offset="0.4" stopColor="#2A0B4A" />
                      <stop offset="0.8" stopColor="#140426" />
                      <stop offset="1" stopColor="#0A0214" />
                    </linearGradient>

                    {/* Mask Web Gradient */}
                    <linearGradient id="mask-grad" x1="200" y1="180" x2="300" y2="350" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1E0A36" />
                      <stop offset="1" stopColor="#0B0314" />
                    </linearGradient>

                    {/* Glowing Pink Eyes */}
                    <linearGradient id="eye-glow-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="#FFFFFF" />
                      <stop offset="0.4" stopColor="#FF77E9" />
                      <stop offset="1" stopColor="#E11D48" />
                    </linearGradient>

                    {/* Neon Spider Logo on Chest */}
                    <linearGradient id="spider-chest-grad" x1="250" y1="420" x2="250" y2="580" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFA6F6" />
                      <stop offset="0.5" stopColor="#E879F9" />
                      <stop offset="1" stopColor="#C026D3" />
                    </linearGradient>

                    {/* Filter for Eye Neon Glow */}
                    <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* ------------------------------------------------------------- */}
                  {/* BODY & HOODIE BASE                                            */}
                  {/* ------------------------------------------------------------- */}
                  {/* Outer Shoulders & Torso */}
                  <path
                    d="M100 600C90 520 110 440 160 400C190 380 210 370 250 370C290 370 310 380 340 400C390 440 410 520 400 600H100Z"
                    fill="url(#hood-jacket-grad)"
                    stroke="#581C87"
                    strokeWidth="3"
                  />

                  {/* Inner Chest Suit Web Texture (Visible inside open zipper) */}
                  <path
                    d="M180 430C210 410 290 410 320 430C340 500 340 560 330 600H170C160 560 160 500 180 430Z"
                    fill="#0D031A"
                    stroke="#3B0764"
                    strokeWidth="2"
                  />

                  {/* Chest Spider Emblem (Pink Arachnid from Gambar 1) */}
                  <g filter="url(#neon-glow)">
                    {/* Spider Central Body */}
                    <ellipse cx="250" cy="490" rx="8" ry="14" fill="#FFA6F6" />
                    <ellipse cx="250" cy="470" rx="6" ry="6" fill="#FFA6F6" />
                    
                    {/* Spider Legs Reaching Out */}
                    {/* Top Legs Left */}
                    <path d="M246 470C220 450 190 445 175 460" stroke="#FFA6F6" strokeWidth="4" strokeLinecap="round" />
                    <path d="M246 476C215 465 195 470 185 490" stroke="#FFA6F6" strokeWidth="3.5" strokeLinecap="round" />
                    {/* Bottom Legs Left */}
                    <path d="M246 492C210 505 195 530 190 560" stroke="#FFA6F6" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M246 500C225 525 210 550 205 585" stroke="#FFA6F6" strokeWidth="4" strokeLinecap="round" />

                    {/* Top Legs Right */}
                    <path d="M254 470C280 450 310 445 325 460" stroke="#FFA6F6" strokeWidth="4" strokeLinecap="round" />
                    <path d="M254 476C285 465 305 470 315 490" stroke="#FFA6F6" strokeWidth="3.5" strokeLinecap="round" />
                    {/* Bottom Legs Right */}
                    <path d="M254 492C290 505 305 530 310 560" stroke="#FFA6F6" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M254 500C275 525 290 550 295 585" stroke="#FFA6F6" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  {/* ------------------------------------------------------------- */}
                  {/* HOODIE HOOD STRUCTURE (COVERING HEAD)                         */}
                  {/* ------------------------------------------------------------- */}
                  {/* Big Outer Hood Silhouette */}
                  <path
                    d="M250 80C160 80 130 160 130 260C130 350 160 410 200 430C220 440 280 440 300 430C340 410 370 350 370 260C370 160 340 80 250 80Z"
                    fill="#1A0730"
                    stroke="#7E22CE"
                    strokeWidth="4"
                  />

                  {/* Hood Inner Shadow & Rim Fold */}
                  <path
                    d="M250 95C175 95 150 165 150 260C150 340 175 395 210 415C230 423 270 423 290 415C325 395 350 340 350 260C350 165 325 95 250 95Z"
                    fill="#0E031A"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* SPIDER-MAN MASK (INSIDE HOOD)                                 */}
                  {/* ------------------------------------------------------------- */}
                  <path
                    d="M250 140C200 140 175 190 175 260C175 325 210 375 250 385C290 375 325 325 325 260C325 190 300 140 250 140Z"
                    fill="url(#mask-grad)"
                    stroke="#3B0764"
                    strokeWidth="2"
                  />

                  {/* Mask Web Pattern Lines */}
                  {/* Vertical & Diagonal Lines */}
                  <path d="M250 140V385" stroke="#E879F9" strokeWidth="1.2" strokeOpacity="0.4" />
                  <path d="M175 260H325" stroke="#E879F9" strokeWidth="1.2" strokeOpacity="0.4" />
                  <path d="M195 180L305 340" stroke="#E879F9" strokeWidth="1" strokeOpacity="0.3" />
                  <path d="M305 180L195 340" stroke="#E879F9" strokeWidth="1" strokeOpacity="0.3" />
                  <path d="M180 220L320 300" stroke="#E879F9" strokeWidth="1" strokeOpacity="0.3" />
                  <path d="M320 220L180 300" stroke="#E879F9" strokeWidth="1" strokeOpacity="0.3" />

                  {/* Concentric Mask Web Arcs */}
                  <path d="M215 220C235 210 265 210 285 220" stroke="#E879F9" strokeWidth="1.2" strokeOpacity="0.5" fill="none" />
                  <path d="M200 255C230 240 270 240 300 255" stroke="#E879F9" strokeWidth="1.2" strokeOpacity="0.5" fill="none" />
                  <path d="M210 300C230 315 270 315 290 300" stroke="#E879F9" strokeWidth="1.2" strokeOpacity="0.5" fill="none" />
                  <path d="M225 340C240 350 260 350 275 340" stroke="#E879F9" strokeWidth="1.2" strokeOpacity="0.5" fill="none" />

                  {/* ------------------------------------------------------------- */}
                  {/* ICONIC GLOWING PINK EYES (FROM GAMBAR 1)                      */}
                  {/* ------------------------------------------------------------- */}
                  {/* Left Eye Black Border Frame */}
                  <path
                    d="M190 235C200 225 235 240 238 275C225 278 195 268 185 248C182 242 185 238 190 235Z"
                    fill="#000000"
                    stroke="#E879F9"
                    strokeWidth="3"
                  />
                  {/* Left Eye Luminous Inner Glow */}
                  <path
                    d="M193 238C202 230 230 244 233 272C222 274 198 266 189 249C187 244 189 240 193 238Z"
                    fill="url(#eye-glow-grad)"
                    filter="url(#neon-glow)"
                  />

                  {/* Right Eye Black Border Frame */}
                  <path
                    d="M310 235C300 225 265 240 262 275C275 278 305 268 315 248C318 242 315 238 310 235Z"
                    fill="#000000"
                    stroke="#E879F9"
                    strokeWidth="3"
                  />
                  {/* Right Eye Luminous Inner Glow */}
                  <path
                    d="M307 238C298 230 270 244 267 272C278 274 302 266 311 249C313 244 311 240 307 238Z"
                    fill="url(#eye-glow-grad)"
                    filter="url(#neon-glow)"
                  />

                  {/* ------------------------------------------------------------- */}
                  {/* HANDS GRASPING HOODIE COLLAR (FROM GAMBAR 1)                  */}
                  {/* ------------------------------------------------------------- */}
                  {/* Left Hand / Glove */}
                  <g>
                    {/* Glove Base */}
                    <path
                      d="M170 380C160 365 185 345 200 355C210 365 215 390 205 425C195 440 170 435 165 410C165 395 170 385 170 380Z"
                      fill="#120422"
                      stroke="#A855F7"
                      strokeWidth="2.5"
                    />
                    {/* Knuckles & Finger Segments */}
                    <ellipse cx="195" cy="375" rx="5" ry="7" fill="#240A42" stroke="#E879F9" strokeWidth="1" />
                    <ellipse cx="188" cy="385" rx="5" ry="7" fill="#240A42" stroke="#E879F9" strokeWidth="1" />
                    <ellipse cx="182" cy="397" rx="5" ry="7" fill="#240A42" stroke="#E879F9" strokeWidth="1" />
                  </g>

                  {/* Right Hand / Glove */}
                  <g>
                    {/* Glove Base */}
                    <path
                      d="M330 380C340 365 315 345 300 355C290 365 285 390 295 425C305 440 330 435 335 410C335 395 330 385 330 380Z"
                      fill="#120422"
                      stroke="#A855F7"
                      strokeWidth="2.5"
                    />
                    {/* Knuckles & Finger Segments */}
                    <ellipse cx="305" cy="375" rx="5" ry="7" fill="#240A42" stroke="#E879F9" strokeWidth="1" />
                    <ellipse cx="312" cy="385" rx="5" ry="7" fill="#240A42" stroke="#E879F9" strokeWidth="1" />
                    <ellipse cx="318" cy="397" rx="5" ry="7" fill="#240A42" stroke="#E879F9" strokeWidth="1" />
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Minimalist Spider-Verse Feature Badges (Matching Gambar 1) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="hidden xl:flex flex-col items-center justify-center space-y-8 z-20"
            >
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-bg-raised/80 border border-violet-bright/30 flex items-center justify-center text-rose-400 group-hover:border-rose-400 transition-all shadow-md shadow-violet-base/20">
                  <InfinityIcon size={22} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="mt-2 text-xs font-bold text-white tracking-wider">Infinite</span>
                <span className="text-2xs font-mono text-ink-muted">Heroes</span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-bg-raised/80 border border-violet-bright/30 flex items-center justify-center text-violet-bright group-hover:border-violet-bright transition-all shadow-md shadow-violet-base/20">
                  <Code2 size={22} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="mt-2 text-xs font-bold text-white tracking-wider">Infinite</span>
                <span className="text-2xs font-mono text-ink-muted">Possibilities</span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-bg-raised/80 border border-violet-bright/30 flex items-center justify-center text-cyan-vivid group-hover:border-cyan-vivid transition-all shadow-md shadow-cyan-vivid/20">
                  <Layers size={22} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="mt-2 text-xs font-bold text-white tracking-wider">Infinite</span>
                <span className="text-2xs font-mono text-ink-muted">Universes</span>
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* BOTTOM BAR / SYNC PROGRESS                                                */}
          {/* ========================================================================= */}
          <footer className="relative z-20 w-full px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-2xs font-mono text-ink-muted/70 tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>MUHAMMAD IRSYAD DANY // FULL-STACK WEB DEVELOPER</span>
            </div>

            {/* Sync Progress Bar */}
            <div className="w-full sm:w-72 flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-bg-surface border border-violet-mid/40 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-rose-500 via-violet-bright to-cyan-soft rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-2xs font-mono text-violet-pale">{Math.round(progress)}%</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
