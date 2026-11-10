# Portfolio

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
components/layout/          page header, not-found content
components/work/            project index
content/projects.ts         project data (sample content)
design/DIRECTION.md         art direction, rules, kill list
lib/i18n/                   locales, dictionary, locale resolver
lib/site.ts                 name, position, email
proxy.ts                    locale redirects
```

## Routes

`/` redirects to `/en`. Both locales are prefixed: `/en/...` and `/id/...`.
Pages: home, `/work`, `/work/[slug]`, `/about`, `/contact`, plus `/styleguide`.

## Editing content

- **Identity**: replace `{{NAME}}`, `{{POSITION}}`, `{{EMAIL}}` in `lib/site.ts`.
- **Copy**: `lib/i18n/dictionary.ts` (two locales, same keys).
- **Projects**: `content/projects.ts`. Replace the sample entries — names,
  figures, and outcomes are placeholders. Keep the shape: context, constraints,
  decisions with tradeoffs, outcome.
- **Tagline**: `home.tagline` in both dictionaries.

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
- Dark mode is intentionally not implemented.
- Contact has no form; email is a direct `mailto:` link.
