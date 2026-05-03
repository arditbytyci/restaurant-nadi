"use client";

import { Hero } from "@/components/sections/Hero/Hero";
import { FavoriteDishes } from "@/components/sections/FavoriteDishes/FavoriteDishes";
import { Slider } from "@/components/sections/Slider/Slider";
import { Footer } from "@/components/layout/Footer/Footer";
import { UnderHero } from "@/components/sections/underHero/UnderHero";
import { ExperienceSection } from "@/components/sections/Experience/ExperienceSection";

export default function Home() {
  return (
    <>
      <Hero />
      <UnderHero />
      {/* <FavoriteDishes />
      <Slider /> */}
      <ExperienceSection />
      <Footer />
    </>
  );
}
