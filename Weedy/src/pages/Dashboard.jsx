/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import DashboardCreate from "../assets/dashboard-create.webp";
import DashboardImage from "../assets/dashboard-image.webp";
import DashboradEdit from "../assets/dashboard-edit.webp";
import DashboardView from "../assets/dashboard-view.webp";
import DashboardAI from "../assets/dashboard-ai.webp";

import { useTitle } from "../utils/hooks/customHooks";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";

export default function Dashboard() {
  useTitle("Dashboard | Weedy");

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="drawer">
      <Sidebar />

      {/* Drawer */}
      <div className=" drawer-content">
        <div className="flex justify-between px-5 py-5 font-[Outfit] lg:hidden items-center">
          <p className="lg:hidden text-xl">
            Dashboard |{" "}
            <Link className="font-[Niconne] text-4xl font-normal" to="/">
              weedy
            </Link>
          </p>
          <label
            htmlFor="my-drawer-2"
            className=" drawer-button lg:hidden z-10"
            onClick={toggleDrawer}
          >
            {isDrawerOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </label>
        </div>

        {/* Pages */}
        <div className="flex flex-col my-2 font-[Outfit] items-center">
          <div className="flex flex-col px-10">
            <div className="flex flex-row ">
              <div className="flex flex-col justify-center">
                <p className="text-sm lg:text-xl">Hi, Admin!</p>
                <h1 className="text-lg lg:text-4xl mt-5 font-bold max-w-lg lg:leading-normal leading-7">
                  It’s time to craft your amazing digital wedding invitation.{" "}
                </h1>
              </div>
              <div>
                <img
                  src={DashboardImage}
                  alt="Dashboard Image"
                  className="lg:w-60 w-[30rem]"
                />
              </div>
            </div>
            <Button
              label="Let’s get started!"
              className=" border-black hover:text-white w-full lg:"
            />
          </div>

          {/* Navigation Section */}
          <div className="px-10 flex gap-2 lg:gap-5 mt-5">
            <div className={`${isDrawerOpen ? "hidden" : "relative"}`}>
              <img
                src={DashboardView}
                alt="Dashboard Image"
                className="rounded-xl h-[18rem] max-w-[7rem] sm:max-w-[14rem] sm:h-[21rem] lg:max-w-[16rem] lg:h-[23rem] object-cover border border-black"
              />
              <Button
                className="absolute bottom-[1rem] lg:bottom-[2rem] left-2  bg-white p-2 rounded-md border-black hover:text-white px-2 lg:px-10 lg:text-sm text-[0.7rem]"
                label="View Invitation"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <div className={`${isDrawerOpen ? "hidden" : "relative"}`}>
                  <img
                    src={DashboardCreate}
                    alt="Dashboard Image"
                    className=" rounded-xl w-[12rem] max-h-[7rem] sm:w-[20rem] sm:max-h-[10rem] lg:w-[29rem] lg:max-h-[12rem] object-cover object-top border border-black"
                  />
                  <Button
                    className="absolute bottom-[1rem] left-2  bg-white p-2 rounded-md border-black hover:text-white px-2 lg:px-10 lg:text-sm text-[0.7rem]"
                    label="Create Invitation"
                  />
                </div>
              </div>
              <div className="flex lg:gap-5 gap-2">
                <div>
                  <div className={`${isDrawerOpen ? "hidden" : "relative"}`}>
                    <img
                      src={DashboradEdit}
                      alt="Dashboard Image"
                      className=" rounded-xl max-w-[6rem] h-[10rem] sm:max-w-[10rem] lg:max-w-[20rem] lg:w-[18rem] lg:h-[10rem] object-cover border border-black"
                    />
                    <Button
                      className="absolute bottom-[1rem] left-2  bg-white p-2 rounded-md border-black hover:text-white px-2 lg:px-10 lg:text-sm text-[0.7rem]"
                      label="Edit Invitation"
                    />
                  </div>
                </div>
                <div>
                  <div className={`${isDrawerOpen ? "hidden" : "relative"}`}>
                    <img
                      src={DashboardAI}
                      alt="Dashboard Image"
                      className=" rounded-xl max-w-[5rem] h-[10rem] sm:max-w-[9rem] lg:max-w-[10rem] lg:h-[10rem] object-cover border border-black"
                    />
                    <Button
                      className="absolute bottom-[1rem] left-2  bg-white p-2 rounded-md border-black hover:text-white text-sm px-2 lg:px-10 lg:text-sm text-[0.7rem]"
                      label="AI Services"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
