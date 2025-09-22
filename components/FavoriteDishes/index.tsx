import Image from "next/image"
import {motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef } from "react";
import { DishArticle } from "./DishArticle";


// initial={{opacity:0,y:0}} whileInView={{opacity:1, y:0}} 
//         transition={{duration: 0.5,ease: "easeInOut"}} viewport={{amount:0.3}}



export  const FavoriteDishes = () => {


  return (
<motion.div className="w-full h-full grid grid-cols-2">
   <div className="grid grid-cols-1">
    <DishArticle name="Tave Kosi" textColor="#65171D" />
    <DishArticle name="Tave Kosi" textColor="#65171D" />
   </div>
   <div className="bg-[#65171d] grid grid-cols-1">
    <DishArticle name="Tave Kosi" textColor="#FFEEDF" />
    <DishArticle name="Tave Kosi" textColor="#FFEEDF" />
   </div>


</motion.div>
  )
}


