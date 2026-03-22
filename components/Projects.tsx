"use client";

import { ArrowUpRight, FolderKanban, Radar, ShieldCheck, Waypoints, Workflow } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";
import StarBorder from "./StarBorder";

const projectCards = {
  es: [
    {
      title: "Infra VPS Hardening Lab",
      category: "Infraestructura",
      status: "Feature build",
      summary: "Laboratorio para pasar de un VPS recien aprovisionado a una base endurecida, publicable y explicable con evidencia tecnica.",
      proof: "Demuestra hardening real, control de acceso, exposicion segura detras de Nginx y una narrativa mas madura de operaciones.",
      outputs: ["Linux / VPS", "Nginx", "TLS", "SSH", "Runbook"],
      icon: ShieldCheck,
      accent: "from-[rgba(255,135,84,0.18)] via-[rgba(255,255,255,0.04)] to-transparent",
    },
    {
      title: "Secure CI/CD Platform",
      category: "Entrega",
      status: "System build",
      summary: "Pipeline con validaciones automaticas, control de cambios y trazabilidad antes del despliegue.",
      proof: "Prueba que la automatizacion puede acelerar sin perder revisiones, rollback y evidencia auditable.",
      outputs: ["Git", "CI", "CD", "Scanning", "Policy"],
      icon: Workflow,
      accent: "from-[rgba(140,183,170,0.16)] via-[rgba(255,255,255,0.04)] to-transparent",
    },
    {
      title: "Blue Team Observability Lab",
      category: "Deteccion",
      status: "Signal build",
      summary: "Escenario para centralizar logs, disparar alertas y documentar una respuesta inicial con foco en MTTR.",
      proof: "Prueba observabilidad defensiva, priorizacion de senales y respuesta guiada por runbooks.",
      outputs: ["Logs", "Alerting", "MTTR", "Runbooks", "Dashboards"],
      icon: Radar,
      accent: "from-[rgba(255,255,255,0.08)] via-transparent to-transparent",
    },
    {
      title: "Network Segmentation Lab",
      category: "Redes",
      status: "Architecture build",
      summary: "Simulacion de segmentacion por subredes o VLANs para reducir movimiento lateral y ordenar accesos.",
      proof: "Prueba criterio de arquitectura, matriz origen-destino y control de exposicion entre zonas.",
      outputs: ["Subnets", "ACLs", "Flows", "Inventory", "Validation"],
      icon: Waypoints,
      accent: "from-[rgba(255,135,84,0.14)] via-transparent to-transparent",
    },
  ],
  en: [
    {
      title: "Infra VPS Hardening Lab",
      category: "Infrastructure",
      status: "Feature build",
      summary: "Lab focused on moving from a fresh VPS to a hardened, publishable baseline with technical evidence.",
      proof: "It proves real hardening, access control, secure Nginx exposure, and a more mature operations narrative.",
      outputs: ["Linux / VPS", "Nginx", "TLS", "SSH", "Runbook"],
      icon: ShieldCheck,
      accent: "from-[rgba(255,135,84,0.18)] via-[rgba(255,255,255,0.04)] to-transparent",
    },
    {
      title: "Secure CI/CD Platform",
      category: "Delivery",
      status: "System build",
      summary: "Pipeline with automated validation, change control, and traceability before deployment.",
      proof: "It proves automation can move faster without losing review, rollback, and audit evidence.",
      outputs: ["Git", "CI", "CD", "Scanning", "Policy"],
      icon: Workflow,
      accent: "from-[rgba(140,183,170,0.16)] via-[rgba(255,255,255,0.04)] to-transparent",
    },
    {
      title: "Blue Team Observability Lab",
      category: "Detection",
      status: "Signal build",
      summary: "Scenario for centralized logging, alerting, and documented first response with MTTR in mind.",
      proof: "It proves defensive observability, signal prioritization, and runbook-guided response.",
      outputs: ["Logs", "Alerting", "MTTR", "Runbooks", "Dashboards"],
      icon: Radar,
      accent: "from-[rgba(255,255,255,0.08)] via-transparent to-transparent",
    },
    {
      title: "Network Segmentation Lab",
      category: "Networking",
      status: "Architecture build",
      summary: "Subnet or VLAN segmentation simulation to reduce lateral movement and organize access.",
      proof: "It proves architecture judgment, source-destination matrices, and zone-level exposure control.",
      outputs: ["Subnets", "ACLs", "Flows", "Inventory", "Validation"],
      icon: Waypoints,
      accent: "from-[rgba(255,135,84,0.14)] via-transparent to-transparent",
    },
  ],
} as const;

