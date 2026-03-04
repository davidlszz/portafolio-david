import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 flex items-center">
      <FadeInSection>
        <h2 className="text-4xl font-bold mb-8">
          Sobre mí
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Soy estudiante de Ingeniería de Sistemas con enfoque en redes,
          infraestructura y arquitectura de sistemas distribuidos.
          Actualmente profundizo en el modelo TCP/IP, protocolos de
          comunicación segura como TLS y SSH, y en la configuración
          y aseguramiento de servidores Linux desplegados en entornos VPS.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mt-6">
          También estoy desarrollando bases en automatización mediante CI/CD,
          prácticas de observabilidad y principios de confiabilidad,
          comprendiendo métricas como MTTR y disponibilidad para diseñar
          sistemas más resilientes, seguros y eficientes.
          Actualmente desarrollo bases solidas en automatización y prácticas DevOps, incluyendo CI/CD, gestión de pipelines y despliegues controlados.
          Trabajo con conceptos de observabilidad y confiabilidad, comprendiendo métricas como MTTR y disponibilidad para diseñar sistemas más resilientes, seguros y eficientes.
          Mi objetivo profesional es evolucionar hacia roles de infraestructura, Cloud Engineering o Site Reliability Engineering, contribuyendo en la construcción de sistemas seguros, escalables y altamente disponibles.
        </p>
      </FadeInSection>
    </section>
  );
}