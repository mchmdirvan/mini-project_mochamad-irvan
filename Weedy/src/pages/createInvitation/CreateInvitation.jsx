/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import * as z from "zod";
import "animate.css";

import { getDataFromLocalStorage } from "../../utils/localStorageFunction";
import {
  createWedding,
  getWeddings,
  updateWeddings,
  deleteWeddings,
} from "../../utils/apis/weddings/api";

import FormImage from "../../assets/dashboard-image.webp";
import { useTitle } from "../../utils/hooks/customHooks";
import ThemeFloral from "../../assets/theme-floral.webp";
import ThemeGreen from "../../assets/theme-green.webp";
import Swal from "../../utils/swal";

import { Input, TextArea, RadioGroup } from "../../components/Input";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import Table from "../../components/Table";

function CreateInvitation() {
  useTitle("Create Invitation | Weedy");

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const user = getDataFromLocalStorage("user") || "";
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedId, setSelectedId] = useState(0);
  const [weddings, setWeddings] = useState([]);
  const navigate = useNavigate();
  let weddingSchema;

  if (currentStep === 1) {
    weddingSchema = z.object({
      id: z.number().optional(),
      brideFirstName: z
        .string()
        .min(1, { message: "Bride's First Name is Required" }),
      groomFirstName: z
        .string()
        .min(1, { message: "Groom's First Name is Required" }),
      brideFullName: z
        .string()
        .min(1, { message: "Bride's Full Name is Required" }),
      groomFullName: z
        .string()
        .min(1, { message: "Groom's Full Name is Required" }),
      brideBio: z.string().min(1, { message: "Bride's Bio is Required" }),
      groomBio: z.string().min(1, { message: "Bride's Bio is Required" }),
      brideContact: z
        .string()
        .min(1, { message: "Bride's Contact is Required" }),
      groomContact: z
        .string()
        .min(1, { message: "Groom's Contact is Required" }),
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
      firstMeetStory: z
        .string()
        .min(1, { message: "First Meet Stories is Required" }),
      loveStory: z.string().min(1, { message: "Love Stories is Required" }),
      decideToMarryStory: z
        .string()
        .min(1, { message: "Decide to Marry Stories is Required" }),
    });
  } else if (currentStep === 4) {
    weddingSchema = z.object({
      scriptureQuotes: z
        .string()
        .min(1, { message: "Scripture Quotes is Required" }),
    });
  } else if (currentStep === 5) {
    weddingSchema = z.object({
      selectedTheme: z.string().min(1, { message: "Theme is Required" }),
    });
  } else if (currentStep === 6) {
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
      selectedTheme: "",
    },
  });

  useEffect(() => {
    if (weddings.length > 0) {
      const weddingData = weddings[0];
      setSelectedId(weddingData.id);
      setValue("brideFirstName", weddingData.brideFirstName);
      setValue("groomFirstName", weddingData.groomFirstName);
      setValue("brideFullName", weddingData.brideFullName);
      setValue("groomFullName", weddingData.groomFullName);
      setValue("brideBio", weddingData.brideBio);
      setValue("groomBio", weddingData.groomBio);
      setValue("brideContact", weddingData.brideContact);
      setValue("groomContact", weddingData.groomContact);
      setValue("agreementDate", weddingData.agreementDate);
      setValue("receptionDate", weddingData.receptionDate);
      setValue("agreementAddress", weddingData.agreementAddress);
      setValue("receptionAddress", weddingData.receptionAddress);
      setValue("agreementHall", weddingData.agreementHall);
      setValue("receptionHall", weddingData.receptionHall);
      setValue("agreementCity", weddingData.agreementCity);
      setValue("receptionCity", weddingData.receptionCity);
      setValue("firstMeetStory", weddingData.firstMeetStory);
      setValue("loveStory", weddingData.loveStory);
      setValue("decideToMarryStory", weddingData.decideToMarryStory);
      setValue("selectedTheme", weddingData.selectedTheme);
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
      Swal.fire({
        title: "Error",
        text: " An error occurred while fetching data. Please try again.",
        showCancelButton: false,
      });
    }
  }

  async function onSubmit() {
    const weddings = getValues();
    setWeddings(weddings);
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        await createWedding(weddings);

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
        Swal.fire({
          title: "Error",
          text: " An error occurred while submitting data. Please contact our support team for assistance.",
          showCancelButton: false,
        });
      }
    }
  }

  async function onSubmitEdit() {
    const weddings = getValues();
    setWeddings(weddings);
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        await updateWeddings({
          ...weddings,
          id: selectedId,
        });

        Swal.fire({
          title: "Success",
          text: "Well Done! Your Invitation is Updated",
          showCancelButton: false,
        });
        reset();
        fetchData();
        setSelectedId(0);
        navigate(`/dashboard/${user}`);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: " An error occurred while editting data. Please contact our support team for assistance.",
          showCancelButton: false,
        });
      }
    }
  }

  async function onClickDelete(id) {
    try {
      await deleteWeddings(id);
      Swal.fire({
        title: "Success",
        text: "Well Done! Your Invitation is Deleted",
        showCancelButton: false,
      });
      reset();
      fetchData();
      navigate(`/dashboard/${user}`);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: " An error occurred while deleting data. Please contact our support team for assistance.",
        showCancelButton: false,
      });
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
        <div className="animate__animated animate__fadeInRight drawer-content bg-white text-black ">
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
                className="bg-white block h-8 w-8 "
                aria-hidden="true"
              />
            </label>
          </div>

          {/* Pages Content */}
          <div className="flex justify-center">
            <ul className="steps lg:w-full w-[50vw] py-5 px-2 lg:py-10 lg:px-10 font-[Outfit] font-semibold">
              <li className={`step ${currentStep >= 1 ? "step-primary" : ""}`}>
                Start
              </li>
              <li className={`step ${currentStep >= 2 ? "step-primary" : ""}`}>
                Schedule
              </li>
              <li className={`step ${currentStep >= 3 ? "step-primary" : ""}`}>
                Story
              </li>
              <li className={`step ${currentStep >= 4 ? "step-primary" : ""}`}>
                Message
              </li>
              <li className={`step ${currentStep >= 5 ? "step-primary" : ""}`}>
                Theme
              </li>
              <li className={`step ${currentStep >= 6 ? "step-primary" : ""}`}>
                Finish
              </li>
            </ul>
          </div>

          <form
            className="form font-[Outfit] px-10 lg:px-32  "
            onSubmit={handleSubmit(selectedId == 0 ? onSubmit : onSubmitEdit)}
          >
            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="flex ">
                <div className="flex flex-col lg:gap-2 mt-5 lg:mt-1 items-start">
                  <h2 className=" text-2xl lg:text-4xl font-bold">
                    Let's Get Started
                  </h2>
                  <p className="lg:text-xl">
                    Fill out the form to continue your order.
                  </p>
                  <Input
                    register={register}
                    name="username"
                    type="text"
                    error={errors.username?.message}
                    className=" hidden disabled"
                  />

                  <div className="flex flex-col">
                    <p>Couple Information</p>
                    <div className="flex gap-10">
                      <div>
                        <Input
                          placeholder="Bride's First Name"
                          register={register}
                          name="brideFirstName"
                          type="text"
                          error={errors.brideFirstName?.message}
                          className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-[8rem] lg:max-w-[18rem] "
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Groom's First Name"
                          register={register}
                          name="groomFirstName"
                          type="text"
                          error={errors.groomFirstName?.message}
                          className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-[8rem] lg:max-w-[18rem]"
                        />
                      </div>
                    </div>

                    <div className="flex gap-10">
                      <div>
                        <Input
                          placeholder="Bride's Full Name"
                          register={register}
                          name="brideFullName"
                          type="text"
                          error={errors.brideFullName?.message}
                          className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-[8rem] lg:max-w-[18rem]"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Groom's Full Name"
                          register={register}
                          name="groomFullName"
                          type="text"
                          error={errors.groomFullName?.message}
                          className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-[8rem] lg:max-w-[18rem]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col mt-5 ">
                    <p>Couple Bio</p>
                    <div className="flex gap-10  ">
                      <TextArea
                        rows={3}
                        placeholder="e.g. 1st son of Mr.John & Ms.Putri"
                        register={register}
                        name="brideBio"
                        type="text"
                        error={errors.brideBio?.message}
                        className=" bg-white border rounded-md  text-[#472A08] placeholder:text-sm text-sm focus:outline-none lg:w-[20rem] max-w-[8rem] lg:max-w-[18rem] "
                      />
                      <TextArea
                        rows={3}
                        placeholder="e.g. 3rd son of Mr.Doe & Ms.Putri"
                        register={register}
                        name="groomBio"
                        type="text"
                        error={errors.groomBio?.message}
                        className="bg-white border rounded-md text-[#472A08] placeholder:text-sm text-sm focus:outline-none lg:w-[20rem] max-w-[8rem] lg:max-w-[18rem] "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:lg:mt-2">
                    <p>Couple Instagram</p>
                    <div className="flex gap-10">
                      <div>
                        <Input
                          placeholder="https://www.instagram.com/john/"
                          register={register}
                          name="brideContact"
                          type="text"
                          error={errors.brideContact?.message}
                          className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-[8rem] lg:max-w-[18rem]"
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="https://www.instagram.com/emily/"
                          register={register}
                          name="groomContact"
                          type="text"
                          error={errors.groomContact?.message}
                          className="bg-white border-b border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-[8rem] lg:max-w-[18rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-end">
                    <Button
                      type="submit"
                      label="Next"
                      className=" border-black hover:text-white "
                    />
                  </div>
                </div>
                <div>
                  <img
                    src={FormImage}
                    alt=""
                    className="h-full object-cover hidden xl:block"
                  />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="flex">
                <div className="flex flex-col lg:gap-2 lg:mt-2">
                  <h2 className="text-xl lg:text-4xl font-bold">
                    The Schedule Details
                  </h2>
                  <p className="text-sm lg:text-xl">
                    Totally OK if you're still deciding—just go with your best
                    guess.
                  </p>

                  <div className="flex flex-col mt-5 ">
                    <p className="lg:text-lg font-semibold mb-2">
                      When are you getting married?
                    </p>
                    <div className="flex flex-col lg:flex-row  gap-2 lg:gap-10">
                      <div>
                        <p>Agreement date</p>
                        <Input
                          register={register}
                          name="agreementDate"
                          type="datetime-local"
                          error={errors.agreementDate?.message}
                          className="bg-white border rounded-full px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-full lg:max-w-[18rem]"
                        />
                      </div>
                      <div>
                        <p>Reception Date</p>
                        <Input
                          register={register}
                          name="receptionDate"
                          type="datetime-local"
                          error={errors.receptionDate?.message}
                          className="bg-white border rounded-full px-5 border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-full lg:max-w-[18rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-5 ">
                    <p className="text-lg font-semibold mb-2">
                      Where are you getting married?
                    </p>
                    <div className="flex flex-col lg:flex-row lg:gap-10">
                      <div className="flex flex-col">
                        <p>Agreement Place</p>
                        <div>
                          <Input
                            placeholder="Street Name, Building, No. House"
                            register={register}
                            name="agreementAddress"
                            type="text"
                            error={errors.agreementAddress?.message}
                            className="bg-white border-b  border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-full lg:max-w-[18rem]"
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Hall"
                            register={register}
                            name="agreementHall"
                            type="text"
                            error={errors.agreementHall?.message}
                            className="bg-white border-b  border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-full lg:max-w-[18rem]"
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="City"
                            register={register}
                            name="agreementCity"
                            type="text"
                            error={errors.agreementCity?.message}
                            className="bg-white border-b  border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-full lg:max-w-[18rem]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mt-5 lg:mt-0">
                        <p>Reception Place</p>
                        <div>
                          <Input
                            placeholder="Street Name, Building, No. House"
                            register={register}
                            name="receptionAddress"
                            type="text"
                            error={errors.receptionAddress?.message}
                            className="bg-white border-b  border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-full lg:max-w-[18rem]"
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Hall"
                            register={register}
                            name="receptionHall"
                            type="text"
                            error={errors.receptionHall?.message}
                            className="bg-white border-b  border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-full lg:max-w-[18rem]"
                          />
                        </div>

                        <div>
                          <Input
                            placeholder="City"
                            register={register}
                            name="receptionCity"
                            type="text"
                            error={errors.receptionCity?.message}
                            className="bg-white border-b  border-[#472A08] text-[#472A08] placeholder:text-md focus:outline-none lg:w-[20rem] max-w-full lg:max-w-[18rem]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-5 self-end">
                    <Button
                      type="button"
                      label="Back"
                      className="bg-white border-black hover:text-white "
                      onClick={onBack}
                    />

                    <Button
                      type="submit"
                      label="Next"
                      className="bg-white border-black hover:text-white "
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="flex flex-col ">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">Couple Stories</h2>
                  <p className="text-sm">
                    Share your love story: How you first met, your journey
                    together, and the decision to marry.
                  </p>
                  <TextArea
                    register={register}
                    placeholder="Tell us your beautiful love story, starting with how you first met with your husband or wife."
                    className="bg-white rounded-xl max-w-[18rem] lg:max-w-full placeholder:text-gray-400"
                    name="firstMeetStory"
                    id="firstMeetStory"
                    cols={70}
                    rows={4}
                    error={errors.firstMeetStory?.message}
                  />
                  <TextArea
                    register={register}
                    placeholder="Then, tell us all about the incredible journey you've been on together, full of memorable moments and adventures."
                    className="bg-white rounded-xl max-w-[18rem] lg:max-w-full placeholder:text-gray-400"
                    name="loveStory"
                    id="loveStory"
                    cols={70}
                    rows={4}
                    error={errors.loveStory?.message}
                  />
                  <TextArea
                    register={register}
                    placeholder="Lastly, let us in on the special details of how you both decided to take the big step and get married."
                    className="bg-white rounded-xl max-w-[18rem] lg:max-w-full placeholder:text-gray-400"
                    name="decideToMarryStory"
                    id="decideToMarryStory"
                    cols={70}
                    rows={4}
                    error={errors.decideToMarryStory?.message}
                  />
                </div>

                <div className="flex gap-5 justify-center">
                  <Button
                    type="button"
                    label="Back"
                    className="bg-white border-black hover:text-white "
                    onClick={onBack}
                  />

                  <Button
                    type="submit"
                    label="Next"
                    className="bg-white border-black hover:text-white "
                  />
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <div className="flex flex-col  max-w-xl ">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">Quotes Message</h2>
                  <p className="text-sm max-w-xl">
                    You can add a meaningful message from your holy book,
                    whether it's from the Quran or other religious texts.
                  </p>
                  <TextArea
                    register={register}
                    className=" bg-white rounded-xl max-w-[18rem] lg:max-w-full"
                    name="scriptureQuotes"
                    id="scriptureQuotes"
                    cols={70}
                    rows={14}
                    error={errors.scriptureQuotes?.message}
                  />
                </div>

                <div className="flex gap-5 self-end">
                  <Button
                    type="button"
                    label="Back"
                    className="bg-white border-black hover:text-white "
                    onClick={onBack}
                  />

                  <Button
                    type="submit"
                    label="Next"
                    className="bg-white border-black hover:text-white "
                  />
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="flex flex-col  max-w-xl ">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">Select Your Themes</h2>
                  <p className="text-sm max-w-xl">
                    We offer a variety of themes that might be suitable for your
                    needs.
                  </p>
                </div>

                <div className="flex gap-10 mt-2">
                  <div className="flex flex-col gap-2 border-2 border-black rounded-xl">
                    <img
                      src={ThemeFloral}
                      className="lg:w-[15vw] rounded-t-lg"
                    />
                    <p className=" font-outfit font-bold text-2xl text-center">
                      Floral
                    </p>
                    <div className="flex justify-center gap-2">
                      <div className="px-4 py-4 bg-[#C9AD91] rounded-full"></div>
                      <div className="px-4 py-4 bg-[#9F6F53] rounded-full"></div>
                      <div className="px-4 py-4 bg-[#837C61] rounded-full"></div>
                    </div>
                    <div className="flex justify-center pb-5">
                      <RadioGroup
                        name="selectedTheme"
                        options={["floral-theme"]}
                        register={register}
                        error={errors.selectedTheme?.message}
                        className=" radio-secondary text-secondary text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-2 border-black rounded-xl">
                    <img
                      src={ThemeGreen}
                      className="lg:w-[15vw] rounded-t-lg"
                    />
                    <p className=" font-outfit font-bold text-2xl text-center">
                      Green
                    </p>
                    <div className="flex justify-center gap-2">
                      <div className="px-4 py-4 bg-[#C9AD91] rounded-full"></div>
                      <div className="px-4 py-4 bg-[#666D4B] rounded-full"></div>
                      <div className="px-4 py-4 bg-[#C2C5AA] rounded-full"></div>
                    </div>
                    <div className="flex justify-center pb-5">
                      <RadioGroup
                        name="selectedTheme"
                        options={["green-theme"]}
                        register={register}
                        error={errors.selectedTheme?.message}
                        className=" radio-secondary text-secondary text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-5 self-end">
                  <Button
                    type="button"
                    label="Back"
                    className="bg-white border-black hover:text-white "
                    onClick={onBack}
                  />

                  <Button
                    type="submit"
                    label="Next"
                    className="bg-white border-black hover:text-white "
                  />
                </div>
              </div>
            )}

            {/* STEP 6 */}
            {currentStep === 6 && (
              <div className="flex flex-col">
                <div className="flex flex-col gap-2 items-center ">
                  <h2 className="text-2xl lg:text-4xl font-bold  ">
                    Review Your Input
                  </h2>
                  <p className="lg:text-lg mb-5">
                    Please review the data you've entered
                  </p>
                  <Table formValues={weddings} />
                </div>

                <div className="flex flex-col gap-1 mb-10">
                  <Button
                    type="submit"
                    label="Submit"
                    className="bg-white border-black hover:text-white "
                    disabled={isSubmitting}
                  />
                  <div className="flex flex-row gap-2">
                    <Button
                      type="button"
                      label="Edit"
                      className="bg-white border-black hover:text-white w-full "
                      onClick={onBack}
                    />

                    {selectedId == 0 ? (
                      ""
                    ) : (
                      <Button
                        type="button"
                        label="Delete"
                        className="bg-white border-black hover:text-white w-full "
                        onClick={() => onClickDelete(selectedId)}
                      />
                    )}
                  </div>
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
