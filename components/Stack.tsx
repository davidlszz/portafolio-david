"use client";

import FadeInSection from "./FadeInSection";
import { useLanguage } from "./LanguageContext";

export default function Stack() {
  const { lang } = useLanguage();

  const groups = [
    {
      title: lang === "es" ? "Seguridad de red" : "Network security",
      items: ["TCP/IP", "DNS", "TLS", "SSH", "Subnetting"],
    },
    {
      title: lang === "es" ? "Infraestructura" : "Infrastructure",
      items: ["Linux", "VPS", "Nginx", "Reverse proxy", "Hardening base"],
    },
    {
      title: "DevSecOps",
      items:
        lang === "es"
          ? ["Git", "CI/CD", "Observabilidad", "Gestion de incidentes", "Automatizacion"]
          : ["Git", "CI/CD", "Observability", "Incident handling", "Automation"],
    },
  ];

  return (
    <section id="stack" className="content-section flex min-h-[78svh] scroll-mt-28 items-center px-4 py-20 md:min-h-screen md:px-6">
      <FadeInSection>
        <div className="section-shell mx-auto max-w-5xl rounded-2xl p-8 md:p-12">
          <h2 className="cyber-title mb-10 text-3xl font-bold text-white md:text-4xl">
            {lang === "es" ? "Stack tecnico" : "Technical stack"}
          </h2>

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
