import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/page-header";
import {
  AwardIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  DownloadIcon,
  GraduationCapIcon,
  LayersIcon,
} from "@/components/ui/icons";
import { Badge, IconTile, Panel, PanelHeader } from "@/components/ui/panel";
import {
  awards,
  certifications,
  education,
  experience,
  skillGroups,
  type ExperienceGroup,
} from "@/content/resume";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.resume.title,
    description: dictionary.resume.intro,
    alternates: { canonical: `/${locale}/resume` },
  };
}

const experienceGroups: ExperienceGroup[] = ["academic", "organisation"];

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 gap-4 border-t border-rule pt-8 md:gap-6">
      <div className="col-span-12 flex items-center gap-3 md:col-span-3 md:sticky md:top-6 md:self-start">
        <IconTile>{icon}</IconTile>
        <h2 className="font-mono text-meta text-muted uppercase">{title}</h2>
      </div>
      <div className="col-span-12 md:col-span-9">{children}</div>
    </section>
  );
}

function TimelineEntry({
  period,
  title,
  meta,
  detail,
}: {
  period: string;
  title: string;
  meta?: string;
  detail?: string;
}) {
  return (
    <li className="relative border-l border-rule pl-6">
      <span
        aria-hidden
        className="absolute -left-1 top-1.5 block size-2 border border-ink bg-paper"
      />
      <p className="font-mono text-meta text-muted uppercase">{period}</p>
      <h3 className="mt-1 font-serif text-h3">{title}</h3>
      {meta ? (
        <p className="mt-1 font-mono text-meta text-muted uppercase">{meta}</p>
      ) : null}
      {detail ? (
        <p className="mt-3 max-w-measure text-body text-muted">{detail}</p>
      ) : null}
    </li>
  );
}

export default async function ResumePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-24">
      <PageHeader
        eyebrow={dictionary.resume.eyebrow}
        title={dictionary.resume.title}
        intro={dictionary.resume.intro}
      />

      <p className="mt-10">
        <a
          href={site.cv}
          download
          className="inline-flex min-h-12 items-center gap-2 border border-ink px-4 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:bg-ink hover:text-paper active:bg-ink active:text-paper"
        >
          <DownloadIcon />
          {dictionary.resume.download}
        </a>
      </p>

      <div className="mt-16 space-y-12">
        <Section
          title={dictionary.resume.education}
          icon={<GraduationCapIcon width={18} height={18} />}
        >
          <ul className="space-y-8">
            {education.map((entry) => (
              <TimelineEntry
                key={entry.institution}
                period={entry.period[locale]}
                title={entry.institution}
                detail={entry.programme}
              />
            ))}
          </ul>
        </Section>

        <Section
          title={dictionary.resume.experience}
          icon={<BriefcaseIcon width={18} height={18} />}
        >
          <div className="space-y-10">
            {experienceGroups.map((group) => {
              const entries = experience.filter((entry) => entry.group === group);
              if (entries.length === 0) return null;

              return (
                <div key={group}>
                  <h3 className="font-mono text-meta text-muted uppercase">
                    {group === "academic"
                      ? dictionary.resume.experienceAcademic
                      : dictionary.resume.experienceOrganisation}
                  </h3>
                  <ul className="mt-4 space-y-8">
                    {entries.map((entry) => (
                      <TimelineEntry
                        key={`${entry.organisation}-${entry.period.en}`}
                        period={entry.period[locale]}
                        title={entry.role[locale]}
                        meta={entry.organisation}
                        detail={entry.detail[locale]}
                      />
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          title={dictionary.resume.skills}
          icon={<LayersIcon width={18} height={18} />}
        >
          <Panel>
            <ul className="divide-y divide-rule">
              {skillGroups.map((group) => (
                <li key={group.label.en} className="px-5 py-4">
                  <p className="font-mono text-meta text-ink uppercase">
                    {group.label[locale]}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item.en}>
                        <Badge>{item[locale]}</Badge>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Panel>
        </Section>

        <Section
          title={dictionary.resume.certifications}
          icon={<BadgeCheckIcon width={18} height={18} />}
        >
          <Panel>
            <PanelHeader
              icon={<BadgeCheckIcon width={16} height={16} />}
              label={dictionary.resume.certifications}
            />
            <ul className="divide-y divide-rule">
              {certifications.map((group) => (
                <li key={group.issuer} className="px-5 py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-mono text-meta text-ink uppercase">
                      {group.issuer}
                    </p>
                    <Badge>{group.year}</Badge>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Badge>{item}</Badge>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Panel>
        </Section>

        <Section
          title={dictionary.resume.awards}
          icon={<AwardIcon width={18} height={18} />}
        >
          <ul className="space-y-6">
            {awards.map((entry) => (
              <TimelineEntry
                key={entry.title.en}
                period={entry.year}
                title={entry.title[locale]}
                detail={entry.detail[locale]}
              />
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
