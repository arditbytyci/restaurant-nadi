"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import { useLenis } from "lenis/react";

import { MenuModal } from "./MenuModal";
import { ForkKnife } from "../ForkKnife";
import { Container } from "../Container";
import Link from "next/link";

export const Header: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollY = useMotionValue(0);

  const lenis = useLenis();

  useLenis(({ scroll }) => {
    scrollY.set(scroll);
  });

  const y = useTransform(scrollY, [0, headerHeight], [0, -headerHeight]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useLayoutEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    }

    const handleResize = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!lenis) return;

    if (isMenuOpen) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      lenis.start();
    };
  }, [isMenuOpen, lenis]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-row">
      <motion.header
        ref={headerRef}
        // style={{ y, opacity }}
        className={`w-1/2  py-2  md:px-10   ${className}`}
      >
        <Container className="flex justify-center items-center">
          <Image
            src="/logov2.png"
            width={180}
            height={200}
            alt="Logo"
            className="h-24 md:h-28 w-auto xl:h-34"
            priority={true}
          />
        </Container>
      </motion.header>
      <motion.div
        className=" w-1/2 bg-secondary"
        ref={headerRef}
        // style={{ y, opacity }}
      >
        <Container className=" flex justify-center items-center  py-2">
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="w-auto h-auto"
          >
            <ForkKnife open={isMenuOpen} />
          </button>
        </Container>
      </motion.div>

      <MenuModal
        isOpen={isMenuOpen}
        headerHeight={headerHeight}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
};
