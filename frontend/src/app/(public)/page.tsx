import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Search",
    description:
      "Find legislation, provisions, and legal material through a focused research interface.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Read legal information in context instead of navigating disconnected fragments.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Trace answers back to identifiable legal provisions and authoritative sources.",
  },
];
export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="lawinc-section-lg">
        <div className="lawinc-container">
          <div className="max-w-4xl">
            <p className="lawinc-label lawinc-text-primary">
              Legal research
            </p>

            <h1 className="lawinc-display mt-6">
              Understand the law.
              <br />
              <span className="text-primary">Verify the source.</span>
            </h1>

            <p className="lawinc-body-lg lawinc-prose mt-8 text-muted">
              LawInc helps you explore legal information through clear
              explanations, structured provisions, and traceable sources.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/search"
                className="lawinc-button lawinc-button-primary"
              >
                Search the law
              </Link>

              <Link
                href="/ask"
                className="lawinc-button lawinc-button-secondary"
              >
                Ask LawInc
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border bg-surface-muted">
        <div className="lawinc-container lawinc-section">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {principles.map((principle) => (
              <article key={principle.number}>
                <p className="lawinc-label text-accent">
                  {principle.number}
                </p>

                <h2 className="lawinc-heading-md mt-4">
                  {principle.title}
                </h2>

                <p className="lawinc-body-sm mt-3 text-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="lawinc-section-lg">
        <div className="lawinc-container">
          <div className="max-w-3xl">
            <p className="lawinc-label lawinc-text-primary">
              How LawInc works
            </p>

            <h2 className="lawinc-heading-xl mt-5">
              From question to evidence.
            </h2>

            <p className="lawinc-body-lg mt-6 text-muted">
              Legal research should make it clear not only what an answer is,
              but why that answer can be trusted.
            </p>
          </div>

          <div className="mt-14 grid gap-0 border-y border-border md:grid-cols-4">
            {[
              ["01", "Question"],
              ["02", "Evidence"],
              ["03", "Answer"],
              ["04", "Source"],
            ].map(([number, label], index) => (
              <div
                key={label}
                className={`py-7 ${
                  index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="px-5 md:px-7">
                  <p className="lawinc-metadata">{number}</p>
                  <p className="mt-3 text-lg font-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source principle */}
      <section className="bg-primary text-primary-foreground">
        <div className="lawinc-container lawinc-section-lg">
          <div className="max-w-3xl">
            <p className="lawinc-label opacity-70">The principle</p>

            <h2 className="lawinc-heading-xl mt-5">
              Information should lead back to the law.
            </h2>

            <p className="lawinc-body-lg mt-6 opacity-80">
              LawInc is designed around identifiable legal sources rather than
              answers that exist without evidence.
            </p>

            <div className="mt-10">
              <Link
                href="/search"
                className="lawinc-button"
                style={{
                  background: "var(--primary-foreground)",
                  color: "var(--primary)",
                }}
              >
                Explore legal sources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}