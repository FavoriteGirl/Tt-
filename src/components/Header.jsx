import React from "react";

export const Header = () => {
  return (
    <header className="bg-black text-white w-screen p-4 flex justify-between items-center">
      <div className=" flex items-center justify-center space-x-4 w-full">
        <a href="/" className="text-2xl font-bold mr-auto">
          <div className="text-orange-500 text-2xl font-bold">TravelTwin</div>
        </a>
        <nav className="hidden md:flex gap-12 w-full justify-center font-bold">
          <a href="profile" className="hover:underline hover:text-primary">
            Profile
          </a>
          <a
            href="travel-companion"
            className="hover:underline hover:text-primary"
          >
            Find a Travel Companion
          </a>
          <a
            href="invite-travelers"
            className="hover:underline hover:text-primary"
          >
            Invite Travelers
          </a>
        </nav>
      </div>
      <div></div>
    </header>
  );
};
