"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <Image
        src="/hero_terrace.jpg"
        alt="Restaurant outdoor terrace"
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover"
      />

      {/* blur layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <Container>
        <div className="relative z-10 flex h-[100dvh] flex-col items-center justify-around pt-[var(--header-height)] text-center text-white">
          <h1 className="max-w-5xl text-5xl font-thin uppercase leading-none tracking-[0.18em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Tradizione che si vive
          </h1>

          <Link
            href="/menu"
            className="mt-8 border-b border-white/50 pb-1 text-xl font-extralight uppercase tracking-[0.4em] text-white hover:border-white sm:text-2xl md:text-4xl lg:text-6xl"
          >
            Il Menù
          </Link>
        </div>
      </Container>
    </section>
  );
};
