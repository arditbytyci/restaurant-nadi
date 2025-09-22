"use client";

import { Hero } from "@/components/Hero";
import { FavoriteDishes } from "@/components/FavoriteDishes";

export default function Home() {
  return (
    
      <main data-scroll-container className="flex flex-col">
        <section className="h-screen w-full">
          <Hero />
        </section>
        <section className="h-screen w-full">
          <FavoriteDishes />
        </section>
      </main>
    
  );
}
