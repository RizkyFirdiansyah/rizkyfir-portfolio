import Link from "next/link";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";

type NotFoundContentProps = {
  locale: Locale;
};

export async function NotFoundContent({ locale }: NotFoundContentProps) {
  const dictionary = getDictionary(locale);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-32 text-center">
      <p className="font-mono text-meta text-muted uppercase">
        {dictionary.notFound.code}
      </p>
      <h1 className="mt-4 max-w-measure font-serif text-h2">
        {dictionary.notFound.title}
      </h1>
      <p className="mt-4 max-w-measure text-body text-muted">
        {dictionary.notFound.body}
      </p>
      <Link
        href={`/${locale}`}
        className="link-slide mt-8 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:text-signal"
      >
        {dictionary.notFound.back}
      </Link>
    </div>
  );
}
