import { City } from "@/types/city";
import { Restaurant } from "@/types/restaurant";

interface YelpSearchParams {
  latitude: number;
  longitude: number;
  categories?: string;
  limit?: number;
  sort_by?: string;
  price?: string;
  attributes?: string;
}

export const searchYelpRestaurants = async (
  city: City,
  cuisine: string,
  dietary: string,
  priceRange: number
): Promise<Restaurant[]> => {
  const params: YelpSearchParams = {
    latitude: city.lat,
    longitude: city.lng,
    categories:
      cuisine === "All Cuisines" ? "restaurants" : cuisine.toLowerCase(),
    limit: 20,
    sort_by: "rating",
  };

  // Add price filter
  if (priceRange < 4) {
    const priceFilter = Array.from(
      { length: priceRange },
      (_, i) => i + 1
    ).join(",");
    params.price = priceFilter;
  }

  // Add dietary restrictions as attributes
  if (dietary !== "None") {
    const attributeMap: Record<string, string> = {
      Vegetarian: "vegetarian_friendly",
      Vegan: "vegan_friendly",
      "Gluten-Free": "gluten_free",
    };
    params.attributes = attributeMap[dietary] || "";
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
