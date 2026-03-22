"use client";

import { ReactNode } from "react";
import ScrollStack from "./ScrollStack";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  accent?: "mixed" | "cyan" | "emerald";
  depth?: number;
}

const accentStyles = {
  mixed: {
    leftGlow: "bg-[color:var(--accent)]/18",
    rightGlow: "bg-[color:var(--secondary)]/18",
    border: "from-[color:var(--accent)]/60 via-white/0 to-[color:var(--secondary)]/45",
  },
  cyan: {
    leftGlow: "bg-[color:var(--secondary)]/18",
    rightGlow: "bg-white/8",
    border: "from-[color:var(--secondary)]/55 via-white/0 to-white/30",
  },
  emerald: {
    leftGlow: "bg-[color:var(--accent-strong)]/18",
    rightGlow: "bg-[color:var(--accent)]/14",
    border: "from-[color:var(--accent-strong)]/55 via-white/0 to-[color:var(--accent)]/35",
  },
} as const;

export default function SectionCard({
  children,
  className = "",
  innerClassName = "",
  accent = "mixed",
  depth = 0,
}: SectionCardProps) {
  const styles = accentStyles[accent];

  return (
    <ScrollStack
      depth={depth}
      className={`section-shell mx-auto w-full max-w-[1180px] overflow-hidden rounded-[2rem] ${className}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-[-3rem] top-[-2rem] h-36 w-36 rounded-full blur-3xl ${styles.leftGlow}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[-4rem] right-[-2rem] h-44 w-44 rounded-full blur-3xl ${styles.rightGlow}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r ${styles.border}`}
      />
      <div aria-hidden="true" className="section-grid-glow" />
      <div aria-hidden="true" className="section-sheen" />
      <div className={`relative z-10 p-6 md:p-10 lg:p-12 ${innerClassName}`}>{children}</div>
    </ScrollStack>
  );
}
