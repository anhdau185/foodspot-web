import { City } from "@/types/city";
import { useCallback, useState } from "react";

export const useCities = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (): Promise<City[]> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/cities");

      if (!response.ok) {
        throw new Error("Failed to fetch cites");
      }

      const data = await response.json();
      return data.cities ?? [];
    } catch (error) {
      setError((error as Error).message);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchData, isLoading, error };
};
