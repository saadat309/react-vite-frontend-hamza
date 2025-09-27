import React from "react";

const AddInfo = () => {
  return (
    <div className="max-w-3xl my-10 mx-auto p-6 space-y-7 bg-gray-200 rounded-2xl">
      {/* Row */}
      <div className="flex items-center">
        <span className="text-black font-medium">Weight</span>
        <div className="flex-1 border-b border-red-500 mx-4"></div>
        <span className="text-black italic">1 kg</span>
      </div>

      {/* Row */}
      <div className="flex items-center">
        <span className="text-black font-medium">Dimensions</span>
        <div className="flex-1 border-b border-red-500 mx-4"></div>
        <span className="text-black italic">25 * 125 * 25 cm</span>
      </div>

      {/* Row */}
      <div className="flex items-center">
        <span className="text-black font-medium">Brand</span>
        <div className="flex-1 border-b border-red-500 mx-4"></div>
        <span className="text-black italic">Digimate</span>
      </div>

      {/* Row */}
      <div className="flex items-center">
        <span className="text-black font-medium">Color</span>
        <div className="flex-1 border-b border-red-500 mx-4"></div>
        <span className="text-black italic">Black, Green, Red</span>
      </div>
    </div>
  );
};

export default AddInfo;
