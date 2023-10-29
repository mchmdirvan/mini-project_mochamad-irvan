/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import * as z from "zod";

import { createWedding, getWeddings } from "../utils/apis/weddings/api";
import FormImage from "../assets/dashboard-image.webp";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import { Input, TextArea } from "../components/Form";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import Table from "../components/Table";

function CreateInvitation() {
  useTitle("Create Invitation | Weedy");

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const user = getDataFromLocalStorage("user") || "";
  const [currentStep, setCurrentStep] = useState(1);
  const [weddings, setWeddings] = useState([]);
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
  function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

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
      agreementDate: z
        .string()
        .min(1)
        .refine(
          (value) => {
            return dayjs(value).isValid() && dayjs(value).isAfter(dayjs());
          },
          {
            message: "Invalid date and time, or it should be in the future",
          }
        ),
      receptionDate: z
        .string()
        .min(1)
        .refine(
          (value) => {
            return dayjs(value).isValid() && dayjs(value).isAfter(dayjs());
          },
          {
            message: "Invalid date and time, or it should be in the future",
          }
        ),
    });
  } else if (currentStep === 3) {
    weddingSchema = z.object({
      scriptureQuotes: z
        .string()
        .min(1, { message: "Scripture Quotes is Required" }),
    });
  } else if (currentStep === 4) {
    weddingSchema = z.object({});
  }

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    getValues,
    setValue,
    register,
    reset,
  } = useForm({
    resolver: zodResolver(weddingSchema),
    defaultValues: {
      username: user,
    },
  });

  useEffect(() => {
    if (weddings.length > 0) {
      const weddingData = weddings[0];
      setValue("brideName", weddingData.brideName);
      setValue("groomName", weddingData.groomName);
      setValue("brideBio", weddingData.brideBio);
      setValue("groomBio", weddingData.groomBio);
      setValue("agreementDate", weddingData.agreementDate);
      setValue("receptionDate", weddingData.receptionDate);
      setValue("agreementAddress", weddingData.agreementAddress);
      setValue("receptionAddress", weddingData.receptionAddress);
      setValue("agreementHall", weddingData.agreementHall);
      setValue("receptionHall", weddingData.receptionHall);
      setValue("agreementCity", weddingData.agreementCity);
      setValue("receptionCity", weddingData.receptionCity);
      setValue("scriptureQuotes", weddingData.scriptureQuotes);
    }
  }, [weddings]);

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

  async function onSubmit() {
    const weddings = getValues();
    setWeddings(weddings);
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const { id } = await createWedding(weddings);
        saveDataToLocalStorage("userID", id);
        Swal.fire({
          title: "Success",
          text: "Well Done! Your Invitation is Set",
          showCancelButton: false,
        });
        reset();
        fetchData();
        setWeddings([]);
        navigate(`/dashboard/${user}`);
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
            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="flex">
                <div className="flex flex-col gap-2 mt-10 items-start">
                  <h2 className="text-4xl font-bold">Let's Get Started</h2>
                  <p className="text-xl">
                    Fill out the form to continue your order.
                  </p>
                  <Input
                    register={register}
                    name="username"
                    type="text"
                    error={errors.username?.message}
                    className=" hidden disabled"
                  />

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
                      className="border-black hover:text-white "
                    />
                  </div>
                </div>
                <div>
                  <img src={FormImage} alt="" className="h-full object-cover" />
                </div>
              </div>
            )}

            {/* STEP 2 */}
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

                  <div className="flex gap-5 self-end">
                    <Button
                      type="button"
                      label="Back"
                      className="border-black hover:text-white "
                      onClick={onBack}
                    />

                    <Button
                      type="submit"
                      label="Next"
                      className="border-black hover:text-white "
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="flex flex-col max-w-md ">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">Quotes Message</h2>
                  <p className="text-sm max-w-sm">
                    You can add a meaningful message from your holy book,
                    whether it's from the Quran or other religious texts.
                  </p>
                  <TextArea
                    register={register}
                    className=" rounded-xl"
                    name="scriptureQuotes"
                    id="scriptureQuotes"
                    cols={50}
                    rows={5}
                    error={errors.scriptureQuotes?.message}
                  />
                </div>

                <div className="flex gap-5 self-end">
                  <Button
                    type="button"
                    label="Back"
                    className="border-black hover:text-white "
                    onClick={onBack}
                  />

                  <Button
                    type="submit"
                    label="Next"
                    className="border-black hover:text-white "
                  />
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <div className="flex flex-col max-w-md ">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">Review Your Input</h2>
                  <p className="text-lg mb-5">
                    Please review the data you've entered
                  </p>
                  <Table formValues={weddings} />
                </div>

                <div className="flex gap-5 self-end">
                  <Button
                    type="button"
                    label="Edit"
                    className="border-black hover:text-white "
                    onClick={onBack}
                  />

                  <Button
                    type="submit"
                    label="Submit"
                    className="border-black hover:text-white "
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateInvitation;
