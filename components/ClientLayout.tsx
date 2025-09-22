"use client";

import { ReactNode, useEffect, useState } from "react";
import { ScrollProvider, useScroll } from "@/app/providers/ScrollProvider";
import { Header } from "./Header";

interface ClientLayoutProps {
  children: ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <ScrollProvider>
      <ScrollWatcher>{children}</ScrollWatcher>
    </ScrollProvider>
  );
};


const ScrollWatcher = ({ children }: { children: ReactNode }) => {
  const lenis = useScroll();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => {
      setScrollY(lenis.scroll);
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <>
      <Header scrollY={scrollY} /> 
      {children}
    </>
  );
};
