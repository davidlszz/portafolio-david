"use client";

import { CSSProperties, ReactNode } from "react";

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export default function ScrollStack({
  children,
  className = "",
  depth = 0,
}: ScrollStackProps) {
  return (
    <div
      className={`scroll-stack-shell ${className}`}
      style={{ "--stack-depth": depth } as CSSProperties}
    >
      {children}
    </div>
  );
}
