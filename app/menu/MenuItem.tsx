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
    <div className="px-2 lg:px-4 py-2 border-b border-secondary/10 lg:border-none">
      {/* Name + price */}
      <div className="flex items-baseline gap-2 lg:gap-4">
        <p className="text-[2.5svh] lg:text-[3.5svh] font-semibold flex-1">
          {name}
        </p>
        {price && (
          <>
            {/* <span className="font-bold  text-[2.5svh] lg:text-[4svh] shrink-0">
              —
            </span> */}
            <p className="text-[2.5svh] lg:text-[4svh] font-semibold shrink-0">
              € {price}
            </p>
          </>
        )}
      </div>

      {/* Size variants */}
      {size && (
        <div className="flex flex-row gap-4 mt-1 flex-wrap">
          {size.sizes.map((s, i) => (
            <span key={s.label} className="text-[2svh] lg:text-[2.5svh]">
              {s.label} — {s.price} €
              {i < size.sizes.length - 1 && <span className="ml-4">|</span>}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="text-[2svh] lg:text-[2.5svh] font-light mt-1">
          {description}
        </p>
      )}

      {/* Allergens */}
      {allergen && allergen.length > 0 && (
        <span className="text-[1.8svh] lg:text-[2.2svh] font-light">
          [{[...allergen].sort((a, b) => a - b).join(" , ")}]
        </span>
      )}
    </div>
  );
};

export default MenuItem;
