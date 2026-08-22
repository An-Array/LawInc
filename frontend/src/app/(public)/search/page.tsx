import SearchForm from "@/components/search/search-form";

export default function SearchPage() {
  return (
    <main className="lawinc-container-narrow lawinc-section-lg">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Legal research
        </p>

        <h1 className="mt-4 font-lawinc-serif text-5xl tracking-tight text-foreground sm:text-6xl">
          Search legal sources.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Search across available legal sources and provisions.
        </p>
      </header>

      <div className="mt-12">
        <SearchForm />
      </div>
    </main>
  );
}