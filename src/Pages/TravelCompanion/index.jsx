import { React, useState } from "react";
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { UserTrips } from "../../components/UserTrips";

function TravelCompanion() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    sex: "",
    Language: "",
    meetingMode: "",

    tripTitle: "",
    firstVisit: "",
    accomodation: "",
    typeOfJourney: "",
    gettingAround: "",
    workAndTravel: "",
    Budget: "",
    splitCosts: "",
    itinerary: "",
    shortDescription: "",
    PlaceIwantToSee: "",
    ThingsIwantToDo: "",
  });

  const fieldData = {
    destination: ["Afghanistan", "Washington", "New York", "Paris", "Tokyo"],
    sex: ["Male", "Female", "Other"],
    firstVisit: ["Yes", "No"],
    typeOfJourney: ["BackPacking", "Beach", "Other"],
    gettingAround: ["Car", "Bike", "Public Transport"],
    workAndTravel: ["Yes", "No"],
    Budget: [
      "GHC 0 - GHC 600",
      "GHC 600 - GHC 1000",
      "GHC 1000 - GHC 1500",
      "Higher",
    ],
    age: ["18 - 24", "24 - 34", "35 - 44", "45 - 54", "55+"],
    splitCosts: ["Yes", "No"],
  };
  const trips = [
    {
      id: 1,
      title: "Paris Adventure",
      destination: "Paris, France",
      startDate: "2023-10-01",
      endDate: "2023-10-10",
      owner: {
        name: "Alice Johnson",
        profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
        age: 28,
      },
      shortDescription: "A beautiful trip to Paris.",
      sex: "female",
      typeOfJourney: "leisure",
    },
    {
      id: 2,
      title: "Tokyo Business Trip",
      destination: "Tokyo, Japan",
      startDate: "2023-11-05",
      endDate: "2023-11-15",
      owner: {
        name: "John Smith",
        profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
        age: 35,
      },
      shortDescription: "Exploring the vibrant city of Tokyo.",
      sex: "male",
      typeOfJourney: "business",
    },
    {
      id: 3,
      title: "New York Getaway",
      destination: "New York, USA",
      startDate: "2023-12-01",
      endDate: "2023-12-10",
      owner: {
        name: "Emma Brown",
        profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
        age: 22,
      },
      shortDescription: "A trip to the Big Apple.",
      sex: "female",
      typeOfJourney: "leisure",
    },
    {
      id: 4,
      title: "Sydney Conference",
      destination: "Sydney, Australia",
      startDate: "2024-01-15",
      endDate: "2024-01-25",
      owner: {
        name: "Michael Davis",
        profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
        age: 40,
      },
      shortDescription: "Enjoying the beaches of Sydney.",
      sex: "male",
      typeOfJourney: "business",
    },
    {
      id: 5,
      title: "Cape Town Exploration",
      destination: "Cape Town, South Africa",
      startDate: "2024-02-10",
      endDate: "2024-02-20",
      owner: {
        name: "Sophia Wilson",
        profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
        age: 30,
      },
      shortDescription: "Exploring the beauty of Cape Town.",
      sex: "female",
      typeOfJourney: "leisure",
    },
    {
      id: 6,
      title: "Rio Carnival",
      destination: "Rio de Janeiro, Brazil",
      startDate: "2024-03-05",
      endDate: "2024-03-15",
      owner: {
        name: "David Martinez",
        profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
        age: 27,
      },
      shortDescription: "Carnival in Rio!",
      sex: "male",
      typeOfJourney: "business",
    },
    {
      id: 7,
      title: "Rome Historical Tour",
      destination: "Rome, Italy",
      startDate: "2024-04-01",
      endDate: "2024-04-10",
      owner: {
        name: "Olivia Garcia",
        profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
        age: 33,
      },
      shortDescription: "Historical trip to Rome.",
      sex: "female",
      typeOfJourney: "leisure",
    },
    {
      id: 8,
      title: "Bangkok Cultural Experience",
      destination: "Bangkok, Thailand",
      startDate: "2024-05-05",
      endDate: "2024-05-15",
      owner: {
        name: "James Rodriguez",
        profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
        age: 29,
      },
      shortDescription: "Exploring the culture of Bangkok.",
      sex: "male",
      typeOfJourney: "business",
    },
    {
      id: 9,
      title: "Dubai Luxury Trip",
      destination: "Dubai, UAE",
      startDate: "2024-06-01",
      endDate: "2024-06-10",
      owner: {
        name: "Isabella Martinez",
        profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
        age: 26,
      },
      shortDescription: "Luxury trip to Dubai.",
      sex: "female",
      typeOfJourney: "leisure",
    },
    {
      id: 10,
      title: "Istanbul Historical Journey",
      destination: "Istanbul, Turkey",
      startDate: "2024-07-05",
      endDate: "2024-07-15",
      owner: {
        name: "Liam Hernandez",
        profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
        age: 32,
      },
      shortDescription: "Exploring the history of Istanbul.",
      sex: "male",
      typeOfJourney: "business",
    },
  ];
  const handleInputChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-gray-100 h-screen w-screen flex flex-col items-center">
        {/* Header */}
        <Header />
        <div className="w-full min-w-full h-full flex flex-col items-center px-4 overflow-x-hidden overflow-y-auto">
          <div className="bg-white p-4 w-full h-max md:p-8  flex flex-col items-center gap-3.5">
            <div className=" md:max-w-screen-lg p-6 lg:flex-row gap-6">
              <h1 className="text-center w-full text-2xl font-bold">
                TRAVEL PARTNER FOR YOUR TRIP
              </h1>
              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="w-full grid grid-cols-3 gap-4">
                    {/* Destination */}
                    <Select
                      fieldName="destination"
                      onChange={handleInputChange}
                      ListOptions={fieldData.destination}
                    >
                      Destination
                    </Select>
                    <label className="flex items-center gap-2">
                      <p className="text-base">Date From</p>
                      <input
                        type="date"
                        placeholder="Type here"
                        className="input input-bordered w-max max-w-xs focus:outline-none"
                      />
                    </label>

                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <p className="text-base">to</p>
                        <input
                          type="date"
                          placeholder="Type here"
                          className="input input-bordered max-w-xs w-max focus:outline-none"
                        />
                      </label>
                    </div>

                    <Select
                      fieldName="sex"
                      onChange={handleInputChange}
                      ListOptions={fieldData.sex}
                    >
                      Sex
                    </Select>
                    <Select
                      fieldName="sex"
                      onChange={handleInputChange}
                      ListOptions={fieldData.age}
                    >
                      Age
                    </Select>
                  </div>

                  {/* Trip Desscription */}
                  <div className="w-full grid grid-cols-3 gap-4 mt-8">
                    <Select
                      fieldName="typeOfJourney"
                      onChange={handleInputChange}
                      ListOptions={fieldData.typeOfJourney}
                    >
                      Type of Journey
                    </Select>

                    <Select
                      fieldName="Budget"
                      onChange={handleInputChange}
                      ListOptions={fieldData.Budget}
                    >
                      Budget
                    </Select>
                    <Select
                      fieldName="splitCosts"
                      onChange={handleInputChange}
                      ListOptions={fieldData.splitCosts}
                    >
                      Split Costs
                    </Select>

                    <Select
                      fieldName="workAndTravel"
                      onChange={handleInputChange}
                      ListOptions={fieldData.workAndTravel}
                    >
                      Work & Travel
                    </Select>
                  </div>
                  <div className="flex justify-center mt-12">
                    <Button>Search for Partner</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="p-4 w-full h-max md:p-8  flex flex-col items-center gap-10">
            <div className=" md:max-w-screen-lg p-6 gap-6 flex flex-col items-center">
              <UserTrips trips={trips} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelCompanion;
