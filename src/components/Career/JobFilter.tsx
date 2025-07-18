import { SearchIcon, ChevronDown } from "lucide-react";

type Props = {
  onSearch: (query: string) => void;
  onExperienceChange: (experience: string) => void;
  onCategoryChange: (category: string) => void;
};

export default function JobFilters({
  onSearch,
  onExperienceChange,
  onCategoryChange,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Search input with icon */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Job"
          onChange={(e) => onSearch(e.target.value)}
          className="h-12 w-full px-4 pr-10 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 shadow-none bg-white"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <SearchIcon size={20} />
        </div>
      </div>

      {/* Experience select */}
      <div className="relative">
        <select
          onChange={(e) => onExperienceChange(e.target.value)}
          defaultValue=""
          className="h-12 w-full px-4 pr-10 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 shadow-none bg-white appearance-none"
        >
          <option value="" disabled hidden>
            Experience
          </option>
          <option value="6 Months">6 Months</option>
          <option value="1 Years">1 Year</option>
          <option value="2 Years">2 Years</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      {/* Category select */}
      <div className="relative">
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          defaultValue=""
          className="h-12 w-full px-4 pr-10 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 shadow-none bg-white appearance-none"
        >
          <option value="" disabled hidden>
            Category
          </option>
          <option value="development">Development</option>
          <option value="management">Management</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}
