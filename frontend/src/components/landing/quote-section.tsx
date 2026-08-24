import Image from "next/image";
import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-18 pb-10">
      <div className="lawinc-container-wide">
        <div className="relative min-h-[360px] overflow-hidden ">
          {/* Atmospheric background */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_75%_50%,rgba(184,145,65,0.08),transparent_45%)]
              dark:bg-[radial-gradient(circle_at_75%_50%,rgba(212,160,23,0.08),transparent_45%)]
            "
          />

          {/* Quote image */}
          <Image
            src="/images/lawinc-quote-banner.png"
            alt=""
            fill
            priority={false}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="
              absolute inset-y-0 right-0 hidden w-[65%]
              dark:block
              mask-[linear-gradient(to_left,transparent_0%,black_0%,black_78%,transparent_100%)]
              object-contain
              object-bottom-right
              transition-opacity
              duration-500
            "
          />

          {/* Left fade so text remains readable */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-y-0
              left-0
              w-[70%]
              bg-gradient-to-r
              from-surface
              via-surface/95
              to-transparent
            "
          />

          {/* Content */}
          <div className="relative z-10 flex min-h-[420px] max-w-xl flex-col justify-center px-7 py-12 sm:px-10 lg:px-14">
            <Quote size={42} strokeWidth={1.4} className="mb-8 text-primary" />

            <blockquote className="font-lawinc-serif text-3xl leading-[1.18] tracking-[-0.02em] text-foreground sm:text-4xl">
              The law is not just a set of rules.
              <br />
              It is the foundation of 
              <br className="hidden sm:block" />
              freedom and justice.
            </blockquote>

            <p className="mt-8 text-sm font-medium text-primary">
              — Inspired by the Constitution of India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
