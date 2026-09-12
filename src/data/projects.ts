import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'vendor-savve',
    title: 'Vendor Savve',
    fullTitle: 'Vendor Savve — Item Storage Management System',
    role: 'Full-Stack Developer',
    type: 'Thesis Project',
    featured: true,
    period: 'Jan 2026 — Jun 2026',
    location: 'Malang, East Java',
    summary: 'A web-based item storage management system featuring transaction management, item retrieval, reporting, event management, role-based authentication, and access control for Admin and Cashier users.',
    description: 'Developed as a capstone thesis project at State Polytechnic of Malang, Vendor Savve provides an enterprise-grade storage and logistics workflow for vendor equipment and event storage. Designed with role-based access control (RBAC), multi-tier item categorization, automated status changes upon checkout, and audited transaction records. The entire system underwent formal validation with 60 comprehensive End-to-End test scenarios achieving a 100% pass rate across all 28 Functional Specifications, followed by formal adoption and approval by Vendor Savve management.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Figma', 'Bootstrap'],
    highlights: [
      'Engineered complete transaction, item-retrieval, reporting, and event-management features with Laravel & MySQL',
      'Implemented role-based authentication and granular access control separating Admin and Cashier roles',
      'Designed and prototyped 10 core features in Figma prior to engineering to guarantee high usability',
      'System validated through 60 End-to-End test scenarios (100% pass rate) covering all 28 Functional Specifications',
      'Officially approved and certified by Vendor Savve management'
    ],
    thumbnail: '/images/projects/vendor-savve/1.png',
    screenshots: [
      { url: '/images/projects/vendor-savve/1.png', caption: 'Vendor Savve — Dashboard Utama & Ringkasan Statistik' },
      { url: '/images/projects/vendor-savve/2.png', caption: 'Vendor Savve — Manajemen Inventaris & Penyimpanan Barang' },
      { url: '/images/projects/vendor-savve/3.png', caption: 'Vendor Savve — Alur Transaksi & Pengambilan Barang Sewa' },
      { url: '/images/projects/vendor-savve/4.png', caption: 'Vendor Savve — Master Data Item & Manajemen Kategori' },
      { url: '/images/projects/vendor-savve/5.png', caption: 'Vendor Savve — Otentikasi Multi-Peran (Admin & Kasir)' },
      { url: '/images/projects/vendor-savve/6.png', caption: 'Vendor Savve — Detail Transaksi & Bukti Penerimaan' },
      { url: '/images/projects/vendor-savve/7.png', caption: 'Vendor Savve — Pelaporan Rekapitulasi & Log Aktivitas' },
      { url: '/images/projects/vendor-savve/8.png', caption: 'Vendor Savve — Monitoring Status Sewa & Jadwal Event' },
      { url: '/images/projects/vendor-savve/9.png', caption: 'Vendor Savve — Formulir Input & Validasi Data Barang' },
      { url: '/images/projects/vendor-savve/10.png', caption: 'Vendor Savve — Pengaturan Akun & Profil Pengguna' },
      { url: '/images/projects/vendor-savve/11.png', caption: 'Vendor Savve — Cetak Laporan & Dokumen Ekspor' }
    ]
  },
  {
    id: 'hiradc',
    title: 'HIRADC & Live Audit',
    fullTitle: 'HIRADC & Live Audit Reporting System',
    role: 'Full-Stack Developer',
    type: 'Personal Project',
    period: 'Jan 2026 — Apr 2026',
    location: 'Surabaya, East Java',
    client: 'Steam Power Plant Company',
    summary: 'A web-based hazard identification and live audit reporting system supporting real-time audit submission, hazard categorization, audit status monitoring, and reporting.',
    description: 'Engineered for a high-consequence steam power plant facility in Surabaya. The system enables occupational safety officers and plant auditors to submit Hazard Identification, Risk Assessment, and Determining Control (HIRADC) records in real time. Features severity matrix evaluation, visual hazard categorization, corrective action assignment, and executive monitoring dashboards.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'AdminLTE', 'Figma'],
    highlights: [
      'Built live hazard identification and audit reporting workflow tailored for industrial plant operations',
      'Enabled real-time audit submission, severity calculations, and status progression tracking',
      'Designed responsive administrative dashboards with AdminLTE and Figma for plant supervisors',
      'Architected normalized MySQL database schemas ensuring data integrity for compliance audits'
    ],
    thumbnail: '/images/projects/hiradc/thumbnail.png',
    screenshots: [
      { url: '/images/projects/hiradc/thumbnail.png', caption: 'HIRADC Audit Control Center' },
      { url: '/images/projects/hiradc/dashboard.png', caption: 'Live Audit Monitoring Dashboard' },
      { url: '/images/projects/hiradc/report.png', caption: 'Hazard Categorization & Risk Matrix' }
    ]
  },
  {
    id: 'plarena',
    title: 'Plarena',
    fullTitle: 'Plarena — Sports Field Booking Information System',
    role: 'Full-Stack Developer',
    type: 'Academic Project (6th Semester)',
    period: 'Feb 2025 — Jun 2025',
    location: 'State Polytechnic of Malang',
    summary: 'A web-based sports field booking system with real-time schedules and online reservation management.',
    description: 'Built to streamline court bookings for sports facilities, eliminating double booking conflicts. Users can browse court schedules by date and sport type, verify live slot availability, and submit reservations instantly while operators manage court turnover through a unified dashboard.',
    technologies: ['Next.js', 'Laravel', 'PHP', 'MySQL', 'Figma'],
    highlights: [
      'Built sports field booking web platform with live schedule availability checking',
      'Implemented full-stack architecture combining Next.js frontend with Laravel API backend',
      'Designed a flexible, modern UI/UX with subtle color gradations prototyped in Figma'
    ],
    thumbnail: '/images/projects/plarena/1.jpg',
    screenshots: [
      { url: '/images/projects/plarena/1.jpg', caption: 'Plarena — Portal Pemesanan Lapangan Olahraga' },
      { url: '/images/projects/plarena/2.jpg', caption: 'Plarena — Jadwal & Slot Ketersediaan Real-Time' },
      { url: '/images/projects/plarena/3.jpg', caption: 'Plarena — Detail Lapangan & Fasilitas Olahraga' },
      { url: '/images/projects/plarena/4.jpg', caption: 'Plarena — Alur Reservasi & Booking Online' },
      { url: '/images/projects/plarena/5.jpg', caption: 'Plarena — Konfirmasi Transaksi & Pembayaran' },
      { url: '/images/projects/plarena/6.jpg', caption: 'Plarena — Dashboard Manajemen Pengelola' },
      { url: '/images/projects/plarena/7.jpg', caption: 'Plarena — Monitoring Status Lapangan & Kalender' },
      { url: '/images/projects/plarena/8.jpg', caption: 'Plarena — Rekapitulasi Data Pelanggan' },
      { url: '/images/projects/plarena/9.jpg', caption: 'Plarena — Laporan Pendapatan & Reservasi' },
      { url: '/images/projects/plarena/10.jpg', caption: 'Plarena — Pengaturan Sistem & Tarif Sewa' }
    ]
  },
  {
    id: 'healthify',
    title: 'Healthify',
    fullTitle: 'Healthify — Fitness Monitoring & Training Mobile App',
    role: 'Developer',
    type: 'Academic Project (5th Semester)',
    period: 'Sep 2024 — Feb 2025',
    location: 'State Polytechnic of Malang',
    summary: 'A mobile application for fitness monitoring and training plans with a Laravel backend targeting Android.',
    description: 'A mobile fitness application engineered with Flutter for Android devices, backed by a robust Laravel REST API. Healthify provides customized workout plans, daily activity monitoring, and progressive training routines tailored to individual fitness levels.',
    technologies: ['Flutter', 'Laravel', 'PHP', 'Android', 'Figma'],
    highlights: [
      'Developed native-performing mobile client in Flutter targeting Android smartphones',
      'Integrated workout tracking, routines, and user progression with Laravel backend APIs',
      'Crafted high-contrast and intuitive workout interfaces prototyped in Figma'
    ],
    thumbnail: '/images/projects/healthify/Android Large - 3.png',
    screenshots: [
      { url: '/images/projects/healthify/Android Large - 3.png', caption: 'Healthify — Beranda & Menu Pelatihan Kebugaran' },
      { url: '/images/projects/healthify/Android Large - 4.png', caption: 'Healthify — Pelacak Latihan & Aktivitas Harian' },
      { url: '/images/projects/healthify/Android Large - 6.png', caption: 'Healthify — Rencana Latihan & Kategori Olahraga' },
      { url: '/images/projects/healthify/Android Large - 10.png', caption: 'Healthify — Detail Gerakan & Panduan Latihan' },
      { url: '/images/projects/healthify/Android Large - 11.png', caption: 'Healthify — Timer & Sesi Workouts' },
      { url: '/images/projects/healthify/Android Large - 14.png', caption: 'Healthify — Monitoring Statistik & Kalori' },
      { url: '/images/projects/healthify/Android Large - 16.png', caption: 'Healthify — Target Kebugaran & Riwayat' },
      { url: '/images/projects/healthify/Android Large - 19.png', caption: 'Healthify — Profil Pengguna & Preferensi' },
      { url: '/images/projects/healthify/Android Large - 20.png', caption: 'Healthify — Pengaturan Notifikasi & Jadwal' },
      { url: '/images/projects/healthify/Android Large - 22.png', caption: 'Healthify — Ringkasan Pencapaian Kebugaran' }
    ]
  },
  {
    id: 'siwa',
    title: 'SIWA',
    fullTitle: 'SIWA — RW Administration Information System',
    role: 'Developer',
    type: 'Academic Project (4th Semester)',
    period: 'Feb 2024 — Jun 2024',
    location: 'State Polytechnic of Malang',
    summary: 'A citizen information system featuring population statistics, dues/payment tracking, and letter-request notifications.',
    description: 'An administrative information system designed for neighborhood community management (RW). Features household population analytics, transparent tracking of resident dues, and automated digital letter request workflows for civil documentation.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Figma'],
    highlights: [
      'Built community dashboard displaying demographic population statistics and family cards',
      'Implemented dues collection records, financial transparency, and digital letter request alerts',
      'Designed an accessible interface tailored for diverse age demographics across the neighborhood'
    ],
    thumbnail: '/images/projects/siwa/1.jpg',
    screenshots: [
      { url: '/images/projects/siwa/1.jpg', caption: 'SIWA — Dashboard Administrasi Warga RW' },
      { url: '/images/projects/siwa/2.jpg', caption: 'SIWA — Statistik Demografi & Data Kependudukan' },
      { url: '/images/projects/siwa/3.jpg', caption: 'SIWA — Pengelolaan & Transparansi Iuran Warga' },
      { url: '/images/projects/siwa/4.png', caption: 'SIWA — Alur Pengajuan Surat & Dokumen Warga' },
      { url: '/images/projects/siwa/5.jpg', caption: 'SIWA — Rekapitulasi Laporan & Agenda Lingkungan' }
    ]
  },
  {
    id: 'e-pustaka',
    title: 'E-Pustaka',
    fullTitle: 'E-Pustaka — Reading Room Information System',
    role: 'Developer',
    type: 'Academic Project (3rd Semester)',
    period: 'Nov 2023 — Dec 2023',
    location: 'State Polytechnic of Malang',
    summary: 'A reading-room information system featuring book catalog management, borrowing statistics, and return tracking.',
    description: 'A centralized library and reading-room management application. Digitalized book catalog indexing, member borrowing records, overdue return tracking, and borrowing analytics.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'Figma'],
    highlights: [
      'Developed catalog indexing, circulation ledger, and return tracking using PHP and MySQL',
      'Implemented analytical dashboard showing most borrowed literature and active readers',
      'Mapped complete user journeys and wireframes in Figma'
    ],
    thumbnail: '/images/projects/e-pustaka/1.jpg',
    screenshots: [
      { url: '/images/projects/e-pustaka/1.jpg', caption: 'E-Pustaka — Katalog Buku & Ruang Baca Digital' },
      { url: '/images/projects/e-pustaka/2.jpg', caption: 'E-Pustaka — Manajemen Peminjaman & Pengembalian Buku' }
    ]
  }
];
