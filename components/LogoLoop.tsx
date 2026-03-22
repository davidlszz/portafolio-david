"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

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
  const reducedMotion = useReducedMotion();
  const repeatedItems = [...items, ...items];

  return (
    <div className={`logo-loop-shell overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max items-center gap-3 py-1 md:gap-4"
        animate={
          reducedMotion
            ? undefined
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                duration,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }
        }
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            aria-hidden={index >= items.length}
            className="inline-flex min-w-fit items-center gap-3 rounded-2xl border border-cyan-300/16 bg-slate-950/78 px-4 py-3 text-sm text-cyan-100/82 shadow-[0_14px_30px_rgba(1,8,16,0.18)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-emerald-400/18 bg-emerald-400/10 text-emerald-200">
              {item.icon}
            </span>
            <span className="whitespace-nowrap tracking-[0.14em]">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
