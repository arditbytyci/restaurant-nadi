import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  className?: string;
}


export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-col h-full  items-center relative justify-between  ${className ?? ""}`}
    >
      <section className="flex flex-col px-24 justify-end h-1/2 w-full">
      <h1 className="text-[40px] uppercase text-[#65171D] tracking-wide">Authentic Balkan Flavors, <span className="font-semibold line-clamp-1">Made with Love</span></h1>
      
      </section>
      <Image src="/hero.png" width={450} height={450} alt="platepng" className="absolute top-[30%] left-2/3"></Image>
      <section className="flex flex-col bg-[#65171D] h-1/2 w-full px-24 py-1">
        <p className="text-[#FFEEDF]  font-light text-2xl w-1/3">Discover the rich taste of traditional Balkan cuisine, crafted with fresh ingredients and passion. From sizzling grilled meats to homemade specialties, every dish tells a story.</p>
        <Link href="/" className="text-2xl mx-auto text-[#FFEEDF] font-light border-1 border-[#FFEEDF] w-fit h-fit p-4">Book now <span></span></Link>
      </section>
      
    </div>
  );
};


