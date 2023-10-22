/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import ContactImage from "../assets/contact-section.webp";
import { useTitle } from "../utils/hooks/customHooks";
import HeroImage from "../assets/hero-section.webp";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/footer";

export default function LandingPage() {
  useTitle("Weedy: Digital Wedding Invitation");
  return (
    <>
      <Navbar />
      <header className="relative flex justify-center">
        <img
          src={HeroImage}
          alt="Wedding Cover"
          className="w-[100vw] h-[100vh] brightness-50 object-cover object-bottom"
        />
        <div className="absolute flex flex-col items-center mt-60  md:mt-80">
          <h1 className=" md:text-4xl lg:text-5xl font-bold font-[Outfit] text-white">
            Make Your Wedding Unforgettable with{" "}
            <span className="font-[Niconne] md:text-6xl lg:text-8xl font-normal">
              weedy
            </span>
          </h1>
          <p className="md:text-xl lg:text-2xl font-[Outfit] text-white">
            A Modern Way to Invite Your Guests to Your Wedding
          </p>
          <Button
            label="let's go!"
            className="font-[Niconne] text-2xl text-[#F8F0E5]"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-[#9E7676] flex flex-col sm:flex-row font-[Outfit]">
        <div className="flex flex-col md:w-1/2 py-10 md:py-20 ps-5 sm:ps-20 lg:ps-10 items-center sm:items-start">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold max-w-md md:max-w-[20rem] lg:max-w-[30rem]">
            Do You Have a{" "}
            <span className="underline decoration-2	underline-offset-4">
              Problem
            </span>{" "}
            Like This?
          </h2>

          <div className="flex flex-wrap mt-5 md:gap-5 gap-2 md:max-w-lg ">
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-3 md:px-7 py-2 gap-5 max-w-[12rem] lg:max-w-[15rem] hover:ring-2 hover:ring-white">
              <p className="font-extrabold">1</p>
              <p>
                Confused about how to invite guests who live outside of your
                city?
              </p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-3 md:px-7 py-2 gap-5 max-w-[10rem] lg:max-w-[12rem] hover:ring-2 hover:ring-white">
              <p className="font-extrabold">2</p>
              <p>Don't know how many guests will come to your wedding?</p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-3 md:px-7 py-2 gap-5 max-w-[10rem] lg:max-w-[12rem] hover:ring-2 hover:ring-white">
              <p className="font-extrabold">3</p>
              <p>Don't have time to send invitations to guests' homes?</p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-3 md:px-7 py-2 gap-5 max-w-[12rem] lg:max-w-[15rem] hover:ring-2 hover:ring-white">
              <p className="font-extrabold">4</p>
              <p>
                Budget is tight but want to invite thousands of guests to your
                wedding?
              </p>
            </div>
          </div>
        </div>

        <div className="sm:border-x-2 sm:border-white"></div>

        <div className="flex flex-col justify-center md:w-1/2 md:px-10 py-10 items-center md:items-start px-5 sm:text-start sm:max-w-[16rem] md:max-w-lg text-center">
          <h2 className="text-white md:text-3xl  lg:text-4xl font-semibold text-2xl mb-2 ">
            We Have{" "}
            <span className="underline decoration-2	underline-offset-4">
              Solutions
            </span>{" "}
            for you
          </h2>
          <p className="text-[#F8F0E5] max-w-md pt-2">
            Digital Invitations | RSVP | Wedding Gift | Photo Gallery |
            Countdown Date | Quotes | Design Revision
          </p>
        </div>
      </section>

      {/* Reason Section */}
      <section className="bg-[#F8F0E5] flex flex-col sm:flex-row font-[Outfit]">
        <div className="flex flex-col justify-center items-center sm:items-start py-5 px-10 sm:w-1/2 md:ps-20">
          <h2 className="text-[#472A08] text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold">
            <span className="underline decoration-2	underline-offset-4">
              Why
            </span>{" "}
            <span className="font-[Niconne] text-5xl md:text-6xl lg:text-7xl font-medium">
              weddy
            </span>
          </h2>
          <p className="text-[#472A08] max-w-lg pt-2 text-xl lg:text-2xl">
            We offer high-quality products and services that will wow your
            guests and make your day memorable.
          </p>
        </div>

        <div className="md:w-1/2 pb-10">
          <div className="flex flex-wrap mt-5 gap-5 px-5 lg:max-w-xl">
            <div className="flex flex-col bg-[#9E7676] text-[#F8F0E5] border border-black rounded-xl px-7 py-5 lg:py-10 gap-2 max-w-[9rem] md:max-w-[12rem] lg:max-w-[17rem]  hover:ring-2 hover:ring-[#482A08]">
              <p className="font-extrabold text-xl lg:text-3xl text-white">
                High Quality
              </p>
              <p>
                we offer high quality wedding invitations that reflect your
                personality and style.
              </p>
            </div>
            <div className="flex flex-col bg-[#9E7676] text-[#F8F0E5] border border-black rounded-xl px-7 py-5 gap-2 max-w-[11rem] lg:max-w-[14rem] md:max-w-[14rem]  hover:ring-2 hover:ring-[#482A08]">
              <p className="font-extrabold text-xl lg:text-2xl text-white">
                Memorable
              </p>
              <p>
                Our invitations are not just cards, they are keepsakes that you
                and your loved ones will cherish for years to come.
              </p>
            </div>
            <div className="flex flex-col bg-[#9E7676] text-[#F8F0E5] border border-black rounded-xl px-7 py-5 gap-2 max-w-[11rem] lg:max-w-[14rem] md:max-w-[14rem] hover:ring-2 hover:ring-[#482A08]">
              <p className="font-extrabold text-xl lg:text-2xl text-white">
                Innovation
              </p>
              <p>
                We are always looking for new ways to make your wedding
                invitations unique and exciting.
              </p>
            </div>
            <div className="flex flex-col bg-[#9E7676] text-[#F8F0E5] border border-black rounded-xl px-7 py-5 lg:py-10 gap-2 max-w-[9rem] lg:max-w-[18rem] md:max-w-[12rem] hover:ring-2 hover:ring-[#482A08]">
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
      <section className="bg-[#9E7676] flex flex-col font-[Outfit] justify-center items-center py-10">
        <p className=" text-2xl text-white text-center">
          Price list of Digital Wedding Invitations by{" "}
          <span className="font-[Niconne] text-4xl font-normal">weedy</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-2 mt-5 items-center">

          <div className="flex flex-col items-end md:max-w-[26rem] lg:max-w-[27rem] py-10 ">
            <div className="flex flex-col bg-[#F8F0E5] border border-[#594545] rounded-xl items-center text-[#472A08] px-10 md:px-20 py-10 sm:h-[27rem] h-[25rem] hover:ring-white hover:ring ">
              <p className="line-through font-light pt-5">350.000 IDR</p>
              <h2 className="font-bold text-5xl">99.000 IDR</h2>
              <p className="mt-5 self-start">Our Features: </p>
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

          <div className="flex flex-col items-end lg:max-w-[27rem] py-10 md:max-w-[26rem]">
            <div className="flex  flex-col  bg-[#F8F0E5] border border-[#594545] rounded-xl items-center text-[#472A08] px-10 md:px-20 py-10 lg:h-[27rem] hover:ring hover:ring-white">
              <p className="text-center">
                Get a digital wedding invitation for free by supporting us on
                social media.{" "}
              </p>
              <h2 className="font-bold text-5xl">0 IDR</h2>
              <p className="mt-5 self-start">All You Have To-Do is: </p>
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
      <section className="flex flex-col items-center justify-center bg-[#F8F0E5] text-[#472A08] font-[Outfit] py-12 px-5">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Your{" "}
          <span className="underline decoration-2	underline-offset-4">Plan</span>{" "}
          Your{" "}
          <span className="underline decoration-2	underline-offset-4">
            Choice
          </span>
        </h2>
        <p className=" text-center text-lg lg:text-xl">
          Make your wedding even more special with our website invitations
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <div className="flex bg-[#9E7676] items-center justify-center  px-12 md:px-24 py-20 gap-5">

          <div className="flex flex-col">
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
            <Button label="Consultation" className="text-[#F8F0E5]" />
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
