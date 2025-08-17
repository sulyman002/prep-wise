import React from "react";
import prep_logo from "../../assets/prep_wise_logo.svg";
import profile_icon from "../../assets/profile_image.png"

export const LogoAndProfile = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center gap-2 py-4 cursor-pointer">
        <img src={prep_logo} alt="" />
        <p className="font-600 font-semibold text-[20px] md:text-[32px] leading-[100%] text-[#DDDFFF]">
          PrepWise
        </p>
      </div>
      <div className="h-[50px] w-[50px] rounded-full cursor-pointer">
        <img src={profile_icon} alt="" className="rounded-full h-[40px] w-[40px] md:h-[50px] md:w-[50px] "/>
      </div>
    </div>
  );
};
