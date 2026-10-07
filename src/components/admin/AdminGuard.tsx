"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase, supabaseConfigured } from "@/lib/supabase";

type Estado = "verificando" | "liberado" | "sem-permissao";

// O site é estático, então a proteção do painel acontece no navegador. A segurança de
// verdade fica no Supabase (RLS): sem estar na tabela admins, nada pode ser alterado.
export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [estado, setEstado] = useState<Estado>("verificando");
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!supabaseConfigured) {
      router.replace("/admin/login");
      return;
    }
    supabase.auth.getSession().then(async ({ data }) => {
      const sessao = data.session;
      if (!sessao) {
        router.replace("/admin/login");
        return;
      }
      setEmail(sessao.user.email ?? null);
      const { data: admin } = await supabase
        .from("admins")
        .select("user_id")
        .eq("user_id", sessao.user.id)
        .maybeSingle();
      setEstado(admin ? "liberado" : "sem-permissao");
    });
  }, [router]);

  if (estado === "verificando") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ibp-blue text-white/50">
        Carregando...
      </div>
    );
  }

  if (estado === "sem-permissao") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ibp-blue px-6 text-center text-white">
        <p>
          A conta <strong>{email}</strong> não tem permissão para editar o
          site.
        </p>
        <SairButton />
      </div>
    );
  }

  return <>{children}</>;
}

export function SairButton() {
  const router = useRouter();

  async function sair() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  return (
    <button
      type="button"
      onClick={sair}
      className="rounded border border-ibp-gold-light/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ibp-gold-light hover:bg-white/5"
    >
      Sair
    </button>
  );
}
