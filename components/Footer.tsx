export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 px-6 pb-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-xl border border-cyan-300/25 bg-slate-950/70 px-5 py-4 text-xs text-cyan-100/75 md:flex-row md:items-center md:justify-between">
        <p>© {year} David Lopez Sanchez // Defensive Engineering</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="cyber-link">
            Inicio
          </a>
          <a href="#projects" className="cyber-link">
            Proyectos
          </a>
          <a href="#contact" className="cyber-link">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
