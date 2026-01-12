import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { DishArticle } from "./DishArticle";
import { Container } from "../Container";
// import { useScrollY } from "@/app/providers/LenisProvider";

export const FavoriteDishes = () => {
  return (
    <motion.div className="w-full min-h-[100svh] grid grid-cols-[auto_auto]">
      <div className="bg-secondary">
        <Container className="grid grid-rows-[auto_auto] min-h-[100svh] py-16">
          <DishArticle name="Tave Kosi" textColor="primary" />
          <DishArticle name="Tave Kosi" textColor="primary" />
        </Container>
      </div>
      <div>
        <Container className="grid grid-rows-[auto_auto] min-h-[100svh] py-16">
          <DishArticle name="Tave Kosi" textColor="secondary" />
          <DishArticle name="Tave Kosi" textColor="secondary" />
        </Container>
      </div>
    </motion.div>
  );
};
