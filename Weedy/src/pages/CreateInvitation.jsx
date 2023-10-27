/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Bars3Icon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";

import { createWedding, getWeddings } from "../utils/apis/wedding-detail/api";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";
import FormImage from "../assets/dashboard-image.webp";

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

  let weddingSchema;
  if (currentStep === 1) {
    weddingSchema = z.object({
      id: z.number().optional(),
      brideName: z.string().min(1, { message: "Bride's Name is Required" }),
      groomName: z.string().min(1, { message: "Groom's Name is Required" }),
      brideBio: z.string().min(1, { message: "Bride's Bio is Required" }),
      groomBio: z.string().min(1, { message: "Groom's Bio is Required" }),
    });
  } else if (currentStep === 2) {
    weddingSchema = z.object({
      agreementAddress: z.string().min(1, { message: "Address is Required" }),
      receptionAddress: z.string().min(1, { message: "Address is Required" }),
      agreementHall: z.string().min(1, { message: "Hall is Required" }),
      receptionHall: z.string().min(1, { message: "Hall is Required" }),
      agreementCity: z.string().min(1, { message: "City is Required" }),
      receptionCity: z.string().min(1, { message: "City is Required" }),
      agreementDate: z.date().refine((date) => date !== null, {
        message: "Agreement Date is Required",
      }),
      receptionDate: z.date().refine((date) => date !== null, {
        message: "Reception Date is Required",
      }),
    });
  } else if (currentStep === 3) {
    weddingSchema = z.object({
      scriptureQuotes: z
        .number()
        .min(1, { message: "Scripture Quotes is Required" }),
    });
  }

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
              <div className="flex">
                <div className="flex flex-col gap-2 mt-10 items-start">
                  <h2 className="text-4xl font-bold">Let's Get Started</h2>
                  <p className="text-xl">
                    Fill out the form to continue your order.
                  </p>

                  <div className="flex flex-col mt-2">
                    <p>Couple Information</p>
                    <div className="flex gap-10 ">
                      <Input
                        placeholder="Bride's Name"
                        register={register}
                        name="brideName"
                        type="text"
                        error={errors.brideName?.message}
                        className="border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                      />
                      <Input
                        placeholder="Groom's Name"
                        register={register}
                        name="groomName"
                        type="text"
                        error={errors.groomName?.message}
                        className="border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mt-5 ">
                    <p>Couple Bio</p>
                    <div className="flex gap-10  ">
                      <Input
                        placeholder="e.g. 1st son of Mr.John & Ms.Putri"
                        register={register}
                        name="brideBio"
                        type="text"
                        error={errors.brideBio?.message}
                        className="border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem] "
                      />
                      <Input
                        placeholder="e.g. 3rd son of Mr.Doe & Ms.Putri"
                        register={register}
                        name="groomBio"
                        type="text"
                        error={errors.groomBio?.message}
                        className="border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem] "
                      />
                    </div>
                  </div>
                  <div className="self-end">
                    <Button
                      type="submit"
                      label="Next"
                      className="border-black "
                    />
                  </div>
                </div>
                <div>
                  <img src={FormImage} alt="" className="h-full object-cover" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="flex">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">The Schedule Details</h2>
                  <p className="text-xl">
                    Totally OK if you're still deciding—just go with your best
                    guess.
                  </p>

                  <div className="flex flex-col mt-2 ">
                    <p className="text-lg font-semibold mb-2">
                      When are you getting married?
                    </p>
                    <div className="flex gap-10">
                      <div>
                        <p>Agreement date</p>
                        <Input
                          register={register}
                          name="agreementDate"
                          type="datetime-local"
                          error={errors.agreementDate?.message}
                          className="border rounded-full px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                        />
                      </div>
                      <div>
                        <p>Reception Date</p>
                        <Input
                          register={register}
                          name="receptionDate"
                          type="datetime-local"
                          error={errors.receptionDate?.message}
                          className="border rounded-full px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 ">
                    <p className="text-lg font-semibold mb-2">
                      Where are you getting married?
                    </p>
                    <div className="flex gap-10">
                      <div>
                        <p>Agreement Place</p>
                        <Input
                          placeholder="Street Name, Building, No. House"
                          register={register}
                          name="agreementAddress"
                          type="text"
                          error={errors.agreementAddress?.message}
                          className="border-b px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                        />
                        <Input
                          placeholder="Hall"
                          register={register}
                          name="agreementHall"
                          type="text"
                          error={errors.agreementHall?.message}
                          className="border-b px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                        />
                        <Input
                          placeholder="City"
                          register={register}
                          name="agreementCity"
                          type="text"
                          error={errors.agreementCity?.message}
                          className="border-b px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                        />
                      </div>
                      <div>
                        <p>Reception Place</p>
                        <Input
                          placeholder="Street Name, Building, No. House"
                          register={register}
                          name="receptionAddress"
                          type="text"
                          error={errors.receptionAddress?.message}
                          className="border-b px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                        />

                        <Input
                          placeholder="Hall"
                          register={register}
                          name="receptionHall"
                          type="text"
                          error={errors.receptionHall?.message}
                          className="border-b px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                        />
                        <Input
                          placeholder="City"
                          register={register}
                          name="receptionCity"
                          type="text"
                          error={errors.receptionCity?.message}
                          className="border-b px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none w-[20rem]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="self-end">
                    <Button
                      type="submit"
                      label="Next"
                      className="border-black "
                    />
                  </div>
                </div>
                <div>
                  <img src={FormImage} alt="" className="h-full object-cover" />
                </div>
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
