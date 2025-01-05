/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Image from "next/image";

const Card = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="bg-white rounded-md p-3 w-[300px]">
          <div className="">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jKu8_ESPF7zrC7JoLd5xHwHaFj&pid=Api&P=0&h=180"
              alt="image"
              className="w-full h-30 bg-cover bg-center rounded-md"
            />
          </div>
          <div className="mt-2 p-1">
            <h1 className="text-gray-700 text-lg font-mono leading-2 line-clamp-1 text-bold">
              Lotus
            </h1>
            <p className="text-gray-500 text-sm  leading-2 text-normal">
              Browse and download over 100+ high-quality flower images for free.
              Find bouquets, roses, tulips, wild flowers and more in various
              settings and styles.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md p-3 w-[300px]">
          <div>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jKu8_ESPF7zrC7JoLd5xHwHaFj&pid=Api&P=0&h=180"
              alt="image"
              className="w-full h-30 bg-cover bg-center rounded-md"
            />
          </div>
          <div className="mt-2 p-1">
            <h1 className="text-gray-700 text-lg font-mono leading-2 line-clamp-1 text-bold">
              Lotus
            </h1>
            <p className="text-gray-500 text-sm  leading-2 text-normal">
              Browse and download over 100+ high-quality flower images for free.
              Find bouquets, roses, tulips, wild flowers and more in various
              settings and styles.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md p-3 w-[300px]">
          <div>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jKu8_ESPF7zrC7JoLd5xHwHaFj&pid=Api&P=0&h=180"
              alt="image"
              className="w-full h-30 bg-cover bg-center rounded-md"
            />
          </div>
          <div className="mt-2 p-1">
            <h1 className="text-gray-700 text-lg font-mono leading-2 line-clamp-1 text-bold">
              Lotus
            </h1>
            <p className="text-gray-500 text-sm  leading-2 text-normal">
              Browse and download over 100+ high-quality flower images for free.
              Find bouquets, roses, tulips, wild flowers and more in various
              settings and styles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
