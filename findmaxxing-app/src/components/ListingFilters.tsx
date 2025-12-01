import { ListFilter, ArrowUpDown } from "lucide-react";

export type SortBy = "time" | "alpha";
export type SortOrder = "asc" | "desc";
export type TimeFilter = "all" | "1h" | "24h" | "7d";
export type CategoryFilter = number | "all";

const CATEGORY_OPTIONS = [
  { id: "all", label: "All categories" },
  { id: 1, label: "Keys" },
  { id: 2, label: "Cards/ID" },
  { id: 3, label: "Water Bottle" },
  { id: 4, label: "Jewelry" },
  { id: 5, label: "Headphones" },
  { id: 6, label: "Wallet" },
  { id: 7, label: "Tech" },
  { id: 99, label: "Other" },
] as const;

type ListingFiltersProps = {
  sortBy: SortBy;
  sortOrder: SortOrder;
  categoryFilter: CategoryFilter;
  timeFilter: TimeFilter;
  onChangeSortBy: (v: SortBy) => void;
  onChangeSortOrder: (v: SortOrder) => void;
  onChangeCategoryFilter: (v: CategoryFilter) => void;
  onChangeTimeFilter: (v: TimeFilter) => void;
};

export function ListingFilters({
  sortBy,
  sortOrder,
  categoryFilter,
  timeFilter,
  onChangeSortBy,
  onChangeSortOrder,
  onChangeCategoryFilter,
  onChangeTimeFilter,
}: ListingFiltersProps) {
  return (
    <div className="w-full flex flex-wrap items-center gap-3 justify-between rounded-xl border border-green-200 bg-green-50/70 px-3 py-2 mb-4">
      {/* Left side: label */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-green-900">
        <ListFilter className="h-4 w-4" />
        <span className="font-medium">Filter &amp; sort listings</span>
      </div>

      {/* Right side: controls */}
      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
        {/* Category filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-green-800/80">Category</span>
          <select
            value={categoryFilter === "all" ? "all" : String(categoryFilter)}
            onChange={(e) =>
              onChangeCategoryFilter(
                e.target.value === "all" ? "all" : Number(e.target.value)
              )
            }
            className="rounded-md border border-green-300 bg-white px-2 py-1 text-xs sm:text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.id} value={String(opt.id)}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Time filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-green-800/80">Time</span>
          <select
            value={timeFilter}
            onChange={(e) => onChangeTimeFilter(e.target.value as TimeFilter)}
            className="rounded-md border border-green-300 bg-white px-2 py-1 text-xs sm:text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All</option>
            <option value="1h">Last 1 hr</option>
            <option value="24h">Last 24 hrs</option>
            <option value="7d">Last 7 days</option>
          </select>
        </div>

        {/* Sort controls */}
        <div className="flex items-center gap-1.5">
          <span className="text-green-800/80">Sort</span>

          <select
            value={sortBy}
            onChange={(e) => onChangeSortBy(e.target.value as SortBy)}
            className="rounded-md border border-green-300 bg-white px-2 py-1 text-xs sm:text-sm text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="time">Time</option>
            <option value="alpha">Alphabetical</option>
          </select>

          <button
            type="button"
            onClick={() =>
              onChangeSortOrder(sortOrder === "asc" ? "desc" : "asc")
            }
            className="inline-flex items-center gap-1 rounded-md border border-green-300 bg-white px-2 py-1 text-xs sm:text-sm text-green-900 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <ArrowUpDown className="h-3 w-3" />
            <span>{sortOrder === "asc" ? "Asc" : "Desc"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
