import { Restaurant } from "@/types/restaurant";
import React from "react";
import { RestaurantCard } from "./RestaurantCard";

interface RestaurantListProps {
  restaurants: Restaurant[];
  favorites: Set<string>;
  onToggleFavorite: (restaurantId: string) => void;
  onResetPreferences: () => void;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  favorites,
  onToggleFavorite,
  onResetPreferences,
}) => {
  if (restaurants.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <p className="text-gray-600 mb-4">
          No restaurants match your criteria.
        </p>
        <button
          onClick={onResetPreferences}
          className="text-orange-500 hover:text-orange-600 font-medium"
        >
          Try different filters
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          isFavorite={favorites.has(restaurant.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};
