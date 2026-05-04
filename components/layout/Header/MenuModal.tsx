"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";
import { Instagram } from "@/components/icons";

interface MenuModalProps {
  onNavigate: (nextPath: string) => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

const panelTransition = {
  type: "spring" as const,
  stiffness: 220,
  damping: 28,
  mass: 0.9,
};

const panelExitTransition = {
  type: "spring" as const,
  stiffness: 240,
  damping: 32,
  mass: 0.9,
};

export const MenuModal: React.FC<MenuModalProps> = ({ onNavigate }) => {
  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
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
      transition={{ duration: 0.14, ease: "linear" }}
      className="fixed inset-0 z-[99] h-[100dvh] w-full overflow-hidden bg-secondary text-primary"
    >
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: -24,
          transition: panelExitTransition,
        }}
        transition={panelTransition}
        className="flex h-full transform-gpu flex-col overflow-hidden px-6 pt-[var(--header-height)] will-change-transform"
      >
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -12,
                opacity: 0,
                transition: panelExitTransition,
              }}
              transition={{
                delay: index * 0.05,
                ...panelTransition,
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
          <div className="mb-6 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-primary/50">
            Tradizione · Cucina · Casa
          </div>

          <div className="mx-auto mb-6 h-px w-20 bg-primary/25" />

          <div className="flex flex-col items-center gap-5">
            <a
              href="https://www.instagram.com/nadisaporibalcanici?igsh=MXhqdzduMGJjdTZ5cA=="
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition hover:opacity-100"
            >
              <Instagram color="#ffeedf" height="18" width="auto" />
            </a>

            <a
              href="tel:+393933783921"
              className="text-sm font-light tracking-[0.2em] text-primary/70 transition hover:text-primary"
            >
              +39 393 378 3921
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
