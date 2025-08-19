import React from "react";

export const InterviewTitle = (props) => {
  return (
    <div className="flex items-center  justify-between py-8">
      <div className="flex md:items-center md:flex-row flex-col gap-2">
        <div className="">
          <img
            src={props.mainIcon}
            alt=""
            className="h-[40x] w-[40px] md:h-[50px] md:w-[50px] rounded-full "
          />
        </div>
        <h1 className="font-600 font-semibold text-[20px] md:text-[24px] leading-[36px] text-white">
          {props.title}
        </h1>
       <div className="flex items-center">
            <div className="cursor-pointer h-[32px] w-[32px] md:h-[39px] md:w-[39px] border-[1px] border-[#242633] flex items-center justify-center rounded-full">
              <img src={props.actions} alt="" />
            </div>
            <div className="cursor-pointer h-[32px] w-[32px] md:h-[39px] md:w-[39px] border-[1px] border-[#242633] flex items-center justify-center rounded-full">
              <img src={props.actions} alt="" />
            </div>
            
          </div>
      </div>
      <div className="px-4 py-2 font-500 text-[18px] leading-[24px] text-white bg-[#24273A] ">
        {props.type}
      </div>
    </div>
  );
};



{/* <div className="flex items-center  ">
      <div>
        <div className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full py-2 ">
          <img
            src={props.mainIcon}
            alt=""
            className="h-[80x] w-[80px] md:h-[90px] md:w-[90px] rounded-full "
          />
        </div>
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
      <div className="px-4 py-2 font-500 text-[18px] leading-[24px] text-white bg-[#24273A] ">
        {props.type}
      </div>
    </div> */}