import { lang } from "next/root-params";
import { defaultLocale, isLocale, type Locale } from "./locales";

/**
 * Resolves the active locale from the root `[lang]` parameter.
 * Falls back to the default locale if the segment is unexpected.
 */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  return isLocale(value) ? value : defaultLocale;
}
