"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGENS = [
  { src: "/hero/hero-1.jpg", posicao: "center" },
  { src: "/hero/hero-2.jpg", posicao: "center 20%" },
];

export default function HeroCarousel() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndice((i) => (i + 1) % IMAGENS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {IMAGENS.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt=""
          fill
          priority={i === 0}
          style={{ objectPosition: img.posicao }}
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === indice ? "opacity-80" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-ibp-blue-dark/80" />
    </div>
  );
}
