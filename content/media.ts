import type { Locale } from "@/lib/i18n/locales";

/**
 * Every image on the site is declared here. To swap the generated plates for
 * photographs, replace the file in `public/images/`, update `src`, `width`,
 * and `height` if the file changed shape, then rewrite `alt` and `caption`.
 */
export type FigureMedia = {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
};

const portrait: FigureMedia = {
  src: "/images/portrait.png",
  width: 1200,
  height: 1500,
  alt: {
    en: "Letterpress-style plate with the full name, both roles, and the city.",
    id: "Plat tipografi berisi nama lengkap, dua peran, dan kota.",
  },
};

const homeBand: FigureMedia = {
  src: "/images/home-band.png",
  width: 2400,
  height: 1600,
  alt: {
    en: "Wide plate naming Malang with its coordinates and a hairline grid.",
    id: "Plat lebar bertuliskan Malang, koordinatnya, dan grid hairline.",
  },
};

const ivssSchema: FigureMedia = {
  src: "/images/ivss-01.png",
  width: 2400,
  height: 1600,
  alt: {
    en: "Relational schema diagram: users, roles, profile pages, facilities, and gallery, with role_id and updated_by relations.",
    id: "Diagram skema relasional: users, roles, profile pages, facilities, dan gallery, dengan relasi role_id dan updated_by.",
  },
  caption: {
    en: "One schema for the public profile and the internal CMS.",
    id: "Satu skema untuk profil publik dan CMS internal.",
  },
};

const ivssModules: FigureMedia = {
  src: "/images/ivss-02.png",
  width: 2400,
  height: 1600,
  alt: {
    en: "Four module blocks: user management, facility inventory, activity gallery, and dynamic profile, beside the three roles.",
    id: "Empat blok modul: manajemen pengguna, inventori fasilitas, galeri kegiatan, dan profil dinamis, di samping tiga peran.",
  },
  caption: {
    en: "Four modules behind one admin panel.",
    id: "Empat modul di balik satu panel admin.",
  },
};

const lombaFlow: FigureMedia = {
  src: "/images/lomba-01.png",
  width: 2400,
  height: 1600,
  alt: {
    en: "Entity flow from users and bookmarks through competitions, participants, and scores, plus articles moving through approvals to the public site.",
    id: "Alur entitas dari pengguna dan bookmark ke lomba, peserta, dan penilaian, serta artikel yang melewati persetujuan menuju situs publik.",
  },
  caption: {
    en: "From a saved bookmark to a published score.",
    id: "Dari bookmark yang disimpan sampai nilai yang terbit.",
  },
};

const lombaApproval: FigureMedia = {
  src: "/images/lomba-02.png",
  width: 2400,
  height: 1600,
  alt: {
    en: "Approval diagram: draft goes to review, then published or rejected, with rejected returning to the author.",
    id: "Diagram persetujuan: draf masuk peninjauan, lalu terbit atau ditolak, dan yang ditolak kembali ke penulis.",
  },
  caption: {
    en: "Approval happens where content is written.",
    id: "Persetujuan terjadi di tempat konten ditulis.",
  },
};

const eventRunsheet: FigureMedia = {
  src: "/images/event-01.png",
  width: 2400,
  height: 1600,
  alt: {
    en: "Event runsheet template with time, cue, and owner columns from 06:00 to 16:00.",
    id: "Template runsheet acara dengan kolom waktu, cue, dan penanggung jawab dari pukul 06.00 sampai 16.00.",
  },
  caption: {
    en: "A template, not a record of one wedding.",
    id: "Sebuah template, bukan catatan satu pernikahan.",
  },
};

export const figures = {
  portrait,
  homeBand,
  ivssSchema,
  ivssModules,
  lombaFlow,
  lombaApproval,
  eventRunsheet,
};

export const ogImage = "/og.png";
