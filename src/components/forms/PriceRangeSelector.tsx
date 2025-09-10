import { useAppStore } from "@/lib/stores/useAppStore";

export const PriceRangeSelector = () => {
  const { priceRange, setPriceRange } = useAppStore();

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        What&apos;s your budget? (Max: {"$".repeat(priceRange)})
      </label>
      <input
        type="range"
        min="1"
        max="4"
        value={priceRange}
        onChange={(e) => setPriceRange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>$</span>
        <span>$$</span>
        <span>$$$</span>
        <span>$$$$</span>
      </div>
    </div>
  );
};
