import type { Locale } from "./locales";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    about: string;
    contact: string;
  };
  a11y: {
    primaryNav: string;
    languageSwitcher: string;
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
    read: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    focusTitle: string;
    focus: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailLabel: string;
    note: string;
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
      title: "{{NAME}} — {{POSITION}}",
      description: "{{TAGLINE}}",
    },
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    a11y: {
      primaryNav: "Primary",
      languageSwitcher: "Language",
    },
    home: {
      tagline: "{{TAGLINE}}",
      lede: "I build interfaces where structure does the work, not decoration. Most of my time goes into design systems, frontend architecture, and the unglamorous parts that make a product feel calm.",
      selected: "Selected work",
      allWork: "All work",
      aboutTitle: "About",
      aboutTeaser:
        "I work best close to the code and close to the decisions behind it: naming tokens, cutting components, writing the copy that explains a choice.",
      aboutLink: "More about me",
      contactTitle: "Contact",
      contactTeaser: "The fastest way to reach me is email.",
    },
    work: {
      eyebrow: "Work",
      title: "Selected work",
      intro:
        "Three projects, described by the constraints they had and the decisions they forced. No process diagrams.",
      empty: "No projects published yet.",
    },
    caseStudy: {
      back: "All work",
      role: "Role",
      year: "Year",
      stack: "Stack",
      read: "Read case study",
    },
    about: {
      eyebrow: "About",
      title: "How I work",
      intro:
        "I am a frontend engineer who spends as much time on naming and structure as on the interface itself.",
      paragraphs: [
        "I started with static sites, moved into product work, and stayed because the interesting problems live at the boundary between design and implementation: what a component is allowed to know, which decision belongs in a token, and when a pattern should be deleted rather than documented.",
        "My default is to reduce. Fewer components, fewer variants, fewer states that nobody tests. Most interface problems I have seen were not missing features but overlapping ones, and the work was deciding which version survives.",
        "I write documentation while building, not after. If a decision cannot be explained in two sentences, it usually means the decision is not finished.",
      ],
      focusTitle: "Focus",
      focus: [
        "Design systems and design tokens",
        "Frontend architecture in React and Next.js",
        "Accessibility as a correctness issue, not a checklist",
        "Interface copy in Indonesian and English",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Say hello",
      intro:
        "I read every message. Short and specific gets a faster reply than a long brief.",
      emailLabel: "Email",
      note: "For work enquiries, include the problem, the timeline, and what has already been tried.",
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
      title: "{{NAME}} — {{POSITION}}",
      description: "{{TAGLINE}}",
    },
    nav: {
      work: "Karya",
      about: "Tentang",
      contact: "Kontak",
    },
    a11y: {
      primaryNav: "Utama",
      languageSwitcher: "Bahasa",
    },
    home: {
      tagline: "{{TAGLINE}}",
      lede: "Saya membangun antarmuka yang kekuatannya ada pada struktur, bukan dekorasi. Sebagian besar waktu saya habis di design system, arsitektur frontend, dan bagian tidak menarik yang membuat produk terasa tenang.",
      selected: "Karya pilihan",
      allWork: "Semua karya",
      aboutTitle: "Tentang",
      aboutTeaser:
        "Saya bekerja paling baik dekat dengan kode sekaligus dekat dengan keputusan di baliknya: menamai token, memangkas komponen, menulis teks yang menjelaskan sebuah pilihan.",
      aboutLink: "Selengkapnya tentang saya",
      contactTitle: "Kontak",
      contactTeaser: "Cara tercepat menghubungi saya adalah email.",
    },
    work: {
      eyebrow: "Karya",
      title: "Karya pilihan",
      intro:
        "Tiga proyek, dijelaskan lewat batasan yang dihadapi dan keputusan yang harus diambil. Tanpa diagram proses.",
      empty: "Belum ada proyek yang diterbitkan.",
    },
    caseStudy: {
      back: "Semua karya",
      role: "Peran",
      year: "Tahun",
      stack: "Stack",
      read: "Baca case study",
    },
    about: {
      eyebrow: "Tentang",
      title: "Cara saya bekerja",
      intro:
        "Saya frontend engineer yang menghabiskan waktu sama banyak untuk penamaan dan struktur, seperti untuk antarmukanya sendiri.",
      paragraphs: [
        "Saya mulai dari situs statis, pindah ke pekerjaan produk, dan bertahan karena masalah menariknya ada di batas antara desain dan implementasi: apa yang boleh diketahui sebuah komponen, keputusan mana yang layak jadi token, dan kapan sebuah pattern sebaiknya dihapus daripada didokumentasikan.",
        "Default saya adalah mengurangi. Lebih sedikit komponen, lebih sedikit varian, lebih sedikit state yang tidak pernah diuji. Sebagian besar masalah antarmuka yang saya temui bukan fitur yang kurang, melainkan fitur yang bertumpuk, dan pekerjaannya adalah memutuskan versi mana yang bertahan.",
        "Saya menulis dokumentasi sambil membangun, bukan setelahnya. Kalau sebuah keputusan tidak bisa dijelaskan dalam dua kalimat, biasanya keputusan itu belum selesai.",
      ],
      focusTitle: "Fokus",
      focus: [
        "Design system dan design token",
        "Arsitektur frontend di React dan Next.js",
        "Aksesibilitas sebagai soal kebenaran, bukan checklist",
        "Teks antarmuka dalam bahasa Indonesia dan Inggris",
      ],
    },
    contact: {
      eyebrow: "Kontak",
      title: "Sapa saya",
      intro:
        "Saya membaca setiap pesan. Pesan singkat dan spesifik lebih cepat dijawab daripada brief panjang.",
      emailLabel: "Email",
      note: "Untuk tawaran kerja, sertakan masalahnya, tenggat, dan apa yang sudah dicoba.",
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
