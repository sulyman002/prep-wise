import React from "react";

export const InterviewTitle = (props) => {
  return (
    <div className="flex items-center  justify-between">
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