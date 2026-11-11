import Link from "next/link";
import { ContactLinks } from "@/components/contact/contact-links";
import { ProjectIndex } from "@/components/work/project-index";
import { getFeaturedProjects } from "@/content/projects";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const projects = getFeaturedProjects(locale);

  return (
    <div className="mx-auto max-w-page px-4 md:px-6">
      <section className="grid grid-cols-12 gap-4 pt-16 pb-20 md:gap-6 md:pt-24 md:pb-28">
        <div className="col-span-12 flex flex-col gap-2 md:col-span-3">
          <p className="font-mono text-meta text-muted uppercase">
            {site.position}
          </p>
          <p className="font-mono text-meta text-muted uppercase">
            {site.secondary}
          </p>
          <p className="font-mono text-meta text-muted uppercase">
            {site.location}
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h1 className="max-w-measure font-serif text-display text-balance">
            {dictionary.home.tagline}
          </h1>
          <p className="mt-8 max-w-measure text-body text-muted">
            {dictionary.home.lede}
          </p>
        </div>
      </section>

      <section className="border-t border-rule py-12">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-mono text-meta text-muted uppercase">
            {dictionary.home.selected}
          </h2>
          <Link
            href={`/${locale}/work`}
            className="font-mono text-meta text-muted uppercase underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:text-signal hover:decoration-signal"
          >
            {dictionary.home.allWork}
          </Link>
        </div>

        <div className="mt-6">
          <ProjectIndex
            locale={locale}
            items={projects.map((project) => ({
              slug: project.slug,
              year: project.year,
              title: project.copy.title,
              role: project.copy.role,
            }))}
          />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4 border-t border-rule py-12 md:gap-6">
        <h2 className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
          {dictionary.home.aboutTitle}
        </h2>
        <div className="col-span-12 md:col-span-9">
          <p className="max-w-measure text-body">{dictionary.home.aboutTeaser}</p>
          <p className="mt-6">
            <Link
              href={`/${locale}/about`}
              className="font-mono text-meta uppercase underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:text-signal hover:decoration-signal"
            >
              {dictionary.home.aboutLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4 border-t border-rule py-12 md:gap-6">
        <h2 className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
          {dictionary.home.contactTitle}
        </h2>
        <div className="col-span-12 md:col-span-9">
          <p className="max-w-measure text-body text-muted">
            {dictionary.home.contactTeaser}
          </p>
          <div className="mt-2 -ml-3">
            <ContactLinks labels={dictionary.contact} />
          </div>
        </div>
      </section>
    </div>
  );
}
