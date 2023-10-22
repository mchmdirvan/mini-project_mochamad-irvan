/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../pages/LandingPage"
import NotFound from "../pages/NotFound";
import Login from "../pages/Login"

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound/>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
