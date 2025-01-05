import React from "react";

const Forms = () => {
  return (
    <div className="flex gap-3 items-center justify-center h-screen bg-black">
      <div className="w-1/2 p-5 shadow-lg rounded-lg bg-white">
        <h1 className="text-orange-400 text-xl font-mono font-bold text-center">
          Register Form
        </h1>
        <form>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded-lg border border-solid border-gray-400 focus:outline-none focus:ring mt-2"
          />
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 rounded-lg border border-solid border-gray-400 focus:outline-none focus:ring mt-2"
          />
          <label>Message:</label>
          <textarea
            id="textarea"
            rows="4"
            cols="50"
            name="textarea"
            className="w-full px-3 py-2 rounded-lg border border-solid border-gray-400 focus:outline-none focus:ring mt-2"
          ></textarea>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="w-5 h-5 border border-solid border-gray-400 focus:outline-none focus:ring"
              />
              <label htmlFor="checkbox" className="text-gray-700">
                Checkbox
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="radio"
                name="radio"
                className="w-5 h-5 border border-solid border-gray-400 focus:outline-none focus:ring"
              />
              <label htmlFor="radio" className="text-gray-700">
                Radio
              </label>
            </div>
          </div>

          <select className="w-full px-3 py-2 rounded-lg border border-solid border-gray-400 focus:outline-none focus:ring mt-2">
            <option value="">select</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <div className="">
            <button
              type="submit"
              className="text-white bg-blue-500 pt-2 pb-3 h-10 px-3 mt-3 text-center"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
