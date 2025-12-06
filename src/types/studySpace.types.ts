export interface Coordinates {
  lat: number;
  lng: number;
}

export interface StudySpace {
  id: number;
  name: string;
  building: string;
  capacity: number;
  available: number;
  distance: number;
  amenities: string[];
  hours: string;
  coords: Coordinates;
  avgWaitTime: number;
  score?: number;
}

export interface SpaceFilters {
  minAvailable: number;
  maxDistance: number;
  amenity: string;
}

export type SortOption = 'availability' | 'distance' | 'waitTime';

export const INITIAL_SPACES: StudySpace[] = [
  {
    id: 1,
    name: "Main Library - 3rd Floor",
    building: "Central Library",
    capacity: 150,
    available: 45,
    distance: 0.2,
    amenities: ["wifi", "quiet", "charging"],
    hours: "24/7",
    coords: { lat: 40.7128, lng: -74.0060 },
    avgWaitTime: 5
  },
  {
    id: 2,
    name: "Engineering Study Hall",
    building: "Engineering Complex",
    capacity: 80,
    available: 12,
    distance: 0.5,
    amenities: ["wifi", "whiteboard", "charging"],
    hours: "6AM-12AM",
    coords: { lat: 40.7138, lng: -74.0070 },
    avgWaitTime: 15
  },
  {
    id: 3,
    name: "Student Center Lounge",
    building: "Student Union",
    capacity: 60,
    available: 38,
    distance: 0.3,
    amenities: ["wifi", "refreshments", "collaborative"],
    hours: "7AM-11PM",
    coords: { lat: 40.7125, lng: -74.0055 },
    avgWaitTime: 3
  },
  {
    id: 4,
    name: "Science Building Study Rooms",
    building: "Science Complex",
    capacity: 40,
    available: 8,
    distance: 0.7,
    amenities: ["wifi", "quiet", "whiteboard"],
    hours: "7AM-10PM",
    coords: { lat: 40.7140, lng: -74.0065 },
    avgWaitTime: 20
  },
  {
    id: 5,
    name: "Business School Commons",
    building: "Business Building",
    capacity: 100,
    available: 55,
    distance: 0.4,
    amenities: ["wifi", "refreshments", "charging", "collaborative"],
    hours: "6AM-12AM",
    coords: { lat: 40.7130, lng: -74.0050 },
    avgWaitTime: 7
  },
  {
    id: 6,
    name: "Arts Library Reading Room",
    building: "Arts Center",
    capacity: 35,
    available: 2,
    distance: 0.6,
    amenities: ["wifi", "quiet"],
    hours: "8AM-10PM",
    coords: { lat: 40.7135, lng: -74.0075 },
    avgWaitTime: 25
  }
];
