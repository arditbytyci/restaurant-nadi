import { motion } from "framer-motion";
type MenuSectionProps = {
  title: string;
  children: React.ReactNode;
};

const MenuSection = ({ title, children }: MenuSectionProps) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center gap-5 mb-4">
          <motion.span
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
            className="whitespace-nowrap text-5xl"
          >
            {title}
          </motion.span>
          <motion.div
            className="flex-1 border-t border-primary"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.4 }}
          />
        </div>
        <motion.div
          className=""
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default MenuSection;
