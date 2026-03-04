export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
      <h1 className="text-6xl font-bold mb-6">
        David López Sánchez
      </h1>

      <p className="text-2xl text-gray-400 max-w-2xl mb-6">
        Estudiante de ingeniería de sistemas orientado a Infraestructura, Redes y Confiabilidad de Sistemas. 
        Enfocado en arquitectura distribuida, automatización DevOps y observabilidad, con proyección hacia Cloud Engineering y Site Reliability Engineering.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/davidlszz"
          target="_blank"
          className="px-6 py-3 bg-white text-black hover:bg-gray-300 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}