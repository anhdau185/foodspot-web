import { City } from "@/types/city";
import { Restaurant } from "@/types/restaurant";
import { compact } from "lodash-es";

interface YelpSearchParams {
  latitude: number;
  longitude: number;
  categories?: string;
  limit?: number;
  sort_by?: string;
  price?: string;
  attributes?: string;
}

// Map cuisine names to Yelp categories
const getCuisineCategory = (cuisine: string): string => {
  const cuisineMap: Record<string, string> = {
    "All Cuisines": "restaurants",
    Italian: "italian",
    Thai: "thai",
    Japanese: "japanese",
    American: "tradamerican",
    Mexican: "mexican",
    Chinese: "chinese",
    Vietnamese: "vietnamese",
    Korean: "korean",
    French: "french",
    Indian: "indpak",
    Mediterranean: "mediterranean",
  };

  return cuisineMap[cuisine] || "restaurants";
};

// Map dietary restrictions to Yelp attributes
const getDietaryCategory = (dietary: string): string => {
  const dietaryMap: Record<string, string> = {
    Vegetarian: "vegetarian",
    Vegan: "vegan",
    "Gluten-Free": "gluten_free",
  };

  return dietaryMap[dietary] || "";
};

// Convert price range to Yelp price format
// Generate comma-separated list: 1,2,3 for priceRange=3
const getPriceFilter = (priceRange: number): string => {
  return Array.from({ length: priceRange }, (_, i) => (i + 1).toString()).join(
    ","
  );
};

export const searchYelpRestaurants = async (
  city: City,
  cuisine: string,
  dietary: string,
  priceRange: number
): Promise<Restaurant[]> => {
  const params: YelpSearchParams = {
    latitude: city.coordinates.lat,
    longitude: city.coordinates.lng,
    categories: compact([
      getCuisineCategory(cuisine),
      getDietaryCategory(dietary),
    ]).join(","),
    limit: 20,
    sort_by: "rating",
  };

  if (priceRange < 4) {
    params.price = getPriceFilter(priceRange);
  }

  try {
    const response = await fetch("/api/yelp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    const data = await response.json();
    return data.businesses || [];
  } catch (error) {
    console.error("Error searching Yelp restaurants:", error);
    throw error;
  }
};
