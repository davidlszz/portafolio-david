"use client";

import { CSSProperties, ReactNode } from "react";
import useRevealOnScroll from "./useRevealOnScroll";

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
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`fade-content ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--enter-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
