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
    <section className="mt-8">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
        Sources
      </h2>

      <ul className="mt-3 space-y-2">
        {citations.map((citation) => (
          <li
            key={citation}
            className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300"
          >
            {citation}
          </li>
        ))}
      </ul>
    </section>
  );
}