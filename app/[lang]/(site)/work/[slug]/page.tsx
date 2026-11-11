import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { getProject, projects } from "@/content/projects";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

type CaseStudyParams = { lang: string; slug: string };

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

  return (
    <article className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-24">
      <Link
        href={`/${locale}/work`}
        className="font-mono text-meta text-muted uppercase underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:text-signal hover:decoration-signal"
      >
        ← {dictionary.caseStudy.back}
      </Link>

      <header className="mt-12 grid grid-cols-12 gap-4 md:gap-6">
        <p className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
          {project.copy.role} · {project.year}
        </p>
        <div className="col-span-12 md:col-span-9">
          <h1 className="max-w-measure font-serif text-h2 text-balance">
            {project.copy.title}
          </h1>
          <p className="mt-6 max-w-measure text-body text-muted">
            {project.copy.summary}
          </p>
          <p className="mt-8 max-w-measure font-serif text-h3">
            {project.copy.thesis}
          </p>
        </div>
      </header>

      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-rule py-4 font-mono text-meta md:grid-cols-4">
        <div>
          <dt className="text-muted uppercase">{dictionary.caseStudy.year}</dt>
          <dd className="mt-1">{project.year}</dd>
        </div>
        <div>
          <dt className="text-muted uppercase">{dictionary.caseStudy.role}</dt>
          <dd className="mt-1">{project.copy.role}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-muted uppercase">{dictionary.caseStudy.stack}</dt>
          <dd className="mt-1">{project.stack.join(" · ")}</dd>
        </div>
      </dl>

      {project.links.demo || project.links.repo ? (
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2">
          {project.links.demo ? (
            <a
              href={project.links.demo}
              className="inline-flex items-center gap-1 font-mono text-meta uppercase underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:text-signal hover:decoration-signal"
            >
              {dictionary.caseStudy.demo}
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          ) : null}
          {project.links.repo ? (
            <a
              href={project.links.repo}
              className="inline-flex items-center gap-1 font-mono text-meta uppercase underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:text-signal hover:decoration-signal"
            >
              {dictionary.caseStudy.repo}
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          ) : null}
        </div>
      ) : null}

      <div className="mt-16 grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-7">
          {project.copy.sections.map((section, index) => (
            <section key={section.heading} className="mt-12 first:mt-0">
              <div className="flex items-baseline gap-4 border-b border-rule pb-2">
                <span className="font-mono text-meta text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
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
                <ul className="mt-4 space-y-2 border-l border-rule pl-4">
                  {section.list.map((item) => (
                    <li key={item} className="max-w-measure text-body text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
