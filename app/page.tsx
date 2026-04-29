"use client";

import { Hero } from "@/components/sections/Hero/Hero";
import { FavoriteDishes } from "@/components/sections/FavoriteDishes/FavoriteDishes";
import { Slider } from "@/components/sections/Slider/Slider";
import { Footer } from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FavoriteDishes />
      <Slider />
      <Footer />
    </>
  );
}
