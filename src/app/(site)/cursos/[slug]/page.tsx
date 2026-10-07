import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cursos, getCursoBySlug } from "@/lib/cursos";

export function generateStaticParams() {
  return cursos.map((curso) => ({ slug: curso.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const curso = getCursoBySlug(slug);
  if (!curso) return {};
  return {
    title: curso.nome,
    description: curso.resumo,
  };
}

export default async function CursoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const curso = getCursoBySlug(slug);
  if (!curso) notFound();

  const temDescricoes = curso.grade.some((bloco) =>
    bloco.disciplinas.some((d) => d.descricao)
  );

  let contador = 0;

  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/cursos"
            className="text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
          >
            ← Todos os cursos
          </Link>
          <div className="mt-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="rounded-md bg-white/90 p-3">
              <Image
                src={curso.icone}
                alt=""
                width={140}
                height={67}
                className="h-16 w-auto"
                aria-hidden
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
                {curso.grupo} · {curso.sigla}
              </p>
              <h1 className="mt-1 font-serif text-3xl font-bold text-white sm:text-4xl">
                {curso.nome}
              </h1>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-white/80 sm:mx-0 sm:text-left">
            {curso.resumo}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-2xl font-bold text-white">
          Grade curricular
        </h2>
        <div className="mt-8 space-y-10">
          {curso.grade.map((bloco, i) => (
            <div key={bloco.titulo ?? i}>
              {bloco.titulo && (
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
                  {bloco.titulo}
                </h3>
              )}
              {temDescricoes ? (
                <ol className="space-y-6">
                  {bloco.disciplinas.map((disciplina) => {
                    contador += 1;
                    return (
                      <li
                        key={disciplina.nome}
                        className="flex gap-4 border-b border-ibp-gold-light/15 pb-6"
                      >
                        <span className="shrink-0 font-serif font-semibold text-ibp-gold-light">
                          {String(contador).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-serif text-lg font-semibold text-white">
                            {disciplina.nome}
                          </p>
                          {disciplina.descricao && (
                            <p className="mt-1 text-sm leading-relaxed text-white/70">
                              {disciplina.descricao}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              ) : (
                <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {bloco.disciplinas.map((disciplina) => {
                    contador += 1;
                    return (
                      <li
                        key={disciplina.nome}
                        className="flex gap-3 border-b border-ibp-gold-light/20 py-2 text-white/80"
                      >
                        <span className="font-serif font-semibold text-ibp-gold-light">
                          {String(contador).padStart(2, "0")}
                        </span>
                        <span>{disciplina.nome}</span>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-white">
            Quer se matricular em {curso.nome}?
          </h2>
          <p className="mt-3 text-white/80">
            Fale com a nossa secretaria para saber pré-requisitos, duração e
            próximas turmas.
          </p>
          <Link
            href="/contato"
            className="mt-6 inline-block rounded bg-ibp-gold px-8 py-3 text-sm font-bold uppercase tracking-wide text-ibp-blue transition-colors hover:bg-ibp-gold-light"
          >
            Fale com a secretaria
          </Link>
        </div>
      </section>
    </>
  );
}
