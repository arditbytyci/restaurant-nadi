"use client";
import { createContext, useContext, useEffect, useRef, ReactNode, useState } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext<Lenis | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: t => t, lerp: 0.1 });
    lenisRef.current = lenis;
    
    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    setIsReady(true);
    return () => lenis.destroy();
  }, []);

  // Wait until Lenis is ready before rendering children
  if (!isReady) return null;

  return <ScrollContext.Provider value={lenisRef.current}>{children}</ScrollContext.Provider>;
};

export const useScroll = (): Lenis => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScroll must be used within a ScrollProvider");
  return context;
};
