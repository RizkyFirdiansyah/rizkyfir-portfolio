import type { Metadata } from "next";
import { NotFoundContent } from "@/components/layout/not-found-content";
import { getLocale } from "@/lib/i18n/get-locale";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const locale = await getLocale();

  return <NotFoundContent locale={locale} />;
}
