"use client";

import { CSSProperties, ReactNode } from "react";

interface LogoLoopItem {
  label: string;
  icon: ReactNode;
}

interface LogoLoopProps {
  items: readonly LogoLoopItem[];
  className?: string;
  duration?: number;
  reverse?: boolean;
}

export default function LogoLoop({
  items,
  className = "",
  duration = 24,
  reverse = false,
}: LogoLoopProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className={`logo-loop-shell overflow-hidden ${className}`}>
      <div
        className={`logo-loop-track ${reverse ? "logo-loop-track-reverse" : ""}`}
        style={{ "--loop-duration": `${duration}s` } as CSSProperties}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            aria-hidden={index >= items.length}
            className="inline-flex min-w-fit items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2.5 text-sm text-[color:var(--muted)] shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[color:var(--panel-strong)] text-[color:var(--accent)]">
              {item.icon}
            </span>
            <span className="whitespace-nowrap tracking-[0.14em]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
