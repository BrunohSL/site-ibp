import type { Metadata } from "next";
import CursoCard from "@/components/CursoCard";
import { cursos } from "@/lib/cursos";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Conheça os cursos do Instituto Bíblico de Paulínia: Teologia Livre (Básico, Médio e Avançado), CFO e TALITA.",
};

const grupos = Array.from(new Set(cursos.map((c) => c.grupo)));

export default function CursosPage() {
  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
            Cursos
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white">
            Um curso para cada etapa do seu chamado
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Do básico ao avançado em Teologia, passando pela formação de
            obreiros e de educadores infantis — trilhas pensadas para
            pastores, líderes, professores e vocacionados.
          </p>
        </div>
      </section>

      {grupos.map((grupo) => (
        <section key={grupo} className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-2xl font-bold text-white">
            {grupo}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cursos
              .filter((c) => c.grupo === grupo)
              .map((curso) => (
                <CursoCard key={curso.slug} curso={curso} />
              ))}
          </div>
        </section>
      ))}

      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-white">
            Ficou com dúvidas sobre qual curso escolher?
          </h2>
          <p className="mt-3 text-white/80">
            Nossa secretaria pode te ajudar a entender pré-requisitos,
            duração e como se matricular.
          </p>
          <a
            href="/contato"
            className="mt-6 inline-block rounded bg-ibp-gold px-8 py-3 text-sm font-bold uppercase tracking-wide text-ibp-blue transition-colors hover:bg-ibp-gold-light"
          >
            Fale com a secretaria
          </a>
        </div>
      </section>
    </>
  );
}
