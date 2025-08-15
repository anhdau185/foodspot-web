import React from "react";

interface PriceRangeSelectorProps {
  priceRange: number;
  onPriceRangeChange: (range: number) => void;
}

export const PriceRangeSelector: React.FC<PriceRangeSelectorProps> = ({
  priceRange,
  onPriceRangeChange,
}) => {
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
        onChange={(e) => onPriceRangeChange(Number(e.target.value))}
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
