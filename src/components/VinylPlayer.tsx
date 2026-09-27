import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music2 } from 'lucide-react';

interface VinylPlayerProps {
  isMuted: boolean;
  isPlaying: boolean;
  onToggleMute: () => void;
}

export const VinylPlayer: React.FC<VinylPlayerProps> = ({
  isMuted,
  isPlaying,
  onToggleMute,
}) => {
  const [hovered, setHovered] = useState(false);
  const spinRef = useRef<HTMLDivElement>(null);
  // Track rotation angle even when paused, so we can resume from same angle
  const angleRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // Smooth CSS spin: use requestAnimationFrame to drive rotation
  // so pausing keeps the disc frozen at current angle
  useEffect(() => {
    const el = spinRef.current;
    if (!el) return;

    const tick = (time: number) => {
      if (!isPlaying || isMuted) {
        lastTimeRef.current = null;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (lastTimeRef.current !== null) {
        const delta = time - lastTimeRef.current;
        angleRef.current = (angleRef.current + delta * 0.036) % 360; // ~2.16 rpm
      }
      lastTimeRef.current = time;
      el.style.transform = `rotate(${angleRef.current}deg)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, isMuted]);

  const isActive = isPlaying && !isMuted;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative flex items-end gap-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── Expanded label on hover ── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="vinyl-label"
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.92 }}
              transition={{ duration: 0.22 }}
              className="mb-1 bg-bg-raised/90 backdrop-blur-md border border-violet-base/30 rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/40 min-w-[140px]"
            >
              {/* Song info */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <Music2 size={11} className="text-violet-bright shrink-0" />
                <span className="text-2xs font-mono text-ink-muted uppercase tracking-wider">Now Playing</span>
              </div>
              <p className="text-xs font-spidey text-white tracking-wide leading-snug truncate max-w-[130px]">
                Spider-Man Theme
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                {/* Mini waveform bars when playing */}
                <div className="flex items-end gap-0.5 h-3">
                  {[0.4, 0.8, 0.55, 1, 0.65, 0.85, 0.5].map((h, i) => (
                    <motion.span
                      key={i}
                      className="block w-0.5 rounded-full bg-violet-bright"
                      animate={isActive ? {
                        scaleY: [h, h * 0.4 + 0.1, h],
                      } : { scaleY: 0.15 }}
                      transition={{
                        duration: 0.6 + i * 0.07,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                        delay: i * 0.08,
                      }}
                      style={{ height: '12px', transformOrigin: 'bottom' }}
                    />
                  ))}
                </div>
                <span className="text-2xs font-mono text-ink-muted ml-1">
                  {isActive ? 'Live' : 'Paused'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Vinyl disc ── */}
        <div className="relative w-14 h-14 cursor-pointer" onClick={onToggleMute}>

          {/* Outer glow ring when playing */}
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: '0 0 0 2px rgba(158,92,246,0.5), 0 0 18px rgba(158,92,246,0.35), 0 0 6px rgba(251,113,133,0.25)',
              }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* The spinning vinyl */}
          <div
            ref={spinRef}
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{ willChange: 'transform' }}
          >
            {/* SVG Vinyl Record */}
            <svg viewBox="0 0 56 56" width="56" height="56" className="absolute inset-0">
              {/* Base — deep black disc */}
              <circle cx="28" cy="28" r="28" fill="#0A0A0F" />

              {/* Groove rings */}
              {[24, 21, 18, 15.5, 13.5, 11.5, 10].map((r, i) => (
                <circle
                  key={i}
                  cx="28" cy="28" r={r}
                  fill="none"
                  stroke={i % 2 === 0 ? 'rgba(126,50,217,0.18)' : 'rgba(158,92,246,0.10)'}
                  strokeWidth={i % 2 === 0 ? '0.9' : '0.5'}
                />
              ))}

              {/* Sheen highlight arc */}
              <path
                d="M 14 12 A 18 18 0 0 1 44 20"
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Center label — deep red with web motif */}
              <circle cx="28" cy="28" r="9" fill="#1A0510" />
              <circle cx="28" cy="28" r="8.2" fill="none" stroke="rgba(220,38,38,0.5)" strokeWidth="0.6" />

              {/* Tiny web lines on label */}
              {[0, 60, 120, 180, 240, 300].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                return (
                  <line
                    key={deg}
                    x1="28" y1="28"
                    x2={28 + Math.cos(rad) * 7.5}
                    y2={28 + Math.sin(rad) * 7.5}
                    stroke="rgba(220,38,38,0.3)"
                    strokeWidth="0.5"
                  />
                );
              })}
              {/* Concentric label rings */}
              <circle cx="28" cy="28" r="5" fill="none" stroke="rgba(220,38,38,0.25)" strokeWidth="0.5" />

              {/* Spider emblem on label */}
              <text
                x="28" y="30.5"
                textAnchor="middle"
                fontSize="6"
                fill="rgba(220,38,38,0.8)"
                fontFamily="serif"
                fontWeight="bold"
              >
                ✦
              </text>

              {/* Spindle hole */}
              <circle cx="28" cy="28" r="1.5" fill="#090511" />
            </svg>
          </div>

          {/* Mute overlay icon — shown on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 flex items-center justify-center rounded-full bg-black/55 backdrop-blur-sm"
              >
                {isMuted
                  ? <VolumeX size={18} className="text-rose-400" />
                  : <Volume2 size={18} className="text-violet-light" />
                }
              </motion.div>
            )}
          </AnimatePresence>

          {/* Muted badge dot */}
          {isMuted && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-bg-base flex items-center justify-center pointer-events-none"
              title="Muted"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};
