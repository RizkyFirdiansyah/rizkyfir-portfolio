import type { ReactNode } from "react";
import { SiteFooter } from "@/components/chrome/site-footer";
import { SiteHeader } from "@/components/chrome/site-header";
import { getDictionary } from "@/lib/i18n/dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
