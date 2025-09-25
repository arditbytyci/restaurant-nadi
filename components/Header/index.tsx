"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { motion, useTransform, AnimatePresence } from "framer-motion";
import { useLenis, useLenisScroll } from "@/app/providers/LenisProvider";

import { MenuModal } from "./MenuModal";
import { ForkKnife } from "../ForkKnife";
import { Container } from "../Container";
import Link from "next/link";

export const Header: React.FC<{ className?: string }> = ({ className = "" }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollY = useLenisScroll();
  const lenis = useLenis();

  const y = useTransform(scrollY, [0, headerHeight], [0, -headerHeight]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useLayoutEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }
    
    const handleResize = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!lenis) return;

    if (isMenuOpen) {
      lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis.start();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      lenis.start();
    };
  }, [isMenuOpen, lenis]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        ref={headerRef}
        style={{ y, opacity }}
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-4  md:px-10   z-50 ${className}`}
      >
        <Container className="flex justify-between items-center py-2 ">
        <Image src="/logov2.png" width={180} height={200} alt="Logo" priority={true} />


      







        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className="w-auto h-auto"
        >
          <ForkKnife open={isMenuOpen}/>
        </button>
        </Container>
      </motion.header>

      <MenuModal 
        isOpen={isMenuOpen} 
        headerHeight={headerHeight} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};