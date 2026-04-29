import Image from "next/image";
import { motion } from "framer-motion";

interface DishArticleProps {
  name: string;
  textColor: string;
}

export const DishArticle = ({ name, textColor }: DishArticleProps) => (
  <motion.article
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.4 }}
    className="flex flex-col items-center justify-evenly gap-2 lg:gap-4"
  >
    <Image
      src="/hero.png"
      width={224}
      height={224}
      alt={`${name} dish`}
      className="w-auto h-[30svh]  object-contain"
    />
    <h3
      style={{ color: textColor }}
      className="font-edlavonia lowercase text-[3.5svh] tracking-wide"
    >
      {name}
    </h3>
  </motion.article>
);
