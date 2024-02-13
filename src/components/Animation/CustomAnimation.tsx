import Lottie from "lottie-react";
import React from "react";

interface Props {
  path: any;
}
const CustomAnimation = ({ path }: Props) => {
  return (
    <div className="h-full w-full">
      <Lottie animationData={path} loop={true} />
    </div>
  );
};

export default CustomAnimation;
