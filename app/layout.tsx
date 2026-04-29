import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header/Header";

import { edLavonia } from "@/app/fonts";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Restaurant Nadi",
  description:
    "Authentic Balkan cuisine crafted with fresh ingredients and passion.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${edLavonia.variable}`}>
      <body className="font-sans antialiased ">
        <Providers>
          <Header />
          <main className="">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
