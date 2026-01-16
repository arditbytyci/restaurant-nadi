"use client";

import { ViewTransitions } from "next-view-transitions";
import { LenisProvider } from "./LenisProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ViewTransitions>{children}</ViewTransitions>
    </LenisProvider>
  );
}
