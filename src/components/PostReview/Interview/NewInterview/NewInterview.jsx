import React from "react";
import { InterviewTemplate2 } from "../InterviewTemplate2";
import newInterviewData from "../NewInterviewData.js";




export const NewInterview = () => {
  return (
    <div className="flex flex-col gap-10 pt-10">
      <div>
        <h1 className="text-[22px] md:text-[28px] font-600 font-semibold leading-[36px] ">
          Pick Your Interview
        </h1>
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {newInterviewData.map((data, index) => {
          return (
            <InterviewTemplate2
              key={index}
              id={data.id}
              title={data.title}
              type={data.type}
              date={data.date}
              score={data.score}
              description={data.description}
              mainIcon={data.mainIcon}
              actions={data.actions}
            />
          );
        })}
      </div>
    </div>
  );
};