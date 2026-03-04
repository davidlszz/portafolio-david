import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 flex items-center">
      <FadeInSection>
        <h2 className="text-4xl font-bold mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Proyecto 1 */}
          <div className="border border-gray-800 p-8 hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-4">
              Deployment de Servidor VPS
            </h3>
            <p className="text-gray-400 mb-4">
              Configuración de servidor Linux en entorno VPS,
              implementación de Nginx como reverse proxy,
              certificado TLS y endurecimiento básico del sistema.
            </p>
            <div className="text-sm text-gray-500">
              Linux • Nginx • TLS • SSH • VPS
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="border border-gray-800 p-8 hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-4">
              Pipeline CI/CD Automatizado
            </h3>
            <p className="text-gray-400 mb-4">
              Implementación de pipeline para despliegue automático
              desde repositorio Git hacia entorno de producción,
              reduciendo intervención manual y tiempo de entrega.
            </p>
            <div className="text-sm text-gray-500">
              Git • CI/CD • Automatización
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="border border-gray-800 p-8 hover:border-white transition">
            <h3 className="text-2xl font-semibold mb-4">
              Laboratorio de Observabilidad
            </h3>
            <p className="text-gray-400 mb-4">
              Implementación de monitoreo básico y análisis de logs
              enfocado en disponibilidad del sistema y reducción
              del MTTR ante fallos simulados.
            </p>
            <div className="text-sm text-gray-500">
              Logs • Métricas • MTTR • Disponibilidad
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}