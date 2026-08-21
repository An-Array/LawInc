"use client"

import { FormEvent, useState } from "react"

import { searchLegal,type SearchResponse } from "@/lib/api/search"

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if(!trimmedQuery) {
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
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search legal provisions...."
        className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-400"
        aria-label="Search legal provisions"
        />
        <button
        type="submit"
        disabled={loading || !query.trim()}
        className="rounded-md bg-slate-400 px-5 py-3 font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      <div className="mt-8">
        {error && (
          <p className="text-sm text-red-400">
            Unable to connect to the search service.
          </p>
        )}

        {!loading && !error && results && results.results.length === 0 && (
          <p className="text-sm text-slate-400">
            No results found.
          </p>
        )}

        {!loading && !error && results && results.results.length > 0 && (
          <div className="space-y-4">
            {results.results.map((result) => (
              <article
                key={result.id}
                className="rounded-lg border border-slate-700 bg-slate-900 p-5"
              >
                <h2 className="text-lg font-semibold text-white">
                  {result.title}
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  {result.snippet}
                </p>

                {result.score !== null && (
                  <p className="mt-3 text-xs text-slate-500">
                    Relevance: {result.score}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}