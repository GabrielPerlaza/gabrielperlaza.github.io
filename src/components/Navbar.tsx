export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a
          href="#inicio"
          className="text-xl font-bold tracking-tight text-white"
        >
          Gabriel<span className="text-blue-500">.</span>
        </a>

        {/* Navegación */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Inicio
          </a>

          <a
            href="#sobre-mi"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Sobre mí
          </a>

          <a
            href="#tecnologias"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Tecnologías
          </a>

          <a
            href="#proyectos"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Proyectos
          </a>

          <a
            href="#contacto"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Contacto
          </a>
        </div>

        {/* Botón */}
        <a
          href="#contacto"
          className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 md:block"
        >
          Contáctame
        </a>

      </div>
    </nav>
  );
}