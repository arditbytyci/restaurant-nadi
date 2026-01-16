import { m, motion } from "framer-motion";
type MenuSectionProps = {
  title: string;
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
    x: -20,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};
const MenuSection = ({ title, children }: MenuSectionProps) => {
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
        <div className="flex items-center gap-5 ">
          <motion.span
            variants={itemVariants}
            className="font-edlavonia whitespace-nowrap text-5xl lg:text-8xl"
          >
            {title}
          </motion.span>
          <motion.div
            className="flex-1 border-t border-primary"
            variants={itemVariants}
          />
        </div>
        <motion.div className="" variants={itemVariants}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MenuSection;
