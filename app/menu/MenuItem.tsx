import { Size } from "@/types/menu";

type MenuItemProps = {
  name: string;
  price?: number;
  description?: string;
  allergen?: number[];
  size?: Size;
};

const MenuItem = ({
  name,
  price,
  description,
  allergen,
  size,
}: MenuItemProps) => {
  return (
    <div className="px-2 lg:px-4 py-2 border-b border-secondary/10 lg:border-none">
      <div className="flex items-baseline gap-2 lg:gap-4">
        <p className="flex-1 text-lg font-semibold sm:text-xl lg:text-3xl">
          {name}
        </p>
        {price !== undefined && (
          <p className="shrink-0 text-lg font-normal sm:text-xl lg:text-3xl">
            € {price}
          </p>
        )}
      </div>

      {size && (
        <div className="flex flex-row gap-4 mt-1 flex-wrap">
          {size.sizes.map((s, i) => (
            <span key={s.label} className="text-sm lg:text-lg">
              {s.label} — {s.price} €
              {i < size.sizes.length - 1 && <span className="ml-4">|</span>}
            </span>
          ))}
        </div>
      )}

      {description && (
        <p className="mt-1 text-sm font-light leading-relaxed lg:text-lg">
          {description}
        </p>
      )}

      {allergen && allergen.length > 0 && (
        <span className="text-xs font-light lg:text-base">
          [{[...allergen].sort((a, b) => a - b).join(" , ")}]
        </span>
      )}
    </div>
  );
};

export default MenuItem;
