import SearchForm from "@/components/search/search-form";

export default function SearchPage() {
  return (
    <main className="min-h-full">
      <div className="mx-auto flex min-h-full w-full max-w-4xl px-6">
        <SearchForm />
      </div>
    </main>
  );
}