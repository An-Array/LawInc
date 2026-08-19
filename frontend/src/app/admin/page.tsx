import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
        LawInc administration
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
        Admin foundation
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Administrative workflows will live here, inside the same Next.js
        application. Authentication and operational features come later.
      </p>
      <div className="mt-10">
        <Link className="text-sm font-semibold text-slate-950 underline" href="/">
          Return to LawInc
        </Link>
      </div>
    </main>
  );
}