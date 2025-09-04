import { NextRequest, NextResponse } from "next/server";

const YELP_API_URL = "https://api.yelp.com/v3/businesses/search";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      latitude,
      longitude,
      categories,
      limit,
      sort_by,
      price,
      attributes,
    } = body;

    const apiKey = process.env.YELP_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Yelp API key not configured" },
        { status: 500 }
      );
    }

    const params = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      categories: categories || "restaurants",
      limit: (limit || 20).toString(),
      sort_by: sort_by || "rating",
    });

    if (price) {
      params.append("price", price);
    }

    if (attributes) {
      params.append("attributes", attributes);
    }

    const response = await fetch(`${YELP_API_URL}?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Yelp API error: ${response.status}`);
    }

    const data = await response.json();
    console.log(response.ok, data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Yelp API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch restaurant data" },
      { status: 500 }
    );
  }
}
