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

Status: Fig. 00, 02, 04, dan 06 sudah memakai foto asli. Fig. 01, 03, 05, 07,
dan 08 masih plat sementara.

| Fig. | Berkas | Ukuran | Isi |
|---|---|---|---|
| 00 | `public/images/portrait.jpg` | 800×800 | Foto potret |
| 01 | `public/images/home-band.png` | 2400×1600 | Plat tempat, band 3:2 |
| 02 | `public/images/ivss-01.jpeg` | 960×1280 | Foto tim IVSS, 3:4 |
| 03 | `public/images/ivss-02.png` | 1920×1080 | Tangkapan beranda Lab IVSS, 16:9 |
| 04 | `public/images/lomba-01.jpeg` | 960×1280 | Foto tim lomba, 3:4 |
| 05 | `public/images/lomba-02.png` | 2400×1600 | Alur persetujuan |
| 06 | `public/images/event-01.jpg` | 960×1280 | Foto hari acara, 3:4 |
| 07 | `public/og.png` | 1200×630 | Gambar OG |
| 08 | `public/images/skinmatch-pipeline.png` | 2400×1600 | Pipeline SkinMatch: foto kemasan → OCR → klasifikasi → empat tipe kulit |

Generator: `design/plates/make_plates.py` (Pillow, dijalankan manual; bukan
dependency aplikasi). Jalankan ulang dengan `python design/plates/make_plates.py`.

## Mengganti dengan foto

1. Nama berkas tidak harus sama; yang penting `src` di `content/media.ts` cocok.
   Ekstensi bebas (`.jpg`, `.jpeg`, `.png`) karena `next/image` membaca isi berkas.
2. Perbarui `src`, `width`, dan `height` di `content/media.ts` sesuai ukuran asli.
   Rasio tidak dipaksa oleh CSS — gambar memakai `h-auto w-full` — jadi foto 3:4
   atau 1:1 tidak akan terpotong, hanya mengubah tinggi blok.
3. Tulis ulang `alt` dan `caption` di berkas yang sama untuk kedua locale. `alt`
   menjelaskan isi foto, bukan mengulang judul proyek.
