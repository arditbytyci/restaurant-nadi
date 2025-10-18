"use client";

import { FavoriteDishes } from "@/components/FavoriteDishes";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import test from "node:test";
import { Hero } from "@/components/Hero";
import { Slider } from "@/components/Slider/Slider";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { scrollY } = useScroll();

  return (
    <>
      <section className="">
        <Hero />
      </section>
      <section className="">
        <FavoriteDishes />
      </section>

      <section>
        <Slider />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
