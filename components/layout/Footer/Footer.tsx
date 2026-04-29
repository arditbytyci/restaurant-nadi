import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Facebook, Instagram, Location, Clock } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="min-h-[100svh] grid grid-rows-[auto_1fr_auto]">
      {/* Logo */}
      <Container className="flex items-center justify-center py-6">
        <Image
          src="/logo-hr.png"
          width={230}
          height={230}
          alt="Restaurant Nadi logo"
          className="w-auto sm:h-36 lg:h-48"
        />
      </Container>

      {/* Info — location + hours */}
      <Container className="flex flex-col lg:flex-row items-center justify-around gap-14 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <Location />
          <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed">
            Via Tommaso da Modena 1/b Roncade (TV)
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-lg sm:text-xl"
          >
            View on maps
          </a>
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <Clock />
          <div className="flex flex-col gap-2 text-xl sm:text-2xl lg:text-3xl">
            <p>
              Mon – Fri: <span className="font-edlavonia">9:00 – 21:00</span>
            </p>
            <p>
              Sat – Sun: <span className="font-edlavonia">9:00 – 22:00</span>
            </p>
          </div>
        </div>
      </Container>

      {/* Bottom bar — socials + contact */}
      <Container className="flex flex-col items-center gap-6 py-6">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row gap-6">
            <Facebook />
            <Instagram />
          </div>
          <div className="text-right">
            <p className="text-base sm:text-xl lg:text-3xl">+39 000 000 000</p>
            <p className="text-sm sm:text-base lg:text-2xl">
              restaurant@gmail.com
            </p>
          </div>
        </div>

        <hr className="w-full border-b border-current opacity-20" />

        <p className="font-edlavonia text-2xl sm:text-3xl md:text-4xl tracking-wider py-4">
          © Restaurant Nadi
        </p>
      </Container>
    </footer>
  );
};
