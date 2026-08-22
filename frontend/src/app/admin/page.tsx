export default function AdminPage() {
  return (
    <main className="lawinc-container-narrow lawinc-section">
      <div className="border-t border-border pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          LawInc administration
        </p>

        <h1 className="mt-4 font-lawinc-serif text-4xl tracking-tight text-foreground sm:text-5xl">
          Admin foundation.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          Administrative workflows will live here, inside the same Next.js
          application. Authentication and operational features come later.
        </p>

        <div className="mt-12 border-y border-border py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Current scope
          </p>

          <p className="mt-3 text-sm leading-6 text-muted">
            The administrative interface is intentionally limited until
            authentication and operational workflows are implemented.
          </p>
        </div>
      </div>
    </main>
  );
}