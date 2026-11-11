import type { Locale } from "@/lib/i18n/locales";

export type ProjectSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type ProjectCopy = {
  title: string;
  role: string;
  summary: string;
  thesis: string;
  sections: ProjectSection[];
};

export type ProjectLinks = {
  /** Leave empty to hide the "view live" link. */
  demo?: string;
  /** Leave empty to hide the repository link. */
  repo?: string;
};

export type Project = {
  slug: string;
  year: string;
  stack: string[];
  links: ProjectLinks;
  copy: Record<Locale, ProjectCopy>;
};

/**
 * Real project data. Outcome sections describe what was delivered;
 * no usage figures have been added because none are verified.
 */
export const projects: Project[] = [
  {
    slug: "profil-lab-ivss",
    year: "2026",
    stack: ["PHP 8", "PostgreSQL", "PDO", "Bootstrap 5"],
    links: {
      demo: "",
      repo: "",
    },
    copy: {
      en: {
        title: "Web Profil & CMS Laboratorium IVSS",
        role: "Project Manager, System Analyst & Software Engineer",
        summary:
          "A public profile site and an internal CMS for the Intelligent Vision and Smart System laboratory, sharing one database and three access levels.",
        thesis:
          "Two systems, one database. A public profile and an internal CMS must not grow into two versions of the truth.",
        sections: [
          {
            heading: "Context",
            paragraphs: [
              "Built for Laboratorium Intelligent Vision and Smart System at Politeknik Negeri Malang. The laboratory needed a public profile — who works there, which facilities it runs, what it has been doing — and an internal CMS for the records behind that profile.",
              "Both were delivered as one application on a single PostgreSQL schema, with three access levels: head of laboratory, lecturer, and student.",
            ],
          },
          {
            heading: "Scope",
            paragraphs: [
              "Module by module, the CMS covers the data the laboratory actually operates on.",
            ],
            list: [
              "User management for the three roles",
              "Facility inventory",
              "Activity gallery",
              "Dynamic profile pages managed from the CMS",
            ],
          },
          {
            heading: "Decisions",
            paragraphs: [
              "One database for both systems, instead of two applications. The tradeoff is a more delicate schema and permission model, because public and internal records sit next to each other; the gain is that a profile edited in the CMS is the same record the public site reads.",
              "PHP 8 with PDO, no framework. Routing, validation, and authentication are written by hand. The tradeoff is more code to maintain and no framework conventions to lean on; the benefit is that every query and permission check is visible in the codebase.",
              "Access control is modelled once for three roles and applied across every module, rather than being decided screen by screen. The tradeoff is a permission check inside each module; the benefit is that a role is defined in one place instead of being re-invented four times.",
              "Profile content is managed through the CMS instead of being hardcoded into templates. The tradeoff is that the CMS needs validation and an editing flow; the benefit is that the laboratory can publish without a developer.",
            ],
          },
          {
            heading: "Outcome",
            paragraphs: [
              "Delivered with four working modules — users, facility inventory, activity gallery, and dynamic profile — behind a three-level access model. Updating the laboratory's public information no longer requires editing code.",
            ],
          },
        ],
      },
      id: {
        title: "Web Profil & CMS Laboratorium IVSS",
        role: "Manajer Proyek, Analis Sistem & Software Engineer",
        summary:
          "Situs profil publik dan CMS internal untuk Laboratorium Intelligent Vision and Smart System, berbagi satu basis data dan tiga tingkat akses.",
        thesis:
          "Dua sistem, satu basis data. Situs profil dan CMS internal tidak boleh tumbuh menjadi dua versi kebenaran yang berbeda.",
        sections: [
          {
            heading: "Konteks",
            paragraphs: [
              "Dibangun untuk Laboratorium Intelligent Vision and Smart System, Politeknik Negeri Malang. Laboratorium membutuhkan profil publik — siapa yang bekerja di sana, fasilitas apa yang dikelola, kegiatan apa yang sudah berjalan — sekaligus CMS internal untuk data di balik profil tersebut.",
              "Keduanya diserahkan sebagai satu aplikasi di atas satu skema PostgreSQL, dengan tiga tingkat akses: Kepala Lab, Dosen, dan Mahasiswa.",
            ],
          },
          {
            heading: "Cakupan",
            paragraphs: [
              "Modul per modul, CMS menutup data yang benar-benar dioperasikan laboratorium.",
            ],
            list: [
              "Manajemen pengguna untuk tiga peran",
              "Inventori fasilitas laboratorium",
              "Galeri kegiatan",
              "Halaman profil dinamis yang dikelola dari CMS",
            ],
          },
          {
            heading: "Keputusan",
            paragraphs: [
              "Satu basis data untuk dua sistem, bukan dua aplikasi terpisah. Konsekuensinya skema dan model izin lebih rawan, karena data publik dan internal bersebelahan; manfaatnya, profil yang diubah di CMS adalah record yang sama dengan yang dibaca situs publik.",
              "PHP 8 dengan PDO, tanpa framework. Routing, validasi, dan autentikasi ditulis manual. Konsekuensinya lebih banyak kode untuk dirawat dan tidak ada konvensi framework yang bisa diandalkan; manfaatnya, setiap query dan pemeriksaan izin terlihat di dalam kode.",
              "Hak akses dimodelkan sekali untuk tiga peran lalu diterapkan di seluruh modul, bukan diputuskan layar per layar. Konsekuensinya ada pemeriksaan izin di dalam setiap modul; manfaatnya, sebuah peran didefinisikan di satu tempat dan tidak ditemukan ulang empat kali.",
              "Konten profil dikelola lewat CMS, bukan ditulis mati di template. Konsekuensinya CMS butuh validasi dan alur penyuntingan; manfaatnya, laboratorium bisa menerbitkan tanpa menunggu developer.",
            ],
          },
          {
            heading: "Hasil",
            paragraphs: [
              "Diserahkan dengan empat modul yang berjalan — pengguna, inventori fasilitas, galeri kegiatan, dan profil dinamis — di balik model akses tiga tingkat. Memperbarui informasi publik laboratorium tidak lagi memerlukan perubahan kode.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "informasi-lomba",
    year: "2025",
    stack: ["Laravel 12", "Filament", "Sanctum", "MySQL"],
    links: {
      demo: "",
      repo: "",
    },
    copy: {
      en: {
        title: "Web Informasi Lomba Jurusan",
        role: "Backend Developer & System Analyst",
        summary:
          "One platform for the department's competitions, scholarships, seminars, and educational articles — student interface, REST API, and a single admin panel.",
        thesis:
          "Academic information does not disappear because it is missing. It disappears because it is scattered across channels nobody owns.",
        sections: [
          {
            heading: "Context",
            paragraphs: [
              "A Project-Based Learning project for the department: one platform where students find and manage academic and non-academic opportunities — competitions, scholarships, seminars, and educational articles.",
              "Three surfaces had to stay consistent with each other: the student interface, a REST API, and a central admin panel. Everything I designed sat between them — the schema, the endpoints, and the rules that decide what is published.",
            ],
          },
          {
            heading: "Scope",
            paragraphs: [
              "The student side is not a notice board; it carries the data a student needs to act on an opportunity.",
            ],
            list: [
              "Bookmarks and interests, with likes and CV management on the profile",
              "Feedback and collaborator registration",
              "Competition data, participants, and scoring",
              "Approval workflow for information and articles before publishing",
            ],
          },
          {
            heading: "Decisions",
            paragraphs: [
              "I designed the relational schema and the entity flow first, mapping the relationships through Eloquent, then built the business logic in Laravel 12. API endpoints are protected with Sanctum instead of session authentication. The tradeoff is a more involved client flow — a token has to be stored and sent with every request — but the API no longer depends on a web session.",
              "The admin panel runs on Filament rather than a hand-built interface. That gives up fine control over the admin UI; in exchange, approval states, role restrictions, and content tables were available in weeks, not months.",
              "Nothing publishes itself. Information and articles move through an approval workflow before they appear, and that workflow lives in the admin panel rather than in the public interface. The tradeoff is a delay between writing and publishing — but a department page that announces an unverified scholarship deadline is worse than a slow one.",
            ],
          },
          {
            heading: "Outcome",
            paragraphs: [
              "Delivered as a working platform: a student-facing interface, a protected REST API, and an admin panel covering competitions, participants, scoring, and collaborator requests. The approval workflow is enforced where content is created, not where it is displayed.",
            ],
          },
        ],
      },
      id: {
        title: "Web Informasi Lomba Jurusan",
        role: "Backend Developer & Analis Sistem",
        summary:
          "Satu platform untuk lomba, beasiswa, seminar, dan artikel edukatif jurusan — antarmuka mahasiswa, REST API, dan satu panel admin.",
        thesis:
          "Informasi akademik tidak hilang karena tidak ada. Ia hilang karena tersebar di kanal yang tidak dimiliki siapa pun.",
        sections: [
          {
            heading: "Konteks",
            paragraphs: [
              "Proyek Project-Based Learning untuk jurusan: satu platform tempat mahasiswa menemukan dan mengelola peluang akademik maupun non-akademik — lomba, beasiswa, seminar, dan artikel edukatif.",
              "Tiga permukaan harus tetap konsisten: antarmuka mahasiswa, REST API, dan panel admin terpusat. Semua yang saya rancang berada di antara ketiganya — skema data, endpoint, dan aturan yang menentukan apa yang boleh terbit.",
            ],
          },
          {
            heading: "Cakupan",
            paragraphs: [
              "Sisi mahasiswa bukan papan pengumuman; ia membawa data yang dibutuhkan untuk benar-benar mengambil peluang.",
            ],
            list: [
              "Bookmark dan peminatan, dengan likes serta manajemen CV di profil",
              "Umpan balik dan pengajuan pendaftaran kolaborator",
              "Data lomba, peserta, dan penilaian",
              "Alur persetujuan informasi dan artikel sebelum diterbitkan",
            ],
          },
          {
            heading: "Keputusan",
            paragraphs: [
              "Saya merancang skema relasional dan alur relasi entitas lebih dulu, memetakan relasinya lewat Eloquent, lalu membangun logika bisnis di Laravel 12. Endpoint API dilindungi Sanctum, bukan autentikasi session. Konsekuensinya alur di sisi klien lebih panjang — token harus disimpan dan dikirim di setiap permintaan — tetapi API tidak lagi bergantung pada session web.",
              "Panel admin memakai Filament, bukan antarmuka buatan sendiri. Kendali atas UI admin jadi lebih kecil; sebagai gantinya, status persetujuan, pembatasan peran, dan tabel konten siap dalam hitungan minggu, bukan bulan.",
              "Tidak ada konten yang terbit sendiri. Informasi dan artikel melewati alur persetujuan sebelum tampil, dan alur itu berada di panel admin, bukan di antarmuka publik. Konsekuensinya ada jeda antara menulis dan menerbitkan — tetapi halaman jurusan yang mengumumkan tenggat beasiswa tanpa verifikasi lebih buruk daripada halaman yang lambat.",
            ],
          },
          {
            heading: "Hasil",
            paragraphs: [
              "Diserahkan sebagai platform yang berjalan: antarmuka mahasiswa, REST API terproteksi, dan panel admin yang menangani data lomba, peserta, penilaian, serta pengajuan kolaborator. Alur persetujuan ditegakkan di tempat konten dibuat, bukan di tempat konten ditampilkan.",
            ],
          },
        ],
      },
    },
  },
];

export function getProjects(locale: Locale) {
  return projects.map((project) => ({
    slug: project.slug,
    year: project.year,
    stack: project.stack,
    links: project.links,
    copy: project.copy[locale],
  }));
}

export function getProject(locale: Locale, slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;

  return {
    slug: project.slug,
    year: project.year,
    stack: project.stack,
    links: project.links,
    copy: project.copy[locale],
  };
}

export function getFeaturedProjects(locale: Locale, limit = 3) {
  return getProjects(locale).slice(0, limit);
}
