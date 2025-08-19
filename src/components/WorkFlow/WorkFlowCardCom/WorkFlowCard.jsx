import React from "react";
import { WorkFlowC } from "./WorkFlowC.jsx";
import { WorkFlowBtn } from "./WorkFlowBtn.jsx";

export const WorkFlowCard = () => {
  return (
    <div>
      <WorkFlowC />
      <div className="rounded-[10px] flex items-center justify-center py-6 bg-gradient-to-b from-[#1A1C20] to-[#0e0e1b] my-4 shadow-4xl">
        <p className="font-400 text-center text-[20px] md:text-[24px] leading-[34px]">
          What job{" "}
          <span className="font-400 text-[20px] md:text-[24px] leading-[34px] bg-white rounded-[6px] text-black p-[5px] ">
            experience level
          </span>{" "}
          are you targeting?
        </p>
      </div>
      <WorkFlowBtn />
    </div>
  );
};
