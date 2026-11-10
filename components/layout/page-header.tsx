type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  size?: "display" | "h2";
};

export function PageHeader({
  eyebrow,
  title,
  intro,
  size = "h2",
}: PageHeaderProps) {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <p className="col-span-12 font-mono text-meta text-muted uppercase md:col-span-3">
        {eyebrow}
      </p>
      <div className="col-span-12 md:col-span-9">
        <h1
          className={`max-w-measure font-serif text-balance ${
            size === "display" ? "text-display" : "text-h2"
          }`}
        >
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-measure text-body text-muted">{intro}</p>
        ) : null}
      </div>
    </div>
  );
}
