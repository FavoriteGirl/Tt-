import React from "react";
import ImageSelector from "./ImageSelector";

const UserImages = ({ userImages }) => {
  let images = [];
  for (let i; i <= 4; i++) {
    images.push(userImages[i]);
  }
  if (userImages.length < 1) {
    return (
      <>
        {userImages.map((img) => {
          return (
            <ImageSelector imageId={img.imageId} imageName={img.imageName} />
          );
        })}
      </>
    );
  }
  return (
    <>
      <ImageSelector />
      <ImageSelector />
      <ImageSelector />
      <ImageSelector />
    </>
  );
};

export default UserImages;
