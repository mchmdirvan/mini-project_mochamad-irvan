/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu } from "@headlessui/react";
import React, { useState, useEffect } from "react";

export default function NavbarInvitation({ weddings }) {
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
          ? "fixed w-full z-10  transition-all duration-500 bg-[#837C61]"
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
                    <a
                      href="#"
                      className={`${
                        scrolling
                          ? "text-white  hover:text-gray-200"
                          : "text-white "
                      }  `}
                    >
                      {weddings.brideFirstName} & {weddings.groomFirstName} by Weedy
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
                            ? "text-white  font-semibold"
                            : "text-white"
                        } font-[Outfit] items-center rounded-md px-3 py-2 text-base flex gap-10`}
                      >
                        <li>
                          <a href="#brideAndGroom" className=" hover:text-gray-200">
                            Bride & Groom
                          </a>
                        </li>
                        <li>
                          <a href="#wedding" className=" hover:text-gray-200">
                            Wedding
                          </a>
                        </li>
                        <li>
                          <a href="#ourMoments" className=" hover:text-gray-200">
                            Our Moments
                          </a>
                        </li>
                        <li>
                          <a href="rsvp" className=" hover:text-gray-200">
                            RSVP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className=" md:hidden">
              <div className="px-2">
                <ul className="flex flex-col gap-2 bg-white text-white font-[Outfit] font-semibold rounded-md px-3 py-5">
                  <li>
                    <a href="#brideAndGroom" className=" hover:text-gray-200">
                      Bride & Groom
                    </a>
                  </li>
                  <li>
                    <a href="#wedding" className=" hover:text-gray-200">
                      Wedding
                    </a>
                  </li>
                  <li>
                    <a href="#ourMoments" className=" hover:text-gray-200">
                      Our Moments
                    </a>
                  </li>
                  <li>
                    <a href="#rsvp" className=" hover:text-gray-200">
                      RSVP
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
