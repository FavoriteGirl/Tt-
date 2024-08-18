import React from 'react';

const ChooseFileButton = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✖
        </button>

        {/* File Input Section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Icon */}
          <div className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.5 4.5m0 0L15 19m4.5-4.5H3"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Add a Profile Photo
          </h2>

          <p className="text-gray-500">From your computer</p>

          {/* Styled File Input */}
          <label className="bg-orange-500 text-white py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-orange-600 cursor-pointer">
            <span className="text-xl font-bold">+</span>
            <span>Choose photo</span>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChooseFileButton;
