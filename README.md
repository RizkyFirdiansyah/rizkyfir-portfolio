# Portfolio — Muhammad Rizky Firdiansyah

Personal portfolio built with Next.js 16 (App Router), React 19, and Tailwind CSS 4.
Bilingual (English / Indonesian), static-first, no UI library.

## Stack

| Item | Version | Notes |
|---|---|---|
| Next.js | 16.4.6 | `cacheComponents` + `partialPrefetching` enabled |
| React | 19.3.0 | native `<ViewTransition>` available |
| Tailwind | 4.3.3 | via `@tailwindcss/turbopack`, tokens in `app/globals.css` |
| TypeScript | 5, `strict` | path alias `@/*` |

## Commands

```bash
npm run dev      # local development
npm run build    # production build (also validates route types)
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # type check
```

## Structure

```
app/[lang]/                 root layout, locale from next/root-params
app/[lang]/(site)/          pages with header + footer
app/[lang]/styleguide/      internal token reference (noindex)
components/chrome/          header, footer, locale-aware navigation
components/contact/         icon-only contact links
components/layout/          page header, not-found content
components/media/           figure with optional caption
components/ui/              inline SVG icons (no icon dependency)
components/work/            project index
content/projects.ts         case studies (EN + ID)
content/resume.ts           education, experience, certifications, awards
content/media.ts            every image slot: src, size, alt, caption
design/DIRECTION.md         art direction, rules, kill list
design/CANVAS.md            plate set and how to replace it with photos
design/plates/              Pillow generator for the plates (manual tool)
lib/i18n/                   locales, dictionary, locale resolver
lib/site.ts                 identity and contact details
proxy.ts                    locale redirects
public/                     CV PDF
```

## Routes

`/` redirects to `/en`. Both locales are prefixed: `/en/...` and `/id/...`.
Pages: home, `/work`, `/work/[slug]`, `/about`, `/resume`, `/contact`,
plus the internal `/styleguide`.

## Editing content

- **Identity and contact**: `lib/site.ts`. The phone number is stored in
  international format for `tel:` links.
- **Project links**: `content/projects.ts` → `links.demo` and `links.repo`.
  Each one renders only when it holds a URL. Leave both empty to hide the row.
- **Project dates**: `content/projects.ts` → `period` holds the month range as
  printed on the CV; `year` is the short form used in the home index.
- **Project copy**: same file, `copy.en` / `copy.id`.
- **GitHub icon**: set `site.github` in `lib/site.ts`; the icon appears on its own.
- **Resume data**: `content/resume.ts` — education, experience, certifications,
  awards, and the skill groups used on both the About and Resume pages.
  Each experience entry carries a `group` (`academic` or `organisation`), which
  decides which sub-heading it lands under on `/resume`.
- **Interface copy**: `lib/i18n/dictionary.ts` (two locales, same keys).
- **Tagline**: `home.tagline` in both dictionaries.
- **CV file**: `public/CV_MuhammadRizkyFirdiansyah_2026.pdf`, linked from `/resume`.
- **Images**: every image is declared in `content/media.ts` (`src`, `width`,
  `height`, `alt`, optional `caption`, both locales). Generated plates live in
  `public/images/` and `public/og.png`.

## Replacing the generated plates with photographs

1. Drop the photo into `public/images/`. The filename does not have to match the
   old plate; any of `.jpg`, `.jpeg`, or `.png` works.
2. Update `src`, `width`, and `height` in `content/media.ts` to the real pixel
   size. The CSS never forces an aspect ratio, so a 3:4 or 1:1 photo is not
   cropped — it only changes the block height.
3. Rewrite `alt` and `caption` in that file for both locales. Alt describes the
   content of the photo; the caption is optional and sits on a hairline.
4. Re-run `npm run build`. Next caches optimised images, so delete
   `.next/cache/images` if a replaced file still shows the old version.

Slots: `portrait` (About), `homeBand` (full-bleed Home band, 2400×1600),
`ivssProduct` + `ivssTeam`, `lombaTeam` + `lombaApproval`, `skinMatch` (plate
for the SkinMatch pipeline), `eventDay` (About).
`/og.png` is the Open Graph card. `design/CANVAS.md` documents each slot;
`design/plates/make_plates.py` regenerates the remaining plates with Pillow
(a local tool, not an application dependency).

Certification titles stay untranslated because they are official course names.
Programme names are kept verbatim so the site and the PDF agree.

## Contact links

Contact is icon-only by request: no email address or phone number is rendered
as selectable text. Each link has an `aria-label` and a `title`, and the icons
are 20px inside 44px targets. The values still exist in the `href` attributes,
so this prevents casual copying, not scraping.

## Design rules

Read `design/DIRECTION.md` before changing UI. In short: token-only values,
radius 0, no shadows, no gradients, left-aligned asymmetric grid, one accent
colour, at most four motion patterns. The `design-direction` skill enforces it;
`ux-designer`, `transitions-dev`, and `transitions-polish` handle accessibility,
transitions, and motion tokens.

## Known limitations

- Unknown project slugs render the custom not-found page with HTTP 200 because
  the route is partially prerendered. The page is `noindex` and the content is
  unambiguous, but the status is a soft 404.
- Outcomes in the case studies are qualitative: no usage figures were available
  and none were invented. Add numbers to `content/projects.ts` when verified.
- No demo or repository links are shown until their URLs are filled in.
- Dark mode is intentionally not implemented.
- Contact has no form; the email icon opens a `mailto:` link.
