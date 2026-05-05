"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

const heroEase = [0.22, 1, 0.36, 1] as const;

const contentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.35,
    },
  },
};

const lineVariants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: heroEase,
    },
  },
};

const ctaVariants = {
  hidden: { y: 18, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: heroEase,
    },
  },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.045 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: heroEase }}
      >
        <Image
          src="/hero_terrace.jpg"
          alt="Restaurant outdoor terrace"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover object-[58%_center] blur-[2px] md:object-center"
        />
      </motion.div>

      {/* overlays */}
      <motion.div
        className="absolute inset-0 bg-black/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.15, ease: "linear" }}
      />

      <Container>
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 flex h-[100dvh] flex-col items-center justify-around pt-[var(--header-height)] text-center text-white"
        >
          <h1 className="max-w-5xl text-4xl font-thin uppercase leading-tight tracking-[0.16em] sm:text-6xl md:text-7xl md:tracking-[0.18em] lg:text-8xl xl:text-9xl">
            <span className="block overflow-hidden pb-1">
              <motion.span variants={lineVariants} className="block">
                Tradizione
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span variants={lineVariants} className="block">
                che si vive
              </motion.span>
            </span>
          </h1>

          <motion.div variants={ctaVariants}>
            <Link
              href="/menu"
              className="mt-8 inline-block border-b border-white/50 pb-1 text-xl font-extralight uppercase tracking-[0.4em] text-white transition-colors hover:border-white sm:text-2xl md:text-4xl lg:text-6xl"
            >
              Il Menù
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
