/* eslint-disable no-unused-vars */
import React from "react";

import Logo from "../assets/logo.webp";
import { Input } from "./Form";
import Button from "./Button";

export default function Footer() {
  return (
    <>
      <footer className="flex bg-[#594545] justify-center items-center gap-20 py-20">
        <div className="flex flex-col text-white font-[Outfit]  max-w-sm px-12 ">
          <div className="flex flex-row flex-shrink-0 items-center justify-center ">
            <img src={Logo} alt="logo" className="h-20" />
            <h3 className="font-[Niconne] text-5xl">weedy</h3>
          </div>
          <p className="flex justify-center text-sm">
            Wedding Electronic Invitation Design Yourself
          </p>
          <p className="mt-5 text-justify">
            We are here to help you share the happiness of your wedding with
            your friends and family in a simple and convenient way. With Weedy,
            you don’t have to worry about printing, mailing, or visiting. You
            can celebrate your special day with style and ease.
          </p>
        </div>

        <div>
          <div className="flex flex-col text-[#F8F0E5] font-[Outfit] gap-10">
            <div className="flex flex-row gap-20">
              <div className="flex flex-col ">
                <h3 className="text-4xl mb-5 font-semibold">Contact Us</h3>
                <ul className="flex flex-col gap-2">
                  <li>+ 62 881 0800 70700</li>
                  <li>weedyidn@gmail.com</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-4xl mb-5 font-semibold">About Us</h3>
                <ul className="flex flex-col gap-2 list-disc ps-5">
                  <li>Location</li>
                  <li>Partnership</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className="text-4xl mb-5 font-semibold">Support Us</h3>
                <ul className="flex flex-col gap-2">
                  <li>abc</li>
                  <li>def</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className=" py-3 px-10 w-3/4 rounded-l-full bg-[#F8F0E5] text-[#472A08]"
                placeholder="Drop Your Mail Here"
              />
              <button className=" m-0 px-7 py-3 w-1/4 bg-[#9E7676] hover:bg-[#472A08] hover:ring hover:ring-white text-white rounded-r-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="text-center text-sm py-2 font-[Outfit] text-[#472A08]">
        &copy; 2023 Weedy | All Rights Reserved
      </footer>
    </>
  );
}