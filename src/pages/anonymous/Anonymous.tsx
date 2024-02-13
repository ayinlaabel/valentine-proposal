import React from "react";
import { useNavigate } from "react-router-dom";

const Anonymous = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  return (
    <div className="h-screen w-screen bg-[#1C1C1C] items-center justify-center flex flex-col px-[10rem]">
      <div className="text-[#FFF] font-[400] text-[24px]">
        Hi <span className="text-[#900000] font-[700]">{name}</span>,
        <p>
          St Valentine's Day is an annual festival to celebrate romantic love,
          friendship and admiration. Every year on 14 February people celebrate
          this day by sending messages of love and affection to partners, family
          and friends.
        </p>
      </div>
      <div className="w-full mt-4">
        <button
          onClick={() => navigate("/thank-you")}
          className="py-2 px-[5rem] bg-[#F1F1F1] rounded-[5px]"
        >
          Okay
        </button>
      </div>
    </div>
  );
};
export default Anonymous;
