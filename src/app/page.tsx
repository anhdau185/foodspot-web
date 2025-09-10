"use client";

import { useRestaurantSearch } from "@/hooks/useRestaurantSearch";
import { useAppStore } from "@/lib/stores/useAppStore";
import { getFavorites, toggleFavorite } from "@/lib/utils/storage";
import { AlertCircle, Filter, Utensils } from "lucide-react";
import { useEffect } from "react";

// Components
import { CitySelector } from "@/components/forms/CitySelector";
import { CuisineSelector } from "@/components/forms/CuisineSelector";
import { DietarySelector } from "@/components/forms/DietarySelector";
import { PriceRangeSelector } from "@/components/forms/PriceRangeSelector";
import { RestaurantList } from "@/components/restaurant/RestaurantList";
import { Button } from "@/components/ui/Button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { useCities } from "@/hooks/useCities";

export default function HomePage() {
  const {
    step,
    setStep,
    setCities,
    selectedCity,
    selectedCuisine,
    selectedDietary,
    priceRange,
    filteredRestaurants,
    setFilteredRestaurants,
    favorites,
    setFavorites,
    goBackToPreferences,
  } = useAppStore();

  const { searchRestaurants, isLoading, error } = useRestaurantSearch();

  // Load favorites from localStorage on mount
  useEffect(() => {
    setFavorites(getFavorites());
  }, [setFavorites]);

  useEffect(() => {
    console.log(
      selectedCity?.name,
      selectedCuisine,
      selectedDietary,
      priceRange
    );
  }, [priceRange, selectedCity?.name, selectedCuisine, selectedDietary]);

  const { fetchData: fetchCities } = useCities();

  useEffect(() => {
    const handleFetchCities = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    handleFetchCities();
  }, []);

  const handleGenerateRecommendations = async () => {
    try {
      const restaurants = await searchRestaurants(
        selectedCity!,
        selectedCuisine,
        selectedDietary,
        priceRange
      );
      setFilteredRestaurants(restaurants);
      setStep("results");
    } catch (error) {
      console.error("Error generating recommendations:", error);
    }
  };

  const handleToggleFavorite = (restaurantId: string) => {
    const newFavorites = toggleFavorite(restaurantId, favorites);
    setFavorites(newFavorites);
  };

  if (step === "preferences") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
        <div className="max-w-md mx-auto pt-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              What Should I Eat?
            </h1>
            <p className="text-gray-600">
              Let&apos;s find your perfect dining spot
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <CitySelector />
            <CuisineSelector />
            <DietarySelector />
            <PriceRangeSelector />
            <Button
              size="lg"
              variant="primary"
              className="w-full"
              icon={isLoading ? undefined : Utensils}
              disabled={isLoading || selectedCity == null}
              onClick={handleGenerateRecommendations}
            >
              {isLoading ? <LoadingSpinner /> : "Find My Perfect Meal"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <div className="max-w-md mx-auto pt-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={goBackToPreferences}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <Filter className="w-4 h-4" />
            <span>Change Filters</span>
          </button>
          <h2 className="text-xl font-bold text-gray-800">Recommendations</h2>
        </div>

        {/* API Status Warning */}
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <p className="text-yellow-700 text-xs mt-1">{error}</p>
          </div>
        )}

        {/* Results */}
        <RestaurantList
          restaurants={filteredRestaurants}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onResetPreferences={goBackToPreferences}
        />
      </div>
    </div>
  );
}
