import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectIndex } from "@/components/work/project-index";
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
        <div className="mt-16">
          <ProjectIndex
            locale={locale}
            items={items.map((project) => ({
              slug: project.slug,
              year: project.year,
              title: project.copy.title,
              role: project.copy.role,
            }))}
          />
        </div>
      )}
    </div>
  );
}
