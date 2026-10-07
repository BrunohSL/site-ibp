"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { supabase, supabaseConfigured } from "@/lib/supabase";
import { BOTAO_CLASS, CAMPO_CLASS, LABEL_CLASS } from "./AuthCard";

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    const redirectTo = `${window.location.origin}/admin/redefinir-senha`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });
    setEnviando(false);
    if (error) {
      setErro(error.message);
      return;
    }
    setEnviado(true);
  }

  if (!supabaseConfigured) {
    return (
      <p className="mt-6 text-sm text-red-200">
        Site ainda sem conexão com o banco (configure as chaves do Supabase).
      </p>
    );
  }

  if (enviado) {
    return (
      <div className="mt-6 text-center">
        <p className="text-white/80">
          Se esse e-mail estiver cadastrado, enviamos um link para você criar
          uma senha nova. Confira também a caixa de spam.
        </p>
        <Link
          href="/admin/login"
          className="mt-4 inline-block text-sm text-ibp-gold-light hover:text-white"
        >
          Voltar para o login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="mt-6 space-y-4">
      <p className="text-sm text-white/60">
        Digite o e-mail cadastrado. Vamos enviar um link para você criar uma
        senha nova.
      </p>
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
      {erro && <p className="text-sm text-red-200">{erro}</p>}
      <button type="submit" disabled={enviando} className={BOTAO_CLASS}>
        {enviando ? "Enviando..." : "Enviar link"}
      </button>
      <Link
        href="/admin/login"
        className="block text-center text-sm text-white/50 hover:text-white"
      >
        Voltar para o login
      </Link>
    </form>
  );
}
