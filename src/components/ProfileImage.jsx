import React, { useState } from "react";
import { SwitchCamera } from "lucide-react";

export const ProfileImage = ({ profileImage = null, setProfileImage }) => {
  const [profileImageSrc, setProfileImageSrc] = useState(null);
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setProfileImageSrc(result);
        setProfileImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (profileImage !== "") {
    return (
      <div className="object-cover  h-52 w-52 rounded-xl flex relative overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={`${profileImage}`}
          alt="profile image"
        />
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleProfileImageChange}
          className=" hidden"
        />
        <label
          htmlFor="profileImage"
          className="absolute bottom-2 right-2 z-10"
        >
          <svg
            width="35"
            height="34"
            viewBox="0 0 35 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="35" height="34" rx="12" fill="white" />
            <rect
              width="27"
              height="26"
              transform="translate(4 4)"
              fill="white"
            />
            <path
              d="M13 10.2593H9.625C7.76104 10.2593 6.25 11.7143 6.25 13.5093V22.4167C6.25 24.2116 7.76104 25.6667 9.625 25.6667H25.375C27.239 25.6667 28.75 24.2116 28.75 22.4167V13.5093C28.75 11.7143 27.239 10.2593 25.375 10.2593H22M13 10.2593L13.099 9.0475C13.1374 8.57703 13.2624 8.10323 13.5902 7.75246C14.2226 7.07585 15.1308 6.67668 16.0989 6.67668H18.9011C19.8692 6.67668 20.7774 7.07585 21.4098 7.75246C21.7376 8.10323 21.8626 8.57703 21.901 9.0475L22 10.2593M13 10.2593H22M24.2613 13.75H24.25M20.875 18.0833C20.875 19.8783 19.364 21.3333 17.5 21.3333C15.636 21.3333 14.125 19.8783 14.125 18.0833C14.125 16.2884 15.636 14.8333 17.5 14.8333C19.364 14.8333 20.875 16.2884 20.875 18.0833Z"
              stroke="#545159"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
      </div>
    );
  }
  return (
    <>
      <label
        htmlFor="imageSelector"
        className="bg-orange-500 h-52 w-52 rounded-xl flex flex-col cursor-pointer gap-y-2 items-center justify-center text-white text-2xl"
      >
        {/* <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8334 9.62963H8.83337C6.07195 9.62963 3.83337 11.8682 3.83337 14.6296V28.3333C3.83337 31.0948 6.07195 33.3333 8.83337 33.3333H32.1667C34.9281 33.3333 37.1667 31.0948 37.1667 28.3333V14.6296C37.1667 11.8682 34.9281 9.62963 32.1667 9.62963H27.1667M13.8334 9.62963L13.98 7.76538C14.0369 7.04159 14.2221 6.31266 14.7078 5.77302C15.6446 4.73208 16.9902 4.11797 18.4243 4.11797H22.5758C24.0099 4.11797 25.3555 4.73208 26.2923 5.77302C26.778 6.31266 26.9632 7.04159 27.0201 7.76538L27.1667 9.62963M13.8334 9.62963H27.1667M30.5167 15H30.5M25.5 21.6667C25.5 24.4281 23.2615 26.6667 20.5 26.6667C17.7386 26.6667 15.5 24.4281 15.5 21.6667C15.5 18.9052 17.7386 16.6667 20.5 16.6667C23.2615 16.6667 25.5 18.9052 25.5 21.6667Z"
            stroke="#545159"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
        <span>Miss Jay</span>
        <span>
          <SwitchCamera />
        </span>
      </label>
      <input
        id="imageSelector"
        type="file"
        accept="image/*"
        onChange={handleProfileImageChange}
        className=" hidden"
      />
    </>
  );
};
