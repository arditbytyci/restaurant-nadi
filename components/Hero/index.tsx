import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { useRef } from "react";

import { motion, useTransform } from "framer-motion";

export const Hero: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    // <div
    //   className={`min-h-screen pt-[var(--header-height)] flex flex-col relative ${className} overflow-hidden`}
    // >
    //   <Container className="">
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0.85 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
    //       className="
    //       absolute
    //       top-[50%]
    //       -translate-y-1/2
    //       pointer-events-none
    //       hidden

    //     "
    //     >
    //       <div className="relative w-36 h-36  sm:w-56 sm:h-56 xl:w-92 xl:h-92">
    //         <Image
    //           src="/hero.png"
    //           alt="Plate of Balkan cuisine"
    //           fill
    //           className="object-contain"
    //           priority
    //         />
    //       </div>
    //     </motion.div>
    //   </Container>

    //   {/* Top Section */}
    //   <section className="px-8 py-8 h-1/2">
    //     <Container className="h-full flex items-end justify-end ">
    //       <h1 className="text-3xl whitespace-nowrap sm:whitespace-normal  md:text-7xl  text-secondary leading-relaxed  lg:w-1/2 text-right  w-full">
    //         Authentic Balkan Flavors,{" "}
    //         <span className="font-semibold line-clamp-1">Made with Love</span>
    //       </h1>
    //     </Container>
    //   </section>

    //   {/* Bottom Section */}
    //   <section className="bg-secondary px-8 py-4 flex flex-col items-center h-1/2">
    //     <Container className="flex flex-row justify-end">
    //       <h4 className="text-primary  w-full leading-relaxed  max-w-48 font-light text-xl  lg:text-4xl md:text-lg lg:max-w-lg  text-right">
    //         Discover the rich taste of traditional Balkan cuisine, crafted with
    //         fresh ingredients and passion. From sizzling grilled meats to
    //         homemade specialties, every dish tells a story.
    //       </h4>
    //     </Container>

    //     <Link
    //       href="/"
    //       className="text-primary w-fit h-fit p-4 text-2xl text-center font-light my-16"
    //     >
    //       Book now
    //     </Link>
    //   </section>
    // </div>

    // <div className="min-h-screen pt-[var(--header-height)] relative grid grid-rows-[auto_auto]">
    //   <section className="">
    //     <Container className="h-full">
    //       <motion.h1
    //         initial={{ opacity: 0, y: -100 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    //         className="text-3xl xl:text-7xl  relative h-auto top-1/2  whitespace-normal tracking-wider text-secondary text-right leading-snug "
    //       >
    //         Authentic Balkan Flavors,{" "}
    //         <motion.span
    //           initial={{ opacity: 0, x: -100 }}
    //           animate={{ opacity: 1, x: 0 }}
    //           transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
    //           className="font-semibold line-clamp-1 tracking-widest "
    //         >
    //           Made with Love
    //         </motion.span>
    //       </motion.h1>
    //       <motion.span
    //         initial={{ opacity: 0, x: -50 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 1, ease: "easeOut", delay: 2 }}
    //         className="md:w-24 md:h-24 xl:w-80 xl:h-80"
    //       >
    //         <Image
    //           src="/hero.png"
    //           alt="Plate"
    //           width={80}
    //           height={80}
    //           className="border-black  w-40 h-40 relative top-1/2"
    //         />
    //       </motion.span>
    //     </Container>
    //   </section>

    //   <section className="bg-secondary px-2">
    //     <Container className="flex flex-col items-end justify-around gap-4 h-full">
    //       <motion.h4
    //         initial={{ opacity: 0, y: -100 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
    //         className="text-primary font-extralight text-xl w-1/2  text-right tracking-widest leading-snug"
    //       >
    //         Discover the rich taste of traditional Balkan cuisine, crafted with
    //         fresh ingredients and passion. From sizzling grilled meats to
    //         homemade specialties, every dish tells a story.
    //       </motion.h4>
    //       <div className="border flex items-center justify-center">
    //         <Link
    //           href=""
    //           className="text-primary p-2 text-xl bg-secondary text-center font-light border"
    //         >
    //           See Our Menu
    //         </Link>
    //       </div>
    //     </Container>
    //   </section>
    // </div>

    <div className="min-h-[100svh] flex flex-row">
      <div className="w-1/2 min-h-[100svh]">
        {/* <Image
          src="/ura_svg.svg"
          alt=""
          width={40}
          height={40}
          className="absolute top-1/3  w-70 h-70 rounded-full "
          priority
        /> */}
        <Container className="min-h-[100svh] grid grid-rows-[auto_auto] py-20  md:py-28 lg:py-10  2xl:py-28">
          <motion.div className=" flex justify-center lg:items-center  lg:h-fit">
            <Image
              src="/hero.png"
              alt="Plate"
              width={80}
              height={80}
              className=" w-40 h-40 sm:w-6 sm:h-36 md:w-56 md:h-56 lg:h-72 lg:w-72"
            />
          </motion.div>

          <div className="lg:pb-10">
            <motion.h4
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-secondary font-extralight text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Discover the rich taste of traditional Balkan cuisine, crafted
              with fresh ingredients and passion. From sizzling grilled meats to
              homemade specialties, every dish tells a story.
            </motion.h4>
          </div>
        </Container>
      </div>
      <div className="w-1/2 min-h-[100svh] bg-secondary">
        <Container className="h-full  grid grid-rows-[auto_auto_auto]  py-20 md:py-28 lg:py-32 ">
          <div className="flex flex-col h-fit w-auto ">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="font-edlavonia text-3xl sm:text-4xl md:text-5xl lg:text-5xl lg:whitespace-nowrap w-full  text-center lg:tracking-wider whitespace-normal    text-primary"
            >
              Authentic Balkan Flavors,{" "}
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                className="font-semibold text-xl sm:text-2xl  md:text-4xl lg:text-4xl  lg:line-clamp-1  text-left lg:text-center  w-auto    tracking-widest"
              >
                Made with Love
              </motion.span>
            </motion.h1>
          </div>
          <div />
          <div className="flex items-center h-fit justify-center ">
            <Link
              href=""
              className="text-primary p-2 text-3xl md:text-4xl lg:text-5xl underline underline-offset-8 bg-secondary text-center font-light"
            >
              view menu
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
