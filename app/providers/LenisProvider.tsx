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
        duration: 2.5, // Even slower for smooth section transitions
        easing: (t) => 1 - Math.pow(1 - t, 4), // Smoother easing
        lerp: 0.03, // Very smooth, delayed movement
        smoothWheel: true,
        orientation: "vertical",
        syncTouch: true,
        syncTouchLerp: 0.08, // Smooth touch scrolling
        wheelMultiplier: 0.8, // Reduced wheel sensitivity
        touchMultiplier: 1.2, // Reduced touch sensitivity
      }}
    >
      {children}
    </ReactLenis>
  );
}
