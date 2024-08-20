import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword/compon/ForgotPassword";
import CreateTrip from "./Pages/CreateTrip";
import TravelCompanion from "./Pages/TravelCompanion";
import { InviteTraveler } from "./Pages/InviteTraveler";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
    {
      path: "login",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "create-trip",
      element: <CreateTrip />,
    },
    {
      path: "forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "travel-companion",
      element: <TravelCompanion />,
    },
    {
      path: "invite-travelers",
      element: <InviteTraveler />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
