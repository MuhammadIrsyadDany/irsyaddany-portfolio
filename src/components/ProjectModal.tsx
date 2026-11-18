import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '../types/portfolio';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Calendar, MapPin, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

interface Props {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, isOpen, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setImgIdx(0);
    setImgErrors({});
  }, [project]);

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
      if (e.key === 'ArrowRight' && project) setImgIdx((p) => (p + 1) % project.screenshots.length);
      if (e.key === 'ArrowLeft' && project) setImgIdx((p) => (p - 1 + project.screenshots.length) % project.screenshots.length);
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
      style={{ background: 'rgba(5, 6, 8, 0.92)', backdropFilter: 'blur(16px)' }}
    >
      <div className="relative w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0E1013] rounded-2xl border border-white/15 shadow-2xl">
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-30 bg-[#0E1013]/95 backdrop-blur-md border-b border-white/10 px-5 sm:px-6 py-4 flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-[10px] font-mono text-signal-orange uppercase tracking-wider mb-0.5">
              <span>// MISSION FILE</span>
              <span className="text-white/30">•</span>
              <span>{project.type}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/50">{project.role}</span>
            </div>
            <h2 className="font-alter uppercase text-lg sm:text-xl font-bold text-white truncate">
              {project.fullTitle}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 border border-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7 space-y-6">
          {/* Main Screenshot Display */}
          <div>
            <div className="relative aspect-video rounded-xl bg-[#07080A] overflow-hidden border border-white/10 flex items-center justify-center p-2 sm:p-3">
              {!imgErrors[shot.url ?? ''] && shot.url ? (
                <img
                  src={shot.url}
                  alt={shot.caption}
                  loading="lazy"
                  decoding="async"
                  onError={() => setImgErrors((p) => ({ ...p, [shot.url!]: true }))}
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#07080A]">
                  <div className="w-12 h-12 rounded-xl bg-[#15181C] border border-white/10 flex items-center justify-center text-signal-orange mb-3">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{shot.caption || project.title}</h4>
                  <p className="text-xs text-white/50 mt-1">{project.fullTitle}</p>
                </div>
              )}

              {/* Prev / Next controls */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIdx((p) => (p - 1 + project.screenshots.length) % project.screenshots.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-signal-orange text-white border border-white/20 transition-all"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setImgIdx((p) => (p + 1) % project.screenshots.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-signal-orange text-white border border-white/20 transition-all"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Image counter indicator */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/75 border border-white/10 text-[10px] font-mono text-white/80">
                {imgIdx + 1} / {project.screenshots.length}
              </div>
            </div>

            {/* Caption */}
            {shot.caption && (
              <p className="mt-2.5 text-xs font-mono text-white/60 text-center">
                <span className="text-signal-orange mr-1">//</span>
                {shot.caption}
              </p>
            )}

            {/* Thumbnail Navigation Row */}
            {project.screenshots.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {project.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImgIdx(idx)}
                    className={`relative w-16 h-11 shrink-0 rounded-lg overflow-hidden border transition-all ${
                      idx === imgIdx ? 'border-signal-orange ring-1 ring-signal-orange' : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={s.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            {/* Meta Info */}
            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-white/40 block text-[10px]">TIMELINE</span>
                <span className="text-white font-semibold">{project.period}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">LOCATION / CLIENT</span>
                <span className="text-white font-semibold">{project.client || project.location}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">ROLE SPECIFICATION</span>
                <span className="text-signal-orange font-semibold">{project.role}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] mb-1.5">TECH ARSENAL</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#15181C] border border-white/10 text-[10px] text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description & Highlights */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="font-alter uppercase text-sm font-bold text-white tracking-wide mb-2">
                  // EXECUTIVE SUMMARY &amp; ARCHITECTURE
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="font-alter uppercase text-xs font-bold text-signal-orange tracking-wider mb-2.5">
                    // KEY HIGHLIGHTS &amp; DELIVERABLES
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-white/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-signal-orange shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
