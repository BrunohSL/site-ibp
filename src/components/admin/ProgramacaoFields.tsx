"use client";

import { useState } from "react";
import type { Palestra } from "@/lib/eventos";

const CAMPO_CLASS =
  "w-full rounded border border-ibp-gold-light/25 bg-white/[0.06] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-ibp-gold-light focus:outline-none";

export default function ProgramacaoFields({
  inicial,
}: {
  inicial: Palestra[];
}) {
  const [linhas, setLinhas] = useState<Palestra[]>(
    inicial.length > 0
      ? inicial
      : [{ data: "", dia: "", tema: "", palestrante: "", igreja: "" }]
  );

  function atualizar(i: number, campo: keyof Palestra, valor: string) {
    setLinhas((prev) =>
      prev.map((linha, idx) =>
        idx === i ? { ...linha, [campo]: valor } : linha
      )
    );
  }

  function adicionar() {
    setLinhas((prev) => [
      ...prev,
      { data: "", dia: "", tema: "", palestrante: "", igreja: "" },
    ]);
  }

  function remover(i: number) {
    setLinhas((prev) => prev.filter((_, idx) => idx !== i));
  }

  return (
    <div className="space-y-4">
      <input type="hidden" name="programacaoCount" value={linhas.length} />
      {linhas.map((linha, i) => (
        <div
          key={i}
          className="grid gap-3 rounded-lg border border-ibp-gold-light/20 bg-white/[0.04] p-4 sm:grid-cols-2"
        >
          <div>
            <label className="mb-1 block text-xs text-white/60">Data</label>
            <input
              className={CAMPO_CLASS}
              name={`palestra_data_${i}`}
              value={linha.data}
              onChange={(e) => atualizar(i, "data", e.target.value)}
              placeholder="12 de janeiro"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/60">
              Dia da semana
            </label>
            <input
              className={CAMPO_CLASS}
              name={`palestra_dia_${i}`}
              value={linha.dia}
              onChange={(e) => atualizar(i, "dia", e.target.value)}
              placeholder="Terça-feira"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs text-white/60">Tema</label>
            <input
              className={CAMPO_CLASS}
              name={`palestra_tema_${i}`}
              value={linha.tema}
              onChange={(e) => atualizar(i, "tema", e.target.value)}
              placeholder="Ensino Como Prioridade na Igreja de Cristo"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/60">
              Palestrante
            </label>
            <input
              className={CAMPO_CLASS}
              name={`palestra_palestrante_${i}`}
              value={linha.palestrante}
              onChange={(e) => atualizar(i, "palestrante", e.target.value)}
              placeholder="Pr Fulano de Tal"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/60">
              Igreja / Instituição
            </label>
            <input
              className={CAMPO_CLASS}
              name={`palestra_igreja_${i}`}
              value={linha.igreja}
              onChange={(e) => atualizar(i, "igreja", e.target.value)}
              placeholder="AD Paulínia/SP"
            />
          </div>
          <div className="sm:col-span-2 text-right">
            <button
              type="button"
              onClick={() => remover(i)}
              className="text-xs font-bold uppercase tracking-wide text-red-300 hover:text-red-200"
            >
              Remover esta palestra
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={adicionar}
        className="rounded border border-ibp-gold-light/40 px-4 py-2 text-xs font-bold uppercase tracking-wide text-ibp-gold-light hover:bg-white/5"
      >
        + Adicionar palestra
      </button>
    </div>
  );
}
