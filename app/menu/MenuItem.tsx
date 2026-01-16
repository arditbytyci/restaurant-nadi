type MenuItemProps = {
  name: string;
  price: number | string;
  description?: string;
};

const MenuItem = ({ name, price, description }: MenuItemProps) => {
  return (
    <div className="py-6 px-6 w-full">
      <div className="font-edlavonia flex flex-row justify-between  items-center tracking-widest">
        <p className="text-3xl lg:text-5xl font-normal">{name}</p>
        <p className=" text-xl lg:text-3xl">€ {price}</p>
      </div>
      <p className="text-sm lg:text-base font-light">{description}</p>
    </div>
  );
};

export default MenuItem;
