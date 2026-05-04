import { MovingSeparator } from "@/components/ui/Separator/Separator";
import Image from "next/image";

const dishes = [
  { src: "/dish-potatoes.png", name: "Patate al forno" },
  { src: "/dish-burek.png", name: "pite con gjizë" },
  { src: "/dish-cevapi.png", name: "Ćevapi" },
];

export const UnderHero = () => {
  return (
    <section className="bg-background text-secondary">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-secondary/60">
          Tradizione Balcanica
        </p>

        <h2 className="text-3xl font-light uppercase tracking-[0.2em] lg:text-5xl">
          Sapori di casa
        </h2>

        <div className="mx-auto my-8 h-px w-16 bg-secondary/30" />

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-secondary/80 lg:text-2xl">
          Ricette tramandate, profumi di brace e piatti preparati con cura: Nadi
          porta in tavola l’autenticità dei Balcani in un ambiente caldo,
          elegante e familiare.
        </p>
      </div>

      <MovingSeparator direction="right" />
      <div className="px-6 py-16 lg:px-16 lg:py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-secondary/50">
            Dalla nostra cucina
          </p>

          <h3 className="text-2xl font-light uppercase tracking-[0.18em] lg:text-4xl">
            Piatti simbolo
          </h3>
        </div>

        <div className="grid grid-cols-3 items-end gap-4 lg:gap-12">
          {dishes.map((dish) => (
            <div key={dish.src} className="flex flex-col items-center">
              <div className="relative aspect-square w-full max-w-[320px]">
                <Image
                  src={dish.src}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 1024px) 33vw, 320px"
                  className="object-contain drop-shadow-xl"
                />
              </div>

              <p className="mt-4 flex min-h-[2.5rem] items-center justify-center text-center text-[10px] uppercase leading-relaxed tracking-[0.18em] text-secondary/70 lg:min-h-0 lg:text-sm lg:tracking-[0.25em]">
                {dish.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <MovingSeparator direction="left" />
    </section>
  );
};
