"use client";

import { CSSProperties, ReactNode } from "react";

interface AnimatedContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedContent({
  children,
  className = "",
  delay = 0,
}: AnimatedContentProps) {
  return (
    <div
      className={`animated-content ${className}`}
      style={{ "--enter-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
