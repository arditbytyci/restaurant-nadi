import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Container } from "../Container";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
  "https://images.pexels.com/photos/33283963/pexels-photo-33283963.jpeg",
  "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg",
  "https://images.pexels.com/photos/2079453/pexels-photo-2079453.jpeg",
  "https://images.pexels.com/photos/2471190/pexels-photo-2471190.jpeg",
  "https://images.pexels.com/photos/5490909/pexels-photo-5490909.jpeg",
];

const DRAG_BUFFER = 50;
const ONE_SECOND = 1000;

const AUTO_DELAY = ONE_SECOND * 10;

export const Slider = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragX.set(latest);
    } else {
      dragX.set(0);
    }
  });

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((prev) => {
          if (prev === images.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className=" bg-secondary h-screen w-full flex flex-col items-center justify-around">
      <div className="text-center text-primary border">
        come experience nadi
      </div>
      <Container className="relative w-full h-[80%]  overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{
            x: dragX,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className="flex items-center w-full h-full cursor-grab active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
      </Container>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {images.map((src, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            transition={{
              type: "spring",
              mass: 3,
              stiffness: 400,
              damping: 50,
            }}
            animate={{ scale: imgIndex === idx ? 0.9 : 0.8 }}
            className="aspect-square w-full h-full shrink-0  rounded-xl object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className=" mt-4 flex w-full justify-center gap-4">
      {images.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`w-4 h-4 rounded-full transition-colors  ${
              idx === imgIndex ? "bg-pink-900" : "bg-primary"
            }`}
          />
        );
      })}
    </div>
  );
};
