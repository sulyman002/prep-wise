import React from "react";
import leave_interview from "../../assets/leave_interview.svg"
import repeat_interview from "../../assets/repeat_interview.svg"
import { useNavigate } from "react-router-dom";

export const WorkFlowBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pt-4">
        <div className="md:flex gap-4 items-center justify-center ">
          <div onClick={() => {
            setInterval(() => {
                navigate("/InterviewConfirmation")
            }, 2000);
            
          }} className="cursor-pointer px-16 py-4 rounded-full flex items-center justify-center gap-2 bg-[#24273A] ">
            <img src={repeat_interview} alt="" />
            <span className="font-600 font-semibold text-[18px] leading-[28px]">
              Repeat
            </span>
          </div>

          <div onClick={() => {
            navigate("/FeedBack")
          }} className="cursor-pointer mt-4 px-8 py-4 rounded-full flex items-center justify-center gap-2 bg-[#F75353] ">
            <img src={leave_interview} alt="" />
            <span className="font-600 font-semibold text-[18px] leading-[28px] ">
              Leave Interview
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
