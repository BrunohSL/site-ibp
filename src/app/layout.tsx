import type { Metadata } from "next";
import { Source_Serif_4, Lato } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Instituto Bíblico de Paulínia",
    template: "%s | Instituto Bíblico de Paulínia",
  },
  description:
    "Aperfeiçoando vocacionados, servindo a igreja. Cursos de Teologia Livre, Formação de Obreiros (CFO) e TALITA em Paulínia-SP, com material didático EETAD.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${sourceSerif.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
