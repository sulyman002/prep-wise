import React from "react";
import prep_logo from "../assets/prep_wise_logo.svg";
import background_image from "../assets/bg_image.png";
import upload_image from "../assets/upload_icon.svg";
// import { useNavigate } from "react-router-dom";

export const InterviewConfirmation = () => {
  //   const [checkInput, setCheckInput] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     profilePicture: "",
  //     resume: "",
  //   });

  //   function handleChange(event) {
  //     const { name, value } = event.target;
  //     setCheckInput((previousData) => ({
  //       ...previousData,
  //       [name]: value,
  //     }));
  //   }

  //   const navigate = useNavigate();

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }

  return (
    <div
      style={{ backgroundImage: `url(${background_image})` }}
      className="border-gray-300/20 bg-[#08090D] text-[#FFFFFF] w-full h-auto flex items-center justify-center"
    >
      <form
        // onSubmit={handleSubmit}
        className=" flex flex-col w-[566px] gap-4 border-[2px] border-[#4B4D4F]/20 bg-gradient-to-b from-[#1A1C20] to-[#08090D] py-10 my-10 px-8 rounded-[20px] shadow-[#4B4D4F]/20 shadow-sm"
      >
        <div className="flex items-center justify-center gap-2 py-4">
          <img src={prep_logo} alt="" />
          <p className="font-600 font-semibold text-[32px] leading-[100%] text-[#DDDFFF]">
            PrepWise
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="font-600 font-semibold text-[24px] md:text-[28px] leading-[32px] ">
            Starting Your Interview
          </h1>
          <p className="font-400 text-[16px] md:text-[18px] text-[#DEDAFF] leading-[28px] ">
            Customize your mock interview to suit your needs.
          </p>
        </div>

        <div>
          <div>
            <label
              htmlFor=""
              className="font-400 text-[14px] md:text-[16px] leading-[24px] text-[#D6E0FF] "
            >
              What type of interview would you like to practice?
            </label>
            <select name="" id="">
              <option value="">Technical</option>
              <option value="">Technical</option>
              <option value="">Technical</option>
              <option value="">Technical</option>
            </select>
          </div>

          <div>
            <label htmlFor="role">What role are you focusing on?</label>
            <input type="text" placeholder="Select your role" id="role" />
          </div>

          <div>
            <label htmlFor="focus">
              Which tech stack would you like to focus on?
            </label>
            <input
              type="text"
              id="focus"
              placeholder="Select your preferred tech stock"
            />
          </div>

          <div>
            <label className="font-400 text-[14px] md:text-[16px] leading-[24px] text-[#D6E0FF] ">
              How long would you like the interview to be?
            </label>
            <select name="">
              <option value="1">10 minutes</option>
              <option value="2">10 minutes</option>
              <option value="3">10 minutes</option>
              <option value="4">10 minutes</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D6E0FF] font-400 text-[16px] leading-[24px] ">
              Profile Picture
            </span>
            <div className="flex items-center justify-center gap-2 bg-[#27282F] py-4 rounded-full">
              <img src={upload_image} alt="" />
              <label
                htmlFor="fileInput"
                className=" cursor-pointer text-[#D6E0FF] text-[16px]"
              >
                Upload an image
              </label>
              <input
                name="profilePicture"
                id="fileInput"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#CAC5FE] p-4 text-[16px] cursor-pointer leading-[24px] font-bold font-700 rounded-full text-[#020408] "
          >
            Start Interview
          </button>
        </div>
      </form>
    </div>
  );
};
