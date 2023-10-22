/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.webp";

function Navbar() {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);

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
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden md:hidden">
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
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                  <div className="flex flex-shrink-0 items-center">
                    <img className=" h-20" src={Logo} alt="Your Company" />
                    <h1
                      className={`${
                        scrolling
                          ? "text-[#472A08] hover:text-[#9E7676]"
                          : "text-white hover:text-gray-400"
                      } font-[Niconne] text-5xl`}
                    >
                      weedy
                    </h1>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu
                    as="div"
                    className="relative ml-3 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                  >
                    <div className="hidden md:ml-6 sm:block">
                      <ul
                        className={`${
                          scrolling
                            ? " text-[#472A08]  font-semibold"
                            : "text-white"
                        } font-[Outfit] items-center rounded-md px-3 py-2 text-base flex gap-10`}
                      >
                        <li>
                          <a href="#" className="hover:text-[#9E7676]">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-[#9E7676]">
                            Features
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-[#9E7676]">
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-[#9E7676]">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className={`${
                              scrolling
                                ? " text-white bg-[#472A08] font-normal hover:bg-white hover:text-[#472A08] hover:border hover:border-[#472A08]"
                                : "text-white border border-white hover:bg-[#472A08] "
                            } font-[Outfit] items-center rounded-md px-5 py-1`}
                            onClick={() => navigate("/login")}
                          >
                            Sign in
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <ul>
                  <li>
                    <a
                      href="#"
                      className={`${
                        scrolling
                          ? " text-[#472A08] hover:text-[#9E7676 font-semibold"
                          : "text-white hover:text-gray-400"
                      } font-[Outfit] font-semibold block rounded-md px-3 py-2 text-base`}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${
                        scrolling
                          ? " text-[#472A08] hover:text-[#9E7676 font-semibold"
                          : "text-white hover:text-gray-400"
                      } font-[Outfit] font-semibold block rounded-md px-3 py-2 text-base`}
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${
                        scrolling
                          ? " text-[#472A08] hover:text-[#9E7676 font-semibold"
                          : "text-white hover:text-gray-400"
                      } font-[Outfit] font-semibold block rounded-md px-3 py-2 text-base`}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${
                        scrolling
                          ? " text-[#472A08] hover:text-[#9E7676 font-semibold"
                          : "text-white hover:text-gray-400"
                      } font-[Outfit] font-semibold block rounded-md px-3 py-2 text-base`}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${
                        scrolling
                          ? " text-[#472A08] hover:text-[#9E7676 font-semibold"
                          : "text-white hover:text-gray-400"
                      } font-[Outfit] font-semibold block rounded-md px-3 py-2 text-base`}
                    >
                      Sign In
                    </a>
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