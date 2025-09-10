import { US_CITIES } from "@/data/cities";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const minDiversityScore = parseInt(
      searchParams.get("minDiversityScore") || "0"
    );
    const country = searchParams.get("country");

    let filteredCities = US_CITIES;

    if (country) {
      filteredCities = filteredCities.filter((city) =>
        city.country.toLowerCase().includes(country.toLowerCase())
      );
    }

    if (minDiversityScore > 0) {
      filteredCities = filteredCities.filter(
        (city) => city.foodScene.diversityScore >= minDiversityScore
      );
    }

    // Sort by diversity score and population
    filteredCities.sort((a, b) => {
      if (b.foodScene.diversityScore !== a.foodScene.diversityScore) {
        return b.foodScene.diversityScore - a.foodScene.diversityScore;
      }
      return b.population - a.population;
    });

    // Limit results
    const limitedCities = filteredCities.slice(0, limit);

    return Response.json({
      success: true,
      count: limitedCities.length,
      totalAvailable: US_CITIES.length,
      cities: limitedCities,
      metadata: {
        filters: {
          limit,
          minDiversityScore,
          country: country || "all",
        },
      },
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to fetch cities",
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
