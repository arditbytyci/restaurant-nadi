"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { motion, useTransform, AnimatePresence } from "framer-motion";
import { useLenis, useLenisScroll } from "@/app/providers/LenisProvider";
import { ForkKnife } from "../ForkKnife";
import Link from "next/link";
import { MenuModal } from "./MenuModal";

interface HeaderProps {
  className?: string;
}

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/", label: "Reservation" },
  { href: "/", label: "Location" },
];

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const scrollY = useLenisScroll();
  const lenis = useLenis();

 
  const y = useTransform(scrollY, [0, headerHeight], [0, -headerHeight]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  
  useLayoutEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    const handleResize = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


useEffect(() => {
  if (!lenis) return;

  if (isMenuOpen) {
    lenis.stop();
    document.body.style.overflow = 'hidden'; // Stop Lenis smooth scrolling
  } else {
    lenis.start(); 
    // Resume Lenis
  }


  const main = document.querySelector("[data-scroll-container]") as HTMLElement;
  if (main) main.style.pointerEvents = isMenuOpen ? "none" : "auto";

  return () => {
    if (main) main.style.pointerEvents = "auto";
    lenis.start();
  };
}, [isMenuOpen, lenis]);


  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Header */}
      <motion.header
        ref={headerRef}
        style={{ y, opacity }}
        className={`fixed top-0 left-0 z-50 flex w-full justify-between items-center px-4 py-3 md:px-8 md:py-4 ${className}`}
      >
        <Image src="/logo.png" width={300} height={150} alt="Logo" priority />
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className="w-12 h-12 md:w-14 md:h-14"
        >
          
          <ForkKnife open={isMenuOpen} />
        </button>
      </motion.header>

     <MenuModal isOpen={isMenuOpen} headerHeight={headerHeight} onClose={() => setIsMenuOpen(false)} />


    </>
  );
};
