import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserImages from "../../components/UserImages";
import { Button } from "../../components/Button";
import { UserStatus } from "../../components/UserStatus";
import { PersonalInfo } from "../../components/PersonalInfo";
import { UserTrips } from "../../components/UserTrips";
import { ProfileImage } from "../../components/ProfileImage";
import { useLocation } from "react-router-dom";

import UpdatePersonalInfo from "../../components/updatePersonalInfo";
import { Chats } from "../../components/Chats";
import { Header } from "../../components/Header";

function ProfilePage() {
  const location = useLocation();

  const formState = location.state || {};

  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [userImages, setUserImages] = useState([]);
  const [userInfo, setUserInformation] = useState({
    profileImage: "",
    userName: "Richard Amo",
    userAge: "12",
    country: "Ghana",
    city: "Koforidua",
    relationshipStatus: "Single",
    languages: ["English"],
    about:
      "Lorem ipsum dolor sit amet consectetur. Facilisis elit mattis turpis velit. Dolor nunc urna sed tristique id dignissim loremtempus. Quisque duis tortor tellus magnis. Rhoncus ut vel lacusleo elementum leo eu.",
  });
  const [isEditProfile, setIsEditProfile] = useState(false);

  const handleUserImageChange = (newInfo) => {
    setUserInformation((prevData) => ({
      ...prevData,
      profileImage: newInfo,
    }));
  };

  // useEffect(() => {
  //   console.log(formState);

  //   if (formState) {
  //     setTrips(() => ({}));
  //     console.log(trips);
  //   }
  // }, [formState, userInfo.userName, userInfo.userAge, userInfo.profileImage]);
  const handleUserInfoUpdate = (info) => {
    setUserInformation((prevData) => ({
      ...prevData,
      ...info,
      languages: [info.languages],
    }));
    console.log(info);

    setIsEditProfile(false);
  };

  const handleSetUserImages = (newImage) => {
    setUserImages((prevImages) => [
      ...prevImages,
      { imageId: userImages.lenght, imageName: newImage },
    ]);
  };
  return (
    <>
      <div className="bg-gray-100 h-screen w-screen flex flex-col items-center">
        {/* Header */}
        <Header />

        <div className="w-full min-w-full h-full flex flex-col items-center px-4 overflow-x-hidden overflow-y-auto">
          <div className="grow p-4 w-full md:p-8 md:max-w-screen-lg flex flex-col gap-3.5">
            {/* Profile Section */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-6">
              {/* Profile Picture and About Me */}
              <div className="flex flex-col items-center md:items:center lg:items-left space-y-4">
                <ProfileImage
                  profileImage={userInfo.profileImage}
                  setProfileImage={handleUserImageChange}
                />

                <UserStatus isOnline={true}>
                  {userInfo.userName}, {userInfo.userAge}
                </UserStatus>

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
                  <UserImages
                    userImages={userImages}
                    AddImage={handleSetUserImages}
                  />
                </div>

                {/* User Details */}
                {isEditProfile ? (
                  <UpdatePersonalInfo
                    userData={{
                      country: userInfo.country,
                      city: userInfo.city,
                      relationshipStatus: userInfo.relationshipStatus,
                      languages: userInfo.languages,
                      about: userInfo.about,
                    }}
                    updateUserInfo={handleUserInfoUpdate}
                    cancle={() => setIsEditProfile(false)}
                  />
                ) : (
                  <>
                    <p className="text-base text-gray-800 w-full">
                      {userInfo.about}
                    </p>
                    <PersonalInfo
                      userData={{
                        country: userInfo.country,
                        city: userInfo.city,
                        relationshipStatus: userInfo.relationshipStatus,
                        languages: userInfo.languages,
                      }}
                    />
                    <Button
                      buttonType="ghost"
                      onButtonClick={() => setIsEditProfile(true)}
                    >
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
                  </>
                )}
              </div>
            </div>
            {/* Profile Section */}
            {/* <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 items-center">
              <div className="w-full flex justify-center relative">
                <h1 className="w-max font-extrabold border-solid border-b-4 border-b-primary px-4 pb-2">
                  MY TRIPS
                </h1>
              </div>
              <UserTrips trips={trips} />
            </div> */}
          </div>
        </div>
        <Chats />
      </div>
    </>
  );
}

export default ProfilePage;
