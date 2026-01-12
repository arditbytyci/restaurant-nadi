import Image from "next/image";
import { Container } from "../Container";
import Link from "next/link";
import { Ellipse } from "../Ellipse";
import { Facebook } from "../facebook";
import { Instagram } from "../instagram";

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Menu" },

  { href: "/", label: "About" },
];

export const Footer = () => {
  return (
    <div className="min-h-[100svh]">
      <Container className="min-h-[100svh]  flex items-center justify-center border-2">
        <div className="flex flex-row justify-between border w-full min-h-[100svh]">
          <div className="flex flex-col justify-around ">
            <Image
              src="/logo-hr.png"
              width={200}
              height={200}
              alt="logo_footer"
            />
            {links.map((link, idx) => {
              return (
                <ul key={idx} className="px-10">
                  <li>
                    <Link
                      className="text-3xl font-extralight  underline underline-offset-8 text-left"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-start text-secondary">
            <div className="relative  flex flex-col items-center justify-around border h-full">
              <h2 className="text-6xl">Opening hours</h2>
              <ul className="flex flex-col space-y-8  justify-center items-center text-3xl">
                <li>Mon - Fri: 10:00 - 20:00 </li>
                <li>Sat - Sun: 10:00 - 20:00 </li>
              </ul>
              <div />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <p className="text-3xl">Contact Us</p>
            <div className="flex flex-row gap-5">
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
