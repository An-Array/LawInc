"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import WorkspaceSidebar from "./workspace-sidebar";

export default function WorkspaceShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative flex h-dvh overflow-hidden bg-background text-foreground">
      <WorkspaceSidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((current) => !current)}
      />

      {!sidebarOpen && (
        <button
          type="button"
          aria-label="Open sidebar"
          onClick={() => setSidebarOpen(true)}
          className="
            fixed left-4 top-4 z-50
            flex size-9 items-center justify-center
            rounded-lg
            border border-border
            bg-surface
            text-foreground
            shadow-sm
            transition-colors
            hover:bg-surface-muted
          "
        >
          <Menu size={18} />
        </button>
      )}

      <main className="min-w-0 flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}