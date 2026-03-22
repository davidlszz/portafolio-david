"use client";

import { CSSProperties, ReactNode } from "react";
import useRevealOnScroll from "./useRevealOnScroll";

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
  const { ref, isVisible } = useRevealOnScroll({ rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

  return (
    <div
      ref={ref}
      className={`scroll-stack-shell ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--stack-depth": depth } as CSSProperties}
    >
      {children}
    </div>
  );
}
