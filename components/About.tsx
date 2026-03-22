"use client";

import { Network, ServerCog, ShieldCheck, Workflow } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";

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
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="cyan" depth={1}>
        <AnimatedContent className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-cyan-300/85">
            {lang === "es" ? "PERFIL PROFESIONAL" : "PROFESSIONAL PROFILE"}
          </p>
          <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
            {lang === "es" ? "Sobre mi" : "About me"}
          </h2>
          <p className="cyber-text text-lg leading-relaxed">
            {lang === "es"
              ? "Soy estudiante de ingenieria de sistemas con orientacion a ciberseguridad, infraestructura y operacion confiable. Mi interes esta en entender como se comporta un servicio desde la red hasta su despliegue, y como fortalecerlo para que sea mas resistente, medible y seguro."
              : "I am a systems engineering student focused on cybersecurity, infrastructure, and reliable operations. I am interested in understanding how a service behaves from the network layer to deployment, and how to strengthen it so it becomes more resilient, measurable, and secure."}
          </p>
        </AnimatedContent>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <ScrollStack key={item.label} depth={index + 1}>
              <FadeContent delay={0.06 * index}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(180deg, rgba(4, 10, 18, 0.88), rgba(6, 13, 20, 0.78))"
                  borderRadius="1.55rem"
                  borderColor="rgba(34, 211, 238, 0.14)"
                  glareColor="#d7fbff"
                  glareOpacity={0.12}
                  glareAngle={-34}
                  glareSize={220}
                  className="reactbits-card-shell"
                >
                  <div className="rounded-[1.55rem] px-5 py-5 text-center">
                    <div className="mb-3 flex items-center justify-center gap-3 text-cyan-200">
                      <item.icon size={18} />
                      <span className="text-xs tracking-[0.22em] text-cyan-100/70">{item.label}</span>
                    </div>
                    <p className="text-base font-semibold text-white">{item.value}</p>
                  </div>
                </GlareHover>
              </FadeContent>
            </ScrollStack>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {blocks.map((block, index) => (
            <ScrollStack key={block.title} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(180deg, rgba(4, 10, 18, 0.88), rgba(6, 13, 20, 0.78))"
                  borderRadius="1.5rem"
                  borderColor="rgba(110, 231, 183, 0.14)"
                  glareColor="#d8fff0"
                  glareOpacity={0.12}
                  glareAngle={-36}
                  glareSize={220}
                  className="reactbits-card-shell"
                >
                  <article className="interactive-card rounded-[1.5rem] p-6">
                    <div className="mb-4 inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                      <block.icon size={20} />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-white">{block.title}</h3>
                    <p className="cyber-text text-sm leading-relaxed">{block.description}</p>
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
