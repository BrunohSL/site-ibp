import Image from "next/image";
import Link from "next/link";
import CursoCard from "@/components/CursoCard";
import HeroCarousel from "@/components/HeroCarousel";
import { cursos } from "@/lib/cursos";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ibp-blue-dark">
        <HeroCarousel />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_auto] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
              Instituto Bíblico de Paulínia · Desde 2008
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              Aperfeiçoando vocacionados.
              <br />
              Servindo a igreja.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              Formação bíblica séria e acessível para pastores, líderes,
              professores e vocacionados ao ministério, mantida pela
              Assembleia de Deus em Paulínia-SP.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/cursos"
                className="rounded bg-ibp-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-ibp-blue-dark transition-colors hover:bg-ibp-gold-light"
              >
                Conheça os cursos
              </Link>
              <Link
                href="/contato"
                className="rounded border-2 border-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ibp-blue-dark"
              >
                Fale conosco
              </Link>
            </div>
          </div>
          <Image
            src="/brand/simbolo.png"
            alt="Selo do Instituto Bíblico de Paulínia"
            width={220}
            height={300}
            className="mx-auto hidden h-64 w-auto drop-shadow-lg lg:block"
            priority
          />
        </div>
      </section>

      {/* Vídeo institucional */}
      <section className="border-t border-ibp-gold-light/20 bg-ibp-blue">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
            Vídeo institucional
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold text-white">
            Conheça o IBP e nossos cursos em poucos minutos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Assista e descubra qual trilha de formação combina com o seu
            chamado — depois é só dar o próximo passo e se matricular.
          </p>

          <div className="mx-auto mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-2 ring-ibp-gold/50">
            <iframe
              src="https://www.youtube-nocookie.com/embed/GIfZF68Gwrg"
              title="Apresentação do Instituto Bíblico de Paulínia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
            />
          </div>

          <Link
            href="/contato"
            className="mt-8 inline-block rounded bg-ibp-gold px-8 py-3 text-sm font-bold uppercase tracking-wide text-ibp-blue-dark transition-colors hover:bg-ibp-gold-light"
          >
            Quero me matricular
          </Link>
        </div>
      </section>

      {/* Credibilidade */}
      <section className="border-y border-ibp-gold-light/20 bg-ibp-blue">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-center sm:grid-cols-3">
          <div>
            <p className="text-sm text-white/60">Formando vocacionados desde</p>
            <p className="mt-1 font-serif text-2xl font-bold text-white">2008</p>
          </div>
          <div>
            <p className="text-sm text-white/60">Material didático de referência nacional</p>
            <p className="mt-1 font-serif text-2xl font-bold text-white">EETAD</p>
          </div>
          <div>
            <p className="text-sm text-white/60">Respaldo institucional</p>
            <p className="mt-1 font-serif text-2xl font-bold text-white">CGADB · AETAL</p>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white">
            Nossos cursos
          </h2>
          <p className="mt-3 text-white/70">
            Da Teologia Livre à formação de obreiros e educadores infantis —
            um caminho de crescimento para cada chamado.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((curso) => (
            <CursoCard key={curso.slug} curso={curso} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/cursos"
            className="text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
          >
            Ver todos os cursos →
          </Link>
        </div>
      </section>

      {/* Palavra do Presidente */}
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="mx-auto text-center lg:mx-0">
            <Image
              src="/pessoas/presidente-edvaldo-bueno.jpg"
              alt="Pr. Edvaldo Bueno"
              width={280}
              height={280}
              className="h-56 w-56 rounded-full object-cover shadow-md ring-4 ring-ibp-gold-light/30 lg:h-64 lg:w-64"
            />
            <p className="mt-4 font-serif text-lg font-semibold text-white">
              Pr Edvaldo Bueno
            </p>
            <p className="text-sm text-white/60">Diretor Executivo</p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
              Palavra do Presidente
            </p>
            <p className="mt-3 font-serif text-2xl italic text-ibp-gold-light">
              Prezado irmão!
            </p>
            <div className="mt-5 space-y-4 text-white/80">
              <p>
                Todos sabemos a importância do cristão em crescer na graça e
                no conhecimento do Senhor Jesus Cristo, como bem orientou o
                apóstolo Pedro (2Pe 2.18). O estudo sistemático da Bíblia
                Sagrada é um dos mais poderosos instrumentos para esse
                crescimento.
              </p>
              <p>
                Buscando a maturidade espiritual do crente, o Instituto
                Bíblico de Paulínia – IBP tem suas portas abertas para
                receber pessoas que creem em Jesus Cristo como seu único
                Salvador e Senhor para que possam estudar a Palavra de Deus.
                Através do estudo, pessoas vocacionadas para o ministério
                poderão também se preparar para servir a Deus como
                &ldquo;obreiro que não tem do que se envergonhar, que maneja
                bem a palavra da verdade&rdquo; (2Tm 2.15).
              </p>
              <p>
                Nesses tempos em que várias heresias atingem a igreja de
                Cristo, somente a verdade do evangelho, pela ação do Espírito
                Santo pode preservar os crentes no caminho antigo da sã
                doutrina e da simplicidade que há em Cristo, da qual não
                podemos nos afastar (2Co 11.3).
              </p>
              <p>
                O IBP é uma escola de profetas, e digo isso sem qualquer
                pretensão de arrogância, sabendo que existem outros
                institutos bíblicos sérios que também buscam os mesmos
                objetivos. Sigamos, pois, na tarefa de buscar e transmitir os
                ensinos das Escrituras enquanto aguardamos a volta do Senhor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institucional teaser */}
      <section className="bg-ibp-blue">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold text-white">
              Sério, mas não difícil.
              <br />
              Tradicional, mas não arcaico.
              <br />
              Sábio, mas não arrogante.
            </h2>
            <p className="mt-5 text-white/80">
              O IBP é mantido pela Assembleia de Deus e forma seus alunos com
              currículo reconhecido nacionalmente, corpo docente capacitado e
              o alicerce da Palavra de Deus — para pessoas de qualquer
              denominação que desejam se aperfeiçoar ou seguir o ministério.
            </p>
            <Link
              href="/institucional"
              className="mt-6 inline-block text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
            >
              Conheça nossa história →
            </Link>
          </div>
          <Image
            src="/brand/logo-branco.png"
            alt="Instituto Bíblico de Paulínia"
            width={320}
            height={150}
            className="mx-auto h-auto w-full max-w-sm"
          />
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl font-bold text-white">
            Pronto para começar sua formação?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Fale com a nossa secretaria e descubra qual curso combina com o
            seu chamado.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-block rounded bg-ibp-gold px-8 py-3 text-sm font-bold uppercase tracking-wide text-ibp-blue-dark transition-colors hover:bg-ibp-gold-light"
          >
            Fale conosco
          </Link>
        </div>
      </section>
    </>
  );
}
