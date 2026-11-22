import type { Locale } from "@/lib/i18n/locales";

type Localized = Record<Locale, string>;

/** Same term in both locales; keeps the data readable. */
const term = (en: string, id = en): Localized => ({ en, id });

export type EducationEntry = {
  period: Localized;
  institution: string;
  programme: string;
};

export type ExperienceGroup = "academic" | "organisation";

export type ExperienceEntry = {
  group: ExperienceGroup;
  period: Localized;
  role: Localized;
  organisation: string;
  detail: Localized;
};

export type CertificationGroup = {
  issuer: string;
  year: string;
  items: string[];
};

export type AwardEntry = {
  year: string;
  title: Localized;
  detail: Localized;
};

export type SkillGroup = {
  label: Localized;
  items: Localized[];
};

/**
 * Programmes are kept verbatim so the site matches the PDF CV.
 * Grades and IPK are intentionally not published here; they stay in the PDF.
 */
export const education: EducationEntry[] = [
  {
    period: { en: "2024 — present", id: "2024 — sekarang" },
    institution: "Politeknik Negeri Malang",
    programme: "D-IV Teknik Informatika",
  },
  {
    period: { en: "2021 — 2024", id: "2021 — 2024" },
    institution: "SMK Muhammadiyah 1 Pandaan",
    programme: "Teknik Komputer dan Jaringan",
  },
];

/** Mirrors the two groups in the CV: academic work first, committees second. */
export const experience: ExperienceEntry[] = [
  {
    group: "academic",
    period: { en: "Sep 2026", id: "Sep 2026" },
    role: {
      en: "Research Assistant (Data Annotator)",
      id: "Asisten Peneliti (Data Annotator)",
    },
    organisation: "Penelitian Dosen Politeknik Negeri Malang",
    detail: {
      en: "Annotated and labelled thousands of traffic CCTV frames from Malang in Label Studio, producing the training set for a computer-vision vehicle-counting model.",
      id: "Melakukan anotasi dan pelabelan ribuan frame rekaman CCTV lalu lintas Kota Malang di Label Studio untuk menyiapkan dataset pelatihan model penghitung volume kendaraan otomatis.",
    },
  },
  {
    group: "academic",
    period: { en: "May 2026", id: "Mei 2026" },
    role: {
      en: "Student Grader (Teaching Assistant)",
      id: "Student Grader (Asisten Dosen)",
    },
    organisation: "Jurusan Teknologi Informasi Politeknik Negeri Malang",
    detail: {
      en: "Graded exams, quizzes, and final projects for more than 28 first-year students against the official rubric, wrote constructive written feedback, and worked with the teaching team on a hybrid schedule.",
      id: "Mengevaluasi hasil ujian, kuis, dan tugas besar lebih dari 28 mahasiswa tingkat pertama sesuai rubrik resmi, memberikan umpan balik tertulis yang konstruktif, serta berkolaborasi dengan tim pengajar dalam sistem kerja hybrid.",
    },
  },
  {
    group: "academic",
    period: { en: "Jul — Dec 2023", id: "Jul — Des 2023" },
    role: {
      en: "Front-End Web Developer Intern",
      id: "Magang Front-End Web Developer",
    },
    organisation: "CV. Javawebster Teknologi Pintar",
    detail: {
      en: "Converted UI designs into responsive pages with HTML, CSS, JavaScript, Bootstrap, and Tailwind to client specifications, then ran cross-browser testing and front-end debugging on desktop and mobile.",
      id: "Mengonversi desain antarmuka menjadi halaman web responsif dengan HTML, CSS, JavaScript, Bootstrap, dan Tailwind CSS sesuai kebutuhan klien, lalu melakukan pengujian lintas peramban dan debugging komponen front-end di desktop maupun mobile.",
    },
  },
  {
    group: "organisation",
    period: { en: "Nov 2025 — present", id: "Nov 2025 — sekarang" },
    role: {
      en: "Creative Education Staff",
      id: "Staff Edukasi Kreatif",
    },
    organisation: "Polinema Mengajar",
    detail: {
      en: "Preparing interactive learning materials and mentoring students at community learning centres and orphanages on a regular schedule.",
      id: "Menyusun materi pembelajaran interaktif dan mendampingi kegiatan belajar siswa di rumah belajar serta panti asuhan secara berkala.",
    },
  },
  {
    group: "organisation",
    period: { en: "2024 — present", id: "2024 — sekarang" },
    role: {
      en: "Event Project Manager & Coordinator (freelance)",
      id: "Event Project Manager & Coordinator (freelance)",
    },
    organisation: "Freelance",
    detail: {
      en: "Bridging client and operations communication and handling on-site problems fast under pressure, while coordinating technical and operational needs with the crew so the run-of-show holds.",
      id: "Menjembatani komunikasi klien dan tim operasional serta menangani kendala di lapangan secara cepat dalam situasi bertekanan tinggi, sekaligus mengoordinasikan kebutuhan teknis dan operasional bersama tim agar rangkaian acara berjalan sesuai rundown.",
    },
  },
];

/** Certification titles are official course names and stay untranslated. */
export const certifications: CertificationGroup[] = [
  {
    issuer: "Komdigi",
    year: "2026",
    items: ["Data Analisis", "Data Scientist", "Deep Learning"],
  },
  {
    issuer: "DQLab",
    year: "2025",
    items: [
      "Python for Data Professional",
      "Data Manipulation with pandas",
      "EDA with Python",
    ],
  },
  {
    issuer: "Dicoding",
    year: "2025",
    items: [
      "Belajar Dasar Visualisasi Data",
      "Memulai Pemrograman Dengan Python",
    ],
  },
  {
    issuer: "LSP TIK",
    year: "2024",
    items: ["Junior Web Developer"],
  },
];

export const awards: AwardEntry[] = [
  {
    year: "2025",
    title: {
      en: "3rd Place, InterComp 2025",
      id: "Juara 3 InterComp 2025",
    },
    detail: {
      en: "ICT business category, as team lead. Initiated the product, mapped the business flow, and designed the system architecture for a digital guest book wired into a digital wedding invitation, so guest check-in is faster and attendance recap is real time.",
      id: "Bidang bisnis TIK, sebagai ketua tim. Menginisiasi ide produk, merancang alur proses bisnis, dan menyusun arsitektur sistem buku tamu digital yang terintegrasi dengan undangan pernikahan digital, sehingga check-in tamu lebih cepat dan rekap kehadiran berjalan real-time.",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: term("Backend"),
    items: [
      term("PHP (Laravel, Filament)"),
      term("REST API"),
      term("MySQL"),
      term("PostgreSQL"),
    ],
  },
  {
    label: term("Frontend"),
    items: [
      term("HTML"),
      term("CSS"),
      term("JavaScript"),
      term("Bootstrap 5"),
      term("Tailwind CSS"),
      term("Flutter"),
    ],
  },
  {
    label: term("Tools & analysis", "Tools & analisis"),
    items: [
      term("Git"),
      term("System analysis", "Analisis sistem"),
      term("UML"),
      term("Figma"),
      term("Python"),
      term("ERD"),
    ],
  },
  {
    label: term("Soft skills"),
    items: [
      term("Teamwork", "Kerja sama tim"),
      term("Communication", "Komunikasi"),
      term("Problem solving"),
      term("Project coordination", "Koordinasi proyek"),
    ],
  },
];
