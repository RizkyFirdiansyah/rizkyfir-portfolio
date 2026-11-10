import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.about.title,
    description: dictionary.about.intro,
    alternates: { canonical: `/${locale}/about` },
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-24">
      <PageHeader
        eyebrow={dictionary.about.eyebrow}
        title={dictionary.about.title}
        intro={dictionary.about.intro}
      />

      <div className="mt-16 grid grid-cols-12 gap-4 border-t border-rule pt-12 md:gap-6">
        <div className="col-span-12 md:col-span-7">
          {dictionary.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-6 max-w-measure text-body first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="col-span-12 md:col-span-4 md:col-start-9">
          <h2 className="font-mono text-meta text-muted uppercase">
            {dictionary.about.focusTitle}
          </h2>
          <ul className="mt-4 space-y-2 border-t border-rule pt-4">
            {dictionary.about.focus.map((item) => (
              <li key={item} className="text-body text-muted">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
