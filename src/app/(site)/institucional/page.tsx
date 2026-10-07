import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institucional",
  description:
    "Conheça a história, os valores e os parceiros institucionais do Instituto Bíblico de Paulínia.",
};

const ATRIBUTOS = [
  { titulo: "Sério", texto: "Confiança através de currículo reconhecido e corpo docente capacitado." },
  { titulo: "Tradicional", texto: "Mantido pela Assembleia de Deus, com a base da declaração de fé das ADs." },
  { titulo: "Sábio", texto: "Fundamentado na Palavra de Deus, fonte de todo conhecimento." },
  { titulo: "Acessível", texto: "Aberto a cristãos de qualquer denominação que buscam se aperfeiçoar." },
];

export default function InstitucionalPage() {
  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
            Institucional
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white">
            O IBP
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Uma instituição séria, que traz confiança aos seus alunos através
            de instituições que atestam sua qualidade, do currículo
            nacionalmente reconhecido e de um corpo docente capacitado —
            fundamentada na Palavra de Deus, fonte de todo conhecimento.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-serif text-2xl font-bold text-white">
          Nossa História
        </h2>
        <div className="mt-5 space-y-4 text-white/80">
          <p>
            O Instituto Bíblico de Paulínia (IBP) é uma instituição de
            educação teológica dedicada a capacitar os membros da igreja com
            fundamentos sólidos para a defesa da fé cristã, além de
            aprimorar o conhecimento de obreiros vocacionados para a obra do
            Senhor.
          </p>
          <p>
            Iniciou suas atividades em 11 de fevereiro de 2008 e foi
            formalmente constituído em 29 de setembro de 2009, conforme ata
            de sua mantenedora, a Igreja Evangélica Assembleia de Deus –
            Ministério do Belém em Paulínia. Nascido da necessidade de
            formar professores para a Escola Bíblica Dominical e lideranças
            pastorais para a região, o IBP é a pioneira entre as escolas de
            ensino bíblico do município.
          </p>
          <p>
            Sua diretoria fundadora foi composta pelo presidente,{" "}
            <strong className="font-semibold text-ibp-gold-light">
              Pastor Edvaldo Aparecido Bueno
            </strong>{" "}
            (também pastor da igreja mantenedora); pelo diretor
            administrativo,{" "}
            <strong className="font-semibold text-ibp-gold-light">
              Pastor Sebastião Otávio Teixeira
            </strong>
            ; pelo diretor pedagógico,{" "}
            <strong className="font-semibold text-ibp-gold-light">
              Pastor Walter Caldas
            </strong>{" "}
            (em memória); e pelo secretário-geral,{" "}
            <strong className="font-semibold text-ibp-gold-light">
              Professor Gunar Berg de Andrade
            </strong>
            .
          </p>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-bold text-white">
          Nossa Proposta Educacional
        </h2>
        <div className="mt-5 space-y-4 text-white/80">
          <p>
            O IBP destaca a importância do estudo bíblico tanto para a
            transformação pessoal e social do aluno quanto para o exercício
            do ensino da Palavra. Nossos cursos buscam aprofundar o
            conhecimento doutrinário de forma sistemática, promovendo também
            uma visão abrangente sobre os contextos geográfico, sociológico,
            cultural e filosófico das Escrituras.
          </p>
          <p>
            Com uma grade curricular interdisciplinar, o instituto alia o
            ensino teórico à prática ministerial e a oficinas litúrgicas
            (cultos pedagógicos ministrados pelos próprios alunos),
            fortalecendo a espiritualidade e a vivência comunitária.
          </p>
          <p>
            A excelência do ensino é chancelada por importantes alianças
            pedagógicas e institucionais:
          </p>
          <ul className="space-y-2 border-l-2 border-ibp-gold pl-5">
            <li>
              Reconhecido pelo{" "}
              <strong className="font-semibold text-white">CECRE</strong>{" "}
              (Conselho de Educação e Cultura Religiosa da CGADB)
            </li>
            <li>
              Afiliado à{" "}
              <strong className="font-semibold text-white">AETAL</strong>{" "}
              (Associação Evangélica de Educação Teológica na América
              Latina)
            </li>
            <li>
              Material didático de apoio fornecido pela{" "}
              <strong className="font-semibold text-white">EETAD</strong>{" "}
              (Escola de Educação Teológica das Assembleias de Deus), tendo
              sempre a Bíblia Sagrada como regra máxima de fé e prática
            </li>
          </ul>
          <p>
            Nosso corpo docente é formado por membros ativos da igreja
            mantenedora que possuem, além da formação teológica, graduação
            em diversas áreas do conhecimento.
          </p>
        </div>
      </section>

      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center font-serif text-2xl font-bold text-white">
            O que nos define
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ATRIBUTOS.map((a) => (
              <div
                key={a.titulo}
                className="rounded-lg border border-ibp-gold-light/25 bg-white/[0.06] p-6"
              >
                <h3 className="font-serif text-xl font-semibold text-ibp-gold-light">
                  {a.titulo}
                </h3>
                <p className="mt-2 text-sm text-white/70">{a.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ibp-blue">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-center font-serif text-2xl font-bold text-white">
            Para quem é o IBP
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-white/80">
            Nosso público é heterogêneo: homens e mulheres cristãos,
            independentemente da denominação, que desejam se aperfeiçoar ou
            que almejam o ministério — todos em busca de uma instituição
            séria e confiável.
          </p>
        </div>
      </section>

      <section className="bg-ibp-blue-dark">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-white">
            Diretoria e Corpo Docente
          </h2>
          <p className="max-w-xl text-white/80">
            Conheça os pastores, professores e voluntários da igreja
            mantenedora que conduzem e ensinam no IBP.
          </p>
          <Link
            href="/equipe"
            className="mt-2 inline-block rounded border-2 border-ibp-gold-light px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-ibp-gold-light transition-colors hover:bg-ibp-gold-light hover:text-ibp-blue-dark"
          >
            Ver diretoria e corpo docente →
          </Link>
        </div>
      </section>

      <section className="bg-ibp-blue">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-serif text-2xl font-bold text-white">
            Parceiros institucionais
          </h2>
          <p className="max-w-xl text-white/80">
            O IBP é mantido pela Assembleia de Deus e conta com o respaldo do
            CGADB e da AETAL. Nosso material didático é fornecido pela EETAD
            — Escola de Educação Teológica das Assembleias de Deus.
          </p>
          <div className="rounded-lg bg-white p-6">
            <Image
              src="/brand/parceiros.png"
              alt="Logotipos do IBP, CGADB, AETAL e EETAD"
              width={640}
              height={200}
              className="h-auto w-full max-w-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
