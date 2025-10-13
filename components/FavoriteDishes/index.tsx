import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { DishArticle } from "./DishArticle";
import { Container } from "../Container";

export const FavoriteDishes = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute w-1/2 border-1 bg-secondary h-full"></div>
      <Container className="px-0! h-full relative grid grid-cols-2 gap-20">
        <div className="grid grid-rows-2 w-full h-full">
          <DishArticle name="Tave Kosi" textColor="text-primary" />
          <DishArticle name="Tave Kosi" textColor="text-primary" />
        </div>
        <div className="grid grid-rows-2 w-full h-full">
          <DishArticle name="Tave Kosi" textColor="text-secondary" />
          <DishArticle name="Tave Kosi" textColor="text-secondary" />
        </div>
      </Container>
    </div>
  );
};

//  <div className="w-full h-screen">
//       <div className="absolute w-1/2 border-1 bg-secondary h-full"></div>
//       <Container className="border border-green-400 h-full relative flex flex-row items-center ">
//         <div className="grid grid-rows-2 border border-fuchsia-600 w-full h-full">
//           <DishArticle name="Tave Kosi" textColor="text-primary" />
//           <DishArticle name="Tave Kosi" textColor="text-primary" />
//         </div>
//         <div className="grid grid-rows-2 w-full h-full border border-fuchsia-600">
//           <DishArticle name="Tave Kosi" textColor="text-primary" />
//           <DishArticle name="Tave Kosi" textColor="text-primary" />
//         </div>
//       </Container>
//     </div>
