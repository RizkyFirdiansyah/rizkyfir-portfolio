import type { Metadata } from "next";
import Link from "next/link";
import { ContactLinks } from "@/components/contact/contact-links";
import { PageHeader } from "@/components/layout/page-header";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Panel, PanelBody, PanelFooter } from "@/components/ui/panel";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.contact.title,
    description: dictionary.contact.intro,
    alternates: { canonical: `/${locale}/contact` },
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-24">
      <PageHeader
        eyebrow={dictionary.contact.eyebrow}
        title={dictionary.contact.title}
        intro={dictionary.contact.intro}
      />

      <div className="mt-16 grid grid-cols-12 gap-4 border-t border-rule pt-12 md:gap-6">
        <p className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
          {dictionary.contact.title}
        </p>
        <div className="col-span-12 md:col-span-9">
          <ContactLinks labels={dictionary.contact} />

          <Panel className="mt-6">
            <PanelBody>
              <p className="max-w-measure text-body text-muted">
                {dictionary.contact.note}
              </p>
            </PanelBody>
            <PanelFooter>
              <Link
                href={`/${locale}/resume`}
                className="link-slide inline-flex items-center gap-2 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:text-signal"
              >
                {dictionary.about.resumeLink}
                <ArrowRightIcon width={14} height={14} />
              </Link>
            </PanelFooter>
          </Panel>
        </div>
      </div>
    </div>
  );
}
