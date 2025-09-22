"use client";

import { Hero } from "@/components/Hero";
import { FavoriteDishes } from "@/components/FavoriteDishes";
import {motion, useMotionValueEvent, useScroll, useSpring, useTransform} from 'framer-motion'
import { useRef } from "react";
import test from "node:test";

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
