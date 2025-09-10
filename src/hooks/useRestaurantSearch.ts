import { searchYelpRestaurants } from "@/lib/api/yelp";
import { City } from "@/types/city";
import { Restaurant } from "@/types/restaurant";
import { useCallback, useState } from "react";

export const useRestaurantSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((errorMessage: string) => {
    if (errorMessage.includes("API key")) {
      setError("API configuration issue. Please check your Yelp API key.");
    } else if (
      errorMessage.includes("Failed to fetch") ||
      errorMessage.includes("NetworkError")
    ) {
      setError(
        "Network error. Please check your internet connection and try again."
      );
    } else if (errorMessage.includes("500")) {
      setError("Server error. Please try again later.");
    } else {
      setError("Unable to fetch restaurant data. Please try again.");
    }
  }, []);

  const searchRestaurants = useCallback(
    async (
      city: City,
      cuisine: string,
      dietary: string,
      priceRange: number
    ): Promise<Restaurant[]> => {
      setIsLoading(true);
      setError(null);

      try {
        const restaurants = await searchYelpRestaurants(
          city,
          cuisine,
          dietary,
          priceRange
        );

        if (restaurants.length > 0) {
          console.log(`✅ Yelp API returned ${restaurants.length} restaurants`);
          return restaurants;
        } else {
          console.log("⚠️ Yelp API returned no results");
          setError(
            "No restaurants found matching your criteria. Try adjusting your filters."
          );
          return [];
        }
      } catch (apiError) {
        console.error("❌ Yelp API failed:", apiError);

        const errorMessage =
          apiError instanceof Error
            ? apiError.message
            : "Unknown error occurred";

        handleError(errorMessage);

        return [];
      } finally {
        setIsLoading(false);
      }
    },
    [handleError]
  );

  return { searchRestaurants, isLoading, error };
};
