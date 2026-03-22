"use client";

import { ArrowUpRight, Clock3, Github, Linkedin, Mail, ShieldCheck, TerminalSquare, Workflow } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import Lanyard from "./Lanyard";
import Magnet from "./Magnet";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";
import StarBorder from "./StarBorder";

const collaborationCards = {
  es: [
    {
      title: "Infraestructura y hardening",
      description: "Base segura, configuracion clara y exposicion controlada para servicios y laboratorios.",
      icon: ShieldCheck,
    },
    {
      title: "CI/CD y automatizacion",
      description: "Pipelines, validaciones, trazabilidad y menos dependencia de tareas manuales.",
      icon: Workflow,
    },
    {
      title: "Observabilidad y operaciones",
      description: "Logs, respuesta inicial y documentacion util para operar con menos friccion.",
      icon: TerminalSquare,
    },
  ],
  en: [
    {
      title: "Infrastructure and hardening",
      description: "Secure baseline, clear configuration, and controlled exposure for services and labs.",
      icon: ShieldCheck,
    },
    {
      title: "CI/CD and automation",
      description: "Pipelines, validation, traceability, and less dependence on manual tasks.",
      icon: Workflow,
    },
    {
      title: "Observability and operations",
      description: "Logs, first response, and useful documentation to operate with less friction.",
      icon: TerminalSquare,
    },
  ],
} as const;

export default function Contacto() {
  const { lang } = useLanguage();
  const cards = collaborationCards[lang];
  const role = lang === "es" ? "Ingeniero de sistemas" : "Systems engineer";

  return (
    <section
      id="contact"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="cyan" depth={5}>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] xl:items-start">
          <AnimatedContent>
            <p className="eyebrow mb-4 text-xs text-white/42">
              {lang === "es" ? "Contacto / colaboracion" : "Contact / collaboration"}
            </p>
            <h2 className="section-quote max-w-[14ch] font-semibold text-white">
              {lang === "es"
                ? "Si necesitas alguien que piense exposicion, operacion y trazabilidad al mismo tiempo, conversemos."
                : "If you need someone who thinks about exposure, operations, and traceability at once, let us talk."}
            </h2>

            <p className="section-copy mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              {lang === "es"
                ? "Me interesan practicas, laboratorios y proyectos donde seguridad e infraestructura no se trabajen por separado. Puedo aportar en documentacion tecnica, pipelines, hardening, segmentacion y visibilidad operativa."
                : "I am interested in internships, labs, and projects where security and infrastructure are not treated separately. I can contribute to technical documentation, pipelines, hardening, segmentation, and operational visibility."}
            </p>

            <FadeContent className="mt-8 flex flex-wrap gap-4" delay={0.06}>
              <Magnet padding={120} magnetStrength={3}>
                <StarBorder
                  as="a"
                  href="mailto:davidlszdev@gmail.com"
                  className="star-border-cta"
                  color="#ff8754"
                  speed="8s"
                >
                  <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white">
                    {lang === "es" ? "Escribir por correo" : "Send an email"}
                    <ArrowUpRight size={16} />
                  </span>
                </StarBorder>
              </Magnet>

              <a
                href="https://www.linkedin.com/in/david-lopez-s%C3%A1nchez-aa269a1b7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/16 hover:bg-white/9"
              >
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </FadeContent>
          </AnimatedContent>

          <AnimatedContent delay={0.08} className="space-y-6">
            <div className="rounded-[1.85rem] border border-white/10 bg-white/5 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/6 p-3 text-[color:var(--secondary)]">
                  <Clock3 size={18} />
                </div>
                <div>
                  <p className="eyebrow text-[11px] text-white/42">
                    {lang === "es" ? "Disponibilidad" : "Availability"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {lang === "es" ? "Canales y tiempos" : "Channels and timing"}
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  lang === "es" ? "Respuesta estimada: 24 a 48 horas." : "Estimated reply: 24 to 48 hours.",
                  lang === "es" ? "Canal prioritario: email y LinkedIn." : "Priority channel: email and LinkedIn.",
                  lang === "es" ? "Abierto a practicas, colaboracion y builds tecnicos." : "Open to internships, collaboration, and technical builds.",
                ].map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-white/8 bg-black/12 px-4 py-3 text-sm text-[color:var(--muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Lanyard name="David Lopez Sanchez" role={role} imageSrc="/profile-photo.jpg" compact />
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
                  borderRadius="1.7rem"
                  borderColor="rgba(255,255,255,0.08)"
                  glareColor="#eef8f4"
                  glareOpacity={0.1}
                  glareAngle={-28}
                  glareSize={220}
                  className="reactbits-card-shell"
                >
                  <article className="interactive-card h-full rounded-[1.7rem] p-6">
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

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              label: "EMAIL",
              href: "mailto:davidlszdev@gmail.com",
              text: "davidlszdev@gmail.com",
              icon: Mail,
            },
            {
              label: "LINKEDIN",
              href: "https://www.linkedin.com/in/david-lopez-s%C3%A1nchez-aa269a1b7",
              text: "linkedin.com/in/david-lopez-sanchez-aa269a1b7",
              icon: Linkedin,
            },
            {
              label: "GITHUB",
              href: "https://github.com/davidlszz",
              text: "github.com/davidlszz",
              icon: Github,
            },
          ].map((item, index) => (
            <ScrollStack key={item.label} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <article className="interactive-card rounded-[1.45rem] border border-white/10 bg-white/5 p-5">
                  <p className="eyebrow mb-3 flex items-center gap-2 text-[11px] text-white/45">
                    <item.icon size={14} />
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="cyber-link break-all text-base"
                  >
                    {item.text}
                  </a>
                </article>
              </FadeContent>
            </ScrollStack>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}
