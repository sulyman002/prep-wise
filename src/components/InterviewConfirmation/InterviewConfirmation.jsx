import React, { useState } from "react";
import prep_logo from "../assets/prep_wise_logo.svg";
import background_image from "../assets/bg_image.png";
import upload_image from "../assets/upload_icon.svg";
import select_arrow from "../assets/select_arrow.svg";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

export const InterviewConfirmation = () => {
  const [field, setField] = useState({
    interviewType: "",
    role: "",
    focus: "",
    time: "",
    profilePicture: null,
  });

  function handleOnChange(event) {
    const { name, value, files, type } = event.target;

    setField((previousData) => ({
      ...previousData,
      [name]: type === "file" ? files[0] : value,
    }));
  }
  const [printError, setPrintError] = useState({});

  function handleError() {
    let thereIsError = {};

    if (!field.interviewType) {
      thereIsError.interviewType = "You need to select one type here";
    }
    if (!field.role.trim()) {
      thereIsError.role = "This field is required";
    }
    if (!field.focus.trim()) {
      thereIsError.focus = "This field is required";
    }
    if (!field.time) {
      thereIsError.time = "This field is required";
    }
    if (!field.profilePicture) {
      thereIsError.profilePicture = "Profile Picture is required";
    }

    return thereIsError;
  }

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const errorMessage = handleError();
    setPrintError(errorMessage);
    const { interviewType, role, focus, time, profilePicture } = field;

    if (
      (interviewType === "technical" || interviewType === "non_technical") &&
      role.length > 0 &&
      focus.length > 0 &&
      (time === "10" || time === "20" || time === "30" || time === "40") &&
      profilePicture
    ) {
      navigate("/InterviewPage", {state: {field}} );
    }

    return field;
  }
  return (
    <div
      style={{ backgroundImage: `url(${background_image})` }}
      className="border-gray-300/20 bg-[#08090D] text-[#FFFFFF] w-full h-auto flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col w-[566px] gap-4 border-[2px] border-[#4B4D4F]/20 bg-gradient-to-b from-[#1A1C20] to-[#08090D] py-10 my-10 mx-4 px-8 rounded-[20px] shadow-[#4B4D4F]/20 shadow-sm"
      >
        <div className="flex items-start justify-start gap-2 py-4">
          <img src={prep_logo} alt="" />
          <p className="font-600 font-semibold text-[32px] leading-[100%] text-[#DDDFFF]">
            PrepWise
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="font-600 font-semibold text-[24px] md:text-[28px] leading-[32px] ">
            Starting Your Interview
          </h1>
          <p className="font-400 text-[16px] md:text-[18px] text-[#DEDAFF] leading-[28px] ">
            Customize your mock interview to suit your needs.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-[8px] ">
            <label
              htmlFor="interviewType"
              className="font-400 text-[14px] md:text-[16px] leading-[24px] text-[#D6E0FF] "
            >
              What type of interview would you like to practice?
            </label>
            <div className="relative w-full ">
              <select
                onChange={handleOnChange}
                value={field.interviewType}
                name="interviewType"
                id="interviewType"
                className="bg-[#27282F] w-full h-[56px] px-4 pr-10 rounded-full text-[16px] font-semibold leading-[24px] font-600 appearance-none "
              >
                <option value="technical">Technical</option>
                <option value="non_technical">Non-Technical</option>
              </select>
              <img
                htmlFor="technical"
                src={select_arrow}
                alt=""
                className=" absolute right-8 top-1/2 -translate-y-1/2 "
              />
            </div>

            {printError && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {printError.interviewType}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="role"
              className="font-400 text-[14px] md:text-[16px] leading-[24px] text-[#D6E0FF] "
            >
              What role are you focusing on?
            </label>
            <input
              name="role"
              onChange={handleOnChange}
              value={field.role}
              type="text"
              placeholder="Select your role"
              id="role"
              className="h-[56px] pl-4 w-full bg-[#27282F] rounded-full text-[16px]  leading-[24px font-400]"
            />
            {printError && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {printError.role}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="focus"
              className="font-400 text-[14px] md:text-[16px] leading-[24px] text-[#D6E0FF] "
            >
              Which tech stack would you like to focus on?
            </label>
            <input
              name="focus"
              onChange={handleOnChange}
              value={field.focus}
              type="text"
              placeholder="Select your preferred tech stock"
              id="focus"
              className="h-[56px] pl-4 w-full bg-[#27282F] rounded-full text-[16px]  leading-[24px font-400]"
            />
            {printError && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {printError.focus}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-[8px] ">
            <label
              htmlFor="time"
              className="font-400 text-[14px] md:text-[16px] leading-[24px] text-[#D6E0FF] "
            >
              How long would you like the interview to be?
            </label>
            <div className="relative w-full ">
              <select
                name="time"
                onChange={handleOnChange}
                value={field.time}
                id="time"
                className="bg-[#27282F] w-full h-[56px] px-4 pr-10 rounded-full text-[16px] font-semibold leading-[24px] font-600 appearance-none "
              >
                <option value="10">10 minutes</option>
                <option value="20">20 minutes</option>
                <option value="30">30 minutes</option>
                <option value="40">40 minutes</option>
              </select>
              <img
                src={select_arrow}
                alt=""
                className=" absolute right-8 top-1/2 -translate-y-1/2 "
              />
            </div>
            {printError && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {printError.time}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">
              Profile Picture
            </span>
            <div className="flex items-center justify-center gap-2 bg-[#27282F] py-4 rounded-full">
              <img src={upload_image} alt="" />
              <label
                htmlFor="profilePicture"
                className=" cursor-pointer text-[#D6E0FF] text-[16px]"
              >
                Upload an image
              </label>
              <input
                onChange={handleOnChange}
                name="profilePicture"
                id="profilePicture"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
              />
            </div>
            {printError && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {printError.profilePicture}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#CAC5FE] p-4 mt-4 text-[16px] cursor-pointer leading-[24px] font-bold font-700 rounded-full text-[#020408] "
          >
            Start Interview
          </button>
        </div>
      </form>
    </div>
  );
};
