import Link from "next/link";
import type { ReactNode } from "react";

type WorkspaceNavItemProps = {
  href: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
};

export default function WorkspaceNavItem({
  href,
  icon,
  label,
  active = false,
}: WorkspaceNavItemProps) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-3 rounded-lg px-3 py-2.5",
        "transition-colors",
        active
          ? "bg-surface-muted text-foreground"
          : "text-muted hover:bg-surface-muted hover:text-foreground",
      ].join(" ")}
    >
      {icon}

      <span className="text-sm">
        {label}
      </span>
    </Link>
  );
}