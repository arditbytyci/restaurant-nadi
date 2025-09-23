"use client";


import { FavoriteDishes } from "@/components/FavoriteDishes";
import {motion, useMotionValueEvent, useScroll, useSpring, useTransform} from 'framer-motion'
import { useRef } from "react";
import test from "node:test";
import { Hero } from "@/components/Hero";


export default function Home() {

   const { scrollY } = useScroll();

 



  


  return (
        
       <>
      <Hero  />
      <FavoriteDishes />
      </>
    
  );
}
