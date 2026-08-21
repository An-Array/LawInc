import AskForm from "@/components/ask/ask-form";

export default function AskPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black-400">
        LawInc
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-black">
        Ask LawInc
      </h1>

      <p className="mt-4 max-w-2xl text-black-400">
        Ask a legal question and receive an answer supported by available
        legal sources.
      </p>

      <div className="mt-10">
        <AskForm />
      </div>
    </main>
  );
}