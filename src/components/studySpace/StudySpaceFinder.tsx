import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_SPACES } from '../../types/studySpace.types';
import { processSpaces, recommendSpaces } from '../../utils/spaceAlgorithms';
import Header from './Header';
import SearchAndFilter from './SearchAndFilter';
import SpaceCard from './SpaceCard';
import RecommendationSection from './RecommendationSection';
import AlgorithmComplexityRef from './AlgorithmComplexityRef';
import { StudySpace, SpaceFilters, SortOption } from '../../types/studySpace.types';

const StudySpaceFinder: React.FC = () => {
  const [spaces, setSpaces] = useState<StudySpace[]>(INITIAL_SPACES);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('availability');
  const [filters, setFilters] = useState<SpaceFilters>({
    minAvailable: 0,
    maxDistance: 5,
    amenity: ''
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSpaces(prev => prev.map(space => ({
        ...space,
        available: Math.max(0, Math.min(
          space.capacity,
          space.available + Math.floor(Math.random() * 10 - 5)
        ))
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Process spaces with search, filter, and sort
  const processedSpaces = useMemo(() => 
    processSpaces(spaces, searchQuery, filters, sortBy),
    [spaces, searchQuery, filters, sortBy]
  );

  // Calculate recommendations
  const recommendations = useMemo(() => 
    recommendSpaces(spaces), 
    [spaces]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="StudySpace Finder"
        subtitle="Find your perfect study spot in real-time"
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Recommentation Section */}
        <RecommendationSection recommendations={recommendations} />
        {/* Search and Filter */}

        <SearchAndFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          filters={filters}
          onFilterChange={setFilters}
          totalSpaces={spaces.length}
          filteredCount={processedSpaces.length}
        />

        {/* Study Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedSpaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
          
          {processedSpaces.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No study spaces found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setFilters({ minAvailable: 0, maxDistance: 5, amenity: '' });
                }}
                className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        <AlgorithmComplexityRef/>
      </main>
    </div>
  );
};

export default StudySpaceFinder;