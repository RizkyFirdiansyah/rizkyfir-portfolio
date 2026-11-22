import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectCard } from "@/components/work/project-card";
import { figures, type FigureMedia } from "@/content/media";
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

const projectFigures: Record<string, FigureMedia> = {
  skinmatch: figures.skinMatch,
  "profil-lab-ivss": figures.ivssProduct,
  "informasi-lomba": figures.lombaTeam,
};

/** Staggered two-column rhythm; index picks the slot, not the grid order. */
const slotClasses = [
  "md:col-span-7",
  "md:col-span-5 md:mt-16",
  "md:col-span-7 md:col-start-6",
];

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
        <>
          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-rule pt-10 md:grid-cols-12">
            {items.map((project, index) => {
              const figure = projectFigures[project.slug];

              if (!figure) return null;

              return (
                <div
                  key={project.slug}
                  className={slotClasses[index] ?? "md:col-span-6"}
                >
                  <ProjectCard
                    locale={locale}
                    slug={project.slug}
                    period={project.period}
                    title={project.copy.title}
                    role={project.copy.role}
                    stack={project.stack}
                    figure={figure}
                    action={dictionary.work.viewCase}
                    index={String(index + 1).padStart(2, "0")}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
