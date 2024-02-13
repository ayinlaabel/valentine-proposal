import React, { SetStateAction, useEffect, useState } from "react";
import CustomAnimation from "../Animation/CustomAnimation";
import { val } from "../../assets";

interface Props {
  showModal: boolean;
  closeModal: React.Dispatch<SetStateAction<boolean>>;
}
const MessageModal = ({ showModal, closeModal }: Props) => {
  const [animate, setAnimate] = useState<boolean>(false);

  const handleCloseModal = () => {
    closeModal(false);
  };

  useEffect(() => {
    setAnimate(showModal);
  }, [showModal]);

  if (!showModal) {
    return null;
  }
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-[#00000090] transition-all ease-in-out duration-1000">
      <div className="h-full w-full flex items-center justify-center transition-all ease-in-out duration-1000 py-5 px-5">
        <div
          className={`${
            animate
              ? `md:h-[30rem] md:w-[40rem] h-full w-full transition-all ease-in-out duration-1000`
              : `h-[0px] w-[0-px] transition-all ease-in-out duration-1000`
          } bg-[#FFF] rounded-[10px] transition-all ease-in-out duration-1000`}
        >
          {animate && (
            <div
              className={
                animate
                  ? "h-full w-full flex flex-col items-center justify-center transition-all delay-150 ease-in-out duration-1000"
                  : "hidden transition-all ease-in-out duration-1000 delay-150"
              }
            >
              <div className="h-[20rem] w-[20rem]">
                <CustomAnimation path={val} />
              </div>
              <div>
                <p className="text-[32px] text-[#900000] uppercase font-[700]">
                  Will you be My Val?
                </p>
              </div>
              <div className="grid gap-3 grid-flow-col transition-all ease-in-out duration-1000">
                <button className="bg-[#900000] text-[#FFF] px-[3rem] py-2 rounded-[5px]">
                  Yes
                </button>
                <button
                  onClick={() => handleCloseModal()}
                  className="border-[#900000] text-[#900000] border-2 rounded-[5px] hover:text-[#FFF] hover:bg-[#900000] px-[3rem] py-2 transition-all ease-in-out duration-1000"
                >
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
