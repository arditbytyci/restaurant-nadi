import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { motion } from "framer-motion";
interface MenuModalProps {
  isOpen: boolean;
  headerHeight: number;
  onClose: () => void;
}

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/", label: "Reservation" },
  { href: "/", label: "Location" },
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
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: `calc(100vh - ${headerHeight}px)` }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            top: headerHeight,
            height: `calc(100vh - ${headerHeight}px)`,
          }}
          className="fixed left-0 min-h-screen w-full bg-primary  z-50 flex flex-col items-center pt-10 px-4 md:px-20"
        >
          <nav className="flex flex-col items-center space-y-6 pt-10">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl md:text-4xl text-[#65171D] font-light uppercase hover:scale-105 transition-transform duration-300"
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
