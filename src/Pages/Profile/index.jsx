import { SwitchCamera } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import UserImages from "../../components/UserImages";
import { Button } from "../../components/Button";
import { UserStatus } from "../../components/UserStatus";
import { PersonalInfo } from "../../components/PersonalInfo";
import { UserTrips } from "../../components/UserTrips";

function ProfilePage() {
  const navigate = useNavigate();
  const userImages = [
    {
      imageId: 1,
      imageName:
        "https://media.licdn.com/dms/image/v2/D4E03AQEE4HjJhmrx7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721234418542?e=1729728000&v=beta&t=2KBNJDsDtVG7uTNyccDx5h0rcZIW9p6W2ricosQWeZg",
    },
    {
      imageId: 1,
      imageName:
        "https://media.licdn.com/dms/image/v2/D4E03AQEE4HjJhmrx7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721234418542?e=1729728000&v=beta&t=2KBNJDsDtVG7uTNyccDx5h0rcZIW9p6W2ricosQWeZg",
    },
    {
      imageId: 1,
      imageName:
        "https://media.licdn.com/dms/image/v2/D4E03AQEE4HjJhmrx7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721234418542?e=1729728000&v=beta&t=2KBNJDsDtVG7uTNyccDx5h0rcZIW9p6W2ricosQWeZg",
    },
  ];
  const trips = [];
  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col items-center">
      {/* Header */}
      <header className="bg-black text-white w-screen p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-orange-500 text-2xl font-bold">TravelTwin</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">
              Find a Travel Companion
            </a>
            <a href="#" className="hover:underline">
              Invite Travelers
            </a>
          </nav>
        </div>
        <div></div>
      </header>

      <div className="w-full min-w-full h-full flex flex-col items-center px-4 overflow-x-hidden overflow-y-auto">
        <div className="grow p-4 w-full md:p-8 md:max-w-screen-lg flex flex-col gap-3.5">
          {/* Profile Section */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-6">
            {/* Profile Picture and About Me */}
            <div className="flex flex-col items-center md:items:center lg:items-left space-y-4">
              <div className=" bg-orange-500 h-52	 w-52	 rounded-xl	 flex flex-col gap-y-2 items-center justify-center text-white text-2xl">
                <span>Miss Jay</span>
                <span>
                  <SwitchCamera />
                </span>
              </div>
              <UserStatus isOnline={true}>SAMUEL ADU DJANFI, 24</UserStatus>
              <div className="flex flex-col space-y-2 w-full max-w-80">
                <Button
                  buttonType="outline"
                  onButtonClick={() => navigate("/create-trip")}
                >
                  Create a new Trip
                </Button>
                <Button>Add to favorites</Button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <UserImages userImages={userImages} />
              </div>

              {/* User Details */}
              <p className="text-base text-gray-800 w-full">
                Lorem ipsum dolor sit amet consectetur. Facilisis elit mattis
                turpis velit. Dolor nunc urna sed tristique id dignissim lorem
                tempus. Quisque duis tortor tellus magnis. Rhoncus ut vel lacus
                leo elementum leo eu.
              </p>
              <PersonalInfo
                Country="Ghana"
                City="Koforidua"
                RelationShipStat="Single"
                Languages={["English"]}
              />
              <Button buttonType="ghost">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 20.695H19M7.00736 19.695H5.5C4.94772 19.695 4.5 19.2473 4.5 18.695V17.1876C4.5 16.392 4.81607 15.6289 5.37868 15.0663L15.25 5.195C16.2855 4.15947 17.9645 4.15947 19 5.195C20.0355 6.23053 20.0355 7.90947 19 8.945L9.12868 18.8163C8.56607 19.3789 7.80301 19.695 7.00736 19.695Z"
                    stroke="#F97316"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Edit Profile
              </Button>
            </div>
          </div>
          {/* Profile Section */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 items-center">
            <div className="w-full flex justify-center relative">
              <h1 className="w-max font-extrabold border-solid border-b-4 border-b-primary px-4 pb-2">
                MY TRIPS
              </h1>
              <div className="absolute right-0">
                <Button
                  buttonType="outline"
                  onButtonClick={() => navigate("/create-trip")}
                >
                  Create a new Trip
                </Button>
              </div>
            </div>
            <UserTrips Trips={trips} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
