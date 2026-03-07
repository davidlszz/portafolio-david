"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const reducedMotion = useReducedMotion();
  const words = useMemo(
    () =>
      lang === "es"
        ? ["Cybersecurity", "Infraestructura", "DevSecOps"]
        : ["Cybersecurity", "Infrastructure", "DevSecOps"],
    [lang],
  );
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [reducedMotion, words]);

  return (
    <section
      id="home"
      className="relative flex min-h-[90svh] scroll-mt-28 items-center justify-center px-4 py-24 text-center md:min-h-screen md:px-6"
    >
      <div className="section-shell w-full max-w-5xl rounded-2xl p-8 md:p-12">
        <motion.p
          className="mb-4 font-mono text-sm tracking-[0.22em] text-cyan-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SECURITY.OPS // ONLINE
        </motion.p>

        <motion.h1
          className="cyber-title mb-4 text-4xl font-extrabold text-white md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          David Lopez Sanchez
        </motion.h1>

        <motion.p
          className="mb-5 text-lg font-semibold text-emerald-300 md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.16 }}
        >
          {lang === "es" ? "Especialidad:" : "Specialty:"}{" "}
          <span
            className="inline-block min-w-[11ch] border-r-2 border-cyan-300 pr-1 text-cyan-200"
            style={{ animation: reducedMotion ? "none" : "blink-caret 0.85s steps(1) infinite" }}
          >
            {words[wordIndex]}
          </span>
        </motion.p>

        <motion.p
          className="cyber-text mx-auto mb-8 max-w-3xl text-base leading-relaxed md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          {lang === "es"
            ? "Ingenieria de sistemas enfocada en ciberseguridad, hardening de infraestructura, redes seguras y confiabilidad operativa con mentalidad DevSecOps."
            : "Systems engineering focused on cybersecurity, infrastructure hardening, secure networking, and operational reliability with a DevSecOps mindset."}
        </motion.p>

        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          <a
            href="#projects"
            className="rounded-md border border-emerald-400/50 bg-emerald-400/10 px-6 py-3 font-medium text-emerald-200 transition hover:bg-emerald-400/20"
          >
            {lang === "es" ? "Ver proyectos" : "View projects"}
          </a>
          <a
            href="https://github.com/davidlszz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-cyan-300/50 bg-cyan-300/10 px-6 py-3 font-medium text-cyan-100 transition hover:bg-cyan-300/20"
          >
            {lang === "es" ? "GitHub" : "GitHub"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
