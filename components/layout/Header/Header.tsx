"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  animate,
  AnimatePresence,
  easeIn,
  easeOut,
  motion,
} from "framer-motion";
import { useLenis } from "lenis/react";
import Image from "next/image";

import { MenuModal } from "./MenuModal";
import { ForkKnife } from "@/components/ui/ForkKnife";
import { Container } from "../Container";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.025 },
  },
  exit: {
    transition: { staggerChildren: 0.015, staggerDirection: -1 },
  },
};

const letterVariants = {
  hidden: { y: -12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.18, ease: easeOut },
  },
  exit: {
    y: 12,
    opacity: 0,
    transition: { duration: 0.15, ease: easeIn },
  },
};

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isFixed = pathname.startsWith("/about");
  const lenis = useLenis();

  const isHome = pathname === "/";

  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", isMenuOpen ? "#450b1d" : "#ffeedf");
  }, [isMenuOpen]);

  // Pre-warm Framer Motion on mount
  useEffect(() => {
    const a = animate(0, 1, { duration: 0.01 });
    const b = animate(0, 0.001, {
      type: "spring",
      stiffness: 120,
      damping: 14,
    });
    return () => {
      a.stop();
      b.stop();
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Sync header height to CSS variable
  useLayoutEffect(() => {
    const update = () => {
      if (!headerRef.current) return;
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      lenis?.stop();

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      lenis?.start();

      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen, lenis]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const buttonText = isMenuOpen ? "close" : "open";
  const knifeColor = isMenuOpen ? "#ffeedf" : "#ffeedf";

  return (
    <>
      <Container
        className={`${isFixed ? "fixed" : "absolute"} grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] py-2 right-0 left-0 z-[100]`}
        ref={headerRef}
      >
        {/* Address — desktop only */}
        <div className="hidden lg:flex lg:items-center">
          <p
            className={`text-xl max-w-1/2 ${isMenuOpen ? "text-primary" : "text-primary"}`}
          >
            Via Tommaso da Modena 1/b Roncade (TV)
          </p>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative h-32 md:h-28 lg:h-45 w-32 md:w-28 lg:w-45">
            <Image
              src="/logo-white.png"
              fill
              alt="Restaurant Nadi logo"
              className={`object-contain transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              priority
            />
            <Image
              src="/logo-white.png"
              fill
              alt="Restaurant Nadi logo"
              className={`object-contain transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
              priority
            />
          </div>
        </div>

        {/* Menu toggle */}
        <div className="flex justify-end items-center">
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="flex flex-col items-center"
          >
            <ForkKnife open={isMenuOpen} color={knifeColor} />
            <AnimatePresence mode="wait">
              <motion.span
                key={buttonText}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`sm:text-base lg:text-xl inline-flex font-extralight ${isMenuOpen ? "text-primary" : "text-primary"}`}
              >
                {buttonText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </Container>

      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
