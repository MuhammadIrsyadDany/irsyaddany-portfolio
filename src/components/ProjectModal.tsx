import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types/portfolio';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Calendar, MapPin, ExternalLink, Layers } from 'lucide-react';

interface Props { project: Project | null; isOpen: boolean; onClose: () => void; }

export const ProjectModal: React.FC<Props> = ({ project, isOpen, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  useEffect(() => { setImgIdx(0); setImgErrors({}); }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project) setImgIdx(p => (p + 1) % project.screenshots.length);
      if (e.key === 'ArrowLeft' && project) setImgIdx(p => (p - 1 + project.screenshots.length) % project.screenshots.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  const shot = project.screenshots[imgIdx] ?? { url: project.thumbnail, caption: project.title };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.fullTitle}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ background: 'rgba(4, 3, 8, 0.94)', backdropFilter: 'blur(16px)' }}
    >
      <div className="relative w-full sm:max-w-3xl max-h-[88vh] overflow-y-auto card rounded-2xl border border-border-soft shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-20 bg-bg-surface/95 backdrop-blur-md border-b border-border-subtle px-5 sm:px-6 py-4 flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-2xs text-ink-muted">{project.type} • {project.role}</p>
            <h2 className="text-sm sm:text-base font-bold text-ink-primary truncate">{project.fullTitle}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-ink-muted hover:text-ink-primary hover:bg-bg-raised border border-border-faint hover:border-border-subtle transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-6">

          {/* Screenshot viewer */}
          <div>
            <div className="relative aspect-video rounded-xl bg-bg-overlay overflow-hidden bg-grid-fine border border-border-subtle flex items-center justify-center p-2 sm:p-3">
              {!imgErrors[shot.url ?? ''] && shot.url ? (
                <img
                  src={shot.url}
                  alt={shot.caption}
                  onError={() => setImgErrors(p => ({ ...p, [shot.url!]: true }))}
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-bg-surface/90 via-bg-base to-bg-surface/70 relative overflow-hidden">
                  {/* Mock browser header */}
                  <div className="absolute top-0 inset-x-0 h-7 bg-bg-raised/80 border-b border-border-faint flex items-center px-3 gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/60" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                    <span className="text-[10px] text-ink-muted ml-2 font-mono truncate">{project.id}.app / preview</span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-violet-dim border border-violet-light/30 flex items-center justify-center text-violet-light shadow-lg mt-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  
                  <h4 className="mt-3 text-sm font-bold text-ink-primary max-w-sm">{shot.caption || project.title}</h4>
                  <p className="mt-1 text-xs text-ink-muted max-w-xs">{project.fullTitle}</p>
                  
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface border border-border-subtle text-2xs text-violet-light font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-base animate-pulse" />
                    <span>Pratinjau Antarmuka &amp; Alur Sistem</span>
                  </div>
                </div>
              )}

              {/* Prev/Next */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIdx(p => (p - 1 + project.screenshots.length) % project.screenshots.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-bg-base/80 border border-border-subtle text-ink-secondary hover:text-ink-primary"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setImgIdx(p => (p + 1) % project.screenshots.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-bg-base/80 border border-border-subtle text-ink-secondary hover:text-ink-primary"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Dot indicators */}
            {project.screenshots.length > 1 && (
              <div className="flex gap-1.5 justify-center mt-3">
                {project.screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIdx ? 'bg-violet-base' : 'bg-ink-faint'}`}
                    aria-label={`Screenshot ${i + 1}`}
                  />
                ))}
              </div>
            )}
            {shot.caption && (
              <p className="text-center text-2xs text-ink-muted mt-2">{shot.caption}</p>
            )}
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-4 text-2xs tabular-nums text-ink-muted">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-violet-light" />
              <span>{project.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-violet-light" />
              <span>{project.location}</span>
            </div>
            {project.client && (
              <div className="flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-violet-light" />
                <span>{project.client}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-ink-secondary leading-reading">{project.description}</p>

          {/* Highlights */}
          <div>
            <p className="text-xs uppercase font-semibold tracking-wider text-ink-muted mb-3">Key Highlights</p>
            <ul className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                  <CheckCircle2 className="w-4 h-4 text-violet-light mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <p className="text-xs uppercase font-semibold tracking-wider text-ink-muted mb-3">Technologies</p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(t => (
                <span key={t} className="tech-chip tech-chip-violet">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};