import SearchForm  from "@/components/search/search-form";

export default function SearchPage() {
  return (
<main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black-400">
        LawInc
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-black">
        Search legal sources
      </h1>

      <p className="mt-4 max-w-2xl text-black-400">
        Search across available legal sources and provisions.
      </p>

      <div className="mt-10">
        <SearchForm />
      </div>
    </main>
  );
}