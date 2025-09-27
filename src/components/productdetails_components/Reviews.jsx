import React from "react";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center justify-center my-8">
        <p className="text-3xl font-bold">1 review for BeMouse1</p>
      </div>

      {/* Review Card */}
      <div className="max-w-2xl mx-auto my-10 bg-white p-6 rounded-xl shadow-md">
        {/* Top Row */}
        <div className="flex justify-between items-center">
          {/* Name + Date */}
          <div>
            <p className="font-semibold text-gray-900">Hamza</p>
            <p className="text-sm text-gray-500">Sep 13, 2025</p>
          </div>

          {/* Stars */}
          <div className="flex gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" stroke="none" />
            ))}
          </div>
        </div>

        {/* Line */}
        <hr className="my-4 border-gray-300" />

        {/* Comment */}
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          mauris lectus. Etiam nec turpis at nunc volutpat posuere. Vivamus
          sit amet felis et metus laoreet fermentum.
        </p>
      </div>

      {/* Add Review Section */}
      <div className="max-w-2xl mx-auto my-9">
        <p className="font-semibold text-lg">Add a review</p>
        <p className="text-gray-600">
          You must be <a href="#" className="text-blue-600">logged in</a> to post a review.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
