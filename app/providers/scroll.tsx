"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Configuration for desktop
const DESKTOP_CONFIG = {
  duration: 1.4,
  easing: (t: number) => 1 - Math.pow(1 - t, 3),
  lerp: 0.08,
  smoothWheel: true,
  smoothTouch: false, // Disable on mobile
  syncTouch: false,
  wheelMultiplier: 0.7,
  touchMultiplier: 1.2,
  infinite: false,
  orientation: "vertical" as const,
};

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    setIsLoaded(true);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // If mobile, don't use Lenis (better performance)
  if (isMobile || !isLoaded) {
    return <>{children}</>;
  }

  // Apply Lenis only on desktop
  return (
    <ReactLenis root options={DESKTOP_CONFIG} className="h-full" autoRaf={true}>
      {children}
    </ReactLenis>
  );
}
