type CitationListProps = {
  citations: string[];
};

export default function CitationList({
  citations,
}: CitationListProps) {
  if (citations.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 border-t border-border pt-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Evidence
        </p>

        <h2 className="mt-3 font-lawinc-serif text-2xl tracking-tight text-foreground">
          Sources
        </h2>
      </div>

      <ol className="mt-6 divide-y divide-border border-y border-border">
        {citations.map((citation, index) => (
          <li
            key={`${citation}-${index}`}
            className="flex gap-5 py-5"
          >
            <span className="shrink-0 text-xs font-semibold text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>

            <p className="text-sm leading-6 text-muted">
              {citation}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}