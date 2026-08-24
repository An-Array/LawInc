import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Search,
  MessageSquare,
  Search as SearchIcon,
  History,
  Bookmark,
  Scale,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Light theme atmosphere */}
      <div className="hero-court hero-court-light">
        <Image
          src="/images/hero-light-bg.png"
          alt=""
          fill
          priority
          sizes="62vw"
          className="object-cover object-top-right"
        />
      </div>

      {/* Dark theme atmosphere */}
      <div className="hero-court hero-court-dark">
        <Image
          src="/images/hero-dark-bg.png"
          alt=""
          fill
          priority
          sizes="62vw"
          className="object-cover object-top-right"
        />
      </div>

      {/* Readability gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/85 to-transparent"
      />

      <div className="lawinc-container-wide relative z-10">
        <div className="grid min-h-[calc(100vh-4.5rem)] items-center gap-16 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <HeroCopy />
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="relative z-10 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        AI-powered legal research
      </p>

      <h1 className="mt-6 font-lawinc-serif text-5xl leading-[0.95] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
        Legal research,
        <br />
        built on
        <br />
        <span className="text-primary">verifiable</span> sources.
      </h1>

      <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
        Search across Indian laws, judgments, and legal provisions.
        <br />
        Ask questions in natural language.
        <br />
        Get answers with citations you can trust.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Link
          href="/ask"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-hover"
        >
          Ask LawInc
          <ArrowRight size={16} />
        </Link>

        <Link
          href="/search"
          className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-background/50 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface-muted"
        >
          <Search size={16} />
          Search legal sources
        </Link>
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="relative">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl dark:bg-accent/5"
      />

      <div className="hero-preview relative overflow-hidden rounded-2xl border border-border/70 bg-background/30 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-md dark:bg-background/20">
        <div className="grid min-h-[430px] grid-cols-[.25fr_1fr]">
          <PreviewSidebar />
          <PreviewMain />
        </div>

        <div className="flex items-center justify-between border-t border-border/70 bg-background/10 px-5 py-3 text-[10px] text-muted">
          <span>LawInc Research Workspace</span>

          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-success" />
            Sources verified
          </span>
        </div>
      </div>
    </div>
  );
}

function PreviewSidebar() {
  return (
    <aside className="border-r border-border/70 bg-background/15 p-3">
      <div className="px-2 py-3 font-lawinc-serif text-sm text-foreground">
        <div className="flex items-center gap-2">
          <Scale className="text-primary h-5 w-5" />
          <span>LawInc</span>
        </div>
      </div>

      <div className="mt-5 space-y-1">
        <PreviewNavItem
          icon={<MessageSquare size={14} className="text-primary" />}
          label="Ask"
          active
        />

        <PreviewNavItem
          icon={<SearchIcon size={14} className="text-primary" />}
          label="Search"
        />

        <PreviewNavItem
          icon={<History size={14} className="text-primary" />}
          label="History"
        />

        <PreviewNavItem
          icon={<Bookmark size={14} className="text-primary" />}
          label="Bookmarks"
        />
      </div>
    </aside>
  );
}

function PreviewNavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center gap-2 rounded-md px-2 py-2 text-[11px]",
        active ? "bg-surface-subtle text-foreground" : "text-muted",
      ].join(" ")}
    >
      {icon}
      {label}
    </div>
  );
}

function PreviewMain() {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-border/70 bg-border/10 px-5 py-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
            Legal research
          </p>

          <h2 className="mt-1 font-lawinc-serif text-xl text-foreground">
            Ask LawInc
          </h2>
        </div>

        <span className="rounded-full border border-border px-5 mx-3 py-1 text-[9px] text-muted">
          Indian jurisdiction
        </span>
      </div>

      <div className="p-5">
        <div className="rounded-xl border border-border/70 bg-background/20 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <MessageSquare size={15} className="text-primary" />

            <span className="flex-1 text-xs text-muted">
              What are you researching today?
            </span>
            <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <ArrowRight size={15} />
            </div>
          </div>
        </div>

        <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
          Try asking about
        </p>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <PreviewPrompt>
            What is the punishment under Section 420 IPC?
          </PreviewPrompt>

          <PreviewPrompt>Explain the doctrine of proportionality</PreviewPrompt>

          <PreviewPrompt>What are the grounds for bail?</PreviewPrompt>
        </div>

        <PreviewStats />
      </div>
    </div>
  );
}

function PreviewPrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/15 p-3 text-[10px] leading-4 text-foreground backdrop-blur-sm">
      {children}
    </div>
  );
}

function PreviewStats() {
  const stats = [
    ["50K+", "Legal provisions"],
    ["10K+", "Judgments"],
    ["100%", "Traceable answers"],
    ["24/7", "Research support"],
  ];

  return (
    <div className="mt-12 grid grid-cols-4 border-y border-border">
      {stats.map(([value, label]) => (
        <div
          key={label}
          className="border-r border-border px-3 py-4 text-center last:border-r-0"
        >
          <p className="font-lawinc-serif text-lg text-primary text-strong">
            {value}
          </p>

          <p className="mt-1 text-[8px] text-muted">{label}</p>
        </div>
      ))}
    </div>
  );
}
