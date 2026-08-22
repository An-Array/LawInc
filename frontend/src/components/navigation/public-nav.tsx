import Link from "next/link";
import ThemeToggle from "../theme/theme-toggle";

const navigationItems = [
  {
    href: "/search",
    label: "Search",
  },
  {
    href: "/ask",
    label: "Ask LawInc",
  },
];

export default function PublicNav() {
  return (
    <header className="border-b border-border bg-background">
      <nav
        aria-label="Main navigation"
        className="lawinc-container-wide flex min-h-18 items-center justify-between gap-8"
      >
        <Link
          href="/"
          className="shrink-0 font-lawinc-serif text-2xl font-medium tracking-tight text-foreground"
        >
          LawInc
        </Link>

        <div className="flex items-center gap-1">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/admin"
            className="ml-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-border-strong hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Admin
          </Link>
          <ThemeToggle/>
        </div>
      </nav>
    </header>
  );
}