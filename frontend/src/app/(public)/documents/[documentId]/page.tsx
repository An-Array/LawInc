import Link from "next/link";

import { getDocument } from "@/lib/api/documents";

type DocumentPageProps = {
  params: Promise<{
    documentId: string;
  }>;
};

export default async function DocumentPage({
  params,
}: DocumentPageProps) {
  const { documentId } = await params;

  const document = await getDocument(documentId);

  if (!document) {
    return (
      <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
        <p className="text-sm text-red-400">
          Document unavailable.
        </p>

        <Link
          href="/search"
          className="mt-6 inline-block text-sm font-semibold text-white underline"
        >
          Return to search
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <Link
        href="/search"
        className="text-sm text-slate-400 underline"
      >
        ← Back to search
      </Link>

      <article className="mt-8">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          {document.title}
        </h1>

        <div className="mt-8 rounded-lg border border-slate-700 bg-slate-900 p-6">
          <p className="whitespace-pre-wrap leading-8 text-slate-300">
            {document.content}
          </p>
        </div>
      </article>
    </main>
  );
}