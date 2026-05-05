"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type PageTransitionOverlayProps = {
  state: "idle" | "covering";
};

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
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
          className="fixed inset-x-0 top-[calc(0px_-_env(safe-area-inset-top))] bottom-[calc(0px_-_env(safe-area-inset-bottom))] z-[200] flex w-full items-center justify-center overflow-hidden bg-primary"
        >
          <motion.div
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.16 } }}
            transition={coverTransition}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
