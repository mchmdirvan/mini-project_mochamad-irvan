/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";

import { useToken } from "../utils/context/token-context";
import { useTitle } from "../utils/hooks/customHooks";
import { login } from "../utils/apis/auth/api";
import LoginImage from "../assets/login.webp";
import { Input } from "../components/Form";
import Button from "../components/Button";
import Swal from "../utils/swal";

function Login() {
  useTitle("Sign In | Weedy");

  const { changeToken } = useToken();
  const navigate = useNavigate();

  const schema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(1, { message: "Password is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(data) {
    try {
      const result = await login(data);
      changeToken(JSON.stringify(result));
      navigate("/dashboard");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

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

          <form
            className="flex flex-col gap-10"
            onSubmit={handleSubmit(handleLogin)}
          >
            <Input
              register={register}
              name="username"
              type="text"
              error={errors.username?.message}
              className="border-b border-[#472A08] text-[#472A08] placeholder:text-[#472A08] w-[28rem] placeholder:text-xl focus:outline-none"
              placeholder="Enter your Username"
            />
            <Input
              register={register}
              name="password"
              type="password"
              error={errors.password?.message}
              className="border-b border-[#472A08] text-[#472A08] placeholder:text-[#472A08] w-[28rem] placeholder:text-xl focus:outline-none"
              placeholder="Enter your Password"
            />
            <Button
              label="Sign in"
              type="submit"
              className="text-[#472A08] w-[28rem] border border-[#472A08] font-bold text-xl hover:text-white"
              id="btn-submit"
            />
            <p className="self-center">
              Don't have an account yet?{" "}
              <a href="#" className="underline">
                Sign Up
              </a>
            </p>
          </form>

          <div className="flex flex-col gap-2 items-center">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
