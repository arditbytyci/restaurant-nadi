import { animate, AnimatePresence } from "framer-motion";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";

import Image from "next/image";
import { Facebook, Instagram } from "@/components/icons";

import { useEffect } from "react";

interface MenuModalProps {
  isOpen: boolean;
  headerHeight?: number;
  onClose: () => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  // headerHeight,
  onClose,
}) => {
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
      style={{ height: "100%" }}
      className="absolute inset-0 z-40 overflow-y-hidden h-full w-full bg-secondary flex flex-col items-center justify-around"
    >
      <div className="min-h-[100svh] w-full pt-[var(--header-height)] grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr]">
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-around py-8 opacity-50">
          <div className="w-96 aspect-[4/5] relative">
            <Image
              src="/grill.jpg"
              alt="grill_photo"
              fill
              className="object-fill rounded-2xl"
              quality={80}
              priority
            />
          </div>
          <p className="text-primary text-4xl">Text here!</p>
        </div>

        <div>
          <div className="flex flex-col items-center justify-evenly lg:justify-center lg:space-y-16 py-6 lg:pt-0 h-full">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={false}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
                transition={{
                  delay: isOpen ? index * 0.08 : 0,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-4xl md:text-4xl lg:text-8xl text-primary font-semibold uppercase tracking-widest hover:scale-105 transition-transform duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="flex flex-row items-center justify-center space-x-18">
              <Instagram color="#ffeedf" height="18" width="auto" />
              <Facebook color="#ffeedf" height="18" width="auto" />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-around py-8 opacity-50">
          <div className="w-96 aspect-[4/5] relative">
            <Image
              src="/wine.jpg"
              alt="grill_photo"
              fill
              className="object-fill rounded-2xl"
              quality={80}
              priority
            />
          </div>
          <p className="text-primary text-4xl">Text here!</p>
        </div>
      </div>
    </motion.div>
  );
};
