"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-28 items-center justify-center px-6 py-20 text-center">
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
          className="cyber-title mb-6 text-4xl font-extrabold text-white md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          David Lopez Sanchez
        </motion.h1>

        <motion.p
          className="cyber-text mx-auto mb-8 max-w-3xl text-base leading-relaxed md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          Ingenieria de sistemas enfocada en ciberseguridad, hardening de infraestructura,
          redes seguras y confiabilidad operativa con mentalidad DevSecOps.
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
            Ver proyectos
          </a>
          <a
            href="https://github.com/davidlszz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-cyan-300/50 bg-cyan-300/10 px-6 py-3 font-medium text-cyan-100 transition hover:bg-cyan-300/20"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
