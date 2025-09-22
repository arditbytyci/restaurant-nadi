"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { ForkKnife } from "../ForkKnife";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { Modal } from "../Modal";
import { useLenis, useLenisScroll } from "@/app/providers/LenisProvider";


interface HeaderProps {
  className?: string;
 
}

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Get Lenis scroll and instance
  const scrollY = useLenisScroll();
  const lenis = useLenis();

  // Stop scrolling when modal is open
  useEffect(() => {
    if (modalOpen) lenis?.stop();
    else lenis?.start();
  }, [modalOpen, lenis]);

  // Measure header height
  useLayoutEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    const handleResize = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Motion transforms
  const y = useTransform(scrollY, [0, headerHeight], [0, -150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const toggleModal = () => setModalOpen(prev => !prev);

  return (
    <>
     <motion.header
  ref={headerRef}
  style={{ y, opacity }}
  className={`fixed top-0 left-0 z-50 flex w-full justify-between items-center 
              px-4 py-3 md:px-8 md:py-4 ${className}`}
>
  <Image
    src="/logo.png"
    width={modalOpen ? 200 : 300} 
    height={modalOpen ? 100 : 150}
    alt="Logo"
    priority
  />
  <button
    onClick={toggleModal}
    aria-expanded={modalOpen}
    aria-label="Toggle menu"
    className="w-12 h-12 md:w-14 md:h-14"
  >
    <ForkKnife open={modalOpen} />
  </button>
</motion.header>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} topOffset={headerHeight} />
    </>
  );
};
