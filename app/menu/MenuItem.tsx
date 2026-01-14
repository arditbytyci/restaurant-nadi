type MenuItemProps = {
  name: string;
  price: number | string;
  description?: string;
};

const MenuItem = ({ name, price, description }: MenuItemProps) => {
  return (
    <div className="py-4 px-4 w-full">
      <div className="font-edlavonia flex flex-row justify-between  items-center">
        <p className="text-xl font-normal">{name}</p>
        <p className="text-xl">€ {price}</p>
      </div>
      <p className="text-xs font-light">{description}</p>
    </div>
  );
};

export default MenuItem;
