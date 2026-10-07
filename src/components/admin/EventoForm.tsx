"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  createEvento,
  enviarImagem,
  removerImagem,
  updateEvento,
  type Evento,
  type Palestra,
} from "@/lib/eventos";
import ProgramacaoFields from "./ProgramacaoFields";

const CAMPO_CLASS =
  "w-full rounded border border-ibp-gold-light/25 bg-white/[0.06] px-3 py-2 text-white placeholder:text-white/40 focus:border-ibp-gold-light focus:outline-none";
const LABEL_CLASS =
  "mb-1 block text-xs font-bold uppercase tracking-wide text-white/60";

function parseProgramacao(formData: FormData): Palestra[] {
  const count = Number(formData.get("programacaoCount") ?? 0);
  const linhas: Palestra[] = [];
  for (let i = 0; i < count; i++) {
    const data = String(formData.get(`palestra_data_${i}`) ?? "").trim();
    const dia = String(formData.get(`palestra_dia_${i}`) ?? "").trim();
    const tema = String(formData.get(`palestra_tema_${i}`) ?? "").trim();
    const palestrante = String(
      formData.get(`palestra_palestrante_${i}`) ?? ""
    ).trim();
    const igreja = String(formData.get(`palestra_igreja_${i}`) ?? "").trim();
    if (data || dia || tema || palestrante || igreja) {
      linhas.push({ data, dia, tema, palestrante, igreja });
    }
  }
  return linhas;
}

function parseParagrafos(formData: FormData): string[] {
  const texto = String(formData.get("paragrafosTexto") ?? "");
  return texto
    .split(/\n+/)
    .map((linha) => linha.trim())
    .filter(Boolean);
}

function campo(formData: FormData, nome: string): string {
  return String(formData.get(nome) ?? "").trim();
}

export default function EventoForm({ evento }: { evento?: Evento }) {
  const router = useRouter();
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);
    setSalvando(true);
    const formData = new FormData(e.currentTarget);

    try {
      const arquivo = formData.get("imagemArquivo");
      const novaImagem =
        arquivo instanceof File && arquivo.size > 0
          ? await enviarImagem(arquivo)
          : undefined;

      const input = {
        titulo: campo(formData, "titulo"),
        periodo: campo(formData, "periodo"),
        resumo: campo(formData, "resumo"),
        horario: campo(formData, "horario"),
        local: campo(formData, "local"),
        endereco: campo(formData, "endereco"),
        cta: campo(formData, "cta"),
        programacao: parseProgramacao(formData),
        paragrafos: parseParagrafos(formData),
        imagem: novaImagem ?? evento?.imagem ?? "",
      };

      if (evento) {
        await updateEvento(evento, input);
        if (novaImagem) await removerImagem(evento.imagem);
      } else {
        await createEvento(input);
      }
      router.push("/admin/eventos");
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao salvar o evento.");
      setSalvando(false);
    }
  }

  return (
    <form onSubmit={salvar} className="space-y-8">

      <section className="space-y-4">
        <h2 className="font-serif text-lg font-semibold text-white">
          Informações principais
        </h2>
        <div>
          <label className={LABEL_CLASS}>Título</label>
          <input
            name="titulo"
            defaultValue={evento?.titulo}
            className={CAMPO_CLASS}
            placeholder="2ª Edição do IBP em Foco"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={LABEL_CLASS}>Período (ex: mês/ano)</label>
            <input
              name="periodo"
              defaultValue={evento?.periodo}
              className={CAMPO_CLASS}
              placeholder="Janeiro de 2027"
            />
          </div>
          <div>
            <label className={LABEL_CLASS}>Horário</label>
            <input
              name="horario"
              defaultValue={evento?.horario}
              className={CAMPO_CLASS}
              placeholder="19h30"
            />
          </div>
        </div>
        <div>
          <label className={LABEL_CLASS}>Resumo (aparece na lista)</label>
          <textarea
            name="resumo"
            defaultValue={evento?.resumo}
            rows={2}
            className={CAMPO_CLASS}
            placeholder="12, 19 e 26/01 às 19h30 — palestras abertas ao público."
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-lg font-semibold text-white">
          Local
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={LABEL_CLASS}>Nome do local</label>
            <input
              name="local"
              defaultValue={evento?.local}
              className={CAMPO_CLASS}
              placeholder="Assembleia de Deus Ministério Belém de Paulínia"
            />
          </div>
          <div>
            <label className={LABEL_CLASS}>Endereço</label>
            <input
              name="endereco"
              defaultValue={evento?.endereco}
              className={CAMPO_CLASS}
              placeholder="Av. Exemplo, 123, Paulínia/SP"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-lg font-semibold text-white">
          Cartaz / imagem
        </h2>
        {evento?.imagem && (
          <div className="overflow-hidden rounded-lg border border-ibp-gold-light/20">
            <Image
              src={evento.imagem}
              alt=""
              width={640}
              height={354}
              className="h-auto w-full max-w-sm"
            />
          </div>
        )}
        <div>
          <label className={LABEL_CLASS}>
            {evento?.imagem
              ? "Enviar nova imagem (substitui a atual)"
              : "Enviar imagem"}
          </label>
          <input
            type="file"
            name="imagemArquivo"
            accept="image/*"
            className="block w-full text-sm text-white/80 file:mr-4 file:rounded file:border-0 file:bg-ibp-gold file:px-4 file:py-2 file:text-sm file:font-bold file:uppercase file:text-ibp-blue-dark hover:file:bg-ibp-gold-light"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-lg font-semibold text-white">
          Programação (palestras, opcional)
        </h2>
        <ProgramacaoFields inicial={evento?.programacao ?? []} />
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-lg font-semibold text-white">
          Texto do evento
        </h2>
        <div>
          <label className={LABEL_CLASS}>
            Parágrafos (um por linha)
          </label>
          <textarea
            name="paragrafosTexto"
            defaultValue={evento?.paragrafos.join("\n")}
            rows={8}
            className={CAMPO_CLASS}
            placeholder={"Em janeiro, teremos...\nSerão três terças-feiras..."}
          />
        </div>
        <div>
          <label className={LABEL_CLASS}>
            Chamada final (frase de convite antes do botão "Fale conosco")
          </label>
          <input
            name="cta"
            defaultValue={evento?.cta}
            className={CAMPO_CLASS}
            placeholder="Participe conosco!"
          />
        </div>
      </section>

      {erro && (
        <p className="rounded border border-red-400/40 bg-red-400/10 px-3 py-2 text-sm text-red-200">
          {erro}
        </p>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={salvando}
          className="rounded bg-ibp-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-ibp-blue-dark hover:bg-ibp-gold-light disabled:opacity-50"
        >
          {salvando ? "Salvando..." : "Salvar evento"}
        </button>
      </div>
    </form>
  );
}
