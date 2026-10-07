import type { Metadata } from "next";
import EventosLista from "@/components/eventos/EventosLista";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Agenda de eventos do Instituto Bíblico de Paulínia.",
};

export default function EventosPage() {
  return (
    <>
      <section className="bg-ibp-blue-dark">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
            Eventos
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white">
            Agenda do IBP
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Seminários, palestras e formaturas — acompanhe o que está
            programado no Instituto Bíblico de Paulínia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <EventosLista />
      </section>
    </>
  );
}
