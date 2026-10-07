"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EventoForm from "./EventoForm";
import { getEventoById, type Evento } from "@/lib/eventos";

export default function EditarEvento() {
  const id = Number(useSearchParams().get("id"));
  const [carregado, setCarregado] = useState<{
    id: number;
    evento: Evento | null;
  } | null>(null);

  useEffect(() => {
    if (!id) return;
    getEventoById(id)
      .then((evento) => setCarregado({ id, evento }))
      .catch(() => setCarregado({ id, evento: null }));
  }, [id]);

  // undefined = carregando, null = não encontrado
  const evento = !id ? null : carregado?.id === id ? carregado.evento : undefined;

  if (evento === undefined) return <p className="text-white/60">Carregando...</p>;
  if (evento === null) return <p className="text-white/60">Evento não encontrado.</p>;
  return <EventoForm evento={evento} />;
}
