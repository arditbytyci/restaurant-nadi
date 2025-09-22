import Link from "next/link";
import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  className?: string;
  onClose: () => void;
  topOffset: number;
}

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/", label: "Reservation" },
  { href: "/", label: "Location" },
];

export const Modal: React.FC<ModalProps> = ({ className, open, onClose, topOffset }) => {

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div
      style={{
        top: topOffset,
        height: open ? `calc(100vh - ${topOffset}px)` : 0,
      }}
      className={`fixed left-0 w-full overflow-hidden bg-[#FFEEDF] transition-all duration-700 ease-in-out z-40 ${open ? 'h-screen' : 'h-0'} ${className}`}
    >
      {open && (
        <div className="min-h-screen flex flex-col justify-start items-center pt-10 px-4 md:px-20">
          {links.map((l, index) => (
            <Link
              key={index}
              href={l.href}
              onClick={onClose}
              className="text-2xl md:text-4xl text-[#65171D] font-light uppercase py-3 md:py-4 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
