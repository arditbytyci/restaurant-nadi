import { SideItem } from "@/types/menu";
import { motion } from "framer-motion";
import Image from "next/image";

type MenuSectionProps = {
  title: string;
  desc?: string;
  illustration?: string;
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
  illustration,
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
        {/* Title + description */}
        <div className="flex flex-col justify-center items-center text-center gap-6">
          {/* Title row with optional flanking illustrations */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 lg:gap-6"
          >
            {/* Left illustration */}
            {illustration && (
              <div className="w-8 h-8 lg:w-24 lg:h-24  shrink-0">
                <Image
                  src={illustration}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <h3 className="font-semibold uppercase text-[4svh] lg:text-[5.8svh]">
              {title}
            </h3>

            {/* Right illustration — mirrored */}
            {illustration && (
              <div className="w-8 h-8 lg:w-24 lg:h-24  shrink-0 scale-x-[-1]">
                <Image
                  src={illustration}
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </motion.div>

          {desc && (
            <p className="w-full lg:w-[130svh] text-[2svh] leading-relaxed px-4 lg:px-0">
              {desc}
            </p>
          )}
        </div>

        {/* Items grid — unchanged */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-8 gap-6 lg:gap-5"
          variants={itemVariants}
        >
          {children}
        </motion.div>

        {/* Contorni — unchanged */}
        {sides && sides.length > 0 && (
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-semibold uppercase text-[2.5svh] lg:text-[3svh]">
              Contorni
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
              {sides.map((side, i) => (
                <span key={side.name} className="text-[2svh] lg:text-[2.5svh]">
                  {side.name} — € {side.price}
                  {i < sides.length - 1 && (
                    <span className="ml-4 opacity-30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Extra salsa — unchanged */}
        {extras && extras.length > 0 && (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-semibold uppercase text-[3svh] lg:text-[5svh] underline underline-offset-8">
              Extra Salsa
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-2">
              {extras.map((extra, i) => (
                <span
                  key={extra.name}
                  className="text-[2.5svh] lg:text-[3.4svh] uppercase font-semibold"
                >
                  {extra.name} — € {extra.price}
                  {i < extras.length - 1 && (
                    <span className="ml-6 opacity-60 font-light">|</span>
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
