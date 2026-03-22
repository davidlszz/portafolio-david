"use client";

import {
  ArrowUpRight,
  BellRing,
  CircleCheckBig,
  Layers3,
  Lock,
  Network,
  ShieldCheck,
  TerminalSquare,
  Waypoints,
  Workflow,
} from "lucide-react";
import { SiGithubactions, SiGit, SiLinux, SiNginx } from "react-icons/si";
import AnimatedContent from "./AnimatedContent";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import { useLanguage } from "./LanguageContext";
import LogoLoop from "./LogoLoop";
import ScrollStack from "./ScrollStack";
import SectionCard from "./SectionCard";
import StarBorder from "./StarBorder";

export default function Projects() {
  const { lang } = useLanguage();
  const projects = [
    {
      title: lang === "es" ? "Hardening de servidor VPS" : "VPS server hardening",
      description:
        lang === "es"
          ? "Fortalecimiento de un servidor Linux con Nginx, pol\u00edticas SSH, m\u00ednimo privilegio y TLS para tr\u00e1fico cifrado."
          : "Linux server hardening with Nginx, SSH policies, least privilege, and TLS for encrypted traffic.",
      ribbon: lang === "es" ? "Infraestructura" : "Infrastructure",
      status: lang === "es" ? "Blueprint activo" : "Active blueprint",
      tags: [
        { label: "Linux", icon: <SiLinux className="text-lg" /> },
        { label: "Nginx", icon: <SiNginx className="text-lg" /> },
        { label: "TLS", icon: <ShieldCheck size={16} /> },
        { label: "SSH", icon: <TerminalSquare size={16} /> },
        { label: "Hardening", icon: <Lock size={16} /> },
      ],
    },
    {
      title: lang === "es" ? "Pipeline CI/CD con controles" : "Controlled CI/CD pipeline",
      description:
        lang === "es"
          ? "Pipeline de despliegue con validaciones automatizadas, versionado seguro y reducci\u00f3n de cambios manuales en producci\u00f3n."
          : "Deployment pipeline with automated validations, secure versioning, and reduced manual changes in production.",
      ribbon: "DevSecOps",
      status: lang === "es" ? "Entrega segura" : "Secure delivery",
      tags: [
        { label: "Git", icon: <SiGit className="text-lg" /> },
        { label: "CI/CD", icon: <SiGithubactions className="text-lg" /> },
        { label: "Automation", icon: <Workflow size={16} /> },
        { label: "Release", icon: <ShieldCheck size={16} /> },
      ],
    },
    {
      title: lang === "es" ? "Laboratorio Blue Team" : "Blue Team lab",
      description:
        lang === "es"
          ? "Escenarios de monitoreo con recolecci\u00f3n de logs, detecci\u00f3n de anomal\u00edas y respuesta inicial para bajar MTTR."
          : "Monitoring scenarios with log collection, anomaly detection, and first-response workflows to reduce MTTR.",
      ribbon: lang === "es" ? "Detecci\u00f3n" : "Detection",
      status: lang === "es" ? "Observabilidad" : "Observability",
      tags: [
        { label: "Logs", icon: <TerminalSquare size={16} /> },
        { label: "Alerting", icon: <BellRing size={16} /> },
        { label: "MTTR", icon: <ShieldCheck size={16} /> },
        { label: "SOC", icon: <Lock size={16} /> },
      ],
    },
    {
      title: lang === "es" ? "Segmentaci\u00f3n de red" : "Network segmentation",
      description:
        lang === "es"
          ? "Dise\u00f1o de segmentaci\u00f3n por subredes para separar servicios cr\u00edticos, reducir movimiento lateral y mejorar control de acceso."
          : "Subnet-based segmentation to isolate critical services, reduce lateral movement, and improve access control.",
      ribbon: lang === "es" ? "Arquitectura" : "Architecture",
      status: lang === "es" ? "Defensa en capas" : "Defense in depth",
      tags: [
        { label: "TCP/IP", icon: <Network size={16} /> },
        { label: "Subnetting", icon: <Waypoints size={16} /> },
        { label: "Defense", icon: <ShieldCheck size={16} /> },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center justify-center px-4 py-20 md:px-6"
    >
      <SectionCard accent="mixed" depth={3}>
        <div className="mb-10 grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-start">
          <AnimatedContent className="text-center xl:text-left">
            <p className="mb-3 text-xs tracking-[0.3em] text-cyan-300/82">
              {lang === "es" ? "BUILD CASES // PORTFOLIO SYSTEM" : "BUILD CASES // PORTFOLIO SYSTEM"}
            </p>
            <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
              {lang === "es" ? "Casos de construcci\u00f3n" : "Build cases"}
            </h2>
            <p className="cyber-text mx-auto max-w-3xl text-base leading-relaxed xl:mx-0 md:text-lg">
              {lang === "es"
                ? "Cada proyecto est\u00e1 planteado como una pieza t\u00e9cnica presentable: con arquitectura clara, foco operativo y una narrativa que conecta seguridad, infraestructura y ejecuci\u00f3n real."
                : "Each project is designed as a presentable technical artifact: with clear architecture, operational focus, and a narrative that connects security, infrastructure, and real execution."}
            </p>
          </AnimatedContent>

          <AnimatedContent className="cyber-grid-panel rounded-[1.8rem] border border-cyan-300/18 bg-slate-950/65 p-6" delay={0.08}>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                <Layers3 size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {lang === "es" ? "Criterio de portfolio" : "Portfolio criteria"}
                </p>
                <p className="text-sm text-cyan-100/70">
                  {lang === "es" ? "Mostrar dise\u00f1o, operaci\u00f3n y trazabilidad" : "Show design, operations, and traceability"}
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                lang === "es" ? "Arquitectura defendible" : "Defensible architecture",
                lang === "es" ? "Tecnolog\u00edas visibles" : "Visible technologies",
                lang === "es" ? "Narrativa profesional" : "Professional narrative",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-cyan-300/15 bg-slate-900/80 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <CircleCheckBig size={16} className="text-emerald-200" />
                    <span className="text-sm text-cyan-100/85">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <StarBorder
                as="a"
                href="#contact"
                className="star-border-cta"
                color="#22d3ee"
                speed="9s"
              >
                <span className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-[0.08em] text-cyan-50">
                  {lang === "es" ? "Hablemos del siguiente build" : "Let us talk about the next build"}
                  <ArrowUpRight size={16} />
                </span>
              </StarBorder>
            </div>
          </AnimatedContent>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollStack key={project.title} depth={index + 1}>
              <FadeContent delay={0.08 * index}>
                <GlareHover
                  width="100%"
                  height="100%"
                  background="linear-gradient(180deg, rgba(4, 10, 18, 0.88), rgba(6, 13, 20, 0.78))"
                  borderRadius="1.7rem"
                  borderColor="rgba(34, 211, 238, 0.18)"
                  glareColor="#d7fbff"
                  glareOpacity={0.12}
                  glareAngle={-32}
                  glareSize={230}
                  className="reactbits-card-shell"
                >
                  <article className="interactive-card relative w-full overflow-hidden rounded-[1.7rem] p-6">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.12),transparent_30%),linear-gradient(180deg,rgba(0,255,136,0.04),transparent_45%)]" />
                    <div className="pointer-events-none absolute right-5 top-5 text-4xl font-semibold tracking-[0.18em] text-white/6">
                      {`0${index + 1}`}
                    </div>
                    <div className="relative">
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 text-[11px] tracking-[0.2em] text-cyan-100/75">
                          {project.ribbon}
                        </span>
                        <span className="rounded-full border border-emerald-400/18 bg-emerald-400/8 px-3 py-1 text-[11px] tracking-[0.16em] text-emerald-200">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-cyan-100">{project.title}</h3>
                      <p className="cyber-text mb-6 min-h-[72px] text-sm leading-relaxed">{project.description}</p>

                      <div className="rounded-[1.3rem] border border-cyan-300/12 bg-slate-900/45 p-2">
                        <LogoLoop
                          items={project.tags}
                          duration={20 + index * 2}
                          reverse={index % 2 === 1}
                          className="-mx-2"
                        />
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
