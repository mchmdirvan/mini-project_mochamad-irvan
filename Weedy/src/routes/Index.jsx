/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import { useToken } from "../utils/context/token-context";
import { setAxiosConfig } from "../utils/apis/axiosWithConfig";

import CreateInvitation from "../pages/createInvitation/CreateInvitation";
import ViewInvitation from "../pages/viewInvitation/ViewInvitation";
import LandingPage from "../pages/landingPage/LandingPage";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/notFound/NotFound";
import OpenAI from "../pages/openAI/OpenAI"
import SignUp from "../pages/auth/SignUp"
import Login from "../pages/auth/Login";

function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig(import.meta.env.VITE_BASE_URL);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: token !== "" ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/sign-up",
      element: token !== "" ? <Navigate to="/" /> : <SignUp />,
    },
    {
      path: "/dashboard/:username",
      element: token === "" ? <Navigate to="/" /> : <Dashboard />,
    },
    {
      path: "/create-invitation",
      element: token === "" ? <Navigate to="/" /> : <CreateInvitation />,
    },
    {
      path: "/edit-invitation",
      element: token === "" ? <Navigate to="/" /> : <CreateInvitation />,
    },
    {
      path: "/invitation/:id",
      element: <ViewInvitation />,
    },
    {
      path: "/ai-services",
      element: <OpenAI />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
