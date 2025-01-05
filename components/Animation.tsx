import React from "react";
import { ImSpinner3 } from "react-icons/im";

const Animation = () => {
  return (
    <div className="flex gap-3 items-center justify-center h-screen">
      <button className="bg-blue-500 px-3 pb-2 pt-2 h-10 rounded-lg mt-1 w-[132px] flex items-center justify-center space-x-2 text-white">
      <ImSpinner3 className="animate-spin mr-3"/> 
        Click me
      </button>
      <button className="bg-gray-500 px-3 pb-2 pt-2 h-10 rounded-lg mt-1 w-[132px] flex items-center justify-center space-x-2 text-white hover:animate-bounce">
        bounce
        </button>
    </div>
  );
};

export default Animation;
