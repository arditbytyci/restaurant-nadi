export const formatPriceAmount = (price: number | string) => {
  const value =
    typeof price === "number"
      ? price
      : Number.parseFloat(price.replace(",", "."));

  if (!Number.isFinite(value)) {
    return String(price);
  }

  return new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatMenuPrice = (price: number | string) =>
  `€ ${formatPriceAmount(price)}`;
