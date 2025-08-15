import { cuisineTypes } from "@/data/cuisines";
import React from "react";

interface CuisineSelectorProps {
  selectedCuisine: string;
  onCuisineChange: (cuisine: string) => void;
}

export const CuisineSelector: React.FC<CuisineSelectorProps> = ({
  selectedCuisine,
  onCuisineChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        What type of cuisine are you craving?
      </label>
      <div className="grid grid-cols-2 gap-2">
        {cuisineTypes.map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => onCuisineChange(cuisine)}
            className={`p-3 text-sm rounded-lg border transition-all ${
              selectedCuisine === cuisine
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-200 hover:border-orange-300"
            }`}
          >
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  );
};
