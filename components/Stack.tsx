import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 flex items-center">
      <FadeInSection>
        <h2 className="text-4xl font-bold mb-12">
          Stack Técnico
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Redes</h3>
            <ul className="text-gray-400 space-y-2">
              <li>TCP/IP</li>
              <li>DNS</li>
              <li>TLS</li>
              <li>SSH</li>
              <li>Subnetting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Infraestructura</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Linux</li>
              <li>VPS Deployment</li>
              <li>Nginx</li>
              <li>Reverse Proxy</li>
              <li>WAF (conceptos)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">DevOps</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Git</li>
              <li>CI/CD</li>
              <li>Observabilidad (bases)</li>
              <li>MTTR</li>
              <li>Automatización</li>
            </ul>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}