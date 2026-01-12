import React, { useRef } from "react";
import One from "../../assets/image_restaurant.jpg";
import Two from "../../assets/image_restaurant.jpg";
import Three from "../../assets/image_restaurant.jpg";
import Four from "../../assets/image_restaurant.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./ImageContainer";
import { Container } from "../Container";

const SliderComponent = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  50;
  return (
    <div id="carousel" className="h-[450vh]" ref={targetRef}>
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

          <ImageContainer imageSource={One} />

          <ImageContainer imageSource={One} />
          <ImageContainer imageSource={One} />
        </motion.div>
      </div>
    </div>
  );
};

export default SliderComponent;
