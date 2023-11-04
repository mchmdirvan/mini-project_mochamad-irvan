/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "animate.css";

import { saveDataToLocalStorage } from "../../utils/localStorageFunction";
import { userLogin, registerSchema } from "../../utils/apis/auth";
import { useToken } from "../../utils/context/token-context";
import { useTitle } from "../../utils/hooks/customHooks";
import LoginImage from "../../assets/login.webp";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import Swal from "../../utils/swal";

function SignUp() {
  useTitle("Sign Up | Weedy");

  const [username, setUsername] = useState("");
  const { changeToken } = useToken();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  async function handleLogin(data) {
    try {
      const result = await userLogin(data);
      changeToken(JSON.stringify(result.payload));

      const { username } = data;
      setUsername(username);
      saveDataToLocalStorage("user", username);

      navigate(`/dashboard/${username}`);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred",
        showCancelButton: false,
      });
    }
  }

  return (
    <>
      <div className="flex font-[Outfit]">
        <div className="relative hidden md:flex animate__animated animate__fadeInLeft ">
          <img
            src={LoginImage}
            alt="Login Image"
            className="  h-full max-h-[100vh] object-cover"
          />

          <h1 className="  absolute inset-x-0 bottom-24 text-center text-white text-4xl font-bold">
            Welcome! <br />Execited you're here!
          </h1>
        </div>

        <div className="animate__animated animate__fadeInRight animate__animated animate__fadeInLeft flex flex-col text-[#472A08] gap-10 justify-center px-10 py-20 w-3/2 mx-auto">
          <div className=" flex flex-col gap-2">
            <h1 className="font-bold text-5xl">Sign Up</h1>
            <p className="text-sm md:text-xl font-light">
              Join us in making beautiful wedding invitations by signing up!
            </p>
          </div>

          <form
            className="flex flex-col gap-10 "
            onSubmit={handleSubmit(handleLogin)}
          >
            <div>
              <Input
                register={register}
                name="email"
                type="email"
                error={errors.email?.message}
                className=" border-b border-[#472A08] text-[#472A08] placeholder:text-[#472A08] w-full placeholder:text-xl focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Input
                register={register}
                name="password"
                type="password"
                error={errors.password?.message}
                className=" border-b border-[#472A08] text-[#472A08] placeholder:text-[#472A08] w-full placeholder:text-xl focus:outline-none"
                placeholder="Enter your Password"
              />
            </div>

            <Button
              label="Sign Up"
              type="submit"
              className="text-[#472A08] w-full border border-[#472A08] font-bold text-xl hover:text-white"
              id="btn-submit"
              disabled={isSubmitting}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
