import { StudySpace, SpaceFilters, SortOption } from '../types/studySpace.types';

// Time Complexity: O(n log n) for sort + O(n) for filter = O(n log n)
export const sortSpaces = (spaces: StudySpace[], sortBy: SortOption): StudySpace[] => {
  const sorted = [...spaces].sort((a, b) => {
    switch(sortBy) {
      case 'availability':
        return b.available - a.available;
      case 'distance':
        return a.distance - b.distance;
      case 'waitTime':
        return a.avgWaitTime - b.avgWaitTime;
      default:
        return 0;
    }
  });
  return sorted;
};

// Filter algorithm with O(n) linear scan
export const filterSpaces = (spaces: StudySpace[], filters: SpaceFilters): StudySpace[] => {
  return spaces.filter(space => {
    if (filters.minAvailable && space.available < filters.minAvailable) return false;
    if (filters.maxDistance && space.distance > filters.maxDistance) return false;
    if (filters.amenity && !space.amenities.includes(filters.amenity)) return false;
    return true;
  });
};

// Time Complexity: O(n) linear search with string matching
export const searchSpaces = (spaces: StudySpace[], query: string): StudySpace[] => {
  if (!query.trim()) return spaces;
  
  const lowerQuery = query.toLowerCase();
  return spaces.filter(space => 
    space.name.toLowerCase().includes(lowerQuery) ||
    space.building.toLowerCase().includes(lowerQuery)
  );
};

// Time Complexity: O(n) for scoring + O(n log n) for sorting
export const recommendSpaces = (spaces: StudySpace[]): StudySpace[] => {
  const calculateScore = (space: StudySpace): number => {
    const availabilityScore = (space.available / space.capacity) * 40;
    const proximityScore = (1 - Math.min(space.distance, 1)) * 30;
    const waitTimeScore = (1 - Math.min(space.avgWaitTime / 30, 1)) * 30;
    return availabilityScore + proximityScore + proximityScore;
  };

  return spaces
    .map(space => ({ ...space, score: calculateScore(space) }))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 3);
};

// Process spaces with search, filter, and sort
export const processSpaces = (
  spaces: StudySpace[], 
  searchQuery: string, 
  filters: SpaceFilters, 
  sortBy: SortOption
): StudySpace[] => {
  let result = [...spaces];
  
  // Apply search
  if (searchQuery.trim()) {
    result = searchSpaces(result, searchQuery);
  }
  
  // Apply filters
  result = filterSpaces(result, filters);
  
  // Apply sorting
  return sortSpaces(result, sortBy);
};
