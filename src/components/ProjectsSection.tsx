import React, { useState } from 'react';
import { ArrowUpRight, Eye, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types/portfolio';
import { Animate, StaggerGroup, fadeUp } from './ScrollAnimations';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(projects[0]);

  return (
    <section
      id="projects"
      className="py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Header: // Mission files 06 records */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="text-signal-orange font-bold">//</span>
            <span className="text-white uppercase font-bold tracking-wider">Mission files</span>
          </div>
          <span className="text-white/40">06 RECORDS CLASSIFIED</span>
        </div>

        {/* Alter Layout: Dynamic Mission Row List with Floating Interactive Cover & Modal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left / Center Column: The List of Missions */}
          <div className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
            {projects.map((proj, idx) => {
              const num = (idx + 1).toString().padStart(2, '0');
              const isHovered = (hoveredProject?.id ?? projects[0].id) === proj.id;

              return (
                <div
                  key={proj.id}
                  onMouseEnter={() => setHoveredProject(proj)}
                  onClick={() => setSelectedProject(proj)}
                  className="group py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] px-2 sm:px-4 rounded-xl transition-all"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-mono text-xs font-bold text-signal-orange shrink-0 mt-1 sm:mt-0">
                      {num}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-alter uppercase text-2xl sm:text-3xl font-extrabold text-white group-hover:text-signal-orange transition-colors tracking-tight truncate">
                        {proj.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/50 mt-1">
                        <span>{proj.role}</span>
                        <span>•</span>
                        <span className="text-white/70">{proj.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-1 sm:pt-0">
                    <div className="text-left sm:text-right text-xs font-mono text-white/50">
                      <span className="block text-white font-medium">
                        {proj.location ? proj.location.split(',')[0] : 'Production'}
                      </span>
                      <span className="text-[11px] text-white/40">
                        {proj.period.split('—')[1]?.trim() || proj.period}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#15181C] border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-signal-orange group-hover:bg-signal-orange transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Interactive Mission Cover Preview (Alter Mission Tunnel Style) */}
          <div className="lg:col-span-4 hidden lg:block sticky top-28">
            <div className="p-4 rounded-2xl bg-[#0E1013] border border-white/10 shadow-2xl">
              <div className="text-[10px] font-mono text-signal-orange uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>// LIVE DOSSIER PREVIEW</span>
                <span className="text-white/40">CLICK TO EXPAND</span>
              </div>

              {hoveredProject && (
                <div
                  onClick={() => setSelectedProject(hoveredProject)}
                  className="cursor-pointer group/card"
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#07080A] border border-white/10 shadow-inner">
                    <img
                      src={hoveredProject.thumbnail}
                      alt={hoveredProject.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white bg-black/75 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/15">
                      <span className="truncate max-w-[150px]">{hoveredProject.title}</span>
                      <span className="text-signal-orange font-bold shrink-0">
                        {hoveredProject.screenshots.length} SHOTS
                      </span>
                    </div>
                  </div>

                  <div className="mt-3.5 space-y-2">
                    <h4 className="font-alter uppercase text-lg font-bold text-white group-hover/card:text-signal-orange transition-colors">
                      {hoveredProject.fullTitle}
                    </h4>
                    <p className="text-xs text-white/60 font-sans line-clamp-2">
                      {hoveredProject.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {hoveredProject.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#15181C] border border-white/10 text-[10px] font-mono text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Full Dossier */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
