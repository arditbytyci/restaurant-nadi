"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <Image
        src="/hdr1.jpg"
        alt="Restaurant outdoor terrace"
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <Container>
        <div className="relative z-10 flex h-[100dvh] flex-col items-center justify-around pt-[var(--header-height)] text-center text-white">
          <h1 className="max-w-5xl text-[13vw] font-thin uppercase leading-none tracking-[0.18em] sm:text-[10vw] lg:text-[6vw]">
            Sapori Balcanici
          </h1>

          <a
            href="#menu"
            className="mt-8 uppercase font-extralight tracking-[0.4em] text-xl lg:text-[10svh] text-white border-b border-white/50 pb-1 hover:border-white"
          >
            Il Menù
          </a>
        </div>
      </Container>
    </section>
  );
};
