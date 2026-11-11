import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";

export type ProjectIndexItem = {
  slug: string;
  year: string;
  title: string;
  role: string;
};

type ProjectIndexProps = {
  locale: Locale;
  items: ProjectIndexItem[];
};

export function ProjectIndex({ locale, items }: ProjectIndexProps) {
  return (
    <ul className="border-t border-rule">
      {items.map((project) => (
        <li key={project.slug} className="border-b border-rule">
          <Link
            href={`/${locale}/work/${project.slug}`}
            className="group grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <span className="font-mono text-meta text-muted md:col-span-2">
              {project.year}
            </span>
            <span className="font-serif text-h3 transition-colors duration-(--duration-quick) group-hover:text-signal md:col-span-6">
              {project.title}
            </span>
            <span className="font-mono text-meta text-muted md:col-span-3">
              {project.role}
            </span>
            <span
              aria-hidden
              className="link-icon-swap hidden font-mono text-meta md:col-span-1 md:inline-grid"
            >
              <span>→</span>
              <span>⟶</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
