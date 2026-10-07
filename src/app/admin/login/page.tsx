import type { Metadata } from "next";
import AuthCard from "@/components/admin/AuthCard";
import AdminLogin from "@/components/admin/AdminLogin";

export const metadata: Metadata = {
  title: "Login administrativo",
};

export default function AdminLoginPage() {
  return (
    <AuthCard titulo="Painel administrativo">
      <AdminLogin />
    </AuthCard>
  );
}
