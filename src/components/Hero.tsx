export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center bg-slate-950"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-32 md:grid-cols-2">

        {/* Contenido */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Full Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Hola, soy
            <span className="block text-blue-500">
              Gabriel Perlaza.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Desarrollo aplicaciones web modernas, escalables y orientadas a
            resolver problemas reales utilizando tecnologías frontend y backend.
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              Ver proyectos
            </a>

            <a
              href="https://mega.nz/file/B1wHXKKA#-Gua_VDqtLBhr-NmCEhz3eDny0tdMJh1VXQMoReSE0U"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Descargar CV
            </a>
          </div>

          {/* Tecnologías */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>.NET</span>
            <span>Next.js</span>
            <span>Angular</span>
            <span>React</span>
            <span>PostgreSQL</span>
          </div>
        </div>

        {/* Parte visual */}
        <div className="hidden justify-center md:flex">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/5">
            
            <div className="absolute h-64 w-64 rounded-full border border-blue-500/20" />

            <div className="text-center">
              <span className="text-7xl font-bold text-white">
                GP
              </span>

              <p className="mt-2 text-sm tracking-[0.3em] text-blue-500">
                SOFTWARE
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}