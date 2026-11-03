import { Achievement } from '../types/portfolio';

export const achievements: Achievement[] = [
  {
    id: 'thesis-validation',
    title: 'Thesis System Validation',
    subtitle: 'Vendor Savve Enterprise Capstone',
    year: '2026',
    description: 'Menyelesaikan perancangan dan validasi sistem pergudangan Vendor Savve dengan pengujian kualitas end-to-end yang disetujui oleh manajemen perusahaan dan dewan penguji.',
    metrics: [
      { label: 'E2E Scenarios', value: '60 Skenario' },
      { label: 'Pass Rate', value: '100% Verified' },
      { label: 'Functional Specs', value: '28 Spesifikasi' }
    ],
    image: '/images/achievements/thesis-validation.jpg',
    badge: 'Capstone Disetujui'
  },
  {
    id: 'academic-excellence',
    title: 'Academic Honors & Transkrip Resmi',
    subtitle: 'D4 Teknik Informatika - Politeknik Negeri Malang',
    year: '2026',
    description: 'Menyelesaikan 151 SKS dengan predikat kelulusan memuaskan (IPK 3.62 / 4.00), meraih Nilai A pada Skripsi, Magang Industri, Desain & Pemrograman Web, Basis Data Lanjut, dan Kecerdasan Artifisial.',
    metrics: [
      { label: 'IPK Kumulatif', value: '3.62 / 4.00' },
      { label: 'Beban Studi', value: '151 SKS' },
      { label: 'Skripsi & Magang', value: 'Grade A' }
    ],
    image: '/images/achievements/transkrip-nilai.png',
    pdfUrl: '/documents/Transkrip_Nilai_Muhammad_Irsyad_Dany.pdf',
    badge: 'Cum Laude Level'
  }
];
