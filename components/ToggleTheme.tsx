'use client';
import React, { useState } from "react";

const ToggleTheme = () => {
    const [value, setValue] = useState(false);
    const className=value?"dark":"light";
    const baground=value?"bg-black":"bg-white";
    const color=value?"text-white":"text-black";
  return (
    <div className="flex items-center justify-center h-screen">
      <div className={`p-6 rounded-lg ${baground} mb-3 rounded-md shadow-md`}>
        <h3 className={`text-lg font-semibold mb-2 ${color}` }>
          Feature One
        </h3>
        <p className={`text-gray-700 ${color}`}>
          The theme transition is smooth thanks to the duration-200 utility
          class.
        </p>
        <button className="bg-blue-500 px-3 pb-2 pt-2 h-10 rounded-lg mt-1" onClick={() => setValue(!value)}>
          {className} mode
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;
