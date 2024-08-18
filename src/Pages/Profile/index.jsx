import { SwitchCamera } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-orange-500 text-2xl font-bold">TravelTwin</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">Find a Travel Companion</a>
            <a href="#" className="hover:underline">Invite Travelers</a>
          </nav>
        </div>
        <div>
        </div>
      </header>

      {/* Profile Section */}
      <div className="p-4 md:p-8">
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Profile Picture and About Me */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="bg-orange-500 h-48 w-48 rounded-lg flex flex-col gap-y-2 items-center justify-center text-white text-2xl">
              <span>Miss Jay</span>
              <span><SwitchCamera/></span>
            </div>
            <p className="text-gray-600">I'm Miss Jay from Ghana</p>
            <h1 className="mt-2 text-2xl font-bold">About Me</h1>
            <div className="space-y-1">
              <p className="text-gray-600">Country: Ghana</p>
              <p className="text-gray-600">City: Accra</p>
              <p className="text-gray-600">Relationship status: Single</p>
              <p className="text-gray-600">Languages: English</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <button className="bg-black text-white py-2 px-4 rounded text-center hover:bg-gray-800">
                Send Message
              </button>
              <button className="bg-white border border-black text-black py-2 px-4 rounded text-center hover:bg-gray-200">
                Add to favorites
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-black h-24 rounded-lg flex items-center justify-center text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <div className="bg-black h-24 rounded-lg flex items-center justify-center text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <div className="bg-black h-24 rounded-lg flex items-center justify-center text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;