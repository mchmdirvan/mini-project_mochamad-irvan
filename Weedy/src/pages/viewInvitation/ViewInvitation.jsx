/* eslint-disable no-unused-vars */
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "animate.css";

import { createRsvp, getRsvp } from "../../utils/apis/rsvp/api";

import { getDetailWeddings } from "../../utils/apis/weddings/api";
import { useTitle } from "../../utils/hooks/customHooks";
import { rsvpSchema } from "../../utils/apis/rsvp";
import Swal from "../../utils/swal";

import BackgroundSchedule from "../../assets/view-bg-wedding.webp";
import GalleryImage1 from "../../assets/view-gallery-1.webp";
import GalleryImage2 from "../../assets/view-gallery-2.webp";
import GalleryImage3 from "../../assets/view-gallery-3.webp";
import GalleryImage4 from "../../assets/view-gallery-4.webp";
import FloralImage from "../../assets/view-floral.webp";
import IconRing from "../../assets/view-icon-ring.webp";
import IconBird from "../../assets/view-icon-bird.webp";
import ModalImage from "../../assets/view-modal.webp";
import BrideImage from "../../assets/view-bride.webp";
import GroomImage from "../../assets/view-groom.webp";
import HeroImage from "../../assets/view-hero.webp";
import IconGift from "../../assets/icon-gift.webp";
import OpenAILogo from "../../assets/openai.webp";

import { Input, TextArea, Select, RadioGroup } from "../../components/Input";
import Navbar from "../../components/NavbarInvitation";
import Button from "../../components/Button";

