"use client";

import { Activity, Radar, ShieldCheck, Target } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";

const focusPillars = {
  es: [
    {
      title: "Analizar primero",
      description:
        "Parto del riesgo, la arquitectura y los puntos de fallo para entender donde se rompe realmente un sistema.",
      icon: Radar,
    },
    {
      title: "Automatizar con criterio",
      description:
        "Busco reducir friccion operativa y errores manuales mediante pipelines, tareas repetibles y control de cambios.",
      icon: Activity,
    },
    {
      title: "Medir para mejorar",
      description:
        "Sin observabilidad no hay operacion madura; por eso priorizo logs, senales y metricas accionables.",
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
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="emerald" depth={4}>
        <div className="mb-10 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-start">
          <AnimatedContent className="text-center xl:text-left">
            <p className="mb-3 text-xs tracking-[0.3em] text-cyan-300/82">
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
                ? "Por eso priorizo disenar con defensas por capas, automatizar controles donde tenga sentido y medir el comportamiento real del sistema para tomar decisiones mejores, no suposiciones."
                : "That is why I prioritize layered defenses, automate controls where it makes sense, and measure real system behavior so decisions are based on evidence rather than assumptions."}
            </p>
          </AnimatedContent>

          <AnimatedContent className="rounded-[1.7rem] border border-cyan-300/18 bg-slate-950/65 p-6" delay={0.08}>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                <Target size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {lang === "es" ? "Secuencia operativa" : "Operating sequence"}
                </p>
                <p className="text-sm text-cyan-100/70">
                  {lang === "es" ? "Asi estructuro el trabajo tecnico" : "How I structure technical work"}
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
          </AnimatedContent>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ScrollStack key={pillar.title} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(180deg, rgba(4, 10, 18, 0.88), rgba(6, 13, 20, 0.78))"
                  borderRadius="1.5rem"
                  borderColor="rgba(110, 231, 183, 0.14)"
                  glareColor="#d7fff2"
                  glareOpacity={0.12}
                  glareAngle={-36}
                  glareSize={220}
                  className="reactbits-card-shell"
                >
                  <article className="interactive-card rounded-[1.5rem] p-6">
                    <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                      <pillar.icon size={20} />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-white">{pillar.title}</h3>
                    <p className="cyber-text text-sm leading-relaxed">{pillar.description}</p>
                  </article>
                </GlareHover>
              </FadeContent>
            </ScrollStack>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
