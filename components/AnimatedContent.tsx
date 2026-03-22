"use client";

import { CSSProperties, ReactNode } from "react";
import useRevealOnScroll from "./useRevealOnScroll";

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
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`animated-content ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--enter-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
