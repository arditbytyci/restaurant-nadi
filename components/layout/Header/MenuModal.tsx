"use client";

import { motion, useIsPresent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { Facebook, Instagram } from "@/components/icons";
import { ForkKnife } from "@/components/ui/ForkKnife";
import { Container } from "../Container";

interface MenuModalProps {
  onClose: () => void;
  onNavigate: (nextPath: string) => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

const contentTransition = {
  type: "spring" as const,
  stiffness: 220,
  damping: 28,
  mass: 0.9,
};

const exitTransition = {
  duration: 0.18,
  ease: [0.22, 1, 0.36, 1] as const,
};

const COLOR_SECONDARY = "#450b1d";

export const MenuModal: React.FC<MenuModalProps> = ({
  onClose,
  onNavigate,
}) => {
  const isPresent = useIsPresent();

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (event.defaultPrevented) {
      return;
    }

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    onNavigate(href);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={exitTransition}
      className="fixed inset-x-0 top-[calc(0px_-_env(safe-area-inset-top))] bottom-[calc(0px_-_env(safe-area-inset-bottom))] z-[110] w-full overflow-hidden bg-primary text-secondary will-change-[opacity]"
    >
      <Container className="absolute left-0 right-0 top-0 z-20 grid grid-cols-[1fr_1fr] bg-transparent py-2 pt-[calc(env(safe-area-inset-top)+0.5rem)] lg:grid-cols-[1fr_1fr_1fr]">
        <div className="relative z-10 hidden items-center lg:col-start-1 lg:flex">
          <a
            href="https://maps.app.goo.gl/AY9WLevKiBHjpHhc8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-secondary transition-opacity hover:opacity-75"
          >
            Via Tommaso da Modena 1/b Roncade (TV)
          </a>
        </div>

        <div className="relative z-10 col-start-1 flex justify-start lg:col-start-2 lg:justify-center">
          <Link
            href="/"
            onClick={(event) => handleNavigation(event, "/")}
            aria-label="Go to Restaurant Nadi home"
            className="relative h-32 w-32 md:h-28 md:w-28 lg:h-45 lg:w-45"
          >
            <Image
              src="/logo-nadi-dark.png"
              fill
              alt="Restaurant Nadi logo"
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="relative z-10 col-start-2 flex items-center justify-end lg:col-start-3">
          <button
            onClick={onClose}
            aria-expanded="true"
            aria-label="Close menu"
            className="flex flex-col items-center text-secondary"
          >
            <ForkKnife open={isPresent} color={COLOR_SECONDARY} />

            <span className="text-sm font-light lg:text-xl">close</span>
          </button>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -22, transition: exitTransition }}
        transition={contentTransition}
        className="flex h-full transform-gpu flex-col overflow-hidden px-6 pt-[var(--header-height)] will-change-transform"
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                ...contentTransition,
              }}
            >
              <Link
                href={link.href}
                onClick={(event) => handleNavigation(event, link.href)}
                className="text-3xl font-light uppercase tracking-[0.25em] transition hover:opacity-70 sm:text-4xl lg:text-6xl"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="pb-8 text-center">
          <div className="mb-6 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-secondary/50">
            Tradizione · Cucina · Casa
          </div>

          <div className="mx-auto mb-6 h-px w-20 bg-secondary/25" />

          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/nadisaporibalcanici?igsh=MXhqdzduMGJjdTZ5cA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Restaurant Nadi"
                className="text-secondary/80 transition hover:text-secondary"
              >
                <Instagram color="currentColor" className="h-12 w-12" />
              </a>

              <a
                href="https://www.facebook.com/NadiSaporiBalcanici"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Restaurant Nadi"
                className="text-secondary/80 transition hover:text-secondary"
              >
                <Facebook color="currentColor" className="h-12 w-12" />
              </a>
            </div>

            <a
              href="tel:+393933783921"
              className="text-sm font-light tracking-[0.2em] text-secondary/70 transition hover:text-secondary"
            >
              +39 393 378 3921
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
