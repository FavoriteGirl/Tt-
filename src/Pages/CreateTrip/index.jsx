import { React, useState } from "react";
import ChooseFileButton from "../../components/ChooseFileButton";
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
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
    language: ["English", "Spanish", "French"],
    meetingMode: ["Online", "In-Person", "Hybrid"],
    firstVisit: ["Yes", "No"],
    accomodation: ["Hotel", "Hostel", "Airbnb"],
    typeOfJourney: ["BackPacking", "Beach", "Other"],
    gettingAround: ["Car", "Bike", "Public Transport"],
    workAndTravel: ["Yes", "No"],
    Budget: [
      "GHC 0 - GHC 600",
      "GHC 600 - GHC 1000",
      "GHC 1000 - GHC 1500",
      "Higher",
    ],
    splitCosts: ["Yes", "No"],
    itinerary: ["Day 1: City Tour", "Day 2: Beach", "Day 3: Hiking"],
  };
  const handleInputChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile", { state: formState });
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:p-8 md:max-w-screen-lg relative">
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✖
        </button>

        <h1 className="text-center text-4xl font-bold mb-12">
          Create a new trip
        </h1>
        {/* Trip Info */}
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

              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox" />
                Any Time
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
              fieldName="language"
              onChange={handleInputChange}
              ListOptions={fieldData.language}
            >
              Language
            </Select>

            <Select
              fieldName="meetingMode"
              onChange={handleInputChange}
              ListOptions={fieldData.meetingMode}
            >
              Metting before Trip
            </Select>
          </div>

          {/* Trip Desscription */}
          <div className="w-full grid grid-cols-3 gap-4 mt-8">
            <div className="col-span-2">
              <TextInput
                fieldName="tripTitle"
                onChange={handleInputChange}
                placeholder="Trip Title"
              />
            </div>

            <Select
              fieldName="firstVisit"
              onChange={handleInputChange}
              ListOptions={fieldData.firstVisit}
            >
              First Visit
            </Select>

            <Select
              fieldName="accomodation"
              onChange={handleInputChange}
              ListOptions={fieldData.accomodation}
            >
              Accomodation
            </Select>

            <Select
              fieldName="typeOfJourney"
              onChange={handleInputChange}
              ListOptions={fieldData.typeOfJourney}
            >
              Type of Journey
            </Select>

            <Select
              fieldName="gettingAround"
              onChange={handleInputChange}
              ListOptions={fieldData.gettingAround}
            >
              Getting Around
            </Select>

            <Select
              fieldName="workAndTravel"
              onChange={handleInputChange}
              ListOptions={fieldData.workAndTravel}
            >
              Work & Travel
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
              fieldName="itinerary"
              onChange={handleInputChange}
              ListOptions={fieldData.itinerary}
            >
              Itinerary
            </Select>

            <TextInput
              fieldName="shortDescription"
              onChange={handleInputChange}
              placeholder="Shortly Describe your trip"
              type="textarea"
            />

            <TextInput
              fieldName="PlaceIwantToSee"
              onChange={handleInputChange}
              placeholder="Places I want to see"
              type="textarea"
            />

            <TextInput
              fieldName="ThingsIwantToDo"
              onChange={handleInputChange}
              placeholder="Things I want to do"
              type="textarea"
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button>Create Trip</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTrip;
