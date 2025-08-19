import React from "react";
import background_image from "../assets/bg_image.png";
import { LogoAndProfile } from "../PostReview/LogoAndProfile/LogoAndProfile.jsx";
import star_icon from "../assets/general/star.svg";
import calendar_icon from "../assets/general/calender.svg";

export const FeedBack = () => {
  return (
    <div
      className=" flex flex-col h-auto bg-[#08090D] text-[#FFFFFF] w-full p-4 md:px-16 lg:px-20 xl:px-40 md:py-14"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <LogoAndProfile />
      <div className="flex flex-col md:px-20 lg:px-30 xl:px-40 2xl:px-60 py-10">
        <div>
          <h1 className="font-semibold font-600 text-[40px] py-12 md:text-[48px] leading-[56px] text-center ">
            Feedback on the Interview — Frontend Developer Interview
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
            <div>
              <div className="flex items center gap-2 py-4 text-[18px] md:text-[20px]">
                <div className="flex items-center gap-2">
                  <img src={star_icon} alt="" />
                  <p className="font-400 text-[#D6E0FF]  leading-[24px]">
                    Overall Impression:{" "}
                  </p>
                </div>
                <p className="font-700 text-[20px] leading-[24px] ">
                  <b className="text-[#CAC5FE] font-bold font-700 ">12</b>
                  {"/"} 100
                </p>
              </div>
            </div>
            <div className="flex items center gap-2 py-4 text-[18px] md:text-[20px]">
              <img src={calendar_icon} alt="" />
              <p className="font-400  ">Feb 28, 2025 {"–"} 3:45 PM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="font-400 text-[16px] md:text-[18px] leading-[28px] text-[#D2DEF1] ">
            This interview does not reflect serious interest or engagement from
            the candidate. Their responses are dismissive, vague, or outright
            negative, making it difficult to assess their qualifications,
            motivation, or suitability for the role.
          </div>

          <div className="flex flex-col gap-6 ">
            <h1 className="font-600 font-semibold text-[28px] md:text-[32px] leading-[40px] ">
              Breakdown of Evaluation:
            </h1>

            <ol className="list-decimal px-4 flex flex-col gap-2">
              <li className="font-700 font-bold text-[16px] md:text-[18px] leading-[28px] ">
                Enthusiasm & Interest (0/20)
              </li>
              <ul className="list-disc px-4 gap-3 flex flex-col text-[16px] md:text-[18px] text-[#D2DEF1]">
                <li>
                  The candidate openly states, "I really don't, "when asked why
                  they want to work for the company.
                </li>
                <li>
                  Their response to future career plans ("Probably in some other
                  company") indicates a lack of commitment.
                </li>
              </ul>
              <li className="font-700 font-bold text-[16px] md:text-[18px] leading-[28px] ">
                Communication Skills (5/20)
              </li>
              <ul className="list-disc px-4 gap-3 flex flex-col text-[16px] md:text-[18px] text-[#D2DEF1]">
                <li>Responses are brief and unhelpful.</li>
                <li>
                  Some answers lack clarity (e.g., "What am I going to do in
                  this role at this role?").
                </li>
                <li>A slight redeeming factor is that they remain polite.</li>
              </ul>
              <li className="font-700 font-bold text-[16px] md:text-[18px] leading-[28px] ">
                Self-Awareness & Reflection (2/20)
              </li>
              <ul className="list-disc px-4 gap-3 flex flex-col text-[16px] md:text-[18px] text-[#D2DEF1]">
                <li>
                  The candidate refuses to discuss their background and
                  weaknesses.
                </li>
                <li>
                  They claim to have "no weaknesses at all," which suggests a
                  lack of self-awareness.
                </li>
              </ul>
            </ol>
          </div>

          <div>
            <div className="flex items-center py-6 gap-2 font-semibold font-600 text-[18px] md:text-[24px] leading-[40px] ">
              <p>Final Verdict:</p>
              <p className="text-[#FF8A8A] border-[1px] border-[#27282F] bg-[#27282F] px-[16px] rounded-full ">
                Not Recommended
              </p>
            </div>
            <div className="text-[#D2DEF1] text-[16px] md:text-[18px]">
              This candidate does not appear to be seriously considering the
              role and fails to provide meaningful responses. If this is
              reflective of their true attitude, they would not be a good fit
              for most positions.
            </div>
          </div>
          <div className="flex flex-col gap-6 py-4 md:flex-row ">
            <div
              className="flex md:w-full items-center py-3 justify-center rounded-full font-700 font-bold text-[14px] 
          md:text-[16px] leading-[24px] text-[#CAC5FE] bg-[#27282F] "
            >
              Back to dashboard
            </div>
            <div
              className="flex md:w-full items-center py-3 justify-center rounded-full font-700 font-bold text-[14px] 
          md:text-[16px] leading-[24px] bg-[#CAC5FE] text-[#27282F] "
            >
              Retake interview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
