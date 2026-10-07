import Image from "next/image";
import Link from "next/link";
import type { Curso } from "@/lib/cursos";

export default function CursoCard({ curso }: { curso: Curso }) {
  return (
    <Link
      href={`/cursos/${curso.slug}`}
      className="flex flex-col items-center rounded-lg border border-ibp-gold-light/25 bg-white/[0.06] p-6 text-center backdrop-blur-sm transition-colors hover:border-ibp-gold-light/50 hover:bg-white/[0.1]"
    >
      <div className="rounded-md bg-white/90 p-3">
        <Image
          src={curso.icone}
          alt=""
          width={120}
          height={57}
          className="h-14 w-auto"
          aria-hidden
        />
      </div>
      <span className="mt-4 text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
        {curso.grupo} · {curso.sigla}
      </span>
      <h3 className="mt-2 font-serif text-xl font-semibold text-white">
        {curso.nome}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">
        {curso.resumo}
      </p>
      <span className="mt-4 text-xs font-bold uppercase tracking-wide text-ibp-gold-light">
        Ver grade curricular →
      </span>
    </Link>
  );
}
