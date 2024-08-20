import React from "react";
import { UserStatus } from "./UserStatus";

export const UserTrips = ({ trips }) => {
  if (trips.lenght > 0) {
    return (
      <div>
        {trips.map((trip) => {
          return (
            <div>
              {trips.map((trip) => {
                return (
                  <div className="flex w-full gap-10 rounded-lg bg-slate-50 shadow-lg p-8">
                    <div className="w-max">
                      <img
                        className="object-cover rounded-xl w-full md:w-52 md:h-52 h-full border-2 border-solid border-slate-600"
                        src={`${trip.owner.profileImage}`}
                        alt="profile image"
                      />
                      <div className="mt-4 flex justify-center">
                        <UserStatus isOnline={true}>
                          {trip.owner.name}, {trip.owner.age}
                        </UserStatus>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold">{"Title"}</h1>
                      <p className="text-lg font-light mt-4">
                        Trip To&nbsp;&nbsp; <span>{trip.destination}</span>
                      </p>
                      <p className="text-lg font-light mt-4">
                        {trip.shortDescription}
                      </p>
                      <div className="grid grid-cols-2">
                        <p className="text-lg font-light mt-4">
                          Looking For&nbsp;&nbsp;
                          <span className="text-primary capitalize font-bold">
                            {trip.sex}
                          </span>
                        </p>
                        <p className="text-lg font-light mt-4">
                          Type of Journey&nbsp;&nbsp;
                          <span className="text-primary capitalize font-bold">
                            {trip.typeOfJourney}
                          </span>
                        </p>
                        {/* <p className="text-lg font-light mt-4">
                          Type of Journey&nbsp;&nbsp;
                          <span className="text-primary capitalize font-bold">
                            {"No"}
                          </span>
                        </p> */}
                        <p className="text-lg font-light mt-4">
                          Split Cost &nbsp;&nbsp;{" "}
                          <span className="text-primary capitalize font-bold">
                            {trip.splitCosts}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="w-3/5	bg-slate-100 rounded-xl py-20 flex justify-center">
        <p>You Have No Trips</p>
      </div>
    );
  }
};
