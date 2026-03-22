"use client";

import { ReactNode } from "react";
import GradualBlur from "./GradualBlur";
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
    leftGlow: "bg-cyan-300/14",
    rightGlow: "bg-emerald-400/12",
    border: "from-cyan-300/35 via-white/0 to-emerald-300/35",
  },
  cyan: {
    leftGlow: "bg-cyan-300/16",
    rightGlow: "bg-sky-300/12",
    border: "from-cyan-300/45 via-white/0 to-sky-300/35",
  },
  emerald: {
    leftGlow: "bg-emerald-300/16",
    rightGlow: "bg-lime-300/12",
    border: "from-emerald-300/45 via-white/0 to-lime-300/35",
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
      className={`section-shell section-shell-react mx-auto w-full max-w-[1180px] overflow-hidden rounded-[2rem] ${className}`}
    >
      <GradualBlur className="h-full">
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-[-4rem] top-[-3rem] h-44 w-44 rounded-full blur-3xl ${styles.leftGlow}`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-[-4rem] right-[-2rem] h-52 w-52 rounded-full blur-3xl ${styles.rightGlow}`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r ${styles.border}`}
        />
        <div aria-hidden="true" className="section-grid-glow" />
        <div aria-hidden="true" className="react-lens react-lens-top" />
        <div aria-hidden="true" className="react-lens react-lens-bottom" />
        <div className={`relative z-10 p-6 md:p-10 lg:p-12 ${innerClassName}`}>{children}</div>
      </GradualBlur>
    </ScrollStack>
  );
}
