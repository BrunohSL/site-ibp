import { Suspense } from "react";
import Link from "next/link";
import EditarEvento from "@/components/admin/EditarEvento";

export default function EditarEventoPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <Link
        href="/admin/eventos"
        className="text-sm font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
      >
        ← Voltar
      </Link>
      <h1 className="mt-4 font-serif text-2xl font-bold text-white">
        Editar evento
      </h1>
      <div className="mt-8">
        <Suspense>
          <EditarEvento />
        </Suspense>
      </div>
    </div>
  );
}
