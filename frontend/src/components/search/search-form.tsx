"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Gavel,
  Search,
  Scale,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import {
  searchLegal,
  type SearchResponse,
} from "@/lib/api/search";

const suggestions = [
  {
    icon: Scale,
    label: "Constitutional law",
    query: "Article 21 fundamental rights",
  },
  {
    icon: Gavel,
    label: "Criminal law",
    query: "Section 420 IPC",
  },
  {
    icon: BookOpen,
    label: "Legal provisions",
    query: "grounds for bail",
  },
  {
    icon: Search,
    label: "Case law",
    query: "doctrine of proportionality",
  },
];

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

  function selectSuggestion(value: string) {
    setQuery(value);
  }

  const hasSearched = results !== null || error;

  return (
    <div className="flex min-h-full w-full flex-col py-12 sm:py-16">
      {!hasSearched ? (
        <SearchEmptyState
          query={query}
          setQuery={setQuery}
          loading={loading}
          onSubmit={handleSubmit}
          onSuggestion={selectSuggestion}
        />
      ) : (
        <SearchResultsState
          query={query}
          results={results}
          loading={loading}
          error={error}
          setQuery={setQuery}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

function SearchEmptyState({
  query,
  setQuery,
  loading,
  onSubmit,
  onSuggestion,
}: {
  query: string;
  setQuery: (value: string) => void;
  loading: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSuggestion: (value: string) => void;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="mx-auto w-full max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Legal source search
          </p>

          <h1 className="mt-5 font-lawinc-serif text-4xl leading-tight tracking-[-0.025em] text-foreground sm:text-5xl">
            Find the law you are looking for.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base">
            Search across Indian provisions, judgments, cases, doctrines,
            and other legal sources.
          </p>
        </div>

        <div className="mt-10">
          <SearchComposer
            query={query}
            setQuery={setQuery}
            loading={loading}
            onSubmit={onSubmit}
          />
        </div>

        <div className="mt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Try searching
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            {suggestions.map((suggestion) => {
              const Icon = suggestion.icon;

              return (
                <button
                  key={suggestion.query}
                  type="button"
                  onClick={() => onSuggestion(suggestion.query)}
                  className="
                    group flex items-center gap-3
                    rounded-lg
                    border border-border
                    bg-surface/50
                    px-4 py-3
                    text-left
                    transition-all
                    hover:border-border-strong
                    hover:bg-surface
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className="shrink-0 text-primary"
                  />

                  <span className="min-w-0">
                    <span className="block text-xs text-muted">
                      {suggestion.label}
                    </span>

                    <span className="mt-1 block truncate text-sm text-foreground">
                      {suggestion.query}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
function SearchComposer({
  query,
  setQuery,
  loading,
  onSubmit,
}: {
  query: string;
  setQuery: (value: string) => void;
  loading: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <div
        className="
          overflow-hidden
          rounded-2xl
          border border-border-strong
          bg-surface
          shadow-[0_12px_40px_-20px_rgba(0,0,0,0.25)]
          transition-shadow
          focus-within:shadow-[0_16px_50px_-20px_rgba(0,0,0,0.35)]
        "
      >
        <div className="flex items-center gap-3 px-5 py-5">
          <Search
            size={19}
            strokeWidth={1.7}
            className="shrink-0 text-muted"
          />

          <input
            id="legal-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Indian legal sources..."
            aria-label="Search legal provisions"
            disabled={loading}
            className="
              min-w-0 flex-1
              border-0
              bg-transparent
              text-base
              text-foreground
              outline-none
              placeholder:text-muted/60
              disabled:opacity-60
            "
          />

          <button
            type="submit"
            disabled={loading || !query.trim()}
            aria-label="Search"
            className="
              flex size-9 shrink-0
              items-center justify-center
              rounded-full
              bg-primary
              text-primary-foreground
              transition-all
              hover:-translate-y-0.5
              hover:bg-primary-hover
              disabled:cursor-not-allowed
              disabled:opacity-30
              disabled:hover:translate-y-0
            "
          >
            {loading ? (
              <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
              <ArrowRight size={17} />
            )}
          </button>
        </div>

        <div className="border-t border-border px-5 py-3">
          <span className="flex items-center gap-2 text-[11px] text-muted">
            <span className="size-1.5 rounded-full bg-success" />
            Legal sources enabled
          </span>
        </div>
      </div>
    </form>
  );
}
function SearchResultsState({
  query,
  results,
  loading,
  error,
  setQuery,
  onSubmit,
}: {
  query: string;
  results: SearchResponse | null;
  loading: boolean;
  error: boolean;
  setQuery: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-8">
        <SearchComposer
          query={query}
          setQuery={setQuery}
          loading={loading}
          onSubmit={onSubmit}
        />
      </div>

      {error && <SearchError />}

      {!loading && !error && results && (
        <>
          {results.results.length === 0 ? (
            <NoResults query={results.query} />
          ) : (
            <ResultsList results={results} />
          )}
        </>
      )}
    </div>
  );
}
function ResultsList({
  results,
}: {
  results: SearchResponse;
}) {
  return (
    <section>
      <div className="border-b border-border pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Search results
        </p>

        <h2 className="mt-3 font-lawinc-serif text-3xl tracking-tight text-foreground">
          Results for {results.query}
        </h2>

        <p className="mt-2 text-sm text-muted">
          {results.results.length}{" "}
          {results.results.length === 1 ? "source" : "sources"} found.
        </p>
      </div>

      <div className="divide-y divide-border">
        {results.results.map((result, index) => (
          <article
            key={result.id}
            className="py-7 first:pt-6 last:pb-6"
          >
            <div className="flex gap-5">
              <span className="shrink-0 pt-1 text-xs font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-lawinc-serif text-xl tracking-tight text-foreground">
                  {result.title}
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                  {result.snippet}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-5">
                  <Link
                    href={`/documents/${encodeURIComponent(result.id)}`}
                    className="
                      inline-flex items-center gap-1.5
                      text-sm font-semibold
                      text-primary
                      transition-colors
                      hover:text-primary-hover
                    "
                  >
                    Open document
                    <ArrowRight size={14} />
                  </Link>

                  {result.score !== null &&
                    result.score !== undefined && (
                      <span className="text-xs text-muted">
                        Relevance {result.score}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function NoResults({
  query,
}: {
  query: string;
}) {
  return (
    <section className="border-t border-border pt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        No results
      </p>

      <h2 className="mt-3 font-lawinc-serif text-3xl tracking-tight text-foreground">
        Nothing matched {query}.
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
        Try a broader legal term, provision, case name, doctrine, or
        jurisdiction.
      </p>
    </section>
  );
}
function SearchError() {
  return (
    <div
      role="alert"
      className="
        rounded-lg
        border border-danger/30
        bg-danger/5
        px-5 py-4
      "
    >
      <p className="text-sm font-semibold text-danger">
        Unable to search legal sources.
      </p>

      <p className="mt-1 text-sm text-muted">
        The research service could not process this search. Please try again.
      </p>
    </div>
  );
}