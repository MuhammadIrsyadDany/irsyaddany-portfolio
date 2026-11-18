import React from 'react';
import { Award, BookOpen, Briefcase, FileText, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Animate, StaggerGroup, fadeUp, scaleIn } from './ScrollAnimations';

export const AboutSection: React.FC = () => {
  const waypoints = [
    { city: 'POLINEMA', role: 'D4 Informatics', year: '2022' },
    { city: 'UTERO TECH', role: 'Mobile Intern', year: '2025' },
    { city: 'VENDOR SAVVE', role: 'Capstone E2E', year: '2026' },
    { city: 'INDEPENDENT', role: 'Full-Stack Dev', year: 'ACTIVE' },
  ];

  return (
    <section
      id="about"
      className="py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Header: // Origin story 000% */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="text-signal-orange font-bold">//</span>
            <span className="text-white uppercase font-bold tracking-wider">Origin story</span>
          </div>
          <span className="text-white/40">DOSSIER 001 // 100% INTEGRITY</span>
        </div>

        {/* Alter Giant Statement Typography */}
        <div className="max-w-5xl">
          <Animate variants={fadeUp}>
            <blockquote className="font-sans text-[clamp(1.75rem,3.8vw,3.75rem)] font-medium tracking-tight text-white leading-[1.12]">
              Empat tahun dalam rekayasa perangkat lunak mengajarkan satu prinsip: jika suatu sistem butuh berlembar-lembar instruksi untuk digunakan, <span className="text-signal-orange font-semibold">arsitekturnya belum selesai.</span>
            </blockquote>
          </Animate>

          <Animate variants={fadeUp} custom={1}>
            <p className="mt-8 text-base sm:text-xl text-white/70 font-sans max-w-3xl leading-relaxed">
              Saya bekerja membangun produk digital dengan standar spesialis: satu sistem, arsitektur bersih, bebas dependensi membengkak, dari skema basis data awal hingga kode yang teruji dan siap produksi.
            </p>
          </Animate>
        </div>

        {/* Alter Stops / Waypoints Timeline */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-signal-orange uppercase tracking-wider mb-6">
            <span>// TRAJECTORY STOPS</span>
            <span className="text-white/20">——</span>
            <span className="text-white/40">MALANG &amp; GRESIK REGISTRY</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {waypoints.map((wp, idx) => (
              <div
                key={wp.city}
                className="p-5 rounded-2xl bg-[#0E1013] border border-white/10 hover:border-signal-orange/50 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-orange" />
                    <span>STOP 0{idx + 1}</span>
                  </span>
                  <span className="text-signal-orange font-bold">{wp.year}</span>
                </div>
                <div>
                  <h4 className="font-alter uppercase text-lg sm:text-xl font-extrabold text-white group-hover:text-signal-orange transition-colors">
                    {wp.city}
                  </h4>
                  <p className="text-xs text-white/50 font-sans mt-0.5">{wp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alter 3 Milestone Cards */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between text-xs font-mono text-white/40 uppercase tracking-wider mb-6">
            <span>// KEY PILLARS &amp; VALIDATIONS</span>
            <span className="text-signal-orange">03 RECORDS</span>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 01: Education */}
            <Animate variants={scaleIn} custom={0}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1013] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-orange/40 hover:bg-[#12151B] h-full flex flex-col justify-between">
                <span
                  className="absolute right-4 top-2 text-7xl font-display font-extrabold text-white/[0.03] select-none pointer-events-none group-hover:text-signal-orange/[0.08] transition-colors"
                  aria-hidden="true"
                >
                  01
                </span>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#15181C] flex items-center justify-center text-signal-orange group-hover:scale-105 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-white/50">2022 — 2026</span>
                  </div>

                  <p className="text-[11px] font-mono uppercase tracking-wider text-signal-orange mb-1">
                    PENDIDIKAN RESMI
                  </p>
                  <h4 className="font-alter uppercase text-xl font-bold text-white tracking-tight">
                    D4 Teknik Informatika
                  </h4>
                  <p className="text-sm text-white/60 mt-1">Politeknik Negeri Malang</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                        INDEKS PRESTASI
                      </p>
                      <p className="text-sm font-medium text-white mt-0.5">IPK Kumulatif</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-white/40 block">Skala 4.00</span>
                      <p className="text-2xl font-mono font-bold text-signal-orange">3.62</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <a
                      href="/documents/Transkrip_Nilai_Muhammad_Irsyad_Dany.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-signal-orange transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-signal-orange" />
                      <span>Transkrip Nilai Resmi</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Animate>

            {/* 02: Capstone */}
            <Animate variants={scaleIn} custom={1}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1013] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-orange/40 hover:bg-[#12151B] h-full flex flex-col justify-between">
                <span
                  className="absolute right-4 top-2 text-7xl font-display font-extrabold text-white/[0.03] select-none pointer-events-none group-hover:text-signal-orange/[0.08] transition-colors"
                  aria-hidden="true"
                >
                  02
                </span>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#15181C] flex items-center justify-center text-signal-orange group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-white/50">Tugas Akhir</span>
                  </div>

                  <p className="text-[11px] font-mono uppercase tracking-wider text-signal-orange mb-1">
                    CAPSTONE THESIS
                  </p>
                  <h4 className="font-alter uppercase text-xl font-bold text-white tracking-tight">
                    Vendor Savve System
                  </h4>
                  <p className="text-sm text-white/60 mt-1">Inventory &amp; Storage Logistics</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                        E2E CYPRESS TESTING
                      </p>
                      <p className="text-sm font-medium text-white mt-0.5">60 Skenario Uji</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-white/40 block">Pass Rate</span>
                      <p className="text-2xl font-mono font-bold text-signal-orange">100%</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <a
                      href="#recognition"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-signal-orange transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-signal-orange" />
                      <span>Validasi Capstone Cypress</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Animate>

            {/* 03: Internship */}
            <Animate variants={scaleIn} custom={2}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1013] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-orange/40 hover:bg-[#12151B] h-full flex flex-col justify-between">
                <span
                  className="absolute right-4 top-2 text-7xl font-display font-extrabold text-white/[0.03] select-none pointer-events-none group-hover:text-signal-orange/[0.08] transition-colors"
                  aria-hidden="true"
                >
                  03
                </span>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-[#15181C] flex items-center justify-center text-signal-orange group-hover:scale-105 transition-transform">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-white/50">Internship</span>
                  </div>

                  <p className="text-[11px] font-mono uppercase tracking-wider text-signal-orange mb-1">
                    MAGANG INDUSTRI
                  </p>
                  <h4 className="font-alter uppercase text-xl font-bold text-white tracking-tight">
                    Front-End Mobile Dev
                  </h4>
                  <p className="text-sm text-white/60 mt-1">PT Utero Kreatif Indonesia</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                        IMPLEMENTASI FITUR
                      </p>
                      <p className="text-sm font-medium text-white mt-0.5">WORECA Mobile App</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-white/40 block">Screens &amp; Flows</span>
                      <p className="text-2xl font-mono font-bold text-signal-orange">10+ Fitur</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <a
                      href="/documents/certificates/sertifikat-magang.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-signal-orange transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-signal-orange" />
                      <span>Sertifikat Magang Resmi</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Animate>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
};
