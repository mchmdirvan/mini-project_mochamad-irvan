/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Bars3Icon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { createWedding, getWeddings } from "../utils/apis/wedding-detail/api";
import { weddingSchema } from "../utils/apis/wedding-detail/";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import Sidebar from "../components/Sidebar";
import { Input } from "../components/Form";
import Button from "../components/Button";

function CreateInvitation() {
  useTitle("Create Invitation | Weedy");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [weddings, setWeddings] = useState([]);

  const {
    formState: { errors },
    handleSubmit,
    getValues,
    register,
    reset,
  } = useForm({
    resolver: zodResolver(weddingSchema),
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getWeddings();
      setWeddings(result);
    } catch (error) {
      console.log(error.toString());
    }
  }

  async function onSubmit(data) {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        await createWedding(data);
        Swal.fire({
          title: "Success",
          text: "Berhasil menambahkan data",
          showCancelButton: false,
        });
        reset();
        fetchData();
      } catch (error) {
        console.log(error.toString());
      }
    }
  }

  const onBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="drawer">
        {/* Sidebar and Drawer */}

        <Sidebar />
        <div className=" drawer-content">
          <div className="flex justify-between px-10 py-5 font-[Outfit] lg:hidden items-center">
            <p className="lg:hidden text-xl">
              Dashboard |{" "}
              <Link className="font-[Niconne] text-4xl font-normal" to="/">
                weedy
              </Link>
            </p>
            <label
              htmlFor="my-drawer-2"
              className=" drawer-button lg:hidden"
              onClick={toggleDrawer}
            >
              <Bars3Icon
                className="block h-8 w-8 bg-white border"
                aria-hidden="true"
              />
            </label>
          </div>

          {/* Pages Content */}
          <ul className="steps steps-vertical lg:steps-horizontal lg:w-full lg:py-10 font-[Outfit] font-semibold">
            <li className={`step ${currentStep >= 1 ? "step-primary" : ""}`}>
              Start
            </li>
            <li className={`step ${currentStep >= 2 ? "step-primary" : ""}`}>
              Schedule
            </li>
            <li className={`step ${currentStep >= 3 ? "step-primary" : ""}`}>
              Message
            </li>
            <li className={`step ${currentStep >= 4 ? "step-primary" : ""}`}>
              Finish
            </li>
          </ul>

          <form
            className="form font-[Outfit] px-32"
            onSubmit={handleSubmit(onSubmit)}
          >
            {currentStep === 1 && (
              <div className="flex flex-col gap-2 mt-10">
                <h2 className="text-4xl font-bold">Let's Get Started</h2>
                <p className="text-xl">
                  Fill out the form to continue your order.
                </p>

                <div className="flex flex-col mt-2 ">
                  <p>Couple Information</p>
                  <div className="flex gap-10 ">
                    <Input
                      placeholder="Bride's Name"
                      register={register}
                      name="bridesName"
                      type="text"
                      error={errors.bridesName?.message}
                      className="border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                    />
                    <Input
                      placeholder="Groom's Name"
                      register={register}
                      name="groomsName"
                      type="text"
                      error={errors.groomsName?.message}
                      className="border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-5 ">
                  <p>Couple Bio</p>
                  <div className="flex gap-10 ">
                    <Input
                      placeholder="e.g. 1st son of Mr.John & Ms.Putri"
                      register={register}
                      name="bridesName"
                      type="text"
                      error={errors.bridesName?.message}
                      className="border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                    />
                    <Input
                      placeholder="e.g. 3rd son of Mr.Doe & Ms.Putri"
                      register={register}
                      name="groomsName"
                      type="text"
                      error={errors.groomsName?.message}
                      className="border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                    />
                  </div>
                </div>
                <Button type="submit" label="Next" onClick={onSubmit} />
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2>Step 2: Choose plan</h2>
                <label>Select a plan:</label>
                <Button type="button" onClick={onBack} label="Back" />
                <Button type="submit" label="Next" />
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2>Step 3: Purchase</h2>
                <Button type="submit" label="Submit" />
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2>Step 4: Receive Product</h2>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateInvitation;
