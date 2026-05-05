"use client";

import { Container } from "@/components/layout/Container";
import MenuHeader from "./MenuHeader";
import FoodMenuContent from "./FoodMenuContent";
import { useState } from "react";
import DrinksMenuContent from "./DrinksMenuContent";
import { Footer } from "@/components/layout/Footer/Footer";

const MenuPage: React.FC = () => {
  const [mode, setMode] = useState<"eat" | "drink">("eat");

  return (
    <div className="min-h-dvh bg-background relative py-8 ">
      <Container className="items-center justify-center flex flex-col gap-20 pt-[var(--header-height)] pb-16 sm:pb-20 lg:pb-28">
        <MenuHeader
          mode={mode}
          onToggle={() => setMode((prev) => (prev === "eat" ? "drink" : "eat"))}
        />

        <div className="w-full">
          {mode === "eat" ? <FoodMenuContent /> : <DrinksMenuContent />}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default MenuPage;
