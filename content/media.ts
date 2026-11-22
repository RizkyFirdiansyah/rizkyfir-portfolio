import type { Locale } from "@/lib/i18n/locales";

/**
 * Every image on the site is declared here. To swap a photograph, replace the
 * file in `public/images/`, update `src`, `width`, and `height` if the file
 * changed shape, then rewrite `alt` and `caption`.
 */
export type FigureMedia = {
  src: string;
  width: number;
  height: number;
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
};

const portrait: FigureMedia = {
  src: "/images/portrait.jpg",
  width: 800,
  height: 800,
  alt: {
    en: "Rizky, wearing glasses, a black blazer, and a white shirt, standing in a decorated event hall.",
    id: "Rizky berkacamata dengan blazer hitam dan kemeja putih, berdiri di aula acara yang didekorasi.",
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

const ivssProduct: FigureMedia = {
  src: "/images/ivss-02.jpeg",
  width: 1920,
  height: 1080,
  alt: {
    en: "Lab IVSS homepage: a blue navigation bar above a photograph of the campus building, with the laboratory name and a short research statement.",
    id: "Beranda Lab IVSS: bilah navigasi biru di atas foto gedung kampus, dengan nama laboratorium dan pernyataan riset singkat.",
  },
  caption: {
    en: "The public profile, served from the same schema as the CMS.",
    id: "Profil publik, dilayani dari skema yang sama dengan CMS.",
  },
};

const ivssTeam: FigureMedia = {
  src: "/images/ivss-01.png",
  width: 960,
  height: 1280,
  alt: {
    en: "Five students in matching blue campus shirts in front of the Jurusan Teknologi Informasi wall; two of them hold laptops.",
    id: "Lima mahasiswa berkemeja biru kampus di depan dinding Jurusan Teknologi Informasi; dua di antaranya memegang laptop.",
  },
  caption: {
    en: "The project team at the department.",
    id: "Tim proyek di jurusan.",
  },
};

const lombaTeam: FigureMedia = {
  src: "/images/lomba-01.jpg",
  width: 960,
  height: 1280,
  alt: {
    en: "Three students in blazers on a stage, holding a third-place certificate for the ICT business category.",
    id: "Tiga mahasiswa berblazer di atas panggung, memegang sertifikat Juara 3 bidang bisnis TIK.",
  },
  caption: {
    en: "Third place, ICT business category.",
    id: "Juara 3, bidang bisnis TIK.",
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

const eventDay: FigureMedia = {
  src: "/images/event-01.jpg",
  width: 960,
  height: 1280,
  alt: {
    en: "Rizky standing outdoors in a blue batik vest and white shirt, arms folded, beside a tree and broad leaves.",
    id: "Rizky berdiri di luar ruangan dengan rompi batik biru dan kemeja putih, tangan terlipat, di samping pohon dan daun lebar.",
  },
};

const skinMatch: FigureMedia = {
  src: "/images/skinmatch-pipeline.png",
  width: 2400,
  height: 1600,
  alt: {
    en: "Pipeline diagram: a packaging photo passes through OpenCV and PaddleOCR extraction, then a TF-IDF and LinearSVC classifier, ending in four skin-type categories.",
    id: "Diagram pipeline: foto kemasan melewati ekstraksi OpenCV dan PaddleOCR, lalu klasifikasi TF-IDF dan LinearSVC, berakhir di empat kategori tipe kulit.",
  },
  caption: {
    en: "From packaging photo to four skin-type matches.",
    id: "Dari foto kemasan ke empat kecocokan tipe kulit.",
  },
};

export const figures = {
  portrait,
  homeBand,
  ivssProduct,
  ivssTeam,
  lombaTeam,
  lombaApproval,
  eventDay,
  skinMatch,
};

export const ogImage = "/og.png";
