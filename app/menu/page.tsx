"use client";
import { Container } from "@/components/Container";
import MenuHeader from "./MenuHeader";
import FoodMenuContent from "./FoodMenuContent";
import { ChefCooking } from "./ChefCooking";
import { useState } from "react";
import DrinksMenuContent from "./DrinksMenuContent";
import { Footer } from "@/components/Footer";

const MenuPage: React.FC = ({}) => {
  const [mode, setMode] = useState<"eat" | "drink">("eat");

  return (
    <div className="h-full relative py-8 pt-[var(--header-height)]">
      <Container className=" items-center justify-center flex flex-col gap-20">
        <MenuHeader
          mode={mode}
          onToggle={() => setMode((prev) => (prev === "eat" ? "drink" : "eat"))}
        />

        <div className="flex flex-row items-center justify-center  border-black w-full ">
          <div className=" w-full  h-full ">
            {mode === "eat" ? <FoodMenuContent /> : <DrinksMenuContent />}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default MenuPage;
