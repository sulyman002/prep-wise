import React from 'react'
import background_image from "../assets/bg_image.png";
import { LogoAndProfile } from "../PostReview/LogoAndProfile/LogoAndProfile.jsx"
import pastInterviewData from "../PostReview/Interview/PastInterviewData.js"
import { InterviewTitle } from "./InterviewTitle.jsx"

export const WorkflowPage = () => {
  return (
    <div className=' flex flex-col h-auto bg-[#08090D] text-[#FFFFFF] w-full p-4 md:px-16 lg:px-20 xl:px-40 md:py-14' style={{backgroundImage: `url(${background_image})`}}>
        <LogoAndProfile />
        {pastInterviewData.slice(0, 1).map((item, index) => {
            return (
                <InterviewTitle key={index} id={item.id} mainIcon={item.mainIcon} title={item.title} date={item.date} score={item.score} type={item.type} />
            )
        }) }

        
        
    </div>
  )
}
