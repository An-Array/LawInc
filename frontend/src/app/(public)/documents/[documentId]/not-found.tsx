import Link from "next/link";

export default function NotFound() {
  return (
    <main className="lawinc-container-narrow lawinc-section">
      <div className="border-t border-border pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Legal source
        </p>

        <h1 className="mt-4 font-lawinc-serif text-4xl tracking-tight text-foreground sm:text-5xl">
          Document not found.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          The requested legal source does not exist or is no longer available.
        </p>

        <Link
          href="/search"
          className="mt-8 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
          Return to search
        </Link>
      </div>
    </main>
  );
}