"use client";

import { CSSProperties, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeContent({
  children,
  className = "",
  delay = 0,
}: FadeContentProps) {
  return (
    <div
      className={`fade-content ${className}`}
      style={{ "--enter-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
