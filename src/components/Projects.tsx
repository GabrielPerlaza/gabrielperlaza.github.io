import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="border-t border-slate-800/60 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Proyectos
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Algunos proyectos que he construido.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Proyectos donde he trabajado tanto en frontend como backend,
            desarrollando interfaces, APIs, bases de datos y despliegues.
          </p>
        </div>

        {/* Proyectos */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-80 flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              {/* Número */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-slate-600">
                  Proyecto
                </span>
              </div>

              {/* Información */}
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-950 px-3 py-1.5 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
         <div className="mt-auto flex gap-5 pt-8">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
    >
      GitHub ↗
    </a>
  )}

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
    >
      Ver proyecto ↗
    </a>
  )}
</div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}