export default function Loading() {
  return (
    <main className="lawinc-container-narrow lawinc-section">
      <div className="animate-pulse">
        <div className="h-4 w-28 rounded bg-surface-muted" />

        <div className="mt-12 border-b border-border pb-8">
          <div className="h-3 w-24 rounded bg-surface-muted" />

          <div className="mt-5 h-12 w-3/4 rounded bg-surface-muted" />

          <div className="mt-4 h-4 w-40 rounded bg-surface-muted" />
        </div>

        <div className="pt-10">
          <div className="h-3 w-28 rounded bg-surface-muted" />

          <div className="mt-6 space-y-4 border-y border-border py-8">
            <div className="h-4 w-full rounded bg-surface-muted" />
            <div className="h-4 w-full rounded bg-surface-muted" />
            <div className="h-4 w-11/12 rounded bg-surface-muted" />
            <div className="h-4 w-full rounded bg-surface-muted" />
            <div className="h-4 w-4/5 rounded bg-surface-muted" />
          </div>
        </div>
      </div>
    </main>
  );
}