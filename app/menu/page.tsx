"use client";
import { Container } from "@/components/layout/Container";
import MenuHeader from "./MenuHeader";
import FoodMenuContent from "./FoodMenuContent";

import { useState } from "react";
import DrinksMenuContent from "./DrinksMenuContent";
import { Footer } from "@/components/layout/Footer/Footer";

const MenuPage: React.FC = ({}) => {
  const [mode, setMode] = useState<"eat" | "drink">("eat");

  return (
    <div className="min-h-svh relative py-8 pt-[var(--header-height)]">
      <Container className=" items-center justify-center flex flex-col gap-20">
        <div className="my-10 flex flex-col items-center gap-8 text-center">
          <h1 className="text-[8svh] font-edlavonia tracking-wider">
            Benvenuti da Nadi
          </h1>
          <span className="border-t-4 w-[55svh]"></span>
          <p className="font-edlavonia leading-none text-[5svh] w-[150svh] ">
            Nadi è un luogo dove il tempo rallenta e i sapori diventano ricordi.
            Ogni pasto è un’esperienza, un viaggio che attraversa tradizioni e
            profumi di casa: nasce come nelle cucine delle nostre nonne, con
            calma, con mani pazienti, con quel calore che non si insegna ma si
            trasmette. Profumi che riempiono la stanza, il pane caldo che si
            spezza, la carne che sfrigola sulla griglia, perché ognuno di noi ha
            un sapore che risveglia ricordi lontani.
          </p>
          <p className="font-edlavonia leading-none text-[5svh] w-[150svh]">
            Qui la cucina balcanica rivive con passione: autentica nelle sue
            radici, viva nella sua anima, capace di rinnovarsi senza mai perdere
            la propria verità.
          </p>
        </div>
        <MenuHeader
          mode={mode}
          onToggle={() => setMode((prev) => (prev === "eat" ? "drink" : "eat"))}
        />

        <div className="flex flex-row items-center justify-center  w-full ">
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
