"use client";

import { motion } from "framer-motion";
import { Activity, Radar, ShieldCheck, Target } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const focusPillars = {
  es: [
    {
      title: "Analizar primero",
      description:
        "Parto del riesgo, la arquitectura y los puntos de fallo para entender d\u00f3nde se rompe realmente un sistema.",
      icon: Radar,
    },
    {
      title: "Automatizar con criterio",
      description:
        "Busco reducir fricci\u00f3n operativa y errores manuales mediante pipelines, tareas repetibles y control de cambios.",
      icon: Activity,
    },
    {
      title: "Medir para mejorar",
      description:
        "Sin observabilidad no hay operaci\u00f3n madura; por eso priorizo logs, se\u00f1ales y m\u00e9tricas accionables.",
      icon: ShieldCheck,
    },
  ],
  en: [
    {
      title: "Analyze first",
      description:
        "I start from risk, architecture, and failure points to understand where a system really breaks.",
      icon: Radar,
    },
    {
      title: "Automate with intent",
      description:
        "I aim to reduce operational friction and manual errors through pipelines, repeatable tasks, and controlled change.",
      icon: Activity,
    },
    {
      title: "Measure to improve",
      description:
        "Without observability there is no mature operation, so I prioritize logs, signals, and actionable metrics.",
      icon: ShieldCheck,
    },
  ],
} as const;

const focusSequence = {
  es: [
    "Entender la arquitectura",
    "Reducir superficie de ataque",
    "Automatizar validaciones",
    "Medir y responder",
  ],
  en: [
    "Understand the architecture",
    "Reduce attack surface",
    "Automate validation",
    "Measure and respond",
  ],
} as const;

export default function Enfoque() {
  const { lang } = useLanguage();
  const pillars = focusPillars[lang];
  const sequence = focusSequence[lang];

  return (
    <section
      id="focus"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6"
    >
      <motion.div
        className="section-shell mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 md:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="hidden">
              {lang === "es" ? "CRITERIO DE TRABAJO" : "WORKING FRAMEWORK"}
            </p>
            <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
              {lang === "es" ? "Criterio de trabajo" : "Work criteria"}
            </h2>

            <p className="cyber-text text-lg leading-relaxed">
              {lang === "es"
                ? "Mi enfoque combina ciberseguridad, infraestructura y confiabilidad como partes de un mismo problema. No me interesa solo que un servicio funcione; me interesa que pueda operar con criterios claros de riesgo, trazabilidad, mantenimiento y respuesta ante incidentes."
                : "My approach combines cybersecurity, infrastructure, and reliability as parts of the same problem. I am not only interested in whether a service works, but whether it can operate with clear criteria for risk, traceability, maintainability, and incident response."}
            </p>

            <p className="cyber-text mt-6 text-lg leading-relaxed">
              {lang === "es"
                ? "Por eso priorizo dise\u00f1ar con defensas por capas, automatizar controles donde tenga sentido y medir el comportamiento real del sistema para tomar decisiones mejores, no suposiciones."
                : "That is why I prioritize layered defenses, automate controls where it makes sense, and measure real system behavior so decisions are based on evidence rather than assumptions."}
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-cyan-300/18 bg-slate-950/65 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                <Target size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {lang === "es" ? "Secuencia operativa" : "Operating sequence"}
                </p>
                <p className="text-sm text-cyan-100/70">
                  {lang === "es" ? "As\u00ed estructuro el trabajo t\u00e9cnico" : "How I structure technical work"}
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {sequence.map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-cyan-300/15 bg-slate-900/80 px-4 py-3"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 text-xs font-semibold text-emerald-200">
                      {index + 1}
                    </span>
                    <span className="text-sm text-cyan-100/85">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="interactive-card rounded-[1.4rem] border border-emerald-400/18 bg-slate-950/65 p-6"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                <pillar.icon size={20} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="cyber-text text-sm leading-relaxed">{pillar.description}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
