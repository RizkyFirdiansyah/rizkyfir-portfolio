import Link from "next/link";
import { ContactLinks } from "@/components/contact/contact-links";
import { Figure } from "@/components/media/figure";
import { ProjectIndex } from "@/components/work/project-index";
import {
  ArrowRightIcon,
  CalendarIcon,
  CodeIcon,
  MapPinIcon,
} from "@/components/ui/icons";
import {
  IconTile,
  Panel,
  PanelBody,
  PanelFooter,
  Spec,
  SpecList,
} from "@/components/ui/panel";
import { figures } from "@/content/media";
import { getFeaturedProjects } from "@/content/projects";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const projects = getFeaturedProjects(locale);

  return (
    <>
      <div className="mx-auto max-w-page px-4 md:px-6">
        <section className="grid grid-cols-12 gap-4 pt-16 pb-12 md:gap-6 md:pt-24 md:pb-16">
          <div className="col-span-12 md:order-last md:col-span-8 lg:col-span-9">
            <h1 className="max-w-measure font-serif text-display text-balance">
              {dictionary.home.tagline}
            </h1>
            <p className="mt-8 max-w-measure text-body text-muted">
              {dictionary.home.lede}
            </p>
          </div>
          <div className="col-span-12 md:order-first md:col-span-4 lg:col-span-3">
            <Panel>
              <SpecList>
                <Spec
                  label={dictionary.home.meta.role}
                  value={site.position}
                  icon={<CodeIcon width={16} height={16} />}
                />
                <Spec
                  label={dictionary.home.meta.practice}
                  value={site.secondary}
                  icon={<CalendarIcon width={16} height={16} />}
                />
                <Spec
                  label={dictionary.home.meta.base}
                  value={site.location[locale]}
                  icon={<MapPinIcon width={16} height={16} />}
                />
              </SpecList>
            </Panel>
          </div>
        </section>
      </div>

      <Figure
        figure={figures.homeBand}
        locale={locale}
        sizes="100vw"
        priority
        className="mt-4 md:mt-6"
      />

      <div className="mx-auto max-w-page px-4 md:px-6">
        <section className="border-t border-rule py-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-mono text-meta text-muted uppercase">
              {dictionary.home.selected}
            </h2>
            <Link
              href={`/${locale}/work`}
              className="link-slide group inline-flex items-center gap-2 font-mono text-meta text-muted uppercase transition-colors duration-(--duration-quick) hover:text-signal"
            >
              {dictionary.home.allWork}
              <ArrowRightIcon width={14} height={14} />
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
            <Panel className="max-w-measure">
              <PanelBody>
                <div className="flex items-start gap-4">
                  <IconTile>
                    <CodeIcon width={18} height={18} />
                  </IconTile>
                  <p className="text-body">{dictionary.home.aboutTeaser}</p>
                </div>
              </PanelBody>
              <PanelFooter>
                <Link
                  href={`/${locale}/about`}
                  className="link-slide inline-flex items-center gap-2 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:text-signal"
                >
                  {dictionary.home.aboutLink}
                  <ArrowRightIcon width={14} height={14} />
                </Link>
              </PanelFooter>
            </Panel>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-4 border-t border-rule py-12 md:gap-6">
          <h2 className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
            {dictionary.home.contactTitle}
          </h2>
          <div className="col-span-12 md:col-span-9">
            <Panel>
              <PanelBody>
                <p className="max-w-measure text-body text-muted">
                  {dictionary.home.contactTeaser}
                </p>
                <div className="mt-4">
                  <ContactLinks labels={dictionary.contact} />
                </div>
              </PanelBody>
            </Panel>
          </div>
        </section>
      </div>
    </>
  );
}
