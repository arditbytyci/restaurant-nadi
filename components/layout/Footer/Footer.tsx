import { Container } from "@/components/layout/Container";
import { Clock, Instagram, Location } from "@/components/icons";

const hours = [
  { day: "Lunedì", time: "12:00-15:00 / 18:30-23:00" },
  { day: "Martedì", time: "Chiuso" },
  { day: "Mercoledì-Giovedì", time: "12:00-15:00 / 18:30-23:00" },
  { day: "Venerdì-Sabato", time: "12:00-15:00 / 18:30-00:00" },
  { day: "Domenica", time: "12:00-15:00 / 18:30-23:30" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 text-background sm:pt-20 lg:pt-24">
      <Container className="pb-10 pt-10 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr_1.2fr] lg:gap-16">
            <section>
              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-background/55">
                Restaurant Nadi
              </p>

              <h2 className="max-w-xl text-4xl font-thin uppercase leading-tight tracking-[0.16em] sm:text-5xl lg:text-6xl">
                Sapori Balcanici
              </h2>

              <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-background/70">
                Cucina di casa, griglia e tradizione balcanica nel cuore di
                Roncade.
              </p>
            </section>

            <section className="flex gap-4 text-background/80">
              <div className="mt-1 text-background/70">
                <Location />
              </div>

              <div>
                <h3 className="mb-4 text-sm uppercase tracking-[0.32em] text-background/55">
                  Dove siamo
                </h3>

                <address className="not-italic text-xl font-light leading-relaxed text-background sm:text-2xl">
                  Via Tommaso da Modena 1/b
                  <br />
                  Roncade (TV)
                </address>

                <a
                  href="https://maps.google.com/?q=45.639164,12.383047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit border-b border-background/35 pb-1 text-sm uppercase tracking-[0.24em] text-background/70 transition hover:border-background hover:text-background"
                >
                  Apri mappa
                </a>

                <div className="mt-8 space-y-3 text-lg font-light leading-relaxed text-background/75">
                  <a
                    href="tel:+393933783921"
                    className="block transition hover:text-background"
                  >
                    +39 393 378 3921
                  </a>

                  <a
                    href="mailto:restaurant.nadi.contact@gmail.com"
                    className="block break-words transition hover:text-background"
                  >
                    restaurant.nadi.contact@gmail.com
                  </a>
                </div>
              </div>
            </section>

            <section className="flex gap-4 text-background/80">
              <div className="mt-1 text-background/70">
                <Clock />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="mb-4 text-sm uppercase tracking-[0.32em] text-background/55">
                  Orari
                </h3>

                <dl className="space-y-3 text-base leading-relaxed sm:text-lg">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className="grid gap-1 border-b border-background/15 pb-3 sm:grid-cols-[11rem_1fr] sm:gap-4"
                    >
                      <dt className="font-light text-background/65">
                        {item.day}
                      </dt>
                      <dd className="font-light text-background">
                        {item.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          </div>

          <div className="my-10 h-px w-full bg-background/15" />

          <div className="flex flex-col gap-6 text-background/55 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.3em]">
              © Restaurant Nadi
            </p>

            <a
              href="https://www.instagram.com/nadisaporibalcanici?igsh=MXhqdzduMGJjdTZ5cA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Restaurant Nadi"
              className="w-fit text-background/65 transition hover:text-background"
            >
              <Instagram color="currentColor" className="h-7 w-7" />
            </a>

            <p className="text-sm font-light">Roncade, Treviso - Italia</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
