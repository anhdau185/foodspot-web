import { Restaurant } from "@/types/restaurant";

export const mockRestaurants: Restaurant[] = [
  {
    id: "bamboo-garden-hcm",
    name: "Bamboo Garden Restaurant",
    categories: [{ title: "Thai" }],
    rating: 4.5,
    price: "$$",
    distance: 300,
    image_url:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
    is_closed: false,
    location: {
      display_address: ["123 Nguyen Hue St", "District 1, Ho Chi Minh City"],
    },
    review_count: 324,
    url: "https://yelp.com",
  },
  {
    id: "nonnas-kitchen-hcm",
    name: "Nonna's Italian Kitchen",
    categories: [{ title: "Italian" }],
    rating: 4.7,
    price: "$$$",
    distance: 500,
    image_url:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    is_closed: false,
    location: {
      display_address: ["456 Le Loi St", "District 1, Ho Chi Minh City"],
    },
    review_count: 189,
    url: "https://yelp.com",
  },
  {
    id: "burger-spot-hcm",
    name: "The Burger Spot",
    categories: [{ title: "American" }],
    rating: 4.2,
    price: "$$",
    distance: 400,
    image_url:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    is_closed: true,
    location: {
      display_address: ["789 Dong Khoi St", "District 1, Ho Chi Minh City"],
    },
    review_count: 267,
    url: "https://yelp.com",
  },
  {
    id: "sushi-zen-hcm",
    name: "Sushi Zen",
    categories: [{ title: "Japanese" }],
    rating: 4.6,
    price: "$$$",
    distance: 700,
    image_url:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    is_closed: false,
    location: {
      display_address: ["321 Pasteur St", "District 3, Ho Chi Minh City"],
    },
    review_count: 156,
    url: "https://yelp.com",
  },
];
