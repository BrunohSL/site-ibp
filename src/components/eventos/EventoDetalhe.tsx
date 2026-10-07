"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getEventoBySlug, type Evento } from "@/lib/eventos";
import { supabaseConfigured } from "@/lib/supabase";

const TITULO_SITE = "Instituto Bíblico de Paulínia";

export default function EventoDetalhe() {
  const slug = useSearchParams().get("e") ?? "";
  const podeBuscar = supabaseConfigured && slug !== "";
  const [carregado, setCarregado] = useState<{
    slug: string;
    evento: Evento | null;
  } | null>(null);

  useEffect(() => {
    if (!podeBuscar) return;
    getEventoBySlug(slug)
      .then((evento) => setCarregado({ slug, evento }))
      .catch(() => setCarregado({ slug, evento: null }));
  }, [podeBuscar, slug]);

  // undefined = carregando, null = não encontrado
  const evento = !podeBuscar
    ? null
    : carregado?.slug === slug
      ? carregado.evento
      : undefined;

  useEffect(() => {
    if (evento) document.title = `${evento.titulo || "Evento"} | ${TITULO_SITE}`;
  }, [evento]);

  if (evento === undefined) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-24 text-center text-white/50">
        Carregando evento...
      </section>
    );
  }

  if (evento === null) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="font-serif text-3xl font-bold text-white">
          Evento não encontrado
        </h1>
        <p className="mt-4 text-white/70">
          Ele pode ter sido removido ou o endereço está incorreto.
        </p>
        <Link
          href="/eventos"
          className="mt-6 inline-block text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
        >
          ← Todos os eventos
        </Link>
      </section>
    );
  }

  const temLocal = evento.local || evento.endereco;

  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <Link
            href="/eventos"
            className="text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
          >
            ← Todos os eventos
          </Link>
          {evento.periodo && (
            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
              {evento.periodo}
            </p>
          )}
          <h1 className="mt-3 font-serif text-4xl font-bold text-white">
            {evento.titulo || "Evento"}
          </h1>
          {evento.resumo && (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              {evento.resumo}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        {evento.imagem && (
          <div className="overflow-hidden rounded-2xl border border-ibp-gold-light/25 shadow-2xl">
            <Image
              src={evento.imagem}
              alt={`Cartaz do evento ${evento.titulo}`}
              width={1360}
              height={752}
              className="h-auto w-full"
            />
          </div>
        )}

        {(evento.horario || temLocal) && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {evento.horario && (
              <div className="rounded-lg border border-ibp-gold-light/25 bg-white/[0.06] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
                  Horário
                </p>
                <p className="mt-1 font-serif text-xl font-semibold text-white">
                  {evento.horario}
                </p>
              </div>
            )}
            {temLocal && (
              <div className="rounded-lg border border-ibp-gold-light/25 bg-white/[0.06] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
                  Local
                </p>
                <p className="mt-1 text-white/80">
                  {evento.local}
                  {evento.local && evento.endereco && <br />}
                  {evento.endereco}
                </p>
              </div>
            )}
          </div>
        )}

        {evento.programacao.length > 0 && (
          <>
            <h2 className="mt-12 font-serif text-2xl font-bold text-white">
              Programação
            </h2>
            <div className="mt-6 space-y-4">
              {evento.programacao.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 rounded-lg border border-ibp-gold-light/25 bg-white/[0.06] p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    {(p.data || p.dia) && (
                      <p className="text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
                        {[p.data, p.dia].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {p.tema && (
                      <p className="mt-1 font-serif text-lg font-semibold text-white">
                        {p.tema}
                      </p>
                    )}
                  </div>
                  {(p.palestrante || p.igreja) && (
                    <p className="text-sm text-white/70 sm:text-right">
                      {p.palestrante}
                      {p.palestrante && p.igreja && <br />}
                      {p.igreja}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {evento.paragrafos.length > 0 && (
          <div className="mt-12 space-y-4 text-white/80">
            {evento.paragrafos.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>
        )}
      </section>

      {evento.cta && (
        <section className="bg-ibp-blue-dark">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <h2 className="font-serif text-2xl font-bold text-white">
              {evento.cta}
            </h2>
            <Link
              href="/contato"
              className="mt-6 inline-block rounded bg-ibp-gold px-8 py-3 text-sm font-bold uppercase tracking-wide text-ibp-blue-dark transition-colors hover:bg-ibp-gold-light"
            >
              Fale conosco
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
