import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  className?: string;
}

const arrow = ""

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div className={`relative flex flex-col w-full h-full  ${className}`}>
      {/* Top Section */}
      <section className="flex flex-col justify-end px-6 md:px-24 h-1/2">
        <h1 className="text-3xl md:text-5xl uppercase text-[#65171D] tracking-wide">
          Authentic Balkan Flavors, <span className="font-semibold line-clamp-1">Made with Love</span>
        </h1>
      </section>

      {/* Hero Image */}
      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
    <Image src="/hero.png" width={450} height={450} alt="Plate" />
  </div>

      {/* Bottom Section */}
      <section className="flex flex-col justify-between bg-[#65171D] h-1/2 w-full  md:px-24  md:py-12 ">
        <p className="text-[#FFEEDF] font-light text-lg md:text-2xl max-w-xl md:max-w-2xl">
          Discover the rich taste of traditional Balkan cuisine, crafted with fresh ingredients and passion. From sizzling grilled meats to homemade specialties, every dish tells a story.
        </p>
        <Link
          href="/"
          className="tracking-wider md:mt-8 text-lg md:text-2xl text-[#FFEEDF] font-light  px-6 py-3 md:px-8 md:py-4 w-fit mx-auto"
        >
          Book now 
        </Link>
      </section>
    </div>
  );
};
