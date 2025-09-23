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
      <section className="flex items-end px-8 md:px-16">
        <Container className="">
        <h1 className="text-2xl md:text-5xl uppercase text-[#65171D] tracking-wide">
          Authentic Balkan Flavors, <span className="font-semibold line-clamp-1">Made with Love</span>
        </h1>
        </Container>
      </section>

      {/* Hero Image - positioned relative to the grid container */}
      <div className="absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2">
        <Image src="/hero.png" width={450} height={450} alt="Plate" />
      </div>

      {/* Bottom Section */}
      <section className="bg-[#65171D] flex flex-col justify-between p-8 md:px-24 md:py-12">
        <Container>
        <p className="text-[#FFEEDF] font-light text-lg md:text-2xl max-w-xl md:max-w-2xl">
          Discover the rich taste of traditional Balkan cuisine...
        </p>
        </Container>
        <Link href="/" className="text-[#FFEEDF] font-light border border-[#FFEEDF] hover:bg-[#FFEEDF] hover:text-[#65171D] transition-colors w-fit mx-auto px-6 py-3">
          Book now 
        </Link>
        
      </section>
    </div>
  );
};