import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/panel";
import type { FigureMedia } from "@/content/media";
import type { Locale } from "@/lib/i18n/locales";

type ProjectCardProps = {
  locale: Locale;
  slug: string;
  period: string;
  title: string;
  role: string;
  stack: string[];
  figure: FigureMedia;
  action: string;
  index: string;
};

/**
 * Case-study card. The image sits in the card, not behind it: no radius,
 * no shadow, one hairline between plate and text. The arrow swap reuses
 * motion pattern 2 from DIRECTION.md §7.
 */
export function ProjectCard({
  locale,
  slug,
  period,
  title,
  role,
  stack,
  figure,
  action,
  index,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col border border-rule bg-paper transition-colors duration-(--duration-quick) hover:border-ink">
      <Link href={`/${locale}/work/${slug}`} className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-rule px-5 py-3">
          <span className="font-mono text-meta text-muted uppercase">
            {index} · {period}
          </span>
          <span
            aria-hidden
            className="link-icon-swap text-muted group-hover:text-signal"
          >
            <span>
              <ArrowUpRightIcon width={16} height={16} />
            </span>
            <span>
              <ArrowRightIcon width={16} height={16} />
            </span>
          </span>
        </div>

        <div className="overflow-hidden bg-surface">
          <Image
            src={figure.src}
            alt={figure.alt[locale]}
            width={figure.width}
            height={figure.height}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[3/2] w-full border-b border-rule object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between px-5 py-5">
          <div>
            <h3 className="font-serif text-h3 text-balance transition-colors duration-(--duration-quick) group-hover:text-signal">
              {title}
            </h3>
            <p className="mt-2 font-mono text-meta text-muted uppercase">{role}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 flex items-center gap-2 font-mono text-meta uppercase text-muted">
            {action}
            <ArrowRightIcon width={14} height={14} />
          </p>
        </div>
      </Link>
    </article>
  );
}
