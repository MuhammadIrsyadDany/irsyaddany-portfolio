import React from 'react';
import { Server, Layout, Wrench } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { Animate, StaggerGroup, fadeUp, blurIn, scaleIn } from './ScrollAnimations';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      id: 'backend',
      number: '01',
      title: 'Backend & Databases',
      icon: Server,
      summary:
        'Membangun logika aplikasi, REST API, serta struktur basis data yang terorganisir dan mudah dikembangkan.',
      skills: [
        { name: 'Laravel', level: 'Primary Framework' },
        { name: 'PHP', level: 'Core Language' },
        { name: 'MySQL', level: 'Relational Database' },
        { name: 'RESTful API', level: 'Architecture' },
        { name: 'Database Design', level: 'Data Modeling' },
        { name: 'RBAC', level: 'Access Control' },
      ],
    },
    {
      id: 'frontend',
      number: '02',
      title: 'Frontend & Mobile',
      icon: Layout,
      summary:
        'Mengembangkan antarmuka yang responsif, modular, konsisten, dan berorientasi pada pengalaman pengguna.',
      skills: [
        { name: 'React.js', level: 'Component Logic' },
        { name: 'Next.js', level: 'Modern Web' },
        { name: 'TypeScript', level: 'Type Safety' },
        { name: 'JavaScript', level: 'Core Language' },
        { name: 'Tailwind CSS', level: 'UI Styling' },
        { name: 'Flutter', level: 'Cross-Platform' },
      ],
    },
    {
      id: 'tools',
      number: '03',
      title: 'Tools & Practices',
      icon: Wrench,
      summary:
        'Menggunakan workflow dan tools pendukung untuk version control, API testing, UI design, dan quality assurance.',
      skills: [
        { name: 'Git & GitHub', level: 'Version Control' },
        { name: 'Postman', level: 'API Testing' },
        { name: 'Figma', level: 'UI/UX Design' },
        { name: 'E2E Testing', level: 'Quality Assurance' },
        { name: 'AdminLTE', level: 'Admin Interface' },
        { name: 'Documentation', level: 'System Guides' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-t border-border-faint"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <Animate variants={fadeUp}>
            <div className="eyebrow-tag mb-5">
              <span>02</span>
              <span className="text-border-soft">/</span>
              <span>Technical Capabilities</span>
            </div>
          </Animate>

          <div className="max-w-2xl">
            <Animate variants={blurIn} custom={1}>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.045em] leading-[0.92] text-ink-primary">
                Tools I build
                <span className="text-violet-light"> with.</span>
              </h2>
            </Animate>

            <Animate variants={fadeUp} custom={2}>
              <p className="mt-6 text-sm sm:text-base text-ink-muted leading-reading max-w-xl">
                Teknologi dan praktik engineering yang saya gunakan untuk
                merancang, membangun, menguji, dan mengembangkan aplikasi
                perangkat lunak.
              </p>
            </Animate>

          </div>
        </div>

        {/* Skills Grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Animate key={category.id} variants={scaleIn} custom={skillCategories.indexOf(category)}>
              <div
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-border-faint
                  bg-bg-surface/30
                  p-6 sm:p-7
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-violet-light/30
                  hover:bg-bg-surface/60
                "
              >
                {/* Background Number */}
                <span
                  className="
                    absolute -right-4 -top-8
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
                  aria-hidden="true"
                >
                  {category.number}
                </span>

                {/* Category Header */}
                <div className="relative">
                  <div className="flex items-start justify-between">
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
                      <Icon className="w-[18px] h-[18px]" />
                    </div>

                    <span className="mono-index">
                      {category.number}
                    </span>
                  </div>

                  <div className="mt-8">
                    <p className="text-2xs uppercase tracking-[0.16em] font-semibold text-violet-light">
                      {category.id === 'backend'
                        ? 'Core Development'
                        : category.id === 'frontend'
                          ? 'Interface Development'
                          : 'Development Workflow'}
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-ink-primary">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-sm text-ink-muted leading-reading">
                      {category.summary}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="relative mt-8 pt-5 border-t border-border-faint">
                  <div className="space-y-0">
                    {category.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`
                          group/skill
                          flex items-center justify-between gap-4
                          py-3
                          ${index !== category.skills.length - 1
                            ? 'border-b border-border-faint'
                            : ''
                          }
                        `}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="
                              w-7 h-7
                              rounded-lg
                              border border-border-faint
                              bg-bg-base/70
                              flex items-center justify-center
                              shrink-0
                              p-1.5
                              transition-all duration-200
                              group-hover/skill:border-violet-light/35
                              group-hover/skill:bg-bg-surface
                              group-hover/skill:scale-105
                            "
                          >
                            <TechIcon name={skill.name} className="w-full h-full object-contain" />
                          </div>

                          <span className="text-sm font-semibold text-ink-primary truncate group-hover/skill:text-violet-light transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-2xs font-medium text-ink-muted whitespace-nowrap">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </Animate>
            );
          })}
        </StaggerGroup>

        {/* Bottom Note */}
        <Animate variants={fadeUp}>
          <div className="mt-8 pt-6 border-t border-border-faint flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-ink-muted">
              Tools are selected based on project requirements and practical use.
            </p>

            <p className="text-2xs uppercase tracking-[0.16em] font-semibold text-ink-muted">
              Learn · Build · Iterate
            </p>
          </div>
        </Animate>

      </div>
    </section>
  );
};