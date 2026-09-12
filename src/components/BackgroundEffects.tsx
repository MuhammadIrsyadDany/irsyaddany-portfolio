import React from 'react';
import { motion } from 'framer-motion';

/** 
 * Atmospheric background inspired by the iPhone 14 Pro Deep Purple aesthetic.
 * Optimized for mobile Safari (iOS) and desktop:
 * - Uses pure CSS radial gradients with soft alpha feathering (NO heavy GPU blur filters)
 * - Prevents WebKit GPU memory exhaustion and crashes on iOS devices
 * - Preserves subtle breathing animation without high GPU load
 */
export const BackgroundEffects: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    {/* Top Luminous Lilac / Deep Purple Bloom */}
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.85, 1, 0.85],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -top-32 left-1/2 -translate-x-1/2 w-[95vw] max-w-[1000px] h-[550px] rounded-full will-change-transform"
      style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(184, 138, 248, 0.18) 0%, rgba(126, 50, 217, 0.12) 40%, rgba(74, 21, 120, 0.05) 75%, transparent 100%)',
      }}
    />

    {/* Center Subtle Ambient Light */}
    <motion.div
      animate={{
        opacity: [0.04, 0.07, 0.04],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[800px] h-[600px] rounded-full will-change-transform"
      style={{
        background: 'radial-gradient(circle at center, rgba(158, 92, 246, 0.14) 0%, rgba(126, 50, 217, 0.06) 45%, transparent 75%)',
      }}
    />

    {/* Bottom Ethereal Violet Bloom */}
    <motion.div
      animate={{
        scale: [1, 1.04, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[500px] rounded-full will-change-transform"
      style={{
        background: 'radial-gradient(ellipse 70% 55% at 50% 70%, rgba(184, 138, 248, 0.16) 0%, rgba(126, 50, 217, 0.10) 45%, rgba(74, 21, 120, 0.04) 80%, transparent 100%)',
      }}
    />

    {/* Fine Geometric Specular Arc Line in background */}
    <svg
      className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] opacity-[0.08]"
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 100 0 C 400 400, 800 400, 1100 0"
        stroke="url(#purpleArc)"
        strokeWidth="1.5"
      />
      <path
        d="M 100 800 C 400 400, 800 400, 1100 800"
        stroke="url(#purpleArc)"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="purpleArc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7E32D9" stopOpacity="0" />
          <stop offset="50%" stopColor="#E4D4FE" stopOpacity="1" />
          <stop offset="100%" stopColor="#7E32D9" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);