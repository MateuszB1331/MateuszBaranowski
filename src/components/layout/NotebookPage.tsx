import type { ReactNode } from "react";

const GRID_SIZE = 32;
const MARGIN_LEFT = 56;

/**
 * Full-page grid-paper background with a red margin rule, like an open
 * engineer's notebook. Scrolls together with the content.
 */
export function NotebookPage({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative min-h-screen w-full bg-paper"
      style={{
        backgroundImage: `
          linear-gradient(var(--color-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)
        `,
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        backgroundPosition: `${MARGIN_LEFT}px 0`,
        backgroundColor: "var(--color-paper)",
        backgroundAttachment: "local",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 hidden sm:block"
        style={{ left: MARGIN_LEFT, width: 1.5, background: "var(--color-margin)", opacity: 0.55 }}
      />
      {children}
    </div>
  );
}

export const NOTEBOOK_MARGIN = MARGIN_LEFT;
