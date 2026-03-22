"use client";

import { Activity, Radar, ShieldCheck, Target } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";

const workSequence = {
  es: [
    "Entender arquitectura, dependencias y puntos de fallo.",
    "Reducir superficie de ataque y ordenar accesos.",
    "Automatizar controles repetibles sin perder trazabilidad.",
    "Medir comportamiento real para responder mejor.",
  ],
  en: [
    "Understand architecture, dependencies, and failure points.",
    "Reduce attack surface and organize access.",
    "Automate repeatable controls without losing traceability.",
    "Measure real behavior to respond better.",
  ],
} as const;

const principles = {
  es: [
    {
      title: "Analizar antes de tocar",
      description:
        "Prefiero mapear contexto, flujos y exposicion antes de sumar herramientas o cambiar configuraciones.",
      icon: Radar,
    },
    {
      title: "Automatizar con criterio",
      description:
        "Una automatizacion buena reduce error humano y deja rollback, evidencia y entendimiento del proceso.",
      icon: Activity,
    },
    {
      title: "Defender en capas",
      description:
        "Combino acceso, configuracion, segmentacion y observabilidad para no depender de un solo control.",
      icon: ShieldCheck,
    },
  ],
  en: [
    {
      title: "Analyze before changing",
      description:
        "I prefer mapping context, flows, and exposure before adding tools or changing configuration.",
      icon: Radar,
    },
    {
      title: "Automate with intent",
      description:
        "Good automation reduces human error while leaving rollback, evidence, and process understanding.",
      icon: Activity,
    },
    {
      title: "Defend in layers",
      description:
        "I combine access, configuration, segmentation, and observability so nothing depends on a single control.",
      icon: ShieldCheck,
    },
  ],
} as const;

export default function Enfoque() {
  const { lang } = useLanguage();
  const sequence = workSequence[lang];
  const cards = principles[lang];

  return (
    <section
      id="focus"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="emerald" depth={4}>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-start">
          <AnimatedContent>
            <p className="eyebrow mb-4 text-xs text-white/42">
              {lang === "es" ? "Metodo / forma de trabajo" : "Method / way of working"}
            </p>
            <h2 className="section-quote max-w-[14ch] font-semibold text-white">
              {lang === "es"
                ? "Me interesa que una solucion siga siendo clara cuando llega el momento dificil de operarla."
                : "I care that a solution stays clear when the difficult part arrives: operating it."}
            </h2>

            <p className="section-copy mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              {lang === "es"
                ? "Por eso trabajo con una secuencia simple pero consistente: primero entender, luego endurecer, despues automatizar y finalmente medir. Esa logica me ayuda a evitar disenos espectaculares pero fragiles."
                : "That is why I work with a simple but consistent sequence: first understand, then harden, then automate, and finally measure. That logic helps me avoid designs that look impressive but fail under pressure."}
            </p>
          </AnimatedContent>

          <AnimatedContent delay={0.08}>
            <GlareHover
              width="100%"
              height="100%"
              background="linear-gradient(180deg, rgba(28,31,36,0.92), rgba(18,20,24,0.92))"
              borderRadius="1.85rem"
              borderColor="rgba(255,255,255,0.08)"
              glareColor="#ecf8f4"
              glareOpacity={0.1}
              glareAngle={-28}
              glareSize={220}
              className="reactbits-card-shell"
            >
              <div className="rounded-[1.85rem] p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--secondary)]">
                    <Target size={18} />
                  </div>
                  <div>
                    <p className="eyebrow text-[11px] text-white/42">
                      {lang === "es" ? "Secuencia de trabajo" : "Working sequence"}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {lang === "es" ? "Como estructuro un proyecto" : "How I structure a project"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {sequence.map((item, index) => (
                    <FadeContent key={item} delay={0.05 * index}>
                      <div className="flex items-center gap-4 rounded-[1.2rem] border border-white/8 bg-black/12 px-4 py-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/6 text-xs text-[color:var(--accent)]">
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
                  background="linear-gradient(180deg, rgba(28,31,36,0.92), rgba(18,20,24,0.92))"
                  borderRadius="1.65rem"
                  borderColor="rgba(255,255,255,0.08)"
                  glareColor="#fff4ec"
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
