import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";

export const Hero: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div 
      className={`h-screen grid grid-rows-2 ${className}`}
   
    > 

      <div className="absolute top-1/3 left-[10%]  ">
        <Image src="/hero.png" width={340} height={250} alt="Plate" className=""/>
      </div>


      {/* Top Section */}
      <section className="px-8 py-8">
        <Container className="h-full flex items-end justify-end">
        <h1 className="text-2xl md:text-4xl uppercase text-secondary  leading-snug lg:w-1/2 text-right">
          Authentic Balkan Flavors, <span className="font-semibold line-clamp-1">Made with Love</span>
        </h1>
        </Container>
      </section>

      
      

      {/* Bottom Section */}
      <section className="bg-secondary px-8 py-8 flex flex-col items-center">
        <Container className="h-full flex flex-row justify-end">
        <h4 className="text-primary py-2 font-light  lg:text-xl md:text-lg lg:w-lg leading-snug text-right">
          Discover the rich taste of traditional Balkan cuisine, crafted with fresh ingredients and passion. From sizzling grilled meats to homemade specialties, every dish tells a story.
        </h4>
        
         
        
      
        
        </Container>
        
       <Link href="/" className="text-primary w-fit h-fit p-4 text-2xl text-center font-light my-16  ">
          Book now 
        </Link> 
      </section>
    </div>
  );
};