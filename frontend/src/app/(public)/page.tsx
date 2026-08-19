export const dynamic = "force-dynamic"
import Link from "next/link";

import { getApiHealth } from "@/lib/lawinc-api";

export default async function HomePage() {
  const health = await getApiHealth();

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

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5">
        <h2 className="font-semibold text-slate-950">Backend connection</h2>
        {health ? (
          <p className="mt-2 text-sm text-emerald-700">
            Connected to {health.service} v{health.version} (
            {health.environment}).
          </p>
        ) : (
          <p className="mt-2 text-sm text-amber-700">
            Backend unavailable. The frontend can still be developed
            independently.
          </p>
        )}
      </section>

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