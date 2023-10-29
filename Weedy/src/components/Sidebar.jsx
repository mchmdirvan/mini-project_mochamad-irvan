/* eslint-disable no-unused-vars */
import { useNavigate, Link } from "react-router-dom";
import React from "react";

import ProfileImage from "../assets/profile-image.webp";
import Logo from "../assets/logo-bw.webp";

import { getDataFromLocalStorage } from "../utils/localStorageFunction";
import { useToken } from "../utils/context/token-context";
import Button from "../components/Button";
import Swal from "../utils/swal";

export default function Sidebar() {
  const { token, changeToken } = useToken();
  const navigate = useNavigate();

  const user = getDataFromLocalStorage("user") || "";

  function handleLogout() {
    localStorage.removeItem("user");
    changeToken();
    Swal.fire({
      title: "Success",
      text: "Successfully logout",
      showCancelButton: false,
    });
    navigate("/");
  }

  return (
    <>
      <div className="drawer lg:drawer-open font-[Outfit] ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="menu p-4 w-80 min-h-full bg-[#F8F7FC]  ">
            {/* Sidebar content here */}
            <div className="  flex justify-center items-center  ">
              <img className=" h-20" src={Logo} alt="Your Company" />
              <Link
                className=" text-black hover:text-[#594545] font-[Niconne] text-5xl"
                to="/"
              >
                weedy
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center my-10 ">
              <img src={ProfileImage} alt="photo profile" className="w-20" />
              <p className="font-semibold my-2 text-2xl capitalize">{user}</p>
            </div>
            <ul className="flex flex-col mx-auto gap-5 text-lg">
              <li>
                <a onClick={() => navigate(`/dashboard/${user}`)}>Dashboard</a>
              </li>
              <li>
                <a onClick={() => navigate(`/create-invitation`)}>
                  Create Invitation
                </a>
              </li>
              <li>
                <a>Edit Invitation</a>
              </li>
              <li>
                <a>View Invitation</a>
              </li>
              <Button
                label="Sign out"
                className="text-xl border-black hover:text-white ms-2 "
                onClick={handleLogout}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
