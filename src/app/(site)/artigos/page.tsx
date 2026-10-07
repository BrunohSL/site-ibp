import Link from "next/link";
import type { Metadata } from "next";
import { artigos, resumo } from "@/lib/artigos";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Artigos teológicos escritos pela diretoria e corpo docente do Instituto Bíblico de Paulínia.",
};

export default function ArtigosPage() {
  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
            Artigos
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white">
            Reflexões teológicas do IBP
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Textos escritos pela diretoria e corpo docente sobre doutrina,
            escatologia e vida cristã, para alimentar o seu estudo da
            Palavra.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-6">
          {artigos.map((artigo) => (
            <Link
              key={artigo.slug}
              href={`/artigos/${artigo.slug}`}
              className="block rounded-lg border border-ibp-gold-light/25 bg-white/[0.06] p-6 transition-colors hover:border-ibp-gold-light/50 hover:bg-white/[0.1]"
            >
              <h2 className="font-serif text-xl font-semibold text-white">
                {artigo.titulo}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {resumo(artigo)}
              </p>
              {artigo.autor && (
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
                  {artigo.autor}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
