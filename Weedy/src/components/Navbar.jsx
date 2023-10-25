/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useToken } from "../utils/context/token-context";
import Logo from "../assets/logo.webp";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const { token, changeToken } = useToken();
  const navigate = useNavigate();

  function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error("Error parsing JSON data from local storage:", error);
        return null;
      }
    }
    return null;
  }

  const user = getDataFromLocalStorage("user") || "";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrolling
          ? "fixed w-full z-10  transition-all duration-500 bg-white"
          : "absolute w-full z-10 transition-all duration-500"
      }`}
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#472A08] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* LOGO */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch md:justify-start ">
                  <div className="flex flex-shrink-0 items-center">
                    <img className=" h-20" src={Logo} alt="Your Company" />
                    <a
                      href="#home"
                      className={`${
                        scrolling
                          ? "text-[#472A08] hover:text-[#9E7676]"
                          : "text-white hover:text-g"
                      } font-[Niconne] text-5xl`}
                    >
                      weedy
                    </a>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu
                    as="div"
                    className="relative ml-3 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                  >
                    <div className="hidden md:ml-6 md:block">
                      <ul
                        className={`${
                          scrolling
                            ? "text-[#472A08]  font-semibold"
                            : "text-white"
                        } font-[Outfit] items-center rounded-md px-3 py-2 text-base flex gap-10`}
                      >
                        <li>
                          <a href="#home" className="hover:text-[#9E7676]">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#features" className="hover:text-[#9E7676]">
                            Features
                          </a>
                        </li>
                        <li>
                          <a href="#pricing" className="hover:text-[#9E7676]">
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a href="#contact" className="hover:text-[#9E7676]">
                            Contact
                          </a>
                        </li>
                        <li>
                          {token === "" ? (
                            <a
                              href=""
                              className={`${
                                scrolling
                                  ? " text-white bg-[#472A08] font-normal hover:bg-white hover:text-[#472A08] hover:border hover:border-[#472A08]"
                                  : "text-white border border-white hover:bg-[#472A08]  "
                              } font-[Outfit] items-center rounded-md px-5 py-1`}
                              onClick={() => navigate("/login")}
                            >
                              Sign in
                            </a>
                          ) : (
                            <a
                              href=""
                              className={`${
                                scrolling
                                  ? " text-white bg-[#472A08] font-normal hover:bg-white hover:text-[#472A08] hover:border hover:border-[#472A08]"
                                  : "text-white border border-white hover:bg-[#472A08] "
                              } font-[Outfit] items-center rounded-md px-5 py-1`}
                              onClick={() => navigate(`/dashboard/${user}`)}
                            >
                              Dashboard
                            </a>
                          )}
                        </li>
                      </ul>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className=" md:hidden">
              <div className="px-2">
                <ul className="flex flex-col gap-2 bg-white text-[#472A08] font-[Outfit] font-semibold rounded-md px-3 py-5">
                  <li>
                    <a href="#home" className="hover:text-[#9E7676]">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="hover:text-[#9E7676]">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-[#9E7676]">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-[#9E7676]">
                      Contact
                    </a>
                  </li>
                  <li>
                    {token === "" ? (
                      <a
                        href=""
                        className={`${
                          scrolling
                            ? " text-white bg-[#472A08] font-normal hover:bg-white hover:text-[#472A08] hover:border hover:border-[#472A08]"
                            : "border border-[#472A08] hover:bg-[#472A08] "
                        } font-[Outfit] items-center rounded-md px-5 py-1`}
                        onClick={() => navigate("/login")}
                      >
                        Sign in
                      </a>
                    ) : (
                      <a
                        href=""
                        className={`${
                          scrolling
                            ? " text-white bg-[#472A08] font-normal hover:bg-white hover:text-[#472A08] hover:border hover:border-[#472A08]"
                            : "border border-[#472A08] hover:bg-[#472A08]  "
                        } font-[Outfit] items-center rounded-md px-5 py-1`}
                        onClick={() => navigate(`/dashboard/${user}`)}
                      >
                        Dashboard
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Navbar;
