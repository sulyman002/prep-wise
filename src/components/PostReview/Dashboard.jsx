import React from 'react'
import background_image from "../assets/bg_image.png";
import { LogoAndProfile } from "../PostReview/LogoAndProfile/LogoAndProfile.jsx";
import { Banner } from "./Banner/Banner.jsx"
import { PastInterview } from "../PostReview/Interview/PastInterview/PastInterview.jsx"
import { NewInterview } from "../PostReview/Interview/NewInterview/NewInterview.jsx"



export const Dashboard = () => {
  return (
    
    <div className=' flex flex-col h-auto bg-[#08090D] text-[#FFFFFF] w-full p-4 md:px-16 lg:px-20 xl:px-40 md:py-14' style={{backgroundImage: `url(${background_image})`}}>
      <LogoAndProfile />
      <Banner />
      <PastInterview />
      <NewInterview />
    </div>
  )
}
