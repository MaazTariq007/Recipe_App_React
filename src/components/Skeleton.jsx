import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-12 mx-auto w-[85%] gap-4.5">
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className="h-[450px] border border-gray-300 rounded-md shadow-2xl animate-pulse"
        >
          <div className="w-full h-[320px] bg-gray-300 rounded-md"></div>
          <div className="p-2">
            <div className="bg-gray-300 h-4 w-[80%] mb-2 rounded-md"></div>
            <div className="bg-gray-300 h-6 w-[90%] mb-4 rounded-md"></div>
            <div className="bg-gray-300 h-10 w-[50%] rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
