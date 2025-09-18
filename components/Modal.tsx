import Link from "next/link";
import { useEffect } from "react";

interface ModalProps {
    open: boolean;
    className?: string;
    onClose: () => void;
    topOffset: number;
}

const links = [
    { href: "/menu", label: "Menu", offset: 0},
    { href: "/about", label: "About", offset: 0},
    { href: "/", label: "Reservation", offset: 0},
    { href: "/", label: "Location", offset: 0},
    
];


export const Modal: React.FC<ModalProps> = ({className, open, onClose,topOffset}) => {


      useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

    return (
        <div   style={{
        top: topOffset, 
        height: open ? `calc(100vh - ${topOffset}px)` : 0,
      }}  className={`fixed left-0  w-full h-0 bg-[#FFEEDF] overflow-hidden transition-all duration-700 ease-in-out ${open ? "h-screen" : 'h-0'} z-40 ${className}`}> 
      {open ? (

            <div className="min-h-screen flex flex-col justify-start items-center">
                {links.map(l => (
                    <Link href={l.href} className={`text-4xl text-[#65171D] font-light uppercase hover:text-5xl transition-all duration-300 ease-in-out py-15`}>{l.label}</Link>
                ))}
            </div>


      ) : ""}
      </div>
    )

} 