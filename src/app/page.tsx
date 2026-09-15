import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { Projects } from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 pt-24 text-white">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />

        <section
          id="inicio"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          <h1 className="text-5xl font-bold">
            Gabriel Perlaza
          </h1>

          <p className="mt-4 text-xl text-slate-400">
            Full Stack Developer
          </p>
        </section>
      </main>
    </>
  );
}