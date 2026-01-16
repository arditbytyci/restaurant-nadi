import { AnimatePresence } from "framer-motion";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import { Container } from "../Container";
import Image from "next/image";

interface MenuModalProps {
  isOpen: boolean;
  headerHeight: number;
  onClose: () => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  headerHeight,
  onClose,
}) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            height: "min-h-100svh",
          }}
          className="absolute inset-0 z-40 overflow-y-auto h-full w-full bg-secondary  flex flex-col items-center justify-around"
        >
          {/* <div className="text-primary top-0 p-15  flex flex-row w-full absolute items-center space-x-10">
            <Facebook />

            <Instagram />
            <p className="font-edlavonia text-3xl font-bold tracking-widest">
              +39 888 000 777
            </p>
          </div> */}
          {/* <div className="text-primary absolute top-0 py-2">
            <Image
              width={250}
              height={200}
              src="/logo-white.png"
              alt="logo_white"
            />
          </div>

          <div className="flex flex-col items-center  pt-[var(--header-height)] h-full justify-center  w-full space-y-16">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl md:text-4xl lg:text-8xl text-primary font-semibold uppercase tracking-widest  hover:scale-105 transition-transform duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div> */}
          {/* <div className="text-primary absolute top-0 py-2">
            <Image
              width={200}
              height={150}
              src="/logo-white.png"
              alt="logo_white"
            />
          </div> */}

          <div className=" min-h-[100svh] w-full pt-[var(--header-height)] grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr]">
            <div className=" hidden lg:flex lg:flex-col lg:items-center  lg:justify-around  py-8 opacity-50">
              <div className=" w-96 aspect-[4/5] relative ">
                <Image
                  src="/grill.jpg"
                  alt="grill_photo"
                  fill
                  className="object-fill rounded-2xl"
                  quality={100}
                  priority
                />
              </div>
              <p className="text-primary text-4xl">Text here!</p>
            </div>
            <div className="">
              <div className="flex flex-col items-center justify-center space-y-16 py-8 lg:pt-0">
                <Image
                  width={250}
                  height={200}
                  src="/logo-white.png"
                  alt="logo_white"
                  className="w-auto h-auto"
                />
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="text-4xl md:text-4xl lg:text-8xl text-primary font-semibold uppercase tracking-widest  hover:scale-105 transition-transform duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className=" hidden lg:flex lg:flex-col lg:items-center  lg:justify-around  py-8 opacity-50">
              <div className=" w-96 aspect-[4/5] relative ">
                <Image
                  src="/wine.jpg"
                  alt="grill_photo"
                  fill
                  className="object-fill rounded-2xl"
                  quality={100}
                  priority
                />
              </div>
              <p className="text-primary text-4xl">Text here!</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
