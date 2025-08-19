import React from "react";
import { useNavigate } from "react-router-dom";

export const InterviewTemplate2 = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-6 gap-6 border-[2px] rounded-[16px] bg-gradient-to-b from-[#1A1C20] to-[#08090D] border-gray-300/40 ">
      <div className="h-[80px] w-[80px] md:h-[90px] md:w-[90px] rounded-full py-2 ">
        <img
          src={props.mainIcon}
          alt=""
          className="h-[80x] w-[80px] md:h-[90px] md:w-[90px] rounded-full "
        />
      </div>
      <div>
        <div className="flex flex-col gap-2 justify-start">
          <h1 className="font-600 font-semibold text-[20px] md:text-[24px] leading-[36px] text-white">
            {props.title}
          </h1>
          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2">
              <img src={props.date.icon} alt="" />
              <span className="text-[#D6E0FF] ">{props.date.text}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={props.score.icon} alt="" />
              <span className="text-[#D6E0FF] ">{props.score.text}</span>
            </div>
          </div>
        </div>
        <p className="text-[#D6E0FF] py-4 text-[12px] mb-8 md:text-[16px] font-400 leading-[24px] ">
          {props.description}
        </p>
        <hr className="text-gray-600/60" />
        <div className="flex items-center justify-between py-4 pb-2">
          <div className="flex items-center">
            <div className="cursor-pointer h-[32px] w-[32px] md:h-[39px] md:w-[39px] border-[1px] border-[#242633] flex items-center justify-center rounded-full">
              <img src={props.actions[0]} alt="" />
            </div>
            <div className="cursor-pointer h-[32px] w-[32px] md:h-[39px] md:w-[39px] border-[1px] border-[#242633] flex items-center justify-center rounded-full">
              <img src={props.actions[1]} alt="" />
            </div>
          </div>
          <button
            onClick={() => {
              navigate(`/WorkflowPage/${props.id}`);
            }}
            className="py-[16px] cursor-pointer md:py-[14px] px-[20px] md:px-[32px] bg-[#CAC5FE] rounded-full font-semibold text-black"
          >
            View Interview
          </button>
        </div>
      </div>
    </div>
  );
};
