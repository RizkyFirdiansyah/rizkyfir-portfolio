import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";
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

/**
 * Archive-style project index. The row shifts by one step on hover
 * (motion pattern 3) and the arrow swaps glyphs (pattern 2).
 */
export function ProjectIndex({ locale, items }: ProjectIndexProps) {
  return (
    <ul className="border-t border-rule">
      {items.map((project, position) => (
        <li key={project.slug} className="border-b border-rule">
          <Link
            href={`/${locale}/work/${project.slug}`}
            className="group grid gap-2 py-6 transition-transform duration-(--duration-fast) ease-smooth-out hover:translate-x-1 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <span className="font-mono text-meta text-muted md:col-span-1">
              {String(position + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-meta text-muted md:col-span-2">
              {project.year}
            </span>
            <span className="font-serif text-h3 transition-colors duration-(--duration-quick) group-hover:text-signal md:col-span-5">
              {project.title}
            </span>
            <span className="font-mono text-meta text-muted md:col-span-3">
              {project.role}
            </span>
            <span
              aria-hidden
              className="link-icon-swap hidden text-muted md:col-span-1 md:inline-grid"
            >
              <span>
                <ArrowRightIcon width={18} height={18} />
              </span>
              <span>
                <ArrowUpRightIcon width={18} height={18} />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
