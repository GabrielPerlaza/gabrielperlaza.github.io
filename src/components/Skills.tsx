const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [".NET", "ASP.NET Core", "C#", "Entity Framework Core", "REST API"],
  },
  {
    title: "Bases de datos",
    skills: ["PostgreSQL", "Supabase", "SQL"],
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "Docker", "Cloudflare", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
      id="tecnologias"
      className="border-t border-slate-800/60 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Tecnologías
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Tecnologías que utilizo para construir mis proyectos.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Trabajo con diferentes herramientas y tecnologías para desarrollar
            aplicaciones completas, desde la interfaz hasta la API y la base
            de datos.
          </p>
        </div>

        {/* Grupos */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}