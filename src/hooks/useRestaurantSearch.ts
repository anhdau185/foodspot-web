import { mockRestaurants } from "@/data/mockRestaurants";
import { convertPriceToNumber } from "@/lib/utils/formatting";
import { City } from "@/types/city";
import { Restaurant } from "@/types/restaurant";
import { useCallback, useState } from "react";

export const useRestaurantSearch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const searchRestaurants = useCallback(
    async (
      city: City,
      cuisine: string,
      dietary: string,
      priceRange: number
    ): Promise<Restaurant[]> => {
      setIsLoading(true);

      // In production, this would call Yelp Fusion API
      // const yelpResponse = await searchYelpRestaurants(city, cuisine, dietary);

      // Simulate API call delay
      return new Promise((resolve) => {
        setTimeout(() => {
          let filtered = mockRestaurants;

          // Filter by cuisine
          if (cuisine !== "All Cuisines") {
            filtered = filtered.filter((r) =>
              r.categories.some((cat) =>
                cat.title.toLowerCase().includes(cuisine.toLowerCase())
              )
            );
          }

          // Filter by dietary restrictions (would be done via Yelp attributes in real API)
          if (dietary !== "None") {
            // This would be handled by Yelp's attributes parameter in production
            // For now, we'll show all results
          }

          filtered = filtered.filter(
            (r) => convertPriceToNumber(r.price) <= priceRange
          );

          // Sort by rating
          filtered = filtered.sort((a, b) => b.rating - a.rating);

          setIsLoading(false);
          resolve(filtered);
        }, 1000);
      });
    },
    []
  );

  return { searchRestaurants, isLoading };
};
