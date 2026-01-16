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
import { usePathname } from "next/navigation";
import { Instagram } from "../icons/instagram";
import { Facebook } from "../icons/facebook";

export const Header: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";
  const knifeColor = isMenuOpen
    ? "#ffeedf"
    : isMenuPage
    ? "#450b1d"
    : "#ffeedf";

  useEffect(() => {
    // Close menu automatically when navigating to another page
    setIsMenuOpen(false);
  }, [pathname]);
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
    <div className="flex  items-center  h-full w-full ">
      <motion.header
        ref={headerRef}
        // style={{ y, opacity }}
        className={`w-1/2  py-2  md:px-10   ${className}`}
      >
        <Container className="flex justify-center transition-all duration-500 items-center">
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
              className="z-50 text-primary justify-center transition-all duration-500 flex flex-row items-center  space-x-4 lg:space-x-10"
            >
              <Instagram color="#ffeedf" />
              <Facebook color="#ffeedf" />
              <p className="font-edlavonia font-bold hidden lg:flex tracking-wider text-3xl">
                +39 888 888 888
              </p>
              {/* <p className="font-edlavonia font-bold tracking-wider lg:block hidden">
                +39 888 888 888{" "}
              </p> */}
            </motion.div>
          ) : (
            <Image
              src="/logov2.png"
              width={180}
              height={200}
              alt="Logo"
              className="h-24 md:h-28 w-auto lg:h-44   transition-all duration-500"
              priority={true}
            />
          )}
        </Container>
      </motion.header>
      <motion.div
        className={`w-1/2  py-5  ${
          isMenuPage ? "bg-primary" : "bg-secondary"
        } `}
        ref={headerRef}
        // style={{ y, opacity }}
      >
        <Container className=" flex justify-center items-center  ">
          <div className="relative z-50 pointer-events-auto">
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="w-auto h-auto"
            >
              <ForkKnife open={isMenuOpen} color={knifeColor} />
            </button>
          </div>
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
