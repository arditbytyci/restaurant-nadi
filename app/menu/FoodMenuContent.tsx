import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const FoodMenuContent = () => {
  return (
    <div className="flex flex-col lg:space-y-20  pb-40">
      <MenuSection title="Starters">
        <MenuItem
          name="Sallate shope"
          price={6}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />

        <MenuItem
          name="Ajvar me buke"
          price={3}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <MenuItem
          name="Sallate tuna"
          price={3}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <MenuItem
          name="Sallate tuna"
          price={3}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <MenuItem
          name="Sallate tuna"
          price={3}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
      </MenuSection>
      <MenuSection title="Bread">
        <MenuItem
          name="Pogace"
          price={6}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />

        <MenuItem
          name="Leqenik"
          price={3}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
      </MenuSection>
    </div>
  );
};
export default FoodMenuContent;
