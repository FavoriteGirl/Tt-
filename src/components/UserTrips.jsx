import React from "react";

export const UserTrips = ({ Trips }) => {
  if (Trips.lenght > 0) {
    return (
      <div>
        {Trips.map((trip) => {
          return (
            <div>
              {Trips.map((trip) => {
                return <div>this is an item</div>;
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
