import { useState } from "react";
import TextInput from "./TextInput";
import Select from "./Select";
import { Button } from "./Button";

export const PersonalInfo = ({ userData }) => {
  return (
    <>
      <div className="flex gap-10">
        <div>
          <p className="text-lg text-slate-600">
            Country :&nbsp;
            <span className="text-slate-950 font-semibold">
              {userData.country}
            </span>
          </p>
          <p className="text-lg text-slate-600">
            City :&nbsp;
            <span className="text-slate-950 font-semibold">
              {userData.city}
            </span>
          </p>
        </div>
        <div>
          <p className="text-lg text-slate-600">
            Relationship Status :&nbsp;
            <span className="text-slate-950 font-semibold">
              {userData.relationshipStatus}
            </span>
          </p>
          <p className="text-lg text-slate-600">
            Languages :&nbsp;
            {userData.languages.map((language, index) => {
              return (
                <span key={index} className="text-slate-950 font-semibold">
                  {language}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
};
