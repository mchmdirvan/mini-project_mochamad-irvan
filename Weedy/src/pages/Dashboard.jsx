/* eslint-disable no-unused-vars */
import React from "react";

import DashboardCreate from "../assets/dashboard-create.webp";
import DashboardImage from "../assets/dashboard-image.webp";
import DashboradEdit from "../assets/dashboard-edit.webp";
import DashboardView from "../assets/dashboard-view.webp";
import DashboardAI from "../assets/dashboard-ai.webp";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";

export default function Dashboard() {
  return (
    <div className="drawer">
      <Sidebar />
      <div className=" drawer-content">
        <div className="flex flex-col my-10 font-[Outfit] items-center">
          <div className="flex flex-row  ">
            <div className="flex flex-col gap-5">
              <p className="text-xl">Hi, Admin!</p>
              <h1 className="text-4xl font-bold max-w-lg leading-normal">
                It’s time to craft your amazing digital wedding invitation.{" "}
              </h1>
              <Button
                label="Let’s get started!"
                className="mt-0 border-black hover:text-white"
              />
            </div>
            <div>
              <img
                src={DashboardImage}
                alt="Dashboard Image"
                className="w-60"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="relative">
              <img
                src={DashboardView}
                alt="Dashboard Image"
                className=" rounded-xl max-w-[16rem] h-[23rem] object-cover border border-black"
              />
              <Button
                className="absolute bottom-[2rem] left-2  bg-white p-2 rounded-md border-black hover:text-white"
                label="View Invitation"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <div className="relative">
                  <img
                    src={DashboardCreate}
                    alt="Dashboard Image"
                    className=" rounded-xl w-[29rem] max-h-[12rem] object-cover object-top border border-black"
                  />
                  <Button
                    className="absolute bottom-[1rem] left-2  bg-white p-2 rounded-md border-black hover:text-white"
                    label="Create Invitation"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <div className="relative">
                    <img
                      src={DashboradEdit}
                      alt="Dashboard Image"
                      className=" rounded-xl w-[18rem] max-h-[10rem] object-cover border border-black"
                    />
                    <Button
                      className="absolute bottom-[1rem] left-2  bg-white p-2 rounded-md border-black hover:text-white"
                      label="Edit Invitation"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <img
                      src={DashboardAI}
                      alt="Dashboard Image"
                      className=" rounded-xl max-w-[10rem] h-[10rem] object-cover border border-black"
                    />
                    <Button
                      className="absolute bottom-[1rem] left-2  bg-white p-2 rounded-md border-black hover:text-white text-sm px-3"
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
