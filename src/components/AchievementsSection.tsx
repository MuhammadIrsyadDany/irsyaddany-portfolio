import React, { useState } from 'react';
import { achievements } from '../data/achievements';
import { certifications } from '../data/certifications';
import { Achievement, Certification } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';
import { Award, ShieldCheck, ArrowUpRight, Calendar, FileText, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { Animate, StaggerGroup, fadeUp, scaleIn } from './ScrollAnimations';

export const AchievementsSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Achievement | Certification | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Sertifikasi Profesi',
    'Bahasa Internasional',
    'Magang Industri',
  ];

  const filteredCertifications = selectedCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="recognition"
      className="py-24 sm:py-32 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Section Header: Classified credentials // 05 */}
        <div className="mb-14 sm:mb-20">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag mb-4">
              <span>05</span>
              <span className="text-white/20">/</span>
              <span>CLASSIFIED CREDENTIALS</span>
              <span className="text-white/30 text-[10px] ml-2">// VERIFIED HONORS</span>
            </div>
          </Animate>

          <Animate variants={fadeUp} custom={1}>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-3xl">
              HONORS, VALIDATIONS
              <br />
              <span className="text-signal-orange">&amp; CERTIFICATIONS.</span>
            </h2>
          </Animate>

          <Animate variants={fadeUp} custom={2}>
            <p className="mt-5 text-sm sm:text-base text-white/60 font-sans max-w-2xl leading-relaxed">
              Bukti kredensial terverifikasi, sertifikasi kompetensi nasional BNSP, skor TOEIC internasional, serta spesialisasi arsitektur AI modern Anthropic.
            </p>
          </Animate>
        </div>

        {/* Part 1: Capstone Validation & Academic Honors */}
        <div className="mb-16">
          <div className="text-[11px] font-mono text-signal-orange uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>// CORE CAPSTONE &amp; ACADEMIC HONORS</span>
            <span className="text-white/20">——</span>
            <span className="text-white/50">OFFICIAL VALIDATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach, idx) => (
              <div
                key={ach.id}
                onClick={() => setSelectedItem(ach)}
                className="p-6 sm:p-7 rounded-2xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/40 hover:bg-[#12151B] transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-signal-orange/20 text-signal-orange border border-signal-orange/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-mono text-white/40">{ach.year}</span>
                  </div>

                  <h3 className="font-alter uppercase text-2xl font-bold text-white group-hover:text-signal-orange transition-colors flex items-center justify-between gap-2">
                    <span>{ach.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-signal-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>

                  <p className="text-xs font-mono text-signal-orange mt-1">
                    {ach.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-white/60 mt-3 font-sans leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2">
                  {(ach.metrics ?? []).map((m) => (
                    <div key={m.label} className="p-2 rounded-xl bg-[#15181C] border border-white/5 text-center">
                      <span className="block text-[10px] font-mono text-white/40 truncate">{m.label}</span>
                      <span className="block text-xs sm:text-sm font-mono font-bold text-signal-orange mt-0.5 truncate">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Certifications with Alter Category Filtering */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <p className="eyebrow-tag mb-1">CERTIFIED CREDENTIALS</p>
              <h3 className="font-alter uppercase text-2xl sm:text-3xl font-bold text-white tracking-tight">
                PROFESSIONAL LICENSES &amp; SPECIALIZATIONS.
              </h3>
            </div>
            <span className="text-xs font-mono text-white/40">
              {filteredCertifications.length} DOKUMEN TERDAFTAR
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-signal-orange text-white border-signal-orange shadow-[0_0_12px_rgba(255,90,31,0.3)]'
                    : 'bg-[#0E1013] text-white/60 border-white/10 hover:text-white hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCertifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedItem(cert)}
                className="p-5 rounded-2xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/40 hover:bg-[#12151B] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-3">
                    <span className="text-signal-orange">{cert.category}</span>
                    <span>{cert.date}</span>
                  </div>

                  <h4 className="font-alter uppercase text-base sm:text-lg font-bold text-white group-hover:text-signal-orange transition-colors line-clamp-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-white/50 mt-1 font-mono">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-white/60 mt-2.5 line-clamp-2 font-sans">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-[#15181C] text-[10px] font-mono text-white/70 border border-white/10">
                    {cert.badge}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#15181C] flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-signal-orange transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </div>

        {/* Modal */}
        <CertificateModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </section>
  );
};
