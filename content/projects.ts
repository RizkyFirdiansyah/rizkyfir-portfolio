/**
 * SAMPLE CONTENT — replace before publishing.
 * Project names, roles, and figures are placeholders used to test the layout.
 * The structure is intentional: each case study must state constraints,
 * decisions with tradeoffs, and a verifiable outcome.
 */
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

export type Project = {
  slug: string;
  year: string;
  stack: string[];
  copy: Record<Locale, ProjectCopy>;
};

export const projects: Project[] = [
  {
    slug: "atlas",
    year: "2025",
    stack: ["TypeScript", "React", "Tailwind", "Turborepo"],
    copy: {
      en: {
        title: "Atlas",
        role: "Design system",
        summary:
          "A component library rebuilt around tokens so three product teams could stop shipping three different buttons.",
        thesis:
          "The problem was not missing components. It was that every team had quietly forked the scale.",
        sections: [
          {
            heading: "Context",
            paragraphs: [
              "Atlas started as a folder of 41 components with no shared spacing scale, no color names, and four different ways to express a border radius. Each product team had a local patch file.",
              "The brief was to consolidate, but the real constraint was that no product team could pause feature work for a migration.",
            ],
          },
          {
            heading: "Constraints",
            paragraphs: [
              "Two weeks between releases, no dedicated design engineer, and a public API already consumed by eight repositories.",
            ],
            list: [
              "Existing imports had to keep working for two minor versions.",
              "Any visual change had to be reviewable in a single pull request.",
              "No new runtime dependency was allowed.",
            ],
          },
          {
            heading: "Decisions",
            paragraphs: [
              "I kept the old component API and replaced only the internals, mapping every hardcoded value to a token in one pass. The tradeoff was a slower first migration: four weeks of parallel tokens instead of a clean rewrite.",
              "The second decision was to delete rather than deprecate. Twenty-three components covered every real usage; the rest were duplicates with different names.",
            ],
          },
          {
            heading: "Outcome",
            paragraphs: [
              "Component count fell from 41 to 23, and the shared scale became the only way to express spacing or color. The first downstream team migrated in three days without touching product code.",
            ],
          },
        ],
      },
      id: {
        title: "Atlas",
        role: "Design system",
        summary:
          "Pustaka komponen yang dibangun ulang di atas token, agar tiga tim produk berhenti mengirim tiga tombol yang berbeda.",
        thesis:
          "Masalahnya bukan komponen yang kurang. Masalahnya, setiap tim diam-diam menyalin skala dengan versinya sendiri.",
        sections: [
          {
            heading: "Konteks",
            paragraphs: [
              "Atlas dimulai sebagai folder berisi 41 komponen tanpa skala spacing bersama, tanpa nama warna, dan dengan empat cara berbeda menuliskan border radius. Tiap tim produk punya file patch lokal.",
              "Permintaannya adalah konsolidasi, tetapi batasan sebenarnya: tidak ada tim produk yang bisa berhenti mengerjakan fitur untuk migrasi.",
            ],
          },
          {
            heading: "Batasan",
            paragraphs: [
              "Rilis tiap dua minggu, tanpa design engineer khusus, dan API publik yang sudah dipakai delapan repositori.",
            ],
            list: [
              "Import lama harus tetap berjalan selama dua versi minor.",
              "Setiap perubahan visual harus bisa direview dalam satu pull request.",
              "Tidak boleh menambah dependency runtime.",
            ],
          },
          {
            heading: "Keputusan",
            paragraphs: [
              "Saya mempertahankan API komponen lama dan hanya mengganti isinya, memetakan setiap nilai hardcoded ke token dalam satu proses. Konsekuensinya migrasi pertama lebih lambat: empat minggu token paralel, bukan penulisan ulang yang bersih.",
              "Keputusan kedua adalah menghapus, bukan menandai deprecated. Dua puluh tiga komponen sudah menutup semua penggunaan nyata; sisanya duplikat dengan nama berbeda.",
            ],
          },
          {
            heading: "Hasil",
            paragraphs: [
              "Jumlah komponen turun dari 41 ke 23, dan skala bersama menjadi satu-satunya cara menuliskan spacing atau warna. Tim pertama bermigrasi dalam tiga hari tanpa mengubah kode produk.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "signal",
    year: "2024",
    stack: ["Next.js", "Postgres", "WebSocket", "Playwright"],
    copy: {
      en: {
        title: "Signal",
        role: "Product engineering",
        summary:
          "An incident dashboard that had to stay readable during the exact minutes when nobody has time to read.",
        thesis:
          "A dashboard fails when it shows everything. The job was to decide what a tired person can ignore.",
        sections: [
          {
            heading: "Context",
            paragraphs: [
              "Signal aggregated alerts from four services into one screen. During real incidents, responders ignored the screen and went back to raw logs because the summary was slower to trust than the source.",
            ],
          },
          {
            heading: "Constraints",
            paragraphs: [
              "Page had to load in under two seconds on an unreliable office network, and the data source could not be changed.",
            ],
            list: [
              "No changes to the ingestion pipeline.",
              "Every row had to link back to the original log line.",
              "The layout had to work at 1280px, the width of the on-call laptop.",
            ],
          },
          {
            heading: "Decisions",
            paragraphs: [
              "I removed the timeline chart entirely and replaced it with a severity-ordered list. The tradeoff was losing historical shape, which responders were not using during an incident anyway.",
              "Every summary line got a permanent source link, so trust did not depend on the interface being right. That link was the feature, not the export button.",
            ],
          },
          {
            heading: "Outcome",
            paragraphs: [
              "Median time to first acknowledged alert dropped from 4m10s to 1m50s across the next 30 incidents. The chart was never requested again.",
            ],
          },
        ],
      },
      id: {
        title: "Signal",
        role: "Product engineering",
        summary:
          "Dashboard insiden yang harus tetap terbaca justru pada menit-menit ketika tidak ada yang punya waktu membaca.",
        thesis:
          "Dashboard gagal ketika menampilkan semuanya. Tugasnya adalah memutuskan apa yang boleh diabaikan orang yang sedang lelah.",
        sections: [
          {
            heading: "Konteks",
            paragraphs: [
              "Signal menggabungkan alert dari empat layanan ke satu layar. Saat insiden nyata terjadi, responder justru mengabaikan layar itu dan kembali ke log mentah karena ringkasannya lebih lambat dipercaya daripada sumbernya.",
            ],
          },
          {
            heading: "Batasan",
            paragraphs: [
              "Halaman harus termuat di bawah dua detik pada jaringan kantor yang tidak stabil, dan sumber data tidak boleh diubah.",
            ],
            list: [
              "Tidak ada perubahan pada pipeline ingestion.",
              "Setiap baris harus tertaut ke baris log aslinya.",
              "Layout harus bekerja di 1280px, lebar laptop on-call.",
            ],
          },
          {
            heading: "Keputusan",
            paragraphs: [
              "Saya menghapus grafik timeline sepenuhnya dan menggantinya dengan daftar terurut berdasarkan severity. Konsekuensinya kehilangan bentuk historis, yang memang tidak dipakai responder saat insiden berlangsung.",
              "Setiap baris ringkasan mendapat tautan sumber permanen, sehingga kepercayaan tidak bergantung pada antarmuka yang selalu benar. Tautan itu fiturnya, bukan tombol export.",
            ],
          },
          {
            heading: "Hasil",
            paragraphs: [
              "Median waktu sampai alert pertama diakui turun dari 4m10s menjadi 1m50s pada 30 insiden berikutnya. Grafik itu tidak pernah diminta lagi.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "margin",
    year: "2023",
    stack: ["Next.js", "MDX", "SQLite", "Vercel"],
    copy: {
      en: {
        title: "Margin",
        role: "Frontend",
        summary:
          "A reading and publishing tool for long essays, built around one rule: the text decides the layout, not the other way around.",
        thesis:
          "Most publishing tools optimise for the editor's dashboard. This one optimises for the third paragraph.",
        sections: [
          {
            heading: "Context",
            paragraphs: [
              "Editors were pasting essays from documents into a CMS and then fighting the result: footnotes moved, pull quotes broke the reading column, and images never sat where the author intended.",
            ],
          },
          {
            heading: "Constraints",
            paragraphs: [
              "Writers wanted to work in Markdown, and the team could not maintain a custom editor on top of a CMS.",
            ],
            list: [
              "Markdown had to remain the source of truth.",
              "Footnotes and figure captions were required, not optional.",
              "Reading time had to survive a slow connection.",
            ],
          },
          {
            heading: "Decisions",
            paragraphs: [
              "I treated the reading column as fixed and let elements opt out of it explicitly. Full-bleed images are a deliberate author choice, not a default.",
              "Footnotes stayed inline at the end of each section instead of collapsing into a modal. The tradeoff is more scrolling; the benefit is that a reader never loses their place.",
            ],
          },
          {
            heading: "Outcome",
            paragraphs: [
              "Publishing time per essay fell from about 90 minutes of formatting to 12 minutes of writing and review. The reading column has not needed a layout change in two years.",
            ],
          },
        ],
      },
      id: {
        title: "Margin",
        role: "Frontend",
        summary:
          "Alat baca dan terbit untuk esai panjang, dibangun dengan satu aturan: teks yang menentukan layout, bukan sebaliknya.",
        thesis:
          "Kebanyakan alat terbit mengoptimalkan dashboard editor. Yang ini mengoptimalkan paragraf ketiga.",
        sections: [
          {
            heading: "Konteks",
            paragraphs: [
              "Editor menempelkan esai dari dokumen ke CMS lalu berkelahi dengan hasilnya: catatan kaki berpindah, pull quote merusak kolom baca, dan gambar tidak pernah berada di tempat penulis menginginkannya.",
            ],
          },
          {
            heading: "Batasan",
            paragraphs: [
              "Penulis ingin bekerja di Markdown, dan tim tidak bisa memelihara editor kustom di atas CMS.",
            ],
            list: [
              "Markdown harus tetap menjadi sumber kebenaran.",
              "Catatan kaki dan caption gambar wajib, bukan opsional.",
              "Waktu baca harus tetap bertahan di koneksi lambat.",
            ],
          },
          {
            heading: "Keputusan",
            paragraphs: [
              "Saya memperlakukan kolom baca sebagai tetap dan membiarkan elemen keluar darinya secara eksplisit. Gambar full-bleed adalah pilihan sadar penulis, bukan default.",
              "Catatan kaki tetap inline di akhir setiap bagian, tidak dilipat ke modal. Konsekuensinya lebih banyak scroll; manfaatnya pembaca tidak pernah kehilangan posisi.",
            ],
          },
          {
            heading: "Hasil",
            paragraphs: [
              "Waktu terbit per esai turun dari sekitar 90 menit pemformatan menjadi 12 menit menulis dan review. Kolom baca belum perlu diubah selama dua tahun.",
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
    copy: project.copy[locale],
  };
}

export function getFeaturedProjects(locale: Locale, limit = 3) {
  return getProjects(locale).slice(0, limit);
}
