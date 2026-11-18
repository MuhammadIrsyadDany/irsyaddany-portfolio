import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, ArrowUpRight, FileText, Briefcase, Award, Users } from 'lucide-react';
import { experiences } from '../data/experience';
import { Animate, StaggerGroup, fadeUp, scaleIn } from './ScrollAnimations';

type FilterType = 'All' | 'Internship' | 'Leadership' | 'Volunteer';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');
  const filters: FilterType[] = ['All', 'Internship', 'Leadership', 'Volunteer'];

  const filtered = filter === 'All'
    ? experiences
    : experiences.filter((e) => e.type === filter);

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Section Header: Field archives // 06 records */}
        <div className="mb-14 sm:mb-20">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag mb-4">
              <span>04</span>
              <span className="text-white/20">/</span>
              <span>FIELD ARCHIVES</span>
              <span className="text-white/30 text-[10px] ml-2">// WORK &amp; LEADERSHIP</span>
            </div>
          </Animate>

          <Animate variants={fadeUp} custom={1}>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-3xl">
              WHERE I'VE CONTRIBUTED.
              <br />
              <span className="text-signal-orange">INDUSTRY &amp; LEADERSHIP.</span>
            </h2>
          </Animate>

          <Animate variants={fadeUp} custom={2}>
            <p className="mt-5 text-sm sm:text-base text-white/60 font-sans max-w-2xl leading-relaxed">
              Rekam jejak pengalaman magang industri, kepemimpinan kepanitiaan kampus, serta kontribusi lapangan yang membentuk kapabilitas komunikasi dan eksekusi tim.
            </p>
          </Animate>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-5 border-b border-white/10">
          {filters.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                filter === tab
                  ? 'bg-signal-orange text-white border-signal-orange shadow-[0_0_12px_rgba(255,90,31,0.3)]'
                  : 'bg-[#0E1013] text-white/60 border-white/10 hover:text-white hover:border-white/25'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Experience Timeline Grid */}
        <StaggerGroup className="space-y-4">
          {filtered.map((exp, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');
            return (
              <Animate key={exp.id} variants={fadeUp} custom={idx}>
                <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/40 hover:bg-[#12151B] transition-all relative overflow-hidden group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    {/* Role & Org */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-signal-orange">
                          ARC-{num}
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="px-2 py-0.5 rounded bg-[#15181C] text-[10px] font-mono uppercase text-white/70 border border-white/10">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="font-alter uppercase text-2xl font-bold text-white group-hover:text-signal-orange transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-white/90 mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    {/* Timeline & Location */}
                    <div className="text-left md:text-right shrink-0 font-mono text-xs text-white/50 space-y-1">
                      <div className="flex md:justify-end items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-signal-orange" />
                        <span className="text-white font-medium">{exp.period}</span>
                      </div>
                      <div className="flex md:justify-end items-center gap-1.5 text-white/40">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 font-sans leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-signal-orange shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Document Link */}
                  {exp.documentation && exp.documentation.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                      <a
                        href="/documents/certificates/sertifikat-magang.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-signal-orange hover:text-white transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Lihat Dokumen Sertifikat Magang</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </Animate>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
};
