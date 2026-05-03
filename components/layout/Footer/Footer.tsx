import { Container } from "@/components/layout/Container";
import { Facebook, Instagram, Location, Clock } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-background mt-20">
      <Container className="py-14 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-start">
            {/* Brand */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-background/50">
                Restaurant Nadi
              </p>

              <h2 className="max-w-xl text-2xl font-light uppercase leading-tight tracking-[0.18em] lg:text-4xl">
                Sapori balcanici a Roncade
              </h2>
            </div>

            {/* Address */}
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
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit border-b border-background/30 pb-1 text-xs uppercase tracking-[0.28em] transition hover:border-background hover:text-background"
              >
                Apri mappa
              </a>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-4 font-light text-background/75">
              <div className="text-background/70">
                <Clock />
              </div>

              <div className="space-y-1 text-base leading-relaxed lg:text-lg">
                <p>Lun – Ven · 9:00 – 21:00</p>
                <p>Sab – Dom · 9:00 – 22:00</p>
              </div>

              <p className="text-sm text-background/50">+39 000 000 000</p>
            </div>
          </div>

          <div className="my-10 h-px w-full bg-background/15" />

          {/* Bottom */}
          <div className="flex flex-col gap-6 text-background/50 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-xs uppercase tracking-[0.3em]">
              © Restaurant Nadi
            </p>

            <div className="flex items-center gap-6">
              <Facebook />
              <Instagram />
            </div>

            <p className="text-sm font-light">restaurant@gmail.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
