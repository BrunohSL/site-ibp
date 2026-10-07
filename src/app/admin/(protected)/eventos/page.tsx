"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  deleteEvento,
  eventoHref,
  listEventos,
  type Evento,
} from "@/lib/eventos";

export default function AdminEventosPage() {
  const [eventos, setEventos] = useState<Evento[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    listEventos()
      .then(setEventos)
      .catch((e) => setErro(e.message));
  }, []);

  async function excluir(evento: Evento) {
    const nome = evento.titulo || "sem título";
    if (!confirm(`Excluir o evento "${nome}"? Essa ação não pode ser desfeita.`)) {
      return;
    }
    setErro(null);
    try {
      await deleteEvento(evento);
      setEventos((atual) => atual?.filter((e) => e.id !== evento.id) ?? null);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao excluir o evento.");
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl font-bold text-white">Eventos</h1>
        <Link
          href="/admin/eventos/novo"
          className="rounded bg-ibp-gold px-4 py-2 text-sm font-bold uppercase tracking-wide text-ibp-blue-dark hover:bg-ibp-gold-light"
        >
          + Novo evento
        </Link>
      </div>

      {erro && (
        <p className="mt-6 rounded border border-red-400/40 bg-red-400/10 px-3 py-2 text-sm text-red-200">
          {erro}
        </p>
      )}

      {!eventos ? (
        <p className="mt-8 text-white/60">Carregando...</p>
      ) : eventos.length === 0 ? (
        <p className="mt-8 text-white/60">Nenhum evento cadastrado ainda.</p>
      ) : (
        <div className="mt-8 space-y-4">
          {eventos.map((evento) => (
            <div
              key={evento.id}
              className="flex flex-col items-center gap-4 rounded-lg border border-ibp-gold-light/20 bg-white/[0.06] p-4 sm:flex-row"
            >
              {evento.imagem ? (
                <Image
                  src={evento.imagem}
                  alt=""
                  width={112}
                  height={64}
                  className="h-16 w-28 shrink-0 rounded object-cover"
                />
              ) : (
                <div className="h-16 w-28 shrink-0 rounded bg-white/10" />
              )}
              <div className="flex-1 text-center sm:text-left">
                <p className="font-semibold text-white">
                  {evento.titulo || "(sem título)"}
                </p>
                <p className="text-sm text-white/60">
                  {eventoHref(evento.slug)}
                  {evento.periodo ? ` · ${evento.periodo}` : ""}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link
                  href={`/admin/eventos/editar?id=${evento.id}`}
                  className="rounded border border-ibp-gold-light/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ibp-gold-light hover:bg-white/5"
                >
                  Editar
                </Link>
                <button
                  type="button"
                  onClick={() => excluir(evento)}
                  className="rounded border border-red-400/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-red-300 hover:bg-red-400/10"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
