import React from "react";
import { Container } from "../Container";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[var(--header-height)] grid lg:grid-cols-[1fr_1fr] grid-cols-[auto_auto]">
      <div className="flex items-center justify-center lg:p-16 ">
        <div className="relative w-full h-full">
          <Image
            src="/balkan_food.jpg"
            fill
            priority={true}
            alt="balkan_food"
            className="rounded-md object-cover"
          />
        </div>
      </div>
      <div className=" grid grid-rows-[auto_auto] gap-4">
        <div className="flex items-end">
          <h1 className="text-3xl  sm:whitespace-normal  md:text-5xl  text-secondary leading-relaxed   text-right  w-full">
            Authentic Balkan Flavors,
            <span className="font-semibold line-clamp-1">Made with Love</span>
          </h1>
        </div>
        <h4 className="text-primary  flex justify-end items-start leading-relaxed font-light text-xl   md:text-lg lg:text-3xl lg:min-w-3xl  text-right">
          Discover the rich taste of traditional Balkan cuisine, crafted with
          fresh ingredients and passion. From sizzling grilled meats to homemade
          specialties, every dish tells a story.
        </h4>
      </div>
    </div>
  );
};

export default Hero;
