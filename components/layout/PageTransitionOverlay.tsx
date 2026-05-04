"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type PageTransitionOverlayProps = {
  state: "idle" | "covering" | "settling";
};

const COLOR_PRIMARY = "#ffeedf";
const COLOR_SECONDARY = "#450b1d";

const coverTransition = {
  type: "spring" as const,
  stiffness: 230,
  damping: 31,
  mass: 0.9,
};

const logoTransition = {
  type: "spring" as const,
  stiffness: 210,
  damping: 28,
  mass: 0.9,
};

export const PageTransitionOverlay: React.FC<PageTransitionOverlayProps> = ({
  state,
}) => {
  const isVisible = state !== "idle";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          aria-hidden="true"
          initial={{ y: "-100%" }}
          animate={{
            y: 0,
            backgroundColor:
              state === "settling" ? COLOR_PRIMARY : COLOR_SECONDARY,
          }}
          exit={{
            y: "-100%",
            transition: {
              type: "spring",
              stiffness: 240,
              damping: 34,
              mass: 0.9,
            },
          }}
          transition={{
            y: coverTransition,
            backgroundColor: { duration: 0.38, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[200] flex h-[100dvh] w-full transform-gpu items-center justify-center overflow-hidden will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14, transition: { duration: 0.16 } }}
            transition={logoTransition}
            className="relative h-36 w-36 md:h-44 md:w-44"
          >
            <Image
              src="/logo-nadi-dark.png"
              fill
              alt=""
              priority
              sizes="176px"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
