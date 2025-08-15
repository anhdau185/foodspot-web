export interface Preferences {
  city: string;
  cuisine: string;
  dietary: string;
  priceRange: number;
}

export type AppStep = "preferences" | "results";
