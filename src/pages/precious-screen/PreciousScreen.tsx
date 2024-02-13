import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomAnimation from "../../components/Animation/CustomAnimation";
import { emailAnimation } from "../../assets";
import MessageModal from "../../components/modal/MessageModal";
const PreciousScreen = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const name = localStorage.getItem("name");
  const handleCloseMessage = () => {
    navigate("/thank-you");
  };
  const handleOpenMessage = () => {
    setIsOpen(true);
  };
  return (
    <div className="relative h-screen w-screen bg-[#1C1C1C] flex items-center justify-center transition-all ease-in-out duration-1000">
      <div
        className={`h-full flex items-center justify-center  px-4 transition-all ease-in-out duration-1000 ${
          isOpen ? `md:flex-row flex-col` : `flex-col`
        } `}
      >
        <div className={`h-[20rem] w-[20rem]`}>
          <CustomAnimation path={emailAnimation} />
        </div>
        <div className="flex flex-col md:justify-center ">
          <p className="text-[#FFF] text-center md:text-left text-[24px] font-[700] mb-2">
            Welcome <span className="text-[#E24767]">{name}</span>,
          </p>
          <p className="md:text-left text-center text-[#FFF] mb-2">
            you have an unread message, will you like to open it?
          </p>
          <div className=" flex flex-col ">
            <button
              className="px-3 py-2 bg-[#F1F1F1] mb-2 font-[500] rounded-[5px] hover:bg-[#E24767] hover:text-[#FFF] transition-all ease-in-out duration-1000"
              onClick={() => handleOpenMessage()}
            >
              Yes
            </button>
            <button
              className="text-[#F1F1F1] font-[600] hover:text-[#E24767] transition ease-in-out delay-300"
              onClick={() => handleCloseMessage()}
            >
              No
            </button>
          </div>
        </div>
      </div>
      <MessageModal showModal={isOpen} closeModal={setIsOpen} />
    </div>
  );
};

export default PreciousScreen;
