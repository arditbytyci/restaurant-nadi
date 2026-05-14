"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import MapComponent from "@/components/Map/Map";

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-dvh bg-secondary pt-[var(--header-height)] text-primary">
      <Container>
        <section className="grid gap-12 px-5 py-12 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-light uppercase tracking-[0.35em] opacity-75 lg:text-sm">
              La nostra casa
            </p>

            <h1 className="font-edlavonia text-5xl leading-[1.05] md:text-7xl lg:text-8xl xl:text-9xl">
              Benvenuti da Nadi
            </h1>

            <div className="mt-8 space-y-6 text-base font-light leading-relaxed opacity-85 md:text-xl lg:text-2xl">
              <p>
                Nadi è un luogo dove il tempo rallenta e i sapori diventano
                ricordi. Ogni pasto è un&apos;esperienza, un viaggio che attraversa
                tradizioni e profumi di casa: nasce come nelle cucine delle
                nostre nonne, con calma, con mani pazienti, con quel calore che
                non si insegna ma si trasmette.
              </p>

              <p>
                Profumi che riempiono la stanza, il pane caldo che si spezza, la
                carne che sfrigola sulla griglia, perché ognuno di noi ha un
                sapore che risveglia ricordi lontani.
              </p>

              <p>
                Qui la cucina balcanica rivive con passione: autentica nelle sue
                radici, viva nella sua anima, capace di rinnovarsi senza mai
                perdere la propria verità.
              </p>

              <p>
                Nadi è questo: un abbraccio caldo che sa di famiglia, un luogo
                dove fermarsi, condividere il tempo e riscoprire il gusto delle
                cose vere.
              </p>
            </div>
          </div>

          <div>
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] border border-primary/20 sm:h-[520px] lg:h-[620px] lg:rounded-[2rem]">
              {isClient && <MapComponent />}
            </div>

            <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-base font-light opacity-80 md:text-xl">
                Via Tommaso da Modena 1/b, Roncade (TV)
              </p>

              <a
                href="https://www.google.com/maps/place/Nadi+sapori+balcanici/@45.639164,12.3804721,17z/data=!4m6!3m5!1s0x47794f0005bc45f5:0x22db9f4166e156db!8m2!3d45.6391642!4d12.385622!16s%2Fg%2F11nj2bjzfc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit border-b border-primary/45 pb-1 text-sm uppercase tracking-[0.24em] text-primary/80 transition hover:border-primary hover:text-primary"
              >
                Apri mappa
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
