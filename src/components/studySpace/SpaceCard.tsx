// import React from 'react';
// import { MapPin, Clock, Users, Wifi, Utensils, Volume2, Zap, Navigation } from 'lucide-react';
// import { StudySpace } from '../../types/studySpace.types';

// interface SpaceCardProps {
//   space: StudySpace;
//   showDetails?: boolean;
//   rank?: number;
// }

// const amenityIcons = {
//   wifi: <Wifi className="w-4 h-4" />,
//   quiet: <Volume2 className="w-4 h-4" />,
//   refreshments: <Utensils className="w-4 h-4" />,
//   charging: <Zap className="w-4 h-4" />,
//   whiteboard: <span className="text-xs font-medium">WB</span>,
//   collaborative: <span className="text-xs font-medium">COLLAB</span>
// };

// export const SpaceCard: React.FC<SpaceCardProps> = ({ space, showDetails = true, rank }) => {
//   const getAvailabilityColor = (available: number, capacity: number) => {
//     const ratio = available / capacity;
//     if (ratio > 0.5) return 'text-green-600 bg-green-50';
//     if (ratio > 0.2) return 'text-yellow-600 bg-yellow-50';
//     return 'text-red-600 bg-red-50';
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//         <div className="flex-1">
//           <div className="flex items-start gap-3">
//             <div className="bg-indigo-100 p-3 rounded-lg">
//               <MapPin className="w-6 h-6 text-indigo-600" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">{space.name}</h3>
//               <p className="text-gray-600">{space.building}</p>
//               <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
//                 <Clock className="w-4 h-4" />
//                 {space.hours}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-end gap-2">
//           <div className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(space.available, space.capacity)}`}>
//             {space.available} of {space.capacity} seats available
//           </div>
//           {rank !== undefined && space.score !== undefined && (
//             <div className="text-sm text-indigo-600">
//               <span className="font-medium">Score:</span> {space.score.toFixed(1)}
//             </div>
//           )}
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <Navigation className="w-4 h-4" />
//             {space.distance} km away
//           </div>
//         </div>
//       </div>

//       {showDetails && (
//         <div className="mt-4 pt-4 border-t border-gray-100">
//           <div className="flex flex-wrap gap-2">
//             {space.amenities.map((amenity) => (
//               <div key={amenity} className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full text-sm">
//                 {amenityIcons[amenity as keyof typeof amenityIcons] || amenity}
//                 <span className="capitalize">{amenity}</span>
//               </div>
//             ))}
//           </div>
//           <div className="mt-3 text-sm text-gray-500">
//             Avg. wait time: <span className="font-medium">{space.avgWaitTime} min</span>
//           </div>
//         </div>
import React from 'react';
import { MapPin, Clock, Wifi, Zap, Volume2, Utensils, Users } from 'lucide-react';
import { StudySpace } from '../../types/studySpace.types';

interface SpaceCardProps {
  space: StudySpace;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  const getAvailabilityColor = (available: number) => {
    const ratio = available / space.capacity;
    if (ratio > 0.3) return 'text-green-600';
    if (ratio > 0.1) return 'text-yellow-600';
    return 'text-red-600';
  };

  const amenityIcons = {
    wifi: <Wifi className="w-4 h-4" />,
    quiet: <Volume2 className="w-4 h-4" />,
    refreshments: <Utensils className="w-4 h-4" />,
    charging: <Zap className="w-4 h-4" />,
    whiteboard: <span className="text-xs font-medium">WB</span>,
    collaborative: <span className="text-xs font-medium">COLLAB</span>
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 mb-4">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-4">
            <div className="flex items-start gap-3">
              <div className="bg-indigo-100 p-2 rounded-lg flex-shrink-0">
                <MapPin className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{space.name}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{space.building}</p>
                
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>{space.hours}</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {space.amenities.map((amenity) => (
                    <span 
                      key={amenity} 
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200"
                    >
                      {amenityIcons[amenity as keyof typeof amenityIcons] || amenity}
                      <span className="capitalize">{amenity}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className={`text-center mb-2`}>
              <div className={`text-2xl font-bold ${getAvailabilityColor(space.available)}`}>
                {space.available}
              </div>
              <div className="text-xs text-gray-500">of {space.capacity} free</div>
            </div>
            
            <div className="text-xs text-gray-500 mt-1">
              {space.distance} km away
            </div>
            
            <div className="text-xs text-gray-500 mt-1">
              ~{space.avgWaitTime} min wait
            </div>
            
            <button className="mt-3 flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
              <MapPin className="w-4 h-4" />
              View Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;