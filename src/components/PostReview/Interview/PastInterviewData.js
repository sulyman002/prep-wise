import calender_icon from "../../assets/general/calender.svg"
import react_icon from "../../assets/general/react.svg"
import tailwind_icon from "../../assets/general/tailwind.svg"
import star_icon from "../../assets/general/star.svg"

import frontend_image from "../../assets/past_interview/frontend_image.png"
import behavioral_interview from "../../assets/past_interview/behavioral_interview.png"
import backend from "../../assets/past_interview/backend.png"



const pastInterviewData = [
  {
    id: 1,
    title: "Frontend Dev Interview",
    type: "Technical",
    date: {
      text: "Feb 28, 2025",
      icon: calender_icon,
    },
    score: {
      text: "12/100",
      icon: star_icon,
    },
    description:
      "This interview does not reflect serious interest or engagement from the candidate. Their responses are dismissive...",
    mainIcon: frontend_image,
    actions: [react_icon, tailwind_icon],
    buttonText: "View interview",
  },
  {
    id: 2,
    title: "Behavioral Interview",
    type: "Non-Technical",
    date: {
      text: "Feb 23, 2025",
      icon: calender_icon,
    },
    score: {
      text: "54/100",
      icon: star_icon,
    },
    description:
      "This interview does not reflect serious interest or engagement from the candidate. Their responses are dismissive...",
    mainIcon: behavioral_interview,
    actions: [react_icon, tailwind_icon],
    buttonText: "View interview",
  },
  {
    id: 3,
    title: "Backend Dev Interview",
    type: "Technical",
    date: {
      text: "Feb 21, 2025",
      icon: calender_icon,
    },
    score: {
      text: "94/100",
      icon: star_icon,
    },
    description:
      "This interview does not reflect serious interest or engagement from the candidate. Their responses are dismissive...",
    mainIcon: backend,
    actions: [react_icon, tailwind_icon],
    buttonText: "View interview",
  },
];

export default pastInterviewData;