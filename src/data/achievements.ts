import { Achievement } from '../types/portfolio';

export const achievements: Achievement[] = [
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
