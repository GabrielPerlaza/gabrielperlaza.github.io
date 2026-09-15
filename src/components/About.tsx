export default function About() {
  return (
    <section
      id="sobre-mi"
      className="border-t border-slate-800/60 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Sobre mí
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Desarrollo software pensando más allá del código.
          </h2>
        </div>

        {/* Contenido */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Descripción */}
          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Soy egresado de Ingeniería en Software y desarrollador Full Stack,
              con experiencia construyendo aplicaciones web utilizando
              tecnologías frontend y backend.
            </p>

            <p>
              He trabajado en proyectos que incluyen sistemas de ventas,
              gestión de inventario, plataformas de contenido y aplicaciones
              web, utilizando tecnologías como .NET, Angular, React, Next.js
              y PostgreSQL.
            </p>

            <p>
              Me interesa desarrollar soluciones que no solo funcionen,
              sino que también sean mantenibles, escalables y ofrezcan
              una buena experiencia para el usuario.
            </p>
          </div>

          {/* Información rápida */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="mb-2 text-2xl font-bold text-white">
                Full Stack
              </p>
              <p className="text-sm text-slate-400">
                Frontend & Backend
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="mb-2 text-2xl font-bold text-white">
                .NET
              </p>
              <p className="text-sm text-slate-400">
                Backend & APIs
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="mb-2 text-2xl font-bold text-white">
                React
              </p>
              <p className="text-sm text-slate-400">
                Next.js & Frontend
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="mb-2 text-2xl font-bold text-white">
                SQL
              </p>
              <p className="text-sm text-slate-400">
                PostgreSQL & Datos
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}