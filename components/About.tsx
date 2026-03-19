"use client";

import { Network, ServerCog, ShieldCheck, Workflow } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { useLanguage } from "./LanguageContext";

const aboutHighlights = {
  es: [
    { label: "Especialidad", value: "Seguridad e infraestructura", icon: ShieldCheck },
    { label: "Entornos", value: "Linux, VPS y redes", icon: ServerCog },
    { label: "Operaci\u00f3n", value: "Observabilidad y CI/CD", icon: Workflow },
  ],
  en: [
    { label: "Specialty", value: "Security and infrastructure", icon: ShieldCheck },
    { label: "Environments", value: "Linux, VPS, and networks", icon: ServerCog },
    { label: "Operations", value: "Observability and CI/CD", icon: Workflow },
  ],
} as const;

const aboutBlocks = {
  es: [
    {
      title: "Mentalidad t\u00e9cnica",
      description:
        "Trabajo desde la comprensi\u00f3n del sistema completo: red, sistema operativo, superficie de exposici\u00f3n y continuidad operativa.",
      icon: Network,
    },
    {
      title: "Construcci\u00f3n segura",
      description:
        "Me interesa dise\u00f1ar servicios con hardening base, cifrado, control de acceso y evidencia t\u00e9cnica clara para operarlos con criterio.",
      icon: ShieldCheck,
    },
    {
      title: "Evoluci\u00f3n profesional",
      description:
        "Estoy orientando mi perfil hacia infraestructura segura, cloud, ciberseguridad defensiva y confiabilidad aplicada a entornos reales.",
      icon: Workflow,
    },
  ],
  en: [
    {
      title: "Technical mindset",
      description:
        "I work from a whole-system perspective: network, operating system, exposure surface, and operational continuity.",
      icon: Network,
    },
    {
      title: "Secure building",
      description:
        "I am interested in designing services with baseline hardening, encryption, access control, and clear technical evidence for day-to-day operations.",
      icon: ShieldCheck,
    },
    {
      title: "Professional direction",
      description:
        "I am shaping my profile toward secure infrastructure, cloud, defensive cybersecurity, and reliability for real environments.",
      icon: Workflow,
    },
  ],
} as const;

export default function About() {
  const { lang } = useLanguage();
  const highlights = aboutHighlights[lang];
  const blocks = aboutBlocks[lang];

  return (
    <section
      id="about"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6"
    >
      <FadeInSection>
        <div className="section-shell mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-cyan-300/85">
                {lang === "es" ? "PERFIL PROFESIONAL" : "PROFESSIONAL PROFILE"}
              </p>
              <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
                {lang === "es" ? "Sobre m\u00ed" : "About me"}
              </h2>

              <p className="cyber-text text-lg leading-relaxed">
                {lang === "es"
                  ? "Soy estudiante de ingenier\u00eda de sistemas con orientaci\u00f3n a ciberseguridad, infraestructura y operaci\u00f3n confiable. Mi inter\u00e9s est\u00e1 en entender c\u00f3mo se comporta un servicio desde la red hasta su despliegue, y c\u00f3mo fortalecerlo para que sea m\u00e1s resistente, medible y seguro."
                  : "I am a systems engineering student focused on cybersecurity, infrastructure, and reliable operations. I am interested in understanding how a service behaves from the network layer to deployment, and how to strengthen it so it becomes more resilient, measurable, and secure."}
              </p>

              <p className="cyber-text mt-6 text-lg leading-relaxed">
                {lang === "es"
                  ? "Actualmente profundizo en protocolos seguros, hardening sobre Linux, despliegues en VPS, automatizaci\u00f3n mediante CI/CD y an\u00e1lisis de logs para reducir superficie de ataque y mejorar disponibilidad. Busco construir una base s\u00f3lida para aportar en roles de infraestructura defensiva y plataformas modernas."
                  : "I am currently deepening my knowledge of secure protocols, Linux hardening, VPS deployments, CI/CD automation, and log analysis to reduce attack surface and improve availability. My goal is to build a strong foundation for contributing to defensive infrastructure and modern platform roles."}
              </p>
            </div>

            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-5 py-4"
                >
                  <div className="mb-2 flex items-center gap-3 text-cyan-200">
                    <item.icon size={18} />
                    <span className="text-xs tracking-[0.22em] text-cyan-100/70">{item.label}</span>
                  </div>
                  <p className="text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {blocks.map((block) => (
              <article
                key={block.title}
                className="interactive-card rounded-[1.4rem] border border-emerald-400/18 bg-slate-950/65 p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                  <block.icon size={20} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{block.title}</h3>
                <p className="cyber-text text-sm leading-relaxed">{block.description}</p>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