export default function Projects() {
  const { lang } = useLanguage();
  const projects = projectCards[lang];
  const [featured, ...secondary] = projects;

  return (
    <section
      id="projects"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="mixed" depth={3}>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] xl:items-start">
          <AnimatedContent>
            <p className="eyebrow mb-4 text-xs text-white/42">
              {lang === "es" ? "Showcase repositories / premium cases" : "Showcase repositories / premium cases"}
            </p>
            <h2 className="section-quote max-w-[16ch] font-semibold text-white">
              {lang === "es"
                ? "Cada repositorio tiene que sostener una conversacion tecnica, no solo verse bien en la portada."
                : "Each repository should sustain a technical conversation, not just look good on the front page."}
            </h2>

            <p className="section-copy mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              {lang === "es"
                ? "En esta iteracion los proyectos pasan a ser piezas mas premium: un caso principal fuerte y builds secundarios que amplian la narrativa de infraestructura, entrega, observabilidad y red."
                : "In this iteration the projects become more premium artifacts: one strong flagship case and secondary builds that expand the narrative across infrastructure, delivery, observability, and networking."}
            </p>
          </AnimatedContent>

          <AnimatedContent delay={0.08}>
            <div className="premium-panel rounded-[1.9rem] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--accent)]">
                  <FolderKanban size={18} />
                </div>
                <div>
                  <p className="eyebrow text-[11px] text-white/42">
                    {lang === "es" ? "Curaduria" : "Curation"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {lang === "es" ? "Arquitectura, evidencia y presencia" : "Architecture, evidence, and presence"}
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  lang === "es" ? "Un caso principal que marque tono." : "One flagship case that sets the tone.",
                  lang === "es" ? "Builds secundarios con roles claros." : "Secondary builds with clear roles.",
                  lang === "es" ? "Jerarquia visual mas fuerte." : "Stronger visual hierarchy.",
                ].map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-white/8 bg-black/12 px-4 py-3 text-sm text-[color:var(--muted)]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <StarBorder as="a" href="#contact" className="star-border-cta" color="#8cb7aa" speed="9s">
                  <span className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white">
                    {lang === "es" ? "Construyamos el siguiente caso" : "Build the next case"}
                    <ArrowUpRight size={16} />
                  </span>
                </StarBorder>
              </div>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent className="mt-10" delay={0.08}>
          <GlareHover
            width="100%"
            height="100%"
            background="linear-gradient(180deg, rgba(30,33,38,0.96), rgba(17,19,23,0.94))"
            borderRadius="2rem"
            borderColor="rgba(255,255,255,0.08)"
            glareColor="#fff2ea"
            glareOpacity={0.12}
            glareAngle={-28}
            glareSize={220}
            className="reactbits-card-shell"
          >
            <article className="interactive-card relative overflow-hidden rounded-[2rem] p-7 md:p-8">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${featured.accent}`} />
              <div className="pointer-events-none absolute right-6 top-4 text-[clamp(4rem,11vw,8rem)] font-semibold tracking-[-0.08em] text-white/6">
                01
              </div>

              <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-end">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] tracking-[0.16em] text-[color:var(--muted)]">
                      {featured.category}
                    </span>
                    <span className="rounded-full border border-white/10 bg-[color:var(--accent)]/10 px-3 py-1 text-[11px] tracking-[0.16em] text-[color:var(--accent)]">
                      {featured.status}
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.9] font-semibold tracking-[-0.05em] text-white">
                    {featured.title}
                  </h3>

                  <p className="section-copy mt-5 max-w-3xl text-base leading-relaxed md:text-lg">{featured.summary}</p>

                  <div className="mt-6 rounded-[1.45rem] border border-white/8 bg-black/12 p-5">
                    <p className="eyebrow text-[11px] text-white/42">
                      {lang === "es" ? "Por que este es el caso principal" : "Why this is the flagship case"}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{featured.proof}</p>
                  </div>
                </div>

                <div className="premium-panel rounded-[1.7rem] p-5">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--accent)]">
                      <featured.icon size={18} />
                    </div>
                    <span className="eyebrow text-[11px] text-white/42">
                      {lang === "es" ? "Outputs" : "Outputs"}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featured.outputs.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-[color:var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </GlareHover>
        </AnimatedContent>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {secondary.map((project, index) => (
            <ScrollStack key={project.title} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(180deg, rgba(28,31,36,0.94), rgba(18,20,24,0.94))"
                  borderRadius="1.8rem"
                  borderColor="rgba(255,255,255,0.08)"
                  glareColor="#fff2ea"
                  glareOpacity={0.1}
                  glareAngle={-28}
                  glareSize={220}
                  className="reactbits-card-shell"
                >
                  <article className="interactive-card relative h-full overflow-hidden rounded-[1.8rem] p-6">
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                    <div className="relative">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div>
                          <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] tracking-[0.16em] text-[color:var(--muted)]">
                            {project.category}
                          </span>
                          <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--accent)]">
                          <project.icon size={18} />
                        </div>
                      </div>

                      <p className="section-copy text-sm leading-relaxed">{project.summary}</p>

                      <div className="mt-5 rounded-[1.35rem] border border-white/8 bg-black/12 p-4">
                        <p className="eyebrow text-[11px] text-white/42">
                          {project.status}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{project.proof}</p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.outputs.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-[color:var(--muted)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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
