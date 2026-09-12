import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Award, Calendar } from 'lucide-react';
import { Certification, Achievement } from '../types/portfolio';

interface CertificateModalProps {
  item: Certification | Achievement | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ item, isOpen, onClose }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
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
  const imgUrl = 'certificateImage' in item ? item.certificateImage : 'image' in item ? item.image : '';

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ background: 'rgba(4, 3, 8, 0.92)', backdropFilter: 'blur(16px)' }}
    >
      <div className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto card rounded-2xl border border-border-soft shadow-2xl">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-bg-surface/90 backdrop-blur-md border-b border-border-subtle px-5 sm:px-6 py-4 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-violet-dim text-violet-light shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-ink-primary truncate">{title}</h3>
            <p className="text-2xs text-ink-muted truncate tabular-nums">{issuerOrSubtitle} • {dateOrYear}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-ink-muted hover:text-ink-primary hover:bg-bg-raised transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Certificate View Frame */}
          <div className="relative aspect-[4/3] rounded-lg bg-bg-overlay overflow-hidden bg-grid-fine border border-border-subtle flex flex-col items-center justify-center p-6 text-center">
            {imgUrl && !imgError ? (
              <img
                src={imgUrl}
                alt={title}
                className="w-full h-full object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="space-y-3 max-w-sm">
                <div className="w-12 h-12 rounded-xl bg-violet-dim border border-border-subtle flex items-center justify-center mx-auto text-violet-light">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink-primary">{title}</h4>
                  <p className="text-2xs text-ink-muted mt-0.5">{issuerOrSubtitle}</p>
                </div>
                <p className="text-xs text-ink-muted">
                  Dokumen verifikasi resmi. File gambar dimuat dari:
                </p>
                <code className="text-2xs font-mono text-violet-light bg-bg-surface px-2.5 py-1 rounded border border-border-subtle inline-block">
                  {imgUrl || '/public/images/certifications/...'}
                </code>
              </div>
            )}
          </div>

          {/* Details Row */}
          <div className="flex items-center justify-between text-xs text-ink-muted pt-2 border-t border-border-faint tabular-nums">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-violet-light" />
              <span>Diterbitkan: {dateOrYear}</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs bg-bg-surface hover:bg-bg-raised text-ink-primary border border-border-subtle transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};