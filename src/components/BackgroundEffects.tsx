import React from 'react';
import { motion } from 'framer-motion';

/** 
 * Atmospheric background inspired by the iPhone 14 Pro Deep Purple aesthetic:
 * - Top luminous lilac/lavender bloom radiating into deep obsidian plum
 * - Subtle bottom ethereal bloom
 * - Soft tangent specular light contour creating depth without visual clutter
 */
export const BackgroundEffects: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    {/* Top Luminous Lilac / Deep Purple Bloom */}
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        x: ['-50%', '-48%', '-50%'],
        y: [0, 15, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -top-48 left-1/2 w-[1100px] h-[750px] rounded-full opacity-[0.20]"
      style={{
        background: 'radial-gradient(ellipse 900px 650px at 50% 20%, #B88AF8 0%, #7E32D9 35%, #4A1578 65%, transparent 85%)',
        filter: 'blur(110px)',
      }}
    />

    {/* Center Hourglass Subtle Arc Light (Echoing the iconic wallpaper contour) */}
    <motion.div
      animate={{
        scale: [1, 1.12, 1],
        opacity: [0.05, 0.08, 0.05],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[900px] rounded-full"
      style={{
        background: 'radial-gradient(circle 500px at center, #9E5CF6 0%, transparent 70%)',
        filter: 'blur(120px)',
      }}
    />

    {/* Bottom Ethereal Violet Bloom */}
    <motion.div
      animate={{
        scale: [1, 1.06, 1],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] rounded-full opacity-[0.16]"
      style={{
        background: 'radial-gradient(ellipse 800px 550px at 50% 80%, #B88AF8 0%, #7E32D9 40%, #4A1578 70%, transparent 88%)',
        filter: 'blur(100px)',
      }}
    />

    {/* Fine Geometric Specular Arc Line in background */}
    <svg
      className="absolute top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] opacity-[0.08]"
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