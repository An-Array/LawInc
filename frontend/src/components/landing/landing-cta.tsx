import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-1/2
          -z-10 size-[520px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-primary/5
          blur-3xl
          dark:bg-primary/10
        "
      />

      <div className="lawinc-container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Start researching
          </p>

          <h2 className="mt-6 font-lawinc-serif text-4xl leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
            Find the law.
            <br />
            Understand it.
            <br />
            <span className="text-primary">Verify the source.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Search Indian legal sources and ask questions in natural language,
            with answers grounded in sources you can trace.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/ask"
              className="
                inline-flex items-center gap-2
                rounded-md
                bg-primary
                px-5 py-3
                text-sm font-semibold
                text-primary-foreground
                transition-transform
                hover:-translate-y-0.5
                hover:bg-primary-hover
              "
            >
              Ask LawInc
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/search"
              className="
                inline-flex items-center gap-2
                rounded-md
                border border-border-strong
                bg-background/60
                px-5 py-3
                text-sm font-semibold
                text-foreground
                backdrop-blur-sm
                transition-colors
                hover:bg-surface-muted
              "
            >
              <Search size={16} />
              Search legal sources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}