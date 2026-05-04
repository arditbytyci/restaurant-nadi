"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import MapComponent from "@/components/Map/Map";

export default function AboutPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-dvh bg-secondary text-primary pt-[var(--header-height)]">
      <Container>
        <div className="px-5 py-12 md:px-10 lg:px-16 lg:py-20">
          {/* Hero text */}
          <section className="flex min-h-[80svh] flex-col justify-center border-b border-primary/20">
            <h1 className="max-w-5xl font-edlavonia text-5xl leading-none md:text-7xl lg:text-8xl xl:text-9xl">
              Tradizione che si vive, non si racconta.
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed font-light opacity-85 md:text-xl lg:text-2xl">
              Nadi è un luogo dove il tempo rallenta e ogni dettaglio conta. La
              nostra cucina nasce da ricette tramandate, reinterpretate con
              rispetto e attenzione. Piatti semplici, profondi, fatti per essere
              condivisi.
            </p>
          </section>

          {/* Story */}
          <section className="grid gap-12 border-b border-primary/20 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-32">
            <div>
              <p className="text-xs font-light tracking-[0.35em] uppercase opacity-80 lg:text-sm">
                La nostra cucina
              </p>
            </div>
            <div className="space-y-8 text-xl leading-relaxed font-light md:text-2xl lg:text-4xl">
              <p>
                Ogni piatto racconta un gesto, un&apos;abitudine, un ricordo. Dalla
                griglia ai piatti di casa, tutto nasce da una cucina autentica,
                fatta con calma e precisione.
              </p>
              <p className="opacity-75">
                Non seguiamo le mode. Seguiamo ciò che ha sempre funzionato:
                qualità, tempo e passione.
              </p>
              <p className="opacity-75">
                Un tavolo da condividere, profumi familiari e un&apos;accoglienza
                sincera: questa è l&apos;esperienza che vogliamo portare a Roncade.
              </p>
            </div>
          </section>

          {/* Map */}
          <section className="py-20 lg:py-32">
            <div className="mb-10 lg:mb-14">
              <p className="mb-5 text-xs font-light tracking-[0.35em] uppercase opacity-80 lg:text-sm">
                Dove trovarci
              </p>
              <h2 className="font-edlavonia text-5xl leading-none md:text-7xl lg:text-8xl xl:text-9xl">
                Un luogo da raggiungere, non solo da visitare.
              </h2>
            </div>

            <div
              ref={mapContainerRef}
              className="relative overflow-hidden rounded-[1.5rem] border border-primary/20 lg:rounded-[2.5rem]"
              style={{ height: "420px" }}
            >
              {isClient && <MapComponent />}
            </div>

            <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
              <p className="text-lg font-light md:text-2xl">
                Via Tommaso da Modena 1/b • Roncade (TV), Italy
              </p>
              <a
                href="https://maps.google.com/?q=45.639164,12.383047"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full border border-primary/40 px-6 py-3 text-sm tracking-[0.2em] uppercase transition-colors hover:bg-primary hover:text-secondary md:text-base"
              >
                Apri su Google Maps
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
