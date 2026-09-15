export default function Contact() {
  return (
    <section
      id="contacto"
      className="border-t border-slate-800/60 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 px-8 py-16 text-center md:px-16">

          {/* Encabezado */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Contacto
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            ¿Tienes una oportunidad o proyecto en mente?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Estoy interesado en oportunidades donde pueda aportar mis
            conocimientos, continuar creciendo como desarrollador y participar
            en la construcción de productos digitales.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:gabrieldeberes@gmail.com"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              Envíame un correo
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-perlaza-a431b5235/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Gabriel Perlaza
          </p>

          <p>
            Desarrollado con Next.js & Tailwind CSS
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com/GabrielPerlaza"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://github.com/GabrielPerlaza"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>

        </footer>

      </div>
    </section>
  );
}