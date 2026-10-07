import Link from "next/link";
import AdminGuard, { SairButton } from "@/components/admin/AdminGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuard>
      <div className="flex min-h-screen flex-col bg-ibp-blue text-white">
        <header className="border-b border-ibp-gold-light/20 bg-ibp-blue-dark">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6">
              <Link href="/admin/eventos" className="font-serif text-lg font-bold text-white">
                Painel IBP
              </Link>
              <nav className="flex gap-4 text-sm font-bold uppercase tracking-wide text-white/70">
                <Link href="/admin/eventos" className="hover:text-ibp-gold-light">
                  Eventos
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="text-xs font-bold uppercase tracking-wide text-white/60 hover:text-white"
              >
                Ver site ↗
              </Link>
              <SairButton />
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </AdminGuard>
  );
}
