import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section id="about" className="flex min-h-screen scroll-mt-28 items-center px-6 py-20">
      <FadeInSection>
        <div className="section-shell mx-auto max-w-5xl rounded-2xl p-8 md:p-12">
          <h2 className="cyber-title mb-8 text-3xl font-bold text-white md:text-4xl">Sobre mi</h2>

          <p className="cyber-text text-lg leading-relaxed">
            Soy estudiante de ingenieria de sistemas con foco en redes, infraestructura y
            seguridad operacional. Trabajo con protocolos como TLS y SSH, buenas practicas
            de hardening en Linux y despliegues controlados en entornos VPS.
          </p>

          <p className="cyber-text mt-6 text-lg leading-relaxed">
            Actualmente fortalezco procesos de CI/CD, monitoreo y analisis de logs para reducir
            superficie de ataque y mejorar disponibilidad. Mi objetivo es evolucionar a roles de
            ciberseguridad defensiva y confiabilidad sobre plataformas cloud.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
