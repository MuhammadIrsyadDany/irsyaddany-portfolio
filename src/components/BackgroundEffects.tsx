import React from 'react';
import { motion } from 'framer-motion';

/** 
 * Atmospheric tactical background inspired by Alter (Framer) design.
 * Features subtle signal glow, grid crosshairs, and deep obsidian depth.
 * Optimized with pure CSS gradients (NO heavy GPU blur filters).
 */
export const BackgroundEffects: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    {/* Top Subtle Alter Signal Beacon Glow */}
    <motion.div
      animate={{
        opacity: [0.35, 0.55, 0.35],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[450px] rounded-full will-change-transform"
      style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255, 90, 31, 0.12) 0%, rgba(255, 90, 31, 0.04) 50%, transparent 80%)',
      }}
    />

    {/* Center Tactical Cyan Ambient Light */}
    <motion.div
      animate={{
        opacity: [0.03, 0.06, 0.03],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[800px] h-[600px] rounded-full will-change-transform"
      style={{
        background: 'radial-gradient(circle at center, rgba(49, 168, 255, 0.08) 0%, transparent 70%)',
      }}
    />

    {/* Bottom Horizon Glow */}
    <div
      className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[400px] rounded-full"
      style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 70%, rgba(255, 90, 31, 0.07) 0%, transparent 80%)',
      }}
    />

    {/* Tactical Blueprint Grid Crosshairs */}
    <div className="absolute inset-0 opacity-[0.03] tactical-grid-bg pointer-events-none" />
  </div>
);
