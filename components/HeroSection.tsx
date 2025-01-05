import React from "react";

const HeroSection = () => {
  return (
    <div className="container min-h-screen bg-[url('https://tse3.mm.bing.net/th?id=OIP.NzxWe82PRZUZtQDJtXwn-QHaEU&pid=Api&P=0&h=180')] bg-cover bg-center flex justify-center items-center">
      <div className="text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  mb-4  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Welcome to Thailwind
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover amazing possibilities and transform your digital experience
          with our cutting-edge solutions.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg 
          transform transition duration-200 hover:scale-105 shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
