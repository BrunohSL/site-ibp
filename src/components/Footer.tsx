import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ibp-gold-light/20 bg-ibp-blue-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/brand/logo-branco.png"
            alt="Instituto Bíblico de Paulínia"
            width={220}
            height={104}
            className="h-16 w-auto"
          />
          <p className="mt-4 font-serif italic text-ibp-gold-light">
            Aperfeiçoando vocacionados.
            <br />
            Servindo a igreja.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ibp-gold">
            Navegação
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/institucional" className="hover:text-white">Institucional</Link></li>
            <li><Link href="/cursos" className="hover:text-white">Cursos</Link></li>
            <li><Link href="/eventos" className="hover:text-white">Eventos</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ibp-gold">
            Contato
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Av. José Padovani, 34 – 1º andar</li>
            <li>Alto de Pinheiros, Paulínia-SP</li>
            <li>
              <a href="tel:+551938444067" className="hover:text-white">
                (19) 3844-4067
              </a>
            </li>
            <li>
              <a href="mailto:secretaria@ibpteo.com.br" className="hover:text-white">
                secretaria@ibpteo.com.br
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ibp-gold">
            Parceiros
          </h3>
          <p className="text-sm text-white/80">
            Mantido pela Assembleia de Deus. Material didático fornecido pela
            EETAD, com o respaldo do CGADB e da AETAL.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Instituto Bíblico de Paulínia · Desde 2008
      </div>
    </footer>
  );
}
