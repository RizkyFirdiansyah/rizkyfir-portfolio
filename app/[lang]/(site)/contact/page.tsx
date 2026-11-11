import type { Metadata } from "next";
import Link from "next/link";
import { ContactLinks } from "@/components/contact/contact-links";
import { PageHeader } from "@/components/layout/page-header";
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
          <div className="-ml-3">
            <ContactLinks labels={dictionary.contact} />
          </div>
          <p className="mt-8 max-w-measure text-body text-muted">
            {dictionary.contact.note}
          </p>
          <p className="mt-6">
            <Link
              href={`/${locale}/resume`}
              className="link-slide font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:text-signal"
            >
              {dictionary.about.resumeLink}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
