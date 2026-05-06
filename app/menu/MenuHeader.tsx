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

const menuTextEase = [0.16, 1, 0.3, 1] as const;

const MenuHeader: React.FC<MenuHeaderProps> = ({ mode, onToggle }) => {
  const isEat = mode === "eat";
  const headerTitle = isEat ? "Cosa ti aspetta" : "La carta dei drink";
  const headerDescription = isEat
    ? "Sapori balcanici, griglia e piatti di casa."
    : "Vini, caffè e bevande selezionate per accompagnare ogni momento.";

  return (
    <section className="flex w-full flex-col items-center gap-8 text-center">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full space-y-4 overflow-visible px-3 sm:px-6"
      >
        <p className="text-xs font-light uppercase tracking-[0.35em] lg:text-sm">
          Il nostro menù
        </p>

        <div className="relative mx-auto h-44 w-full max-w-5xl overflow-visible sm:h-48 lg:h-60">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{
                opacity: { duration: 0.2, ease: "linear" },
                y: { duration: 0.36, ease: menuTextEase },
              }}
              className="absolute inset-x-0 top-0 space-y-4 will-change-transform"
            >
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  opacity: { duration: 0.2, ease: "linear" },
                  y: { duration: 0.32, ease: menuTextEase },
                }}
                className="px-2 font-edlavonia text-5xl leading-[1.08] tracking-wide sm:px-4 sm:text-6xl lg:text-8xl"
              >
                {headerTitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 0.8, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{
                  opacity: { duration: 0.2, ease: "linear" },
                  y: { duration: 0.34, ease: menuTextEase },
                }}
                className="mx-auto max-w-2xl text-sm font-light lg:text-lg"
              >
                {headerDescription}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="flex flex-col items-center gap-4">
        <motion.button
          onClick={onToggle}
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
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative z-10 flex items-center gap-2 rounded-full px-5 py-3 text-sm lg:text-base"
                >
                  {item.icon}
                  {item.label}
                </motion.span>
              </span>
            );
          })}
        </motion.button>

        <a
          href="/menu-nadi.pdf"
          download
          className="border-b border-secondary/35 pb-1 text-xs font-light uppercase tracking-[0.28em] text-secondary/75 transition hover:border-secondary hover:text-secondary lg:text-sm"
        >
          Scarica il menu PDF
        </a>
      </div>
    </section>
  );
};

export default MenuHeader;
