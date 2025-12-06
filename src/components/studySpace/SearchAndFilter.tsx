// import React, { useState } from 'react';
// import { Search, Filter } from 'lucide-react';
// import { SpaceFilters, SortOption } from '../../types/studySpace.types';

// interface SearchAndFilterProps {
//   searchQuery: string;
//   onSearchChange: (query: string) => void;
//   sortBy: SortOption;
//   onSortChange: (sortBy: SortOption) => void;
//   filters: SpaceFilters;
//   onFilterChange: (filters: SpaceFilters) => void;
//   totalSpaces: number;
//   filteredCount: number;
// }

// const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
//   searchQuery,
//   onSearchChange,
//   sortBy,
//   onSortChange,
//   filters,
//   onFilterChange,
//   totalSpaces,
//   filteredCount
// }) => {
//   const [showFilters, setShowFilters] = useState(false);

//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Search */}
//         <div className="md:col-span-2">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Search Spaces (O(n) complexity)
//           </label>
//           <div className="relative">
//             <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search by name or building..."
//               value={searchQuery}
//               onChange={(e) => onSearchChange(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//             />
//           </div>
//         </div>

//         {/* Sort */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Sort By (O(n log n) complexity)
//           </label>
//           <select
//             value={sortBy}
//             onChange={(e) => onSortChange(e.target.value as SortOption)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//           >
//             <option value="availability">Most Available</option>
//             <option value="distance">Nearest</option>
//             <option value="waitTime">Shortest Wait</option>
//           </select>
//         </div>
//       </div>

//       {/* Advanced Filters */}
//       <div className="mt-4">
//         <button
//           onClick={() => setShowFilters(!showFilters)}
//           className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
//         >
//           <Filter className="w-4 h-4" />
//           {showFilters ? 'Hide' : 'Show'} Advanced Filters
//         </button>

//         {showFilters && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Min Available Seats
//               </label>
//               <input
//                 type="number"
//                 min="0"
//                 value={filters.minAvailable}
//                 onChange={(e) => onFilterChange({...filters, minAvailable: parseInt(e.target.value) || 0})}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Max Distance (km)
//               </label>
//               <input
//                 type="number"
//                 min="0"
//                 step="0.1"
//                 value={filters.maxDistance}
//                 onChange={(e) => onFilterChange({...filters, maxDistance: parseFloat(e.target.value) || 5})}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Amenity Required
//               </label>
//               <select
//                 value={filters.amenity}
//                 onChange={(e) => onFilterChange({...filters, amenity: e.target.value})}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg"
//               >
//                 <option value="">All</option>
//                 <option value="wifi">WiFi</option>
//                 <option value="quiet">Quiet Zone</option>
//                 <option value="refreshments">Refreshments Available</option>
//                 <option value="charging">Charging Stations</option>
//               </select>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="mt-4 text-sm text-gray-600">
//         Showing {filteredCount} of {totalSpaces} spaces
import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { SpaceFilters, SortOption } from '../../types/studySpace.types';

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sortBy: SortOption) => void;
  filters: SpaceFilters;
  onFilterChange: (filters: SpaceFilters) => void;
  totalSpaces: number;
  filteredCount: number;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  filters,
  onFilterChange,
  totalSpaces,
  filteredCount
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Spaces (O(n) complexity)
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or building..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sort By (O(n log n) complexity)
          </label>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm appearance-none bg-white"
            >
              <option value="availability">Most Available</option>
              <option value="distance">Nearest</option>
              <option value="waitTime">Shortest Wait</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          <Filter className="w-4 h-4" />
          {showFilters ? 'Hide' : 'Show'} Advanced Filters
        </button>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Available Seats
              </label>
              <input
                type="number"
                min="0"
                value={filters.minAvailable}
                onChange={(e) => onFilterChange({...filters, minAvailable: parseInt(e.target.value) || 0})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Distance (km)
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={filters.maxDistance}
                onChange={(e) => onFilterChange({...filters, maxDistance: parseFloat(e.target.value) || 5})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amenity Required
              </label>
              <div className="relative">
                <select
                  value={filters.amenity}
                  onChange={(e) => onFilterChange({...filters, amenity: e.target.value})}
                  className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="">All</option>
                  <option value="wifi">WiFi</option>
                  <option value="quiet">Quiet Zone</option>
                  <option value="refreshments">Refreshments</option>
                  <option value="charging">Charging</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Showing {filteredCount} of {totalSpaces} spaces
      </div>
    </div>
  );
};

export default SearchAndFilter;