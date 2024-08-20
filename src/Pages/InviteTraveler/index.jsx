import React from "react";
import { Traveler } from "../../components/Traveler";
import { Header } from "../../components/Header";

export const InviteTraveler = () => {
  const travelersList = [
    {
      id: 0,
      isOnline: false,
      name: "Liam Hernandez",
      age: 32,
      invited: false,
      like: true,
      profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 1,
      isOnline: true,
      name: "Alice Johnson",
      age: 28,
      invited: true,
      like: false,
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      isOnline: false,
      name: "John Smith",
      age: 35,
      invited: false,
      like: true,
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      isOnline: true,
      name: "Emma Brown",
      age: 22,
      invited: true,
      like: true,
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      isOnline: false,
      name: "Michael Davis",
      age: 40,
      invited: false,
      like: false,
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      isOnline: true,
      name: "Sophia Wilson",
      age: 30,
      invited: true,
      like: true,
      profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      isOnline: false,
      name: "David Martinez",
      age: 27,
      invited: false,
      like: false,
      profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      isOnline: true,
      name: "Olivia Garcia",
      age: 33,
      invited: true,
      like: true,
      profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 8,
      isOnline: false,
      name: "James Rodriguez",
      age: 29,
      invited: false,
      like: true,
      profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      isOnline: true,
      name: "Isabella Martinez",
      age: 26,
      invited: true,
      like: false,
      profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      id: 10,
      isOnline: false,
      name: "Liam Hernandez",
      age: 32,
      invited: false,
      like: true,
      profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];
  const [travelers, setTraveler] = React.useState(travelersList);

  const editTravelerLikeStatus = (id, fieldName, fieldValue) => {
    setTraveler((prevTravelers) =>
      prevTravelers.map((traveler) =>
        traveler.id === id
          ? { ...traveler, ...{ ...traveler, [fieldName]: fieldValue } }
          : traveler
      )
    );
  };
  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col items-center">
      {/* Header */}
      <Header />
      <div className="w-full min-w-full h-full flex flex-col items-center px-4 overflow-x-hidden overflow-y-auto">
        <div className="p-4 w-full h-max md:p-8  flex flex-col items-center gap-10">
          <h1 className="text-center w-full text-2xl font-bold">
            TRAVEL PARTNER FOR YOUR TRIP
          </h1>
          <div className=" md:max-w-screen-lg p-6 gap-6 grid grid-cols-4 items-center">
            <Traveler
              travelers={travelers}
              setInvite={editTravelerLikeStatus}
              setLike={editTravelerLikeStatus}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
