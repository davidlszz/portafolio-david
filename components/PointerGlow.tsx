"use client";

import { useEffect, useRef } from "react";

export default function PointerGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const pointer = { x: window.innerWidth / 2, y: 220 };
    const target = { x: pointer.x, y: pointer.y };
    let animationId = 0;

    const handleMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const handleLeave = () => {
      target.x = window.innerWidth / 2;
      target.y = 220;
    };

    const render = () => {
      pointer.x += (target.x - pointer.x) * 0.12;
      pointer.y += (target.y - pointer.y) * 0.12;
      glow.style.transform = `translate3d(${pointer.x - 220}px, ${pointer.y - 220}px, 0)`;
      animationId = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);
    animationId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <div ref={glowRef} aria-hidden="true" className="pointer-glow" />;
}
