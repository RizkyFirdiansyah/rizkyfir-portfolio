import Image from "next/image";
import type { FigureMedia } from "@/content/media";
import type { Locale } from "@/lib/i18n/locales";

type FigureProps = {
  figure: FigureMedia;
  locale: Locale;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * A figure with an optional caption. The image keeps its intrinsic ratio,
 * never gets a frame, radius, or shadow, and the caption sits on a hairline.
 */
export function Figure({
  figure,
  locale,
  sizes,
  priority = false,
  className = "",
}: FigureProps) {
  const caption = figure.caption?.[locale];

  return (
    <figure className={className}>
      <Image
        src={figure.src}
        alt={figure.alt[locale]}
        width={figure.width}
        height={figure.height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
      {caption ? (
        <figcaption className="mt-3 flex items-start gap-3 border-t border-rule pt-3 font-mono text-meta text-muted">
          <span aria-hidden className="mt-1 block h-1.5 w-1.5 shrink-0 bg-signal" />
          <span className="max-w-measure">{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
