import { Achievement } from '../types/portfolio';

export const achievements: Achievement[] = [
  {
    id: 'thesis-validation',
    title: 'Thesis System Validation',
    subtitle: 'Vendor Savve Enterprise Capstone',
    year: '2026',
    description: 'Menyelesaikan perancangan dan validasi sistem pergudangan Vendor Savve dengan pengujian kualitas end-to-end (E2E) menggunakan Cypress yang tervalidasi 100% dan disetujui dewan penguji.',
    metrics: [
      { label: 'E2E Scenarios', value: '60 Skenario' },
      { label: 'Pass Rate', value: '100% Verified' },
      { label: 'Test Tool', value: 'Cypress Testing' }
    ],
    image: '/images/achievements/thesis-validation.png',
    certificateImages: [
      '/images/cypress/1-Autentikasi__Cuplikan_layar_2026-06-23_200051.png',
      '/images/cypress/2-Pengelolaan_Event_Tarif__Cuplikan_layar_2026-06-23_210419.png',
      '/images/cypress/3-Transaksi_Penitipan_Pengambilan__Cuplikan_layar_2026-06-23_211022.png',
      '/images/cypress/4-Laporan__Cuplikan_layar_2026-06-23_211738.png',
      '/images/cypress/5-Manajemen_Pengguna_Profile__Cuplikan_layar_2026-06-23_212004.png',
      '/images/cypress/6-Manajemen_Transaksi_Admin__Cuplikan_layar_2026-06-23_212202.png',
      '/images/cypress/7-Pencarian_Global__Cuplikan_layar_2026-06-23_212336.png'
    ],
    badge: 'Cypress E2E Validated'
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
