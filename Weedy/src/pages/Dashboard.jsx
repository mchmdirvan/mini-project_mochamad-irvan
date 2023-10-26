/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

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
  const { username } = useParams();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error("Error parsing JSON data from local storage:", error);
        return null;
      }
    }
    return null;
  }

  const user = getDataFromLocalStorage("user") || "";

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
              <XMarkIcon
                className="block h-8 w-8 hover:bg-blue-300 bg-white z-10"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className="block h-8 w-8 hover:bg-blue-300  bg-white z-10"
                aria-hidden="true"
              />
            )}
          </label>
        </div>

        {/* Pages */}
        <div className="flex flex-col py-10 font-[Outfit] items-center">
          <div className="flex flex-col">
            <div className="flex flex-row ">
              <div className="flex flex-col justify-center">
                <p className="text-sm lg:text-xl capitalize">Hi, {user}!</p>
                <h1 className="text-lg lg:text-4xl mt-5 font-bold max-w-lg lg:max-w-xl lg:leading-normal leading-7">
                  It’s time to craft your amazing digital wedding invitation.{" "}
                </h1>
              </div>
              <div>
                <img
                  src={DashboardImage}
                  alt="Dashboard Image"
                  className="lg:w-60 h-full max-w-[5rem] object-cover"
                />
              </div>
            </div>
            <Button
              label="Let’s get started!"
              className=" border-black hover:text-white w-full"
            />
          </div>

          {/* Navigation */}

          <div className="flex gap-2 mt-5 -z-50">
            <div className="relative">
              <img
                src={DashboardView}
                alt=""
                className="rounded-xl h-[17rem] max-w-[7rem] object-cover object-left border border-black sm:max-w-[14rem] sm:h-[20rem] sm:object-center lg:max-w-[13rem] lg:h-[22rem]"
              />
              <Button
                label="View Invitation"
                className="absolute bottom-[1rem] left-2  bg-white rounded-md border-black hover:text-white px-2 text-[0.7rem] lg:bottom-[2rem] lg:text-sm lg:px-10"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative">
                <img
                  src={DashboardCreate}
                  alt=""
                  className="rounded-xl max-h-[7rem] w-[14rem] object-cover object-top border border-black sm:w-[19rem] sm:max-h-[10rem] lg:w-[27rem] lg:max-h-[11rem]"
                />
                <Button
                  label="Create Invitation"
                  className="absolute bottom-[1rem] left-2  bg-white rounded-md border-black hover:text-white px-2 text-[0.7rem] lg:bottom-[2rem] lg:text-sm lg:px-10]"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <img
                    src={DashboradEdit}
                    alt=""
                    className="rounded-xl h-[9rem] max-w-[7rem] object-cover border border-black sm:max-w-[10rem] lg:max-w-[20rem] lg:w-[16rem] lg:h-[10rem]"
                  />
                  <Button
                    label="Edit Invitation"
                    className="absolute bottom-[1rem] left-2  bg-white rounded-md border-black hover:text-white px-2 text-[0.7rem] lg:bottom-[2rem] lg:text-sm lg:px-10]"
                  />
                </div>
                <div className="relative">
                  <img
                    src={DashboardAI}
                    alt=""
                    className="rounded-xl h-[9rem] max-w-[7rem] object-cover border border-black sm:max-w-[9rem] lg:max-w-[10rem] lg:h-[10rem]"
                  />
                  <Button
                    label="AI Services"
                    className="absolute bottom-[1rem] left-2  bg-white rounded-md border-black hover:text-white px-2 text-[0.7rem] lg:bottom-[2rem] lg:text-sm lg:px-10]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
