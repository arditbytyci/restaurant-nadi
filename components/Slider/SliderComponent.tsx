import React, { useRef } from "react";
import One from "../../assets/image_restaurant.jpg";
import Two from "../../assets/image_restaurant.jpg";
import Three from "../../assets/image_restaurant.jpg";
import Four from "../../assets/image_restaurant.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./ImageContainer";

const SliderComponent = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div id="carousel" className="h-[350vh]" ref={targetRef}>
      <div
        id="contentContainer"
        className="h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden"
      >
        <motion.div
          id="imageItem"
          className="grid grid-cols-4 grid-rows-1 gap-[40vw] px-16 py-16"
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
