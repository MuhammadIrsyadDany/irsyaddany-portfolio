import React from 'react';
import { motion, useScroll, useSpring, type Variants } from 'framer-motion';

/* ============================================================
   REUSABLE SCROLL-TRIGGERED ANIMATION WRAPPERS
   Uses Framer Motion's whileInView for elegant reveal-on-scroll.
   ============================================================ */

// --- Variant Presets ---

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

export const lineGrow: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Wrapper Components ---

interface AnimateProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  custom?: number;
  /** HTML tag to render */
  as?: 'div' | 'section' | 'article' | 'p' | 'span' | 'h2' | 'h3';
  /** Amount of element visible before triggering (0-1) */
  amount?: number;
}

/**
 * Generic scroll-reveal wrapper.
 * Wraps children in a motion element that animates when scrolled into view.
 */
export const Animate: React.FC<AnimateProps> = ({
  children,
  variants = fadeUp,
  className = '',
  custom = 0,
  as = 'div',
  amount = 0.15,
}) => {
  const Tag = motion[as] as React.ElementType;

  return (
    <Tag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      custom={custom}
      className={className}
    >
      {children}
    </Tag>
  );
};

/**
 * Container that staggers its direct children.
 */
export const StaggerGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'ul';
}> = ({ children, className = '', as = 'div' }) => {
  const Tag = motion[as] as React.ElementType;

  return (
    <Tag
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </Tag>
  );
};

/**
 * Animated horizontal line (section divider, accent bar, etc.)
 */
export const AnimatedLine: React.FC<{ className?: string }> = ({
  className = 'h-px bg-violet-base',
}) => (
  <motion.div
    variants={lineGrow}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    className={className}
  />
);

/**
 * Creative scroll progress bar at the very top edge of the window
 */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-violet-base via-violet-light to-fuchsia-400 z-50 origin-left shadow-[0_0_8px_rgba(184,138,248,0.7)]"
      style={{ scaleX }}
    />
  );
};
