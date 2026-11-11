import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { skillGroups } from "@/content/resume";
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

          <p className="mt-8">
            <Link
              href={`/${locale}/resume`}
              className="link-slide font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:text-signal"
            >
              {dictionary.about.resumeLink}
            </Link>
          </p>
        </div>

        <aside className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-0">
          <h2 className="font-mono text-meta text-muted uppercase">
            {dictionary.about.skillsTitle}
          </h2>

          <div className="mt-4 border-t border-rule">
            {skillGroups.map((group) => (
              <div key={group.label.en} className="border-b border-rule py-4">
                <h3 className="font-mono text-meta text-ink uppercase">
                  {group.label[locale]}
                </h3>
                <ul className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-body text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
