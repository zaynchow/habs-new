import React from "react";
import Image from "next/image";
import { P } from "../Typography";
import Button from "../Utils/Button";
import CloseIcon from "@mui/icons-material/Close";

const Popup = ({ setPopupVisibility }) => {
  return (
    <div className="md:w-[900px] h-[450px] bg-yellow mx-auto relative flex items-center md:flex-row flex-col">
      <div className="md:w-1/2  relative h-full bg-yellow ">
        <Image src="/gift.png" fill />
      </div>
      <div className="md:w-1/2 relative h-[450px] flex flex-col items-start justify-center pr-8">
        <h2 className="inline-block text-left mb-4">
          <span className="text-[14px]">Get Upto</span>
          <br />
          <span className="font-lora font-semibold text-[85px] leading-[90px]">
            50% OFF
          </span>
          <br />
          <span className="text-[50px] leading-[0.95]">In Commissions</span>
        </h2>
        <P>
          Become a part of Bangladesh’s first customized client reward program.
          A step towards acknowledging the valuable contributions of our
          respected clients.
        </P>
        <Button link="/contact" bgColor={"bg-blue"} arrow className="mt-6">
          Contact Us To Enroll
        </Button>
      </div>
      <CloseIcon
        className="absolute right-[8px] top-[8px] cursor-pointer"
        onClick={() => setPopupVisibility(false)}
      />
    </div>
  );
};

export default Popup;
