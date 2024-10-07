import React from "react";

const LoadingRotate = () => {
  const skeletons = Array(20).fill(0);

  return (
    <div className="grid grid-cols-5 gap-4 items-center my-[20px]">
      {skeletons.map((_, index) => (
        <div key={index} className="flex flex-col justify-center items-center animate-pulse">
          <div className="w-[128px] h-[128px] bg-gray-300 rounded-lg" />
          <div className="w-16 h-6 bg-gray-300 mt-2 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default LoadingRotate;
