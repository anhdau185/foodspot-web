import { Badge } from "@/components/ui/Badge";
import { dietaryRestrictions } from "@/data/dietaryOptions";
import { useAppStore } from "@/lib/stores/useAppStore";
import { ChevronDown, ChevronUp } from "lucide-react";

export const DietarySelector = () => {
  const {
    selectedDietary,
    setSelectedDietary,
    showDietaryOptions,
    setShowDietaryOptions,
  } = useAppStore();

  return (
    <div>
      <button
        onClick={() => setShowDietaryOptions(!showDietaryOptions)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-sm font-medium text-gray-700">
          Any dietary restrictions?
        </span>
        {showDietaryOptions ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {showDietaryOptions && (
        <div className="grid grid-cols-2 gap-2 mt-3">
          {dietaryRestrictions.map((dietary) => (
            <button
              key={dietary}
              onClick={() => setSelectedDietary(dietary)}
              className={`p-3 text-sm rounded-lg border transition-all ${
                selectedDietary === dietary
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-700 border-gray-200 hover:border-green-300"
              }`}
            >
              {dietary}
            </button>
          ))}
        </div>
      )}

      {selectedDietary !== "None" && !showDietaryOptions && (
        <div className="mt-2">
          <Badge variant="success">{selectedDietary}</Badge>
        </div>
      )}
    </div>
  );
};
