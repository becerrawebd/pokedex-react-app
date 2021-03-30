import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-back-light rounded-xl border-2 border-secondary overflow-hidden">
      <div className="animate-pulse flex flex-col items-center p-8 relative">
        <div className="h-8 w-14 absolute top-0 left-0 px-3 bg-red-200 text-back-light font-bold rounded-br-xl"></div>
        <div className="h-32 w-32 mt-4 bg-red-200 rounded-full"></div>
        <h2 className="h-10 my-4 w-1/2 bg-red-200"></h2>
        <div className="self-start h-8 w-2/5 bg-red-200"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
