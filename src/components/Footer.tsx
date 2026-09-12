import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border-faint bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand & Note */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left">
          <span className="text-sm font-bold text-ink-primary tracking-tight">
            irsyad<span className="text-violet-light">.dev</span>
          </span>
          <span className="hidden sm:inline text-ink-faint">|</span>
          <p className="text-xs text-ink-muted">
            Designed with purpose • Built with engineering integrity.
          </p>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-6 text-xs text-ink-muted tabular-nums">
          <span>&copy; 2026 Muhammad Irsyad Dany</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-ink-primary transition-colors p-1"
            aria-label="Kembali ke atas"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-violet-light" />
          </button>
        </div>

      </div>
    </footer>
  );
};