import { Achievement } from '../types/portfolio';

export const achievements: Achievement[] = [
  {
    id: 'cum-laude',
    title: 'Cum Laude Graduate',
    subtitle: 'State Polytechnic of Malang (Polinema)',
    year: '2026',
    description: 'Graduated with Honors (Cum Laude) from the D4 Informatics Engineering program, achieving a cumulative GPA of 3.62 / 4.00 on August 29, 2026.',
    metrics: [
      { label: 'Cumulative GPA', value: '3.62 / 4.00' },
      { label: 'Honor Status', value: 'Cum Laude' },
      { label: 'Degree', value: 'D4 Informatics Eng.' }
    ],
    image: '/images/achievements/cum-laude.jpg'
  },
  {
    id: 'thesis-validation',
    title: 'Thesis System Validation',
    subtitle: 'Vendor Savve Enterprise Capstone',
    year: '2026',
    description: 'Conducted rigorous end-to-end quality assurance and operational validation for the Vendor Savve Item Storage Management System, approved by enterprise management.',
    metrics: [
      { label: 'E2E Scenarios', value: '60 Scenarios' },
      { label: 'Pass Rate', value: '100% Verified' },
      { label: 'Functional Specs', value: '28 Specifications' }
    ],
    image: '/images/achievements/thesis-validation.jpg'
  }
];
