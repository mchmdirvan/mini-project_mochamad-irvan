/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import { useTitle } from "../utils/hooks/customHooks";
import LoginImage from "../assets/login.webp";
import { Input } from "../components/Form";
import Button from "../components/Button";

function Login() {
  useTitle("Sign In | Weedy");
  return (
    <>
      <div className="flex font-[Outfit]">
        <div className="relative hidden md:flex">
          <img
            src={LoginImage}
            alt="Login Image"
            className=" h-[100vh] object-cover"
          />
          <h1 className="absolute inset-x-0 bottom-24 text-center text-white text-4xl font-bold">
            Welcome Back, <br /> We missed you!
          </h1>
        </div>

        <div className="flex flex-col text-[#472A08] gap-10 justify-center px-10 py-20 w-3/2 mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-5xl">Sign In</h1>
            <p className="text-xl font-light">
              Welcome back! Please login to your account
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <Input
              className="border-b border-[#472A08] text-[#472A08] placeholder:text-[#472A08] w-[28rem] placeholder:text-xl focus:outline-none"
              placeholder="Enter your Username"
            />
            <Input
              className="border-b border-[#472A08] text-[#472A08] placeholder:text-[#472A08] w-[28rem] placeholder:text-xl focus:outline-none"
              placeholder="Enter your Password"
            />
          </div>

          <div className="flex flex-col gap-2 items-center">
            <Button
              label="Sign in"
              className="text-[#472A08] w-[28rem] border border-[#472A08] font-bold text-xl"
            />
            <p>
              Don't have an account yet?{" "}
              <a href="#" className="underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
