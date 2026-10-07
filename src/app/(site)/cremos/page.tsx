import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cremos",
  description:
    "Declaração de Fé do Instituto Bíblico de Paulínia — os fundamentos bíblicos e doutrinários que orientam o ensino do IBP.",
};

const ARTIGOS = [
  {
    texto:
      "Na inspiração divina verbal e plenária da Bíblia Sagrada, única regra infalível de fé e prática para a vida e o caráter cristão",
    ref: "2 Tm 3.14-17",
  },
  {
    texto:
      "Em um só Deus, eternamente subsistente em três pessoas distintas que, embora distintas, são iguais em poder, glória e majestade: o Pai, o Filho e o Espírito Santo; Criador do Universo, de todas as coisas que há nos céus e na terra, visíveis e invisíveis, e, de maneira especial, os seres humanos, por um ato sobrenatural e imediato, e não por um processo evolutivo",
    ref: "Dt 6.4; Mt 28.19; Mc 12.29; Gn 1.1; 2.7; Hb 11.3 e Ap 4.11",
  },
  {
    texto:
      "No Senhor Jesus Cristo, o Filho Unigênito de Deus, plenamente Deus, plenamente Homem, na concepção e no seu nascimento virginal, em sua morte vicária e expiatória, em sua ressurreição corporal dentre os mortos e em sua ascensão vitoriosa aos céus como Salvador do mundo",
    ref: "Jo 3.16-18; Rm 1.3,4; Is 7.14; Mt 1.23; Hb 10.12; Rm 8.34 e At 1.9",
  },
  {
    texto:
      "No Espírito Santo, a terceira pessoa da Santíssima Trindade, consubstancial com o Pai e o Filho, Senhor e Vivificador; que convence o mundo do pecado, da justiça e do juízo; que regenera o pecador; que falou por meio dos profetas e continua guiando o seu povo",
    ref: "2 Co 13.13; 2 Co 3.6,17; Rm 8.2; Jo 16.11; Tt 3.5; 2 Pe 1.21 e Jo 16.13",
  },
  {
    texto:
      "Na pecaminosidade do homem, que o destituiu da glória de Deus e que somente o arrependimento e a fé na obra expiatória e redentora de Jesus Cristo podem restaurá-lo a Deus",
    ref: "Rm 3.23; At 3.19",
  },
  {
    texto:
      "Na necessidade absoluta do novo nascimento pela graça de Deus mediante a fé em Jesus Cristo e pelo poder atuante do Espírito Santo e da Palavra de Deus para tornar o homem aceito no Reino dos Céus",
    ref: "Jo 3.3-8; Ef 2.8,9",
  },
  {
    texto:
      "No perdão dos pecados, na salvação plena e na justificação pela fé no sacrifício efetuado por Jesus Cristo em nosso favor",
    ref: "At 10.43; Rm 10.13; 3.24-26; Hb 7.25; 5.9",
  },
  {
    texto:
      "Na Igreja, que é o corpo de Cristo, coluna e firmeza da verdade, una, santa e universal assembleia dos fiéis remidos de todas as eras e todos os lugares, chamados do mundo pelo Espírito Santo para seguir a Cristo e adorar a Deus",
    ref: "1 Co 12.27; Jo 4.23; 1 Tm 3.15; Hb 12.23; Ap 22.17",
  },
  {
    texto:
      "No batismo bíblico efetuado por imersão em águas, uma só vez, em nome do Pai, e do Filho, e do Espírito Santo, conforme determinou o Senhor Jesus Cristo",
    ref: "Mt 28.19; Rm 6.1-6; Cl 2.12",
  },
  {
    texto:
      "Na necessidade e na possibilidade de termos vida santa e irrepreensível por obra do Espírito Santo, que nos capacita a viver como fiéis testemunhas de Jesus Cristo",
    ref: "Hb 9.14; 1 Pe 1.15",
  },
  {
    texto:
      "No batismo no Espírito Santo, conforme as Escrituras, que nos é dado por Jesus Cristo, demonstrado pela evidência física do falar em outras línguas, conforme a sua vontade",
    ref: "At 1.5; 2.4; 10.44-46; 19.1-7",
  },
  {
    texto:
      "Na atualidade dos dons espirituais distribuídos pelo Espírito Santo à Igreja para sua edificação, conforme sua soberana vontade para o que for útil",
    ref: "1 Co 12.1-12",
  },
  {
    texto:
      "Na segunda vinda de Cristo, em duas fases distintas: a primeira — invisível ao mundo, para arrebatar a sua Igreja antes da Grande Tribulação; a segunda — visível e corporal, com a sua Igreja glorificada, para reinar sobre o mundo durante mil anos",
    ref: "1 Ts 4.16,17; 1 Co 15.51-54; Ap 20.4; Zc 14.5; Jd 1.14",
  },
  {
    texto:
      "No comparecimento ante o Tribunal de Cristo de todos os cristãos arrebatados, para receberem a recompensa pelos seus feitos em favor da causa de Cristo na Terra",
    ref: "2 Co 5.10",
  },
  {
    texto:
      "No Juízo Final, onde comparecerão todos os ímpios: desde a Criação até o fim do Milênio; os que morrerem durante o período milenial e os que, ao final desta época, estiverem vivos. E na eternidade de tristeza e tormento para os infiéis e vida eterna de gozo e felicidade para os fiéis de todos os tempos",
    ref: "Mt 25.46; Is 65.20; Ap 20.11-15; 21.1-4",
  },
  {
    texto:
      "Cremos, também, que o casamento foi instituído por Deus e ratificado por nosso Senhor Jesus Cristo como união entre um homem e uma mulher, nascidos macho e fêmea, respectivamente, em conformidade com o definido pelo sexo de criação geneticamente determinado",
    ref: "Gn 2.18; Jo 2.1,2; Gn 2.24; 1.27",
  },
];

export default function CremosPage() {
  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
            Cremos
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white">
            Declaração de Fé do IBP
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-4 text-white/80">
          <p>
            Declaração de fé são interpretações autorizadas das Escrituras
            Sagradas aceitas e reconhecidas por uma igreja ou denominação.
            Todas as igrejas ou denominações no mundo possuem algum tipo de
            conjunto de crenças.
          </p>
          <p>
            A Bíblia é a Palavra de Deus e a única autoridade inerrante para
            a nossa vida. Não é um credo, mas, sim, sua fonte primária.
          </p>
          <blockquote className="border-l-2 border-ibp-gold py-1 pl-5 font-serif italic text-ibp-gold-light">
            &ldquo;A Bíblia é a Palavra de Deus ao homem; o Credo é a
            resposta do homem a Deus. A Bíblia revela a verdade em forma
            popular de vida e fato; o Credo declara a verdade em forma
            lógica de doutrina. A Bíblia é para ser crida e obedecida; o
            Credo é para ser professado e ensinado.&rdquo;
            <footer className="mt-2 font-sans text-sm not-italic text-white/50">
              — Philip Schaff
            </footer>
          </blockquote>
          <p>
            Em outras palavras, a Bíblia precisa ser interpretada e
            compreendida para uma adoração consciente a Deus.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-bold text-white">
          Cremos
        </h2>
        <ol className="mt-6 space-y-5">
          {ARTIGOS.map((artigo, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 font-serif font-semibold text-ibp-gold-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-white/80">
                {artigo.texto}{" "}
                <span className="text-sm text-white/40">
                  ({artigo.ref})
                </span>
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
