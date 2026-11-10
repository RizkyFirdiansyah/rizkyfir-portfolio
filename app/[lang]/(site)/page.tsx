import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-24">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
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
              className="font-mono text-meta uppercase underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:text-signal hover:decoration-signal"
            >
              {dictionary.home.styleguide}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
