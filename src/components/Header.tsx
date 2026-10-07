"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cursos } from "@/lib/cursos";
import { artigos } from "@/lib/artigos";

const CURSO_GRUPOS = Array.from(new Set(cursos.map((c) => c.grupo)));

const INSTITUCIONAL_LINKS = [
  { href: "/institucional", label: "Visão Geral" },
  { href: "/equipe", label: "Diretoria e Corpo Docente" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ibp-gold-light/20 bg-ibp-blue-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/simbolo.png"
            alt="Instituto Bíblico de Paulínia"
            width={48}
            height={65}
            className="h-12 w-auto"
            priority
          />
          <span className="hidden font-serif text-lg font-semibold leading-tight text-white sm:block">
            Instituto Bíblico
            <br />
            de Paulínia
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-bold uppercase tracking-wide transition-colors ${
              pathname === "/" ? "text-ibp-gold-light" : "text-white/70 hover:text-ibp-gold-light"
            }`}
          >
            Início
          </Link>

          {/* Institucional com submenu ao passar o mouse */}
          <div className="group relative">
            <Link
              href="/institucional"
              className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors ${
                pathname === "/institucional" || pathname === "/equipe"
                  ? "text-ibp-gold-light"
                  : "text-white/70 hover:text-ibp-gold-light"
              }`}
            >
              Institucional
              <svg
                viewBox="0 0 12 8"
                aria-hidden
                className="h-2.5 w-2.5 fill-current transition-transform group-hover:-rotate-180"
              >
                <path d="M6 8 0 0h12z" />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-lg border border-ibp-gold-light/20 bg-ibp-blue-dark p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {INSTITUCIONAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded px-3 py-2 text-sm text-white/80 normal-case hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/cremos"
            className={`text-sm font-bold uppercase tracking-wide transition-colors ${
              pathname === "/cremos" ? "text-ibp-gold-light" : "text-white/70 hover:text-ibp-gold-light"
            }`}
          >
            Cremos
          </Link>

          {/* Artigos com submenu ao passar o mouse */}
          <div className="group relative">
            <Link
              href="/artigos"
              className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors ${
                pathname.startsWith("/artigos") ? "text-ibp-gold-light" : "text-white/70 hover:text-ibp-gold-light"
              }`}
            >
              Artigos
              <svg
                viewBox="0 0 12 8"
                aria-hidden
                className="h-2.5 w-2.5 fill-current transition-transform group-hover:-rotate-180"
              >
                <path d="M6 8 0 0h12z" />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-1 rounded-lg border border-ibp-gold-light/20 bg-ibp-blue-dark p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              <ul>
                {artigos.map((artigo) => (
                  <li key={artigo.slug}>
                    <Link
                      href={`/artigos/${artigo.slug}`}
                      className="block rounded px-3 py-2 text-sm text-white/80 normal-case hover:bg-white/5 hover:text-white"
                    >
                      {artigo.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/artigos"
                className="mt-2 block border-t border-ibp-gold-light/15 pt-3 text-xs font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
              >
                Ver todos os artigos →
              </Link>
            </div>
          </div>

          {/* Cursos com submenu ao passar o mouse */}
          <div className="group relative">
            <Link
              href="/cursos"
              className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors ${
                pathname.startsWith("/cursos") ? "text-ibp-gold-light" : "text-white/70 hover:text-ibp-gold-light"
              }`}
            >
              Cursos
              <svg
                viewBox="0 0 12 8"
                aria-hidden
                className="h-2.5 w-2.5 fill-current transition-transform group-hover:-rotate-180"
              >
                <path d="M6 8 0 0h12z" />
              </svg>
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 translate-y-1 rounded-lg border border-ibp-gold-light/20 bg-ibp-blue-dark p-4 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {CURSO_GRUPOS.map((grupo) => (
                <div key={grupo} className="mb-3 last:mb-0">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-ibp-gold">
                    {grupo}
                  </p>
                  <ul>
                    {cursos
                      .filter((c) => c.grupo === grupo)
                      .map((curso) => (
                        <li key={curso.slug}>
                          <Link
                            href={`/cursos/${curso.slug}`}
                            className="block rounded px-2 py-1.5 text-sm text-white/80 normal-case hover:bg-white/5 hover:text-white"
                          >
                            {curso.sigla} · {curso.nome}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
              <Link
                href="/cursos"
                className="mt-2 block border-t border-ibp-gold-light/15 pt-3 text-xs font-bold uppercase tracking-wide text-ibp-gold-light hover:text-white"
              >
                Ver todos os cursos →
              </Link>
            </div>
          </div>

          <Link
            href="/eventos"
            className={`text-sm font-bold uppercase tracking-wide transition-colors ${
              pathname === "/eventos" ? "text-ibp-gold-light" : "text-white/70 hover:text-ibp-gold-light"
            }`}
          >
            Eventos
          </Link>
          <Link
            href="/contato"
            className={`text-sm font-bold uppercase tracking-wide transition-colors ${
              pathname === "/contato" ? "text-ibp-gold-light" : "text-white/70 hover:text-ibp-gold-light"
            }`}
          >
            Contato
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ibp-gold-light/20 bg-ibp-blue-dark px-6 py-4 md:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`rounded px-3 py-2 text-sm font-bold uppercase tracking-wide ${
              pathname === "/" ? "bg-white/10 text-ibp-gold-light" : "text-white/70"
            }`}
          >
            Início
          </Link>

          <Link
            href="/institucional"
            onClick={() => setOpen(false)}
            className={`rounded px-3 py-2 text-sm font-bold uppercase tracking-wide ${
              pathname === "/institucional" ? "bg-white/10 text-ibp-gold-light" : "text-white/70"
            }`}
          >
            Institucional
          </Link>
          <div className="flex flex-col gap-0.5 pb-1 pl-3">
            {INSTITUCIONAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-1.5 text-sm normal-case ${
                  pathname === link.href ? "text-ibp-gold-light" : "text-white/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/cremos"
            onClick={() => setOpen(false)}
            className={`rounded px-3 py-2 text-sm font-bold uppercase tracking-wide ${
              pathname === "/cremos" ? "bg-white/10 text-ibp-gold-light" : "text-white/70"
            }`}
          >
            Cremos
          </Link>

          <Link
            href="/artigos"
            onClick={() => setOpen(false)}
            className={`rounded px-3 py-2 text-sm font-bold uppercase tracking-wide ${
              pathname === "/artigos" ? "bg-white/10 text-ibp-gold-light" : "text-white/70"
            }`}
          >
            Artigos
          </Link>
          <div className="flex flex-col gap-0.5 pb-1 pl-3">
            {artigos.map((artigo) => (
              <Link
                key={artigo.slug}
                href={`/artigos/${artigo.slug}`}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-1.5 text-sm normal-case ${
                  pathname === `/artigos/${artigo.slug}`
                    ? "text-ibp-gold-light"
                    : "text-white/60"
                }`}
              >
                {artigo.titulo}
              </Link>
            ))}
          </div>

          <Link
            href="/cursos"
            onClick={() => setOpen(false)}
            className={`rounded px-3 py-2 text-sm font-bold uppercase tracking-wide ${
              pathname === "/cursos" ? "bg-white/10 text-ibp-gold-light" : "text-white/70"
            }`}
          >
            Cursos
          </Link>
          <div className="flex flex-col gap-0.5 pb-1 pl-3">
            {cursos.map((curso) => (
              <Link
                key={curso.slug}
                href={`/cursos/${curso.slug}`}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-1.5 text-sm normal-case ${
                  pathname === `/cursos/${curso.slug}`
                    ? "text-ibp-gold-light"
                    : "text-white/60"
                }`}
              >
                {curso.sigla} · {curso.nome}
              </Link>
            ))}
          </div>

          <Link
            href="/eventos"
            onClick={() => setOpen(false)}
            className={`rounded px-3 py-2 text-sm font-bold uppercase tracking-wide ${
              pathname === "/eventos" ? "bg-white/10 text-ibp-gold-light" : "text-white/70"
            }`}
          >
            Eventos
          </Link>
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className={`rounded px-3 py-2 text-sm font-bold uppercase tracking-wide ${
              pathname === "/contato" ? "bg-white/10 text-ibp-gold-light" : "text-white/70"
            }`}
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}
