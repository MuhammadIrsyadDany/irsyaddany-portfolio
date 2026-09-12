import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { experiences } from '../data/experience';
import { Animate, fadeUp, blurIn, fadeLeft } from './ScrollAnimations';

type FilterType = 'All' | 'Internship' | 'Leadership' | 'Volunteer';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');

  const filters: FilterType[] = [
    'All',
    'Internship',
    'Leadership',
    'Volunteer',
  ];

  const filtered =
    filter === 'All'
      ? experiences
      : experiences.filter((experience) => experience.type === filter);

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 border-t border-border-faint"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ============================================================
            SECTION HEADER
            ============================================================ */}
        <div className="space-y-3 mb-10 sm:mb-12">

          {/* Eyebrow */}
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag">
              <span>04</span>
              <span className="text-border-soft">/</span>
              <span>The Journey So Far</span>
            </div>
          </Animate>

          {/* Heading */}
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
              Where I've
              <br className="hidden sm:inline" />
              <span className="text-violet-light"> contributed.</span>
            </h2>
          </Animate>

          {/* Description */}
          <Animate variants={fadeUp} custom={2}>
            <p
              className="
                text-sm sm:text-base
                text-ink-muted
                max-w-2xl
                leading-reading
              "
            >
              Perjalanan magang industri, pengalaman organisasi, dan berbagai
              kontribusi yang membentuk cara saya bekerja, berkomunikasi, dan
              menyelesaikan masalah.
            </p>
          </Animate>

        </div>

        {/* ============================================================
            FILTER
            ============================================================ */}
        <div
          className="
            flex flex-wrap items-center
            gap-1.5
            mb-10 sm:mb-12
            pb-5
            border-b border-border-faint
          "
        >
          {filters.map((tab) => {
            const isActive = filter === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`
                  px-3.5 py-1.5
                  rounded-full
                  text-2xs sm:text-xs
                  font-semibold
                  transition-all duration-200
                  border
                  ${isActive
                    ? `
                        bg-violet-dim
                        border-violet-light/35
                        text-violet-light
                      `
                    : `
                        bg-transparent
                        border-transparent
                        text-ink-muted
                        hover:text-ink-primary
                        hover:border-border-faint
                        hover:bg-bg-surface/40
                      `
                  }
                `}
              >
                {tab === 'All' ? 'Semua Riwayat' : tab}
              </button>
            );
          })}
        </div>

        {/* ============================================================
            EXPERIENCE TIMELINE
            ============================================================ */}
        <div className="relative">

          {/* Vertical Timeline Line */}
          <div
            className="
              absolute
              left-[7px] sm:left-[9px]
              top-3 bottom-3
              w-px
              bg-border-faint
            "
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">

            {filtered.map((exp, index) => (
              <Animate
                key={exp.id}
                variants={fadeLeft}
                custom={index}
                as="article"
                className="
                  relative
                  pl-8 sm:pl-12
                  group
                "
              >

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    w-[15px] h-[15px]
                    sm:w-[19px] sm:h-[19px]
                    rounded-full
                    bg-bg-base
                    border
                    border-border-soft
                    flex items-center justify-center
                    z-10
                    transition-all duration-300
                    group-hover:border-violet-light/60
                  "
                >
                  <span
                    className="
                      w-1.5 h-1.5
                      sm:w-2 sm:h-2
                      rounded-full
                      bg-violet-light
                      opacity-60
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />
                </div>

                {/* Experience Content */}
                <div
                  className="
                    relative
                    rounded-2xl
                    border border-border-faint
                    bg-bg-surface/20
                    p-5 sm:p-7
                    transition-all duration-300
                    hover:border-border-soft
                    hover:bg-bg-surface/35
                  "
                >

                  {/* Top Row */}
                  <div
                    className="
                      flex flex-col
                      lg:flex-row
                      lg:items-start
                      lg:justify-between
                      gap-4
                    "
                  >

                    {/* Main Identity */}
                    <div className="min-w-0">

                      {/* Index + Type */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">

                        <span
                          className="
                            text-2xs
                            uppercase
                            tracking-[0.16em]
                            font-semibold
                            text-violet-light
                            tabular-nums
                          "
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span className="w-1 h-1 rounded-full bg-border-soft" />

                        <span
                          className="
                            text-2xs
                            uppercase
                            tracking-[0.14em]
                            font-medium
                            text-ink-muted
                          "
                        >
                          {exp.type}
                        </span>
                      </div>

                      {/* Role */}
                      <h3
                        className="
                          text-xl sm:text-2xl
                          font-black
                          tracking-[-0.025em]
                          text-ink-primary
                          group-hover:text-violet-light
                          transition-colors duration-200
                        "
                      >
                        {exp.role}
                      </h3>

                      {/* Organization */}
                      <p
                        className="
                          mt-1
                          text-sm sm:text-base
                          font-medium
                          text-violet-light
                        "
                      >
                        {exp.organization}
                      </p>

                    </div>

                    {/* Meta */}
                    <div
                      className="
                        shrink-0
                        flex flex-col
                        lg:items-end
                        gap-2
                        text-xs
                        text-ink-muted
                      "
                    >

                      {/* Period */}
                      <div
                        className="
                          flex items-center gap-1.5
                          tabular-nums
                        "
                      >
                        <Calendar className="w-3.5 h-3.5 text-violet-light" />
                        <span>{exp.period.replace('•', '—')}</span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-violet-light" />
                        <span>{exp.location}</span>
                      </div>

                    </div>

                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-border-faint" />

                  {/* Highlights */}
                  <div className="space-y-3">

                    {exp.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="
                          flex items-start
                          gap-2.5
                          text-xs sm:text-sm
                          text-ink-muted
                          leading-reading
                        "
                      >
                        <CheckCircle2
                          className="
                            w-4 h-4
                            mt-0.5
                            shrink-0
                            text-violet-light
                          "
                        />

                        <span>{highlight}</span>
                      </div>
                    ))}

                  </div>

                  {/* Bottom Accent */}
                  <div
                    className="
                      mt-5
                      pt-4
                      border-t border-border-faint
                      flex items-center justify-between
                    "
                  >
                    <span
                      className="
                        text-2xs
                        uppercase
                        tracking-[0.14em]
                        text-ink-faint
                      "
                    >
                      Experience {String(index + 1).padStart(2, '0')}
                    </span>

                    <ArrowUpRight
                      className="
                        w-4 h-4
                        text-ink-faint
                        group-hover:text-violet-light
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        transition-all duration-200
                      "
                    />
                  </div>

                </div>
              </Animate>
            ))}

          </div>

        </div>

        {/* ============================================================
            EMPTY STATE
            ============================================================ */}
        {filtered.length === 0 && (
          <div
            className="
              py-14
              text-center
              border border-border-faint
              rounded-2xl
              bg-bg-surface/20
            "
          >
            <p className="text-sm text-ink-muted">
              Belum ada pengalaman pada kategori ini.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};