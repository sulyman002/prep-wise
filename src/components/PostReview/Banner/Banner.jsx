import React from 'react'
import banner_image from "../../assets/banner_image.png"

export const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center px-6 md:px-14 py-10 gap-16 my-8 rounded-[16px] md:rounded-[20px] bg-gradient-to-b from-[#171532] to-[#08090D] '>
        <div className='text-center md:text-start flex flex-col gap-4'>
            <h1 className='md:text-[32px] text-[20px]  font-600 font-semibold leading-[40px] '>Get Interview-Ready with AI-Powered Practice & Feedback</h1>
            <p className='font-400 text-[12px] md:text-[16px] text-[#D6E0FF]'>Practice real interview questions & get instant feedback.</p>
            <div className='flex items-center md:items-start justify-center md:justify-start py-6'>
                <button className='py-[16px] md:py-[14px] md:px-[32px] bg-[#CAC5FE] w-full md:w-auto rounded-full font-semibold text-black'>Start an Interview</button>
            </div>
        </div>
        <div>
            <img src={banner_image} alt="" />
        </div>
    </div>
  )
}
