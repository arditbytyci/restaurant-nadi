import MenuItem from "./MenuItem";
import MenuSection from "./MenuSection";

const DrinksMenuContent = () => {
  return (
    <div className="flex flex-col gap-10">
      <MenuSection title="Wine">
        <MenuItem
          name="Hisari Red"
          price={18.5}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />

        <MenuItem
          name="Hisari White"
          price={16.6}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <MenuItem
          name="Chardonney"
          price={20}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <MenuItem
          name="She Red"
          price={3}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <MenuItem
          name="She white"
          price={3}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
      </MenuSection>
      <MenuSection title="Beer">
        <MenuItem
          name="Peroni"
          price={4}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />

        <MenuItem
          name="Moretti"
          price={5}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
        <MenuItem
          name="Heineken"
          price={6}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        />
      </MenuSection>
    </div>
  );
};
export default DrinksMenuContent;
