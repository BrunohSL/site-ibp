import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Instituto Bíblico de Paulínia. Endereço, telefone e e-mail para dúvidas sobre matrícula e cursos.",
};

const ENDERECO = "Av. José Padovani, 34 - 1º andar, Alto de Pinheiros, Paulínia - SP";

export default function ContatoPage() {
  return (
    <section className="bg-ibp-blue-dark">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-ibp-gold-light">
            Contato
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-white">
            Fale conosco
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Tire suas dúvidas sobre matrícula, cursos e núcleo com a nossa
            secretaria.
          </p>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
                Endereço
              </dt>
              <dd className="mt-1 text-white/80">{ENDERECO}</dd>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  ENDERECO
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-bold text-ibp-gold-light hover:text-white"
              >
                Ver no mapa →
              </a>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
                Telefone
              </dt>
              <dd className="mt-1">
                <a href="tel:+551938444067" className="text-white/80 hover:text-white">
                  (19) 3844-4067
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-ibp-gold-light">
                E-mail
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:secretaria@ibpteo.com.br"
                  className="text-white/80 hover:text-white"
                >
                  secretaria@ibpteo.com.br
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="overflow-hidden rounded-lg border border-ibp-gold-light/25 shadow-sm">
          <iframe
            title="Localização do Instituto Bíblico de Paulínia"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              ENDERECO
            )}&output=embed`}
            className="h-full min-h-[400px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
