"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { ForkKnife } from "../ForkKnife";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { Modal } from "../Modal";
import { useScroll } from "@/app/providers/ScrollProvider";

interface HeaderProps {
  className?: string;
  scrollY: number;
}

export const Header: React.FC<HeaderProps> = ({ className = "", scrollY }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const lenis = useScroll();

  const toggleModal = () => setModalOpen(prev => !prev);

  useEffect(() => {
    modalOpen ? lenis.stop() : lenis.start();
    return () => lenis.start();
  }, [modalOpen, lenis]);

  useLayoutEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
  }, []);

  const motionScroll = useMotionValue(scrollY);
  useEffect(() => motionScroll.set(scrollY), [scrollY]);
  const y = useTransform(motionScroll, [0, 200], [0, -150]);
  const opacity = useTransform(motionScroll, [0, 200], [1, 0]);

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
