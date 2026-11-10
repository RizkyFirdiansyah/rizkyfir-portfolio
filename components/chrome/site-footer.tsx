import type { Dictionary } from "@/lib/i18n/dictionary";
import { site } from "@/lib/site";

type SiteFooterProps = {
  dictionary: Dictionary;
};

export function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-4 py-8 md:flex-row md:items-baseline md:justify-between md:px-6">
        <p className="font-mono text-meta text-muted">
          {dictionary.footer.colophon}
        </p>
        <p className="font-mono text-meta text-muted">
          © {site.startYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
