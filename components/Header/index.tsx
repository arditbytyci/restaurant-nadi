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
import Hero from "./Hero";
export const Header: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const isFixed = pathname.startsWith("/about");
  const primaryBgPages = ["/menu", "/about"];
  const isPrimaryBgPage = primaryBgPages.includes(pathname);
  const knifeColor = isMenuOpen
    ? "#ffeedf"
    : isPrimaryBgPage
      ? "#450b1d"
      : "#450b1d";

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
        `${height}px`,
      );
    }

    const handleResize = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`,
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
    // <div className=" w-full flex items-center">
    //   <motion.header
    //     ref={headerRef}
    //     // style={{ y, opacity }}
    //     className={` w-1/2  py-2  md:px-10   ${className}`}
    //   >
    //     <Container className="flex justify-center transition-all duration-500 items-center">
    //       {isMenuOpen ? (
    //         <motion.div
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
    //           className="z-50 text-primary justify-center transition-all duration-500 flex flex-row items-center  space-x-4 lg:space-x-10"
    //         >
    //           <Instagram color="#ffeedf" />
    //           <Facebook color="#ffeedf" />
    //           {/* <p className="font-edlavonia font-bold hidden lg:flex tracking-wider text-3xl">
    //             +39 888 888 888
    //           </p> */}
    //           {/* <p className="font-edlavonia font-bold tracking-wider lg:block hidden">
    //             +39 888 888 888{" "}
    //           </p> */}
    //         </motion.div>
    //       ) : (
    //         <Image
    //           src="/logov2.png"
    //           width={180}
    //           height={200}
    //           alt="Logo"
    //           className="h-24 md:h-28 w-auto lg:h-40   transition-all duration-500"
    //           priority={true}
    //         />
    //       )}
    //     </Container>
    //   </motion.header>
    //   <motion.div
    //     className={`w-1/2  py-5  ${
    //       isPrimaryBgPage ? "bg-transparent" : "bg-transparent"
    //     } `}
    //     ref={headerRef}
    //     // style={{ y, opacity }}
    //   >
    //     <Container className=" flex justify-center items-center  ">
    //       <div className="relative z-50 pointer-events-auto">
    //         <button
    //           onClick={toggleMenu}
    //           aria-expanded={isMenuOpen}
    //           aria-label="Toggle menu"
    //           className="w-auto h-auto"
    //         >
    //           <ForkKnife open={isMenuOpen} color={knifeColor} />
    //         </button>
    //       </div>
    //     </Container>
    //   </motion.div>

    //   <MenuModal
    //     isOpen={isMenuOpen}
    //     headerHeight={headerHeight}
    //     onClose={() => setIsMenuOpen(false)}
    //   />

    // </div>
    <>
      <Container
        className={`${isFixed ? "fixed" : "absolute"} grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] py-8  right-0 left-0 z-[100]`}
        ref={headerRef}
      >
        <div className="hidden lg:flex  lg:items-center lg:pb-8">
          <motion.p
            className={`text-2xl max-w-1/2 ${isMenuOpen ? "text-primary" : "text-secondary"}`}
          >
            Via Tommaso da Modena 1/b Roncade (TV){" "}
          </motion.p>
        </div>
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={isMenuOpen ? "white" : "dark"}
              src={isMenuOpen ? "/logo-white.png" : "/logov2.png"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-32 md:h-28 w-auto lg:h-52"
              alt="Logo"
            />
          </AnimatePresence>
        </div>
        <div className="flex justify-end items-center">
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
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

{
  /* <Container className="border-2 h-full flex justify-end items-end">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-edlavonia text-3xl sm:text-4xl md:text-5xl lg:text-7xl lg:whitespace-nowrap   text-center lg:tracking-wider whitespace-normal "
          >
            Authentic Balkan Flavors,{" "}
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
              className="font-semibold text-xl sm:text-2xl  md:text-4xl lg:text-6xl  lg:line-clamp-1  text-left lg:text-right  leading-relaxed w-auto    tracking-widest"
            >
              Made with Love
            </motion.span>
          </motion.h1>
        </Container> */
}
