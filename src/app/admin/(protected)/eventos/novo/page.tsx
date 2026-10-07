import Link from "next/link";
import EventoForm from "@/components/admin/EventoForm";

export default function NovoEventoPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <Link
        href="/admin/eventos"
        className="text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
      >
        ← Voltar
      </Link>
      <h1 className="mt-4 font-serif text-2xl font-bold text-white">
        Novo evento
      </h1>
      <p className="mt-1 text-sm text-white/60">
        Nenhum campo é obrigatório — preencha o que fizer sentido para este
        evento.
      </p>
      <div className="mt-8">
        <EventoForm />
      </div>
    </div>
  );
}
