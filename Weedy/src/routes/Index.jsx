/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { useToken } from "../utils/context/token-context";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

function Router() {
  const { token } = useToken();

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
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
