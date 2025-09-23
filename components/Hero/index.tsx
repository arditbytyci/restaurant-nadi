import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";

export const Hero: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div 
      className={`grid grid-rows-2 ${className}`}
      style={{ 
        marginTop: 'var(--header-height, 0px)',
        minHeight: 'calc(100dvh - var(--header-height, 0px))' // Use dvh for mobile safety
      }}
    >
      {/* Top Section */}
      <section className="px-8">
        <Container className="h-full flex items-end">
        <h1 className="text-2xl md:text-5xl uppercase text-secondary  leading-snug">
          Authentic Balkan Flavors, <span className="font-semibold line-clamp-1">Made with Love</span>
        </h1>
        </Container>
      </section>

      {/* Hero Image - positioned relative to the grid container */}
      <div className="absolute top-2/3 left-[75%] transform -translate-x-1/2 -translate-y-1/2  ">
        <Image src="/hero.png" width={450} height={450} alt="Plate" className="md:w-90"/>
      </div>

      {/* Bottom Section */}
      <section className="flex flex-col items-center justify-evenly bg-secondary px-8">
        <Container className="h-full">
        <h4 className="text-primary py-2 font-light  lg:text-2xl md:text-lg lg:max-w-1/2 leading-snug">
          Discover the rich taste of traditional Balkan cuisine, crafted with fresh ingredients and passion. From sizzling grilled meats to homemade specialties, every dish tells a story.
        </h4>
        
         
        
        
        </Container>
         <Link href="/" className="text-primary w-fit h-fit p-4 my-4 text-2xl text-center font-light ">
          Book now 
        </Link>
      
      </section>
    </div>
  );
};