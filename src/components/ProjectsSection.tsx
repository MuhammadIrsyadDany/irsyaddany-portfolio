import React, { useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Layers,
} from 'lucide-react';

import { projects } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types/portfolio';
import { Animate, fadeUp, blurIn, scaleIn } from './ScrollAnimations';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const flagship = projects[0];
  const secondaryProjects = projects.slice(1);

  /* ============================================================
     IMAGE ERROR
     ============================================================ */

  const handleImageError = (thumbnail: string) => {
    setImgErrors((prev) => ({
      ...prev,
      [thumbnail]: true,
    }));
  };

  /* ============================================================
     CAROUSEL
     ============================================================ */

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const firstCard =
      container.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || '20');

    const scrollAmount = firstCard.offsetWidth + gap;

    container.scrollBy({
      left: direction === 'next'
        ? scrollAmount
        : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const firstCard =
      container.firstElementChild as HTMLElement | null;

    if (!firstCard) return;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || '20');

    const index = Math.round(
      container.scrollLeft /
      (firstCard.offsetWidth + gap)
    );

    const maxIndex = Math.max(
      secondaryProjects.length - 1,
      0
    );

    setActiveSlide(
      Math.min(Math.max(index, 0), maxIndex)
    );
  };

  /* ============================================================
     RENDER
     ============================================================ */

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 border-t border-border-faint"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ======================================================
            SECTION HEADER
            ====================================================== */}

        <div className="space-y-4 mb-12 sm:mb-14">

          {/* Eyebrow */}
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag">
              <span>03</span>
              <span className="text-border-soft">/</span>
              <span>Selected Work</span>
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
                max-w-3xl
              "
            >
              Things I've
              <span className="text-violet-light">
                {' '}built.
              </span>
            </h2>
          </Animate>

          {/* Description */}
          <Animate variants={fadeUp} custom={2}>
            <p
              className="
                text-sm sm:text-base
                text-ink-muted
                max-w-xl
                leading-reading
              "
            >
              Beberapa sistem dan aplikasi yang saya kembangkan
              berdasarkan kebutuhan nyata, dari proyek akademik
              hingga pengalaman profesional.
            </p>
          </Animate>

        </div>


        {/* ======================================================
            FLAGSHIP PROJECT — VENDOR SAVVE
            ====================================================== */}

        <Animate variants={scaleIn}>
        <article
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border border-border-soft
            bg-bg-surface/30
            mb-16 sm:mb-20
            transition-all duration-300
            hover:border-violet-light/30
          "
        >

          <div
            className="
              relative z-10
              grid
              grid-cols-1
              lg:grid-cols-12
            "
          >

            {/* ==================================================
                PROJECT CONTENT
                ================================================== */}

            <div
              className="
                lg:col-span-5
                p-7 sm:p-9 lg:p-11
                flex flex-col
                justify-between
              "
            >

              <div>

                {/* Meta */}
                <div
                  className="
                    flex flex-wrap
                    items-center
                    gap-x-3 gap-y-2
                    mb-7
                  "
                >
                  <span
                    className="
                      text-2xs
                      uppercase
                      tracking-[0.16em]
                      font-semibold
                      text-violet-light
                    "
                  >
                    01 / Final Project
                  </span>

                  <span
                    className="
                      w-1 h-1
                      rounded-full
                      bg-border-soft
                    "
                  />

                  <span
                    className="
                      text-2xs
                      text-ink-muted
                      tabular-nums
                    "
                  >
                    Jan — Jun 2026
                  </span>
                </div>


                {/* Title */}
                <div>

                  <h3
                    className="
                      text-2xl sm:text-3xl
                      font-black
                      tracking-[-0.035em]
                      text-ink-primary
                    "
                  >
                    {flagship.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm sm:text-base
                      font-medium
                      text-violet-light
                      leading-snug
                      max-w-md
                    "
                  >
                    Item Storage &amp; Inventory
                    Management Information System
                  </p>

                </div>


                {/* Description */}
                <p
                  className="
                    mt-5
                    text-sm
                    text-ink-muted
                    leading-reading
                    max-w-lg
                  "
                >
                  Sistem manajemen pergudangan dan logistik
                  berbasis web untuk mengelola inventaris sewa
                  vendor, alur pengambilan barang, pelaporan,
                  serta kontrol akses multi-peran Admin &amp; Kasir.
                </p>


                {/* ==================================================
                    METRICS
                    ================================================== */}

                <div
                  className="
                    grid grid-cols-3
                    gap-3
                    mt-7
                    pt-5
                    border-t border-border-faint
                  "
                >

                  <div>
                    <p
                      className="
                        text-lg sm:text-xl
                        font-black
                        text-ink-primary
                        tabular-nums
                      "
                    >
                      60
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-2xs
                        text-ink-muted
                      "
                    >
                      E2E Scenarios
                    </p>
                  </div>


                  <div>
                    <p
                      className="
                        text-lg sm:text-xl
                        font-black
                        text-ink-primary
                        tabular-nums
                      "
                    >
                      28
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-2xs
                        text-ink-muted
                      "
                    >
                      Functional Specs
                    </p>
                  </div>


                  <div>
                    <p
                      className="
                        text-lg sm:text-xl
                        font-black
                        text-violet-light
                        tabular-nums
                      "
                    >
                      100%
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-2xs
                        text-ink-muted
                      "
                    >
                      Test Passed
                    </p>
                  </div>

                </div>


                {/* ==================================================
                    TECH STACK
                    ================================================== */}

                <div
                  className="
                    flex flex-wrap
                    gap-1.5
                    mt-6
                  "
                >
                  {flagship.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="tech-chip tech-chip-violet"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>


              {/* ==================================================
                  CTA
                  ================================================== */}

              <div className="mt-8">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedProject(flagship)
                  }
                  className="
                    btn-primary
                    group/btn
                    text-xs sm:text-sm
                  "
                >
                  <span>Lihat Studi Kasus</span>

                  <ArrowUpRight
                    className="
                      w-4 h-4
                      text-violet-pale
                      transition-transform duration-200
                      group-hover/btn:translate-x-0.5
                      group-hover/btn:-translate-y-0.5
                    "
                  />
                </button>

              </div>

            </div>


            {/* ==================================================
                FLAGSHIP SCREENSHOT
                ================================================== */}

            <div
              className="
                lg:col-span-7
                p-3 sm:p-4 lg:p-5
                flex items-center justify-center
              "
            >

              <div
                onClick={() =>
                  setSelectedProject(flagship)
                }
                className="
                  relative
                  w-full
                  aspect-[16/10]
                  rounded-2xl
                  overflow-hidden
                  bg-bg-overlay
                  border border-border-subtle
                  cursor-pointer
                  bg-grid-fine
                  flex items-center justify-center
                  p-2 sm:p-3.5
                "
              >

                {!imgErrors[flagship.thumbnail] ? (

                  <img
                    src={flagship.thumbnail}
                    alt={flagship.title}
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      handleImageError(flagship.thumbnail)
                    }
                    className="
                      w-full h-full
                      object-contain object-center
                      rounded-xl
                      transition-transform duration-500
                      group-hover:scale-[1.015]
                    "
                  />

                ) : (

                  <div
                    className="
                      w-full h-full
                      flex flex-col
                      items-center
                      justify-center
                      p-6
                      text-center
                    "
                  >

                    <div
                      className="
                        w-12 h-12
                        rounded-xl
                        bg-violet-dim
                        border border-violet-light/30
                        flex items-center
                        justify-center
                        text-violet-light
                      "
                    >
                      <Layers className="w-6 h-6" />
                    </div>

                    <p
                      className="
                        mt-4
                        text-sm
                        font-bold
                        text-ink-primary
                      "
                    >
                      {flagship.fullTitle}
                    </p>

                    <p
                      className="
                        mt-1
                        text-2xs
                        text-ink-muted
                      "
                    >
                      Dashboard &amp; Transaction Flow
                    </p>

                  </div>

                )}


                {/* Image Hover Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/35
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    flex items-center
                    justify-center
                  "
                >
                  <span
                    className="
                      px-4 py-2
                      rounded-full
                      bg-bg-base/90
                      border border-violet-light/40
                      text-xs
                      font-semibold
                      text-ink-primary
                      flex items-center
                      gap-1.5
                    "
                  >
                    Buka Studi Kasus

                    <ArrowUpRight
                      className="
                        w-3.5 h-3.5
                        text-violet-light
                      "
                    />
                  </span>
                </div>

              </div>

            </div>

          </div>

        </article>
        </Animate>


        {/* ======================================================
            OTHER PROJECTS HEADER
            ====================================================== */}

        <Animate variants={fadeUp}>
        <div
          className="
            flex flex-col
            sm:flex-row
            sm:items-end
            sm:justify-between
            gap-5
            mb-7
          "
        >

          <div>

            <p
              className="
                text-2xs
                uppercase
                tracking-[0.18em]
                font-semibold
                text-violet-light
              "
            >
              More Work
            </p>

            <h3
              className="
                mt-2
                text-2xl sm:text-3xl
                font-black
                tracking-[-0.035em]
                text-ink-primary
              "
            >
              Other projects.
            </h3>

          </div>


          {/* Carousel Controls */}
          {secondaryProjects.length > 1 && (

            <div className="flex items-center gap-2">

              <span
                className="
                  mr-3
                  text-2xs
                  text-ink-muted
                  tabular-nums
                "
              >
                {String(activeSlide + 1).padStart(2, '0')}
                {' / '}
                {String(secondaryProjects.length).padStart(2, '0')}
              </span>


              <button
                type="button"
                onClick={() => scrollCarousel('prev')}
                aria-label="Project sebelumnya"
                className="
                  w-9 h-9
                  rounded-full
                  border border-border-faint
                  bg-bg-surface/40
                  flex items-center
                  justify-center
                  text-ink-muted
                  transition-all duration-200
                  hover:border-violet-light/30
                  hover:text-violet-light
                  hover:bg-violet-dim
                "
              >
                <ArrowLeft className="w-4 h-4" />
              </button>


              <button
                type="button"
                onClick={() => scrollCarousel('next')}
                aria-label="Project berikutnya"
                className="
                  w-9 h-9
                  rounded-full
                  border border-border-faint
                  bg-bg-surface/40
                  flex items-center
                  justify-center
                  text-ink-muted
                  transition-all duration-200
                  hover:border-violet-light/30
                  hover:text-violet-light
                  hover:bg-violet-dim
                "
              >
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          )}

        </div>
        </Animate>


        {/* ======================================================
            HORIZONTAL PROJECT CAROUSEL
            ====================================================== */}

        <Animate variants={fadeUp} custom={1}>
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="
            flex
            gap-5
            overflow-x-auto
            snap-x
            snap-mandatory
            scroll-smooth
            pb-5
            -mx-4
            px-4
            sm:mx-0
            sm:px-0
            scrollbar-none
            cursor-grab
            active:cursor-grabbing
          "
        >

          {secondaryProjects.map((project, idx) => {

            const indexStr = String(idx + 2).padStart(2, '0');

            return (

              <article
                key={project.id}
                onClick={() =>
                  setSelectedProject(project)
                }
                className="
                  group
                  relative
                  shrink-0
                  w-[88%]
                  sm:w-[60%]
                  lg:w-[460px]
                  snap-start
                  rounded-2xl
                  border border-border-faint
                  bg-bg-surface/30
                  overflow-hidden
                  cursor-pointer
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-light/30
                  hover:bg-bg-surface/60
                "
              >

                {/* ==================================================
                    PROJECT IMAGE
                    ================================================== */}

                <div
                  className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    bg-bg-overlay
                    border-b border-border-faint
                    bg-grid-fine
                    flex items-center
                    justify-center
                    p-2 sm:p-2.5
                  "
                >

                  {!imgErrors[project.thumbnail] ? (

                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      onError={() =>
                        handleImageError(project.thumbnail)
                      }
                      className="
                        w-full h-full
                        object-contain object-center
                        rounded-lg
                        transition-transform duration-500
                        group-hover:scale-[1.02]
                      "
                    />

                  ) : (

                    <div
                      className="
                        p-6
                        text-center
                      "
                    >

                      <div
                        className="
                          w-10 h-10
                          mx-auto
                          rounded-xl
                          bg-violet-dim
                          border border-violet-light/20
                          flex items-center
                          justify-center
                          text-violet-light
                        "
                      >
                        <Layers className="w-5 h-5" />
                      </div>

                      <p
                        className="
                          mt-3
                          text-xs
                          font-bold
                          text-ink-primary
                        "
                      >
                        {project.title}
                      </p>

                    </div>

                  )}


                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/30
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-300
                      flex items-center
                      justify-center
                    "
                  >

                    <span
                      className="
                        px-3.5 py-2
                        rounded-full
                        bg-bg-base/90
                        border border-violet-light/35
                        text-xs
                        font-semibold
                        text-ink-primary
                        flex items-center
                        gap-1.5
                      "
                    >
                      View Detail

                      <ArrowUpRight
                        className="
                          w-3.5 h-3.5
                          text-violet-light
                        "
                      />
                    </span>

                  </div>

                </div>


                {/* ==================================================
                    PROJECT CONTENT
                    ================================================== */}

                <div className="p-5 sm:p-6">

                  {/* Meta */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >

                    <span
                      className="
                        text-2xs
                        uppercase
                        tracking-[0.15em]
                        font-semibold
                        text-violet-light
                        tabular-nums
                      "
                    >
                      {indexStr}
                      {' / '}
                      {project.period
                        .split('•')[0]
                        .trim()}
                    </span>

                    <span
                      className="
                        text-2xs
                        text-ink-muted
                        text-right
                      "
                    >
                      {project.type}
                    </span>

                  </div>


                  {/* Title */}
                  <div className="mt-5">

                    <h4
                      className="
                        text-lg sm:text-xl
                        font-bold
                        tracking-tight
                        text-ink-primary
                        group-hover:text-violet-light
                        transition-colors
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >

                      <span>
                        {project.title}
                      </span>

                      <ArrowUpRight
                        className="
                          w-4 h-4
                          shrink-0
                          mt-1
                          text-ink-muted
                          group-hover:text-violet-light
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                          transition-all
                        "
                      />

                    </h4>


                    <p
                      className="
                        mt-1.5
                        text-xs
                        text-ink-muted
                      "
                    >
                      {project.fullTitle.split('•')[1]?.trim() ||
                        project.role}
                    </p>


                    <p
                      className="
                        mt-3
                        text-xs sm:text-sm
                        text-ink-muted
                        leading-reading
                        line-clamp-3
                      "
                    >
                      {project.summary}
                    </p>

                  </div>


                  {/* Tech Stack */}
                  <div
                    className="
                      mt-6
                      pt-4
                      border-t border-border-faint
                      flex flex-wrap
                      gap-1.5
                    "
                  >

                    {project.technologies
                      .slice(0, 4)
                      .map((technology) => (

                        <span
                          key={technology}
                          className="tech-chip"
                        >
                          {technology}
                        </span>

                      ))}

                    {project.technologies.length > 4 && (

                      <span
                        className="
                          tech-chip
                          text-ink-muted
                        "
                      >
                        +{project.technologies.length - 4}
                      </span>

                    )}

                  </div>

                </div>

              </article>

            );

          })}

        </div>


        {/* ======================================================
            CAROUSEL PROGRESS
            ====================================================== */}

        {secondaryProjects.length > 1 && (

          <div
            className="
              mt-5
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                h-1
                flex-1
                rounded-full
                bg-border-faint
                overflow-hidden
              "
            >

              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-violet-light
                  to-violet-pale
                  transition-all duration-500
                "
                style={{
                  width: `${((activeSlide + 1) /
                      secondaryProjects.length) *
                    100
                    }%`,
                }}
              />

            </div>

            <span
              className="
                text-2xs
                text-ink-muted
                whitespace-nowrap
              "
            >
              Drag to explore
            </span>

          </div>

        )}
        </Animate>

      </div>


      {/* ========================================================
          PROJECT CASE STUDY MODAL
          ======================================================== */}

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};