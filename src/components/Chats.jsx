import React from "react";
import { Button } from "./Button";

export const Chats = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMessage, setIsMessage] = React.useState(false);

  const messageUser = () => {
    setIsMessage(true);
  };
  const users = [
    {
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      travelDestination: "Spain",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      travelDestination: "France",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Alice Johnson",
      travelDestination: "Italy",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Bob Brown",
      travelDestination: "Germany",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Charlie Davis",
      travelDestination: "Japan",
    },
    {
      profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Diana Evans",
      travelDestination: "Australia",
    },
  ];
  const handleIsCollapsChange = () => {
    setIsCollapsed(!isCollapsed);
  };
  const HandleMessageSubmit = (e) => {
    e.preventDefault();
    setIsMessage(false);
  };
  if (isMessage) {
    return <Message HandleMessageSubmit={HandleMessageSubmit} />;
  }
  return (
    <div className="bg-white w-full h-40 md:w-96 md:h-max rounded-xl shadow-md fixed bottom-4 right-4">
      <div className="p-4 flex items-center  border-b-2 justify-between">
        <span className="flex items-center gap-8 ">
          <div className="bg-green-500 w-4 h-4 rounded-full"></div>
          <h1 className="text-xl uppercase font-bold">online</h1>
        </span>
        <div className="cursor-pointer" onClick={handleIsCollapsChange}>
          {isCollapsed ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 15L14.1213 9.12129C12.9497 7.94972 11.0503 7.94972 9.87868 9.1213L4 15"
                stroke="#363538"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 9L14.1213 14.8787C12.9497 16.0503 11.0503 16.0503 9.87868 14.8787L4 9"
                stroke="#363538"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <div
        className={`transition ease-in-out delay-150 overflow-auto ${
          isCollapsed ? "h-0 md:h-0 md:min-h-0" : "h-100 md:h-96 md:min-h-96"
        }`}
      >
        {users.map((user) => {
          return (
            <div key={user.id} className="p-4 flex gap-4">
              <div className="w-14 h-14 relative">
                <img
                  src={user.profileImage}
                  alt="profile image"
                  className="rounded-full w-14 h-14 cursor-pointer"
                  onClick={messageUser}
                />
                <div className="bg-green-500 w-4 h-4 rounded-full absolute top-10 right-0"></div>
              </div>
              <div>
                <p className="font-bold text-lg">{user.name}</p>
                <p>{user.travelDestination}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Message = (HandleMessageSubmit) => {
  return (
    <div className="w-full h-full bg-opacity-55 bg-slate-700 z-50 absolute top-0 flex justify-center items-center p-8">
      <div className="w-96 p-6 bg-slate-200 rounded-xl">
        <form>
          <textarea
            className="w-full h-40 bg-white rounded-lg p-4 focus:outline-none"
            placeholder="Type your message here"
          ></textarea>
          <div className="flex justify-center mt-4">
            <Button onButtonClick={HandleMessageSubmit}>Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
