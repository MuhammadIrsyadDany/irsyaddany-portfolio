export interface ProjectScreenshot {
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  fullTitle: string;
  role: string;
  type: string;
  period: string;
  location?: string;
  client?: string;
  summary: string;
  description: string;
  featured?: boolean;
  technologies: string[];
  highlights: string[];
  thumbnail: string;
  demoUrl?: string;
  githubUrl?: string;
  screenshots: ProjectScreenshot[];
}

export type TechCategory = 
  | 'All'
  | 'Core Competency'
  | 'Frontend'
  | 'Backend & Languages'
  | 'Database & Storage'
  | 'Mobile'
  | 'Tools & Platforms';

export interface Technology {
  name: string;
  category: TechCategory;
  logo?: string;
  iconName?: string;
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: 'Internship' | 'Leadership' | 'Volunteer';
  period: string;
  location: string;
  highlights: string[];
  documentation?: { url: string; caption: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  metrics?: { label: string; value: string }[];
  image?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  certificateImage?: string;
}
