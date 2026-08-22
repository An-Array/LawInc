"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { searchLegal, type SearchResponse } from "@/lib/api/search";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery || loading) {
      return;
    }

    setLoading(true);
    setError(false);
    setResults(null);

    try {
      const response = await searchLegal(trimmedQuery);

      if (response === null) {
        setError(true);
        return;
      }

      setResults(response);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <label
              htmlFor="legal-search"
              className="text-sm font-semibold text-foreground"
            >
              Search the law
            </label>
          </div>

          <div className="flex flex-col gap-3 p-5 sm:flex-row">
            <input
              id="legal-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a provision, case, principle, or topic..."
              aria-label="Search legal provisions"
              disabled={loading}
              className="min-w-0 flex-1 rounded-md border border-border bg-background px-4 py-3 text-base text-foreground outline-none placeholder:text-muted transition-colors focus:border-focus focus:ring-2 focus:ring-focus/20 disabled:cursor-not-allowed disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="shrink-0 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div
          role="alert"
          className="mt-8 rounded-lg border border-danger/30 bg-danger/5 px-5 py-4"
        >
          <p className="text-sm font-semibold text-danger">
            Unable to search legal sources.
          </p>

          <p className="mt-1 text-sm text-muted">
            The research service could not process this search. Please try
            again.
          </p>
        </div>
      )}

      {!loading && !error && results && results.results.length === 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Search result
          </p>

          <h2 className="mt-3 font-lawinc-serif text-2xl tracking-tight text-foreground">
            No results found.
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted">
            Try a different legal provision, case, principle, or topic.
          </p>
        </div>
      )}

      {!loading && !error && results && results.results.length > 0 && (
        <section className="mt-14">
          <div className="border-b border-border pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Search results
            </p>

            <h2 className="mt-3 font-lawinc-serif text-3xl tracking-tight text-foreground">
              Evidence for {results.query}.
            </h2>
          </div>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {results.results.map((result, index) => (
              <article key={result.id} className="py-7">
                <div className="flex gap-5">
                  <span className="shrink-0 pt-1 text-xs font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-lawinc-serif text-xl tracking-tight text-foreground">
                      {result.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
                      {result.snippet}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/documents/${encodeURIComponent(result.id)}`}
                        className="text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                      >
                        Open document
                      </Link>

                      {result.score !== null &&
                        result.score !== undefined && (
                          <span className="text-xs text-muted">
                            Relevance: {result.score}
                          </span>
                        )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}