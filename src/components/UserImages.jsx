import React from "react";
import ImageSelector from "./ImageSelector";
const NoImage = ({ userImages, AddImage }) => {
  let items = [];
  for (let i = 0; i < 4 - userImages.length; i++) {
    items.push(
      <ImageSelector
        key={i}
        setImage={(image) => AddImage(image)}
        userImages={userImages}
      />
    );
  }
  return <>{items}</>;
};

const UserImages = ({ userImages, AddImage }) => {
  return (
    <>
      {userImages.map((img) => {
        return (
          <ImageSelector
            imageId={img.imageId}
            imageName={img.imageName}
            userImages={userImages}
          />
        );
      })}
      <NoImage userImages={userImages} AddImage={AddImage} />
    </>
  );
};

export default UserImages;
