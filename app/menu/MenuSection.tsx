import { SideItem } from "@/types/menu";
import { motion } from "framer-motion";
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
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
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
        animate="show"
        // whileInView="show"
        // viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col justify-center items-center text-center gap-10">
          <motion.h3
            variants={itemVariants}
            className="font-semibold uppercase text-[5.8svh]"
          >
            {title}
          </motion.h3>
          <p className="w-[130svh] text-[2svh] ">{desc}</p>
        </div>
        <motion.div
          className=" grid grid-cols-2 py-8 gap-5"
          variants={itemVariants}
        >
          {children}
        </motion.div>
        {sides && sides.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold uppercase text-[3svh] ">Contorni</p>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
              {sides.map((side, i) => (
                <span key={side.name} className="text-[2.5svh]">
                  {side.name} — € {side.price}
                  {i < sides.length - 1 && (
                    <span className="ml-6 opacity-30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {extras && extras.length > 0 && (
          <div className="flex flex-col items-center gap-8">
            <p className="font-semibold uppercase text-[5svh] underline underline-offset-8">
              Extra Salsa
            </p>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
              {extras.map((extra, i) => (
                <span
                  key={extra.name}
                  className="text-[3.4svh] uppercase font-semibold"
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
