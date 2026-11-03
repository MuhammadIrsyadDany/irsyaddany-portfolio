import { Certification } from '../types/portfolio';

export const certifications: Certification[] = [
  {
    id: 'lsp-programming',
    title: 'Computer Software Programming (Pemrograman Software Komputer)',
    issuer: 'LSP Politeknik Negeri Malang (BNSP)',
    date: 'Juni 2026',
    certificateImage: '/images/certifications/lsp-programming-page-1.png',
    certificateImages: [
      '/images/certifications/lsp-programming-page-1.png',
      '/images/certifications/lsp-programming-page-2.png',
      '/images/certifications/lsp-feedback-page-1.png',
      '/images/certifications/lsp-polinema-fr-ak-03-page-2.png'
    ],
    pdfUrl: '/documents/certificates/lsp-polinema-fr-ak-02.pdf',
    category: 'Sertifikasi Profesi',
    badge: 'BNSP / LSP Terlisensi',
    description: 'Skema sertifikasi okupasi nasional SKKTI022017. Asesmen kompetensi meliputi Algoritma, Struktur Data, Pemrograman Berorientasi Objek (OOP), UI Implementation, Relasi Basis Data, SQL, serta Software Debugging dengan hasil: Rekomendasi Kompeten di semua unit.'
  },
  {
    id: 'toeic-proficiency',
    title: 'TOEIC® Official Institutional Score Report',
    issuer: 'ETS (Educational Testing Service) & Politeknik Negeri Malang',
    date: 'Mei 2026',
    certificateImage: '/images/certifications/sertifikat-toeic-790.png',
    pdfUrl: '/documents/certificates/sertifikat-toeic.pdf',
    category: 'Bahasa Internasional',
    badge: 'Total Score: 790',
    description: 'Laporan skor resmi TOEIC Listening and Reading dengan skor total 790 (Listening 390, Reading 400). Mengonfirmasi kecakapan komunikasi bahasa Inggris tingkat lanjut (Working Proficiency Plus) untuk lingkungan profesional dan teknis.'
  },
  {
    id: 'utero-internship',
    title: 'Front-End Mobile Developer Internship Certificate',
    issuer: 'PT Utero Kreatif Indonesia',
    date: 'Juni 2025 – Desember 2025',
    certificateImage: '/images/certifications/sertifikat-magang-utero.png',
    pdfUrl: '/documents/certificates/sertifikat-magang.pdf',
    category: 'Magang Industri',
    badge: 'Industri Kreatif',
    description: 'Sertifikat resmi kelulusan magang industri 6 bulan penuh sebagai Front-End Mobile Developer pengembang aplikasi mobile streaming musik WORECA.'
  },
  {
    id: 'claude-action',
    title: 'Claude Code in Action',
    issuer: 'Anthropic Education',
    date: 'September 2026',
    certificateImage: '/images/certifications/claude-code-in-action.png',
    pdfUrl: '/documents/certificates/certificate-5pjc9w93vcnj-1788348945.pdf',
    category: 'AI & Machine Learning',
    badge: 'Anthropic Official',
    description: 'Sertifikasi kompetensi pengoperasian Claude Code CLI, agentic workflows, automasi instruksi terminal, refactoring kode cerdas, dan interaksi agentic coding.'
  },
  {
    id: 'claude-api',
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic Education',
    date: 'September 2026',
    certificateImage: '/images/certifications/claude-anthropic-api.png',
    pdfUrl: '/documents/certificates/certificate-4n7t3urxo8bs-1788440963.pdf',
    category: 'AI & Machine Learning',
    badge: 'Anthropic Official',
    description: 'Implementasi Claude API, structured outputs, function calling, tool use, multimodality, dan perancangan pipeline inferensi AI tingkat lanjut.'
  },
  {
    id: 'ai-fluency-framework',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic & UCC / HEA',
    date: 'September 2026',
    certificateImage: '/images/certifications/ai-fluency-framework.png',
    pdfUrl: '/documents/certificates/certificate-ym5tj3io9bsk-1788349322.pdf',
    category: 'AI & Machine Learning',
    badge: 'Anthropic Official',
    description: 'Kerangka kerja literasi AI modern, pemahaman arsitektur fondasi LLM, evaluasi risiko halusinasi, dan etika kecerdasan buatan.'
  },
  {
    id: 'ai-fluency-builders',
    title: 'AI Fluency for Builders',
    issuer: 'CodePath.org & Anthropic',
    date: 'Oktober 2026',
    certificateImage: '/images/certifications/ai-fluency-builders.png',
    pdfUrl: '/documents/certificates/ai-fluency-for-builders.pdf',
    category: 'AI & Machine Learning',
    badge: 'CodePath & Anthropic',
    description: 'Penerapan agentic patterns untuk software builders, chaining prompts, RAG (Retrieval-Augmented Generation), dan orkestrasi model AI production.'
  },
  {
    id: 'claude-vertex-ai',
    title: 'Claude with Google Vertex AI',
    issuer: 'Anthropic & Google Cloud',
    date: 'Oktober 2026',
    certificateImage: '/images/certifications/claude-vertex-ai.png',
    pdfUrl: '/documents/certificates/claude-on-google-cloud.pdf',
    category: 'AI & Machine Learning',
    badge: 'Google Cloud & Anthropic',
    description: 'Integrasi dan orkestrasi model Claude di ekosistem cloud enterprise Google Cloud Platform (GCP) Vertex AI.'
  },
  {
    id: 'deploying-claude-enterprise',
    title: 'Deploying Claude Enterprise with Confidence',
    issuer: 'Anthropic Education',
    date: 'Oktober 2026',
    certificateImage: '/images/certifications/deploying-claude-enterprise.png',
    pdfUrl: '/documents/certificates/deploying-claude-enterprise-with-confidence.pdf',
    category: 'AI & Machine Learning',
    badge: 'Anthropic Official',
    description: 'Best practices tata kelola keamanan enterprise, enkripsi data, evaluasi performa model, dan deployment skala korporat.'
  }
];
