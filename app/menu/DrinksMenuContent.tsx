import { categories } from "@/data/categories";
import { drinkItems } from "@/data/drinks";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const formatTitle = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

const DrinksMenuContent = () => {
  const categoryList = Object.values(categories);

  return (
    <div className="flex flex-col space-y-14 lg:space-y-20">
      {categoryList.map((category) => {
        const items = drinkItems.filter(
          (item) => item.category.id === category.id,
        );

        if (items.length === 0) return null;

        return (
          <MenuSection
            key={category.id}
            title={formatTitle(category.title)}
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
    </div>
  );
};

export default DrinksMenuContent;
