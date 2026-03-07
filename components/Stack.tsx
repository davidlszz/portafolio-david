import FadeInSection from "./FadeInSection";

export default function Stack() {
  const groups = [
    {
      title: "Seguridad de red",
      items: ["TCP/IP", "DNS", "TLS", "SSH", "Subnetting"],
    },
    {
      title: "Infraestructura",
      items: ["Linux", "VPS", "Nginx", "Reverse proxy", "Hardening base"],
    },
    {
      title: "DevSecOps",
      items: ["Git", "CI/CD", "Observabilidad", "Gestion de incidentes", "Automatizacion"],
    },
  ];

  return (
    <section id="stack" className="flex min-h-screen scroll-mt-28 items-center px-6 py-20">
      <FadeInSection>
        <div className="section-shell mx-auto max-w-5xl rounded-2xl p-8 md:p-12">
          <h2 className="cyber-title mb-10 text-3xl font-bold text-white md:text-4xl">Stack tecnico</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {groups.map((group) => (
              <article key={group.title} className="rounded-xl border border-emerald-400/25 bg-slate-950/55 p-6">
                <h3 className="mb-4 text-xl font-semibold text-emerald-200">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="cyber-text text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
