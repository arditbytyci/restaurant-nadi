import Image from "next/image"
import {motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef } from "react";
import { DishArticle } from "./DishArticle";






export  const FavoriteDishes = () => {


  return (
<motion.div className="w-full h-full grid grid-cols-2">
   <div className="grid grid-cols-1">
    <DishArticle name="Tave Kosi" textColor="text-secondary" />
    <DishArticle name="Tave Kosi" textColor="text-secondary" />
   </div>
   <div className="bg-secondary grid grid-cols-1">
    <DishArticle name="Tave Kosi" textColor="text-primary" />
    <DishArticle name="Tave Kosi" textColor="text-primary" />
   </div>


</motion.div>
  )
}


