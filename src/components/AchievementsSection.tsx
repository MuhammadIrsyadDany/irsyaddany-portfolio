import React, { useState } from 'react';
import { achievements } from '../data/achievements';
import { certifications } from '../data/certifications';
import { Achievement, Certification } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';
import { Award, ShieldCheck, ArrowUpRight, Calendar, FileText, Sparkles } from 'lucide-react';
import { Animate, StaggerGroup, fadeUp, blurIn, scaleIn, fadeRight } from './ScrollAnimations';

export const AchievementsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Achievement | Certification | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Sertifikasi Profesi',
    'Bahasa Internasional',
    'Magang Industri'
  ];

  const filteredCertifications = selectedCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === selectedCategory);

  return (
    <section id="recognition" className="py-24 sm:py-32 border-t border-border-faint overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag">
              <span>05</span>
              <span className="text-border-soft">/</span>
              <span>Recognition &amp; Credentials</span>
            </div>
          </Animate>
          <Animate variants={blurIn} custom={1}>
            <h2
              className="
                text-3xl sm:text-5xl
                font-black
                tracking-[-0.045em]
                leading-[0.92]
                text-ink-primary
                max-w-2xl
              "
            >
              Honors
              <span className="text-violet-light"> &amp; Certificate.</span>
            </h2>
          </Animate>
          <Animate variants={fadeUp} custom={2}>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl leading-reading">
              Bukti kredensial terverifikasi, sertifikasi kompetensi nasional BNSP, skor kemahiran bahasa internasional, serta spesialisasi arsitektur AI modern.
            </p>
          </Animate>
        </div>

        {/* Part 1: Academic & Capstone Honors */}
        <StaggerGroup className={achievements.length > 1 ? "grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" : "max-w-2xl mb-16"}>
          {achievements.map((ach, i) => (
            <Animate key={ach.id} variants={scaleIn} custom={i}>
            <div
              onClick={() => setSelectedItem(ach)}
              className="card rounded-2xl p-7 space-y-5 hover:border-border-soft transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-violet-dim flex items-center justify-center text-violet-light">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="mono-index tabular-nums">{ach.year}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ink-primary group-hover:text-violet-light transition-colors flex items-center justify-between">
                    <span>{ach.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-violet-light transition-transform" />
                  </h3>
                  <p className="text-xs font-medium text-violet-light mt-0.5">{ach.subtitle}</p>
                  <p className="text-xs text-ink-muted mt-2.5 leading-reading">{ach.description}</p>
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border-faint">
                {(ach.metrics ?? []).map((m) => (
                  <div key={m.label} className="p-2.5 rounded-lg bg-bg-surface border border-border-faint">
                    <p className="text-2xs text-ink-muted truncate font-medium">{m.label}</p>
                    <p className="text-xs font-bold text-ink-primary tabular-nums mt-0.5 truncate">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
            </Animate>
          ))}
        </StaggerGroup>

        {/* Part 2: Certifications List with Filtering */}
        <Animate variants={fadeUp}>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-faint">
            <h3 className="text-base font-bold text-ink-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-violet-light" />
              <span>Sertifikasi &amp; Bukti Kredensial Terverifikasi</span>
              <span className="text-2xs font-mono font-semibold px-2 py-0.5 rounded-full bg-violet-dim text-violet-light border border-violet-light/30">
                {certifications.length} Dokumen
              </span>
            </h3>
            <span className="text-2xs text-ink-muted font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-violet-light" />
              Klik dokumen untuk pratinjau penuh &amp; download PDF
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? certifications.length
                : certifications.filter((c) => c.category === cat).length;
              if (count === 0) return null;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-2xs font-semibold transition-all border ${
                    isActive
                      ? 'bg-violet-dim text-violet-light border-violet-light/40 shadow-sm'
                      : 'bg-bg-surface/60 text-ink-muted border-border-faint hover:text-ink-primary hover:border-border-soft'
                  }`}
                >
                  {cat === 'All' ? 'Semua Kategori' : cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCertifications.map((cert, i) => (
              <Animate key={cert.id} variants={fadeRight} custom={i}>
              <div
                onClick={() => setSelectedItem(cert)}
                className="card rounded-2xl p-4 sm:p-5 hover:border-violet-light/40 transition-all duration-200 cursor-pointer group flex items-start gap-4 h-full"
              >
                {/* Certificate Thumbnail Preview */}
                <div className="relative w-20 sm:w-24 aspect-[4/3] rounded-lg bg-bg-overlay border border-border-faint overflow-hidden shrink-0 group-hover:border-violet-light/50 transition-colors shadow-inner flex items-center justify-center">
                  {cert.certificateImage ? (
                    <img
                      src={cert.certificateImage}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <ShieldCheck className="w-6 h-6 text-violet-light" />
                  )}
                  {cert.certificateImages && cert.certificateImages.length > 1 && (
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-bg-surface/90 text-violet-light border border-border-subtle leading-none">
                      {cert.certificateImages.length} Hal
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 flex flex-col justify-between h-full space-y-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      {cert.badge && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-dim text-violet-light border border-violet-light/25">
                          {cert.badge}
                        </span>
                      )}
                      {cert.pdfUrl && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-bg-surface text-ink-muted border border-border-faint flex items-center gap-1">
                          <FileText className="w-2.5 h-2.5 text-violet-light" /> PDF
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-ink-primary group-hover:text-violet-light transition-colors line-clamp-2 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-ink-muted mt-0.5 truncate">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border-faint text-2xs text-ink-muted">
                    <span className="flex items-center gap-1 tabular-nums font-medium">
                      <Calendar className="w-3 h-3 text-violet-light" />
                      {cert.date}
                    </span>
                    <span className="text-violet-light font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Lihat Bukti
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
              </Animate>
            ))}
          </div>
        </div>
        </Animate>

      </div>

      {/* Certificate / Honor Document Modal */}
      <CertificateModal
        item={selectedItem}
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
