import Link from "next/link";
import { SiteNav } from "@/components/chrome/site-nav";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-page flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-4 py-4 md:px-6">
        <Link
          href={`/${locale}`}
          className="font-serif text-xl tracking-tight text-ink"
        >
          {site.name}
        </Link>
        <SiteNav
          locale={locale}
          labels={dictionary.nav}
          navLabel={dictionary.a11y.primaryNav}
          switcherLabel={dictionary.a11y.languageSwitcher}
        />
      </div>
    </header>
  );
}
