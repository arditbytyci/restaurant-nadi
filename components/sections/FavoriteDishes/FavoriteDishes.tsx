import { DishArticle } from "./DishArticle";
import { Container } from "@/components/layout/Container";

const COLORS = {
  primary: "#ffeedf",
  secondary: "#450b1d",
} as const;

const leftDishes = [{ name: "Tave Kosi" }, { name: "Fergese" }];
const rightDishes = [{ name: "Qofte" }, { name: "Baklava" }];

export const FavoriteDishes = () => {
  return (
    <div className="w-full min-h-svh grid grid-cols-2">
      {/* Dark column */}

      <Container className="bg-secondary flex flex-col h-svh ">
        {leftDishes.map((dish) => (
          <div
            key={dish.name}
            className="flex-1 flex items-center justify-center overflow-hidden"
          >
            <DishArticle name={dish.name} textColor={COLORS.primary} />
          </div>
        ))}
      </Container>

      <Container className="bg-primary flex flex-col min-h-svh py-4 lg:py-10 px-2 lg:px-10">
        {rightDishes.map((dish) => (
          <div
            key={dish.name}
            className="flex-1 flex items-center justify-center"
          >
            <DishArticle name={dish.name} textColor={COLORS.secondary} />
          </div>
        ))}
      </Container>
    </div>
  );
};
