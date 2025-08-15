export interface Restaurant {
  id: string;
  name: string;
  categories: Array<{ title: string }>;
  rating: number;
  price?: string;
  distance: number;
  image_url: string;
  is_closed: boolean;
  location: {
    display_address: string[];
  };
  review_count: number;
  url: string;
}
