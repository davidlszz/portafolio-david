"use client";

import { Network, ShieldCheck, Telescope, Workflow } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";

const manifestoCards = {
  es: [
    {
      title: "Arquitectura antes que moda",
      description:
        "Me interesa entender el sistema completo: que se expone, que depende de que y donde se vuelve fragil en operacion.",
      icon: Network,
    },
    {
      title: "Seguridad que conversa con operaciones",
      description:
        "Busco controles que ayuden a operar mejor, no capas bonitas que despues nadie pueda mantener.",
      icon: ShieldCheck,
    },
    {
      title: "Proceso con evidencia",
      description:
        "Documentacion, runbooks, pipelines y observabilidad forman parte del mismo trabajo, no llegan al final como adorno.",
      icon: Workflow,
    },
  ],
  en: [
    {
      title: "Architecture before trends",
      description:
        "I care about understanding the whole system: what is exposed, what depends on what, and where operations become fragile.",
      icon: Network,
    },
    {
      title: "Security aligned with operations",
      description:
        "I look for controls that improve day-to-day operation, not shiny layers that nobody can maintain later.",
      icon: ShieldCheck,
    },
    {
      title: "Process with evidence",
      description:
        "Documentation, runbooks, pipelines, and observability are part of the same job, not decoration added at the end.",
      icon: Workflow,
    },
  ],
} as const;

const workingBoard = {
  es: [
    "Red, sistema y superficie de exposicion.",
    "Baselines de hardening y acceso.",
    "Automatizacion de tareas repetibles.",
    "Senales para diagnosticar y responder.",
  ],
  en: [
    "Network, system, and exposure surface.",
    "Hardening and access baselines.",
    "Automation for repeatable work.",
    "Signals to diagnose and respond.",
  ],
} as const;

export default function About() {
  const { lang } = useLanguage();
  const cards = manifestoCards[lang];
  const board = workingBoard[lang];

  return (
    <section
      id="about"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="cyan" depth={1}>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-start">
          <AnimatedContent>
            <p className="eyebrow mb-4 text-xs text-white/42">
              {lang === "es" ? "Sobre mi / criterio tecnico" : "About / technical perspective"}
            </p>

            <h2 className="section-quote max-w-[14ch] font-semibold text-white">
              {lang === "es"
                ? "No persigo herramientas por moda; me interesa que un sistema resista mejor."
                : "I do not chase tools for trend value; I care about systems that hold up better."}
            </h2>

            <p className="section-copy mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              {lang === "es"
                ? "Estoy construyendo un perfil donde infraestructura, redes y seguridad se entienden como el mismo problema. Eso significa pensar en configuracion, segmentacion, despliegue, observabilidad y continuidad operativa como partes conectadas de un solo diseno."
                : "I am building a profile where infrastructure, networking, and security are treated as the same problem. That means thinking about configuration, segmentation, deployment, observability, and operational continuity as connected parts of one design."}
            </p>

            <p className="section-copy mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
              {lang === "es"
                ? "Mi interes actual esta en laboratorios y proyectos que permitan demostrar criterio tecnico real: endurecer una base, controlar cambios, documentar decisiones y dejar evidencia de por que una solucion es defendible."
                : "My current interest is in labs and projects that demonstrate real technical judgment: harden the baseline, control change, document decisions, and leave evidence of why a solution is defensible."}
            </p>
          </AnimatedContent>

          <AnimatedContent delay={0.08}>
            <GlareHover
              width="100%"
              height="100%"
              background="linear-gradient(180deg, rgba(30,33,38,0.92), rgba(18,20,24,0.92))"
              borderRadius="1.85rem"
              borderColor="rgba(255,255,255,0.08)"
              glareColor="#e5f6ee"
              glareOpacity={0.1}
              glareAngle={-30}
              glareSize={220}
              className="reactbits-card-shell"
            >
              <div className="rounded-[1.85rem] p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--secondary)]">
                    <Telescope size={18} />
                  </div>
                  <div>
                    <p className="eyebrow text-[11px] text-white/42">
                      {lang === "es" ? "Como leo un sistema" : "How I read a system"}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {lang === "es" ? "Mapa mental de trabajo" : "Working mental model"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {board.map((item, index) => (
                    <FadeContent key={item} delay={0.05 * index}>
                      <div className="flex items-center gap-4 rounded-[1.2rem] border border-white/8 bg-black/12 px-4 py-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-[color:var(--accent)]">
                          0{index + 1}
                        </span>
                        <span className="text-sm text-[color:var(--muted)]">{item}</span>
                      </div>
                    </FadeContent>
                  ))}
                </div>
              </div>
            </GlareHover>
          </AnimatedContent>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <ScrollStack key={card.title} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(180deg, rgba(28,31,36,0.9), rgba(18,20,24,0.92))"
                  borderRadius="1.65rem"
                  borderColor="rgba(255,255,255,0.08)"
                  glareColor="#fff1e8"
                  glareOpacity={0.1}
                  glareAngle={-30}
                  glareSize={220}
                  className="reactbits-card-shell"
                >
                  <article className="interactive-card h-full rounded-[1.65rem] p-6">
                    <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--accent)]">
                      <card.icon size={18} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="section-copy mt-4 text-sm leading-relaxed">{card.description}</p>
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
