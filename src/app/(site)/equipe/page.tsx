import Link from "next/link";
import type { Metadata } from "next";
import { diretoria, corpoDocente } from "@/lib/equipe";

export const metadata: Metadata = {
  title: "Diretoria e Corpo Docente",
  description:
    "Conheça a diretoria e o corpo docente do Instituto Bíblico de Paulínia.",
};

export default function EquipePage() {
  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <Link
            href="/institucional"
            className="text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
          >
            ← Institucional
          </Link>
          <h1 className="mt-6 font-serif text-4xl font-bold text-white">
            Diretoria e Corpo Docente
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Pastores, professores e voluntários da igreja mantenedora que
            dedicam tempo, formação e experiência para conduzir e ensinar no
            IBP.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-serif text-2xl font-bold text-white">
          Diretoria
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {diretoria.map((pessoa) => (
            <div
              key={pessoa.nome}
              className="rounded-lg border border-ibp-gold-light/25 bg-white/[0.06] p-6"
            >
              {pessoa.cargo && (
                <p className="text-xs font-bold uppercase tracking-widest text-ibp-gold">
                  {pessoa.cargo}
                </p>
              )}
              <h3 className="mt-1 font-serif text-xl font-semibold text-white">
                {pessoa.nome}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {pessoa.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-serif text-2xl font-bold text-white">
            Corpo Docente
          </h2>
          <ol className="mt-8 space-y-6">
            {corpoDocente.map((pessoa, i) => (
              <li
                key={`${pessoa.nome}-${i}`}
                className="flex gap-4 border-b border-ibp-gold-light/15 pb-6"
              >
                <span className="shrink-0 font-serif font-semibold text-ibp-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold text-white">
                    {pessoa.nome}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {pessoa.bio}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
