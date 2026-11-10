import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { getProjects } from "@/content/projects";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.work.title,
    description: dictionary.work.intro,
    alternates: { canonical: `/${locale}/work` },
  };
}

export default async function WorkPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const items = getProjects(locale);

  return (
    <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-24">
      <PageHeader
        eyebrow={dictionary.work.eyebrow}
        title={dictionary.work.title}
        intro={dictionary.work.intro}
      />

      {items.length === 0 ? (
        <p className="mt-16 text-body text-muted">{dictionary.work.empty}</p>
      ) : (
        <ul className="mt-16 border-t border-rule">
          {items.map((project) => (
            <li key={project.slug} className="border-b border-rule">
              <Link
                href={`/${locale}/work/${project.slug}`}
                className="group grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="font-mono text-meta text-muted md:col-span-2">
                  {project.year}
                </span>
                <span className="font-serif text-h3 transition-colors duration-(--duration-quick) group-hover:text-signal md:col-span-6">
                  {project.copy.title}
                </span>
                <span className="font-mono text-meta text-muted md:col-span-3">
                  {project.copy.role}
                </span>
                <span
                  aria-hidden
                  className="hidden font-mono text-meta transition-transform duration-(--duration-fast) ease-smooth-out group-hover:translate-x-1 md:col-span-1 md:block md:text-right"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
