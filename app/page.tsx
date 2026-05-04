import { Hero } from "@/components/sections/Hero/Hero";
import { Footer } from "@/components/layout/Footer/Footer";
import { UnderHero } from "@/components/sections/underHero/UnderHero";
import { ExperienceSection } from "@/components/sections/Experience/ExperienceSection";
import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffeedf",
};

export default function Home() {
  return (
    <>
      <Hero />
      <UnderHero />
      <ExperienceSection />
      <Footer />
    </>
  );
}
