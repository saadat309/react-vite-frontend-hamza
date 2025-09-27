import React from "react";
import Additional from "./Additional";

const Description = () => {
  return (
    <div>
      <div className="m-5 mt-16 space-y-10">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold">
            The future is now.{" "}
            <span className="text-blue-600">New BePhone Pro</span>
          </h2>
        </div>

        {/* Section 1: text left, image right */}
        <div className="flex flex-col md:flex-row items-stretch w-full gap-8 md:h-[420px]">
          {/* Text column (gray, full-height) */}
          <div className="md:flex-1 bg-gray-200 p-10 flex items-center justify-center text-center md:text-left rounded-2xl">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-blue-900">
                Best performance
              </h3>
              <p className="mt-4 text-gray-700">
                Mauris fringilla sem lacus et urna. Nunc elementum. Phasellus
                ultrices, dui tellus, elementum vel, dignissim massa. Maecenas
                facilisis, quam placerat vehicula vitae, lorem.
              </p>
            </div>
          </div>

          {/* Image column */}
          <div className="md:flex-1 h-64 md:h-full rounded-xl overflow-hidden">
            <img
              src="src/assets/section 1.webp"
              alt="section 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Section 2: image left, text right */}
        <div className="flex flex-col md:flex-row items-stretch w-full gap-8 md:h-[420px]">
          {/* Image column */}
          <div className="md:flex-1 h-64 md:h-full rounded-xl overflow-hidden">
            <img
              src="src/assets/section 2.webp"
              alt="section 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text column (gray, full-height) */}
          <div className="md:flex-1 bg-gray-200 p-10 flex items-center justify-center text-center md:text-left rounded-2xl">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-blue-900">Great design</h3>
              <p className="mt-4 text-gray-700">
                Donec sit amet felis. Curabitur nunc. Pellentesque fermentum
                dolor. Aliquam quam lectus, facilisis auctor, ultrices ut,
                elementum vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
       <div>
        <Additional/>
      </div>
    </div>
  );
};

export default Description;
