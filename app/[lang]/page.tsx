import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { localeLabels, type Locale } from "@/lib/i18n/locales";

const otherLocale = (locale: Locale): Locale => (locale === "en" ? "id" : "en");

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const alternate = otherLocale(locale);

  return (
    <div className="mx-auto flex min-h-dvh max-w-page flex-col px-4 md:px-6">
      <header className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
        <span className="font-serif text-xl tracking-tight">{"{{NAME}}"}</span>
        <Link
          href={`/${alternate}`}
          hrefLang={alternate}
          className="font-mono text-meta text-muted uppercase transition-colors duration-(--duration-quick) hover:text-ink"
        >
          {localeLabels[alternate]}
        </Link>
      </header>

      <main className="grid flex-1 grid-cols-12 gap-4 pt-16 pb-24 md:gap-6 md:pt-24">
        <p className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
          {dictionary.home.eyebrow}
        </p>

        <div className="col-span-12 md:col-span-9">
          <h1 className="max-w-measure font-serif text-display text-balance">
            {dictionary.home.tagline}
          </h1>

          <p className="mt-8 max-w-measure text-body text-muted">
            {dictionary.home.note}
          </p>

          <p className="mt-8">
            <Link
              href={`/${locale}/styleguide`}
              className="font-mono text-meta uppercase underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:decoration-signal hover:text-signal"
            >
              {dictionary.home.styleguide}
            </Link>
          </p>
        </div>
      </main>

      <footer className="border-t border-rule py-6">
        <p className="font-mono text-meta text-muted">
          {dictionary.footer.colophon}
        </p>
      </footer>
    </div>
  );
}
