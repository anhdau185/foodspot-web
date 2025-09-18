import { Restaurant } from "@/types/restaurant";
import { AlertCircle, RefreshCw, Search } from "lucide-react";
import React from "react";
import { RestaurantCard } from "./RestaurantCard";

interface RestaurantListProps {
  restaurants: Restaurant[];
  favorites: Set<string>;
  onToggleFavorite: (restaurantId: string) => void;
  onResetPreferences: () => void;
  error?: string | null;
  isLoading?: boolean;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  favorites,
  onToggleFavorite,
  onResetPreferences,
  error,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">
          Finding restaurants for you...
        </p>
        <p className="text-gray-500 text-sm mt-2">
          This may take a few seconds
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{error}</p>
        <div className="space-y-3">
          <button
            onClick={onResetPreferences}
            className="w-full flex items-center justify-center space-x-2 bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <button
            onClick={onResetPreferences}
            className="w-full text-orange-500 hover:text-orange-600 font-medium text-sm"
          >
            Change Search Filters
          </button>
        </div>
      </div>
    );
  }

  if (restaurants.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          No restaurants found
        </h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          We couldn&apos;t find any restaurants matching your criteria. Try
          adjusting your filters for better results.
        </p>
        <div className="space-y-3">
          <button
            onClick={onResetPreferences}
            className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium cursor-pointer"
          >
            Adjust Filters
          </button>
          <div className="text-xs text-gray-500 space-y-1">
            <p>
              💡 <strong>Tips:</strong>
            </p>
            <p>• Try selecting &quot;All Cuisines&quot;</p>
            <p>• Increase your budget range</p>
            <p>• Remove dietary restrictions</p>
            <p>• Choose a different city</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Results count */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Found{" "}
          <span className="font-semibold text-orange-600">
            {restaurants.length}
          </span>{" "}
          restaurants for you
        </p>
      </div>

      {/* Restaurant cards */}
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          isFavorite={favorites.has(restaurant.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}

      {/* Show more results hint */}
      {restaurants.length >= 15 && (
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">
            Want different options?{" "}
            <button
              onClick={onResetPreferences}
              className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer"
            >
              Adjust your filters
            </button>
          </p>
        </div>
      )}
    </div>
  );
};
