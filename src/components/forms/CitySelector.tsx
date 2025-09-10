import { useAppStore } from "@/lib/stores/useAppStore";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

export const CitySelector = () => {
  const { cities, selectedCity, setSelectedCity } = useAppStore();

  useEffect(() => {
    if (cities.length > 0 && selectedCity == null) {
      setSelectedCity(cities[0]);
    }
  }, [cities]);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Which city are you dining in?
      </label>
      <div className="relative">
        <select
          value={selectedCity?.name}
          onChange={(e) => {
            const city = cities.find((c) => c.name === e.target.value);
            if (city) setSelectedCity(city);
          }}
          className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
        >
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};
