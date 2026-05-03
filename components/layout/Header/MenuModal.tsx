"use client";

import { animate, motion } from "framer-motion";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useEffect } from "react";
import { Facebook, Instagram } from "@/components/icons";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const cleanup = animate(0, 0.001, {
      type: "spring",
      stiffness: 200,
      damping: 20,
    });

    return cleanup.stop;
  }, []);

  return (
    <motion.div
      initial={false}
      animate={
        isOpen
          ? { opacity: 1, pointerEvents: "auto" }
          : { opacity: 0, pointerEvents: "none" }
      }
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-40 h-[100dvh] w-full overflow-hidden bg-secondary text-primary"
    >
      <div className="flex h-[100dvh] flex-col px-6 pt-[var(--header-height)]">
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={false}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{
                delay: isOpen ? index * 0.07 : 0,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="text-3xl font-light uppercase tracking-[0.28em] transition hover:opacity-70 sm:text-4xl lg:text-6xl"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="pb-8 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-primary/50">
            Sapori balcanici · tradizione · accoglienza
          </p>

          <div className="mx-auto mb-6 h-px w-20 bg-primary/25" />

          <div className="flex items-center justify-center gap-8 opacity-75">
            <Instagram color="#ffeedf" height="18" width="auto" />
            <Facebook color="#ffeedf" height="18" width="auto" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
