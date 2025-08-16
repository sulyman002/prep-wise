import React from "react";
import prep_logo from "../assets/prep_wise logo.svg";
import background_image from "../assets/bg_image.png";
import upload_image from "../assets/upload_icon.svg";

export const Form = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background_image})` }}
      className="bg-[#08090D] text-[#FFFFFF] w-full h-screen flex items-center justify-center"
    >
      <form className=" flex flex-col w-[566px] gap-4 border-[2px] border-[#4B4D4F]/20 bg-gradient-to-b from-[#1A1C20] to-[#08090D] py-10 px-8 rounded-[20px] shadow-[#4B4D4F]/20 shadow-sm">
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
              type="text"
              placeholder="Adrian Hajdin"
              className="px-4 py-4 text-[16px] leading-[24px] font-semibold rounded-full bg-[#27282F] "
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">
              Email
            </span>
            <input
              type="text"
              placeholder="adrian@jsmastery.prol"
              className="px-4 py-4 text-[16px] leading-[24px] font-semibold rounded-full bg-[#27282F] "
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">
              Password
            </span>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-4 py-4 text-[16px] leading-[24px] font-semibold rounded-full bg-[#27282F] text-[#D6E0FF] "
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">Profile Picture</span>
            <div className="flex items-center justify-center gap-2 bg-[#27282F] py-4 rounded-full">
              <img src={upload_image} alt="" />
              <label
                for="fileInput"
                className=" cursor-pointer text-[#D6E0FF] text-[16px]"
              >
                Upload an image
              </label>
              <input
                id="fileInput"
                type="file"
                accept="image/"
                className="hidden"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">Resume</span>
            <div className="flex items-center justify-center gap-2 bg-[#27282F] py-4 rounded-full">
              <img src={upload_image} alt="" />
              <label
                for="fileInput"
                className=" cursor-pointer text-[#D6E0FF] text-[16px]"
              >
                Upload a pdf
              </label>
              <input
                id="fileInput"
                type="file"
                accept="application/pdf"
                className="hidden"
              />
            </div>
          </div>

          <button className="bg-[#CAC5FE] p-4 text-[16px] cursor-pointer leading-[24px] font-bold font-700 rounded-full text-[#020408] ">Create an account</button>
        </div>
      </form>
    </div>
  );
};
