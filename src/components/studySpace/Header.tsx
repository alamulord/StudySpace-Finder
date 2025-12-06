// import React from 'react';
// import { MapPin } from 'lucide-react';

// interface HeaderProps {
//   title: string;
//   subtitle: string;
//   efficiency: string;
// }

// export const Header: React.FC<HeaderProps> = ({ title, subtitle, efficiency }) => (
//   <div className="bg-white shadow-sm border-b border-gray-200">
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
//             <MapPin className="w-8 h-8 text-indigo-600" />
//             {title}
//           </h1>
// import React from 'react';
// import { MapPin, Info } from 'lucide-react';

// interface HeaderProps {
//   title: string;
//   subtitle: string;
// }

// export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
//   <div className="bg-white shadow-sm">
//     <div className="max-w-7xl mx-auto px-4 py-4">
//       <div className="flex items-center">
//         <div className="bg-blue-100 p-2 rounded-lg mr-3">
//           <MapPin className="h-5 w-5 text-blue-600" />
//         </div>
//         <div>
//           <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
//           <p className="text-sm text-gray-500">{subtitle}</p>
//         </div>
//       </div>
//     </div>
//     <div className="mt-4 sm:mt-0">
//       <div className="bg-indigo-900 rounded-lg p-4 max-w-xs w-full">
//         <div className="flex items-start">
//           <div className="flex-shrink-0">
//             <Info className="h-5 w-5 text-white" />
//           </div>
//           <div className="ml-3">
//             <h3 className="text-sm font-medium text-white">Algorithm Complexity Analysis</h3>
//             <div className="mt-1 text-xs text-indigo-200 space-y-0.5">
//               <p className="flex items-center">
//                 <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
//                 Search Module: O(n)
//               </p>
//               <p className="flex items-center">
//                 <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
//                 Filter & Sort: O(n log n)
//               </p>
//               <p className="flex items-center">
//                 <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
//                 Recommendation: O(n log n)
//               </p>
//                 <div className="mt-1 text-xs text-indigo-200 space-y-0.5">
//                   <p className="flex items-center">
//                     <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
//                     Search Module: O(n)
//                   </p>
//                   <p className="flex items-center">
//                     <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
//                     Filter & Sort: O(n log n)
//                   </p>
//                   <p className="flex items-center">
//                     <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
//                     Recommendation: O(n log n)
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Header;
import React from 'react';
import { MapPin } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <div className="bg-white shadow-sm p-5">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div>
        <div >
          <div className='flex items-center'>
            <MapPin className="h-8 w-8 mr-2 text-blue-600"/>
            <h1 className="text-3xl font-bold text-gray-900 block">
            {title}</h1>
          </div>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        </div>
        <div >
          <h1 className='text-md text-gray-500 block text-end'>Algorithm Efficiency</h1>
          <p className='text-lg text-end text-indigo-600 block font-semibold'>O(n log n)</p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;