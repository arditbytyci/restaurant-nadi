import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../Container";
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          style={{
            top: headerHeight,
            height: `calc(100vh - ${headerHeight}px)`,
          }}
          className="fixed right-0 overflow-y-auto h-screen w-1/2 bg-secondary  flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center space-y-40">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl md:text-4xl xl:text-6xl text-primary font-light  hover:scale-105 transition-transform duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
