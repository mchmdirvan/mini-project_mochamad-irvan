/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getWeddings } from "../utils/apis/weddings/api";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import BackgroundSchedule from "../assets/view-bg-wedding.webp";
import GalleryImage1 from "../assets/view-gallery-1.webp";
import GalleryImage2 from "../assets/view-gallery-2.webp";
import GalleryImage3 from "../assets/view-gallery-3.webp";
import GalleryImage4 from "../assets/view-gallery-4.webp";
import FloralImage from "../assets/view-floral.webp";
import IconRing from "../assets/view-icon-ring.webp";
import IconBird from "../assets/view-icon-bird.webp";
import ModalImage from "../assets/view-modal.webp";
import BrideImage from "../assets/view-bride.webp";
import GroomImage from "../assets/view-groom.webp";
import HeroImage from "../assets/view-hero.webp";
import IconGift from "../assets/icon-gift.webp";

import Navbar from "../components/NavbarInvitation";
import Button from "../components/Button";

export default function ViewIntitation() {
  const [weddings, setWeddings] = useState(null);
  const title =
    weddings === null
      ? "Weedy"
      : `The Wedding of ${weddings[0].brideFirstName} & ${weddings[0].groomFirstName}`;

  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
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
            <div id="home" className="hero">
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
                    {weddings[0].brideFirstName} & {weddings[0].groomFirstName}
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
                {weddings[0].brideFirstName} & {weddings[0].groomFirstName}
              </p>
            </div>
          </header>

          {/* Bride & Groom Section */}
          <section id="brideAndGroom" className="flex flex-col gap-10 items-center pt-20 h-[100vh] ">
            <p className=" font-parisienne text-[#9F6F53] text-5xl">
              The Groom and The Bride
            </p>

            <div className="flex gap-5">
              <div className="flex flex-col gap-5 justify-center items-center">
                <img src={BrideImage} className=" rounded-full w-[15rem]" />
                <p className="text-2xl font-pt-serif text-[#837C61]">
                  {weddings[0].brideFullName}
                </p>
                <div className="border border-[#E2D9C9] w-[20rem]"></div>
                <p className=" font-pt-serif">{weddings[0].brideBio}</p>
                <p className="text-5xl pt-2 font-parisienne text-[#C9AD91] ">
                  {weddings[0].brideFirstName}
                </p>
              </div>

              <div className="flex justify-center items-center">
                <p className=" font-parisienne text-[10rem] text-[#C9AD91]">
                  &
                </p>
              </div>

              <div className="flex flex-col gap-5 justify-center items-center">
                <img src={GroomImage} className=" rounded-full w-[15rem]" />
                <p className="text-2xl font-pt-serif text-[#837C61]">
                  {weddings[0].groomFullName}
                </p>
                <div className="border border-[#E2D9C9] w-[20rem]"></div>
                <p className=" font-pt-serif">{weddings[0].brideBio}</p>
                <p className="text-5xl pt-2 font-parisienne text-[#C9AD91] ">
                  {weddings[0].groomFirstName}
                </p>
              </div>
            </div>
            <img src={FloralImage} className="mt-auto w-[25rem]" />
          </section>

          {/* Wedding Section */}
          <section id="wedding">
            <div
              className="bg-cover bg-center h-[92vh]"
              style={{ backgroundImage: `url(${BackgroundSchedule})` }}
            >
              <div className="flex justify-center gap-10 items-center bg-opacity-80 h-[92vh]">
                <div className="flex flex-col items-center justify-center bg-white py-20 px-10 rounded-2xl gap-2 w-[40rem] font-pt-serif">
                  <h1 className=" font-parisienne text-[#9F6F53] text-4xl">
                    Holy Matrimony
                  </h1>
                  <img src={IconRing} className="w-40" />
                  <p>{weddings[0].agreementDate}</p>
                  <div className="border border-[#E2D9C9] w-[20rem]"></div>
                  <p>Location</p>
                  <p className="text-[#9F6F53] text-2xl">
                    {weddings[0].agreementHall}
                  </p>
                  <p className="text-center">{weddings[0].agreementAddress}</p>
                  <Button
                    label="Open Maps"
                    className="text-[#9F6F53] border-[#9F6F53] hover:text-white"
                  />
                </div>

                <div className="flex flex-col items-center justify-center bg-white py-20 px-10 rounded-2xl gap-2 w-[40rem] font-pt-serif">
                  <h1 className=" font-parisienne text-[#9F6F53] text-4xl">
                    Reception
                  </h1>
                  <img src={IconBird} className="w-40" />
                  <p>{weddings[0].receptionDate}</p>
                  <div className="border border-[#E2D9C9] w-[20rem]"></div>
                  <p>Location</p>
                  <p className="text-[#9F6F53] text-2xl">
                    {weddings[0].receptionHall}
                  </p>
                  <p className="text-center">{weddings[0].receptionAddress}</p>
                  <Button
                    label="Open Maps"
                    className="text-[#9F6F53] border-[#9F6F53] hover:text-white"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Countdown Section */}
          <section id="countdown" className="flex flex-col gap-5  items-center justify-center bg-[#9F6F53] py-10">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-white rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-white rounded-box">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 35 }}></span>
                </span>
                sec
              </div>
            </div>
            <Button
              label="Save The Date"
              className="bg-white hover:text-white"
            />
          </section>

          {/* Gallery Section */}
          <section id="ourMoments" className="flex flex-col gap-10 items-center py-20 h-[92vh] ">
            <p className=" font-parisienne text-[#9F6F53] text-5xl">
              Our Moments
            </p>
            <div className="carousel rounded-box max-w-[92vw]">
              <div className="carousel-item ">
                <img src={GalleryImage1} className="max-w-xl object-cover" />
              </div>
              <div className="carousel-item">
                <img src={GalleryImage2} className="max-w-xl object-cover" />
              </div>
              <div className="carousel-item">
                <img src={GalleryImage3} className="max-w-xl object-cover" />
              </div>
              <div className="carousel-item">
                <img src={GalleryImage4} className="max-w-xl object-cover" />
              </div>
              <div className="carousel-item">
                <img src={GalleryImage1} className="max-w-xl object-cover" />
              </div>
              <div className="carousel-item">
                <img src={HeroImage} className="max-w-xl object-cover" />
              </div>
            </div>
          </section>

          <section id="weddingGift">
            <div
              className="bg-cover bg-center h-[50vh]"
              style={{ backgroundImage: `url(${BackgroundSchedule})` }}
            >
              <div className="flex  bg-opacity-80 ">
                <div className="flex gap-10 justify-center items-center rounded-lg bg-white mx-auto my-10 py-10 w-[90vw]">
                  <div className="flex flex-col items-center justify-center gap-5 ms-[13rem] w-11/12">
                    <p className=" font-parisienne text-center text-[#9F6F53] text-5xl">
                      Wedding Gift
                    </p>
                    <p className=" font-pt-serif max-w-sm text-lg text-center">
                      For family and friends who want to send gift, you can send
                      it through this button below.
                    </p>
                    <Button
                      label="Send Gift"
                      className="border-[#C9AD91] text-[#C9AD91]"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    />
                    {/* Modal Section */}
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box flex flex-col items-center gap-10 ">
                        <p className=" font-parisienne text-center text-[#9F6F53] text-5xl">
                          Wedding Gift
                        </p>
                        <p className=" font-pt-serif max-w-sm text-lg text-center">
                          You can send the wedding gift in the following ways.
                        </p>
                        <p>BCA : {weddings[0].brideFullName} - 1234567</p>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>

                  <div>
                    <img src={IconGift} className="w-32 me-20" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="flex flex-col items-center bg-[#837C61] py-10">
            <p className="font-parisienne text-white text-5xl">
              {weddings[0].brideFirstName} & {weddings[0].groomFirstName}
            </p>
            <p className="font-pt-serif text-white">Thank You!</p>
          </section>

          <footer className="flex flex-col justify-center items-center p-10 ">
            <p className="font-bold">Made with ❤️ by</p>
            <a
              className=" font-niconne text-5xl my-2 cursor-pointer hover:text-gray-500"
              onClick={() => navigate("/")}
            >
              weedy
            </a>
            <p>Copyright © 2023 - All right reserved</p>
          </footer>
        </div>
      )}
    </div>
  );
}
