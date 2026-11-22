import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Figure } from "@/components/media/figure";
import {
  ArrowRightIcon,
  CheckIcon,
  CodeIcon,
  GraduationCapIcon,
  LayersIcon,
  MapPinIcon,
  ServerIcon,
  UsersIcon,
} from "@/components/ui/icons";
import {
  Badge,
  IconTile,
  Panel,
  Spec,
  SpecList,
} from "@/components/ui/panel";
import { figures } from "@/content/media";
import { education, skillGroups } from "@/content/resume";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

/** The first three groups are technical; the fourth is rendered as badges. */
const technicalGroups = skillGroups.slice(0, 3);
const softSkills = skillGroups[3];
const technicalIcons = [ServerIcon, CodeIcon, LayersIcon];
const technicalSpans = ["md:col-span-5", "md:col-span-4", "md:col-span-3"];

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

      <div className="mt-14 grid grid-cols-12 gap-4 border-t border-rule pt-10 md:gap-6 md:pt-12">
        <div className="col-span-12 md:col-span-4">
          <Figure
            figure={figures.portrait}
            locale={locale}
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <Panel className="mt-4">
            <SpecList>
              <Spec
                label={dictionary.resume.education}
                value={education[0].institution}
                icon={<GraduationCapIcon width={16} height={16} />}
              />
              <Spec
                label={dictionary.home.meta.base}
                value={site.location[locale]}
                icon={<MapPinIcon width={16} height={16} />}
              />
            </SpecList>
          </Panel>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
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
              className="link-slide inline-flex items-center gap-2 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:text-signal"
            >
              {dictionary.about.resumeLink}
              <ArrowRightIcon width={14} height={14} />
            </Link>
          </p>

          <Figure
            figure={figures.eventDay}
            locale={locale}
            sizes="(min-width: 768px) 58vw, 100vw"
            className="mt-12"
          />
        </div>
      </div>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-mono text-meta text-muted uppercase">
          {dictionary.about.skillsTitle}
        </h2>

        <Panel className="mt-6">
          <div className="grid grid-cols-1 divide-y divide-rule md:grid-cols-12 md:divide-x md:divide-y-0">
            {technicalGroups.map((group, groupIndex) => {
              const Icon = technicalIcons[groupIndex] ?? LayersIcon;

              return (
                <div
                  key={group.label.en}
                  className={`p-5 ${technicalSpans[groupIndex] ?? "md:col-span-4"}`}
                >
                  <div className="flex items-center gap-3">
                    <IconTile>
                      <Icon width={18} height={18} />
                    </IconTile>
                    <div>
                      <p className="font-mono text-meta text-muted">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-mono text-meta text-ink uppercase">
                        {group.label[locale]}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item.en}
                        className="flex items-start gap-2 border-t border-rule pt-2 text-body text-muted"
                      >
                        <CheckIcon
                          width={16}
                          height={16}
                          className="mt-1 shrink-0"
                        />
                        <span>{item[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {softSkills ? (
            <div className="border-t border-rule p-5">
              <div className="flex items-center gap-3">
                <IconTile>
                  <UsersIcon width={18} height={18} />
                </IconTile>
                <div>
                  <p className="font-mono text-meta text-muted">
                    {String(technicalGroups.length + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-mono text-meta text-ink uppercase">
                    {softSkills.label[locale]}
                  </h3>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {softSkills.items.map((item) => (
                  <li key={item.en}>
                    <Badge>{item[locale]}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Panel>
      </section>
    </div>
  );
}
