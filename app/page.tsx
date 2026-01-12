"use client";

import { FavoriteDishes } from "@/components/FavoriteDishes";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
//
import { Footer } from "@/components/Footer";
import SliderComponent from "@/components/Slider/SliderComponent";

/* NOTES: 

% the hero section should be added animations so the components inside load with ease

*/

export default function Home() {
  return (
    <div className="">
      {" "}
      {/* Use a class instead of inline styles */}
      <motion.section className="">
        <Hero />
      </motion.section>
      <motion.section
        className="h-screen"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <FavoriteDishes />
      </motion.section>
      <motion.section>
        <SliderComponent />
      </motion.section>
      <motion.section
        id="footer"
        className="h-screen"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.section>
    </div>
  );
}
