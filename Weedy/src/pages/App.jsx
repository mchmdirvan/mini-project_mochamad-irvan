/* eslint-disable react/no-unescaped-entities */
import HeroImage from "../assets/hero-section.webp";
import Navbar from "../components/navbar";
import Button from "../components/button";

export default function App() {
  return (
    <>
      <Navbar />
      <header className="relative flex justify-center">
        <img
          src={HeroImage}
          alt="Wedding Cover"
          className="w-[100vw] h-[100vh] brightness-50 object-cover object-bottom"
        />
        <div className="absolute flex flex-col items-center mt-40">
          <h1 className="text-5xl font-bold font-[Outfit] text-white">
            Make Your Wedding Unforgettable with{" "}
            <span className="font-[Niconne] text-8xl font-normal">weedy</span>
          </h1>
          <p className="text-2xl font-[Outfit] text-white">
            A Modern Way to Invite Your Guests to Your Wedding
          </p>
          <Button label="let's go!" className="font-[Niconne] text-2xl" />
        </div>
      </header>

      <section className="bg-[#9E7676] flex font-[Outfit]">
        <div className="w-1/2 py-20 ps-28">
          <h2 className="text-white text-5xl font-semibold max-w-md">
            Do You Have a{" "}
            <span className="underline decoration-2	underline-offset-4">
              Problem
            </span>{" "}
            Like This?
          </h2>

          <div className="flex flex-wrap mt-5 gap-5 max-w-lg">
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-7 py-2 gap-5 max-w-[15rem]">
              <p className="font-extrabold">1</p>
              <p>
                Confused about how to invite guests who live outside of your
                city?
              </p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-7 py-2 gap-5 max-w-[12rem]">
              <p className="font-extrabold">2</p>
              <p>Don't know how many guests will come to your wedding?</p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-7 py-2 gap-5 max-w-[12rem]">
              <p className="font-extrabold">3</p>
              <p>Don't have time to send invitations to guests' homes?</p>
            </div>
            <div className="flex items-center bg-[#F8F0E5] text-[#472A08] border border-black rounded-xl px-7 py-2 gap-5 max-w-[15rem]">
              <p className="font-extrabold">4</p>
              <p>
                Budget is tight but want to invite thousands of guests to your
                wedding?
              </p>
            </div>
          </div>
        </div>

        <div className="border-x-2 border-white"></div>

        <div className="flex flex-col justify-center w-1/2 ps-20">
          <h2 className="text-white text-4xl font-semibold">
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
    </>
  );
}
