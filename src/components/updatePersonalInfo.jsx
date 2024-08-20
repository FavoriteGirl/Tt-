import { React, useState } from "react";
import TextInput from "./TextInput";
import Select from "./Select";
import { Button } from "./Button";

export default function updatePersonalInfo({
  updateUserInfo,
  userData,
  cancle,
}) {
  const [userInfo, setUserInfo] = useState(userData);
  const countries = ["Afghanistan", "Washington", "New York", "Paris", "Tokyo"];
  const cities = ["Afghanistan", "Washington", "New York", "Paris", "Tokyo"];
  const languages = ["English", "Spanish", "French"];
  const relationshipStatus = ["Married", "Single"];

  const handleInputChange = (fieldName, data) => {
    setUserInfo((prevData) => ({
      ...prevData,
      [fieldName]: data !== "" ? data : null,
    }));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        <TextInput
          fieldName="about"
          placeholder={userInfo.about}
          type="textarea"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-6">
          <div className="text-lg text-slate-600">
            Country :&nbsp;
            <Select
              fieldName="country"
              onChange={handleInputChange}
              ListOptions={countries}
            >
              Country
            </Select>
          </div>
          <div className="text-lg text-slate-600">
            City :&nbsp;
            <Select
              fieldName="city"
              onChange={handleInputChange}
              ListOptions={cities}
            >
              City
            </Select>
          </div>
          <div className="text-lg text-slate-600">
            Full Name :&nbsp;
            <div className="w-full">
              <TextInput
                fieldName="userName"
                placeholder="Name"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-lg text-slate-600">
            Relationship Status :&nbsp;
            <Select
              fieldName="relationshipStatus"
              onChange={handleInputChange}
              ListOptions={relationshipStatus}
            >
              Relationship Status
            </Select>
          </div>
          <div className="text-lg text-slate-600">
            Languages :&nbsp;
            <Select
              defaultValue={languages}
              fieldName="languages"
              onChange={handleInputChange}
              ListOptions={languages}
            >
              Languages
            </Select>
          </div>

          <div className="text-lg text-slate-600">
            Age :&nbsp;
            <div className="w-full">
              <TextInput
                fieldName="userAge"
                placeholder="Age"
                type="number"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-10 mt-4">
        <Button buttonType="outline" onButtonClick={() => cancle()}>
          Cansel
        </Button>
        <Button onButtonClick={() => updateUserInfo(userInfo)}>Save</Button>
      </div>
    </div>
  );
}
