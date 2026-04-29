"use client";

import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { Container } from "@/components/layout/Container";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-svh grid grid-rows-2 lg:pt-[var(--header-height)]">
      {/* Top half — light bg */}

      <div className="grid sm:grid-rows-1 lg:grid-cols-2 ">
        {/* Top left — light, empty (image later) */}
        <div className="bg-primary flex items-center  justify-center">
          {/* image goes here */}
        </div>

        {/* Top right — light, big dark text */}
        <Container className="bg-primary flex flex-col justify-end items-end">
          <motion.h1
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-edlavonia leading-tight text-5xl lg:text-[68px] text-secondary text-right"
          >
            Authentic Balkan Flavors,
            <span className="block font-poppins font-semibold text-4xl lg:text-6xl">
              Made with Love
            </span>
          </motion.h1>
        </Container>
      </div>

      {/* Bottom half — dark bg */}
      <div className="grid grid-rows-1 lg:grid-cols-2 ">
        {/* Bottom left — dark, empty (image later) */}
        <div className="bg-secondary hidden lg:flex items-center justify-center">
          {/* image goes here */}
        </div>

        {/* Bottom right — dark, small light text */}
        <Container className="bg-secondary flex flex-col  justify-start items-start p-4  ">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-primary leading-relaxed font-light text-xl lg:text-[28px] text-right"
          >
            Discover the rich taste of traditional Balkan cuisine, crafted with
            fresh ingredients and passion. From sizzling grilled meats to
            homemade specialties, every dish tells a story.
          </motion.p>

          {/* <Link
            href="/menu"
            className="text-primary text-xl underline underline-offset-8 text-right"
          >
            View menu
          </Link> */}
        </Container>
      </div>
    </section>
  );
};
