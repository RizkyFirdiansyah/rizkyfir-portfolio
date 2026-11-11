import type { Locale } from "./locales";

export type Dictionary = {
  meta: {
    description: string;
  };
  nav: {
    work: string;
    about: string;
    resume: string;
    contact: string;
  };
  a11y: {
    primaryNav: string;
    languageSwitcher: string;
    skipToContent: string;
  };
  home: {
    tagline: string;
    lede: string;
    selected: string;
    allWork: string;
    aboutTitle: string;
    aboutTeaser: string;
    aboutLink: string;
    contactTitle: string;
    contactTeaser: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    empty: string;
  };
  caseStudy: {
    back: string;
    role: string;
    year: string;
    stack: string;
    demo: string;
    repo: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    skillsTitle: string;
    resumeLink: string;
  };
  resume: {
    eyebrow: string;
    title: string;
    intro: string;
    download: string;
    education: string;
    experience: string;
    certifications: string;
    awards: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  notFound: {
    code: string;
    title: string;
    body: string;
    back: string;
  };
  footer: {
    colophon: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      description:
        "Software developer and data analyst in Malang. Laravel, PostgreSQL, and Python, with a parallel practice coordinating events and weddings.",
    },
    nav: {
      work: "Work",
      about: "About",
      resume: "Resume",
      contact: "Contact",
    },
    a11y: {
      primaryNav: "Primary",
      languageSwitcher: "Language",
      skipToContent: "Skip to content",
    },
    home: {
      tagline: "Backends for lab systems, and weddings that cannot run late.",
      lede: "I am in my final year of D-IV Teknik Informatika at Politeknik Negeri Malang. Most days that means Laravel and PHP on the server, plain HTML and CSS in the browser, and Python when a dataset needs an answer.",
      selected: "Selected work",
      allWork: "All work",
      aboutTitle: "About",
      aboutTeaser:
        "During the week I work on schemas and endpoints. Outside campus I am the person with the runsheet, checking that the caterer arrived before the guests.",
      aboutLink: "More about me",
      contactTitle: "Contact",
      contactTeaser: "Email, phone, or LinkedIn. Pick the one you actually check.",
    },
    work: {
      eyebrow: "Work",
      title: "Selected work",
      intro:
        "Two systems I built end to end: a laboratory profile with its own CMS, and a department platform for competitions, scholarships, and articles.",
      empty: "No projects published yet.",
    },
    caseStudy: {
      back: "All work",
      role: "Role",
      year: "Year",
      stack: "Stack",
      demo: "View live",
      repo: "Repository",
    },
    about: {
      eyebrow: "About",
      title: "Software, data, and the occasional wedding",
      intro:
        "I study D-IV Teknik Informatika at Politeknik Negeri Malang, build web backends in Laravel and PHP, and work with data in Python and SQL. Outside campus I coordinate events and weddings.",
      paragraphs: [
        "Most of my work is backend: relational schemas, REST APIs, access rules, and the approval flows that decide when something is allowed to appear. I like the part where a data model has to survive contact with real users — a bookmark that must be unique, a role that must not see a menu, a deadline that must be verified before it is published.",
        "The coordination work is not a detour. Running an event means holding a schedule with other people, where a missed detail is visible immediately and cannot be patched after deployment. It taught me to write things down, to confirm before assuming, and to keep a plan simple enough that a tired person can follow it at six in the morning.",
        "On both projects I wrote the schema and the access rules first. Those are the parts that are expensive to change once people start using them.",
      ],
      skillsTitle: "Skills",
      resumeLink: "Education, experience, and certifications",
    },
    resume: {
      eyebrow: "Resume",
      title: "Record",
      intro:
        "Education, work, certifications, and one award. The PDF version is the same record, formatted for printing.",
      download: "Download CV",
      education: "Education",
      experience: "Experience",
      certifications: "Certifications",
      awards: "Award",
    },
    contact: {
      eyebrow: "Contact",
      title: "Say hello",
      intro:
        "I read every message. Short and specific gets a faster reply than a long brief.",
      note: "For work enquiries, include the problem, the timeline, and what has already been tried.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    notFound: {
      code: "404",
      title: "This page does not exist.",
      body: "The address may have changed, or the link was mistyped.",
      back: "Back to home",
    },
    footer: {
      colophon: "Set in Instrument Serif, Instrument Sans, and JetBrains Mono.",
    },
  },
  id: {
    meta: {
      description:
        "Software developer dan data analyst di Malang. Laravel, PostgreSQL, dan Python, dengan kegiatan paralel mengoordinasikan acara dan pernikahan.",
    },
    nav: {
      work: "Karya",
      about: "Tentang",
      resume: "Riwayat",
      contact: "Kontak",
    },
    a11y: {
      primaryNav: "Utama",
      languageSwitcher: "Bahasa",
      skipToContent: "Lewati ke konten",
    },
    home: {
      tagline: "Backend untuk sistem laboratorium, dan pernikahan yang tak boleh molor.",
      lede: "Saya sedang menempuh tahun terakhir D-IV Teknik Informatika di Politeknik Negeri Malang. Sebagian besar harinya Laravel dan PHP di server, HTML dan CSS biasa di browser, dan Python saat sebuah dataset butuh jawaban.",
      selected: "Karya pilihan",
      allWork: "Semua karya",
      aboutTitle: "Tentang",
      aboutTeaser:
        "Di hari kerja saya mengurus skema dan endpoint. Di luar kampus saya orang yang memegang runsheet, memastikan katering datang sebelum tamu.",
      aboutLink: "Selengkapnya tentang saya",
      contactTitle: "Kontak",
      contactTeaser: "Email, telepon, atau LinkedIn. Pilih yang benar-benar Anda buka.",
    },
    work: {
      eyebrow: "Karya",
      title: "Karya pilihan",
      intro:
        "Dua sistem yang saya bangun dari awal sampai rilis: profil laboratorium dengan CMS-nya, dan platform jurusan untuk lomba, beasiswa, serta artikel.",
      empty: "Belum ada proyek yang diterbitkan.",
    },
    caseStudy: {
      back: "Semua karya",
      role: "Peran",
      year: "Tahun",
      stack: "Stack",
      demo: "Lihat situs",
      repo: "Repositori",
    },
    about: {
      eyebrow: "Tentang",
      title: "Software, data, dan sesekali pernikahan",
      intro:
        "Saya menempuh D-IV Teknik Informatika di Politeknik Negeri Malang, membangun backend web dengan Laravel dan PHP, serta mengolah data dengan Python dan SQL. Di luar kampus saya mengoordinasikan acara dan pernikahan.",
      paragraphs: [
        "Sebagian besar pekerjaan saya ada di backend: skema relasional, REST API, aturan akses, dan alur persetujuan yang menentukan kapan sesuatu boleh tampil. Saya menyukai bagian ketika model data harus bertahan saat bertemu pengguna nyata — bookmark yang tidak boleh ganda, peran yang tidak boleh melihat menu tertentu, tenggat yang harus diverifikasi sebelum terbit.",
        "Kerja koordinasi bukan pengalihan. Menjalankan acara berarti memegang jadwal bersama orang lain, tempat detail yang terlewat langsung terlihat dan tidak bisa ditambal setelah rilis. Dari situ saya belajar mencatat, memastikan sebelum menganggap, dan menjaga rencana cukup sederhana agar orang yang lelah pukul enam pagi masih bisa mengikutinya.",
        "Di kedua proyek saya menulis skema dan aturan akses lebih dulu. Itu bagian yang paling mahal diubah setelah orang mulai memakainya.",
      ],
      skillsTitle: "Keahlian",
      resumeLink: "Pendidikan, pengalaman, dan sertifikasi",
    },
    resume: {
      eyebrow: "Riwayat",
      title: "Rekam jejak",
      intro:
        "Pendidikan, pengalaman, sertifikasi, dan satu penghargaan. Versi PDF berisi catatan yang sama, diformat untuk dicetak.",
      download: "Unduh CV",
      education: "Pendidikan",
      experience: "Pengalaman",
      certifications: "Sertifikasi",
      awards: "Penghargaan",
    },
    contact: {
      eyebrow: "Kontak",
      title: "Sapa saya",
      intro:
        "Saya membaca setiap pesan. Pesan singkat dan spesifik lebih cepat dijawab daripada brief panjang.",
      note: "Untuk tawaran kerja, sertakan masalahnya, tenggat, dan apa yang sudah dicoba.",
      email: "Email",
      phone: "Telepon",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    notFound: {
      code: "404",
      title: "Halaman ini tidak ada.",
      body: "Alamatnya mungkin sudah berubah, atau tautannya salah ketik.",
      back: "Kembali ke beranda",
    },
    footer: {
      colophon: "Disusun dengan Instrument Serif, Instrument Sans, dan JetBrains Mono.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
