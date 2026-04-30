import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./SliderItem";

const One = "/sliderpictures/photo01.jpg";
const two = "/sliderpictures/photo02.jpg";
const three = "/sliderpictures/photo03.jpg";
const four = "/sliderpictures/photo04.jpg";
const five = "/sliderpictures/photo05.jpg";
const six = "/sliderpictures/photo06.jpg";

export const Slider = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  50;
  return (
    <div id="carousel" className="h-[450vh] " ref={targetRef}>
      <div
        id="contentContainer"
        className="min-h-[100svh] sticky top-0 flex items-center justify-start overflow-hidden"
      >
        <motion.div
          id="imageItem"
          className="flex flex-row gap-x-12 px-6 md:gap-x-28 md:px-16 h-screen"
          style={{ x }}
        >
          <ImageContainer imageSource={One} />

          <ImageContainer imageSource={two} />

          <ImageContainer imageSource={three} />
          <ImageContainer imageSource={four} />
          <ImageContainer imageSource={five} />
          <ImageContainer imageSource={six} />
        </motion.div>
      </div>
    </div>
  );
};
