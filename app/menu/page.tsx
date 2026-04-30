"use client";

import { Container } from "@/components/layout/Container";
import MenuHeader from "./MenuHeader";
import FoodMenuContent from "./FoodMenuContent";
import { useState } from "react";
import DrinksMenuContent from "./DrinksMenuContent";
import { Footer } from "@/components/layout/Footer/Footer";
import { easeIn, motion } from "framer-motion";

const MenuPage: React.FC = () => {
  const [mode, setMode] = useState<"eat" | "drink">("eat");

  return (
    <div className="min-h-svh relative py-8 pt-[var(--header-height)]">
      <Container className="items-center justify-center flex flex-col gap-20">
        {/* Intro */}
        <div className="my-10 flex flex-col items-center gap-8 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: easeIn, duration: 1, delay: 0.3 }}
            className="text-[6svh] lg:text-[8svh] font-edlavonia tracking-wider"
          >
            Benvenuti da Nadi
          </motion.h1>
          <motion.span
            className="border-t-2 lg:border-t-4 w-48 lg:w-[55svh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: easeIn, duration: 1, delay: 0.3 }}
          />
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.7, delay: 0.7 }}
            className="font-edlavonia leading-relaxed text-[3svh] lg:text-[5svh] w-full lg:w-[150svh]"
          >
            Nadi è un luogo dove il tempo rallenta e i sapori diventano ricordi.
            Ogni pasto è un&apos;esperienza, un viaggio che attraversa
            tradizioni e profumi di casa: nasce come nelle cucine delle nostre
            nonne, con calma, con mani pazienti, con quel calore che non si
            insegna ma si trasmette. Profumi che riempiono la stanza, il pane
            caldo che si spezza, la carne che sfrigola sulla griglia, perché
            ognuno di noi ha un sapore che risveglia ricordi lontani.
          </motion.p>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.7, delay: 1 }}
            className="font-edlavonia leading-relaxed text-[3svh] lg:text-[5svh] w-full lg:w-[150svh]"
          >
            Qui la cucina balcanica rivive con passione: autentica nelle sue
            radici, viva nella sua anima, capace di rinnovarsi senza mai perdere
            la propria verità.
          </motion.p>
        </div>

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
