import type { Metadata } from "next";
import AuthCard from "@/components/admin/AuthCard";
import RedefinirSenha from "@/components/admin/RedefinirSenha";

export const metadata: Metadata = {
  title: "Redefinir senha",
};

export default function RedefinirSenhaPage() {
  return (
    <AuthCard titulo="Criar senha nova">
      <RedefinirSenha />
    </AuthCard>
  );
}
