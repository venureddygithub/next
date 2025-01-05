import React from "react";

const CustomButton = () => {
  return (
    <>
      <div className="container flex items-center justify-center min-h-screen bg-black">
        <button className="text-white rounded-full pb-2 pt-2 text-center px-4 h-10 bg-blue-500 hover:bg-blue-900 ">
          Order Now
        </button>
        <button className="text-yellow-400  py-3 mx-5 border border-solid border-gray-700 pt-2 pb-2 px-4 h-10  rounded-full hover:bg-orange-400 hover:text-white ">
          Order Now
        </button>
      </div>
    </>
  );
};

export default CustomButton;
