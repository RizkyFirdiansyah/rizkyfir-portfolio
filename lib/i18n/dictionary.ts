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
    eyebrow: string;
    tagline: string;
    note: string;
    styleguide: string;
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
      eyebrow: "Foundation preview",
      tagline: "{{TAGLINE}}",
      note: "Tokens and typography are in place. Public pages come next.",
      styleguide: "Open the style guide",
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
      eyebrow: "Pratinjau fondasi",
      tagline: "{{TAGLINE}}",
      note: "Token dan tipografi sudah siap. Halaman publik menyusul.",
      styleguide: "Buka panduan gaya",
    },
    footer: {
      colophon: "Disusun dengan Instrument Serif, Instrument Sans, dan JetBrains Mono.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
