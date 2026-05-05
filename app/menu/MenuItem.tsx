import { Size } from "@/types/menu";
import { formatMenuPrice } from "./formatPrice";

type MenuItemProps = {
  name: string;
  price?: number | string;
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
    <div className="border-b border-secondary/10 px-3 py-4 lg:border-none lg:px-4 lg:py-3">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-1 sm:gap-x-8">
        <p className="min-w-0 pr-1 text-[1.08rem] font-semibold leading-[1.22] sm:text-xl lg:text-3xl">
          {name}
        </p>
        {price !== undefined && (
          <p className="shrink-0 whitespace-nowrap pt-0.5 text-base font-medium leading-none tabular-nums tracking-wide sm:text-lg lg:pt-0 lg:text-3xl lg:font-normal lg:leading-tight">
            {formatMenuPrice(price)}
          </p>
        )}
      </div>

      {size && (
        <div className="mt-2 grid gap-1.5 sm:flex sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 lg:mt-1">
          {size.sizes.map((s, i) => (
            <span
              key={s.label}
              className="inline-flex items-baseline justify-between gap-4 text-xs sm:justify-start sm:text-sm lg:text-lg"
            >
              <span className="uppercase tracking-[0.08em] text-secondary/70">
                {s.label}
              </span>
              <span className="whitespace-nowrap font-medium tabular-nums text-secondary">
                {formatMenuPrice(s.price)}
              </span>
              {i < size.sizes.length - 1 && (
                <span className="hidden opacity-30 sm:inline">|</span>
              )}
            </span>
          ))}
        </div>
      )}

      {description && (
        <p className="mt-1 max-w-prose text-sm font-light leading-relaxed text-secondary/85 lg:text-lg">
          {description}
        </p>
      )}

      {allergen && allergen.length > 0 && (
        <span className="mt-1 block text-xs font-light text-secondary/70 lg:text-base">
          [{[...allergen].sort((a, b) => a - b).join(" , ")}]
        </span>
      )}
    </div>
  );
};

export default MenuItem;
