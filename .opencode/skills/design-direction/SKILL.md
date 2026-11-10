---
name: Design Direction
description: Aturan wajib sebelum menulis atau mengubah UI, layout, tipografi, warna, atau motion di project portfolio ini. Gunakan setiap kali menyentuh komponen, halaman, atau style, untuk menegakkan art direction dan mencegah pattern template. Tidak mencakup audit a11y mendalam atau resep transisi — itu didelegasikan ke ux-designer dan transitions-dev.
---

# Design Direction

Project ini punya satu arah visual yang dikunci di `design/DIRECTION.md`. Baca file itu
sebelum menulis UI. Skill ini adalah penegak aturannya, bukan pengganti skill lain.

## Tugas skill ini

1. Mengingatkan aturan keras di bawah sebelum kode ditulis.
2. Menolak solusi yang masuk kill list, walau terlihat "lebih menarik".
3. Meneruskan pekerjaan ke skill yang tepat (lihat Handoff).

## Aturan keras

1. **Token-only.** Warna, font, ukuran teks, dan container hanya dari token di `app/globals.css`.
   Dilarang `text-[#7c3aed]`, `bg-[#fff]`, `w-[437px]`, atau hex di dalam komponen.
   Durasi memakai `duration-(--duration-quick)`; literal `duration-[180ms]` dilarang.
2. **Radius 0, shadow 0.** Pemisah memakai border 1px `rule`. Tidak ada card dengan shadow.
3. **Tidak ada layout center.** Teks rata kiri, grid asimetris (isi kolom 1–7, meta 8–12).
4. **Satu aksen.** `signal` hanya untuk tautan, underline, dan penanda aktif.
5. **Satu elemen dominan per halaman.** Kalau dua elemen bersaing, turunkan salah satunya.
6. **Tipografi:** display serif hanya untuk H1/H2; body 17px/1.65 dengan measure 60–68ch;
   meta memakai mono 12px uppercase tracking 0.12em.
7. **Focus selalu terlihat.** Tidak ada `outline: none` tanpa pengganti. Target minimal 24×24px.
8. **Motion maksimal 4 pola** (lihat DIRECTION.md §7). Semua wajib punya guard `prefers-reduced-motion`.
9. **Teks tidak hardcoded** di komponen halaman; ambil dari `lib/i18n/dictionary.ts` atau konten.
   Berlaku untuk `en` dan `id`.
10. **State lengkap.** Setiap elemen interaktif punya default, hover, focus-visible, active, dan
    disabled bila relevan. Bila data kosong atau gagal, tampilkan pesan yang menyebut langkah berikutnya.

## Kill list (tolak tanpa diskusi)

Gradient text · hero gradien ungu/biru · glassmorphism · shadcn default · 3-card feature grid ·
semua center · radius 16px seragam · glow shadow · blob animasi · emoji sebagai ikon ·
"Elevate / Seamless / Unleash / Supercharge" · fade-in-up di setiap section ·
hero 100vh + scroll indicator · Inter/Geist sebagai display · lorem ipsum.

## Prosedur singkat

1. Baca `design/DIRECTION.md` bagian yang relevan (tipografi, warna, layout, motion).
2. Cari komponen serupa yang sudah ada. Pakai ulang sebelum membuat baru.
3. Tulis markup semantik lebih dulu (tanpa kelas), lalu terapkan token.
4. Periksa di 320px, 768px, dan 1280px; periksa dengan keyboard.
5. Sebelum menyatakan selesai, jalankan pemeriksaan di bawah.

## Pemeriksaan sebelum selesai

- [ ] Tidak ada arbitrary value atau hex baru.
- [ ] Tidak ada pola dari kill list.
- [ ] Focus ring terlihat di semua elemen interaktif.
- [ ] Teks `id` tidak memecah layout (ID 15–25% lebih panjang dari EN).
- [ ] `prefers-reduced-motion` tidak mematikan informasi apa pun.
- [ ] `npm run build` lolos.

## Handoff

Jangan menduplikasi isi skill lain. Delegasikan:

- a11y, WCAG, state, form, IA, microcopy, i18n → `ux-designer`
  (referensi terarah: `03-accessibility`, `04-visual-design`, `05-information-architecture`,
  `09-ux-writing`, `23-internationalization`).
- Menambah transisi yang sudah disetujui → `transitions-dev` (hanya pola di DIRECTION.md §7).
- Menyamakan durasi/easing ke skala token → `transitions-polish`.
