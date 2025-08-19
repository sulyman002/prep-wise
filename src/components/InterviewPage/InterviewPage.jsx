import React from "react";
import background_image from "../assets/bg_image.png";
import { LogoAndProfile } from "../PostReview/LogoAndProfile/LogoAndProfile.jsx";
import pastInterviewData from "../PostReview/Interview/PastInterviewData.js";
import { InterviewTitle } from "../WorkFlow/InterviewTitle.jsx";
import { WorkFlowC } from "../WorkFlow/WorkFlowCardCom/WorkFlowC.jsx";
import { WorkFlowBtn } from "../WorkFlow/WorkFlowCardCom/WorkFlowBtn.jsx";
import { useLocation } from "react-router-dom";

export const InterviewPage = () => {
  const location = useLocation();
  const { field } = location.state || {};
  console.log(field);
  return (
    <div
      className=" flex flex-col h-auto bg-[#08090D] text-[#FFFFFF] w-full p-4 md:px-16 lg:px-20 xl:px-40 md:py-14"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <LogoAndProfile />
      {pastInterviewData.slice(0, 1).map((item, index) => {
        return (
          <InterviewTitle
            key={index}
            id={item.id}
            mainIcon={item.mainIcon}
            title={item.title}
            date={item.date}
            score={item.score[0]}
            type={item.type}
          />
        );
      })}
      <WorkFlowC />
      <div className="rounded-[10px] flex items-center justify-center py-6 bg-gradient-to-b from-[#1A1C20] to-[#0e0e1b] my-4 shadow-4xl">
        <p className="font-400 text-center text-[20px] md:text-[24px] leading-[34px]">
          What is the{" "}
          <span className="font-400 text-[20px] md:text-[24px] leading-[34px] bg-white rounded-[6px] text-black p-[5px] ">
            {" "}
           {field.role}
          </span>{" "}
          in React.js and how does it work?
        </p>
      </div>
      <WorkFlowBtn />

    </div>
  );
};
