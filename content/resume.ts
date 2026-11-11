import type { Locale } from "@/lib/i18n/locales";

type Localized = Record<Locale, string>;

export type EducationEntry = {
  period: Localized;
  institution: string;
  programme: string;
};

export type ExperienceEntry = {
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
  items: string[];
};

/**
 * Programmes are kept verbatim so the site matches the PDF CV.
 * Grades are intentionally not published here; they stay in the PDF.
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

export const experience: ExperienceEntry[] = [
  {
    period: { en: "Nov 2025 — present", id: "Nov 2025 — sekarang" },
    role: {
      en: "Creative Education Staff",
      id: "Staff Edukasi Kreatif",
    },
    organisation: "Polinema Mengajar",
    detail: {
      en: "Teaching and mentoring students at community learning centres and orphanages.",
      id: "Mengajar dan mendampingi siswa di rumah belajar dan panti asuhan.",
    },
  },
  {
    period: { en: "2024 — present", id: "2024 — sekarang" },
    role: { en: "Event Crew (freelance)", id: "Event Crew (freelance)" },
    organisation: "Freelance",
    detail: {
      en: "Coordinating technical and operational needs with the crew so a run-of-show holds, and acting as the link between vendors and clients from preparation through the event day.",
      id: "Mengoordinasikan kebutuhan teknis dan operasional bersama tim agar rangkaian acara berjalan sesuai rundown, sekaligus menjadi penghubung antara vendor dan klien sejak persiapan hingga hari pelaksanaan.",
    },
  },
  {
    period: { en: "Jul — Dec 2023", id: "Jul — Des 2023" },
    role: {
      en: "Front-End Web Developer Intern",
      id: "Magang Front-End Web Developer",
    },
    organisation: "CV. Javawebster Teknologi Pintar",
    detail: {
      en: "Turned UI designs into responsive interfaces with HTML, CSS, JavaScript, Bootstrap, and Tailwind; tested and fixed front-end bugs across browsers and devices.",
      id: "Mengimplementasikan desain UI menjadi antarmuka responsif dengan HTML, CSS, JavaScript, Bootstrap, dan Tailwind CSS; menguji dan memperbaiki bug front-end di berbagai browser dan perangkat.",
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
      "Memulai Pemrograman dengan Python",
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
      en: "ICT business category, as team lead.",
      id: "Bidang bisnis TIK, sebagai ketua tim.",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: { en: "Backend", id: "Backend" },
    items: ["PHP (Laravel, Filament)", "REST API", "MySQL", "PostgreSQL"],
  },
  {
    label: { en: "Frontend", id: "Frontend" },
    items: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "Tailwind CSS"],
  },
  {
    label: { en: "Tools & analysis", id: "Tools & analisis" },
    items: ["Git", "System analysis", "UML", "Figma", "Python", "Excel"],
  },
];
