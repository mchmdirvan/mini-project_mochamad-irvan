/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, Suspense } from "react";
import "animate.css";

import DashboardCreate from "../../assets/dashboard-create.webp";
import DashboardImage from "../../assets/dashboard-image.webp";
import DashboradEdit from "../../assets/dashboard-edit.webp";
import DashboardView from "../../assets/dashboard-view.webp";
import DashboardAI from "../../assets/dashboard-ai.webp";

import { getDataFromLocalStorage } from "../../utils/localStorageFunction";
import { getWeddings } from "../../utils/apis/weddings/api";
import { useTitle } from "../../utils/hooks/customHooks";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import Swal from "../../utils/swal";

export default function Dashboard() {
  useTitle("Dashboard | Weedy");

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const user = getDataFromLocalStorage("user") || "";
  const [weddings, setWeddings] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getWeddings();
      setWeddings(result);
      console.log(result)
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while fetching data wedding. Please contact our support team for assistance.",
        showCancelButton: false,
      });
    }
  }

  return (
    <div className="drawer">
      {/* Drawer and Sidebar*/}
      <Sidebar />
      <div className=" drawer-content bg-white text-black">
        <div className="flex justify-between px-10 py-5 font-[Outfit] lg:hidden items-center">
          <p className="lg:hidden text-xl">
            Dashboard |{" "}
            <Link className="font-[Niconne] text-4xl font-normal" to="/">
              weedy
            </Link>
          </p>
          <label
            htmlFor="my-drawer-2"
            className=" drawer-button lg:hidden"
            onClick={toggleDrawer}
          >
            <Bars3Icon className="block h-8 w-8 bg-white" aria-hidden="true" />
          </label>
        </div>

        {/* Pages */}
        <div className=" animate__animated animate__fadeInRight flex flex-col py-10 font-[Outfit] items-center ">
          <div className="flex flex-col px-10 h-full">
            <div className="flex flex-row  ">
              <div className="animate__animated animate__fadeIn flex flex-col justify-center">
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
              className=" animate__animated animate__pulse animate__infinite	infinite animate__delay-1s border-black hover:text-white w-full"
              onClick={() => navigate(`/create-invitation`)}
            />
          </div>

          {/* Navigation */}
          {/* Navigation to View */}
          <Suspense fallback={<div>loading</div>}>
            <div className="animate__animated animate__fadeIn  flex gap-2 mt-5 h-full">
              <div className="relative">
                <img
                  src={DashboardView}
                  alt=""
                  className="rounded-xl h-[17rem] max-w-[7rem] object-cover object-left border border-black sm:max-w-[14rem] sm:h-[20rem] sm:object-center lg:max-w-[13rem] lg:h-[22rem] hover:border-blue-400 hover:scale-105 transition-all"
                  onClick={() =>
                    navigate(
                      `/invitation/${weddings[0].selectedTheme}/${weddings[0].id}?to/irvan`
                    )
                  }
                />
                <Button
                  label="View Invitation"
                  className="absolute bottom-[1rem] left-2  bg-white rounded-md border-black hover:text-white px-2 text-[0.7rem] lg:bottom-[2rem] lg:text-sm lg:px-10"
                  onClick={() =>
                    navigate(
                      `/invitation/${weddings[0].selectedTheme}/${weddings[0].id}?to/irvan`
                    )
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* Navigation to Create */}
                <div className="relative">
                  <img
                    src={DashboardCreate}
                    alt=""
                    className="rounded-xl max-h-[7rem] w-[100%] object-cover object-top border border-black sm:w-[19rem] sm:max-h-[10rem] lg:w-[27rem] lg:max-h-[11rem] hover:border-blue-400 hover:scale-105 transition-all"
                    onClick={() => navigate(`/create-invitation`)}
                  />
                  <Button
                    label="Create Invitation"
                    className="absolute bottom-[1rem] left-2  bg-white rounded-md border-black hover:text-white px-2 text-[0.7rem] lg:bottom-[2rem] lg:text-sm lg:px-10]"
                    onClick={() => navigate(`/create-invitation`)}
                  />
                </div>
                <div className="flex gap-2">
                  {/* Navigation to Edit */}
                  <div className="relative">
                    <img
                      src={DashboradEdit}
                      alt=""
                      className="rounded-xl h-[9rem] max-w-[7rem] w-[100%] object-cover border border-black sm:max-w-[10rem] lg:max-w-[20rem] lg:w-[16rem] lg:h-[10rem] hover:border-blue-400 hover:scale-105 transition-all"
                      onClick={() => navigate(`/edit-invitation`)}
                    />
                    <Button
                      label="Edit Invitation"
                      className="absolute bottom-[1rem] left-2  bg-white rounded-md border-black hover:text-white px-2 text-[0.7rem] lg:bottom-[2rem] lg:text-sm lg:px-10]"
                      onClick={() => navigate(`/edit-invitation`)}
                    />
                  </div>

                  {/* Navigation to AI */}
                  <div className="relative">
                    <img
                      src={DashboardAI}
                      alt=""
                      className="rounded-xl h-[9rem] max-w-[7rem] w-[100%] object-cover border border-black sm:max-w-[9rem] lg:max-w-[10rem] lg:h-[10rem] hover:border-blue-400 hover:scale-105 transition-all"
                      onClick={() => navigate("/ai-services")}
                    />
                    <Button
                      label="AI Services"
                      className="absolute bottom-[1rem] left-2  bg-white rounded-md border-black hover:text-white px-2 text-[0.7rem] lg:bottom-[2rem] lg:text-sm lg:px-10]"
                      onClick={() => navigate("/ai-services")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
