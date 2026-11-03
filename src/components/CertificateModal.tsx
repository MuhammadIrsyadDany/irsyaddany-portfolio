import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Award, Calendar, FileText, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Certification, Achievement } from '../types/portfolio';

interface CertificateModalProps {
  item: Certification | Achievement | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ item, isOpen, onClose }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setActivePageIndex(0);
    setImgError(false);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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

  if (!isOpen || !item) return null;

  const title = 'title' in item ? item.title : '';
  const issuerOrSubtitle = 'issuer' in item ? item.issuer : 'subtitle' in item ? item.subtitle : '';
  const dateOrYear = 'date' in item ? item.date : 'year' in item ? item.year : '';
  const description = 'description' in item ? item.description : '';
  const badge = 'badge' in item ? item.badge : undefined;
  const pdfUrl = 'pdfUrl' in item ? item.pdfUrl : undefined;

  // Build image list
  let images: string[] = [];
  if ('certificateImages' in item && item.certificateImages && item.certificateImages.length > 0) {
    images = item.certificateImages;
  } else if ('certificateImage' in item && item.certificateImage) {
    images = [item.certificateImage];
  } else if ('image' in item && item.image) {
    images = [item.image];
  }

  const currentImg = images[activePageIndex] || images[0] || '';
  const hasMultiplePages = images.length > 1;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ background: 'rgba(4, 3, 8, 0.92)', backdropFilter: 'blur(16px)' }}
    >
      <div className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto card rounded-2xl border border-border-soft shadow-2xl flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-bg-surface/95 backdrop-blur-md border-b border-border-subtle px-5 sm:px-6 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-violet-dim text-violet-light shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-bold text-ink-primary truncate">{title}</h3>
                {badge && (
                  <span className="px-2 py-0.5 rounded-full text-2xs font-semibold bg-violet-dim text-violet-light border border-violet-light/30">
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-2xs text-ink-muted truncate tabular-nums">
                {issuerOrSubtitle} • {dateOrYear}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-ink-muted hover:text-ink-primary hover:bg-bg-raised transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Multi-page controller if applicable */}
          {hasMultiplePages && (
            <div className="flex items-center justify-between p-2 rounded-xl bg-bg-surface border border-border-faint text-xs">
              <div className="flex items-center gap-2">
                <span className="text-2xs font-semibold uppercase tracking-wider text-ink-muted px-2">Halaman:</span>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePageIndex(idx)}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${
                      activePageIndex === idx
                        ? 'bg-violet-dim text-violet-light border border-violet-light/40 shadow-sm'
                        : 'text-ink-muted hover:text-ink-primary hover:bg-bg-raised'
                    }`}
                  >
                    Hal. {idx + 1}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button
                  disabled={activePageIndex === 0}
                  onClick={() => setActivePageIndex((prev) => Math.max(0, prev - 1))}
                  className="p-1 rounded-lg text-ink-muted hover:text-ink-primary hover:bg-bg-raised disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Halaman sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-2xs tabular-nums text-ink-muted px-1">
                  {activePageIndex + 1} / {images.length}
                </span>
                <button
                  disabled={activePageIndex === images.length - 1}
                  onClick={() => setActivePageIndex((prev) => Math.min(images.length - 1, prev + 1))}
                  className="p-1 rounded-lg text-ink-muted hover:text-ink-primary hover:bg-bg-raised disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Halaman berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Certificate View Frame */}
          <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-xl bg-bg-overlay overflow-hidden bg-grid-fine border border-border-subtle flex flex-col items-center justify-center p-3 text-center shadow-inner">
            {currentImg && !imgError ? (
              <img
                src={currentImg}
                alt={`${title} - Halaman ${activePageIndex + 1}`}
                className="w-full h-full object-contain drop-shadow-md rounded transition-opacity duration-200"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="space-y-3 max-w-sm p-4">
                <div className="w-12 h-12 rounded-xl bg-violet-dim border border-border-subtle flex items-center justify-center mx-auto text-violet-light">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink-primary">{title}</h4>
                  <p className="text-2xs text-ink-muted mt-0.5">{issuerOrSubtitle}</p>
                </div>
                <p className="text-xs text-ink-muted">
                  Dokumen verifikasi resmi. File sertifikat dapat diunduh atau dibuka langsung.
                </p>
              </div>
            )}
          </div>

          {/* Description & Competencies */}
          {description && (
            <div className="p-4 rounded-xl bg-bg-surface/50 border border-border-faint space-y-1.5">
              <div className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-wider text-violet-light">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Rincian & Bukti Kompetensi</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-reading">{description}</p>
            </div>
          )}

          {/* Actions & Meta Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border-faint text-xs">
            <div className="flex items-center gap-1.5 text-ink-muted tabular-nums">
              <Calendar className="w-3.5 h-3.5 text-violet-light" />
              <span>Diterbitkan: {dateOrYear}</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {currentImg && !imgError && (
                <a
                  href={currentImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-bg-surface hover:bg-bg-raised text-ink-primary border border-border-subtle transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-violet-light" />
                  <span>Gambar HD</span>
                </a>
              )}

              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-violet-dim hover:bg-violet-dim/80 text-violet-light border border-violet-light/40 transition-colors font-medium shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Buka PDF Dokumen Asli</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg text-xs bg-bg-surface hover:bg-bg-raised text-ink-primary border border-border-subtle transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
