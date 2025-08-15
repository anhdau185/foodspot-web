import { vietnamCities } from "@/data/cities";
import { City } from "@/types/city";
import { MapPin } from "lucide-react";
import React from "react";

interface CitySelectorProps {
  selectedCity: City;
  onCityChange: (city: City) => void;
}

export const CitySelector: React.FC<CitySelectorProps> = ({
  selectedCity,
  onCityChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Which city are you dining in?
      </label>
      <div className="relative">
        <select
          value={selectedCity.name}
          onChange={(e) => {
            const city = vietnamCities.find((c) => c.name === e.target.value);
            if (city) onCityChange(city);
          }}
          className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
        >
          {vietnamCities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};
