import HeroImage from "../assets/hero-section.webp";
import Navbar from "../components/navbar";
import Button from "../components/button";

export default function App() {
  return (
    <>
      <div className="relative">
        <header className="absolute flex items-center justify-center">
          <img
            src={HeroImage}
            alt="Wedding Cover"
            className="w-[100vw] h-[100vh] brightness-50 object-cover object-bottom"
          />
          <div className="absolute flex flex-col pb-60 items-center">
            <h1 className="text-5xl font-bold font-[Outfit] text-white">
              Make Your Wedding Unforgettable with{" "}
              <span className="font-[Niconne] text-8xl font-normal">weedy</span>
            </h1>
            <p className="text-2xl font-[Outfit] text-white">
              A Modern Way to Invite Your Guests to Your Wedding
            </p>
            <Button
            label="let's go!" className="font-[Niconne] text-2xl"/>
          </div>
        </header>
        <Navbar />
      </div>
    </>
  );
}
