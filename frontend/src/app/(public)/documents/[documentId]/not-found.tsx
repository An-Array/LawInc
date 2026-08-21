import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <h1 className="text-2xl font-semibold text-black">
        Document not found
      </h1>

      <Link
        href="/search"
        className="mt-6 inline-block text-sm text-gray-500 underline"
      >
        Return to search
      </Link>
    </main>
  );
}