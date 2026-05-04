import { Container } from "@/components/layout/Container";
import { Clock, Instagram, Location } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 text-background">
      <Container className="py-14 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-background/50">
                Restaurant Nadi
              </p>

              <h2 className="max-w-xl text-2xl font-thin uppercase leading-tight tracking-[0.18em] lg:text-4xl">
                Sapori Balcanici
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-light text-background/75">
              <div className="text-background/70">
                <Location />
              </div>

              <p className="text-base leading-relaxed lg:text-lg">
                Via Tommaso da Modena 1/b
                <br />
                Roncade (TV)
              </p>

              <a
                href="https://maps.google.com/?q=45.639164,12.383047"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit border-b border-background/30 pb-1 text-xs uppercase tracking-[0.28em] transition hover:border-background hover:text-background"
              >
                Apri mappa
              </a>
            </div>

            <div className="flex flex-col gap-4 font-light text-background/75">
              <div className="text-background/70">
                <Clock />
              </div>

              <div className="space-y-1 text-sm leading-relaxed lg:text-base">
                <p>Lunedì · 12:00–15:00 / 18:30–23:00</p>
                <p>Martedì · Chiuso</p>
                <p>Mer–Gio · 12:00–15:00 / 18:30–23:00</p>
                <p>Ven–Sab · 12:00–15:00 / 18:30–00:00</p>
                <p>Domenica · 12:00–15:00 / 18:30–23:30</p>
              </div>

              <a
                href="tel:+393933783921"
                className="text-sm text-background/50 transition hover:text-background"
              >
                +39 393 378 3921
              </a>

              <a
                href="mailto:restaurant.nadi.contact@gmail.com"
                className="text-sm text-background/50 transition hover:text-background"
              >
                restaurant.nadi.contact@gmail.com
              </a>
            </div>
          </div>

          <div className="my-10 h-px w-full bg-background/15" />

          <div className="flex flex-col gap-6 text-background/50 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs uppercase tracking-[0.3em]">
              © Restaurant Nadi
            </p>

            <a
              href="https://www.instagram.com/nadisaporibalcanici?igsh=MXhqdzduMGJjdTZ5cA=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit transition hover:text-background"
            >
              <Instagram />
            </a>

            <p className="text-sm font-light">Roncade, Treviso — Italia</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
