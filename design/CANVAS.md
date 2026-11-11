# Canvas — Fig. 00–07

Lembar kerja visual untuk slot gambar yang nanti diganti foto. Plat ini bukan
dekorasi: setiap garis membawa satu keterangan, dan setiap label menyebut apa
yang sedang dilihat.

## Gerakan: Specimen Sheet

Komunikasi lewat pengamatan sistematis. Satu lembar, satu subjek. Grid 12 kolom
digambar sebagai hairline tipis, bukan sebagai bingkai. Label mono kecil duduk di
margin, seperti anotasi laboratorium. Satu gestur serif besar memberi skala;
sisanya adalah keterangan. Warna hanya empat: paper, ink, muted, rule, dengan satu
tanda signal yang menandai hubungan atau baris yang penting.

## Material

- Latar `paper` #F7F4EF tanpa tekstur, tanpa gradient, tanpa bayangan.
- Garis 1px `rule` #E4DFD6 pada ukuran akhir; digambar 2px lalu diperkecil, supaya
  tetap hairline di retina.
- Huruf display Instrument Serif, label JetBrains Mono, keterangan Instrument Sans.
  Ketiganya font yang sama dengan situs.
- Tidak ada sudut membulat, tidak ada opacity tipis pada teks, tidak ada gambar
  dekoratif yang tidak menjelaskan apa pun.

## Aturan isi

- Diagram hanya memuat relasi yang benar-benar ada di proyek. Tidak ada tabel,
  kolom, atau izin yang dikarang untuk mengisi ruang.
- Runsheet acara diberi label TEMPLATE karena bukan catatan satu acara tertentu.
- Nomor `FIG. 0x` adalah bagian dari gambar, bukan label sementara. Saat foto
  menggantikan plat, nomor itu ikut hilang; caption di halaman tetap bekerja
  karena hidup di `<figcaption>`, bukan di dalam berkas gambar.
- Setiap plat punya area yang aman untuk crop 3:2 atau 4:5; tidak ada teks yang
  menyentuh tepi.

## Daftar

| Fig. | Berkas | Ukuran | Isi |
|---|---|---|---|
| 00 | `public/images/portrait.png` | 1200×1500 | Plat potret 4:5 |
| 01 | `public/images/home-band.png` | 2400×1600 | Plat tempat, band 3:2 |
| 02 | `public/images/ivss-01.png` | 2400×1600 | Skema relasional IVSS |
| 03 | `public/images/ivss-02.png` | 2400×1600 | Peta modul dan peran |
| 04 | `public/images/lomba-01.png` | 2400×1600 | Alur entitas lomba |
| 05 | `public/images/lomba-02.png` | 2400×1600 | Alur persetujuan |
| 06 | `public/images/event-01.png` | 2400×1600 | Runsheet acara (template) |
| 07 | `public/og.png` | 1200×630 | Gambar OG |

Generator: `design/plates/make_plates.py` (Pillow, dijalankan manual; bukan
dependency aplikasi). Jalankan ulang dengan `python design/plates/make_plates.py`.

## Mengganti dengan foto

1. Simpan foto memakai nama berkas dan rasio yang sama di `public/images/`.
2. Perbarui `src`, `width`, `height` di `content/media.ts` bila ekstensi berubah.
3. Tulis ulang `alt` dan `caption` di berkas yang sama untuk kedua locale.
