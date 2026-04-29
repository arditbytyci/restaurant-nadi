import { Size } from "@/types/menu";

type MenuItemProps = {
  id: string;
  name: string;
  price?: number;
  description?: string;
  allergen?: number[];
  size?: Size;
};

const MenuItem = ({
  id,
  name,
  price,
  description,
  allergen,
  size,
}: MenuItemProps) => {
  return (
    // <div className="p-6 w-full">
    // <div className="flex flex-row justify-between  items-center">
    //   <p className="text-[4svh] font-normal">
    //     {name}{" "}
    //     <span className="text-[2svh]">
    //       [{[...(allergen ?? [])].sort((a, b) => a - b).join(" , ")}]
    //     </span>
    //   </p>

    //   <p className=" text-[4svh]">€ {price}</p>
    // </div>
    // <p className="text-[2.5svh] font-light w-1/2">{description}</p>
    // </div>
    <>
      <div className="px-4">
        <div className="flex items-baseline gap-4">
          <p className="text-[3.5svh] font-semibold flex-1">{name} </p>
          {price && (
            <>
              <span className="font-bold text-[4svh] shrink-0">—</span>
              <p className=" text-[4svh] font-semibold shrink-0">€ {price}</p>
            </>
          )}
        </div>

        {size && (
          <div className="flex flex-row gap-6 mt-1">
            {size.sizes.map((s, i) => (
              <span key={s.label} className="text-[2.5svh]">
                {s.label} € {s.price}
                {i < size.sizes.length - 1 && (
                  <span className="ml-6 opacity-30">|</span>
                )}
              </span>
            ))}
          </div>
        )}

        <p className="text-[2.5svh] font-light ">{description}</p>
        <span className="text-[2.2svh] font-light">
          [{[...(allergen ?? [])].sort((a, b) => a - b).join(" , ")}]
        </span>
      </div>
    </>
  );
};

export default MenuItem;
