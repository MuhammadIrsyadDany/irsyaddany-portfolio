import React, { useState } from 'react';
import { ArrowUpRight, Crosshair, CheckCircle2, Layers, ExternalLink, Calendar, MapPin, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types/portfolio';
import { Animate, StaggerGroup, fadeUp, scaleIn } from './ScrollAnimations';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const flagship = projects[0];
  const missionRecords = projects.slice(1);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Section Header: Mission files // 06 records */}
        <div className="mb-14 sm:mb-20">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag mb-4">
              <span>03</span>
              <span className="text-white/20">/</span>
              <span>MISSION FILES</span>
              <span className="text-white/30 text-[10px] ml-2">// 06 CLASSIFIED RECORDS</span>
            </div>
          </Animate>

          <Animate variants={fadeUp} custom={1}>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-3xl">
              FIELD MISSIONS
              <br />
              <span className="text-signal-orange">&amp; PRODUCTION SYSTEMS.</span>
            </h2>
          </Animate>

          <Animate variants={fadeUp} custom={2}>
            <p className="mt-5 text-sm sm:text-base text-white/60 font-sans max-w-2xl leading-relaxed">
              Arsitektur aplikasi nyata yang telah dibangun, divalidasi dengan pengujian end-to-end, dan dioperasikan untuk kebutuhan bisnis, industri, serta riset akademik.
            </p>
          </Animate>
        </div>

        {/* Flagship Mission: 01 / VENDOR SAVVE (Thesis Capstone) */}
        <div className="mb-14">
          <div className="text-[11px] font-mono text-signal-orange uppercase tracking-wider mb-3 flex items-center gap-2">
            <span>// FLAGSHIP DOSSIER 01</span>
            <span className="text-white/20">——</span>
            <span className="text-white/50">ENTERPRISE CAPSTONE</span>
          </div>

          <div className="rounded-3xl bg-[#0E1013] border border-white/15 p-6 sm:p-10 relative overflow-hidden group shadow-2xl">
            {/* Tactical Corners */}
            <div className="tactical-corner-tl" />
            <div className="tactical-corner-tr" />
            <div className="tactical-corner-bl" />
            <div className="tactical-corner-br" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-signal-orange/20 text-signal-orange border border-signal-orange/30 text-[10px] font-mono font-bold tracking-wider uppercase">
                    CYPRESS 100% VERIFIED
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#15181C] text-white/70 border border-white/10 text-[10px] font-mono">
                    {flagship.type}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#15181C] text-white/70 border border-white/10 text-[10px] font-mono">
                    {flagship.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-alter uppercase text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {flagship.title}
                  </h3>
                  <p className="text-sm font-mono text-signal-orange mt-1">
                    {flagship.fullTitle}
                  </p>
                </div>

                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  {flagship.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {flagship.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-signal-orange shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {flagship.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#15181C] border border-white/10 text-xs font-mono text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Open Dossier Button */}
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedProject(flagship)}
                    className="btn-primary flex items-center gap-2 text-xs"
                  >
                    <span>Inspect Full Mission Dossier (11 Screenshots)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Interactive Preview Image */}
              <div className="lg:col-span-6">
                <div
                  onClick={() => setSelectedProject(flagship)}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#07080A] border border-white/10 cursor-pointer group/card shadow-xl"
                >
                  <img
                    src={flagship.thumbnail}
                    alt={flagship.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />

                  {/* Hover prompt */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                    <span className="flex items-center gap-2">
                      <Eye className="w-3.5 h-3.5 text-signal-orange" />
                      <span>CLICK TO OPEN DOSSIER GALLERY</span>
                    </span>
                    <span className="text-signal-orange font-bold">11 SHOTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Alter Mission Records List (Rows 02 to 06) */}
        <div>
          <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>// ARCHIVED MISSIONS (MSN-02 — MSN-06)</span>
            <span className="text-signal-orange">CLICK ROW TO INSPECT</span>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {missionRecords.map((project, idx) => {
              const num = (idx + 2).toString().padStart(2, '0');
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] px-3 sm:px-4 rounded-xl transition-colors"
                >
                  {/* Left: Code, Title, Role */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-mono text-xs sm:text-sm font-bold text-signal-orange shrink-0 mt-1 sm:mt-0">
                      MSN-{num}
                    </span>

                    <div className="min-w-0">
                      <h4 className="font-alter uppercase text-xl sm:text-2xl font-extrabold text-white group-hover:text-signal-orange transition-colors tracking-tight truncate">
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/50 mt-1">
                        <span>{project.fullTitle}</span>
                        <span>•</span>
                        <span className="text-white/70">{project.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle / Right: Tech pills, Year, Action */}
                  <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0">
                    <div className="hidden sm:flex flex-wrap gap-1.5 max-w-xs justify-end">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#15181C] border border-white/10 text-[10px] font-mono text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="text-right text-xs font-mono text-white/50">
                      <span className="block text-white font-medium">{project.period.split('—')[1]?.trim() || project.period}</span>
                      <span className="text-[10px] text-white/40">{project.location ? project.location.split(',')[0] : 'Production'}</span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#15181C] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-signal-orange group-hover:bg-signal-orange transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
