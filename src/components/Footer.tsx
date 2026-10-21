import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ibp-gold-light/20 bg-ibp-blue-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
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
            EETAD, com o respaldo do CGADB.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ibp-gold">
            Nossas Redes Sociais
          </h3>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.youtube.com/@institutobiblicodepaulinia2625"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube do IBP"
                className="text-white/80 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ibpinstitutodepaulinia?srtk=MW1kdThkcm1ycjF0cQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do IBP"
                className="text-white/80 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Instituto Bíblico de Paulínia · Desde 2008
      </div>
    </footer>
  );
}
