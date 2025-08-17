import React from "react";
import { InterviewTemplate } from "../InterviewTemplate";
import pastInterviewData from "../PastInterviewData.js";

export const PastInterview = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-[22px] md:text-[28px] font-600 font-semibold leading-[36px] ">
          Your Past Interviews
        </h1>
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 pb-6">
        {pastInterviewData.map((data, index) => {
          return (
            <InterviewTemplate
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
