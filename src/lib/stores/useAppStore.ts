import { City } from "@/types/city";
import { AppStep } from "@/types/preferences";
import { Restaurant } from "@/types/restaurant";
import { create } from "zustand";

interface AppState {
  // Navigation
  step: AppStep;
  setStep: (step: AppStep) => void;

  // Preferences
  cities: City[];
  setCities: (cities: City[]) => void;
  selectedCity: City | null;
  setSelectedCity: (city: City) => void;
  selectedCuisine: string;
  setSelectedCuisine: (cuisine: string) => void;
  selectedDietary: string;
  setSelectedDietary: (dietary: string) => void;
  showDietaryOptions: boolean;
  setShowDietaryOptions: (show: boolean) => void;
  priceRange: number;
  setPriceRange: (range: number) => void;

  // Results
  filteredRestaurants: Restaurant[];
  setFilteredRestaurants: (restaurants: Restaurant[]) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  // Favorites
  favorites: Set<string>;
  setFavorites: (favorites: Set<string>) => void;

  // Actions
  goBackToPreferences: () => void;
  resetPreferences: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Navigation
  step: "preferences",
  setStep: (step) => set({ step }),

  // Preferences
  cities: [],
  setCities: (cities) => set({ cities }),
  selectedCity: null,
  setSelectedCity: (selectedCity) => set({ selectedCity }),
  selectedCuisine: "All Cuisines",
  setSelectedCuisine: (selectedCuisine) => set({ selectedCuisine }),
  selectedDietary: "None",
  setSelectedDietary: (selectedDietary) => set({ selectedDietary }),
  showDietaryOptions: false,
  setShowDietaryOptions: (showDietaryOptions) => set({ showDietaryOptions }),
  priceRange: 3,
  setPriceRange: (priceRange) => set({ priceRange }),

  // Results
  filteredRestaurants: [],
  setFilteredRestaurants: (filteredRestaurants) => set({ filteredRestaurants }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  // Favorites
  favorites: new Set(),
  setFavorites: (favorites) => set({ favorites }),

  // Actions
  goBackToPreferences: () => {
    set({ step: "preferences" });
  },
  resetPreferences: () => {
    set({
      step: "preferences",
      selectedCity: null,
      selectedCuisine: "All Cuisines",
      selectedDietary: "None",
      showDietaryOptions: false,
      priceRange: 3,
    });
  },
}));
