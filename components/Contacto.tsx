import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 flex items-center">
      <FadeInSection>
        <h2 className="text-4xl font-bold mb-10">
          Contacto
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Si te interesa colaborar en proyectos de infraestructura,
          redes o desarrollo de sistemas confiables, puedes contactarme
          a través de los siguientes medios.
        </p>

        <div className="space-y-6 text-lg">

          <div>
            <span className="text-gray-500">Email</span>
            <p className="text-white">davidlszdev@gmail.com</p>
          </div>

          <div>
            <span className="text-gray-500">LinkedIn</span>
            <p className="text-white">
              <a 
                href="https://www.linkedin.com/in/david-lopez-sánchez-aa269a1b7" 
                target="_blank" 
                className="hover:underline"
              >
                https://www.linkedin.com/in/david-lopez-s%C3%A1nchez-aa269a1b7/
              </a>
            </p>
          </div>

          <div>
            <span className="text-gray-500">GitHub</span>
            <p className="text-white">
              <a 
                href="https://github.com/davidlszz" 
                target="_blank" 
                className="hover:underline"
              >
                github.com/davidlszz
              </a>
            </p>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}