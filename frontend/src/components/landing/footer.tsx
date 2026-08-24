import Link from "next/link";

const links = [
  { href: "/search", label: "Search" },
  { href: "/ask", label: "Ask LawInc" },
  { href: "/admin", label: "Admin" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="lawinc-container-wide">
        <div className="flex flex-col gap-10 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="font-lawinc-serif text-2xl text-foreground"
            >
              LawInc
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
              Legal research grounded in verifiable sources.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-sm text-muted
                  transition-colors
                  hover:text-foreground
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LawInc</p>
          <p>Built for Indian legal research.</p>
        </div>
      </div>
    </footer>
  );
}