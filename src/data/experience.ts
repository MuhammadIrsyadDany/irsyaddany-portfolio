import { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'utero-intern',
    role: 'Front-End Mobile Developer Intern',
    organization: 'PT Utero Kreatif Indonesia',
    type: 'Internship',
    period: 'Jun 2025 ? Dec 2025',
    location: 'Malang, East Java',
    highlights: [
      'Implemented UI/UX for 10+ features (Login, Register, Onboarding, Homepage, Notifications, and more) on WORECA, a smart music streamer mobile app.',
      'Performed rigorous UI testing and debugging to ensure consistent navigation, responsiveness, and interface behavior across multiple screen resolutions.',
      'Authored comprehensive User Guide and Admin Guide documentation to facilitate client handoff and user adoption.',
      'Constructed Use Case and Activity Diagrams directly aligning technical system architecture with stakeholder requirements.'
    ],
    documentation: [
      // Prepared for progressive upload of internship documentation
      // { url: '/images/experience/utero/woreca-ui.png', caption: 'WORECA Mobile UI Implementation' }
    ]
  },
  {
    id: 'polinema-mentor',
    role: 'Student Mentor',
    organization: 'Departmental Pre-Study Committee, State Polytechnic of Malang',
    type: 'Leadership',
    period: 'May 2024',
    location: 'Malang, East Java',
    highlights: [
      'Guided incoming Informatics Engineering students through orientation and university transition.',
      'Directly mentored and resolved technical and onboarding challenges for 35 new students.'
    ]
  },
  {
    id: 'dies-natalis',
    role: 'Committee Lead',
    organization: 'Dies Natalis Committee, State Polytechnic of Malang',
    type: 'Leadership',
    period: 'Mar 2023',
    location: 'Malang, East Java',
    highlights: [
      'Led event briefings and coordinated 15 technical sub-committees ensuring seamless operations.',
      'Managed execution timelines to deliver the anniversary event punctually on schedule.'
    ]
  },
  {
    id: 'semesta-berpesta',
    role: 'Supervisor, Gate Crew',
    organization: 'Semesta Berpesta Malang',
    type: 'Volunteer',
    period: 'Jul 2025',
    location: 'Malang, East Java',
    highlights: [
      'Supervised gate/entrance crew operations at a large-scale public music event.',
      'Monitored high-volume visitor flow and coordinated team members to guarantee smooth, secure entry.'
    ]
  },
  {
    id: 'bandaneira',
    role: 'Ticketing Crew',
    organization: 'BandaNeira Tour Concert',
    type: 'Volunteer',
    period: 'Apr 2024',
    location: 'Malang, East Java',
    highlights: [
      'Configured online ticketing terminals and performed barcode-based ticket redemption at venue entrance.'
    ]
  },
  {
    id: 'kickfest',
    role: 'Data Card Crew Volunteer',
    organization: 'Kickfest Sew-Stayin (Dyandra Promosindo)',
    type: 'Volunteer',
    period: 'Sep 2024',
    location: 'Malang, East Java',
    highlights: [
      'Managed participant data, producing official ID credentials and Special Guest Invitations for clothing brands and MSMEs (UMKM).'
    ]
  }
];
