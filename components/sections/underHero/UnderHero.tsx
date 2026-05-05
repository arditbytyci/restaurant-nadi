import { MovingSeparator } from "@/components/ui/Separator/Separator";
import Image from "next/image";

const dishes = [
  {
    src: "/dish-burek.png",
    title: "Pite",
    subtitle: "Un classico intramontabile",
    description: "Torta salata artigianale, preparata secondo tradizione.",
  },
  {
    src: "/dish-cevapi.png",
    title: "Cevapcici",
    subtitle: "Polpette cilindriche di carne",
    description: "Piccole, saporite e grigliate al momento.",
  },
  {
    src: "/dish-speca.png",
    title: "Peperoni",
    subtitle: "con Gjizë",
    description: "Su una base di ricotta, panna e formaggio tipico.",
  },
];

export const UnderHero = () => {
  return (
    <section className="bg-background text-secondary">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-secondary/60">
          Tradizione balcanica
        </p>

        <h2 className="text-3xl font-light uppercase tracking-[0.2em] lg:text-5xl">
          Sapori di casa
        </h2>

        <div className="mx-auto my-8 h-px w-16 bg-secondary/30" />

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-secondary/80 lg:text-2xl">
          Ricette tramandate, profumi di casa e piatti preparati con cura: Nadi
          porta in tavola l&apos;autenticità dei Balcani in un ambiente caldo,
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

        <div className="grid gap-14 sm:grid-cols-3 sm:items-end sm:gap-6 lg:gap-12">
          {dishes.map((dish) => (
            <article
              key={dish.src}
              className="mx-auto flex w-full max-w-sm flex-col items-center text-center"
            >
              <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[220px] lg:max-w-[320px]">
                <Image
                  src={dish.src}
                  alt={`${dish.title} ${dish.subtitle}`}
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 30vw, 320px"
                  className="object-contain drop-shadow-xl"
                />
              </div>

              <h4 className="mt-5 text-2xl font-light uppercase leading-tight tracking-[0.18em] text-secondary sm:text-xl lg:text-3xl">
                {dish.title}
              </h4>

              <p className="mt-2 min-h-[2rem] text-xs uppercase leading-relaxed tracking-[0.22em] text-secondary/65 sm:text-[10px] lg:text-xs">
                {dish.subtitle}
              </p>

              <p className="mt-3 max-w-[18rem] text-sm font-light leading-relaxed text-secondary/75 sm:text-xs lg:text-base">
                {dish.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <MovingSeparator direction="left" />
    </section>
  );
};
