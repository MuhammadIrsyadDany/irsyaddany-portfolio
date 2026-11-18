import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border-faint bg-bg-base overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col sm:flex-row items-center justify-between gap-6">

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

        {/* Navigation links & CV in Footer */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-ink-muted">
          <a href="#about" className="hover:text-ink-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-ink-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-ink-primary transition-colors">Projects</a>
          <a href="#experience" className="hover:text-ink-primary transition-colors">Experience</a>
          <a href="#recognition" className="hover:text-ink-primary transition-colors">Certificates</a>
          <a href="#contact" className="hover:text-ink-primary transition-colors">Contact</a>
          <span className="text-border-soft hidden sm:inline">•</span>
          <a
            href="/documents/CV_Muhammad_Irsyad_Dany.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-light hover:text-violet-base font-semibold transition-colors"
          >
            Download CV
          </a>
          <span className="text-border-soft hidden sm:inline">•</span>
          <div className="flex items-center gap-2.5 text-ink-secondary">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-light transition-colors p-0.5"
              aria-label="GitHub"
              title="GitHub Muhammad Irsyad Dany"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-light transition-colors p-0.5"
              aria-label="LinkedIn"
              title="LinkedIn Muhammad Irsyad Dany"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-light transition-colors p-0.5"
              aria-label="Instagram"
              title="Instagram @rsydanyy"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </div>
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