import {
  BookOpen,
  MessageSquareText,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: "Search",
    description:
      "Find relevant laws, provisions, judgments, and legal sources instantly.",
    icon: Search,
  },
  {
    title: "Ask",
    description:
      "Ask legal questions in natural language and receive grounded answers.",
    icon: MessageSquareText,
  },
  {
    title: "Verify",
    description:
      "Trace every answer back to the legal sources supporting it.",
    icon: ShieldCheck,
  },
  {
    title: "Read",
    description:
      "Access the underlying legal material instead of relying on summaries alone.",
    icon: BookOpen,
  },
];

export default function Capabilities() {
  return (
    <section className="">
      <div className="lawinc-container-wide lg:py-10">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="mt-4 font-lawinc-serif text-4xl leading-tight tracking-[-0.025em] text-foreground sm:text-5xl">
            Everything you need for
            <br />
            confident legal research.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.title}
              capability={capability}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  capability,
}: {
  capability: Capability;
}) {
  const Icon = capability.icon;

  return (
    <article
      className="
        group
        relative
        min-h-[220px]
        overflow-hidden
        rounded-xl
        border border-border
        bg-surface
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-border-strong
        hover:shadow-lg
        dark:bg-surface/70
      "
    >
      {/* subtle card glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          size-32
          rounded-full
          bg-primary/5
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Header */}
      <div className="relative flex items-start justify-between">
          <Icon
            size={21}
            strokeWidth={1.6} className="flex
            size-11
            items-center
            justify-center
            text-primary
            transition-colors
            duration-300
            group-hover:border-primary/30"
          />
      </div>

      {/* Content */}
      <div className="relative mt-5">
        <h3 className="font-lawinc-serif text-2xl tracking-tight font-bold text-foreground">
          {capability.title}
        </h3>

        <p className="mt-2 max-w-[240px] text-sm leading-6 text-muted">
          {capability.description}
        </p>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-6
          right-6
          h-px
          origin-left
          scale-x-0
          bg-primary/50
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />
    </article>
  );
}