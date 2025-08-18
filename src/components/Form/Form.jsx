import React, { useState } from "react";
import prep_logo from "../assets/prep_wise_logo.svg";
import background_image from "../assets/bg_image.png";
import upload_image from "../assets/upload_icon.svg";

export const Form = () => {
  const [checkInput, setCheckInput] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: "",
    resume: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCheckInput((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  const [error, setError] = useState({});

  function handleValidate() {
    let isError = {};
    if (!checkInput.name.trim()) {
      isError.name = "Name is required";
    } if (!checkInput.password.trim()) {
      isError.password = "Password is required";
    } if (checkInput.password.length < 7) {
      isError.password = "Password should be more than 7 digits";
    } if (!checkInput.email) {
      isError.email = "Email is required";
    } if (!/\S+@\S+\.\S+/.test(checkInput.email)) {
      isError.email = "Email is invalid";
    } if (!checkInput.profilePicture) {
      isError.profilePicture = "Profile Picture is required";
    } if (!checkInput.resume) {
      isError.resume = "Your RESUME must be presented";
    }
    return isError;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errorMessage = handleValidate();
    setError(errorMessage);
  }

  return (
    <div
      style={{ backgroundImage: `url(${background_image})` }}
      className="border-gray-300/40 bg-[#08090D] text-[#FFFFFF] w-full h-screen flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col w-[566px] gap-4 border-[2px] border-[#4B4D4F]/20 bg-gradient-to-b from-[#1A1C20] to-[#08090D] py-10 px-8 rounded-[20px] shadow-[#4B4D4F]/20 shadow-sm"
      >
        <div className="flex items-center justify-center gap-2 py-4">
          <img src={prep_logo} alt="" />
          <p className="font-600 font-semibold text-[32px] leading-[100%] text-[#DDDFFF]">
            PrepWise
          </p>
        </div>
        <p className="font-600 font-semibold text-[28px] leading-[32px] text-center py-7">
          Practice job interviews with AI
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">
              Full name
            </span>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Adrian Hajdin"
              className="px-4 py-4 text-[16px] leading-[24px] font-semibold rounded-full bg-[#27282F] "
            />

            {error.name && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {error.name}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">
              Email
            </span>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="adrian@jsmastery.prol"
              className="px-4 py-4 text-[16px] leading-[24px] font-semibold rounded-full bg-[#27282F] "
            />

            {error.email && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {error.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">
              Password
            </span>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Enter your password"
              className="px-4 py-4 text-[16px] leading-[24px] font-semibold rounded-full bg-[#27282F] text-[#D6E0FF] "
            />
            {error.password && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {error.password}
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
                for="fileInput"
                className=" cursor-pointer text-[#D6E0FF] text-[16px]"
              >
                Upload an image
              </label>
              <input
                name="profilePicture"
                id="fileInput"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
              />
            </div>
            {error.profilePicture && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {error.profilePicture}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">
              Resume
            </span>
            <div className="flex items-center justify-center gap-2 bg-[#27282F] py-4 rounded-full">
              <img src={upload_image} alt="" />
              <label
                for="fileInput"
                className=" cursor-pointer text-[#D6E0FF] text-[16px]"
              >
                Upload a pdf
              </label>
              <input
                name="resume"
                id="fileInput"
                type="file"
                accept="application/pdf"
                className="hidden"
              />
            </div>
            {error.resume && (
              <p className="text-red-600 text-[15px] font-semibold italic">
                {error.resume}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#CAC5FE] p-4 text-[16px] cursor-pointer leading-[24px] font-bold font-700 rounded-full text-[#020408] "
          >
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};
