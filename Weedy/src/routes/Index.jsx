/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import { useToken } from "../utils/context/token-context";
import { setAxiosConfig } from "../utils/apis/axiosWithConfig";

import CreateInvitation from "../pages/CreateInvitation";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", import.meta.env.VITE_BASE_URL);
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
      path: "/dashboard/:username",
      element: token === "" ? <Navigate to="/login" /> : <Dashboard />,
    },
    {
      path: "/CreateInvitation",
      element: token === "" ? <Navigate to="/login" /> : <CreateInvitation />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
