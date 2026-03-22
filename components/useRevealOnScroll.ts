"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  rootMargin?: string;
  threshold?: number;
}

export default function useRevealOnScroll(options?: RevealOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: options?.rootMargin ?? "0px 0px -12% 0px",
        threshold: options?.threshold ?? 0.14,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, options?.rootMargin, options?.threshold]);

  return { ref, isVisible };
}
