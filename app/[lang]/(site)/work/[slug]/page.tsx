import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Figure } from "@/components/media/figure";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  LayersIcon,
} from "@/components/ui/icons";
import {
  Callout,
  Numeral,
  Panel,
  PanelHeader,
  Spec,
  SpecGrid,
} from "@/components/ui/panel";
import { figures, type FigureMedia } from "@/content/media";
import { getProject, projects } from "@/content/projects";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

type CaseStudyParams = { lang: string; slug: string };

const projectFigures: Record<string, FigureMedia[]> = {
  skinmatch: [figures.skinMatch],
  "profil-lab-ivss": [figures.ivssProduct, figures.ivssTeam],
  "informasi-lomba": [figures.lombaTeam, figures.lombaApproval],
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CaseStudyParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const project = getProject(locale, slug);

  if (!project) return {};

  return {
    title: project.copy.title,
    description: project.copy.summary,
    alternates: {
      canonical: `/${locale}/work/${project.slug}`,
      languages: {
        en: `/en/work/${project.slug}`,
        id: `/id/work/${project.slug}`,
      },
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<CaseStudyParams>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const project = getProject(locale, slug);

  if (!project) notFound();

  const caseFigures = projectFigures[project.slug] ?? [];
  const singleFigure = caseFigures.length === 1;

  return (
    <article className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-24">
      <Link
        href={`/${locale}/work`}
        className="link-slide inline-flex items-center gap-2 font-mono text-meta text-muted uppercase transition-colors duration-(--duration-quick) hover:text-signal"
      >
        <ArrowLeftIcon width={14} height={14} />
        {dictionary.caseStudy.back}
      </Link>

      <header className="mt-12 grid grid-cols-12 gap-4 md:gap-6">
        <p className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
          {project.copy.role} · {project.period}
        </p>
        <div className="col-span-12 md:col-span-9">
          <h1 className="max-w-measure font-serif text-h2 text-balance">
            {project.copy.title}
          </h1>
          <p className="mt-6 max-w-measure text-body text-muted">
            {project.copy.summary}
          </p>
        </div>
      </header>

      <div className="mt-10">
        <Callout>{project.copy.thesis}</Callout>
      </div>

      <Panel className="mt-10">
        <PanelHeader label={dictionary.caseStudy.overview} />
        <SpecGrid>
          <Spec
            label={dictionary.caseStudy.year}
            value={project.period}
            icon={<CalendarIcon width={16} height={16} />}
          />
          <Spec
            label={dictionary.caseStudy.role}
            value={project.copy.role}
            icon={<BriefcaseIcon width={16} height={16} />}
          />
          <Spec
            label={dictionary.caseStudy.stack}
            value={project.stack.join(" · ")}
            icon={<LayersIcon width={16} height={16} />}
          />
        </SpecGrid>
      </Panel>

      {project.links.demo || project.links.repo ? (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 border border-ink px-4 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:bg-ink hover:text-paper"
            >
              {dictionary.caseStudy.demo}
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          ) : null}
          {project.links.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 border border-rule px-4 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:border-ink"
            >
              {dictionary.caseStudy.repo}
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          ) : null}
        </div>
      ) : null}

      <div
        className={
          singleFigure
            ? "mt-12"
            : "mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6"
        }
      >
        {caseFigures.map((figure) => (
          <Figure
            key={figure.src}
            figure={figure}
            locale={locale}
            sizes={singleFigure ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
          />
        ))}
      </div>

      <div className="mt-16 grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-7">
          {project.copy.sections.map((section, index) => (
            <section key={section.heading} id={`section-${index + 1}`} className="mt-12 first:mt-0">
              <div className="flex items-center gap-3 border-b border-rule pb-3">
                <Numeral>{String(index + 1).padStart(2, "0")}</Numeral>
                <h2 className="font-serif text-h3">{section.heading}</h2>
              </div>

              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-4 max-w-measure text-body"
                >
                  {paragraph}
                </p>
              ))}

              {section.list ? (
                <ul className="mt-5 divide-y divide-rule border border-rule bg-surface">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 px-4 py-3 text-body text-ink"
                    >
                      <CheckIcon
                        width={16}
                        height={16}
                        className="mt-1 shrink-0 text-muted"
                      />
                      <span className="max-w-measure">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <aside className="hidden md:col-span-4 md:col-start-9 md:block">
          <div className="sticky top-8 border border-rule bg-surface p-5">
            <p className="font-mono text-meta uppercase text-muted">
              {dictionary.caseStudy.overview}
            </p>
            <nav className="mt-4">
              <ul className="space-y-3 font-mono text-meta">
                {project.copy.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a
                      href={`#section-${index + 1}`}
                      className="link-slide text-muted hover:text-signal"
                    >
                      {String(index + 1).padStart(2, "0")} · {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </article>
  );
}
