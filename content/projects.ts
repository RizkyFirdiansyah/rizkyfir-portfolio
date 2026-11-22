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
  /** Month range as printed on the CV, localised for display. */
  period: Record<Locale, string>;
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
    slug: "skinmatch",
    year: "2026",
    period: { en: "Sep 2026 — present", id: "Sep 2026 — sekarang" },
    stack: [
      "Python",
      "FastAPI",
      "MySQL",
      "PaddleOCR",
      "OpenCV",
      "Scikit-learn",
      "Flutter",
    ],
    links: {
      demo: "",
      repo: "",
    },
    copy: {
      en: {
        title: "SkinMatch",
        role: "Project Manager, System Analyst & Model Engineer",
        summary:
          "A skincare app that reads a product's ingredient list from a phone photo and matches it against four skin types — one team, one data model, one model pipeline.",
        thesis:
          "A recommendation is only as good as the list it reads. The hard part was never the screen; it was getting accurate text out of a photographed package.",
        sections: [
          {
            heading: "Context",
            paragraphs: [
              "A five-person project built around one question: can a photo of a product's packaging tell someone whether it suits their skin? The app reads the composition list, classifies the ingredients, and returns a match level for four skin types — oily and acne-prone, dry, sensitive, and normal.",
              "Three surfaces had to agree with each other: a Flutter client, a FastAPI service, and the model pipeline behind it. My work sat at the joins — requirements, the UML data flow, the MySQL entity model, and the extraction and classification code itself.",
            ],
          },
          {
            heading: "Scope",
            paragraphs: [
              "The work spanned coordination, system design, and the model, because none of the three could be decided alone.",
            ],
            list: [
              "Requirements analysis and a work breakdown structure for five people",
              "UML data flow and a MySQL entity model shared by app, API, and model",
              "Text extraction from packaging photos with OpenCV and PaddleOCR",
              "Multi-label classification with TF-IDF and LinearSVC",
              "FastAPI endpoints consumed by the Flutter client",
            ],
          },
          {
            heading: "Decisions",
            paragraphs: [
              "The pipeline is split into stages that fail separately. OpenCV finds and straightens the region worth reading, PaddleOCR turns it into text, and RapidFuzz repairs near-matches against the ingredient vocabulary. When a result is wrong, the stage that produced it can be pointed at.",
              "Classification is multi-label, not single-label. One product can suit more than one skin type, and a model forced to choose one would invent a decision the data does not support. TF-IDF with LinearSVC keeps the model inspectable, with weights that can be read per ingredient.",
              "MySQL holds products, ingredients, and their mapping; the model runs as a service, not as a library inside the app. The Flutter client never runs inference, so the phone stays a client and the model can be retrained without shipping an app update.",
              "Progress is tracked against the work breakdown structure, with a report at each milestone. Five people moving through the same pipeline need a written plan more than they need a meeting.",
            ],
          },
          {
            heading: "Outcome",
            paragraphs: [
              "The pipeline runs end to end: a packaging photo goes in, a cleaned ingredient list comes out, and the classifier returns a match level for all four skin types. The data model holds from the Flutter client down to the classifier, and the project is still running.",
            ],
          },
        ],
      },
      id: {
        title: "SkinMatch",
        role: "Manajer Proyek, Analis Sistem & Model Engineer",
        summary:
          "Aplikasi skincare yang membaca daftar komposisi dari foto kemasan dan mencocokkannya dengan empat tipe kulit — satu tim, satu model data, satu pipeline model.",
        thesis:
          "Rekomendasi hanya sebaik daftar yang dibacanya. Bagian tersulitnya bukan layar, melainkan mendapatkan teks yang akurat dari kemasan yang difoto.",
        sections: [
          {
            heading: "Konteks",
            paragraphs: [
              "Proyek lima orang yang dibangun dari satu pertanyaan: bisakah foto kemasan produk memberi tahu apakah produk itu cocok untuk kulit seseorang? Aplikasi membaca daftar komposisi, mengklasifikasikan kandungannya, lalu mengembalikan tingkat kecocokan untuk empat tipe kulit — berminyak/berjerawat, kering, sensitif, dan normal.",
              "Tiga permukaan harus saling sepakat: klien Flutter, layanan FastAPI, dan pipeline model di belakangnya. Pekerjaan saya berada di titik sambungnya — kebutuhan, alur data UML, model entitas MySQL, serta kode ekstraksi dan klasifikasi itu sendiri.",
            ],
          },
          {
            heading: "Cakupan",
            paragraphs: [
              "Pekerjaannya mencakup koordinasi, perancangan sistem, dan model, karena ketiganya tidak bisa diputuskan sendiri-sendiri.",
            ],
            list: [
              "Analisis kebutuhan dan work breakdown structure untuk lima orang",
              "Alur data UML dan model entitas MySQL yang dipakai aplikasi, API, dan model",
              "Ekstraksi teks dari foto kemasan dengan OpenCV dan PaddleOCR",
              "Klasifikasi multi-label dengan TF-IDF dan LinearSVC",
              "Endpoint FastAPI yang dikonsumsi klien Flutter",
            ],
          },
          {
            heading: "Keputusan",
            paragraphs: [
              "Pipeline dipecah menjadi tahap-tahap yang gagal secara terpisah. OpenCV menemukan dan menegakkan area yang layak dibaca, PaddleOCR mengubahnya menjadi teks, dan RapidFuzz memperbaiki kemiripan yang hampir cocok dengan kosakata kandungan. Saat hasilnya salah, tahap yang menghasilkannya bisa ditunjuk langsung.",
              "Klasifikasinya multi-label, bukan single-label. Satu produk bisa cocok untuk lebih dari satu tipe kulit, dan model yang dipaksa memilih satu akan mengarang keputusan yang tidak didukung data. TF-IDF dengan LinearSVC menjaga model tetap bisa diperiksa, dengan bobot yang bisa dibaca per kandungan.",
              "MySQL menyimpan produk, kandungan, dan pemetaannya; model berjalan sebagai layanan, bukan pustaka di dalam aplikasi. Klien Flutter tidak pernah menjalankan inferensi, sehingga ponsel tetap menjadi klien dan model bisa dilatih ulang tanpa merilis pembaruan aplikasi.",
              "Progres dipantau terhadap work breakdown structure, dengan laporan di setiap milestone. Lima orang yang bergerak di pipeline yang sama lebih membutuhkan rencana tertulis daripada rapat.",
            ],
          },
          {
            heading: "Hasil",
            paragraphs: [
              "Pipeline berjalan dari ujung ke ujung: foto kemasan masuk, daftar komposisi yang bersih keluar, dan pengklasifikasi mengembalikan tingkat kecocokan untuk keempat tipe kulit. Model data bertahan dari klien Flutter sampai ke pengklasifikasi, dan proyeknya masih berjalan.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "informasi-lomba",
    year: "2026",
    period: { en: "Apr — Jun 2026", id: "Apr — Jun 2026" },
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
              "The schema came first: competitions, participants, scores, bookmarks, articles, and the relations between them, mapped in Eloquent before any screen existed. Sanctum protects the API instead of sessions, which makes the client flow longer because a token has to be stored and sent, and removes the API's dependence on a browser session.",
              "The admin panel runs on Filament. I gave up fine control over that interface and got approval states, role restrictions, and content tables in weeks.",
              "Nothing publishes itself. Articles and information move through a review step that lives in the admin panel, so there is a delay between writing and publishing. A department page that announces an unverified scholarship deadline is worse than a page that waits.",
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
              "Skema datang lebih dulu: lomba, peserta, penilaian, bookmark, artikel, dan relasi di antaranya, dipetakan lewat Eloquent sebelum satu layar pun ada. Sanctum menjaga API, bukan session, sehingga alur klien lebih panjang karena token harus disimpan dan dikirim, tetapi API tidak lagi bergantung pada session browser.",
              "Panel admin memakai Filament. Kendali halus atas antarmuka itu saya lepaskan, dan sebagai gantinya status persetujuan, pembatasan peran, serta tabel konten siap dalam hitungan minggu.",
              "Tidak ada konten yang terbit sendiri. Artikel dan informasi melewati tahap peninjauan di panel admin, jadi ada jeda antara menulis dan menerbitkan. Halaman jurusan yang mengumumkan tenggat beasiswa tanpa verifikasi lebih buruk daripada halaman yang menunggu.",
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
  {
    slug: "profil-lab-ivss",
    year: "2025",
    period: { en: "Oct — Dec 2025", id: "Okt — Des 2025" },
    stack: ["PHP 8 (native)", "PostgreSQL", "PDO", "Bootstrap 5"],
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
              "Both systems share one PostgreSQL schema. Two separate applications would have been easier to reason about, but then a profile edited in the CMS and the profile the public reads could drift apart. One schema means the permission model has to be careful, because internal and public records sit in the same tables.",
              "There is no framework. PHP 8 handles routing, validation, and authentication directly, and every query is visible in the code. Maintainers lose the conventions Laravel would have supplied, and get a codebase where nothing happens off-screen.",
              "Roles were modelled once and then applied across every module. Each module carries its own check, but a role is defined in one place instead of being re-invented four times.",
              "Profile pages are content, not templates. The CMS validates and stores them, and the laboratory publishes without opening a code editor.",
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
              "Kedua sistem berbagi satu skema PostgreSQL. Dua aplikasi terpisah lebih mudah dinalar, tetapi profil yang diubah di CMS dan profil yang dibaca publik bisa berbeda. Dengan satu skema, model izin harus lebih hati-hati karena data internal dan publik duduk di tabel yang sama.",
              "Tidak ada framework. PHP 8 menangani routing, validasi, dan autentikasi langsung, dan setiap query terlihat di kode. Perawatnya kehilangan konvensi yang biasanya diberikan Laravel, dan mendapat kode yang tidak menyembunyikan apa pun.",
              "Peran dimodelkan sekali lalu diterapkan di seluruh modul. Setiap modul membawa pemeriksaan izinnya sendiri, tetapi sebuah peran didefinisikan di satu tempat, bukan ditemukan ulang empat kali.",
              "Halaman profil adalah konten, bukan template. CMS memvalidasi dan menyimpannya, dan laboratorium bisa menerbitkan tanpa membuka editor kode.",
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
];

export function getProjects(locale: Locale) {
  return projects.map((project) => ({
    slug: project.slug,
    year: project.year,
    period: project.period[locale],
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
    period: project.period[locale],
    stack: project.stack,
    links: project.links,
    copy: project.copy[locale],
  };
}

export function getFeaturedProjects(locale: Locale, limit = 3) {
  return getProjects(locale).slice(0, limit);
}
