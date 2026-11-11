import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { DownloadIcon } from "@/components/ui/icons";
import {
  awards,
  certifications,
  education,
  experience,
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

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 gap-4 border-t border-rule pt-8 md:gap-6">
      <h2 className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
        {title}
      </h2>
      <div className="col-span-12 md:col-span-9">{children}</div>
    </section>
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
          className="inline-flex items-center gap-2 border border-ink px-4 py-3 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:bg-ink hover:text-paper"
        >
          <DownloadIcon />
          {dictionary.resume.download}
        </a>
      </p>

      <div className="mt-16 space-y-12">
        <Section title={dictionary.resume.education}>
          <ul className="space-y-8">
            {education.map((entry) => (
              <li key={entry.institution}>
                <p className="font-mono text-meta text-muted">
                  {entry.period[locale]}
                </p>
                <h3 className="mt-1 font-serif text-h3">
                  {entry.institution}
                </h3>
                <p className="mt-1 text-body text-muted">{entry.programme}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={dictionary.resume.experience}>
          <ul className="space-y-8">
            {experience.map((entry) => (
              <li key={`${entry.organisation}-${entry.period.en}`}>
                <p className="font-mono text-meta text-muted">
                  {entry.period[locale]}
                </p>
                <h3 className="mt-1 font-serif text-h3">
                  {entry.role[locale]}
                </h3>
                <p className="mt-1 font-mono text-meta text-muted uppercase">
                  {entry.organisation}
                </p>
                <p className="mt-3 max-w-measure text-body text-muted">
                  {entry.detail[locale]}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={dictionary.resume.certifications}>
          <ul className="space-y-4">
            {certifications.map((group) => (
              <li
                key={group.issuer}
                className="grid gap-1 md:grid-cols-12 md:gap-6"
              >
                <p className="font-mono text-meta text-muted md:col-span-4">
                  {group.issuer} · {group.year}
                </p>
                <p className="text-body md:col-span-8">
                  {group.items.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={dictionary.resume.awards}>
          <ul className="space-y-6">
            {awards.map((entry) => (
              <li key={entry.title.en}>
                <p className="font-mono text-meta text-muted">{entry.year}</p>
                <h3 className="mt-1 font-serif text-h3">
                  {entry.title[locale]}
                </h3>
                <p className="mt-1 text-body text-muted">
                  {entry.detail[locale]}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
