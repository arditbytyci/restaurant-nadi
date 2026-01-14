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
    <Image
      src="/hero.png"
      width={80}
      height={80}
      alt={`${name} dish`}
      className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56"
    />
    <motion.h3
      initial={{}}
      className={`font-edlavonia lowercase text-2xl md:text-3xl xl:text-4xl tracking-wide text-${textColor}`}
    >
      {name}
    </motion.h3>
  </motion.article>
);
