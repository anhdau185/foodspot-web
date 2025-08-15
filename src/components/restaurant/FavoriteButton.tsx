import { Heart } from "lucide-react";
import React from "react";

interface FavoriteButtonProps {
  restaurantId: string;
  isFavorite: boolean;
  onToggleFavorite: (restaurantId: string) => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  restaurantId,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <button
      onClick={() => onToggleFavorite(restaurantId)}
      className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
    >
      <Heart
        className={`w-5 h-5 ${
          isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  );
};
