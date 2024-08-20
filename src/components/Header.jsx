import React from "react";

export const Header = () => {
  return (
    <header className="bg-black text-white w-screen p-4 flex justify-between items-center">
      <div className="flex items-center justify-center space-x-4">
        <div className="text-orange-500 text-2xl font-bold">TravelTwin</div>
        <nav className="hidden md:flex space-x-4">
          <a href="profile" className="hover:underline">
            Profile
          </a>
          <a href="travel-companion" className="hover:underline">
            Find a Travel Companion
          </a>
          <a href="#" className="hover:underline">
            Invite Travelers
          </a>
        </nav>
      </div>
      <div></div>
    </header>
  );
};
