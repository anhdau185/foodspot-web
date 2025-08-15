import { Badge } from "@/components/ui/Badge";
import { formatDistance, getPriceDisplay } from "@/lib/utils/formatting";
import { Restaurant } from "@/types/restaurant";
import { DollarSign, MapPin, Star } from "lucide-react";
import React from "react";
import { FavoriteButton } from "./FavoriteButton";

interface RestaurantCardProps {
  restaurant: Restaurant;
  isFavorite: boolean;
  onToggleFavorite: (restaurantId: string) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <FavoriteButton
          restaurantId={restaurant.id}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {restaurant.name}
          </h3>
          <Badge variant={!restaurant.is_closed ? "success" : "error"}>
            {!restaurant.is_closed ? "Open" : "Closed"}
          </Badge>
        </div>

        <p className="text-orange-600 font-medium text-sm mb-2">
          {restaurant.categories.map((cat) => cat.title).join(", ")}
        </p>

        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{restaurant.rating}</span>
            <span className="text-gray-400">({restaurant.review_count})</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4" />
            <span>{getPriceDisplay(restaurant.price)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{formatDistance(restaurant.distance)}</span>
          </div>
        </div>

        <p className="text-sm text-gray-700 mb-3">
          {restaurant.location.display_address.join(", ")}
        </p>
        <a
          href={restaurant.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors"
        >
          View on Yelp
        </a>
      </div>
    </div>
  );
};
