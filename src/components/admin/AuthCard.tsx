import Image from "next/image";

export const CAMPO_CLASS =
  "w-full rounded border border-ibp-gold-light/25 bg-white/[0.06] px-3 py-2 text-white placeholder:text-white/40 focus:border-ibp-gold-light focus:outline-none";
export const LABEL_CLASS =
  "mb-1 block text-xs font-bold uppercase tracking-wide text-white/60";
export const BOTAO_CLASS =
  "w-full rounded bg-ibp-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-ibp-blue-dark transition-colors hover:bg-ibp-gold-light disabled:opacity-50";

export default function AuthCard({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ibp-blue-dark px-6">
      <div className="w-full max-w-sm rounded-xl border border-ibp-gold-light/25 bg-white/[0.06] p-8">
        <div className="flex justify-center">
          <Image
            src="/brand/simbolo.png"
            alt="Instituto Bíblico de Paulínia"
            width={64}
            height={87}
            className="h-16 w-auto"
          />
        </div>
        <h1 className="mt-4 text-center font-serif text-2xl font-bold text-white">
          {titulo}
        </h1>
        <p className="mt-1 text-center text-sm text-white/60">
          Instituto Bíblico de Paulínia
        </p>
        {children}
      </div>
    </div>
  );
}
