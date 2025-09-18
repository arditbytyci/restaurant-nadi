"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
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

  // Toggle modal
  const handleToggle = () => {
    setModalOpen(prev => !prev);
  };

  // Freeze scroll when modal is open
  React.useEffect(() => {
    if (modalOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
    return () => lenis.start();
  }, [modalOpen, lenis]);

  // Capture header height
  useLayoutEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
  }, []);

  // Motion scroll
  const motionScroll = useMotionValue(scrollY);
  React.useEffect(() => motionScroll.set(scrollY), [scrollY, motionScroll]);
  const y = useTransform(motionScroll, [0, 200], [0, -150]);
  const opacity = useTransform(motionScroll, [0, 200], [1, 0]);

  return (
    <>
      <motion.header
        ref={headerRef}
        style={{ y, opacity }}
        className={`fixed top-0 left-0 z-50 flex w-full justify-between items-center px-8 py-4  ${className}`}
      >
        <Image src="/logo.png" width={300} height={150} alt="Logo" priority />
        <button
          onClick={handleToggle}
          aria-expanded={modalOpen}
          aria-label="Toggle menu"
        >
          <ForkKnife open={modalOpen} />
        </button>
      </motion.header>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        topOffset={headerHeight}
      />
    </>
  );
};
