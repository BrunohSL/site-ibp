"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { eventoHref, listEventos, type Evento } from "@/lib/eventos";
import { supabaseConfigured } from "@/lib/supabase";

export default function EventosLista() {
  const [eventos, setEventos] = useState<Evento[] | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!supabaseConfigured) return;
    listEventos()
      .then(setEventos)
      .catch(() => setErro(true));
  }, []);

  if (erro || !supabaseConfigured) {
    return (
      <p className="text-center text-white/70">
        Não foi possível carregar os eventos agora. Tente novamente em
        instantes.
      </p>
    );
  }

  if (!eventos) {
    return <p className="text-center text-white/50">Carregando eventos...</p>;
  }

  if (eventos.length === 0) {
    return (
      <p className="text-center text-white/70">
        Nenhum evento cadastrado no momento. Volte em breve.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {eventos.map((evento) => (
        <Link
          key={evento.slug}
          href={eventoHref(evento.slug)}
          className="flex flex-col items-center gap-4 rounded-xl border border-ibp-gold-light/25 bg-white/[0.06] p-4 transition-colors hover:border-ibp-gold-light/50 hover:bg-white/[0.1] sm:flex-row"
        >
          {evento.imagem ? (
            <Image
              src={evento.imagem}
              alt=""
              width={160}
              height={88}
              className="h-24 w-full rounded-lg object-cover sm:h-16 sm:w-28"
              aria-hidden
            />
          ) : (
            <div className="h-24 w-full shrink-0 rounded-lg bg-white/10 sm:h-16 sm:w-28" />
          )}
          <div className="flex-1 text-center sm:text-left">
            {evento.periodo && (
              <p className="text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
                {evento.periodo}
              </p>
            )}
            <p className="mt-0.5 font-serif text-lg font-semibold text-white">
              {evento.titulo || "Evento sem título"}
            </p>
            {evento.resumo && (
              <p className="mt-0.5 text-sm text-white/70">{evento.resumo}</p>
            )}
          </div>
          <span className="shrink-0 text-sm font-bold uppercase tracking-wide text-ibp-gold-light">
            Ver detalhes →
          </span>
        </Link>
      ))}
    </div>
  );
}
