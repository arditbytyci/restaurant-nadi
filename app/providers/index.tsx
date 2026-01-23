"use client";

import { SmoothScroll } from "./scroll";
import { ViewTransitions } from "next-view-transitions";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <ViewTransitions>{children}</ViewTransitions>
    </SmoothScroll>
  );
}
