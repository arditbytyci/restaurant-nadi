import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Header } from "@/components/layout/Header/Header";
import { edLavonia } from "@/app/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Restaurant Nadi",
  description:
    "Authentic Balkan cuisine crafted with fresh ingredients and passion.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Restaurant Nadi",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffeedf",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={edLavonia.variable}>
      <body className="font-sans antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
