import React from "react";

const Additional = () => {
  return (
    <div className="m-6 space-y-8">
      {/* Text Section */}
      <div className="w-full bg-gray-200 p-10 rounded-xl flex ">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-blue-900">
            Full Width Text Section
          </h2>
          <p className="mt-4 text-gray-700">
            This is a full-width text section with margin and padding applied.
            It stretches across the entire container and keeps the text nicely
            centered inside.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full  rounded-xl overflow-hidden">
        <img
          src="src\assets\fading-blue-background.jpg"
          alt="section"
          className="w-full h-[450px] object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Additional;
