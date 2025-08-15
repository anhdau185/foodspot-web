export const getFavorites = (): Set<string> => {
  if (typeof window === "undefined") return new Set();

  const saved = localStorage.getItem("dining-favorites");
  return saved ? new Set(JSON.parse(saved)) : new Set();
};

export const saveFavorites = (favorites: Set<string>): void => {
  if (typeof window === "undefined") return;

  localStorage.setItem("dining-favorites", JSON.stringify([...favorites]));
};

export const toggleFavorite = (
  restaurantId: string,
  favorites: Set<string>
): Set<string> => {
  const newFavorites = new Set(favorites);
  if (newFavorites.has(restaurantId)) {
    newFavorites.delete(restaurantId);
  } else {
    newFavorites.add(restaurantId);
  }
  saveFavorites(newFavorites);
  return newFavorites;
};
