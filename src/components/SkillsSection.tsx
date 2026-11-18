import React, { useState } from 'react';
import { Server, Layout, Wrench, ShieldCheck, Cpu, Database, Smartphone, Terminal, Activity, ChevronRight } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { technologies, techCategories } from '../data/technologies';
import { TechCategory } from '../types/portfolio';
import { Animate, StaggerGroup, fadeUp, scaleIn } from './ScrollAnimations';

interface PowerAbility {
  id: string;
  code: string;
  title: string;
  status: string;
  summary: string;
  techs: string[];
  stats: {
    sys: number; // System Architecture
    cla: number; // Code Clarity
    spe: number; // Execution Speed
    cra: number; // UI/UX Craft
    rel: number; // Reliability & Testing
  };
}

export const SkillsSection: React.FC = () => {
  const [selectedAbility, setSelectedAbility] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<TechCategory>('All');

  const powerAbilities: PowerAbility[] = [
    {
      id: 'pwr-01',
      code: 'PWR-01',
      title: 'Web Architecture & Backend',
      status: 'Active',
      summary: 'Perancangan arsitektur backend MVC skala enterprise, skema database ternormalisasi, RESTful API terstruktur, serta otentikasi multi-peran (RBAC) yang aman.',
      techs: ['Laravel', 'PHP', 'MySQL', 'RESTful API', 'Database Design', 'RBAC'],
      stats: { sys: 96, cla: 92, spe: 88, cra: 90, rel: 95 },
    },
    {
      id: 'pwr-02',
      code: 'PWR-02',
      title: 'Front-End & Mobile Engineering',
      status: 'Active',
      summary: 'Pengembangan antarmuka responsif berkecepatan tinggi dengan Next.js & Tailwind CSS, serta aplikasi mobile native-performance lintas platform menggunakan Flutter.',
      techs: ['Flutter', 'Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
      stats: { sys: 90, cla: 94, spe: 92, cra: 95, rel: 90 },
    },
    {
      id: 'pwr-03',
      code: 'PWR-03',
      title: 'Quality Assurance & E2E Testing',
      status: 'Active',
      summary: 'Otomatisasi pengujian perangkat lunak end-to-end (E2E) menggunakan Cypress dengan metodologi pengujian menyeluruh pada 60 skenario hingga mencapai 100% pass rate.',
      techs: ['Cypress E2E', 'Automated Testing', 'Regression Verification', 'Postman API', 'Blackbox Testing'],
      stats: { sys: 95, cla: 96, spe: 86, cra: 88, rel: 100 },
    },
    {
      id: 'pwr-04',
      code: 'PWR-04',
      title: 'UI/UX Design & System Analysis',
      status: 'Active',
      summary: 'Penerjemahan kebutuhan operasional menjadi diagram arsitektur Use Case & Activity, perancangan prototipe interaktif di Figma, serta penyusunan panduan pengguna resmi.',
      techs: ['Figma Prototyping', 'System Specs', 'Use Case Modeling', 'Activity Diagrams', 'User Guidelines'],
      stats: { sys: 92, cla: 95, spe: 90, cra: 94, rel: 92 },
    },
  ];

  const current = powerAbilities[selectedAbility];

  const filteredTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Section Header: Power profile // 04 abilities */}
        <div className="mb-14 sm:mb-20">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag mb-4">
              <span>02</span>
              <span className="text-white/20">/</span>
              <span>POWER PROFILE</span>
              <span className="text-white/30 text-[10px] ml-2">// 04 ABILITIES</span>
            </div>
          </Animate>

          <Animate variants={fadeUp} custom={1}>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-3xl">
              TACTICAL CAPABILITIES
              <br />
              <span className="text-signal-orange">&amp; TECH ARSENAL.</span>
            </h2>
          </Animate>

          <Animate variants={fadeUp} custom={2}>
            <p className="mt-5 text-sm sm:text-base text-white/60 font-sans max-w-2xl leading-relaxed">
              Kombinasi kemampuan rekayasa perangkat lunak, otomatisasi pengujian, dan eksekusi antarmuka yang terukur untuk membangun produk digital berstandar industri.
            </p>
          </Animate>
        </div>

        {/* Alter Signature Ability Selector & Tactical Scan HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Ability List (Alter PWR-01 .. PWR-04) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>POWER PROFILES</span>
              <span className="text-signal-orange">CLICK TO SCAN</span>
            </div>

            {powerAbilities.map((ability, idx) => {
              const isSelected = selectedAbility === idx;
              return (
                <button
                  key={ability.id}
                  onClick={() => setSelectedAbility(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#15181C] border-signal-orange shadow-[0_0_24px_rgba(255,90,31,0.2)]'
                      : 'bg-[#0E1013] border-white/10 hover:border-white/25 hover:bg-[#12151B]'
                  }`}
                >
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-signal-orange tracking-wider">
                      {ability.code}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                      isSelected
                        ? 'bg-signal-orange/20 text-signal-orange border border-signal-orange/40'
                        : 'bg-white/5 text-white/50 border border-white/10'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-signal-orange animate-pulse' : 'bg-emerald-400'}`} />
                      {ability.status}
                    </span>
                  </div>

                  <h3 className="font-alter uppercase text-xl font-bold text-white group-hover:text-signal-orange transition-colors">
                    {ability.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-white/50 line-clamp-2 font-sans">
                    {ability.summary}
                  </p>

                  {/* Active highlight line */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-signal-orange" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Tactical Scan HUD & Stats Matrix */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1013] border border-white/15 relative overflow-hidden shadow-2xl">
              {/* Tactical Corners */}
              <div className="tactical-corner-tl" />
              <div className="tactical-corner-tr" />
              <div className="tactical-corner-bl" />
              <div className="tactical-corner-br" />

              {/* HUD Header */}
              <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 mb-6">
                <span className="flex items-center gap-2 text-signal-orange">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="font-bold">SCAN / {current.code} LIVE</span>
                </span>
                <span className="text-white/40">SYSTEM READINESS: OPTIMAL</span>
              </div>

              {/* Ability Title & Summary */}
              <h4 className="font-alter uppercase text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.title}
              </h4>
              <p className="mt-3 text-sm text-white/70 leading-relaxed font-sans">
                {current.summary}
              </p>

              {/* Key Technologies Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {current.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#15181C] border border-white/10 text-xs font-mono text-white/80"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              {/* Alter Tactical Stats Readout (Sys, Cla, Spe, Cra, Rel) */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider mb-4">
                  // TELEMETRY &amp; METRIC MATRIX (MAX 100)
                </div>

                <div className="grid grid-cols-5 gap-2 sm:gap-3 text-center">
                  {[
                    { label: 'Sys', name: 'Architecture', val: current.stats.sys },
                    { label: 'Cla', name: 'Code Quality', val: current.stats.cla },
                    { label: 'Spe', name: 'Throughput', val: current.stats.spe },
                    { label: 'Cra', name: 'Execution', val: current.stats.cra },
                    { label: 'Rel', name: 'Reliability', val: current.stats.rel },
                  ].map((stat) => (
                    <div key={stat.label} className="p-2 sm:p-3 rounded-xl bg-[#15181C] border border-white/10">
                      <span className="block text-[11px] font-mono text-white/50 uppercase font-semibold">
                        {stat.label}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-signal-orange block my-1">
                        {stat.val.toString().padStart(3, '0')}
                      </span>
                      <span className="block text-[9px] text-white/40 truncate font-mono">
                        {stat.name}
                      </span>
                      {/* Metric bar */}
                      <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-signal-orange rounded-full transition-all duration-500"
                          style={{ width: `${stat.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Tech Stack Arsenal (100% of technologies preserved with filter tabs) */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="eyebrow-tag mb-2">COMPLETE ARSENAL</p>
              <h3 className="font-display text-3xl sm:text-4xl uppercase font-bold text-white tracking-tight">
                TECHNOLOGY &amp; TOOLING REGISTRY.
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-white/50 max-w-sm">
              Filter seluruh stack teknologi berdasarkan kategori fungsional implementasi.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {techCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  activeCategory === category
                    ? 'bg-signal-orange text-white border-signal-orange shadow-[0_0_12px_rgba(255,90,31,0.35)]'
                    : 'bg-[#0E1013] text-white/60 border-white/10 hover:text-white hover:border-white/25'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Technologies Grid */}
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/40 hover:bg-[#12151B] transition-all flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#15181C] border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:border-signal-orange/40 group-hover:scale-105 transition-all">
                  <TechIcon name={tech.name} className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-mono text-sm font-bold text-white group-hover:text-signal-orange transition-colors truncate">
                      {tech.name}
                    </h4>
                    <span className="text-[10px] font-mono text-white/40 uppercase shrink-0">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 mt-1 line-clamp-2 font-sans">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
};
