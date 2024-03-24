import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-300 h-12 w-12 mr-3"></div>
      <p className="text-lg font-semibold">Generating message...</p>
    </div>
  );
};

export default Loader;
