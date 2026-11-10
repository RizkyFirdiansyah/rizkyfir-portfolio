<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules

Baca `design/DIRECTION.md` sebelum menulis UI, dan muat skill `design-direction`.
Skill ini menegakkan aturan; `ux-designer` menangani a11y/state/microcopy,
`transitions-dev` menangani transisi yang diizinkan, `transitions-polish` menangani token motion.

1. Token-only: warna/font/ukuran/container dari `@theme` di `app/globals.css`. Tanpa arbitrary value, tanpa hex di komponen.
2. Radius 0, shadow 0, pemisah = border 1px `rule`. Tanpa gradient, tanpa glow, tanpa glassmorphism.
3. Rata kiri, grid asimetris. Tidak ada layout center selain halaman 404.
4. Satu aksen (`signal`) untuk tautan/underline/penanda aktif. Satu elemen dominan per halaman.
5. Focus selalu terlihat; target minimal 24×24px. Jangan pakai `outline: none` tanpa pengganti.
6. Motion maksimal 4 pola sesuai `DIRECTION.md` §7, selalu dengan guard `prefers-reduced-motion`.
7. Teks UI berasal dari `lib/i18n/dictionary.ts`, berlaku untuk `en` dan `id`. Tanpa teks hardcoded.
8. Tanpa dependency baru (no Framer Motion, next-intl, shadcn, CMS) kecuali disetujui eksplisit.
9. Setelah mengubah routing, jalankan `npm run build` — `cacheComponents` mewajibkan `generateStaticParams` untuk root param `[lang]`.
10. Jangan mengubah blok `nextjs-agent-rules` di atas; `next dev` menulis ulang blok itu.

