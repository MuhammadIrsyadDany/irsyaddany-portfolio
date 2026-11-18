import React from 'react';
import { Award, BookOpen, Briefcase, FileText, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Animate, StaggerGroup, fadeUp, fadeLeft, fadeRight, scaleIn } from './ScrollAnimations';

export const AboutSection: React.FC = () => {
  const waypoints = [
    { name: 'POLINEMA', sub: 'D4 Informatics', year: '2022' },
    { name: 'UTERO TECH', sub: 'Mobile Intern', year: '2025' },
    { name: 'VENDOR SAVVE', sub: 'Capstone E2E', year: '2026' },
    { name: 'INDEPENDENT', sub: 'Full-Stack Dev', year: 'ACTIVE' },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 border-t border-white/10 overflow-hidden w-full max-w-full bg-[#07080A]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Alter Section Header: Origin story // 001 */}
        <div className="mb-14 sm:mb-20">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag mb-4">
              <span>01</span>
              <span className="text-white/20">/</span>
              <span>ORIGIN STORY</span>
              <span className="text-white/30 text-[10px] ml-2">// DOSSIER 001</span>
            </div>
          </Animate>

          <Animate variants={fadeUp} custom={1}>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.92] max-w-4xl">
              BUILDING SCALABLE SYSTEMS
              <br />
              <span className="text-signal-orange">WITH THOUGHTFUL ENGINEERING.</span>
            </h2>
          </Animate>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Bold Quote & Principle */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 p-6 rounded-2xl bg-[#0E1013] border border-white/10 shadow-xl">
              <Animate variants={fadeLeft}>
                <div className="text-[11px] font-mono text-signal-orange uppercase tracking-wider mb-3">
                  // THE ENGINEERING RULE
                </div>
                <blockquote className="text-lg sm:text-xl font-medium tracking-tight text-white leading-snug">
                  "Empat tahun dalam rekayasa perangkat lunak mengajarkan satu prinsip: jika suatu sistem butuh berlembar-lembar instruksi untuk digunakan, arsitekturnya belum selesai."
                </blockquote>
              </Animate>

              <div className="my-5 h-px w-full bg-white/10" />

              <Animate variants={fadeUp} custom={1}>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  Saya bekerja dari fondasi awal: perancangan skema basis data ternormalisasi, arsitektur backend yang tangguh, hingga antarmuka pengguna yang presisi dan cepat dimengerti.
                </p>

                {/* Waypoint ticker */}
                <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-white/40 block text-[10px]">CURRENT ROLE</span>
                    <span className="text-white font-semibold">Web &amp; Mobile Dev</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px]">VERIFICATION</span>
                    <span className="text-signal-orange font-semibold">100% E2E Passed</span>
                  </div>
                </div>
              </Animate>
            </div>
          </div>

          {/* Right Column: Detailed Journey Narrative */}
          <StaggerGroup className="lg:col-span-7 space-y-6 text-sm sm:text-base text-white/70 leading-relaxed">
            <Animate variants={fadeRight} custom={0}>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <p>
                  Saya adalah lulusan <strong className="text-white font-semibold">D4 Teknik Informatika dari Politeknik Negeri Malang</strong> dengan raihan <strong className="text-signal-orange font-mono">IPK 3.62 / 4.00</strong> (Tingkat Cum Laude). Menyelesaikan total 151 SKS dengan rekam jejak konsisten pada rekayasa perangkat lunak web dan mobile.
                </p>
              </div>
            </Animate>

            <Animate variants={fadeRight} custom={1}>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <p>
                  Dalam perjalanan akademik dan praktik industri, saya terbiasa menerjemahkan kebutuhan operasional bisnis yang kompleks menjadi solusi digital yang modular, terukur, dan aman. Keahlian utama saya meliputi backend <strong className="text-white font-semibold">Laravel &amp; PHP</strong>, basis data <strong className="text-white font-semibold">MySQL</strong>, arsitektur <strong className="text-white font-semibold">Next.js &amp; Tailwind CSS</strong>, serta mobile development menggunakan <strong className="text-white font-semibold">Flutter</strong>.
                </p>
              </div>
            </Animate>

            <Animate variants={fadeRight} custom={2}>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <p>
                  Karya capstone utama saya, <strong className="text-white font-semibold">Vendor Savve System</strong>, adalah sistem informasi manajemen pergudangan dan inventaris barang sewa berskala enterprise. Sistem ini divalidasi penuh melalui <strong className="text-white font-semibold">60 skenario End-to-End Automated Testing (Cypress)</strong> dengan tingkat keberhasilan 100% di seluruh 28 spesifikasi fungsional, dan telah disahkan penggunaannya secara resmi oleh pihak manajemen.
                </p>
              </div>
            </Animate>

            <Animate variants={fadeRight} custom={3}>
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <p>
                  Pengalaman magang industri selama 6 bulan di <strong className="text-white font-semibold">PT Utero Kreatif Indonesia (Utero Technology)</strong> sebagai Front-End Mobile Developer memperkuat disiplin kerja saya dalam implementasi 10+ fitur utama aplikasi mobile WORECA, kolaborasi tim profesional, dan pembuatan dokumentasi teknis standar industri.
                </p>
              </div>
            </Animate>
          </StaggerGroup>
        </div>

        {/* Alter Waypoint Progression Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10">
          <div className="mb-4 text-xs font-mono text-signal-orange uppercase tracking-wider flex items-center gap-2">
            <span>// TIMELINE WAYPOINTS</span>
            <span className="text-white/20">——</span>
            <span className="text-white/40">CAIRO · AMSTERDAM · COPENHAGEN STYLE</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {waypoints.map((wp, i) => (
              <div
                key={wp.name}
                className="p-4 rounded-xl bg-[#0E1013] border border-white/10 flex flex-col justify-between group hover:border-signal-orange/50 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-2">
                  <span>0{i + 1}</span>
                  <span className="text-signal-orange font-semibold">{wp.year}</span>
                </div>
                <div>
                  <div className="font-alter uppercase font-bold text-base text-white group-hover:text-signal-orange transition-colors">
                    {wp.name}
                  </div>
                  <div className="text-xs text-white/50 font-sans mt-0.5">{wp.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alter Milestones Cards: 01, 02, 03 */}
        <div className="mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="eyebrow-tag mb-2">HIGHLIGHTS</p>
              <h3 className="font-display text-3xl sm:text-4xl uppercase font-bold text-white tracking-tight">
                KEY PILLARS &amp; MILESTONES.
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-white/50 max-w-xs">
              Tiga pilar pencapaian yang merefleksikan kompetensi akademik, ketelitian pengujian, dan pengalaman industri.
            </p>
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

            {/* 02: Final Project / Capstone */}
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

            {/* 03: Industry Internship */}
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
