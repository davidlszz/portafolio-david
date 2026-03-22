"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.32, 0.85, 1], [88, 0, 0, -24]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.78, 1],
    [0.952 - depth * 0.004, 1, 1, 0.985],
  );
  const rotate = useTransform(scrollYProgress, [0, 0.3, 1], [0.75, 0, -0.35]);
  const opacity = useTransform(scrollYProgress, [0, 0.14, 1], [0.55, 1, 0.96]);

  return (
    <motion.div
      ref={ref}
      style={reducedMotion ? undefined : { y, scale, rotateZ: rotate, opacity }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}
