import { Technology, TechCategory } from '../types/portfolio';

export const techCategories: TechCategory[] = [
  'All',
  'Core Competency',
  'Frontend',
  'Backend & Languages',
  'Database & Storage',
  'Mobile',
  'Tools & Platforms'
];

export const technologies: Technology[] = [
  // Core Competencies
  {
    name: 'Front-End Development',
    category: 'Core Competency',
    description: 'Responsive, accessible, and high-performance user interfaces'
  },
  {
    name: 'Full-Stack Development',
    category: 'Core Competency',
    description: 'End-to-end web architectures from database to presentation layer'
  },
  {
    name: 'UI/UX Design',
    category: 'Core Competency',
    description: 'User-centered design systems, interactive prototypes, and wireframing'
  },
  {
    name: 'System Analysis',
    category: 'Core Competency',
    description: 'Requirement engineering, use case modeling, and workflow architecture'
  },
  {
    name: 'Database Design',
    category: 'Core Competency',
    description: 'Relational schema modeling, normalization, and optimization'
  },

  // Backend & Languages
  {
    name: 'PHP',
    category: 'Backend & Languages',
    logo: '/images/tech-stack/php.png',
    description: 'Server-side scripting & API engineering'
  },
  {
    name: 'Laravel',
    category: 'Backend & Languages',
    logo: '/images/tech-stack/laravel.png',
    description: 'MVC enterprise framework, Eloquent ORM, RBAC, RESTful APIs'
  },
  {
    name: 'JavaScript',
    category: 'Backend & Languages',
    logo: '/images/tech-stack/javascript.png',
    description: 'Modern ES6+, DOM manipulation, asynchronous logic'
  },

  // Frontend
  {
    name: 'HTML5',
    category: 'Frontend',
    logo: '/images/tech-stack/html.png',
    description: 'Semantic markup, accessibility, SEO optimization'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    logo: '/images/tech-stack/css.png',
    description: 'Modern layouts, flexbox, grid, animations, responsive design'
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    logo: '/images/tech-stack/nextjs.png',
    description: 'React production framework & client/server architecture'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    logo: '/images/tech-stack/tailwind.png',
    description: 'Utility-first CSS architecture & responsive design systems'
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    logo: '/images/tech-stack/bootstrap.png',
    description: 'Component-driven frontend library'
  },
  {
    name: 'AdminLTE',
    category: 'Frontend',
    logo: '/images/tech-stack/adminlte.png',
    description: 'Modular enterprise admin dashboard template'
  },

  // Database & Storage
  {
    name: 'MySQL',
    category: 'Database & Storage',
    logo: '/images/tech-stack/mysql.png',
    description: 'Relational database management, querying, indexation'
  },

  // Mobile
  {
    name: 'Flutter',
    category: 'Mobile',
    logo: '/images/tech-stack/flutter.png',
    description: 'Cross-platform mobile application development targeting Android'
  },

  // Tools & Platforms
  {
    name: 'Git',
    category: 'Tools & Platforms',
    logo: '/images/tech-stack/git.png',
    description: 'Distributed version control & branch management'
  },
  {
    name: 'GitHub',
    category: 'Tools & Platforms',
    logo: '/images/tech-stack/github.png',
    description: 'Code repository hosting, pull requests, collaboration'
  },
  {
    name: 'Figma',
    category: 'Tools & Platforms',
    logo: '/images/tech-stack/figma.png',
    description: 'UI/UX design, interactive prototyping, user flows'
  },
  {
    name: 'VS Code',
    category: 'Tools & Platforms',
    logo: '/images/tech-stack/vscode.png',
    description: 'Primary IDE & development workflow'
  },
  {
    name: 'Trello',
    category: 'Tools & Platforms',
    logo: '/images/tech-stack/trello.png',
    description: 'Agile sprint management & Kanban tracking'
  },
  {
    name: 'Notion',
    category: 'Tools & Platforms',
    logo: '/images/tech-stack/notion.png',
    description: 'Documentation, system specs & knowledge bases'
  },
  {
    name: 'Canva',
    category: 'Tools & Platforms',
    logo: '/images/tech-stack/canva.png',
    description: 'Visual asset creation & presentations'
  },
  {
    name: 'Microsoft Office',
    category: 'Tools & Platforms',
    logo: '/images/tech-stack/msoffice.png',
    description: 'Professional documentation & analytical sheets'
  }
];
