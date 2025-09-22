"use client";

import { ReactNode } from "react";
import { motion, useTransform } from "framer-motion";


import { Header } from "./Header";
import { useLenisScroll } from "@/app/providers/LenisProvider";
import { MenuModal } from "./Header/MenuModal";

interface ClientLayoutProps {
  children: ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {


  return (
    <>
      <motion.div
       
      >
        <Header />
        
      </motion.div>
      <main className="pt-[var(--header-height,auto)]">{children}</main>
    </>
  );
};