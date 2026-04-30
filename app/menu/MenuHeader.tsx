"use client";

import { motion } from "framer-motion";

interface MenuHeaderProps {
  mode: "eat" | "drink";
  onToggle: () => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ mode, onToggle }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <motion.header
        className="font-edlavonia text-center text-3xl lg:text-7xl py-6 lg:py-12"
        layout
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        What to{" "}
        <motion.span
          className="inline-block bg-secondary rounded-full px-4 text-primary"
          key={mode}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {mode}
        </motion.span>{" "}
        at Nadi
      </motion.header>

      <motion.button
        className="font-edlavonia text-lg lg:text-4xl w-full max-w-xs lg:max-w-md rounded-full py-3 px-6 bg-secondary text-primary underline underline-offset-4"
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
