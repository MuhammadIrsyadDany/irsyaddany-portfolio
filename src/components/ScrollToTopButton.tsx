import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollYRef = useRef(0);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollYRef.current;
      const delta = currentScrollY - prevScrollY;

      // Show button once user scrolls down past 280px
      setIsVisible(currentScrollY > 280);

      // Track scroll progress percentage
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / totalScrollable) * 100));
        setScrollProgress(progress);
      }

      // Check if user is scrolling UP with a slight threshold
      if (delta < -3) {
        setIsScrollingUp(true);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrollingUp(false);
        }, 1200);
      } else if (delta > 5) {
        setIsScrollingUp(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular progress calculation
  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 350, damping: 25 },
          }}
          exit={{
            opacity: 0,
            scale: 0.6,
            y: 20,
            transition: { duration: 0.2 },
          }}
          className="fixed bottom-24 right-5 sm:right-6 z-40 select-none"
        >
          <motion.button
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className={`
              relative group flex items-center justify-center w-12 h-12 rounded-full
              bg-[#110A1E]/90 backdrop-blur-xl border transition-all duration-300
              ${
                isScrollingUp
                  ? 'border-violet-light shadow-[0_0_24px_rgba(184,138,248,0.45)] ring-2 ring-violet-light/40'
                  : 'border-border-soft hover:border-violet-light/50 shadow-lg shadow-black/40'
              }
            `}
          >
            {/* SVG Circular Progress Bar */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 44 44"
            >
              {/* Background Track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-violet-base/20"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Animated Progress Ring */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-violet-light transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Glowing Aura when scrolling UP */}
            {isScrollingUp && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.95, 1.15, 0.95] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-violet-base/25 filter blur-sm pointer-events-none"
              />
            )}

            {/* Arrow Icon with bouncing animation on scroll up */}
            <motion.div
              animate={isScrollingUp ? { y: [-2, 2, -2] } : { y: 0 }}
              transition={
                isScrollingUp
                  ? { repeat: Infinity, duration: 0.8, ease: 'easeInOut' }
                  : {}
              }
              className="relative z-10 flex items-center justify-center text-ink-primary group-hover:text-violet-pale transition-colors"
            >
              <ArrowUp className="w-5 h-5 text-violet-light group-hover:text-white transition-colors" />
            </motion.div>

            {/* Subtle Tooltip on Hover */}
            <span
              className="
                absolute right-14 px-2.5 py-1 rounded-md bg-[#1B102E]/95 border border-violet-base/30
                text-[11px] font-medium text-ink-primary tracking-wide whitespace-nowrap
                opacity-0 pointer-events-none -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-200 shadow-xl
              "
            >
              Kembali ke Atas
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
