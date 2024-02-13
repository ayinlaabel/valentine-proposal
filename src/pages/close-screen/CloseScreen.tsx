import React from "react";
import CustomAnimation from "../../components/Animation/CustomAnimation";
import { thankyouEmoji } from "../../assets";

const CloseScreen = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[15rem] w-[15rem] flex items-center justify-center">
          <CustomAnimation path={thankyouEmoji} />
        </div>
        <div className="z-[999]">
          <p className="text-[36px] text-[#880808] text-center font-[600]">
            Thank you for visiting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloseScreen;
