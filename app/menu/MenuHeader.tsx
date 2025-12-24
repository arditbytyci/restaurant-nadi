"use client";
import { AnimatePresence, motion } from "framer-motion";
import { filter } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
interface MenuHeaderProps {
  mode: "eat" | "drink";
  onToggle: () => void;
}

const flipVariants = {
  initial: { rotateX: 90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1 },
  exit: { rotateX: -90, opacity: 0, filter: "blur(1px)" },
};

const MenuHeader: React.FC<MenuHeaderProps> = ({ mode, onToggle }) => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  const [headerWidth, setHeaderWidth] = useState<number>(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderWidth(headerRef.current.scrollWidth);
    }
  }, [mode]);

  return (
    <div className="flex flex-col items-center justify-center gap-20 mt-14">
      {/* <motion.header
        ref={headerRef}
        className="text-6xl text-center whitespace-nowrap border"
        initial={{ width: "auto" }}
        animate={{ width: headerWidth > 0 ? `${headerWidth}px` : "auto" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        What to <span className="">{mode}</span> at Nadi
      </motion.header> */}

      <motion.header
        className="w-auto text-6xl"
        layout
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        What to{" "}
        <motion.span
          className="inline-block underline underline-offset-4 "
          key={mode}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {mode}
        </motion.span>{" "}
        at Nadi
      </motion.header>
      <motion.button
        className="text-xl w-1/3 rounded-full py-2 bg-secondary text-primary"
        layout
        onClick={onToggle}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {mode === "eat" ? "Have a drink?" : "Something to eat?"}
      </motion.button>
    </div>
  );
};

export default MenuHeader;
