import React from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';
import { Animate, StaggerGroup, AnimatedLine, fadeUp, fadeLeft, fadeRight, scaleIn, blurIn } from './ScrollAnimations';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 border-t border-border-faint"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag mb-5">
              <span>01</span>
              <span className="text-border-soft">/</span>
              <span>About Me</span>
            </div>
          </Animate>

          <Animate variants={blurIn} custom={1}>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.04em] leading-[0.95] text-ink-primary max-w-3xl">
              Building useful things
              <br className="hidden sm:inline" />
              <span className="text-violet-light"> with thoughtful engineering.</span>
            </h2>
          </Animate>
        </div>

        {/* Main Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

          {/* Statement */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Animate variants={fadeLeft}>
                <p className="text-xl sm:text-2xl font-medium tracking-tight text-ink-primary leading-snug max-w-md">
                  "Fokus utama saya adalah membangun aplikasi web yang
                  fungsional, terstruktur, dan tervalidasi secara nyata."
                </p>
              </Animate>

              <AnimatedLine className="mt-6 h-px w-14 bg-violet-base" />

              <Animate variants={fadeUp} custom={1}>
                <p className="mt-6 text-sm sm:text-base text-ink-muted leading-reading max-w-md">
                  Saya menikmati proses mengubah kebutuhan yang kompleks
                  menjadi sistem yang sederhana, terukur, dan mudah digunakan.
                </p>
              </Animate>
            </div>
          </div>

          {/* Narrative */}
          <StaggerGroup className="lg:col-span-7 space-y-6 text-sm sm:text-base text-ink-muted leading-reading">

            <Animate variants={fadeRight} custom={0}>
              <p>
                Saya adalah fresh graduate{' '}
                <strong className="text-ink-primary font-semibold">
                  D4 Teknik Informatika dari Politeknik Negeri Malang
                </strong>{' '}
                dengan capaian IPK{' '}
                <strong className="text-violet-light font-semibold tabular-nums">
                  3.62 / 4.00
                </strong>
                .
              </p>
            </Animate>

            <Animate variants={fadeRight} custom={1}>
              <p>
                Selama masa studi dan mengerjakan berbagai proyek, saya terbiasa
                menerjemahkan kebutuhan operasional menjadi fitur perangkat lunak
                yang praktis. Saya memiliki ketertarikan pada pengembangan web,
                logika backend, perancangan basis data, serta implementasi
                antarmuka yang konsisten dan mudah digunakan.
              </p>
            </Animate>

            <Animate variants={fadeRight} custom={2}>
              <p>
                Salah satu pengalaman utama saya adalah mengembangkan{' '}
                <strong className="text-ink-primary">
                  Vendor Savve
                </strong>
                , sistem informasi pergudangan berbasis web sebagai bagian dari
                tugas akhir. Sistem tersebut menggunakan kontrol akses
                multi-peran dan alur transaksi yang terintegrasi.
              </p>
            </Animate>

            <Animate variants={fadeRight} custom={3}>
              <p>
                Selain proyek akademik, pengalaman magang di{' '}
                <strong className="text-ink-primary">
                  PT Utero Kreatif Indonesia (Utero Technology)
                </strong>{' '}
                memberi saya pengalaman bekerja dalam lingkungan pengembangan
                perangkat lunak yang nyata. Pengalaman tersebut memperkuat
                kemampuan saya untuk beradaptasi, berkomunikasi, dan bekerja
                bersama tim.
              </p>
            </Animate>

          </StaggerGroup>
        </div>

        {/* Milestones */}
<div className="mt-20 sm:mt-28 pt-8 border-t border-border-faint">

  {/* Milestones Header */}
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
    <Animate variants={fadeUp}>
      <div>
        <p className="text-2xs uppercase tracking-[0.18em] font-semibold text-violet-light">
          Highlights
        </p>

        <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.035em] text-ink-primary">
          A few milestones.
        </h3>
      </div>
    </Animate>

    <Animate variants={fadeUp} custom={1}>
      <p className="text-xs sm:text-sm text-ink-muted max-w-xs leading-reading">
        Beberapa pengalaman yang membentuk cara saya berpikir dan membangun
        sebuah produk digital.
      </p>
    </Animate>
  </div>

  {/* Milestone Cards */}
  <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">

    {/* Education */}
    <Animate variants={scaleIn} custom={0}>
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-border-faint
        bg-bg-surface/30
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-light/30
        hover:bg-bg-surface/60
      "
    >
      {/* Background Number */}
      <span
        className="
          absolute -right-3 -top-7
          text-[7rem]
          font-black
          leading-none
          tracking-[-0.08em]
          text-ink-primary/[0.025]
          select-none
          pointer-events-none
          transition-colors duration-300
          group-hover:text-violet-light/[0.05]
        "
      >
        01
      </span>

      {/* Top */}
      <div className="relative flex items-center justify-between">
        <div
          className="
            w-10 h-10
            rounded-xl
            border border-violet-light/15
            bg-violet-dim
            flex items-center justify-center
            text-violet-light
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          <BookOpen className="w-[18px] h-[18px]" />
        </div>

        <span className="text-2xs font-medium text-ink-muted tabular-nums">
          2022 — 2026
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-10">
        <p className="text-2xs uppercase tracking-[0.16em] font-semibold text-violet-light">
          Pendidikan
        </p>

        <h4 className="mt-2 text-lg font-bold tracking-tight text-ink-primary">
          D4 Teknik Informatika
        </h4>

        <p className="mt-1.5 text-sm text-ink-muted">
          Politeknik Negeri Malang
        </p>

        {/* Bottom Highlight */}
        <div className="mt-7 pt-4 border-t border-border-faint flex items-end justify-between gap-4">
          <div>
            <p className="text-2xs uppercase tracking-wider text-ink-muted">
              Indeks Prestasi
            </p>

            <p className="mt-1 text-sm font-semibold text-ink-primary">
              IPK Kumulatif
            </p>
          </div>

          <div className="text-right">
            <span className="text-2xs text-ink-muted block font-mono">Skala 4.00</span>
            <p className="text-2xl font-black tracking-tight text-violet-light tabular-nums">
              3.62
            </p>
          </div>
        </div>
      </div>
    </div>
    </Animate>


    {/* Thesis */}
    <Animate variants={scaleIn} custom={1}>
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-border-faint
        bg-bg-surface/30
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-light/30
        hover:bg-bg-surface/60
      "
    >
      {/* Background Number */}
      <span
        className="
          absolute -right-3 -top-7
          text-[7rem]
          font-black
          leading-none
          tracking-[-0.08em]
          text-ink-primary/[0.025]
          select-none
          pointer-events-none
          transition-colors duration-300
          group-hover:text-violet-light/[0.05]
        "
      >
        02
      </span>

      {/* Top */}
      <div className="relative flex items-center justify-between">
        <div
          className="
            w-10 h-10
            rounded-xl
            border border-violet-light/15
            bg-violet-dim
            flex items-center justify-center
            text-violet-light
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          <Award className="w-[18px] h-[18px]" />
        </div>

        <span className="text-2xs font-medium text-ink-muted">
          Final Project
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-10">
        <p className="text-2xs uppercase tracking-[0.16em] font-semibold text-violet-light">
          Tugas Akhir
        </p>

        <h4 className="mt-2 text-lg font-bold tracking-tight text-ink-primary">
          Vendor Savve System
        </h4>

        <p className="mt-1.5 text-sm text-ink-muted">
          Inventory &amp; Warehouse Management
        </p>

        {/* Bottom Highlight */}
        <div className="mt-7 pt-4 border-t border-border-faint flex items-end justify-between gap-4">
          <div>
            <p className="text-2xs uppercase tracking-wider text-ink-muted">
              End-to-End Testing
            </p>

            <p className="mt-1 text-sm font-semibold text-ink-primary">
              Fully Passed
            </p>
          </div>

          <p className="text-2xl font-black tracking-tight text-violet-light tabular-nums">
            100%
          </p>
        </div>
      </div>
    </div>
    </Animate>


    {/* Internship */}
    <Animate variants={scaleIn} custom={2} as="article">
    <div
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-border-faint
        bg-bg-surface/30
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-light/30
        hover:bg-bg-surface/60
      "
    >
      {/* Background Number */}
      <span
        className="
          absolute -right-3 -top-7
          text-[7rem]
          font-black
          leading-none
          tracking-[-0.08em]
          text-ink-primary/[0.025]
          select-none
          pointer-events-none
          transition-colors duration-300
          group-hover:text-violet-light/[0.05]
        "
      >
        03
      </span>

      {/* Top */}
      <div className="relative flex items-center justify-between">
        <div
          className="
            w-10 h-10
            rounded-xl
            border border-violet-light/15
            bg-violet-dim
            flex items-center justify-center
            text-violet-light
            transition-transform duration-300
            group-hover:scale-105
          "
        >
          <Briefcase className="w-[18px] h-[18px]" />
        </div>

        <span className="text-2xs font-medium text-ink-muted">
          Internship
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-10">
        <p className="text-2xs uppercase tracking-[0.16em] font-semibold text-violet-light">
          Pengalaman
        </p>

        <h4 className="mt-2 text-lg font-bold tracking-tight text-ink-primary">
          Front-End Mobile Developer
        </h4>

        <p className="mt-1.5 text-sm text-ink-muted">
          PT Utero Kreatif Indonesia
        </p>

        {/* Bottom Highlight */}
        <div className="mt-7 pt-4 border-t border-border-faint flex items-end justify-between gap-4">
          <div>
            <p className="text-2xs uppercase tracking-wider text-ink-muted">
              Implementasi Fitur
            </p>

            <p className="mt-1 text-sm font-semibold text-ink-primary">
              WORECA UI
            </p>
          </div>

          <p className="text-2xl font-black tracking-tight text-violet-light tabular-nums">
            10+ <span className="text-xs font-medium text-ink-muted tracking-normal">Fitur</span>
          </p>
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