import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const MenuContent = () => {
  return (
    <div className="flex flex-col">
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
      </MenuSection>
    </div>
  );
};
export default MenuContent;
