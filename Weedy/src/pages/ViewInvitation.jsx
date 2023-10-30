/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWeddings } from "../utils/apis/weddings/api";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import ViewModalImage from "../assets/view-modal.webp";
import ViewHeroImage from "../assets/view-hero.webp";
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
                  src={ViewHeroImage}
                  className="w-full h-full object-cover brightness-25"
                />
              </div>

              <div className="flex text-center z-10">
                <div className=" rounded-xl">
                  <img src={ViewModalImage} className=" rounded-xl w-[25rem]" />
                </div>

                <div className="flex flex-col gap-3 items-center justify-center bg-white w-[35rem] font-pt-serif text-gray-700 ">
                  <p className="capitalize text-2xl">Dear {to},</p>
                  <p>You are warmly invited to attend</p>
                  <div className="border border-[#E2D9C9] w-[20rem]"></div>
                  <p className="text-xl">The Wedding Ceremony of</p>
                  <h1 className=" font-parisienne text-6xl text-[#9F6F53]">
                    {weddings[0].brideName} & {weddings[0].groomName}
                  </h1>
                  <Button
                    label="Open now"
                    onClick={() => setShowModal(false)}
                    className="border-[#9F6F53] text-[#9F6F53] px-16"
                  />
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
              src={ViewHeroImage}
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
          <section>
            <p>The Groom and The Bride</p>
            <div className="flex">
              <div className="flex flex-col">
                <div>abc</div>
                <div>def</div>
              </div>
              <div className="flex flex-col">
                <div>abc</div>
                <div>def</div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
