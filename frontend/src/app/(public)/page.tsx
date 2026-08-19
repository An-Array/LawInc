import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
        LawInc
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
        Legal research, built on verifiable sources.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        The public LawInc experience will provide clear legal research with
        traceable citations.
      </p>
      <div className="mt-10">
        <Link
          className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
          href="/admin"
        >
          Open admin foundation
        </Link>
      </div>
    </main>
  );
}