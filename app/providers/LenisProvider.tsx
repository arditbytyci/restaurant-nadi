"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  // Optional: keep a MotionValue for animations
  const scrollY = useMotionValue(0);

  // Update scrollY whenever Lenis scrolls
  useLenis(({ scroll }) => {
    scrollY.set(scroll);
  });

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        lerp: 0.07,
        smoothWheel: true,
        orientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}