export default function ViewIntitation() {
  dayjs.locale("en");

  const [showModal, setShowModal] = useState(true);
  const [weddings, setWeddings] = useState(null);
  const [message, setMessage] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const to = queryParams.get("to");
  // const bride = queryParams.get("bride");
  // const groom = queryParams.get("groom");

  const params = useParams();
  const title =
    weddings === null
      ? "Weedy"
      : `The Wedding of ${weddings.brideFirstName} & ${weddings.groomFirstName}`;

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      isAttend: "",
    },
  });

  useTitle(title);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchMessage();
  }, []);

  async function fetchMessage() {
    try {
      const result = await getRsvp(+params.id);
      setMessage(result);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while fetching data rsvp. Please contact our support team for assistance.",
        showCancelButton: false,
      });
    }
  }

  async function onSubmit(data) {
    try {
      await createRsvp(data, +params.id);
      Swal.fire({
        title: "Success",
        text: "Well Done! Your RSVP is Set",
        showCancelButton: false,
      });
      reset();
      fetchMessage();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while create rsvp data. Please contact our support team for assistance.",
        showCancelButton: false,
      });
    }
  }

  async function fetchData() {
    try {
      const result = await getDetailWeddings(+params.id);
      setWeddings(result);
      // if (!bride || !groom) {
      //   navigate("/");
      // } else if (
      //   bride !== result.brideFirstName ||
      //   groom !== result.groomFirstName
      // ) {
      //   navigate("/");
      // }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while fetching data wedding. Please contact our support team for assistance.",
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
            {/* Modal Pages */}
            <div id="home" className="hero">
              <div className="">
                <img
                  src={HeroImage}
                  className="w-screen h-screen object-cover brightness-25"
                />
              </div>

              <div className=" animate__animated animate__fadeIn flex lg:flex-row flex-col text-center z-10">
                <div className=" rounded-xl">
                  <img
                    src={ModalImage}
                    className=" rounded-t-xl lg:rounded-l-xl max-h-[12rem] lg:max-h-full object-cover object-top w-full lg:w-[25rem]"
                  />
                </div>

                <div className=" px-12 flex flex-col gap-2 lg:gap-5 items-center justify-center bg-white lg:w-[35rem] font-pt-serif text-gray-700 rounded-b-xl lg:rounded-r-lg ">
                  <p className=" mt-5 text-sm lg:mt-32 capitalize lg:text-2xl text-black">
                    Dear {to},
                  </p>
                  <p className="text-sm lg:text-md">
                    You are warmly invited to attend
                  </p>

                  <div className="border border-[#E2D9C9] w-[13rem] lg:w-[20rem]"></div>
                  <p className=" text-sm lg:text-xl">The Wedding Ceremony of</p>
                  <h1 className=" font-parisienne text-2xl lg:text-6xl text-[#9F6F53]">
                    {weddings.brideFirstName} & {weddings.groomFirstName}
                  </h1>
                  <Button
                    label="Open now"
                    onClick={() => setShowModal(false)}
                    className="animate__animated animate__pulse animate__infinite	infinite border-[#9F6F53] text-[#9F6F53] px-16 hover:text-white mb-5"
                  />
                  <img
                    src={FloralImage}
                    className="mt-auto hidden lg:block lg:w-[25rem]"
                  />
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <div className="text-black bg-white">
          <Navbar weddings={weddings} />

          {/* Hero Section */}
          <header id="home" className="relative flex justify-center">
            <img
              src={HeroImage}
              alt="Wedding Cover"
              className="w-[100vw] h-[100vh] brightness-50 object-cover object-center"
            />
            <div className="animate__animated animate__fadeIn absolute flex flex-col gap-2 lg:gap-8 items-center mt-60 md:mt-80 lg:mt-[18rem] text-white">
              <h1 className=" font-pt-serif text-white items-center text-center text-xl lg:text-3xl">
                The Wedding Of
              </h1>
              <p className="font-parisienne text-5xl lg:text-8xl">
                {weddings.brideFirstName} & {weddings.groomFirstName}
              </p>
            </div>
          </header>

          {/* Bride & Groom Section */}
          <section
            id="brideAndGroom"
            className="bg-white flex flex-col gap-10 items-center pt-20 lg:h-[100vh] "
          >
            <p className=" animate__animated animate__fadeInUp animate__delay-1s font-parisienne text-[#9F6F53] text-2xl lg:text-5xl">
              The Groom and The Bride
            </p>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="animate__animated animate__fadeInLeft animate__delay-1s flex flex-col gap-5 justify-center items-center">
                <img src={BrideImage} className=" rounded-full w-[15rem]" />
                <p className="text-2xl font-pt-serif text-[#837C61]">
                  {weddings.brideFullName}
                </p>
                <div className="border border-[#E2D9C9] w-[20rem]"></div>
                <p className=" font-pt-serif">{weddings.brideBio}</p>
                <a
                  href={weddings.brideContact}
                  className=" hover:text-[#0095F6] text-5xl pt-2 font-parisienne text-[#C9AD91] "
                >
                  {weddings.brideFirstName}
                </a>
              </div>

              <div className="flex justify-center items-center">
                <p className=" font-parisienne text-[10rem] text-[#C9AD91]">
                  &
                </p>
              </div>

              <div className="animate__animated animate__fadeInRight animate__delay-1s flex flex-col gap-5 justify-center items-center">
                <img src={GroomImage} className=" rounded-full w-[15rem]" />
                <p className="text-2xl font-pt-serif text-[#837C61]">
                  {weddings.groomFullName}
                </p>
                <div className="border border-[#E2D9C9] w-[20rem]"></div>
                <p className=" font-pt-serif">{weddings.brideBio}</p>
                <a
                  href={weddings.groomContact}
                  className=" hover:text-[#0095F6] text-5xl pt-2 font-parisienne text-[#C9AD91] "
                >
                  {weddings.groomFirstName}
                </a>
              </div>
            </div>
            <img src={FloralImage} className="mt-auto w-[25rem]" />
          </section>

          {/* Wedding Section */}
          <section id="wedding">
            <div
              className="bg-cover bg-center lg:h-[95vh]"
              style={{ backgroundImage: `url(${BackgroundSchedule})` }}
            >
              <div className="flex flex-col lg:flex-row justify-center gap-10 bg-opacity-80">
                <div className="animate__animated animate__fadeInUp animate__delay-2s mt-5 flex flex-col items-center justify-center bg-white lg:py-20 lg:px-10 rounded-2xl gap-2 w-[40rem] font-pt-serif max-w-[20rem] lg:max-w-full py-10 px-10">
                  <h1 className=" font-parisienne text-[#9F6F53] text-4xl text-center">
                    Holy Matrimony
                  </h1>
                  <img src={IconRing} className="w-40 my-5" />
                  <p className="text-[#837C61] lg:text-xl text-md">
                    {dayjs(weddings.agreementDate)
                      .locale("en")
                      .format("dddd , DD MMMM YYYY")}
                  </p>
                  <p className="text-[#837C61] lg:text-xl text-md">
                    {dayjs(weddings.agreementDate).format("HH:mm")}
                  </p>
                  <div className="border border-[#E2D9C9] w-[20rem]"></div>
                  <p>Location</p>
                  <p className="text-[#9F6F53] text-2xl">
                    {weddings.agreementHall}
                  </p>
                  <p className="text-center text-sm">
                    {weddings.agreementAddress}
                  </p>
                  <Button
                    label="Open Maps"
                    className="text-[#9F6F53] border-[#9F6F53] hover:text-white"
                  />
                </div>

                <div className="animate__animated animate__fadeInUp animate__delay-2s mt-5 flex flex-col items-center justify-center bg-white lg:py-20 lg:px-10 rounded-2xl gap-2 w-[40rem] font-pt-serif max-w-[20rem]  lg:max-w-full py-10 px-10">
                  <h1 className=" font-parisienne text-[#9F6F53] text-4xl">
                    Reception
                  </h1>
                  <img src={IconBird} className="w-40 my-5" />
                  <p className="text-[#837C61] lg:text-xl text-md">
                    {dayjs(weddings.receptionDate)
                      .locale("en")
                      .format("dddd , DD MMMM YYYY")}
                  </p>
                  <p className="text-[#837C61] lg:text-xl text-md">
                    {dayjs(weddings.receptionDate).format("HH:mm")}
                  </p>
                  <div className="border border-[#E2D9C9] w-[20rem]"></div>
                  <p>Location</p>
                  <p className="text-[#9F6F53] text-2xl">
                    {weddings.receptionHall}
                  </p>
                  <p className="text-center text-sm">
                    {weddings.receptionAddress}
                  </p>
                  <Button
                    label="Open Maps"
                    className="text-[#9F6F53] border-[#9F6F53] hover:text-white"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Countdown Section */}
          <section
            id="countdown"
            className="flex flex-col gap-5  items-center justify-center bg-[#9F6F53] py-10"
          >
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
          <section
            id="ourMoments"
            className="bg-white flex flex-col gap-10 items-center py-20 h-[92vh] "
          >
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

          {/* Gift Section */}
          <section id="weddingGift">
            <div
              className="bg-cover bg-center lg:h-[50vh]"
              style={{ backgroundImage: `url(${BackgroundSchedule})` }}
            >
              <div className="flex  bg-opacity-80 ">
                <div className="flex gap-10 justify-center items-center rounded-lg bg-white mx-auto my-10 py-10 px-10 w-[90vw]">
                  <div className="flex flex-col items-center justify-center gap-5 lg:ms-[13rem] w-11/12">
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
                        <p>BCA : {weddings.brideFullName} - 1234567</p>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>

                  <div className="hidden lg:block">
                    <img src={IconGift} className=" w-32 me-20" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="bg-[#837C61] py-10">
            <h1 className=" font-parisienne text-center text-white  text-4xl lg:text-5xl mb-10">
              Our Love Stories
            </h1>
            <div className="flex items-center justify-center gap-10 ">
              <div className="flex flex-col gap-5">
                <img
                  src={GalleryImage1}
                  className="w-[20vw] rounded-xl hidden lg:block"
                />
                <img
                  src={GalleryImage2}
                  className="w-[20vw] rounded-xl hidden lg:block"
                />
              </div>

              <div className="border h-[50vh]"></div>

              <div className="flex flex-col gap-5 lg:gap-12 font-outfit text-white  max-w-sm pe-10">
                <div>
                  <h1 className="font-semibold text-2xl lg:text-4xl">
                    First Meet
                  </h1>
                  <p>{weddings.firstMeetStory}</p>
                </div>
                <div>
                  <h1 className="font-semibold text-2xl lg:text-4xl">
                    Love Stories
                  </h1>
                  <p>{weddings.loveStory}</p>
                </div>
                <div>
                  <h1 className="font-semibold text-2xl lg:text-4xl">
                    Decission to Marry
                  </h1>
                  <p>{weddings.decideToMarryStory}</p>
                </div>
              </div>
            </div>
          </section>

          {/* RSVP */}
          <section className="bg-white flex flex-col items-center py-10 ">
            <p className=" font-parisienne text-center text-[#9F6F53] text-5xl">
              Rsvp
            </p>
            <p>Please kindly RSVP your attendance</p>

            <form
              className="flex flex-col font-outfit lg:w-96 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                placeholder="Full Name"
                register={register}
                name="fullName"
                type="text"
                error={errors.fullName?.message}
                className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none"
              />
              <Input
                placeholder="Email"
                register={register}
                name="email"
                type="email"
                error={errors.email?.message}
                className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none "
              />
              <Input
                placeholder="Phone Number"
                register={register}
                name="phoneNumber"
                type="number"
                error={errors.phoneNumber?.message}
                className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none "
              />

              <RadioGroup
                name="isAttend"
                options={["Attend", "Not Attend"]}
                register={register}
                error={errors.isAttend?.message}
              />
              <Select
                name="totalPersons"
                options={[1, 2, 3, 4]}
                placeholder="Total Persons"
                register={register}
                error={errors.totalPersons?.message}
              />
              <TextArea
                placeholder="Your prays and greetings"
                rows={5}
                register={register}
                name="message"
                error={errors.message?.message}
                className=" bg-white border rounded-md  text-[#472A08] placeholder:text-sm text-sm focus:outline-none w-full "
              />
              <Button
                label="Submit"
                className="border-black hover:text-white"
                disabled={isSubmitting}
              />
            </form>

            <div className="border border-[#E2D9C9] w-[20vw] mt-10"></div>

            {/* Message Section */}
            <div className="flex flex-col mb-10 px-10 py-10 max-h-[50vh] overflow-auto lg:w-[40vw]  rounded-2xl scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-track-slate-200 scrollbar-thumb-slate-950 overflow-y-scroll ">
              {message.map((key, index) => (
                <div className="font-outfit" key={index}>
                  <p className=" text-[#C9AD91] text-2xl">{key.fullName}</p>
                  <p className="lg:w-[30vw]"> {key.message}</p>
                  <div className="border border-[#E2D9C9] lg:w-[30vw] my-2"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Qoutes Section */}
          <section className="flex flex-col items-center gap-2 lg:gap-5 bg-[#837C61] py-10">
            <p className=" font-outfit lg:text-xl text-center px-10 lg:max-w-6xl text-white mb-5">
              `{weddings.scriptureQuotes}`
            </p>
            <div className="border border-[#E2D9C9] w-[13rem]  lg:w-[20rem]"></div>
            <p className="font-parisienne text-white text-3xl lg:text-5xl mt-5">
              {weddings.brideFirstName} & {weddings.groomFirstName}
            </p>
            <p className="font-pt-serif text-white">Thank You!</p>
          </section>

          {/* Footer */}
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

          {/* OpenAI Toggle */}
          <div>
            <img
              src={OpenAILogo}
              onClick={() => navigate("/ai-services")}
              className="animate__animated animate__pulse animate__infinite	infinite fixed bottom-14 right-14  w-10 z-10 rounded-full "
            />
          </div>
        </div>
      )}
    </div>
  );
}
