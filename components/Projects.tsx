"use client";

import FadeInSection from "./FadeInSection";
import { useLanguage } from "./LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  const projects = [
    {
      title: lang === "es" ? "Hardening de servidor VPS" : "VPS server hardening",
      description:
        lang === "es"
          ? "Fortalecimiento de un servidor Linux con Nginx, politicas SSH, minimo privilegio y TLS para trafico cifrado."
          : "Linux server hardening with Nginx, SSH policies, least privilege, and TLS for encrypted traffic.",
      tags: ["Linux", "Nginx", "TLS", "SSH", "Hardening"],
    },
    {
      title: lang === "es" ? "Pipeline CI/CD con controles" : "Controlled CI/CD pipeline",
      description:
        lang === "es"
          ? "Pipeline de despliegue con validaciones automatizadas, versionado seguro y reduccion de cambios manuales en produccion."
          : "Deployment pipeline with automated validations, secure versioning, and reduced manual changes in production.",
      tags: ["Git", "CI/CD", "Automation", "Release"],
    },
    {
      title: lang === "es" ? "Laboratorio Blue Team" : "Blue Team lab",
      description:
        lang === "es"
          ? "Escenarios de monitoreo con recoleccion de logs, deteccion de anomalias y respuesta inicial para bajar MTTR."
          : "Monitoring scenarios with log collection, anomaly detection, and first-response workflows to reduce MTTR.",
      tags: ["Logs", "Alerting", "MTTR", "SOC"],
    },
    {
      title: lang === "es" ? "Segmentacion de red" : "Network segmentation",
      description:
        lang === "es"
          ? "Diseno de segmentacion por subredes para separar servicios criticos, reducir movimiento lateral y mejorar control de acceso."
          : "Subnet-based segmentation to isolate critical services, reduce lateral movement, and improve access control.",
      tags: ["TCP/IP", "Subnetting", "Defense in depth"],
    },
  ];

  return (
    <section id="projects" className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6">
      <FadeInSection>
        <div className="section-shell mx-auto max-w-5xl rounded-2xl p-8 md:p-12">
          <h2 className="cyber-title mb-10 text-3xl font-bold text-white md:text-4xl">
            {lang === "es" ? "Proyectos" : "Projects"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="interactive-card group rounded-xl border border-cyan-300/25 bg-slate-950/60 p-6 hover:border-cyan-300/55"
              >
                <h3 className="mb-3 text-xl font-semibold text-cyan-100">{project.title}</h3>
                <p className="cyber-text mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="cyber-chip rounded-md px-2 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
