import React from "react";

const Header = () => {
  return (
    <>
      <div className="container flex items-center justify-center min-h-screen bg-black">
        <div className="text-center w-1/2">
          <h1 className="text-bold text-2xl text-blue-500 font-mono leading-normal mb-3">
            Welcome To Thailwind
          </h1>
          <p className="text-gray-600 leading-normal font-mono text-sm  line-clamp-3 tracking-wide">
            Tailwind CSS is an open-source CSS framework. Unlike other
            frameworks, like Bootstrap, it does not provide a series of
            predefined classes for elements such as buttons or tables.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
