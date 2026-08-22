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
      <main className="lawinc-container-narrow lawinc-section">
        <div
          role="alert"
          className="border border-danger/30 bg-danger/5 px-5 py-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-danger">
            Document unavailable
          </p>

          <p className="mt-3 text-sm leading-6 text-muted">
            The requested legal source could not be retrieved.
          </p>

          <Link
            href="/search"
            className="mt-5 inline-block text-sm font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Return to search
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="lawinc-container-narrow lawinc-section">
      <Link
        href="/search"
        className="text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        ← Back to search
      </Link>

      <article className="mt-12">
        <header className="border-b border-border pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal source
          </p>

          <h1 className="mt-4 font-lawinc-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            {document.title}
          </h1>

          <p className="mt-4 text-sm text-muted">
            Source ID: {document.id}
          </p>
        </header>

        <section className="pt-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Document text
          </p>

          <div className="border-y border-border py-8">
            <p className="whitespace-pre-wrap text-base leading-8 text-foreground">
              {document.content}
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}