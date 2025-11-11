import Image from "next/image";
import { Container } from "../Container";
import Link from "next/link";
import { Ellipse } from "../Ellipse";
import { Facebook } from "../facebook";
import { Instagram } from "../instagram";

const links = [
  { href: "/", label: "Menu" },
  { href: "/", label: "Reservation" },
  { href: "/", label: "About" },
  { href: "/", label: "Reservation" },
  { href: "/", label: "Location" },
];

export const Footer = () => {
  return (
    <div className="h-screen">
      <Container className="h-full">
        <div className="grid grid-cols-3 h-full gap-10 p-10">
          <div className=" flex flex-col justify-around">
            <Image
              src="/logov2.png"
              width={200}
              height={200}
              alt="logo_footer"
            />
            {links.map((link, idx) => {
              return (
                <ul key={idx} className="px-10">
                  <li>
                    <Link
                      className="text-3xl font-extralight lowercase underline underline-offset-8 text-left"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center text-primary">
            <Ellipse className="absolute w-full" />
            <div className="relative  flex flex-col items-center justify-center py-20">
              <h2 className="text-3xl">Opening hours</h2>
              <ul className="flex flex-col gap-4 py-10 justify-center items-center">
                <li>Monday: 10:00 - 20:00 </li>
                <li>Tuesday: 10:00 - 20:00 </li>
                <li>Wednesday: 10:00 - 20:00 </li>
                <li>Thursday: 10:00 - 20:00 </li>
                <li>Friday: 10:00 - 20:00 </li>
                <li>Saturday: 10:00 - 20:00 </li>
                <li>Sunday: 10:00 - 20:00 </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-row gap-5">
              <Facebook />
              <Instagram />
            </div>
            <p className="text-3xl">Contact Us</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
