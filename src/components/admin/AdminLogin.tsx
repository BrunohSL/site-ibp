"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { BOTAO_CLASS, CAMPO_CLASS, LABEL_CLASS } from "./AuthCard";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [verificando, setVerificando] = useState(supabaseConfigured);

  useEffect(() => {
    if (!supabaseConfigured) return;
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace("/admin/eventos");
      else setVerificando(false);
    });
  }, [router]);

  async function entrar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });
    setEnviando(false);
    if (error) {
      setErro("E-mail ou senha incorretos.");
      return;
    }
    router.replace("/admin/eventos");
  }

  if (!supabaseConfigured) {
    return (
      <p className="mt-6 text-sm text-red-200">
        Site ainda sem conexão com o banco (configure as chaves do Supabase).
      </p>
    );
  }

  if (verificando) return null;

  return (
    <>
      {erro && (
        <p className="mt-4 rounded border border-red-400/40 bg-red-400/10 px-3 py-2 text-sm text-red-200">
          {erro}
        </p>
      )}

      <form onSubmit={entrar} className="mt-6 space-y-4">
        <div>
          <label className={LABEL_CLASS}>E-mail</label>
          <input
            type="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={CAMPO_CLASS}
          />
        </div>
        <div>
          <label className={LABEL_CLASS}>Senha</label>
          <input
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={CAMPO_CLASS}
          />
        </div>
        <button type="submit" disabled={enviando} className={BOTAO_CLASS}>
          {enviando ? "Entrando..." : "Entrar"}
        </button>
        <Link
          href="/admin/esqueci-senha"
          className="block text-center text-sm text-ibp-gold-light hover:text-white"
        >
          Esqueci minha senha
        </Link>
      </form>
    </>
  );
}
