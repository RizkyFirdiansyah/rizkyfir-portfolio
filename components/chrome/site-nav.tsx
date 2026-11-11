"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/i18n/locales";

type NavLabels = {
  work: string;
  about: string;
  resume: string;
  contact: string;
};

type SiteNavProps = {
  locale: Locale;
  labels: NavLabels;
  navLabel: string;
  switcherLabel: string;
};

export function SiteNav({
  locale,
  labels,
  navLabel,
  switcherLabel,
}: SiteNavProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");
  const otherHref = (target: Locale) =>
    `/${target}${rest ? `/${rest}` : ""}`;

  const items = [
    { key: "work" as const, href: `/${locale}/work`, label: labels.work },
    { key: "about" as const, href: `/${locale}/about`, label: labels.about },
    {
      key: "resume" as const,
      href: `/${locale}/resume`,
      label: labels.resume,
    },
    {
      key: "contact" as const,
      href: `/${locale}/contact`,
      label: labels.contact,
    },
  ];

  return (
    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
      <nav aria-label={navLabel} className="flex items-baseline gap-4">
        {items.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.key}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`font-mono text-meta uppercase underline-offset-4 transition-colors duration-(--duration-quick) ${
                active
                  ? "text-signal underline decoration-1"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <span aria-hidden className="h-3 w-px self-center bg-rule" />

      <nav aria-label={switcherLabel} className="flex items-baseline gap-3">
        {locales.map((item) => (
          <Link
            key={item}
            href={otherHref(item)}
            hrefLang={item}
            aria-current={item === locale ? "true" : undefined}
            className={`font-mono text-meta transition-colors duration-(--duration-quick) ${
              item === locale ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {localeLabels[item]}
          </Link>
        ))}
      </nav>
    </div>
  );
}
