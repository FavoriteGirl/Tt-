import React from 'react';
import heroImage from '../../../assets/images/heroImage.jpg'
import { useNavigate } from 'react-router-dom';

function Hero() {
const navigate = useNavigate()

  return (
    <div className="relative h-screen bg-gray-900">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Travel Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          FIND A TRAVEL COMPANION
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-6">
          Going on a trip? Meet people who love to travel. Share your adventures with a travel companion.
        </p>
        <button  onClick={() => navigate("/signup")} className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300">
          Find a travel companion
        </button>
      </div>

      {/* Header with logo and login button */}
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6">
        <div className="text-yellow-500 text-xl font-bold">
          TravelTwin
        </div>
        <div>
          <button 
          onClick={() => navigate("/login")}
          className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}

export default Hero;