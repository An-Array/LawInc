import {
  ArrowRight,
  Bookmark,
  History,
  MessageSquare,
  Scale,
  Search,
} from "lucide-react";

const suggestions = [
  "What is the punishment under Section 420 IPC?",
  "Explain the doctrine of proportionality",
  "What are the grounds for bail?",
];

export default function ProductPreview() {
  return (
    <div className="relative w-full max-w-2xl">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/5 blur-3xl"
      />

      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/10">
        <div className="grid min-h-[430px] grid-cols-[92px_1fr]">
          {/* Sidebar */}
          <aside className="border-r border-border bg-surface-muted/70 p-3">
            <div className="flex items-center gap-2 px-2 py-3">
              <Scale className="h-4 w-4 text-primary" />
              <span className="hidden text-sm font-semibold xl:block">
                LawInc
              </span>
            </div>

            <div className="mt-6 space-y-1">
              <PreviewNavItem
                icon={MessageSquare}
                label="Ask"
                active
              />
              <PreviewNavItem icon={Search} label="Search" />
              <PreviewNavItem icon={History} label="History" />
              <PreviewNavItem icon={Bookmark} label="Bookmarks" />
            </div>
          </aside>

          {/* Main preview */}
          <div className="flex min-w-0 flex-col">
            <div className="border-b border-border px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Legal research
                  </p>
                  <h3 className="mt-1 font-lawinc-serif text-xl tracking-tight">
                    Ask LawInc
                  </h3>
                </div>

                <div className="hidden rounded-full border border-border px-3 py-1 text-[10px] text-muted sm:block">
                  Indian jurisdiction
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="rounded-xl border border-border bg-background p-1">
                <div className="flex min-h-20 items-center gap-3 rounded-lg px-4">
                  <MessageSquare className="h-4 w-4 shrink-0 text-muted" />

                  <span className="flex-1 text-sm text-muted">
                    What are you researching today?
                  </span>

                  <button
                    type="button"
                    aria-label="Submit research question"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform hover:scale-105"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Try asking about
                </p>

                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion}
                      className="rounded-lg border border-border bg-surface-muted px-3 py-3 text-xs leading-5 text-foreground transition-colors hover:border-border-strong"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="grid grid-cols-3 border-y border-border">
                  <PreviewStat value="50K+" label="Legal provisions" />
                  <PreviewStat value="10K+" label="Judgments" />
                  <PreviewStat value="100%" label="Traceable answers" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview footer */}
        <div className="border-t border-border bg-surface-muted px-5 py-3">
          <div className="flex items-center justify-between gap-4 text-[10px] text-muted">
            <span>LawInc Research Workspace</span>

            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Sources verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

type PreviewNavItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
};

function PreviewNavItem({
  icon: Icon,
  label,
  active = false,
}: PreviewNavItemProps) {
  return (
    <div
      className={[
        "flex items-center justify-center gap-2 rounded-md px-2 py-2.5 text-xs transition-colors xl:justify-start",
        active
          ? "bg-background text-foreground shadow-sm"
          : "text-muted",
      ].join(" ")}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />
      <span className="hidden xl:block">{label}</span>
    </div>
  );
}

type PreviewStatProps = {
  value: string;
  label: string;
};

function PreviewStat({ value, label }: PreviewStatProps) {
  return (
    <div className="px-3 py-4 text-center first:border-r first:border-border last:border-l last:border-border">
      <p className="font-lawinc-serif text-lg text-foreground">{value}</p>
      <p className="mt-1 text-[9px] leading-4 text-muted">{label}</p>
    </div>
  );
}