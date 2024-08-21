import React, { useState } from "react";
class ImageProp {
  constructor(image) {
    this.imageName = image;
  }
  onSetImage(imageData) {}
  onDeleteImage(imageData, deleteImage) {}
}
class ImageData {
  constructor(name, base64Content) {
    this.name = name;
    this.base64Content = base64Content;
  }
}

const ImageSelector = ({ imageId, imageName, setImage, userImages }) => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setImageSrc(result);
        setImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    // Implement full-screen display logic here
  };
  if (imageName !== undefined) {
    return (
      <>
        <img
          onClick={handleImageClick}
          className="object-cover w-32 h-32 rounded-xl flex items-center justify-center cursor-pointer"
          src={`${imageName}`}
          alt={`${imageName} ${imageId}`}
        />
      </>
    );
  }
  return (
    <>
      <label
        htmlFor="imageSelector"
        className="bg-primary bg-opacity-5 w-32 h-32 rounded-xl flex items-center justify-center text-orange-500 cursor-pointer"
      >
        <svg
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
        </svg>
      </label>
      <input
        id="imageSelector"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className=" hidden"
      />
    </>
  );
};

export default ImageSelector;
