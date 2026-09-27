import React, { useState } from 'react';
import { achievements } from '../data/achievements';
import { certifications } from '../data/certifications';
import { Achievement, Certification } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';
import { Award, ShieldCheck, ArrowUpRight, Calendar } from 'lucide-react';
import { Animate, StaggerGroup, fadeUp, blurIn, scaleIn, fadeRight } from './ScrollAnimations';

export const AchievementsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Achievement | Certification | null>(null);

  return (
    <section id="recognition" className="py-24 sm:py-32 border-t border-border-faint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

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
              <span className="text-violet-light"> & Certificate.</span>
            </h2>
          </Animate>
          <Animate variants={fadeUp} custom={2}>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl leading-reading">
              Pengakuan akademik resmi dan sertifikasi kompetensi profesional di bidang rekayasa perangkat lunak serta ekosistem AI modern.
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

        {/* Part 2: Certifications List */}
        <Animate variants={fadeUp}>
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border-faint">
            <h3 className="text-base font-bold text-ink-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-violet-light" />
              <span>Sertifikasi Kompetensi Profesional</span>
            </h3>
            <span className="text-2xs text-ink-muted font-medium">Klik untuk pratinjau dokumen</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <Animate key={cert.id} variants={fadeRight} custom={i}>
              <div
                onClick={() => setSelectedItem(cert)}
                className="card rounded-xl p-5 hover:border-border-soft transition-all duration-200 cursor-pointer group flex items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="p-2 rounded-lg bg-bg-surface border border-border-faint text-violet-light shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-ink-primary group-hover:text-violet-light transition-colors truncate">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-ink-muted mt-0.5">{cert.issuer}</p>
                    <p className="text-2xs text-ink-muted mt-1 flex items-center gap-1 tabular-nums font-medium">
                      <Calendar className="w-3 h-3 text-violet-light" />
                      {cert.date}
                    </p>
                  </div>
                </div>

                <div className="p-1.5 rounded-md bg-bg-surface border border-border-faint text-ink-muted group-hover:text-violet-light transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
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