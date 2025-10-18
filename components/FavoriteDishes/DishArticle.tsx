import Image from "next/image";
import { motion } from "framer-motion";

export const DishArticle = ({
  name,
  textColor,
}: {
  name: string;
  textColor: string;
}) => (
  <motion.article
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    viewport={{ amount: 0.5 }}
    className="flex flex-col  items-center justify-evenly"
  >
    <Image src="/hero.png" width={200} height={200} alt={`${name} dish`} />
    <motion.h3
      initial={{}}
      className={`text-xl tracking-wide text-primary ${textColor}`}
    >
      {name}
    </motion.h3>
  </motion.article>
);
