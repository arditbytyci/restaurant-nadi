"use client";

import { SmoothScroll } from "./SmoothScroll";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
