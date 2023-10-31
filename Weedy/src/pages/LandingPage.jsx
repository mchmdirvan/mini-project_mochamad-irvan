/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import React from "react";
import 'animate.css';

import { getDataFromLocalStorage } from "../utils/localStorageFunction";
import ContactImage from "../assets/contact-section.webp";
import { useTitle } from "../utils/hooks/customHooks";
import HeroImage from "../assets/hero-section.webp";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function LandingPage() {
  useTitle("Weedy: Digital Wedding Invitation");
  
  const user = getDataFromLocalStorage("user") || "";
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <header id="home" className="relative flex justify-center">
        <img
          src={HeroImage}
          alt="Wedding Cover"
          className="w-[100vw] h-[100vh] brightness-50 object-cover object-bottom"
        />
        <div className="absolute flex flex-col items-center mt-60 md:mt-80 lg:mt-40">
          <h1 className="animate__animated animate__fadeIn text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-[Outfit] text-white">
            Make Your Wedding Unforgettable with{" "}
            <span className="font-[Niconne] text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-normal">
              weedy
            </span>
          </h1>
          <p className="text-white items-center text-center">
            <TypeAnimation
              sequence={[
                "A Modern Way to Invite Your Guests to Your Wedding",
                2000,
                "A Modern Way to Customize Every Detail of Your Invitations",
                2000,
                "A Modern Way to Express Your Love with Weedy",
                2000,
              ]}
              wrapper="span"
              speed={75}
              repeat={Infinity}
              className="text-sm sm:text-md px-5 md:text-2xl font-[Outfit]  text-white"
            />
          </p>
          <Button
            label="let's go!"
            className="animate__animated animate__pulse animate__infinite	infinite font-[Niconne] text-md sm:text-xl md:text-2xl text-[#F8F0E5]"
            onClick={()=> navigate(`/dashboard/${user}`)}
          />
        </div>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="bg-[#9E7676] flex flex-col sm:flex-row font-[Outfit]"
      >
        <div className=" animate__animated animate__fadeInLeft animate__delay-1s flex flex-col md:w-1/2 py-10 md:py-20 md:px-5 lg:ps-10 items-center md:items-start xl:px-32">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold max-w-md md:max-w-[20rem] lg:max-w-[30rem]">
            Do You Have a{" "}
            <span className="underline decoration-2	underline-offset-4">
              Problem
            </span>{" "}
            Like This?
          </h2>

          <div className="flex flex-wrap mt-5 md:gap-1 gap-2 md:max-w-lg font-medium justify-center lg:justify-start ">
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-3 md:px-6 py-2 gap-5 md:max-w-[12rem] max-w-[9rem] lg:max-w-[12rem] hover:ring-2 hover:ring-white">
              <p className="font-extrabold">1</p>
              <p>
                Confused about how to invite guests who live outside of your
                city?
              </p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-3 md:px-7 py-2 gap-5 max-w-[10rem] lg:max-w-[10rem] hover:ring-2 hover:ring-white">
              <p className="font-extrabold">2</p>
              <p>Don't know how many guests will come to your wedding?</p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-3 md:px-7 py-2 gap-5 max-w-[10rem] lg:max-w-[10rem] hover:ring-2 hover:ring-white">
              <p className="font-extrabold">3</p>
              <p>Don't have time to send invitations to guests' homes?</p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-3 md:px-7 py-2 gap-5 max-w-[9rem] lg:max-w-[12rem] hover:ring-2 hover:ring-white">
              <p className="font-extrabold">4</p>
              <p>
                Budget is tight but want to invite thousands of guests to your
                wedding?
              </p>
            </div>
          </div>
        </div>

        <div className="sm:border-x-2 sm:border-white"></div>

        <div className=" animate__animated animate__fadeInRight animate__delay-1s flex flex-col justify-center md:w-1/2 md:px-10 pb-10 items-center md:items-start px-5 sm:text-start sm:max-w-[16rem] md:max-w-lg text-center xl:px-32 xl:max-w-3xl">
          <h2
            className="text-white sm:text-lg
          md:text-3xl  lg:text-4xl font-semibold text-xl mb-2 "
          >
            We Have{" "}
            <span className="underline decoration-2	underline-offset-4">
              Solutions
            </span>{" "}
            for you
          </h2>
          <p className="text-[#F8F0E5] text-sm max-w-md pt-2">
            Digital Invitations | RSVP | Wedding Gift | Photo Gallery |
            Countdown Date | Quotes | Design Revision
          </p>
        </div>
      </section>

      {/* Reason Section */}
      <section className="  bg-[#F8F0E5] flex flex-col sm:flex-row font-[Outfit]">
        <div className="animate__animated animate__fadeInLeft animate__delay-2s flex flex-col justify-center items-center md:items-start py-5 px-10 sm:w-1/2 md:ps-20">
          <h2 className="text-[#472A08] text-3xl sm:text-xl md:text-4xl lg:text-5xl font-semibold">
            <span className="underline decoration-2	underline-offset-4">
              Why
            </span>{" "}
            <span className="font-[Niconne] text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-medium">
              weddy
            </span>
          </h2>
          <p className="text-[#472A08] max-w-lg pt-2  text-md md:text-xl lg:text-2xl text-center md:text-start">
            We offer high-quality products and services that will wow your
            guests and make your day memorable.
          </p>
        </div>

        <div className="animate__animated animate__fadeInRight animate__delay-2s md:w-1/2 pb-10">
          <div className="flex flex-wrap mt-5 gap-5 justify-center lg:max-w-xl">
            <div className="flex flex-col bg-[#9E7676] text-[#F8F0E5] border border-black rounded-xl px-7 py-5 lg:py-10 gap-2 max-w-[9rem] md:max-w-[9rem] lg:max-w-[17rem]  hover:ring-2 hover:ring-[#482A08]">
              <p className="font-extrabold text-xl lg:text-3xl text-white">
                High Quality
              </p>
              <p>
                we offer high quality wedding invitations that reflect your
                personality and style.
              </p>
            </div>
            <div className="flex flex-col bg-[#9E7676] text-[#F8F0E5] border border-black rounded-xl px-7 py-5 gap-2 max-w-[10rem] lg:max-w-[14rem] md:max-w-[12rem]  hover:ring-2 hover:ring-[#482A08]">
              <p className="font-extrabold text-xl lg:text-2xl text-white">
                Memorable
              </p>
              <p>
                Our invitations are not just cards, they are keepsakes that you
                and your loved ones will cherish for years to come.
              </p>
            </div>
            <div className="flex flex-col bg-[#9E7676] text-[#F8F0E5] border border-black rounded-xl px-7 py-5 gap-2 max-w-[10rem] lg:max-w-[14rem] md:max-w-[12rem] hover:ring-2 hover:ring-[#482A08]">
              <p className="font-extrabold text-xl lg:text-2xl text-white">
                Innovation
              </p>
              <p>
                We are always looking for new ways to make your wedding
                invitations unique and exciting.
              </p>
            </div>
            <div className="flex flex-col bg-[#9E7676] text-[#F8F0E5] border border-black rounded-xl px-7 py-5 lg:py-10 gap-2 max-w-[9rem] lg:max-w-[18rem] md:max-w-[9rem] hover:ring-2 hover:ring-[#482A08]">
              <p className="font-extrabold text-xl lg:text-3xl text-white">
                Budget Friendly
              </p>
              <p>
                we offer budget friendly options for your wedding invitations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricelist section */}
      <section
        id="pricing"
        className="bg-[#9E7676] flex flex-col font-[Outfit] justify-center items-center py-10"
      >
        <p className="animate__animated animate__fadeInUp animate__delay-3s px-5 text-sm font-semibold md:text-2xl text-white text-center">
          Price list of Digital Wedding Invitations by{" "}
          <span className="font-[Niconne] text-2xl md:text-4xl font-normal">
            weedy
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-2 lg:gap-20 items-center sm:px-3 md:px-5">
          <div className="animate__animated animate__fadeInUp animate__delay-3s flex flex-col items-end py-10 ">
            <div className="flex flex-col bg-[#F8F0E5] border border-[#594545] rounded-xl items-center text-[#472A08] px-10 md:px-10 py-10 w-[21rem] lg:w-[25rem] sm:w-[18rem] sm:h-[29rem] h-[25rem] hover:ring-white hover:ring ">
              <p className="line-through font-light pt-5">350.000 IDR</p>
              <h2 className="font-bold text-3xl lg:text-4xl  xl:text-5xl">
                99.000 IDR
              </h2>
              <p className="mt-5 self-start font-bold">Our Features: </p>
              <ul className="list-disc">
                <li>Bride and Groom name</li>
                <li>Quote </li>
                <li>Countdown Date </li>
                <li>Photo Gallery </li>
                <li>RSVP & Wish </li>
                <li>Wedding Gift (QR Code) </li>
                <li>Two Revisions Included</li>
              </ul>
            </div>
            <Button label="Order Now" className="text-[#F8F0E5]" />
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-3s flex flex-col items-end max-w-[21rem] py-10">
            <div className="flex  flex-col  bg-[#F8F0E5] border border-[#594545] rounded-xl items-center text-[#472A08] px-10 md:px-10 py-10 lg:h-[29rem] hover:ring hover:ring-white sm:w-[18rem] sm:h-[29rem] lg:w-[25rem]">
              <p className="text-center text-sm sm:text-[0.7rem] lg:text-md pb-2">
                Get a digital wedding invitation for free by supporting us on
                social media.{" "}
              </p>
              <h2 className="font-bold text-3xl lg:text-4xl  xl:text-5xl">
                0 IDR
              </h2>
              <p className="mt-5 self-start font-bold">
                All You Have To-Do is:{" "}
              </p>
              <ul className="list-disc ps-7">
                <li>Follow our Instagram account @weedyidn</li>
                <li>Share our service in your Instagram stories and tag us </li>
                <li>
                  Tag three of your friends who are getting married soon or who
                  might be interested in our service{" "}
                </li>
              </ul>
            </div>
            <Button label="Try For Free" className="text-[#F8F0E5]" />
          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section className=" flex flex-col items-center justify-center bg-[#F8F0E5] text-[#472A08] font-[Outfit] py-12 px-5">
        <h2 className="animate__animated animate__fadeInUp animate__delay-4s font-bold text-2xl md:text-3xl lg:text-4xl">
          Your{" "}
          <span className="underline decoration-2	underline-offset-4">Plan</span>{" "}
          Your{" "}
          <span className="underline decoration-2	underline-offset-4">
            Choice
          </span>
        </h2>
        <p className="animate__animated animate__fadeInUp animate__delay-4s text-center text-lg lg:text-xl">
          Make your wedding even more special with our website invitations
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="flex bg-[#9E7676] items-center justify-center  px-12 md:px-24 py-20 gap-5">
          <div className="animate__animated animate__fadeInUp animate__delay-4s flex flex-col">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-white">
              <span className="underline decoration-2	underline-offset-4">
                Meeting
              </span>{" "}
              and have a chit-chat with us!
            </h2>
            <p className="text-[#F8F0E5] lg:text-2xl max-w-2xl mt-2">
              Let’s consult with our team to help you find the perfect match for
              your digital wedding invitations.
            </p>
            <Button label="Consultation" className="text-[#F8F0E5] w-40" />
          </div>
          <div>
            <img
              src={ContactImage}
              alt="contact image"
              className=" w-[19rem] rounded-lg hidden sm:block"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
