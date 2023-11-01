/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import React from "react";

import NotFoundImage from "../../assets/not-found.webp";
import Button from "../../components/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex lg:flex-row flex-col bg-[#F7EDE5] items-center h-[100vh]">
      <div className=" max-h-[47vh] md:max-h-[60vh] lg:max-h-[100vh] lg:w-1/2">
        <img src={NotFoundImage} alt="" className=" lg:h-[100vh] object-cover" />
      </div>
      <div className="flex flex-col px-10 lg:px-5 gap-5 text-[#594545] lg:mb-20">
        <h1 className="font-bold text-2xl lg:text-5xl">This Page Does not Exist</h1>
        <p className="font-normal lg:text-2xl max-w-xl lg:leading-8">
          We are so happy that you want to join us on our special day, but this
          page is still under construction.
        </p>
        <p className="font-normal lg:text-2xl max-w-xl lg:leading-8">
          We are busy preparing everything for our big day, and we hope you are
          too. Please check back soon and don’t forget to RSVP.
        </p>
        <Button
          label="Let’s build something amazing with us!"
          className="font-bold text-[0.75rem] px-7 border border-black hover:text-white lg:text-lg"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
