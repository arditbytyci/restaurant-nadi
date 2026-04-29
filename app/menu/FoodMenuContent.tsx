import { categories } from "@/data/categories";
import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";
import { menuItems } from "@/data/menu";

const FoodMenuContent = () => {
  const categoryList = Object.values(categories);
  const formatText = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  return (
    <div className="flex flex-col lg:space-y-20">
      {categoryList.map((category) => {
        const items = menuItems.filter(
          (item) => item.category.id === category.id,
        );

        if (items.length === 0) return null;

        return (
          <MenuSection
            key={category.id}
            title={formatText(category.title)}
            desc={category.desc}
            sides={category.sides}
            extras={category.extras}
          >
            {items.map((i) => (
              <MenuItem
                key={i.id}
                id={i.id}
                name={i.name}
                price={i.price}
                description={i.description}
                allergen={i.allergen}
                size={i.size}
              />
            ))}
          </MenuSection>
        );
      })}
    </div>
  );
};
export default FoodMenuContent;
