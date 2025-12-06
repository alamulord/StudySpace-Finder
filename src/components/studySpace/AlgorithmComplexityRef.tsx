const AlgorithmComplexityRef = () => {
    return (  <div className="mt-8 bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Algorithm Complexity Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-2">Search Module</div>
              <div className="text-indigo-200">Time: O(n)</div>
              <div className="text-indigo-200">Space: O(1)</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Filter & Sort Module</div>
              <div className="text-indigo-200">Time: O(n log n)</div>
              <div className="text-indigo-200">Space: O(n)</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Recommendation Engine</div>
              <div className="text-indigo-200">Time: O(n log n)</div>
              <div className="text-indigo-200">Best Case: Ω(n)</div>
            </div>
          </div>
        </div> );
}
 
export default AlgorithmComplexityRef;