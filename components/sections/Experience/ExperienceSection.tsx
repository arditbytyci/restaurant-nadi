import Image from "next/image";
import { Container } from "@/components/layout/Container";

export const ExperienceSection = () => {
  return (
    <section className="bg-background text-secondary">
      <Container className="py-16 sm:py-20 lg:py-32">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-around lg:gap-20">
          <div className="w-full flex justify-center lg:w-auto">
            <div className="relative aspect-[4/5] w-[78vw] max-w-[360px] overflow-hidden sm:max-w-[420px] lg:w-[450px] lg:max-w-none">
              <Image
                src="/restaurant-atmosphere.png"
                alt="Guests enjoying drinks at Restaurant Nadi"
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 420px, 450px"
                quality={100}
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-xl text-center lg:text-left">
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-secondary/50 sm:tracking-[0.5em]">
              L’atmosfera
            </p>

            <h2 className="text-3xl font-light uppercase leading-[1.2] tracking-[0.12em] sm:text-4xl lg:text-6xl">
              Un momento
              <br />
              da condividere
            </h2>

            <div className="mx-auto my-7 h-px w-12 bg-secondary/30 lg:mx-0 lg:my-8" />

            <p className="mx-auto max-w-md text-base font-light leading-relaxed text-secondary/70 sm:text-lg lg:mx-0 lg:max-w-xl lg:text-xl">
              Tra luci calde, sorrisi e calici alzati, Nadi è più di un
              ristorante.
              <br />
              <br />È un luogo dove il tempo rallenta, dove ogni tavolo racconta
              una storia, e ogni serata diventa un ricordo.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
