"use client";

import FadeInSection from "./FadeInSection";
import {
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
import { useLanguage } from "./LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  const projects = [
    {
      title: lang === "es" ? "Hardening de servidor VPS" : "VPS server hardening",
      description:
        lang === "es"
          ? "Fortalecimiento de un servidor Linux con Nginx, políticas SSH, mínimo privilegio y TLS para tráfico cifrado."
          : "Linux server hardening with Nginx, SSH policies, least privilege, and TLS for encrypted traffic.",
      ribbon: lang === "es" ? "Infraestructura" : "Infrastructure",
      status: lang === "es" ? "Blueprint activo" : "Active blueprint",
      tags: [
        { label: "Linux", icon: SiLinux, type: "react-icons" },
        { label: "Nginx", icon: SiNginx, type: "react-icons" },
        { label: "TLS", icon: ShieldCheck, type: "lucide" },
        { label: "SSH", icon: TerminalSquare, type: "lucide" },
        { label: "Hardening", icon: Lock, type: "lucide" },
      ],
    },
    {
      title: lang === "es" ? "Pipeline CI/CD con controles" : "Controlled CI/CD pipeline",
      description:
        lang === "es"
          ? "Pipeline de despliegue con validaciones automatizadas, versionado seguro y reducción de cambios manuales en producción."
          : "Deployment pipeline with automated validations, secure versioning, and reduced manual changes in production.",
      ribbon: "DevSecOps",
      status: lang === "es" ? "Entrega segura" : "Secure delivery",
      tags: [
        { label: "Git", icon: SiGit, type: "react-icons" },
        { label: "CI/CD", icon: SiGithubactions, type: "react-icons" },
        { label: "Automation", icon: Workflow, type: "lucide" },
        { label: "Release", icon: ShieldCheck, type: "lucide" },
      ],
    },
    {
      title: lang === "es" ? "Laboratorio Blue Team" : "Blue Team lab",
      description:
        lang === "es"
          ? "Escenarios de monitoreo con recolección de logs, detección de anomalías y respuesta inicial para bajar MTTR."
          : "Monitoring scenarios with log collection, anomaly detection, and first-response workflows to reduce MTTR.",
      ribbon: lang === "es" ? "Detección" : "Detection",
      status: lang === "es" ? "Observabilidad" : "Observability",
      tags: [
        { label: "Logs", icon: TerminalSquare, type: "lucide" },
        { label: "Alerting", icon: BellRing, type: "lucide" },
        { label: "MTTR", icon: ShieldCheck, type: "lucide" },
        { label: "SOC", icon: Lock, type: "lucide" },
      ],
    },
    {
      title: lang === "es" ? "Segmentación de red" : "Network segmentation",
      description:
        lang === "es"
          ? "Diseño de segmentación por subredes para separar servicios críticos, reducir movimiento lateral y mejorar control de acceso."
          : "Subnet-based segmentation to isolate critical services, reduce lateral movement, and improve access control.",
      ribbon: lang === "es" ? "Arquitectura" : "Architecture",
      status: lang === "es" ? "Defensa en capas" : "Defense in depth",
      tags: [
        { label: "TCP/IP", icon: Network, type: "lucide" },
        { label: "Subnetting", icon: Waypoints, type: "lucide" },
        { label: "Defense in depth", icon: ShieldCheck, type: "lucide" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6"
    >
      <FadeInSection>
        <div className="section-shell mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.3em] text-cyan-300/85">
                {lang === "es" ? "CASOS DE CONSTRUCCIÓN" : "BUILD CASES"}
              </p>
              <h2 className="cyber-title mb-5 text-3xl font-bold text-white md:text-4xl">
                {lang === "es" ? "Proyectos" : "Projects"}
              </h2>
              <p className="cyber-text max-w-3xl text-base leading-relaxed md:text-lg">
                {lang === "es"
                  ? "Cada proyecto está pensado como una pieza técnica presentable: con arquitectura clara, foco operativo y una narrativa que conecta seguridad, infraestructura y ejecución real."
                  : "Each project is designed as a presentable technical artifact: with clear architecture, operational focus, and a narrative that connects security, infrastructure, and real execution."}
              </p>
            </div>

            <div className="cyber-grid-panel rounded-[1.6rem] border border-cyan-300/18 bg-slate-950/65 p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                  <Layers3 size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {lang === "es" ? "Criterio de portafolio" : "Portfolio criteria"}
                  </p>
                  <p className="text-sm text-cyan-100/70">
                    {lang === "es" ? "Mostrar diseño, operación y trazabilidad" : "Show design, operations, and traceability"}
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  lang === "es" ? "Arquitectura defendible" : "Defensible architecture",
                  lang === "es" ? "Tecnologías visibles" : "Visible technologies",
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
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="interactive-card relative overflow-hidden rounded-[1.6rem] border border-cyan-300/25 bg-slate-950/60 p-6 hover:border-cyan-300/55"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.12),transparent_30%),linear-gradient(180deg,rgba(0,255,136,0.04),transparent_45%)]" />
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
                  <p className="cyber-text mb-5 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className="cyber-chip inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs"
                      >
                        {tag.type === "react-icons" ? <tag.icon className="text-sm" /> : <tag.icon size={14} />}
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
