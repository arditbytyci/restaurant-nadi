import Image from "next/image";
import { Container } from "../Container";
import Link from "next/link";
import { Ellipse } from "../Ellipse";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";
import LocationSvg from "../icons/location";
import ClockSvg from "../icons/clock";

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Menu" },

  { href: "/", label: "About" },
];

export const Footer = () => {
  return (
    <div className="min-h-[100svh]  grid grid-rows-[auto_auto_auto]">
      <Container className="flex items-center justify-center py-2  ">
        <Image
          src="/logo-hr.png"
          width={230}
          height={230}
          alt="logo_footer"
          className="w-auto sm:h-36 lg:h-48"
        />
      </Container>

      <Container className="grid grid-rows-[auto_auto] space-y-10">
        {/* <div className="w-auto flex flex-col items-center justify-around py-4 space-y-6 lg:space-y-8">
          <div className="flex flex-col justify-center items-center space-x-4 ">
            <LocationSvg />

            <p className="text-xl sm:text-2xl md:text-3xl font-light text-center w-1/2 py-4 ">
              Via Tommaso da Modena 1/b Roncade (TV)
            </p>
          </div>
          <p className="underline text-xl sm:text-3xl">view in maps</p>
        </div>
        <div className="flex flex-col  justify-around items-center">
          <h2></h2>
          <div className="flex flex-row  space-y-6 space-x-6 md:space-x-10 py-4  px-2">
            <ClockSvg />
            <div className="space-y-4 md:space-y-6 text-xl sm:text-2xl ">
              <p className="text-center">
                Mon - Fri:{" "}
                <span className="font-edlavonia line-clamp-1">
                  9:00 - 21:00
                </span>
              </p>
              <p className="text-center">
                Sat - Sun:{" "}
                <span className="font-edlavonia line-clamp-1">
                  9:00 - 22:00
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="text-xl sm:text-3xl font-thin flex flex-row items-center justify-around py-4 sm:py-6 md:space-y-8">
          <p className=" underline underline-offset-4">Home</p>
          <p className=" underline underline-offset-4">Menu</p>
          <p className=" underline underline-offset-4">About</p>
        </div> */}

        <div className="grid grid-rows-[auto_auto] lg:grid-cols-[auto_auto]   space-x-10 space-y-14">
          <div className="flex flex-col justify-around  items-center h-full w-full ">
            <LocationSvg />

            <p className="text-xl sm:text-2xl md:text-3xl  font-light text-center leading-relaxed   ">
              Via Tommaso da Modena 1/b Roncade (TV){" "}
              <span className="underline line-clamp-1">view in maps </span>
            </p>
            {/* <p className="underline text-xl sm:text-3xl">view in maps</p> */}
          </div>
          <div className="flex flex-col items-center justify-around  text-xl sm:text-2xl lg:text-3xl  h-full">
            <ClockSvg />
            <div className="flex flex-row w-full justify-around lg:space-y-2">
              <p className="text-center">
                Mon - Fri:{" "}
                <span className="font-edlavonia line-clamp-1">
                  9:00 - 21:00
                </span>
              </p>
              <p className="text-center">
                Sat - Sun:{" "}
                <span className="font-edlavonia line-clamp-1">
                  9:00 - 22:00
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="text-xl sm:text-3xl lg:text-3xl font-thin flex flex-row items-center justify-around py-4 sm:py-6 md:space-y-8 lg:space-y-12">
          <p className=" underline underline-offset-4">Home</p>
          <p className=" underline underline-offset-4">Menu</p>
          <p className=" underline underline-offset-4">About</p>
        </div> */}
      </Container>
      <Container className="flex flex-col items-center py-4 space-y-4">
        {/* <h2 className="text-2xl">contact us</h2> */}
        <div className="flex flex-row items-center justify-between   w-full py-4 sm:py-6 ">
          <div className="flex flex-row w-full  lg:space-x-10">
            <Facebook />

            <Instagram />
          </div>
          <div className="text-center text-base sm:text-xl lg:text-3xl whitespace-nowrap">
            <p className="text-right">+39 888 000 888</p>
            <p className="text-sm sm:text-base lg:text-2xl ">
              restaurant-nadi@gmail.com
            </p>
          </div>
        </div>
        {/* <Seperator /> */}
        <hr className="border border-b-1 w-full"></hr>
        <p className="font-edlavonia text-2xl sm:text-3xl md:text-4xl tracking-wider py-6 sm:py-8 md:py-12">
          © Restaurant Nadi
        </p>
      </Container>
    </div>
    // {/* <Container className="min-h-[100svh]  flex items-center justify-center border-2">
    //   <div className="flex flex-row justify-between border w-full min-h-[100svh]">
    //     <div className="flex flex-col justify-around ">
    //       <Image
    //         src="/logo-hr.png"
    //         width={200}
    //         height={200}
    //         alt="logo_footer"
    //       />
    //       {links.map((link, idx) => {
    //         return (
    //           <ul key={idx} className="px-10">
    //             <li>
    //               <Link
    //                 className="text-3xl font-extralight  underline underline-offset-8 text-left"
    //                 href={link.href}
    //               >
    //                 {link.label}
    //               </Link>
    //             </li>
    //           </ul>
    //         );
    //       })}
    //     </div>
    //     <div className="flex flex-col items-center justify-start text-secondary">
    //       <div className="relative  flex flex-col items-center justify-around border h-full">
    //         <h2 className="text-6xl">Opening hours</h2>
    //         <ul className="flex flex-col space-y-8  justify-center items-center text-3xl">
    //           <li>Mon - Fri: 10:00 - 20:00 </li>
    //           <li>Sat - Sun: 10:00 - 20:00 </li>
    //         </ul>
    //         <div />
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-center justify-center gap-10">
    //       <p className="text-3xl">Contact Us</p>
    //       <div className="flex flex-row gap-5">
    //         <Facebook />
    //         <Instagram />
    //       </div>
    //     </div>
    //   </div>
    // </Container> */}
  );
};
