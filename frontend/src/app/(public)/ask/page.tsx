import AskForm from "@/components/ask/ask-form";

export default function AskPage() {
  return (
    <main>
      <section className="lawinc-section-lg">
        <div className="lawinc-container-narrow">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Legal research
            </p>

            <h1 className="mt-5 font-lawinc-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Ask LawInc.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Ask a legal question and receive an answer grounded in available
              legal sources.
            </p>
          </div>

          <div className="mt-12">
            <AskForm />
          </div>
        </div>
      </section>
    </main>
  );
}