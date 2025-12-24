"use client";
import { Container } from "@/components/Container";
import MenuHeader from "./MenuHeader";
import FoodMenuContent from "./FoodMenuContent";
import { ChefCooking } from "./ChefCooking";
import { useState } from "react";
import DrinksMenuContent from "./DrinksMenuContent";

const MenuPage: React.FC = ({}) => {
  const [mode, setMode] = useState<"eat" | "drink">("eat");

  return (
    <div className="h-full relative pt-[var(--header-height)]">
      <Container className=" items-center justify-center flex flex-col gap-20">
        <MenuHeader
          mode={mode}
          onToggle={() => setMode((prev) => (prev === "eat" ? "drink" : "eat"))}
        />

        <div className="flex flex-row items-center justify-end border-black w-full gap-20">
          <div className="w-auto fixed left-20 top-1/3">
            <ChefCooking />
          </div>
          <div className="w-3/5 h-full">
            {mode === "eat" ? <FoodMenuContent /> : <DrinksMenuContent />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MenuPage;
