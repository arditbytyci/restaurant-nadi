"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

const DESKTOP_LENIS_OPTIONS = {
  duration: 1.2,
  easing: (t: number) => 1 - Math.pow(1 - t, 4),
  lerp: 0.1,
  smoothWheel: true,
  smoothTouch: false,
  syncTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 1.2,
  infinite: false,
  orientation: "vertical" as const,
};

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();
    setIsLoaded(true);
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile || !isLoaded) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={DESKTOP_LENIS_OPTIONS} className="h-full" autoRaf>
      {children}
    </ReactLenis>
  );
}
