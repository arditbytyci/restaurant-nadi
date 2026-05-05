import { SideItem } from "@/types/menu";
import { motion } from "framer-motion";
import { formatMenuPrice } from "./formatPrice";

type MenuSectionProps = {
  title: string;
  desc?: string;
  sides?: SideItem[];
  extras?: SideItem[];
  children: React.ReactNode;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const MenuSection = ({
  title,
  desc,
  children,
  sides,
  extras,
}: MenuSectionProps) => {
  return (
    <div>
      <motion.div
        className="flex flex-col space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex flex-col items-center justify-center gap-5 text-center sm:gap-6">
          <motion.div
            variants={itemVariants}
            className="flex max-w-full flex-col items-center justify-center gap-4 px-4"
          >
            <h3 className="max-w-5xl text-center text-2xl font-semibold uppercase leading-[1.18] tracking-[0.08em] sm:text-4xl lg:text-6xl">
              {title}
            </h3>
          </motion.div>

          {desc && (
            <p className="w-full max-w-5xl px-4 text-base leading-relaxed sm:text-lg lg:px-0 lg:text-xl">
              {desc}
            </p>
          )}
        </div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-8 gap-6 lg:gap-5"
          variants={itemVariants}
        >
          {children}
        </motion.div>
        {sides && sides.length > 0 && (
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xl font-semibold uppercase lg:text-2xl">
              Contorni
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
              {sides.map((side, i) => (
                <span
                  key={side.name}
                  className="inline-flex items-baseline gap-2 text-sm sm:text-base lg:text-xl"
                >
                  <span>{side.name}</span>
                  <span className="font-medium tabular-nums">
                    {formatMenuPrice(side.price)}
                  </span>
                  {i < sides.length - 1 && (
                    <span className="ml-2 hidden opacity-30 sm:inline">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
        {extras && extras.length > 0 && (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-2xl font-semibold uppercase underline underline-offset-8 lg:text-4xl">
              Extra Salsa
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2">
              {extras.map((extra, i) => (
                <span
                  key={extra.name}
                  className="inline-flex items-baseline gap-2 text-base font-semibold uppercase sm:text-xl lg:text-3xl"
                >
                  <span>{extra.name}</span>
                  <span className="tabular-nums">
                    {formatMenuPrice(extra.price)}
                  </span>
                  {i < extras.length - 1 && (
                    <span className="ml-4 hidden font-light opacity-60 sm:inline">
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MenuSection;
