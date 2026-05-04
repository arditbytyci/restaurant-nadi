import { categories } from "@/data/categories";
import { menuItems } from "@/data/food";
import AllergenLegend from "./AllergenLegend";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const formatTitle = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

const FoodMenuContent = () => {
  const categoryList = Object.values(categories);

  return (
    <div className="flex flex-col space-y-14 lg:space-y-20">
      <p className="text-center text-sm font-light lg:text-base">
        [*] I numeri tra parentesi quadre indicano gli allergeni. Consultare la
        legenda allergeni in fondo alla pagina.
      </p>

      {categoryList.map((category) => {
        const items = menuItems.filter(
          (item) => item.category.id === category.id,
        );

        if (items.length === 0) return null;

        return (
          <MenuSection
            key={category.id}
            title={formatTitle(category.title)}
            illustration={category.illustration}
            desc={category.desc}
            sides={category.sides}
            extras={category.extras}
          >
            {items.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                allergen={item.allergen}
                size={item.size}
              />
            ))}
          </MenuSection>
        );
      })}

      <AllergenLegend />
    </div>
  );
};

export default FoodMenuContent;
