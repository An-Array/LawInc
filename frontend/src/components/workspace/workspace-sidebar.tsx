"use client";

import Link from "next/link";
import {
  Bookmark,
  History,
  MessageSquare,
  PanelLeftClose,
  Plus,
  Scale,
  Search,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

import WorkspaceNavItem from "./workspace-nav-item";

type WorkspaceSidebarProps = {
  open: boolean;
  onToggle: () => void;
};

export default function WorkspaceSidebar({
  open,
  onToggle,
}: WorkspaceSidebarProps) {
  const pathname = usePathname();

  const isAsk =
    pathname === "/ask" ||
    (pathname.startsWith("/ask/") &&
      !pathname.startsWith("/ask/history") &&
      !pathname.startsWith("/ask/bookmarks"));

  const isSearch = pathname === "/search";

  const isHistory =
    pathname === "/history" ||
    pathname.startsWith("/history/");

  const isBookmarks =
    pathname === "/bookmarks" ||
    pathname.startsWith("/bookmarks/");

  const isSettings =
    pathname === "/settings" ||
    pathname.startsWith("/settings/");

  return (
    <aside
      className={[
        "z-40 h-dvh w-60 shrink-0",
        "overflow-hidden",
        "border-r border-border bg-surface",
        "transition-all duration-200 ease-out",
        open
          ? "translate-x-0"
          : "-translate-x-full w-0 border-r-0",
      ].join(" ")}
    >
      <div className="flex h-full w-60 flex-col">
        {/* Header */}
        <div className="flex h-17 items-center justify-between border-b border-border px-5">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Scale
              size={19}
              strokeWidth={1.8}
              className="text-primary"
            />

            <span className="font-lawinc-serif text-lg text-foreground">
              LawInc
            </span>
          </Link>

          <button
            type="button"
            onClick={onToggle}
            aria-label="Hide sidebar"
            className="
              flex size-8 items-center justify-center
              rounded-md
              text-muted
              transition-colors
              hover:bg-surface-muted
              hover:text-foreground
            "
          >
            <PanelLeftClose size={17} />
          </button>
        </div>

        {/* New research */}
        <div className="px-3 pt-4">
          <Link
            href="/ask"
            className="
              flex items-center gap-2
              rounded-lg
              border border-border
              px-3 py-2.5
              text-sm font-medium
              text-foreground
              transition-colors
              hover:bg-surface-muted
            "
          >
            <Plus size={16} />
            <span>New research</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          <WorkspaceNavItem
            href="/ask"
            icon={<MessageSquare size={16} />}
            label="Ask"
            active={isAsk}
          />

          <WorkspaceNavItem
            href="/search"
            icon={<Search size={16} />}
            label="Search"
            active={isSearch}
          />

          <WorkspaceNavItem
            href="/history"
            icon={<History size={16} />}
            label="History"
            active={isHistory}
          />

          <WorkspaceNavItem
            href="/bookmarks"
            icon={<Bookmark size={16} />}
            label="Bookmarks"
            active={isBookmarks}
          />
        </nav>

        {/* Recent */}
        <div className="mt-8 px-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Recent
          </p>

          <div className="mt-3 space-y-1">
            <button
              type="button"
              className="
                w-full truncate rounded-md px-2 py-2
                text-left text-xs text-muted
                transition-colors
                hover:bg-surface-muted
                hover:text-foreground
              "
            >
              Grounds for anticipatory bail
            </button>

            <button
              type="button"
              className="
                w-full truncate rounded-md px-2 py-2
                text-left text-xs text-muted
                transition-colors
                hover:bg-surface-muted
                hover:text-foreground
              "
            >
              Section 420 IPC
            </button>

            <button
              type="button"
              className="
                w-full truncate rounded-md px-2 py-2
                text-left text-xs text-muted
                transition-colors
                hover:bg-surface-muted
                hover:text-foreground
              "
            >
              Doctrine of proportionality
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto border-t border-border p-3">
          <WorkspaceNavItem
            href="/settings"
            icon={<Settings size={16} />}
            label="Settings"
            active={isSettings}
          />
        </div>
      </div>
    </aside>
  );
}