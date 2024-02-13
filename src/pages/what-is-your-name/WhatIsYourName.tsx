import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WhatIsYourName = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (
      name.toLowerCase().includes("precious") ||
      name.toLowerCase().includes("nimee") ||
      name.toLowerCase().includes("adedosun")
    ) {
      localStorage.setItem("name", name);
      navigate(`/my-valentine`);
    } else {
      localStorage.setItem("name", name);
      navigate(`/anonymous`);
    }
  };

  return (
    <div className="h-screen bg-[#1C1C1C] w-screen">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="grid gap-4">
          <p className="text-[#FFF] text-center text-[32px]">
            What is your name?
          </p>
          <input
            placeholder="what is your name?"
            className="px-3 py-4 w-full rounded-[5px] outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-[#8A0303] w-full py-3 rounded-[5px] text-[#FFF] font-[500]"
            onClick={() => handleClick()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatIsYourName;
