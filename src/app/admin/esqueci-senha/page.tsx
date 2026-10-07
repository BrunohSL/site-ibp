import type { Metadata } from "next";
import AuthCard from "@/components/admin/AuthCard";
import EsqueciSenha from "@/components/admin/EsqueciSenha";

export const metadata: Metadata = {
  title: "Esqueci minha senha",
};

export default function EsqueciSenhaPage() {
  return (
    <AuthCard titulo="Esqueci minha senha">
      <EsqueciSenha />
    </AuthCard>
  );
}
