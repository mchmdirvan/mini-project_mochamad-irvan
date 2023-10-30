/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWeddings } from "../utils/apis/weddings/api";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import FloralImage from "../assets/view-floral.webp";
import ModalImage from "../assets/view-modal.webp";
import BrideImage from "../assets/view-bride.webp";
import GroomImage from "../assets/view-groom.webp";
import HeroImage from "../assets/view-hero.webp";

import Navbar from "../components/NavbarInvitation";
import Button from "../components/Button";

export default function ViewIntitation() {
  const [weddings, setWeddings] = useState(null);
  const title =
    weddings === null
      ? "Weedy"
      : `The Wedding of ${weddings[0].brideName} & ${weddings[0].groomName}`;

  const [showModal, setShowModal] = useState(true);
  const { to } = useParams();

  useTitle(title);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getWeddings();
      setWeddings(result);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to fetch wedding data",
        showCancelButton: false,
      });
    }
  }

  return (
    <div>
      {showModal ? (
        weddings === null ? (
          <div className="flex justify-center items-center h-screen">
            <span className=" loading loading-infinity loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="hero">
              <div className="">
                <img
                  src={HeroImage}
                  className="w-full h-full object-cover brightness-25"
                />
              </div>

              <div className="flex text-center z-10">
                <div className=" rounded-xl">
                  <img src={ModalImage} className=" rounded-xl w-[25rem]" />
                </div>

                <div className="flex flex-col gap-5 items-center justify-center bg-white w-[35rem] font-pt-serif text-gray-700 ">
                  <p className=" mt-32 capitalize text-2xl text-black">
                    Dear {to},
                  </p>
                  <p>You are warmly invited to attend</p>
                  <div className="border border-[#E2D9C9] w-[20rem]"></div>
                  <p className="text-xl">The Wedding Ceremony of</p>
                  <h1 className=" font-parisienne text-6xl text-[#9F6F53]">
                    {weddings[0].brideName} & {weddings[0].groomName}
                  </h1>
                  <Button
                    label="Open now"
                    onClick={() => setShowModal(false)}
                    className="border-[#9F6F53] text-[#9F6F53] px-16 hover:text-white"
                  />
                  <img src={FloralImage} className="mt-auto w-[25rem]" />
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <div className="h-[200vh]">
          <Navbar weddings={weddings} />
          <header id="home" className="relative flex justify-center">
            <img
              src={HeroImage}
              alt="Wedding Cover"
              className="w-[100vw] h-[100vh] brightness-50 object-cover object-center"
            />
            <div className="absolute flex flex-col gap-8 items-center mt-60 md:mt-80 lg:mt-[18rem] text-white">
              <h1 className=" font-pt-serif text-white items-center text-center text-3xl">
                The Wedding Of
              </h1>
              <p className="font-parisienne text-8xl">
                {weddings[0].brideName} & {weddings[0].groomName}
              </p>
            </div>
          </header>

          {/* Bride & Groom Section */}
          <section className="flex flex-col gap-10 items-center pt-20 h-[100vh] ">
            <p className=" font-parisienne text-[#9F6F53] text-5xl">
              The Groom and The Bride
            </p>

            <div className="flex gap-5">
              <div className="flex flex-col gap-5 justify-center items-center">
                <img src={BrideImage} className=" rounded-full w-[15rem]" />
                <p className="text-2xl font-pt-serif text-[#837C61]">
                  {weddings[0].brideName}
                </p>
                <div className="border border-[#E2D9C9] w-[20rem]"></div>
                <p className=" font-pt-serif">{weddings[0].brideBio}</p>
              </div>

              <div className="flex justify-center items-center">
                <p className=" font-parisienne text-[10rem] text-[#C9AD91]">
                  &
                </p>
              </div>

              <div className="flex flex-col gap-5 justify-center items-center">
                <img src={GroomImage} className=" rounded-full w-[15rem]" />
                <p className="text-2xl font-pt-serif text-[#837C61]">
                  {weddings[0].groomName}
                </p>
                <div className="border border-[#E2D9C9] w-[20rem]"></div>
                <p className=" font-pt-serif">{weddings[0].brideBio}</p>
              </div>
            </div>
            <img src={FloralImage} className="mt-auto w-[25rem]" />
          </section>

          {/* Wedding Section */}
          <section></section>
        </div>
      )}
    </div>
  );
}
