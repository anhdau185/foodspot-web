export interface City {
  id: number;
  name: string;
  state: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  population: number;
  foodScene: {
    description: string;
    highlights: string[];
    specialties: string[];
    diversityScore: number;
  };
  yelpBusinessCount: number;
}
