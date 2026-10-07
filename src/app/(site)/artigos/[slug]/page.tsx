import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artigos, getArtigoBySlug, resumo } from "@/lib/artigos";

export function generateStaticParams() {
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artigo = getArtigoBySlug(slug);
  if (!artigo) return {};
  return {
    title: artigo.titulo,
    description: resumo(artigo),
  };
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artigo = getArtigoBySlug(slug);
  if (!artigo) notFound();

  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/artigos"
            className="text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
          >
            ← Todos os artigos
          </Link>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
            Artigo
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            {artigo.titulo}
          </h1>
          {artigo.autor && (
            <p className="mt-4 text-white/60">Por {artigo.autor}</p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-5 text-white/80">
          {artigo.paragrafos.map((paragrafo, i) => (
            <p key={i} className="leading-relaxed">
              {paragrafo}
            </p>
          ))}
        </div>

        {artigo.autor && (
          <p className="mt-10 text-right font-serif italic text-ibp-gold-light">
            {artigo.autor}
          </p>
        )}

        {artigo.notas && artigo.notas.length > 0 && (
          <div className="mt-10 border-t border-ibp-gold-light/15 pt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-ibp-gold">
              Referências
            </p>
            <ol className="mt-3 space-y-1">
              {artigo.notas.map((nota, i) => (
                <li key={i} className="text-sm text-white/50">
                  {nota}
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>

      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Link
            href="/artigos"
            className="text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
          >
            ← Ver todos os artigos
          </Link>
        </div>
      </section>
    </>
  );
}
