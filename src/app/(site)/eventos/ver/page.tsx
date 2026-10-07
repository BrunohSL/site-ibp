import { Suspense } from "react";
import type { Metadata } from "next";
import EventoDetalhe from "@/components/eventos/EventoDetalhe";

export const metadata: Metadata = {
  title: "Evento",
};

// O evento é escolhido pelo parâmetro ?e=<slug> e carregado no navegador,
// assim eventos novos aparecem sem precisar publicar o site de novo.
export default function EventoPage() {
  return (
    <Suspense>
      <EventoDetalhe />
    </Suspense>
  );
}
