import type { ReactNode } from "react";

/**
 * In-house primitive set. These replace the shadcn default look on purpose:
 * radius stays 0, shadows are never used, and every colour comes from a token.
 * Structure is carried by hairline borders and a single surface tint.
 */

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className = "" }: PanelProps) {
  return (
    <div className={`border border-rule bg-surface ${className}`}>
      {children}
    </div>
  );
}

export function PanelHeader({
  icon,
  label,
  aside,
}: {
  icon?: ReactNode;
  label: string;
  aside?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-rule px-5 py-3">
      <div className="flex items-center gap-2.5">
        {icon ? <span className="text-ink">{icon}</span> : null}
        <span className="font-mono text-meta text-muted uppercase">{label}</span>
      </div>
      {aside ? <div className="text-muted">{aside}</div> : null}
    </div>
  );
}

export function PanelBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-5 py-4 ${className}`}>{children}</div>;
}

export function PanelFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-t border-rule px-5 py-3 ${className}`}>
      {children}
    </div>
  );
}

export function Badge({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-rule bg-paper px-2 py-1 font-mono text-meta text-muted uppercase">
      {icon ? <span className="text-ink">{icon}</span> : null}
      {children}
    </span>
  );
}

export function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center border border-rule bg-paper text-ink">
      {children}
    </span>
  );
}

export function Spec({
  label,
  value,
  icon,
}: {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 px-5 py-4">
      {icon ? <span className="mt-0.5 shrink-0 text-muted">{icon}</span> : null}
      <div className="min-w-0">
        <dt className="font-mono text-meta text-muted uppercase">{label}</dt>
        <dd className="mt-1 text-body text-ink">{value}</dd>
      </div>
    </div>
  );
}

export function SpecList({ children }: { children: ReactNode }) {
  return <dl className="divide-y divide-rule">{children}</dl>;
}

export function SpecGrid({ children }: { children: ReactNode }) {
  return (
    <dl className="divide-y divide-rule md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
      {children}
    </dl>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="border-l-2 border-ink bg-surface px-5 py-4">
      <p className="max-w-measure font-serif text-h3">{children}</p>
    </aside>
  );
}

export function Numeral({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center border border-rule bg-surface font-mono text-meta text-muted">
      {children}
    </span>
  );
}
