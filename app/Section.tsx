import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Section = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.section
      id={id}
      className="h-screen w-full snap-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};
