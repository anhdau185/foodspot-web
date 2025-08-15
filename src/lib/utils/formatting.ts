export const formatDistance = (meters: number): string => {
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  }
  return `${(meters / 1000).toFixed(1)}km`;
};

export const getPriceDisplay = (price?: string): string => {
  return price || "$";
};

export const convertPriceToNumber = (price?: string): number => {
  if (!price) return 1;
  return price.length; // $ = 1, $$ = 2, $$$ = 3, $$$$ = 4
};
