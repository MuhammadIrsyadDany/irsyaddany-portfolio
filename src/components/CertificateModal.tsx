import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Award, Calendar, FileText, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
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
      if (isOpen && e.key === 'Escape') onClose();
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
      style={{ background: 'rgba(5, 6, 8, 0.92)', backdropFilter: 'blur(16px)' }}
    >
      <div className="relative w-full sm:max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0E1013] rounded-2xl border border-white/15 shadow-2xl flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-[#0E1013]/95 backdrop-blur-md border-b border-white/10 px-5 sm:px-6 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#15181C] border border-white/10 flex items-center justify-center text-signal-orange shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-alter uppercase text-base sm:text-lg font-bold text-white truncate">
                  {title}
                </h3>
                {badge && (
                  <span className="px-2 py-0.5 rounded bg-signal-orange/20 text-signal-orange border border-signal-orange/40 text-[10px] font-mono uppercase">
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-xs font-mono text-white/50 truncate">
                {issuerOrSubtitle} • {dateOrYear}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 border border-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Certificate Image or Gallery Preview */}
          {images.length > 0 && (
            <div className="space-y-3">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl bg-[#07080A] border border-white/10 overflow-hidden flex items-center justify-center p-2">
                {!imgError && currentImg ? (
                  <img
                    src={currentImg}
                    alt={`${title} - Page ${activePageIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    onError={() => setImgError(true)}
                    className="max-h-full max-w-full object-contain rounded"
                  />
                ) : (
                  <div className="text-center p-6 text-white/40 font-mono text-xs">
                    <FileText className="w-10 h-10 mx-auto text-signal-orange mb-2" />
                    <span>DOKUMEN VERIFIKASI TERSEDIA VIA PDF</span>
                  </div>
                )}

                {/* Multiple Page Controls */}
                {hasMultiplePages && (
                  <>
                    <button
                      onClick={() => setActivePageIndex((p) => (p - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-signal-orange text-white border border-white/20 transition-all"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActivePageIndex((p) => (p + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-signal-orange text-white border border-white/20 transition-all"
                      aria-label="Next Page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/80 border border-white/10 text-[10px] font-mono text-white/80">
                      HALAMAN {activePageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails row for multi-page */}
              {hasMultiplePages && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePageIndex(idx)}
                      className={`relative w-16 h-12 shrink-0 rounded-lg overflow-hidden border transition-all ${
                        idx === activePageIndex ? 'border-signal-orange ring-1 ring-signal-orange' : 'border-white/10 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description & Action */}
          <div className="p-4 rounded-xl bg-[#15181C] border border-white/10 space-y-4">
            <div>
              <span className="text-[10px] font-mono text-signal-orange uppercase tracking-wider block mb-1">
                // DESKRIPSI &amp; CAKUPAN KOMPETENSI
              </span>
              <p className="text-sm text-white/80 font-sans leading-relaxed">
                {description}
              </p>
            </div>

            {/* Metrics if achievement */}
            {'metrics' in item && item.metrics && item.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                {item.metrics.map((m) => (
                  <div key={m.label} className="p-2 rounded-lg bg-[#0E1013] border border-white/10 text-center">
                    <span className="block text-[10px] font-mono text-white/40 truncate">{m.label}</span>
                    <span className="block text-xs sm:text-sm font-mono font-bold text-signal-orange mt-0.5 truncate">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action buttons */}
            {pdfUrl && (
              <div className="pt-2 flex items-center justify-between">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-4 text-xs inline-flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Buka Dokumen PDF Resmi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] font-mono text-white/40">OFFICIAL VERIFIED RECORD</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
