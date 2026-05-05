"use client";

import { AnimatePresence, motion } from "framer-motion";

interface MenuHeaderProps {
  mode: "eat" | "drink";
  onToggle: () => void;
}

const ForkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6" fill="none">
    <path
      d="M7 3v7M10 3v7M7 10h3v11M17 3v18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const GlassIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-6 lg:w-6" fill="none">
    <path
      d="M7 3h10l-1 8a4 4 0 0 1-8 0L7 3ZM12 15v6M9 21h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuHeader: React.FC<MenuHeaderProps> = ({ mode, onToggle }) => {
  const isEat = mode === "eat";

  return (
    <section className="w-full flex flex-col items-center text-center gap-8">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full space-y-4 overflow-visible px-3 sm:px-6"
      >
        <p className="uppercase tracking-[0.35em] text-xs lg:text-sm font-light">
          Il nostro menù
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-h-36 space-y-4 overflow-visible lg:min-h-44"
          >
            <h2 className="px-2 font-edlavonia text-5xl leading-[1.08] tracking-wide sm:px-4 sm:text-6xl lg:text-8xl">
              {isEat ? "Cosa ti aspetta" : "La carta dei drink"}
            </h2>

            <p className="mx-auto max-w-2xl text-sm lg:text-lg font-light opacity-80">
              {isEat
                ? "Sapori balcanici, griglia e piatti di casa."
                : "Vini, caffè e bevande selezionate per accompagnare ogni momento."}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.button
        onClick={onToggle}
        layout
        whileTap={{ scale: 0.97 }}
        className="relative flex items-center gap-1 rounded-full border border-secondary/30 bg-background/90 p-1 shadow-sm"
      >
        {[
          { key: "eat", label: "Eat", icon: <ForkIcon /> },
          { key: "drink", label: "Drink", icon: <GlassIcon /> },
        ].map((item) => {
          const active = mode === item.key;

          return (
            <span
              key={item.key}
              className="relative flex items-center justify-center"
            >
              {active && (
                <motion.span
                  layoutId="menu-active-pill"
                  className="absolute inset-0 rounded-full bg-secondary"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 34,
                    mass: 0.8,
                  }}
                />
              )}

              <motion.span
                animate={{
                  color: active
                    ? "var(--color-primary)"
                    : "var(--color-secondary)",
                  scale: active ? 1.03 : 1,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 flex items-center gap-2 rounded-full px-5 py-3 text-sm lg:text-base"
              >
                {item.icon}
                {item.label}
              </motion.span>
            </span>
          );
        })}
      </motion.button>
    </section>
  );
};

export default MenuHeader;
