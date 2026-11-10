# Art Direction — Portfolio

> Dokumen ini adalah sumber kebenaran visual. Jika sebuah komponen tidak sesuai dengannya,
> komponen itu yang salah, bukan dokumen ini.
>
> Status: identitas belum diisi. Placeholder `{{NAME}}`, `{{POSITION}}`, `{{TAGLINE}}`
> harus diganti sebelum situs dipublikasikan — token visual tidak perlu berubah.

## 1. Posisi

`{{TAGLINE}}` — satu kalimat, maksimal 14 kata, tanpa kata "passionate", "creative", atau "solutions".

Tiga kata sifat yang mengikat semua keputusan: **tenang · cerdas · personal**.

## 2. Referensi

| Referensi | Ambil | Jangan tiru |
|---|---|---|
| stripe.press | hierarki serif, margin lebar, ritme bab | gaya sampul buku |
| letterformarchive.org | komposisi arsip, label mono kecil, gambar besar | kepadatan katalog |
| are.na | struktur index/daftar, ketenangan | nuansa platform |
| rauno.me | label meta teknis, link underline, minim animasi | kesan terminal |
| pudding.cool | narasi case study, visual full-bleed | grafik data berat |
| ibm.com/design/language | disiplin grid, skala tipe, penamaan token | korporat biru |

Referensi dipakai untuk mengambil **keputusan**, bukan layout. Jangan menyalin komposisi halaman siapa pun.

## 3. Sintesis

Grid 12 kolom yang terlihat sebagai hairline + display serif + label mono + satu aksen terracotta.
Radius 0, shadow 0, dekorasi 0. Komposisi asimetris: teks di kolom 1–7, meta di kolom 8–12.
Simetri center dipakai hanya untuk satu hal per situs (halaman 404), tidak untuk section.

Setiap halaman punya **satu elemen dominan**. Jika dua elemen bersaing, salah satunya harus turun.

## 4. Tipografi

| Peran | Font | Token | Catatan |
|---|---|---|---|
| Display / H1 | Instrument Serif 400 + italic | `text-display` | line-height 1.02, tracking −0.02em |
| H2 | Instrument Serif 400 | `text-h2` | |
| Body | Instrument Sans 400/500 | `text-body` | 17px, line-height 1.65, measure 60–68ch |
| Meta / label | JetBrains Mono 400 | `text-meta` | 12px, uppercase, tracking 0.12em |

Aturan:
- Italic maksimal 1–2 kata per halaman, dan hanya untuk menandai sesuatu yang personal.
- Tidak ada font ketiga. Tidak ada font display dekoratif tambahan.
- Angka di meta rail memakai mono agar kolom tanggal sejajar.
- Lebar baca body dibatasi `max-w-measure` (68ch), bukan `max-w-prose` bawaan.

## 5. Warna

| Token | Nilai | Fungsi | Kontras di paper |
|---|---|---|---|
| `paper` | `#F7F4EF` | latar utama | — |
| `ink` | `#14120F` | teks utama | 17:1 |
| `muted` | `#6B645C` | teks sekunder, caption | 5.3:1 |
| `rule` | `#E4DFD6` | hairline, batas | — (non-teks) |
| `signal` | `#B4471F` | link, underline, penanda aktif | 4.96:1 |

Aturan:
- Hanya satu aksen. `signal` tidak pernah dipakai sebagai latar blok besar.
- Warna tidak pernah menjadi satu-satunya pembeda state; selalu ada underline, border, atau teks.
- Tidak ada gradient, tidak ada glow, tidak ada opacity tipis untuk teks.
- Dark mode tidak dibangun di fase ini. Jangan menambahkan `prefers-color-scheme` diam-diam.

## 6. Layout & bentuk

- Container `max-w-page` (1200px), padding horizontal 16px (mobile) / 24px (≥768px).
- Grid 12 kolom, gutter 24px, gutter mobile 16px.
- Radius 0 di semua elemen. Shadow 0. Pemisah = border 1px `rule`.
- Tinggi baris meta 32px agar label sejajar dengan angka.
- Gambar full-bleed keluar kolom, tanpa sudut membulat, tanpa frame dekoratif.
- Rasio gambar: 3:2 untuk visual proyek, 4:5 untuk foto orang.

## 7. Gerak

Maksimal **empat** pola di seluruh situs:

1. Link underline slide (hover/focus), 150ms.
2. Icon swap pada panah "baca case study", 250ms.
3. Learn-more hover pada baris index proyek, 250ms.
4. Page transition Work → case study (ViewTransition atau page side-by-side), 250ms.

Semua durasi/easing merujuk token `--duration-*` dan `--ease-*`. Nilai literal seperti `180ms` dilarang.
Semua animasi wajib punya guard `prefers-reduced-motion`. Tidak ada parallax, scroll-reveal massal, atau tilt card.

## 8. Gambar & data

- Setiap gambar punya `alt` yang menjelaskan fungsi, bukan mengulang caption.
- Visual proyek bukan screenshot penuh yang tidak terbaca: pilih satu detail atau satu layar.
- Angka pada case study wajib bisa diverifikasi atau dijelaskan cara mengukurnya.

## 9. Kill list

Gradient text · hero gradien ungu/biru · glassmorphism · shadcn default · 3-card feature grid ·
semua elemen center · radius seragam 16px · glow shadow · blob animasi · emoji sebagai ikon ·
"Elevate / Seamless / Unleash / Supercharge" · fade-in-up di setiap section · hero 100vh dengan
scroll indicator · Inter/Geist sebagai display · klaim tanpa angka · lorem ipsum.

## 10. Belum diputuskan

| Hal | Dampak | Catatan |
|---|---|---|
| Nama & handle | metadata, footer, OG image | placeholder |
| Posisi yang dituju | urutan section, CTA | memengaruhi Home |
| Warna aksen final | seluruh situs | terracotta adalah default yang lolos AA |
| Domain | `metadataBase`, sitemap | menunggu deploy |
