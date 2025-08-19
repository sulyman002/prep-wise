import React from 'react'
import ai_interviewer from "../../assets/ai_interviewer.png";
import profile_image from "../../assets/profile_image.png";

export const WorkFlowC = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:grid md:grid-cols-2">
        <div className=" flex flex-col gap-6 items-center justify-center h-[400px] md:h-[450px] bg-gradient-to-b from-[#181537] to-[#0C0B16] rounded-[16px] border-[3px] border-gray-400/20 hover:border-[3px] hover:border-[#CAC5FE] ">
          <img src={ai_interviewer} alt="" className="h-[200px] w-[200px] " />
          <p className="font-600 font-semibold text-[27px] md:text-[30px] leading-[36px] text-center">
            AI Interviewer
          </p>
        </div>

        <div className=" flex flex-col gap-6 items-center justify-center h-[400px] md:h-[450px] bg-gradient-to-b from-[#181537] to-[#0C0B16] rounded-[16px] border-[3px] border-gray-400/20 hover:border-[3px] hover:border-[#CAC5FE] ">
          <img
            src={profile_image}
            alt=""
            className="h-[200px] w-[200px] rounded-full"
          />
          <p className="font-600 font-semibold text-[27px] md:text-[30px] leading-[36px] text-center">
            Adrian (You){" "}
          </p>
        </div>
      </div>
    </div>
  )
}
