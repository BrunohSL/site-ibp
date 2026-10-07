"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { BOTAO_CLASS, CAMPO_CLASS, LABEL_CLASS } from "./AuthCard";

export default function RedefinirSenha() {
  const router = useRouter();
  const [pronto, setPronto] = useState(false);
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    if (!supabaseConfigured) return;

    // O link do e-mail abre uma sessão temporária de recuperação ao carregar a página.
    const { data: sub } = supabase.auth.onAuthStateChange((evento) => {
      if (evento === "PASSWORD_RECOVERY") setPronto(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setPronto(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function salvar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    if (senha !== confirmacao) {
      setErro("As senhas não são iguais.");
      return;
    }
    if (senha.length < 8) {
      setErro("Use pelo menos 8 caracteres.");
      return;
    }
    setEnviando(true);
    const { error } = await supabase.auth.updateUser({ password: senha });
    setEnviando(false);
    if (error) {
      setErro(error.message);
      return;
    }
    setConcluido(true);
    setTimeout(() => router.replace("/admin/eventos"), 1500);
  }

  if (!supabaseConfigured) {
    return (
      <p className="mt-6 text-sm text-red-200">
        Site ainda sem conexão com o banco (configure as chaves do Supabase).
      </p>
    );
  }

  if (concluido) {
    return (
      <p className="mt-6 text-center text-emerald-300">
        Senha atualizada! Abrindo o painel...
      </p>
    );
  }

  if (!pronto) {
    return (
      <p className="mt-6 text-center text-sm text-white/60">
        Abra esta página pelo link recebido por e-mail.{" "}
        <Link
          href="/admin/esqueci-senha"
          className="text-ibp-gold-light hover:text-white"
        >
          Pedir um novo link
        </Link>
      </p>
    );
  }

  return (
    <form onSubmit={salvar} className="mt-6 space-y-4">
      <div>
        <label className={LABEL_CLASS}>Nova senha</label>
        <input
          type="password"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={CAMPO_CLASS}
        />
      </div>
      <div>
        <label className={LABEL_CLASS}>Confirmar nova senha</label>
        <input
          type="password"
          required
          value={confirmacao}
          onChange={(e) => setConfirmacao(e.target.value)}
          className={CAMPO_CLASS}
        />
      </div>
      {erro && <p className="text-sm text-red-200">{erro}</p>}
      <button type="submit" disabled={enviando} className={BOTAO_CLASS}>
        {enviando ? "Salvando..." : "Salvar nova senha"}
      </button>
    </form>
  );
}
