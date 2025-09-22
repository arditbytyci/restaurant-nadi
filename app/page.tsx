"use client";

import { Hero } from "@/components/Hero";
import { FavoriteDishes } from "@/components/FavoriteDishes";
import {motion, useMotionValueEvent, useScroll, useSpring, useTransform} from 'framer-motion'
import { useRef } from "react";
import test from "node:test";


export default function Home() {

   const { scrollY } = useScroll();

 



  


  return (
        
      <main data-scroll-container className="flex flex-col overflow-hidden">
        <motion.section  className="h-screen w-full">
          <Hero />
        </motion.section>
        <motion.section  className="h-screen w-full">
          <FavoriteDishes />
        </motion.section>
      </main>
    
  );
}
