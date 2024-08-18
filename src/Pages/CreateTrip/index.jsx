import React from 'react';
import ChooseFileButton from '../../components/ChooseFileButton';

function CreateTrip() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✖
        </button>

        {/* Icon and Title */}
        <div className="flex flex-col items-center space-y-4">
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
<ChooseFileButton/>
          {/* Upload Button */}
          {/* <button className="bg-green-500 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-green-600"> */}
            {/* <span className="text-xl font-bold">+</span>
            <span>Choose photo</span> */}
            {/* <input type="file" className='bg-gree'/> */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;