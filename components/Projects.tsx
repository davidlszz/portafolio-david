import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Hardening de servidor VPS",
    description:
      "Fortalecimiento de un servidor Linux con Nginx, politicas SSH, minimo privilegio y TLS para trafico cifrado.",
    tags: ["Linux", "Nginx", "TLS", "SSH", "Hardening"],
  },
  {
    title: "Pipeline CI/CD con controles",
    description:
      "Pipeline de despliegue con validaciones automatizadas, versionado seguro y reduccion de cambios manuales en produccion.",
    tags: ["Git", "CI/CD", "Automation", "Release"],
  },
  {
    title: "Laboratorio Blue Team",
    description:
      "Escenarios de monitoreo con recoleccion de logs, deteccion de anomalias y respuesta inicial para bajar MTTR.",
    tags: ["Logs", "Alerting", "MTTR", "SOC"],
  },
  {
    title: "Segmentacion de red",
    description:
      "Diseno de segmentacion por subredes para separar servicios criticos, reducir movimiento lateral y mejorar control de acceso.",
    tags: ["TCP/IP", "Subnetting", "Defense in depth"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex min-h-screen scroll-mt-28 items-center px-6 py-20">
      <FadeInSection>
        <div className="section-shell mx-auto max-w-5xl rounded-2xl p-8 md:p-12">
          <h2 className="cyber-title mb-10 text-3xl font-bold text-white md:text-4xl">Proyectos</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-xl border border-cyan-300/25 bg-slate-950/60 p-6 transition hover:-translate-y-0.5 hover:border-cyan-300/55"
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
