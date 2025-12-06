import React from 'react';
import { TrendingUp, Users } from 'lucide-react';
import { StudySpace } from '../../types/studySpace.types';
import SpaceCard from './SpaceCard';

interface RecommendationSectionProps {
  recommendations: StudySpace[];
}

export const RecommendationSection: React.FC<RecommendationSectionProps> = ({ recommendations }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <TrendingUp className="w-5 h-5 text-indigo-600" />
      <h2 className="text-xl font-bold text-gray-900">Top Recommendations for You</h2>
      <span className="text-sm text-gray-500">(Smart Algorithm: Multi-factor scoring)</span>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {recommendations.map((space, idx) => (
        <div key={space.id} className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-white text-indigo-600 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {idx + 1}
              </div>
              <div className="text-xs bg-white/20 px-2 py-1 rounded">
                Score: {space.score?.toFixed(0) || 'N/A'}
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-1">{space.name}</h3>
          <p className="text-sm text-indigo-100 mb-3">{space.building}</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              
                <Users className="w-4 h-4"/>
              
              {space.available} free
            </div>
            <div className="flex items-center gap-1">
              <span className="text-indigo-200">📍</span>
              {space.distance}km
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
   
);

export default RecommendationSection;
